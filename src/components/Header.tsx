
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-morphism backdrop-blur-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300">
              <img 
                src="/logo.jpg" 
                alt="TrueView Realty Logo" 
                className="w-full h-full rounded-full object-cover animate-pulse"
                onError={(e) => {
                  // Fallback to text if logo image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="text-real-estate-navy font-bold text-lg hidden">P</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-white">Pride World City</h1>
              <p className="text-real-estate-platinum text-xs">Premium Properties by TrueView Realty</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-white hover:text-real-estate-gold transition-colors">Gallery</a>
            <a href="#pricing" className="text-white hover:text-real-estate-gold transition-colors">Pricing</a>
            <a href="#facilities" className="text-white hover:text-real-estate-gold transition-colors">Amenities</a>
            <a href="#contact" className="text-white hover:text-real-estate-gold transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
