'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Discounts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
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
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
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
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-electric/5 via-transparent to-gold-electric/5" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="inline-block relative"
            variants={badgeVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gold-electric rounded-full blur-xl"
              variants={pulseVariants}
            />
            <div className="relative bg-gold-electric text-black px-8 py-4 rounded-full">
              <span className="text-2xl md:text-3xl font-display font-bold">
                SPECIAL DISCOUNTS
              </span>
            </div>
          </motion.div>

          <motion.div variants={textVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Student, Military &{' '}
              <span className="text-gold-electric">First-Responder</span>{' '}
              Discounts
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-sans leading-relaxed">
              We honor those who serve. Special pricing available for students,
              active military, veterans, and first responders.
            </p>
          </motion.div>

          <motion.div variants={textVariants}>
            <motion.button
              className="btn-primary magnetic-button"
              whileHover={{ scale: 1.05 }}
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

