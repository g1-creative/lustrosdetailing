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
  const [showLoading, setShowLoading] = useState(false)
  const [loadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    // Check if loading screen has been shown before
    const hasSeenLoading = localStorage.getItem('hasSeenLoading')
    
    if (!hasSeenLoading) {
      setShowLoading(true)
    } else {
      setLoadingComplete(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    localStorage.setItem('hasSeenLoading', 'true')
    setShowLoading(false)
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

