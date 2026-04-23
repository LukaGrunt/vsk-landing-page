import { NextResponse } from 'next/server'
import { supabase, MembershipApplication } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const membershipTypeLabels: Record<string, string> = {
  mors_redni: 'MORS redni član',
  mors_druzinski: 'MORS družinski član',
  mors_upokojenec: 'MORS upokojenec',
}

const disciplineLabels: Record<string, string> = {
  ipsc: 'Dinamično IPSC',
  idpa: 'Dinamično IDPA',
  tekmovalno: 'Tekmovalno',
  rekreativno: 'Rekreativno',
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('sl-SI', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = [
      'full_name',
      'date_of_birth',
      'email',
      'phone_number',
      'address',
      'city_of_birth',
      'membership_type',
      'mors_number',
      'konfekcijska_stevilka',
      'disciplines',
      'agreed_to_statut',
      'agreed_to_gdpr',
    ]

    for (const field of requiredFields) {
      if (!body[field] && body[field] !== false) {
        return NextResponse.json(
          { error: `Manjka obvezno polje: ${field}` },
          { status: 400 }
        )
      }
    }

    // Ensure has_license is explicitly a boolean
    const hasLicense = body.has_license === true

    // Validate license fields only if user has a license
    if (hasLicense) {
      const licenseFields = ['license_type', 'license_number', 'license_issue_date', 'license_issuing_unit']
      for (const field of licenseFields) {
        if (!body[field]) {
          return NextResponse.json(
            { error: `Manjka obvezno polje: ${field}` },
            { status: 400 }
          )
        }
      }
    }

    if (!body.disciplines || body.disciplines.length === 0) {
      return NextResponse.json(
        { error: 'Izbrati morate vsaj eno disciplino.' },
        { status: 400 }
      )
    }

    if (!body.agreed_to_statut || !body.agreed_to_gdpr) {
      return NextResponse.json(
        { error: 'Potrditi morate vsa soglasja.' },
        { status: 400 }
      )
    }

    const weapons = Array.isArray(body.weapons) ? body.weapons : []
    for (let i = 0; i < weapons.length; i++) {
      const w = weapons[i]
      if (!w.vrsta_orozja || !w.model_orozja || !w.kaliber || !w.serijska_stevilka) {
        return NextResponse.json(
          { error: `Orožje ${i + 1}: izpolnite vsa polja.` },
          { status: 400 }
        )
      }
    }

    // Prepare data for Supabase
    const applicationData: Omit<MembershipApplication, 'id' | 'created_at' | 'status'> = {
      full_name: body.full_name,
      date_of_birth: body.date_of_birth,
      email: body.email,
      phone_number: body.phone_number,
      address: body.address,
      city_of_birth: body.city_of_birth,
      membership_type: body.membership_type,
      mors_number: body.mors_number,
      license_type: hasLicense ? body.license_type : 'Nima',
      license_number: hasLicense ? body.license_number : 'Nima',
      license_issue_date: hasLicense ? body.license_issue_date : null,
      license_issuing_unit: hasLicense ? body.license_issuing_unit : 'Nima',
      disciplines: body.disciplines,
      agreed_to_statut: body.agreed_to_statut,
      agreed_to_gdpr: body.agreed_to_gdpr,
      konfekcijska_stevilka: body.konfekcijska_stevilka,
      weapons: weapons.length > 0 ? weapons : null,
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('membership_applications')
      .insert([applicationData])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Napaka pri shranjevanju prijave. Poskusite znova.' },
        { status: 500 }
      )
    }

    // Send email notification
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'strelskiklubvsk@gmail.com'

    const disciplinesFormatted = body.disciplines
      .map((d: string) => disciplineLabels[d] || d)
      .join(', ')

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; color: #FF0000; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .section { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #ddd; }
    .section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .section-title { font-size: 16px; font-weight: bold; color: #8F8159; margin-bottom: 10px; }
    .field { margin-bottom: 8px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
    .disciplines { display: flex; flex-wrap: wrap; gap: 8px; }
    .discipline-tag { background: #FF0000; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; }
    .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova pristopna izjava</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.8;">VSK - Vojaški Strelski Klub</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Osebni podatki</div>
        <div class="field">
          <span class="label">Ime in priimek:</span>
          <span class="value">${body.full_name}</span>
        </div>
        <div class="field">
          <span class="label">Datum rojstva:</span>
          <span class="value">${formatDate(body.date_of_birth)}</span>
        </div>
        <div class="field">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${body.email}">${body.email}</a></span>
        </div>
        <div class="field">
          <span class="label">Naslov:</span>
          <span class="value">${body.address}</span>
        </div>
        <div class="field">
          <span class="label">Kraj rojstva:</span>
          <span class="value">${body.city_of_birth}</span>
        </div>
        <div class="field">
          <span class="label">Konfekcijska številka:</span>
          <span class="value">${body.konfekcijska_stevilka}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">MORS članstvo</div>
        <div class="field">
          <span class="label">Vrsta članstva:</span>
          <span class="value">${membershipTypeLabels[body.membership_type] || body.membership_type}</span>
        </div>
        <div class="field">
          <span class="label">MORS številka:</span>
          <span class="value">${body.mors_number}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Orožna listina</div>
        ${hasLicense ? `
        <div class="field">
          <span class="label">Vrsta orožne listine:</span>
          <span class="value">${body.license_type}</span>
        </div>
        <div class="field">
          <span class="label">Številka:</span>
          <span class="value">${body.license_number}</span>
        </div>
        <div class="field">
          <span class="label">Datum izdaje:</span>
          <span class="value">${formatDate(body.license_issue_date)}</span>
        </div>
        <div class="field">
          <span class="label">Upravna enota:</span>
          <span class="value">${body.license_issuing_unit}</span>
        </div>
        ` : `
        <div class="field">
          <span class="value" style="font-style: italic; color: #888;">Še nima orožne listine</span>
        </div>
        `}
      </div>

      ${weapons.length > 0 ? `
      <div class="section">
        <div class="section-title">Orožje</div>
        ${weapons.map((w: { vrsta_orozja: string; model_orozja: string; kaliber: string; serijska_stevilka: string }, i: number) => `
        <div class="field" style="margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid #eee;">
          <strong>Orožje ${i + 1}:</strong> ${w.vrsta_orozja} — ${w.model_orozja}, ${w.kaliber}, SN: ${w.serijska_stevilka}
        </div>
        `).join('')}
      </div>
      ` : ''}

      <div class="section">
        <div class="section-title">Discipline</div>
        <p>${disciplinesFormatted}</p>
      </div>

      <div class="section">
        <div class="section-title">Soglasja</div>
        <div class="field">
          <span class="label">Statut kluba:</span>
          <span class="value">${body.agreed_to_statut ? 'Da' : 'Ne'}</span>
        </div>
        <div class="field">
          <span class="label">GDPR soglasje:</span>
          <span class="value">${body.agreed_to_gdpr ? 'Da' : 'Ne'}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Prijava je bila oddana dne ${new Date().toLocaleDateString('sl-SI', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}</p>
      <p>ID prijave: ${data?.id || 'N/A'}</p>
    </div>
  </div>
</body>
</html>
`

    try {
      await resend.emails.send({
        from: 'VSK Pristopna Izjava <onboarding@resend.dev>',
        to: notificationEmail,
        subject: `Nova pristopna izjava: ${body.full_name}`,
        html: emailHtml,
      })
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error('Email sending error:', emailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Prijava uspešno oddana.',
      id: data?.id,
    })
  } catch (error) {
    console.error('Request error:', error)
    return NextResponse.json(
      { error: 'Prišlo je do napake. Poskusite znova.' },
      { status: 500 }
    )
  }
}
