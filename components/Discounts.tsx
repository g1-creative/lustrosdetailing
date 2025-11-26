'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Discounts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  }

  const pulseVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.15, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-dark-soft to-black relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-electric/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center space-y-10"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Badge */}
          <motion.div
            className="inline-block relative"
            variants={badgeVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gold-electric rounded-full blur-2xl"
              variants={pulseVariants}
            />
            <motion.div 
              className="relative bg-gradient-to-r from-gold-electric to-yellow-300 text-black px-10 py-5 rounded-full overflow-hidden group shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <span className="relative z-10 text-xl md:text-2xl font-display font-bold tracking-wide">
                SPECIAL DISCOUNTS
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={textVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Student, Military &{' '}
              <span className="text-gold-electric">First-Responder</span>{' '}
              Discounts
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto font-light">
              We honor those who serve. Special pricing available for students,
              active military, veterans, and first responders.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={textVariants}>
            <motion.button
              className="btn-primary px-10 py-5 text-lg font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
