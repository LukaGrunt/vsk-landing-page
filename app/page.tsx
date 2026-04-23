'use client'

import Background from '@/components/Background'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import IntentDemo from '@/components/IntentDemo'
import MobileShowcase from '@/components/MobileShowcase'
import PartnerSection from '@/components/PartnerSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <IntentDemo />
      <Features />
      <HowItWorks />
      <MobileShowcase />
      <FinalCTA />
      <PartnerSection />
      <Footer />
      <BackToTop />
    </>
  )
}
