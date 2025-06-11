
const PricingSection = () => {
  const priceRanges = [
    {
      type: "Starter Homes",
      price: "₹45 Lakh",
      size: "1 BHK",
      area: "600-700 sq.ft",
      features: ["Prime Location", "Modern Kitchen", "Premium Fittings", "Parking Space"],
      popular: false
    },
    {
      type: "Family Suites",
      price: "₹75 Lakh",
      size: "2 BHK",
      area: "900-1100 sq.ft",
      features: ["Spacious Balcony", "Master Bedroom", "Premium Amenities", "Garden View"],
      popular: true
    },
    {
      type: "Luxury Collection",
      price: "₹1.2 Cr",
      size: "3 BHK",
      area: "1300-1500 sq.ft",
      features: ["Premium Floors", "City Skyline View", "Luxury Interiors", "Private Terrace"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-real-estate-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-real-estate-gold to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Investment <span className="luxury-text-gradient">Opportunities</span>
          </h2>
          <p className="text-lg text-real-estate-platinum max-w-2xl mx-auto">
            Choose from our carefully curated range of premium apartments designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {priceRanges.map((range, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 hover-lift animate-scale-in ${
                range.popular 
                  ? 'bg-luxury-gradient text-real-estate-navy border-real-estate-gold scale-105' 
                  : 'glass-morphism text-white border-white/20'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {range.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-real-estate-gold text-real-estate-navy px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-bold mb-2">{range.type}</h3>
                <div className="text-4xl font-bold mb-2">{range.price}</div>
                <p className={`text-sm ${range.popular ? 'text-real-estate-navy/70' : 'text-real-estate-platinum'}`}>
                  {range.size} • {range.area}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {range.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      range.popular ? 'bg-real-estate-navy' : 'bg-real-estate-gold'
                    }`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  range.popular 
                    ? 'bg-real-estate-navy text-white hover:bg-real-estate-navy/90' 
                    : 'bg-luxury-gradient text-real-estate-navy hover:scale-105'
                }`}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-luxury-gradient rounded-full">
            <span className="text-real-estate-navy font-semibold">
              🎉 Limited Time Offer: Zero Brokerage + Free Registration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
