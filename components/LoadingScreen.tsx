'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Show logo after 3 seconds (video plays first)
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 3000)

    // Complete loading after 5 seconds total (3s video + 2s with logo)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        onComplete()
      }, 800) // Fade out duration
    }, 5000)

    // Try to play video immediately
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
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Video Background - More Visible */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.6) contrast(1.1)' }}
            >
              <source src="/images/video.mp4" type="video/mp4" />
            </video>
            {/* Lighter overlay - allows video to be visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
          </div>

          {/* Logo Animation - Only shows after 3 seconds */}
          {showLogo && (
            <div className="relative z-10 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
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
                  className="absolute inset-0 bg-gold-electric/40 rounded-full blur-3xl -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
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
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Loading text - appears with logo */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.p
                  className="text-gold-electric text-sm md:text-base font-sans tracking-widest uppercase drop-shadow-lg"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading...
                </motion.p>
              </motion.div>
            </div>
          )}

          {/* Progress bar - only shows when logo appears */}
          {showLogo && (
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gray-800/50 overflow-hidden rounded-full backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-gold-electric to-yellow-300"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
