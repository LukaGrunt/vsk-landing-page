'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Weapon = {
  vrsta_orozja: string
  model_orozja: string
  kaliber: string
  serijska_stevilka: string
}

type FormData = {
  full_name: string
  date_of_birth: string
  email: string
  phone_number: string
  address: string
  city_of_birth: string
  membership_type: string
  mors_number: string
  has_license: boolean
  license_type: string
  license_number: string
  license_issue_date: string
  license_issuing_unit: string
  disciplines: string[]
  agreed_to_statut: boolean
  agreed_to_gdpr: boolean
  konfekcijska_stevilka: string
  weapons: Weapon[]
}

const initialFormData: FormData = {
  full_name: '',
  date_of_birth: '',
  email: '',
  phone_number: '',
  address: '',
  city_of_birth: '',
  membership_type: '',
  mors_number: '',
  has_license: true,
  license_type: '',
  license_number: '',
  license_issue_date: '',
  license_issuing_unit: '',
  disciplines: [],
  agreed_to_statut: false,
  agreed_to_gdpr: false,
  konfekcijska_stevilka: '',
  weapons: [],
}

const disciplineOptions = [
  { value: 'ipsc', label: 'Dinamično IPSC' },
  { value: 'idpa', label: 'Dinamično IDPA' },
  { value: 'tekmovalno', label: 'Tekmovalno' },
  { value: 'rekreativno', label: 'Rekreativno' },
]

const membershipOptions = [
  { value: 'mors_redni', label: 'MORS redni član' },
  { value: 'mors_druzinski', label: 'MORS družinski član' },
  { value: 'mors_upokojenec', label: 'MORS upokojenec' },
]

export default function MembershipForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleDisciplineChange = (value: string) => {
    setFormData(prev => {
      const disciplines = prev.disciplines.includes(value)
        ? prev.disciplines.filter(d => d !== value)
        : [...prev.disciplines, value]
      return { ...prev, disciplines }
    })
  }

  const addWeapon = () => {
    setFormData(prev => ({
      ...prev,
      weapons: [...prev.weapons, { vrsta_orozja: '', model_orozja: '', kaliber: '', serijska_stevilka: '' }],
    }))
  }

  const removeWeapon = (index: number) => {
    setFormData(prev => ({
      ...prev,
      weapons: prev.weapons.filter((_, i) => i !== index),
    }))
  }

  const updateWeapon = (index: number, field: keyof Weapon, value: string) => {
    setFormData(prev => ({
      ...prev,
      weapons: prev.weapons.map((w, i) => i === index ? { ...w, [field]: value } : w),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Prepare data for submission - backend will handle missing license fields
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Prišlo je do napake pri oddaji.')
      }

      setSubmitStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Prišlo je do napake.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Prijava uspešno oddana!</h3>
        <p className="text-gray-400 mb-8">
          Hvala za vašo prijavo. Kontaktirali vas bomo v najkrajšem možnem času.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
          Oddaj novo prijavo
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-zinc-700 pb-2">
          Osebni podatki
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-300 mb-2">
              Ime in priimek *
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              required
              value={formData.full_name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
              placeholder="Janez Novak"
            />
          </div>

          <div>
            <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-300 mb-2">
              Datum rojstva *
            </label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              required
              value={formData.date_of_birth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
              placeholder="janez.novak@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-300 mb-2">
              Telefonska številka *
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              required
              value={formData.phone_number}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
              placeholder="+386 1 123 4567"
            />
          </div>

          <div>
            <label htmlFor="city_of_birth" className="block text-sm font-medium text-gray-300 mb-2">
              Kraj rojstva *
            </label>
            <input
              type="text"
              id="city_of_birth"
              name="city_of_birth"
              required
              value={formData.city_of_birth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
              placeholder="Ljubljana"
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
            Naslov, poštna številka in kraj *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
            placeholder="Slovenska cesta 1, 1000 Ljubljana"
          />
        </div>

        <div>
          <label htmlFor="konfekcijska_stevilka" className="block text-sm font-medium text-gray-300 mb-2">
            Konfekcijska številka (Majica) *
          </label>
          <select
            id="konfekcijska_stevilka"
            name="konfekcijska_stevilka"
            required
            value={formData.konfekcijska_stevilka}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
          >
            <option value="">— izberite —</option>
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>

      {/* MORS Membership */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-zinc-700 pb-2">
          MORS članstvo
        </h3>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Vrsta članstva *
          </label>
          <div className="space-y-3">
            {membershipOptions.map(option => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="membership_type"
                  value={option.value}
                  checked={formData.membership_type === option.value}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-brand-red bg-zinc-800 border-zinc-600 focus:ring-brand-red focus:ring-2"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="mors_number" className="block text-sm font-medium text-gray-300 mb-2">
            MORS številka * <span className="text-gray-500">(vpišite &quot;Nimam&quot; če nimate)</span>
          </label>
          <input
            type="text"
            id="mors_number"
            name="mors_number"
            required
            value={formData.mors_number}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
            placeholder="12345 ali Nimam"
          />
        </div>
      </div>

      {/* Weapon License */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-zinc-700 pb-2">
          Orožna listina
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={!formData.has_license}
            onChange={(e) => {
              const newHasLicense = !e.target.checked
              setFormData(prev => ({
                ...prev,
                has_license: newHasLicense,
                // Clear license fields when toggling "Nimam"
                license_type: newHasLicense ? prev.license_type : '',
                license_number: newHasLicense ? prev.license_number : '',
                license_issue_date: newHasLicense ? prev.license_issue_date : '',
                license_issuing_unit: newHasLicense ? prev.license_issuing_unit : '',
              }))
            }}
            className="w-5 h-5 text-brand-red bg-zinc-800 border-zinc-600 rounded focus:ring-brand-red focus:ring-2"
          />
          <span className="text-gray-300 group-hover:text-white transition-colors">
            Nimam (še nima orožne listine)
          </span>
        </label>

        {formData.has_license && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label htmlFor="license_type" className="block text-sm font-medium text-gray-300 mb-2">
                Vrsta orožne listine *
              </label>
              <input
                type="text"
                id="license_type"
                name="license_type"
                required={formData.has_license}
                value={formData.license_type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                placeholder="npr. Dovoljenje za posest orožja"
              />
            </div>

            <div>
              <label htmlFor="license_number" className="block text-sm font-medium text-gray-300 mb-2">
                Številka orožne listine *
              </label>
              <input
                type="text"
                id="license_number"
                name="license_number"
                required={formData.has_license}
                value={formData.license_number}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                placeholder="123456789"
              />
            </div>

            <div>
              <label htmlFor="license_issue_date" className="block text-sm font-medium text-gray-300 mb-2">
                Datum izdaje *
              </label>
              <input
                type="date"
                id="license_issue_date"
                name="license_issue_date"
                required={formData.has_license}
                value={formData.license_issue_date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="license_issuing_unit" className="block text-sm font-medium text-gray-300 mb-2">
                Upravna enota, ki je izdala listino *
              </label>
              <input
                type="text"
                id="license_issuing_unit"
                name="license_issuing_unit"
                required={formData.has_license}
                value={formData.license_issuing_unit}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                placeholder="UE Ljubljana"
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Weapons */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-zinc-700 pb-2">
          Orožje
        </h3>

        <AnimatePresence>
          {formData.weapons.map((weapon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative p-5 bg-zinc-800/50 border border-zinc-700 rounded-xl"
            >
              <button
                type="button"
                onClick={() => removeWeapon(index)}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-700 rounded-full transition-all"
                aria-label="Odstrani orožje"
              >
                ×
              </button>

              <p className="text-sm font-medium text-gray-400 mb-4">Orožje {index + 1}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Vrsta orožja *
                  </label>
                  <select
                    value={weapon.vrsta_orozja}
                    onChange={e => updateWeapon(index, 'vrsta_orozja', e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  >
                    <option value="">— izberite —</option>
                    <option value="Pištola">Pištola</option>
                    <option value="Puška">Puška</option>
                    <option value="Revolver">Revolver</option>
                    <option value="Pnevmatsko orožje">Pnevmatsko orožje</option>
                    <option value="Drugo">Drugo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Model orožja *
                  </label>
                  <input
                    type="text"
                    value={weapon.model_orozja}
                    onChange={e => updateWeapon(index, 'model_orozja', e.target.value)}
                    required
                    placeholder="npr. Glock 17"
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Kaliber *
                  </label>
                  <input
                    type="text"
                    value={weapon.kaliber}
                    onChange={e => updateWeapon(index, 'kaliber', e.target.value)}
                    required
                    placeholder="npr. 9mm"
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Serijska številka *
                  </label>
                  <input
                    type="text"
                    value={weapon.serijska_stevilka}
                    onChange={e => updateWeapon(index, 'serijska_stevilka', e.target.value)}
                    required
                    placeholder="npr. ABC123456"
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          type="button"
          onClick={addWeapon}
          className="flex items-center gap-2 px-5 py-3 border border-zinc-600 text-gray-300 rounded-lg hover:border-zinc-400 hover:text-white transition-all text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Dodaj orožje
        </button>
      </div>

      {/* Disciplines */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-zinc-700 pb-2">
          Discipline
        </h3>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Katere discipline vas zanimajo? * <span className="text-gray-500">(izberite vsaj eno)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {disciplineOptions.map(option => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                  formData.disciplines.includes(option.value)
                    ? 'bg-brand-red/20 border-brand-red'
                    : 'bg-zinc-800/50 border-zinc-700 hover:border-zinc-600'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.disciplines.includes(option.value)}
                  onChange={() => handleDisciplineChange(option.value)}
                  className="w-5 h-5 text-brand-red bg-zinc-800 border-zinc-600 rounded focus:ring-brand-red focus:ring-2"
                />
                <span className="text-white font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Agreements */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-zinc-700 pb-2">
          Soglasja
        </h3>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="agreed_to_statut"
              checked={formData.agreed_to_statut}
              onChange={handleInputChange}
              required
              className="w-5 h-5 mt-0.5 text-brand-red bg-zinc-800 border-zinc-600 rounded focus:ring-brand-red focus:ring-2"
            />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              Strinjam se s{' '}
              <a
                href="/statut-vsk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-white underline"
                onClick={(e) => e.stopPropagation()}
              >
                Statutom kluba
              </a>
              {' '}in pravili delovanja. *
            </span>
          </label>

          <div className="flex items-start gap-3 group">
            <input
              type="checkbox"
              name="agreed_to_gdpr"
              checked={formData.agreed_to_gdpr}
              onChange={handleInputChange}
              required
              className="w-5 h-5 mt-0.5 text-brand-red bg-zinc-800 border-zinc-600 rounded focus:ring-brand-red focus:ring-2 cursor-pointer"
            />
            <div className="text-gray-300">
              <span className="group-hover:text-white transition-colors cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, agreed_to_gdpr: !prev.agreed_to_gdpr }))}>
                Soglašam z obdelavo osebnih podatkov in uporabo fotografij za namene kluba (GDPR). *
              </span>
              <details className="mt-2 text-sm">
                <summary className="text-brand-gold hover:text-white cursor-pointer transition-colors">
                  Preberi celotno besedilo soglasja
                </summary>
                <div className="mt-3 p-4 bg-zinc-800/50 rounded-lg text-gray-400 space-y-3">
                  <p>
                    <strong className="text-white">Upravljavec osebnih podatkov:</strong> Vojaški Strelski Klub (VSK), strelskiklubvsk@gmail.com
                  </p>
                  <p>
                    <strong className="text-white">Namen obdelave:</strong> Vaši osebni podatki se zbirajo in obdelujejo za namen vodenja evidence članstva, organizacije treningov in tekmovanj, komunikacije z vami ter izpolnjevanja zakonskih obveznosti kluba.
                  </p>
                  <p>
                    <strong className="text-white">Fotografije in posnetki:</strong> Soglašam, da klub lahko fotografira in snema moje aktivnosti na treningih, tekmovanjih in drugih dogodkih kluba. Te fotografije in posnetki se lahko uporabijo za promocijske namene kluba na spletni strani, družbenih omrežjih in drugih komunikacijskih kanalih.
                  </p>
                  <p>
                    <strong className="text-white">Pravna podlaga:</strong> Obdelava osebnih podatkov temelji na vaši privolitvi (člen 6(1)(a) GDPR) in na zakoniti obveznosti kluba za vodenje evidence članstva.
                  </p>
                  <p>
                    <strong className="text-white">Hramba podatkov:</strong> Vaši osebni podatki se hranijo za čas trajanja članstva in še 5 let po prenehanju članstva zaradi morebitnih pravnih zahtevkov.
                  </p>
                  <p>
                    <strong className="text-white">Vaše pravice:</strong> Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave in prenosljivosti vaših osebnih podatkov. Privolitev lahko kadar koli prekličete brez posledic za zakonitost obdelave pred preklicem. Za uveljavljanje pravic nas kontaktirajte na strelskiklubvsk@gmail.com.
                  </p>
                  <p>
                    <strong className="text-white">Pritožba:</strong> Če menite, da je obdelava vaših osebnih podatkov v nasprotju z GDPR ali ZVOP-2, imate pravico vložiti pritožbo pri Informacijskem pooblaščencu RS (ip-rs.si).
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
        >
          {errorMessage}
        </motion.div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting || formData.disciplines.length === 0}
          className="w-full py-4 px-6 bg-brand-red text-white font-bold text-lg rounded-xl hover:bg-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-red/20"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Oddajam prijavo...
            </span>
          ) : (
            'Oddaj prijavo'
          )}
        </button>
      </div>
    </form>
  )
}
