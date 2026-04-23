'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PartnerSection() {
  return (
    <section className="relative">
      {/* Links above banner */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 py-6 px-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://www.slovenskavojska.si/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Image
            src="/slovenska-vojska-logo.png"
            alt="Slovenska vojska"
            width={24}
            height={24}
            className="w-5 h-5 object-contain"
          />
          <span>Slovenska vojska</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <a
          href="https://postanivojak.si/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Image
            src="/postani-vojak-logo.png"
            alt="Postani vojak"
            width={24}
            height={24}
            className="w-5 h-5 object-contain"
          />
          <span>Postani vojak</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <a
          href="https://zsc.si/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Image
            src="/zsc-logo.png"
            alt="ZSC"
            width={24}
            height={24}
            className="w-5 h-5 object-contain"
          />
          <span>ZSC</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>

      {/* Full-width Banner */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src="/slovenska-vojska-banner.png"
          alt="Slovenska Vojska"
          width={2940}
          height={504}
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  )
}
