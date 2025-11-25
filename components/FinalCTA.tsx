'use client'

import Image from 'next/image'

export default function FinalCTA() {
  const handleBookNow = () => {
    // In a real application, this would open a booking form or modal
    // For now, we'll use a phone number or email link
    window.location.href = 'tel:+1234567890' // Replace with actual phone number
  }

  const handleGetQuote = () => {
    // In a real application, this would open a quote request form
    window.location.href = 'mailto:info@lustrodetailing.com?subject=Quote Request' // Replace with actual email
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-luxury-charcoal via-luxury-dark to-luxury-charcoal relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-luxury-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            Ready to Experience <span className="text-gradient">Elite Detailing?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up">
            Your luxury vehicle deserves nothing less than perfection.
          </p>
          <p className="text-lg text-gray-400 mb-12 animate-fade-in-up delay-200">
            Book your appointment today and see why elite vehicle owners choose Lustro.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up delay-400">
            <button
              onClick={handleBookNow}
              className="btn-primary text-lg px-12 py-6 w-full sm:w-auto shadow-2xl glow group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Now
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={handleGetQuote}
              className="btn-secondary text-lg px-12 py-6 w-full sm:w-auto shadow-2xl group"
            >
              <span className="flex items-center gap-2">
                Request a Quote
                <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-800/50">
            <div className="group text-center md:text-left transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center md:justify-start gap-2 text-luxury-gold font-bold mb-2">
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Phone
              </div>
              <a
                href="tel:+1234567890"
                className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 text-lg"
              >
                (123) 456-7890
              </a>
            </div>
            <div className="group text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-2 text-luxury-gold font-bold mb-2">
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </div>
              <a
                href="mailto:info@lustrodetailing.com"
                className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 text-lg break-all"
              >
                info@lustrodetailing.com
              </a>
            </div>
            <div className="group text-center md:text-right transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center md:justify-end gap-2 text-luxury-gold font-bold mb-2">
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Service Area
              </div>
              <div className="text-gray-300 text-lg">Greater Los Angeles</div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 cursor-default">
              <svg className="w-4 h-4 text-luxury-gold animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Insured & Bonded</span>
            </div>
            <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 cursor-default">
              <svg className="w-4 h-4 text-luxury-gold animate-pulse delay-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 cursor-default">
              <svg className="w-4 h-4 text-luxury-gold animate-pulse delay-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-800/50 text-center">
        <div className="flex flex-col items-center gap-4 mb-6">
          <Image
            src="/images/lustro-logo.png"
            alt="Lustro Premium Detailing Logo"
            width={120}
            height={38}
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Lustro Premium Detailing. All rights reserved.</p>
        <p className="mt-2 text-gray-500 text-sm">Marine-Owned & Operated | Serving Greater Los Angeles</p>
      </footer>
    </section>
  )
}

