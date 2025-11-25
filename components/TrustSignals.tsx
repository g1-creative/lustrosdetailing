export default function TrustSignals() {
  return (
    <section className="section-padding bg-luxury-charcoal">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Elite Vehicle Owners
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            When you own a Porsche, BMW, Ferrari, or other luxury vehicle, 
            you demand perfection. We deliver it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 rounded-lg bg-luxury-dark/50 border border-gray-800">
            <div className="text-4xl font-bold text-luxury-gold mb-2">500+</div>
            <div className="text-gray-300">Luxury Vehicles Detailed</div>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-luxury-dark/50 border border-gray-800">
            <div className="text-4xl font-bold text-luxury-gold mb-2">100%</div>
            <div className="text-gray-300">Satisfaction Guaranteed</div>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-luxury-dark/50 border border-gray-800">
            <div className="text-4xl font-bold text-luxury-gold mb-2">USMC</div>
            <div className="text-gray-300">Marine-Owned & Operated</div>
          </div>
        </div>

        {/* Brand Logos Placeholder */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-2xl font-bold text-gray-500">PORSCHE</div>
          <div className="text-2xl font-bold text-gray-500">BMW</div>
          <div className="text-2xl font-bold text-gray-500">FERRARI</div>
          <div className="text-2xl font-bold text-gray-500">MERCEDES</div>
          <div className="text-2xl font-bold text-gray-500">AUDI</div>
        </div>
      </div>
    </section>
  )
}

