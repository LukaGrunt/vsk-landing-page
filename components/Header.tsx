'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 lg:px-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-32 h-8 md:w-48 md:h-12">
            <Image
              src="/logo.png"
              alt="VSK - Vojaški Strelski Klub"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 md:gap-6">
            <motion.a
              href="https://www.facebook.com/profile.php?id=100089242328471"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-red transition-colors duration-200"
              aria-label="Sledite nam na Facebooku"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="w-7 h-7 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://medium.com/@strelskiklubvsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-red transition-colors duration-200"
              aria-label="Berite nas na Medium"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <svg className="w-7 h-7 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
