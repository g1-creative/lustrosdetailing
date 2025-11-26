'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.6,
      },
    }),
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-soft to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.05),transparent_50%)]" />
      </div>

      {/* Subtle animated orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gold-electric/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-electric/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight"
            variants={textVariants}
          >
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              SIMPLIFYING
            </motion.span>
            <motion.span 
              className="text-gold-electric block mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              PROGRESSION
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto font-light"
            variants={textVariants}
          >
            1:1 coaching to transform your training, nutrition & lifestyle.
          </motion.p>

          <motion.ul
            className="space-y-5 text-lg md:text-xl text-gray-400 font-sans max-w-2xl mx-auto"
            variants={textVariants}
          >
            <motion.li
              className="flex items-center justify-center gap-4 group"
              variants={bulletVariants}
              custom={0}
              whileHover={{ x: 5 }}
            >
              <motion.span 
                className="text-gold-electric text-xl font-bold"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                ✓
              </motion.span>
              <span>Training, nutrition & accountability</span>
            </motion.li>
            <motion.li
              className="flex items-center justify-center gap-4 group"
              variants={bulletVariants}
              custom={1}
              whileHover={{ x: 5 }}
            >
              <motion.span 
                className="text-gold-electric text-xl font-bold"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                ✓
              </motion.span>
              <span>Student, military & first responder discounts</span>
            </motion.li>
            <motion.li
              className="flex items-center justify-center gap-4 group"
              variants={bulletVariants}
              custom={2}
              whileHover={{ x: 5 }}
            >
              <motion.span 
                className="text-gold-electric text-xl font-bold"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                ✓
              </motion.span>
              <span>Must be 18+ and ready to commit mentally, physically & financially</span>
            </motion.li>
          </motion.ul>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 pt-6 justify-center items-center"
            variants={textVariants}
          >
            <motion.button
              className="btn-primary px-10 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Coaching
            </motion.button>
            <motion.button
              className="btn-secondary px-10 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ask a Question
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gold-electric/40 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gold-electric rounded-full mt-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
