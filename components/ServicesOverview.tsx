'use client'

interface Service {
  title: string
  description: string
  benefits: string[]
  icon: string
}

const services: Service[] = [
  {
    title: 'Mobile Detailing',
    description:
      'Premium detailing services delivered directly to your location. No need to leave your home or office.',
    benefits: [
      'Convenience at your doorstep',
      'Time-saving solution',
      'Professional-grade equipment',
      'Flexible scheduling',
    ],
    icon: '🚗',
  },
  {
    title: 'Ceramic Coating',
    description:
      'Long-lasting protection that enhances your vehicle\'s gloss and shields against environmental damage.',
    benefits: [
      '9H hardness protection',
      'Hydrophobic surface',
      'UV ray protection',
      'Maintains resale value',
    ],
    icon: '✨',
  },
  {
    title: 'Paint Correction',
    description:
      'Eliminate swirls, scratches, and imperfections to restore your vehicle\'s showroom finish.',
    benefits: [
      'Mirror-like finish',
      'Removes all imperfections',
      'Professional-grade compounds',
      'Enhanced depth and clarity',
    ],
    icon: '🔧',
  },
]

export default function ServicesOverview() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-luxury-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Services for <span className="text-gradient">Elite Vehicles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every service is executed with military precision and an unwavering 
            commitment to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-luxury-charcoal rounded-xl p-8 border border-gray-800 
                         hover:border-luxury-gold transition-all duration-500 
                         card-hover-effect overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/0 via-luxury-gold/5 to-luxury-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-luxury-gold group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">{service.description}</p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 group-hover:text-gray-200 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                      <svg
                        className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-luxury-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-10 py-5"
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}

