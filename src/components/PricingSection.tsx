
const PricingSection = () => {
  const apartmentTypes = [
    {
      type: "Smart Studio",
      price: "₹45 Lakh",
      size: "1 BHK",
      area: "580-650 sq.ft",
      features: ["Premium Location", "Modern Kitchen", "Branded Fittings", "Covered Parking"],
      emi: "₹35,000/month",
      popular: false
    },
    {
      type: "Family Haven",
      price: "₹75 Lakh",
      size: "2 BHK",
      area: "950-1150 sq.ft",
      features: ["Spacious Balcony", "Master Bedroom", "Premium Amenities", "Garden Facing"],
      emi: "₹58,000/month",
      popular: true
    },
    {
      type: "Luxury Suites",
      price: "₹1.2 Cr",
      size: "3 BHK",
      area: "1350-1550 sq.ft",
      features: ["Premium Floors", "City Skyline View", "Designer Interiors", "Private Terrace"],
      emi: "₹92,000/month",
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
            Choose from our thoughtfully designed apartments with flexible payment plans and zero hidden charges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {apartmentTypes.map((apartment, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 hover-lift animate-scale-in ${
                apartment.popular 
                  ? 'bg-luxury-gradient text-real-estate-navy border-real-estate-gold scale-105' 
                  : 'glass-morphism text-white border-white/20'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {apartment.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-real-estate-gold text-real-estate-navy px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-bold mb-2">{apartment.type}</h3>
                <div className="text-4xl font-bold mb-1">{apartment.price}</div>
                <div className={`text-sm mb-2 ${apartment.popular ? 'text-real-estate-navy/70' : 'text-real-estate-gold'}`}>
                  EMI: {apartment.emi}*
                </div>
                <p className={`text-sm ${apartment.popular ? 'text-real-estate-navy/70' : 'text-real-estate-platinum'}`}>
                  {apartment.size} • {apartment.area}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {apartment.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      apartment.popular ? 'bg-real-estate-navy' : 'bg-real-estate-gold'
                    }`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => {
                  const message = `Hello, I'm interested in the ${apartment.type} (${apartment.size}) at Prime World City. Price: ${apartment.price}. Please share more details and arrange a site visit.`;
                  const whatsappUrl = `https://wa.me/917721873487?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  apartment.popular 
                    ? 'bg-real-estate-navy text-white hover:bg-real-estate-navy/90' 
                    : 'bg-luxury-gradient text-real-estate-navy hover:scale-105'
                }`}
              >
                Get Detailed Quote
              </button>
            </div>
          ))}
        </div>

        {/* Payment Plans & Offers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-luxury-gradient rounded-3xl p-8 text-real-estate-navy">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              🎉 Launch Offers
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Zero Brokerage Fee (Save ₹3+ Lakh)</li>
              <li>✓ Free Registration & Legal Documentation</li>
              <li>✓ 80% Home Loan Assistance</li>
              <li>✓ Flexible Payment Plans Available</li>
            </ul>
          </div>
          
          <div className="glass-morphism rounded-3xl p-8 text-white border border-white/20">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              💰 Payment Plans
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• 20% Booking Amount</li>
              <li>• 30% During Construction</li>
              <li>• 50% On Possession</li>
              <li>• Easy EMI Options Available</li>
            </ul>
          </div>
        </div>

        {/* Price Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-real-estate-platinum text-xs">
            *EMI calculated at 8.5% interest rate for 20 years. All prices inclusive of taxes. Subject to approval.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
