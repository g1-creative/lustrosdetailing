interface Testimonial {
  name: string
  vehicle: string
  rating: number
  text: string
  location?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Michael R.',
    vehicle: 'Porsche 911 Turbo S',
    rating: 5,
    text: 'Absolutely flawless work. My 911 has never looked better. The ceramic coating application was perfect, and the attention to detail is unmatched. Worth every penny.',
    location: 'Beverly Hills, CA',
  },
  {
    name: 'Sarah L.',
    vehicle: 'BMW M4 Competition',
    rating: 5,
    text: 'As a perfectionist, I\'m incredibly picky. Lustro exceeded all my expectations. The paint correction removed every single swirl mark. Professional, punctual, and precise.',
    location: 'Malibu, CA',
  },
  {
    name: 'James T.',
    vehicle: 'Ferrari 488 GTB',
    rating: 5,
    text: 'The mobile service is a game-changer. They came to my office and transformed my Ferrari while I worked. The Marine background shows in the discipline and quality.',
    location: 'Santa Monica, CA',
  },
  {
    name: 'David K.',
    vehicle: 'Mercedes AMG GT',
    rating: 5,
    text: 'Best detailing service I\'ve ever used. The owner\'s military precision and commitment to excellence is evident in every aspect. My car looks showroom new.',
    location: 'Los Angeles, CA',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-luxury-charcoal">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. See what luxury vehicle owners are saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-luxury-dark p-8 rounded-lg border border-gray-800 
                         hover:border-luxury-gold transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-luxury-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-800 pt-4">
                <div className="font-bold text-white mb-1">{testimonial.name}</div>
                <div className="text-luxury-gold text-sm mb-1">{testimonial.vehicle}</div>
                {testimonial.location && (
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 mb-6">
            Join hundreds of satisfied luxury vehicle owners
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-lg px-10 py-5"
          >
            Book Your Appointment Today
          </button>
        </div>
      </div>
    </section>
  )
}

