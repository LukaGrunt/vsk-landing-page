'use client'

import { motion } from 'framer-motion'

export default function Whitepaper() {
  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border-2 border-zinc-800 hover:border-brand-orange/50 transition-all duration-500 group"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Document Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-brand-orange/20 to-orange-600/20 border border-brand-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Dive Deeper into Umbrellish
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                Explore our comprehensive whitepaper to understand the technical architecture, economic model, and vision behind the intent execution layer.
              </p>
              <a
                href="/umbrellish-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-brand-orange/40 transition-all duration-300 hover:scale-105 active:scale-95 group/btn"
              >
                <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read the Whitepaper
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
