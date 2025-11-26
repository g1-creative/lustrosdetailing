'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { label: 'Followers', value: 4010, suffix: '' },
  { label: 'Posts', value: 18, suffix: '' },
  { label: 'Following', value: 2115, suffix: '' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [counters, setCounters] = useState([0, 0, 0])

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let currentStep = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        currentStep++
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.min(
            Math.floor(increment * currentStep),
            stat.value
          )
          return newCounters
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = stat.value
            return newCounters
          })
        }
      }, interval)
    })
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-soft"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Join the <span className="text-gold-electric">Community</span>
          </h2>
          <a
            href="https://instagram.com/mikeyyongbi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gold-electric hover:text-gold-400 transition-colors font-sans"
          >
            @mikeyyongbi
          </a>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 bg-dark-surface rounded-2xl border border-gray-800"
            >
              <motion.div
                className="text-5xl md:text-6xl font-display font-bold text-gold-electric mb-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: 0.3 + index * 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {counters[index].toLocaleString()}
                {stat.suffix}
              </motion.div>
              <div className="text-xl text-gray-400 font-sans">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

