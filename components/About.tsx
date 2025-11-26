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
        staggerChildren: 0.15,
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
      },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-dark-soft to-black relative overflow-hidden"
    >
      {/* Subtle background pattern */}
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
              About
            </span>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold-electric to-transparent mt-2" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Meet <span className="text-gold-electric">Michael Yongbi</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left side - Photo */}
          <motion.div
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group"
            variants={imageVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-electric/20 via-gold-electric/10 to-gold-electric/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="absolute inset-0 bg-gradient-to-br from-gold-electric/5 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 border border-gold-electric/20 rounded-3xl z-20 group-hover:border-gold-electric/40 transition-colors duration-500" />
            
            <Image
              src="/images/mikey-girlfriend-jaycutler.png"
              alt="Michael Yongbi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right side - Text */}
          <motion.div className="space-y-8" variants={textVariants}>
            {/* Credentials */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold-electric/10 border border-gold-electric/20 rounded-full">
                <span className="text-gold-electric font-display font-bold text-lg">MD</span>
                <span className="text-gray-400">|</span>
                <span className="text-white font-sans">Towson alum</span>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 font-sans leading-relaxed font-light">
                Personal trainer & online coach dedicated to helping you achieve your fitness goals through science-backed training and nutrition strategies.
              </p>
            </div>

            {/* Contact Information */}
            <div className="pt-6 space-y-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
              
              <div className="grid gap-4">
                <motion.a
                  href="https://instagram.com/coachyongbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-dark-surface/50 hover:bg-dark-surface border border-gray-800 hover:border-gold-electric/30 rounded-xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-electric/10 flex items-center justify-center group-hover:bg-gold-electric/20 transition-colors">
                    <span className="text-gold-electric font-semibold">IG</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Instagram</div>
                    <div className="text-white group-hover:text-gold-electric transition-colors font-sans">@coachyongbi</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-electric transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://instagram.com/trainhvy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-dark-surface/50 hover:bg-dark-surface border border-gray-800 hover:border-gold-electric/30 rounded-xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-electric/10 flex items-center justify-center group-hover:bg-gold-electric/20 transition-colors">
                    <span className="text-gold-electric font-semibold">TR</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Training</div>
                    <div className="text-white group-hover:text-gold-electric transition-colors font-sans">@trainhvy</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-electric transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>

                <motion.a
                  href="mailto:mikey@hvyts.com"
                  className="group flex items-center gap-4 p-4 bg-dark-surface/50 hover:bg-dark-surface border border-gray-800 hover:border-gold-electric/30 rounded-xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-electric/10 flex items-center justify-center group-hover:bg-gold-electric/20 transition-colors">
                    <svg className="w-5 h-5 text-gold-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-white group-hover:text-gold-electric transition-colors font-sans">mikey@hvyts.com</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gold-electric transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
