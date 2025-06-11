
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-real-estate-gold/20 rounded-full blur-xl floating-element"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-white/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-real-estate-gold/30 rounded-full blur-lg floating-element" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Project Announcement */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-real-estate-gold rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Now Launching • Prime World City</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Prime World
            <span className="luxury-text-gradient block">City</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-real-estate-platinum mb-8 font-light animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Where Luxury Meets Lifestyle • Where Dreams Come Home
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-morphism px-4 py-2 rounded-full">
              <span className="text-white text-sm">🏗️ Under Construction</span>
            </div>
            <div className="glass-morphism px-4 py-2 rounded-full">
              <span className="text-white text-sm">🎯 Prime Location</span>
            </div>
            <div className="glass-morphism px-4 py-2 rounded-full">
              <span className="text-white text-sm">⭐ Premium Amenities</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={scrollToContact}
              className="bg-luxury-gradient text-real-estate-navy hover:bg-real-estate-gold text-lg px-8 py-4 rounded-full font-semibold hover-lift animate-pulse-gold"
            >
              Book Site Visit
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-real-estate-navy text-lg px-8 py-4 rounded-full font-semibold hover-lift backdrop-blur-md"
            >
              Download Brochure
            </Button>
          </div>

          {/* Price Teaser */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-real-estate-champagne text-sm mb-2">Starting From</p>
            <p className="text-3xl md:text-4xl font-bold text-white">₹45 Lakh*</p>
            <p className="text-real-estate-platinum text-sm">*Terms & Conditions Apply</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
