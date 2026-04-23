'use client'

import { motion } from 'framer-motion'

export default function MobileShowcase() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-transparent">
      {/* Phone mockups - absolute positioned on desktop, hidden on mobile */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-right bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(/mobile-showcase.png?v=${Date.now()})`
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          {/* Text Content - Left side on desktop */}
          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8"
            >
              VSK Planner APP
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Vse klubske aktivnosti na enem mestu. Prijave na treninge, tekmovanja, obvestila in še več - vse v žepu.
            </motion.p>
          </div>

          {/* Phone mockups - Below text on mobile, spacer on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden w-full flex justify-center"
          >
            <img
              src={`/mobile-showcase.png?v=${Date.now()}`}
              alt="VSK Planner aplikacija"
              className="w-full max-w-lg"
            />
          </motion.div>

          {/* Spacer for desktop to push text left */}
          <div className="hidden md:block flex-1" />
        </div>
      </div>
    </section>
  )
}
