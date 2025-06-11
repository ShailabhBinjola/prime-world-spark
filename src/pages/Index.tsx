
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import PricingSection from '../components/PricingSection';
import FacilitiesSection from '../components/FacilitiesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import WhatsAppFloat from '../components/WhatsAppFloat';
import EnquiryPopup from '../components/EnquiryPopup';

const Index = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Ensure page is fully loaded before showing any popups
    setIsPageLoaded(true);
    
    // Auto-trigger enquiry popup every 2 minutes (increased from 1 minute to reduce annoyance)
    const interval = setInterval(() => {
      if (isPageLoaded) {
        setShowEnquiryPopup(true);
      }
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, [isPageLoaded]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GallerySection />
      <PricingSection />
      <FacilitiesSection />
      <ContactSection />
      <WhatsAppFloat />
      {isPageLoaded && (
        <EnquiryPopup 
          isOpen={showEnquiryPopup} 
          onClose={() => setShowEnquiryPopup(false)} 
        />
      )}
    </div>
  );
};

export default Index;
