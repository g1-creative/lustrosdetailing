import Hero from '@/components/Hero'
import TrustSignals from '@/components/TrustSignals'
import ServicesOverview from '@/components/ServicesOverview'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import WhyChooseLustro from '@/components/WhyChooseLustro'
import Testimonials from '@/components/Testimonials'
import AboutDetailer from '@/components/AboutDetailer'
import FinalCTA from '@/components/FinalCTA'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustSignals />
      <ServicesOverview />
      <BeforeAfterGallery />
      <WhyChooseLustro />
      <Testimonials />
      <AboutDetailer />
      <FinalCTA />
    </main>
  )
}

