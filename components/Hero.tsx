'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [videoError, setVideoError] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Try to load and play the video
      const handleCanPlay = () => {
        video.play().catch((error) => {
          console.log('Video autoplay failed:', error)
        })
      }
      
      const handleError = (e: Event) => {
        console.error('Video loading error:', e)
        setVideoError(true)
      }
      
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('error', handleError)
      
      // Force load
      video.load()
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

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
      },
    }),
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Cinematic Video Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) contrast(1.1)' }}
            onError={() => setVideoError(true)}
          >
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-soft to-black" />
        )}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </motion.div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gold-electric/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-electric/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
            variants={textVariants}
          >
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              SIMPLIFYING
            </motion.span>
            <motion.span 
              className="text-gold-electric block bg-gradient-to-r from-gold-electric via-yellow-300 to-gold-electric bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              PROGRESSION
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-sans leading-relaxed max-w-3xl mx-auto"
            variants={textVariants}
          >
            1:1 coaching to transform your training, nutrition & lifestyle.
          </motion.p>

          <motion.ul
            className="space-y-4 text-lg md:text-xl text-gray-300 font-sans max-w-2xl mx-auto"
            variants={textVariants}
          >
            <motion.li
              className="flex items-center justify-center gap-3 group"
              variants={bulletVariants}
              custom={0}
              whileHover={{ x: 10 }}
            >
              <motion.span 
                className="text-gold-electric text-2xl"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                ✓
              </motion.span>
              <span>Training, nutrition & accountability</span>
            </motion.li>
            <motion.li
              className="flex items-center justify-center gap-3 group"
              variants={bulletVariants}
              custom={1}
              whileHover={{ x: 10 }}
            >
              <motion.span 
                className="text-gold-electric text-2xl"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                ✓
              </motion.span>
              <span>Student, military & first responder discounts</span>
            </motion.li>
            <motion.li
              className="flex items-center justify-center gap-3 group"
              variants={bulletVariants}
              custom={2}
              whileHover={{ x: 10 }}
            >
              <motion.span 
                className="text-gold-electric text-2xl"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                ✓
              </motion.span>
              <span>Must be 18+ and ready to commit mentally, physically & financially</span>
            </motion.li>
          </motion.ul>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-8 justify-center items-center"
            variants={textVariants}
          >
            <motion.button
              className="btn-primary magnetic-button group relative px-10 py-5 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={(e) => {
                const target = e.currentTarget as HTMLButtonElement
                if (target) {
                  const rect = target.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  target.style.setProperty('--x', `${x}px`)
                  target.style.setProperty('--y', `${y}px`)
                }
              }}
            >
              <span className="relative z-10">Start Coaching</span>
              <motion.div
                className="absolute inset-0 bg-gold-electric/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ filter: 'blur(20px)' }}
              />
            </motion.button>
            <motion.button
              className="btn-secondary magnetic-button group relative px-10 py-5 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Ask a Question</span>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gold-electric/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gold-electric rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
