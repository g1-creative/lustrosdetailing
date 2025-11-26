'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function VideoShowcase() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-soft to-black" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Train with <span className="text-gold-electric">Purpose</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-sans max-w-2xl mx-auto">
            See the intensity, dedication, and results that define our coaching philosophy
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Video container with cinematic frame */}
          <div className="relative rounded-2xl overflow-hidden group border-2 border-gold-electric/30 hover:border-gold-electric/60 transition-all duration-500">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-electric via-yellow-300 to-gold-electric rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            
            {/* Video */}
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play/Pause button */}
              {!isPlaying && (
                <motion.button
                  className="absolute inset-0 flex items-center justify-center group/play"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isPlaying ? 0 : 1 }}
                  onClick={handlePlay}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    {/* Glowing circle */}
                    <motion.div
                      className="absolute inset-0 bg-gold-electric/30 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Play button */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gold-electric rounded-full flex items-center justify-center shadow-2xl group-hover/play:bg-gold-400 transition-colors">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              )}

              {/* Pause button when playing */}
              {isPlaying && (
                <motion.button
                  className="absolute bottom-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-electric/30 hover:border-gold-electric/60 transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handlePause}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5 text-gold-electric"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-electric/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-electric/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Stats below video */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-dark-surface/50 backdrop-blur-sm rounded-xl border border-gold-electric/20">
            <div className="text-3xl md:text-4xl font-display font-bold text-gold-electric mb-2">1:1</div>
            <div className="text-gray-300 font-sans">Personal Coaching</div>
          </div>
          <div className="text-center p-6 bg-dark-surface/50 backdrop-blur-sm rounded-xl border border-gold-electric/20">
            <div className="text-3xl md:text-4xl font-display font-bold text-gold-electric mb-2">24/7</div>
            <div className="text-gray-300 font-sans">Support & Accountability</div>
          </div>
          <div className="text-center p-6 bg-dark-surface/50 backdrop-blur-sm rounded-xl border border-gold-electric/20">
            <div className="text-3xl md:text-4xl font-display font-bold text-gold-electric mb-2">100%</div>
            <div className="text-gray-300 font-sans">Dedicated to Your Success</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

