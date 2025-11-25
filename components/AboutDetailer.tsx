import Image from 'next/image'

export default function AboutDetailer() {
  return (
    <section id="about" className="section-padding bg-luxury-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden border-2 border-luxury-gold">
              <Image
                src="/images/ferrari.png"
                alt="Luxury Ferrari vehicle - Premium detailing showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-luxury-dark/40"></div>
            </div>
            {/* Marine Badge Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-luxury-charcoal p-6 rounded-lg border-2 border-luxury-gold shadow-2xl">
              <div className="text-center">
                <div className="text-3xl mb-2">🎖️</div>
                <div className="font-bold text-luxury-gold">USMC</div>
                <div className="text-sm text-gray-400">Veteran Owned</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Lustro</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                As a United States Marine, I learned that excellence isn't optional—it's 
                the standard. That same discipline, attention to detail, and unwavering 
                commitment to perfection now defines every service at Lustro Premium Detailing.
              </p>
              <p>
                My passion for automotive detailing began with my own luxury vehicles. 
                Frustrated by the lack of truly premium mobile services, I decided to 
                create the standard I expected: military precision meets automotive artistry.
              </p>
              <p>
                Every vehicle we service receives the same level of care I'd give my own. 
                Whether it's a Porsche, BMW, Ferrari, or any luxury vehicle, we treat it 
                with the respect and precision it deserves.
              </p>
              <p className="text-luxury-gold font-semibold">
                Your vehicle is more than transportation—it's a statement. Let us make 
                that statement perfect.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-luxury-charcoal p-4 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-luxury-gold mb-1">USMC</div>
                <div className="text-sm text-gray-400">Veteran Owned</div>
              </div>
              <div className="bg-luxury-charcoal p-4 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-luxury-gold mb-1">Certified</div>
                <div className="text-sm text-gray-400">Professional Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

