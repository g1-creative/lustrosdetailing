interface Reason {
  title: string
  description: string
  icon: string
}

const reasons: Reason[] = [
  {
    title: 'Elite Craftsmanship',
    description:
      'Every detail is executed with precision. We don\'t cut corners—we perfect them.',
    icon: '⭐',
  },
  {
    title: 'Marine Work Ethic',
    description:
      'Discipline, reliability, and attention to detail. Military standards applied to every vehicle.',
    icon: '🎖️',
  },
  {
    title: 'Luxury Car Expertise',
    description:
      'Specialized knowledge of high-end vehicles. We understand what makes your car special.',
    icon: '🏎️',
  },
  {
    title: '5-Star Results',
    description:
      'Consistent excellence that exceeds expectations. Your satisfaction is our mission.',
    icon: '✨',
  },
]

export default function WhyChooseLustro() {
  return (
    <section className="section-padding bg-luxury-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Lustro</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            When excellence is the standard, there's only one choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-8 bg-luxury-charcoal rounded-lg 
                         border border-gray-800 hover:border-luxury-gold 
                         transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-luxury-gold">
                {reason.title}
              </h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-luxury-charcoal/50 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🔒</div>
              <div>
                <div className="font-bold text-luxury-gold mb-1">Insured & Bonded</div>
                <div className="text-sm text-gray-400">Fully protected service</div>
              </div>
            </div>
          </div>
          
          <div className="bg-luxury-charcoal/50 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="text-3xl">⏱️</div>
              <div>
                <div className="font-bold text-luxury-gold mb-1">Flexible Scheduling</div>
                <div className="text-sm text-gray-400">Works around your schedule</div>
              </div>
            </div>
          </div>
          
          <div className="bg-luxury-charcoal/50 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="text-3xl">💎</div>
              <div>
                <div className="font-bold text-luxury-gold mb-1">Premium Products</div>
                <div className="text-sm text-gray-400">Only the finest materials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

