'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-2xl border-b border-luxury-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-luxury-gold hover:scale-110 transition-transform duration-300 cursor-pointer">
            <span className="inline-block hover:rotate-3 transition-transform duration-300">L</span>
            <span className="inline-block hover:-rotate-3 transition-transform duration-300">U</span>
            <span className="inline-block hover:rotate-3 transition-transform duration-300">S</span>
            <span className="inline-block hover:-rotate-3 transition-transform duration-300">T</span>
            <span className="inline-block hover:rotate-3 transition-transform duration-300">R</span>
            <span className="inline-block hover:-rotate-3 transition-transform duration-300">O</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-luxury-gold transition-all duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-luxury-gold transition-all duration-300 relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-luxury-gold transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm py-2 px-6 shadow-lg hover:shadow-luxury-gold/50"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white hover:text-luxury-gold transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-white hover:text-luxury-gold transition-colors py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-luxury-gold transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full text-sm py-2 px-6"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

