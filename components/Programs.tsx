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
        staggerChildren: 0.2,
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
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-gold-electric">Programs</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans">
            Choose the path that fits your goals
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-[500px] perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute inset-0 bg-dark-surface rounded-2xl p-8 border border-gray-800 cursor-pointer group overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                whileHover={{
                  boxShadow: '0 20px 60px rgba(255, 215, 0, 0.2)',
                }}
              >
                {/* Animated gradient border on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))',
                  }}
                  transition={{ duration: 0.3 }}
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
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <div className="text-gold-electric font-semibold">
                    Hover to learn more →
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
                  <h3 className="text-2xl font-display font-bold text-gold-electric mb-6">
                    {program.title}
                  </h3>
                  <ul className="space-y-3">
                    {program.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-electric mt-1">•</span>
                        <span className="font-sans">{detail}</span>
                      </li>
                    ))}
                  </ul>
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

