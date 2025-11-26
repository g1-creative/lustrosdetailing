'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { label: 'Followers', value: 4010, suffix: '', icon: '👥' },
  { label: 'Posts', value: 18, suffix: '', icon: '📸' },
  { label: 'Following', value: 2115, suffix: '', icon: '🤝' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [counters, setCounters] = useState([0, 0, 0])

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let currentStep = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        currentStep++
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.min(
            Math.floor(increment * currentStep),
            stat.value
          )
          return newCounters
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = stat.value
            return newCounters
          })
        }
      }, interval)
    })
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      ref={ref}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-soft via-black to-dark-soft relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,215,0,0.15)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

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
              Community
            </span>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold-electric to-transparent mt-2" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Join the <span className="text-gold-electric">Movement</span>
          </h2>
          <motion.a
            href="https://instagram.com/mikeyyongbi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl text-gold-electric hover:text-yellow-300 transition-colors font-sans group"
            whileHover={{ scale: 1.05 }}
          >
            <span>@mikeyyongbi</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-10 bg-dark-surface/80 backdrop-blur-sm rounded-3xl border border-gray-800 group hover:border-gold-electric/40 transition-all duration-500 relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold-electric/10 via-gold-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold-electric/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-6">{stat.icon}</div>

                {/* Number */}
                <motion.div
                  className="text-5xl md:text-6xl font-display font-bold text-gold-electric mb-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.15,
                    type: 'spring' as const,
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  {counters[index].toLocaleString()}
                  {stat.suffix}
                </motion.div>

                {/* Label */}
                <div className="text-lg text-gray-400 font-sans uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
