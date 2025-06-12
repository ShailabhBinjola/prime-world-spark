
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed header
      const headerOffset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-morphism backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ height: '80px' }} // Fixed height for consistent spacing
    >
      <div className="container mx-auto px-6 py-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300">
              <img 
                src="/logo.jpg" 
                alt="Pride World City Logo" 
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
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
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-real-estate-gold transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-real-estate-gold transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('facilities')} className="text-white hover:text-real-estate-gold transition-colors">Amenities</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-real-estate-gold transition-colors">Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
