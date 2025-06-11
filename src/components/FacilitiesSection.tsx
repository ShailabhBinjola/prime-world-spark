
import { Waves, Dumbbell, TreePine, Building2, Car, Shield } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Resort-style infinity pool with poolside lounge"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym with modern equipment"
    },
    {
      icon: TreePine,
      title: "Landscaped Gardens",
      description: "Beautifully designed green spaces and walking paths"
    },
    {
      icon: Building2,
      title: "Clubhouse",
      description: "Premium clubhouse with entertainment facilities"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Covered parking spaces for all residents"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Advanced security systems with trained personnel"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-real-estate-champagne/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-real-estate-navy mb-4">
            World-Class <span className="luxury-text-gradient">Amenities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience luxury living with premium facilities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in border border-real-estate-platinum/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-luxury-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <facility.icon className="w-8 h-8 text-real-estate-navy" />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-real-estate-navy mb-3">
                {facility.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>

              <div className="mt-4 w-12 h-1 bg-luxury-gradient rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Facilities */}
        <div className="mt-16 text-center">
          <div className="bg-real-estate-navy rounded-3xl p-8 md:p-12">
            <h3 className="font-playfair text-3xl font-bold text-white mb-6">
              And Much More...
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-real-estate-platinum">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🎯</span>
                <span className="text-sm">Kids Play Area</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">☕</span>
                <span className="text-sm">Café & Restaurant</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🛒</span>
                <span className="text-sm">Shopping Complex</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🚌</span>
                <span className="text-sm">Transportation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
