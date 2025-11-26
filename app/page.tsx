'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import SocialProof from '@/components/SocialProof'
import Discounts from '@/components/Discounts'
import FinalCTA from '@/components/FinalCTA'
import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  const handleLoadingComplete = () => {
    setLoadingComplete(true)
  }

  if (!loadingComplete) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <SocialProof />
      <Discounts />
      <div id="cta">
        <FinalCTA />
      </div>
    </main>
  )
}

