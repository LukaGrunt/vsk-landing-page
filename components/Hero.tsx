'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToMembership = () => {
    const membershipSection = document.getElementById('kako-postati-clan')
    if (membershipSection) {
      membershipSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="relative flex items-center min-h-screen px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
      {/* Hero Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(/hero-image.jpg?v=${Date.now()})`
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Headline */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 md:mb-12 leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="text-brand-gold mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vojaški
          </motion.div>
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strelski Klub
          </motion.div>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mb-10 md:mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Združujemo ljubitelje strelskega športa. Varno, odgovorno in profesionalno ravnanje z orožjem. IPSC, IDPA in še več.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToMembership}
          className="mb-8 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg transition-all duration-200 hover:bg-red-600 flex items-center gap-2 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Pridruži se nam</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>

        {/* Status indicators */}
        <motion.div
          className="flex items-center gap-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>IPSC</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>IDPA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Vpis: <span className="text-brand-gold">Odprt</span></span>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
