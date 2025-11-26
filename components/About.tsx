'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-soft"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left side - Photo */}
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-electric/10 to-transparent z-10" />
            <Image
              src="/images/mikey-girlfriend-jaycutler.png"
              alt="Michael Yongbi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right side - Text */}
          <motion.div className="space-y-6" variants={textVariants}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Meet <span className="text-gold-electric">Michael Yongbi</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 font-sans">
              <p>
                <span className="text-gold-electric font-semibold">MD | Towson alum</span>
              </p>
              <p>
                Personal trainer & online coach dedicated to helping you achieve your fitness goals through science-backed training and nutrition strategies.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gold-electric font-semibold">Instagram:</span>
                <a
                  href="https://instagram.com/coachyongbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-electric transition-colors"
                >
                  @coachyongbi
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-electric font-semibold">Training:</span>
                <a
                  href="https://instagram.com/trainhvy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-electric transition-colors"
                >
                  @trainhvy
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-electric font-semibold">Email:</span>
                <a
                  href="mailto:mikey@hvyts.com"
                  className="text-white hover:text-gold-electric transition-colors"
                >
                  mikey@hvyts.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

