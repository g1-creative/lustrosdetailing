'use client'

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
    <section id="contact" className="section-padding bg-gradient-to-b from-luxury-charcoal to-luxury-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Experience <span className="text-gradient">Elite Detailing?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Your luxury vehicle deserves nothing less than perfection.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Book your appointment today and see why elite vehicle owners choose Lustro.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={handleBookNow}
              className="btn-primary text-lg px-12 py-6 w-full sm:w-auto"
            >
              Book Now
            </button>
            <button
              onClick={handleGetQuote}
              className="btn-secondary text-lg px-12 py-6 w-full sm:w-auto"
            >
              Request a Quote
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-800">
            <div>
              <div className="text-luxury-gold font-bold mb-2">Phone</div>
              <a
                href="tel:+1234567890"
                className="text-gray-300 hover:text-luxury-gold transition-colors"
              >
                (123) 456-7890
              </a>
            </div>
            <div>
              <div className="text-luxury-gold font-bold mb-2">Email</div>
              <a
                href="mailto:info@lustrodetailing.com"
                className="text-gray-300 hover:text-luxury-gold transition-colors"
              >
                info@lustrodetailing.com
              </a>
            </div>
            <div>
              <div className="text-luxury-gold font-bold mb-2">Service Area</div>
              <div className="text-gray-300">Greater Los Angeles</div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Insured & Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lustro Premium Detailing. All rights reserved.</p>
        <p className="mt-2">Marine-Owned & Operated | Serving Greater Los Angeles</p>
      </footer>
    </section>
  )
}

