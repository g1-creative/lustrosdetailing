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
      opacity: [0.6, 1, 0.6],
      transition: {
        scaleX: {
          duration: 1.2,
        },
        opacity: {
          duration: 2,
          repeat: Infinity,
        },
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-soft via-black to-black relative overflow-hidden"
    >
      {/* Animated glowing line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-electric to-transparent origin-left"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.3)',
        }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,215,0,0.15)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
            variants={textVariants}
          >
            Ready to change your{' '}
            <span className="text-gold-electric bg-gradient-to-r from-gold-electric via-yellow-300 to-gold-electric bg-clip-text text-transparent">
              life
            </span>?
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-sans font-light"
            variants={textVariants}
          >
            Apply for coaching today.
          </motion.p>

          <motion.div variants={buttonVariants}>
            <motion.button
              className="btn-primary text-lg px-12 py-6 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold">Start Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-electric via-yellow-300 to-gold-electric opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
