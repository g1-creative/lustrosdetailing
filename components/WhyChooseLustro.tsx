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
              className="group text-center p-8 bg-luxury-charcoal rounded-xl 
                         border border-gray-800 hover:border-luxury-gold 
                         card-hover-effect relative overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/0 via-luxury-gold/5 to-luxury-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 inline-block transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 floating">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-luxury-gold group-hover:text-white transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group glass-effect p-6 rounded-xl border border-gray-800 hover:border-luxury-gold transition-all duration-500 card-hover-effect">
            <div className="flex items-center gap-4">
              <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">🔒</div>
              <div>
                <div className="font-bold text-luxury-gold group-hover:text-white mb-1 transition-colors duration-300">Insured & Bonded</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Fully protected service</div>
              </div>
            </div>
          </div>
          
          <div className="group glass-effect p-6 rounded-xl border border-gray-800 hover:border-luxury-gold transition-all duration-500 card-hover-effect">
            <div className="flex items-center gap-4">
              <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">⏱️</div>
              <div>
                <div className="font-bold text-luxury-gold group-hover:text-white mb-1 transition-colors duration-300">Flexible Scheduling</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Works around your schedule</div>
              </div>
            </div>
          </div>
          
          <div className="group glass-effect p-6 rounded-xl border border-gray-800 hover:border-luxury-gold transition-all duration-500 card-hover-effect">
            <div className="flex items-center gap-4">
              <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">💎</div>
              <div>
                <div className="font-bold text-luxury-gold group-hover:text-white mb-1 transition-colors duration-300">Premium Products</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Only the finest materials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

