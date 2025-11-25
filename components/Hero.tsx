'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-charcoal to-luxury-dark opacity-90 z-0"></div>
      
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/porshe.png"
          alt="Luxury Porsche vehicle"
          fill
          className="object-cover scale-110"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/60 via-luxury-dark/80 to-luxury-dark"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient inline-block hover:scale-105 transition-transform duration-300">
              Elite Detailing
            </span>
            <br />
            <span className="text-white inline-block hover:text-luxury-gold transition-colors duration-300">
              For Luxury Vehicles
            </span>
          </h1>
        </div>
        
        <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Mobile premium detailing services that bring showroom-quality results
          directly to your door. Precision, passion, and perfection.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-10 py-5 group relative z-10"
          >
            <span className="relative z-10">Book Your Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </button>
          <button
            onClick={scrollToServices}
            className="btn-secondary text-lg px-10 py-5 group"
          >
            View Services
            <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Trust Badge */}
        <div className={`mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 cursor-default">
            <svg className="w-5 h-5 text-luxury-gold animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 cursor-default">
            <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Marine-Owned</span>
          </div>
          <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 cursor-default">
            <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.557 1.04l1.54 6.5a1 1 0 01-.285 1.05A3.967 3.967 0 009 18a3.967 3.967 0 00-2.658.92 1 1 0 01-.285-1.05l1.54-6.5a1 1 0 00-.557-1.04l-1.94-.831a.999.999 0 01-.356-.257l-4-1.714a1 1 0 11.788-1.838l4 1.714a.999.999 0 01.356.257l7 3a1 1 0 000-1.84l-7-3z" />
            </svg>
            <span>Premium Quality</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="p-3 rounded-full border-2 border-luxury-gold/30 hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300 cursor-pointer">
          <svg
            className="w-6 h-6 text-luxury-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

