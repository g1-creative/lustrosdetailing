'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [logoVisible, setLogoVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 500)

    // Complete loading after video plays for a bit
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        onComplete()
      }, 1000) // Fade out duration
    }, 3000) // Total loading time

    // Try to play video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, continue anyway
      })
    }

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(loadingTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.4) contrast(1.2)' }}
            >
              <source src="/images/video.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
          </div>

          {/* Logo Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={logoVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                type: 'spring',
                stiffness: 100,
              }}
              className="relative"
            >
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute inset-0 bg-gold-electric/30 rounded-full blur-3xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={logoVisible ? { scale: 1.5, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              
              {/* Logo */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Michael Yongbi"
                  width={300}
                  height={120}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={logoVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.p
                className="text-gold-electric text-sm md:text-base font-sans tracking-widest uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading...
              </motion.p>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gray-800 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={logoVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold-electric to-yellow-300"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, delay: 1.2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

