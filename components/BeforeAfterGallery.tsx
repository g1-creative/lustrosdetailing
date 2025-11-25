'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryImage {
  before: string
  after: string
  title: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    before: '/images/bmw.png',
    after: '/images/bmw2.png',
    title: 'Full Detail - BMW M3',
    description: 'Complete transformation with paint correction and ceramic coating',
  },
  {
    before: '/images/porshe.png',
    after: '/images/porshe.png',
    title: 'Paint Correction - Porsche 911',
    description: 'Complete swirl removal and ceramic coating application',
  },
  {
    before: '/images/ferrari.png',
    after: '/images/ferrari.png',
    title: 'Ceramic Coating - Ferrari F8',
    description: '9H ceramic coating with 5-year warranty',
  },
]

export default function BeforeAfterGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="section-padding bg-luxury-charcoal">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visual Proof of <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the dramatic transformation we deliver. Every detail matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-luxury-dark rounded-xl overflow-hidden 
                         border border-gray-800 hover:border-luxury-gold transition-all duration-500
                         cursor-pointer card-hover-effect"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              {/* Before/After Comparison */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <Image
                      src={image.before}
                      alt={`${image.title} - Before`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-lg text-sm font-bold z-10 shadow-lg backdrop-blur-sm">
                      BEFORE
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden border-l-2 border-luxury-gold">
                    <Image
                      src={image.after}
                      alt={`${image.title} - After`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-green-600/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-green-600/90 text-white px-3 py-1 rounded-lg text-sm font-bold z-10 shadow-lg backdrop-blur-sm">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-luxury-gold group-hover:text-white transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{image.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/95 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 
                            flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-luxury-gold text-2xl font-bold mb-2 animate-pulse">
                    Click to View Full Gallery
                  </div>
                  <div className="text-white text-sm">More transformations available</div>
                  <svg className="w-8 h-8 mx-auto mt-4 text-luxury-gold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(212,175,55,0.3)]"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Want to see more transformations? Contact us for our full portfolio.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary"
          >
            Request Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}

