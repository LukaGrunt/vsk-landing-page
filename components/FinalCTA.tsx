'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL = 'strelskiklubvsk@gmail.com'

export default function FinalCTA() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section id="kontakt" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-brand-red/20 via-brand-gold/10 to-zinc-900/50 border border-brand-gold/30 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 text-center">
            {/* Header */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Stopi v stik
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Imaš vprašanja? Želiš izvedeti več o članstvu? Pišu nam - z veseljem ti odgovorimo.
            </motion.p>

            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-red text-white font-bold rounded-xl hover:bg-red-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40"
              >
                {copied ? (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kopirano!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Kopiraj email</span>
                  </>
                )}
              </button>
              <p className="text-gray-400 text-sm">
                {EMAIL}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
