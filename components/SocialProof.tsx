'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SocialProof() {
  const [count, setCount] = useState(8247)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-zinc-950/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Waitlist Counter */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-orange-600/5 border border-brand-orange/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-orange mb-3">
                <motion.span
                  key={count}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {count.toLocaleString()}
                </motion.span>
                +
              </div>
              <div className="text-gray-400 font-medium">Users Waiting</div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-400">Growing daily</span>
              </div>
            </div>
          </motion.div>

          {/* Total Value */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-3">
                $2.5M
              </div>
              <div className="text-gray-400 font-medium">Funding Goal</div>
              <div className="mt-4 text-sm text-gray-500">
                Community Backed
              </div>
            </div>
          </motion.div>

          {/* Protocols */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3">
                20+
              </div>
              <div className="text-gray-400 font-medium">Protocols Supported</div>
              <div className="mt-4 text-sm text-gray-500">
                DeFi Ecosystem
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800">
            <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 font-medium">
              Community Powered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
