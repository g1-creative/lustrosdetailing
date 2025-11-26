'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: [0.5, 1, 0.5],
      transition: {
        scaleX: {
          duration: 1,
          ease: "easeOut",
        },
        opacity: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-soft relative overflow-hidden"
    >
      {/* Animated glowing line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-electric to-transparent origin-left"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)',
        }}
      />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
            variants={textVariants}
          >
            Ready to change your{' '}
            <span className="text-gold-electric">life</span>?
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-sans"
            variants={textVariants}
          >
            Apply for coaching today.
          </motion.p>

          <motion.div variants={buttonVariants}>
            <motion.button
              className="btn-primary text-lg px-12 py-6 magnetic-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
