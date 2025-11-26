import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import VideoShowcase from '@/components/VideoShowcase'
import SocialProof from '@/components/SocialProof'
import Discounts from '@/components/Discounts'
import FinalCTA from '@/components/FinalCTA'
import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <VideoShowcase />
      <Programs />
      <SocialProof />
      <Discounts />
      <div id="cta">
        <FinalCTA />
      </div>
    </main>
  )
}

