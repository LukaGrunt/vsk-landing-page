'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Add your image filenames here - just the filename, not the full path
const CAROUSEL_IMAGES: string[] = [
  // 'image1.jpg',
  // 'image2.png',
  // 'image3.jpg',
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Don't render if no images
  if (CAROUSEL_IMAGES.length === 0) {
    return null
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
  }

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Carousel Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={`/carousel/${CAROUSEL_IMAGES[currentIndex]}`}
                alt={`Slide ${currentIndex + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Previous Button */}
          {CAROUSEL_IMAGES.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-200 flex items-center justify-center border border-white/10 hover:border-brand-orange/50"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-200 flex items-center justify-center border border-white/10 hover:border-brand-orange/50"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {CAROUSEL_IMAGES.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {CAROUSEL_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-brand-orange w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
