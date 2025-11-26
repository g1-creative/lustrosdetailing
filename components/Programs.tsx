'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const programs = [
  {
    title: '1:1 Coaching',
    description: 'Personalized coaching tailored to your unique goals, schedule, and lifestyle. Get direct access to expert guidance and accountability.',
    details: [
      'Custom training programs',
      'Personalized nutrition plans',
      'Weekly check-ins',
      'Form corrections & technique',
      'Lifestyle optimization',
    ],
    icon: '🎯',
  },
  {
    title: 'Training Programs',
    description: 'Structured, progressive training programs designed to build strength, muscle, and performance.',
    details: [
      'Progressive overload systems',
      'Periodization planning',
      'Exercise selection & programming',
      'Volume & intensity management',
      'Recovery protocols',
    ],
    icon: '💪',
  },
  {
    title: 'Nutrition Guidance',
    description: 'Evidence-based nutrition strategies to fuel your performance and achieve your body composition goals.',
    details: [
      'Macro & calorie targets',
      'Meal timing strategies',
      'Supplement protocols',
      'Diet flexibility & adherence',
      'Body composition optimization',
    ],
    icon: '🥗',
  },
]

export default function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="programs"
      ref={ref}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gold-electric/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <span className="text-gold-electric text-sm md:text-base font-sans font-semibold tracking-[0.2em] uppercase">
              Programs
            </span>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold-electric to-transparent mt-2" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Our <span className="text-gold-electric">Programs</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-sans max-w-2xl mx-auto font-light">
            Choose the path that fits your goals
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-[550px] perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute inset-0 bg-dark-surface rounded-3xl p-8 border border-gray-800 cursor-pointer group overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                  scale: hoveredIndex === index ? 1.03 : 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                whileHover={{
                  boxShadow: '0 25px 70px rgba(255, 215, 0, 0.15)',
                }}
              >
                {/* Gradient border on hover */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-gold-electric/20 via-gold-electric/10 to-gold-electric/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                />

                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Front */}
                <motion.div
                  className="absolute inset-0 p-8 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1,
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">{program.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 font-sans leading-relaxed text-base">
                      {program.description}
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 text-gold-electric font-semibold text-sm">
                    <span>Hover to learn more</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Back */}
                <motion.div
                  className="absolute inset-0 p-8 flex flex-col justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-gold-electric mb-8">
                      {program.title}
                    </h3>
                    <ul className="space-y-4">
                      {program.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredIndex === index ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-gold-electric mt-1.5 text-lg">•</span>
                          <span className="font-sans leading-relaxed">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}
