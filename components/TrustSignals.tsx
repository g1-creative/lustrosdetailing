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
          <div className="group text-center p-8 rounded-xl glass-effect border border-gray-800 hover:border-luxury-gold card-hover-effect glow-hover cursor-default">
            <div className="text-5xl font-bold text-luxury-gold mb-2 transform group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Luxury Vehicles Detailed</div>
            <div className="mt-4 w-16 h-1 bg-luxury-gold/30 mx-auto group-hover:w-24 group-hover:bg-luxury-gold transition-all duration-300"></div>
          </div>
          
          <div className="group text-center p-8 rounded-xl glass-effect border border-gray-800 hover:border-luxury-gold card-hover-effect glow-hover cursor-default">
            <div className="text-5xl font-bold text-luxury-gold mb-2 transform group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Satisfaction Guaranteed</div>
            <div className="mt-4 w-16 h-1 bg-luxury-gold/30 mx-auto group-hover:w-24 group-hover:bg-luxury-gold transition-all duration-300"></div>
          </div>
          
          <div className="group text-center p-8 rounded-xl glass-effect border border-gray-800 hover:border-luxury-gold card-hover-effect glow-hover cursor-default">
            <div className="text-5xl font-bold text-luxury-gold mb-2 transform group-hover:scale-110 transition-transform duration-300">
              USMC
            </div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Marine-Owned & Operated</div>
            <div className="mt-4 w-16 h-1 bg-luxury-gold/30 mx-auto group-hover:w-24 group-hover:bg-luxury-gold transition-all duration-300"></div>
          </div>
        </div>

        {/* Brand Logos Placeholder */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="text-2xl font-bold text-gray-500 hover:text-luxury-gold hover:scale-110 transition-all duration-300 cursor-default">PORSCHE</div>
          <div className="text-2xl font-bold text-gray-500 hover:text-luxury-gold hover:scale-110 transition-all duration-300 cursor-default">BMW</div>
          <div className="text-2xl font-bold text-gray-500 hover:text-luxury-gold hover:scale-110 transition-all duration-300 cursor-default">FERRARI</div>
          <div className="text-2xl font-bold text-gray-500 hover:text-luxury-gold hover:scale-110 transition-all duration-300 cursor-default">MERCEDES</div>
          <div className="text-2xl font-bold text-gray-500 hover:text-luxury-gold hover:scale-110 transition-all duration-300 cursor-default">AUDI</div>
        </div>
      </div>
    </section>
  )
}

