import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Log the email (in production, you would save this to a database or send to a mailing list service)
    console.log('New email subscription:', email)

    // TODO: Integrate with your email service provider
    // Examples:
    // - Mailchimp
    // - ConvertKit
    // - Resend
    // - Database storage

    // For now, just return success
    return NextResponse.json(
      {
        message: 'Successfully subscribed!',
        email
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
