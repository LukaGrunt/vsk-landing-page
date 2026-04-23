import { Metadata } from 'next'
import MembershipForm from '@/components/MembershipForm'
import Background from '@/components/Background'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pristopna izjava | VSK — Vojaški Strelski Klub',
  description: 'Izpolnite pristopno izjavo za članstvo v Vojaškem Strelskem Klubu.',
}

export default function PristopnaIzjavaPage() {
  return (
    <>
      <Background />
      <main className="relative min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 bg-black/50 backdrop-blur-md border-b border-zinc-800/50">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-lg hover:text-brand-gold transition-colors">
              ← Nazaj na domov
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pristopna izjava
              </h1>
              <p className="text-xl text-gray-400">
                Izpolnite spodnji obrazec za prijavo v Vojaški Strelski Klub
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
              <MembershipForm />
            </div>

            {/* Info Note */}
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>
                Po oddaji prijave vas bomo kontaktirali na navedeni email naslov.
              </p>
              <p className="mt-2">
                Za vprašanja pišite na{' '}
                <a href="mailto:strelskiklubvsk@gmail.com" className="text-brand-gold hover:underline">
                  strelskiklubvsk@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
