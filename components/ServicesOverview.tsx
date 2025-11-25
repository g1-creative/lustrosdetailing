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
              className="bg-luxury-charcoal rounded-lg p-8 border border-gray-800 
                         hover:border-luxury-gold transition-all duration-300 
                         transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-luxury-gold">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400">
                    <svg
                      className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
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

