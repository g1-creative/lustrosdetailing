'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-soft to-black" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Content */}
          <div className="space-y-8 z-10">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              variants={textVariants}
            >
              <span className="text-white">SIMPLIFYING</span>
              <br />
              <span className="text-gold-electric">PROGRESSION</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-sans leading-relaxed"
              variants={textVariants}
            >
              1:1 coaching to transform your training, nutrition & lifestyle.
            </motion.p>

            <motion.ul
              className="space-y-4 text-lg text-gray-300 font-sans"
              variants={textVariants}
            >
              <motion.li
                className="flex items-center gap-3"
                variants={bulletVariants}
                custom={0}
              >
                <span className="text-gold-electric text-xl">✓</span>
                <span>Training, nutrition & accountability</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                variants={bulletVariants}
                custom={1}
              >
                <span className="text-gold-electric text-xl">✓</span>
                <span>Student, military & first responder discounts</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                variants={bulletVariants}
                custom={2}
              >
                <span className="text-gold-electric text-xl">✓</span>
                <span>Must be 18+ and ready to commit mentally, physically & financially</span>
              </motion.li>
            </motion.ul>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={textVariants}
            >
              <motion.button
                className="btn-primary magnetic-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Coaching
              </motion.button>
              <motion.button
                className="btn-secondary magnetic-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ask a Question
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - Coach Image */}
          <motion.div
            className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-electric/20 to-transparent z-10" />
            <Image
              src="/images/mikey-and-client.png"
              alt="Michael Yongbi - Fitness Coach"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
