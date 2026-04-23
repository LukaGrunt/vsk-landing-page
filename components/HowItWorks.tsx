'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Pristopna izjava',
    description: 'Izpolni pristopno izjavo in naredi prvi korak k članstvu. Vnesi točne podatke in preveri, da so pravilni. Brez pravilno izpolnjene izjave postopka ni mogoče nadaljevati.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Preverjanje pogojev',
    description: 'Po prejemu izjave preverimo izpolnjevanje pogojev v sodelovanju z MORS. O rezultatu preverjanja te obvestimo v najkrajšem možnem času.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Plačilo članarine',
    description: 'Po uspešnem preverjanju prejmeš podatke za plačilo članarine. Z evidentiranim plačilom je tvoje članstvo uradno potrjeno.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Postaneš član VSK',
    description: 'Pridobiš dostop do aplikacije VSK Planner, kjer se prijavljaš na treninge, tekmovanja in spremljaš aktivnosti kluba. Dobrodošel med člani.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="kako-postati-clan" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Kako postati član?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            V štirih jasnih korakih do članstva v Vojaškem Strelskem Klubu.
          </p>

          {/* MORS Warning Notice */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-gold/10 border border-brand-gold/30 rounded-xl">
            <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-brand-gold text-sm md:text-base">
              Včlanijo se lahko le pripadniki MORS, njihovi družinski člani ali upokojeni pripadniki MORS.
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" style={{ top: '80px' }} />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Card */}
                <div className="relative group">
                  {/* Number badge */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-gold to-yellow-700 flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-brand-gold/20 group-hover:shadow-brand-gold/40 transition-shadow duration-300">
                        {step.number}
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full bg-brand-gold opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="text-brand-gold group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-8 text-brand-gold/40">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/pristopna-izjava"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-red-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Izpolni pristopno izjavo</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
