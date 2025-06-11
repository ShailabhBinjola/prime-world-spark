
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

  useEffect(() => {
    // Auto-trigger enquiry popup every 1 minute
    const interval = setInterval(() => {
      setShowEnquiryPopup(true);
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GallerySection />
      <PricingSection />
      <FacilitiesSection />
      <ContactSection />
      <WhatsAppFloat />
      <EnquiryPopup 
        isOpen={showEnquiryPopup} 
        onClose={() => setShowEnquiryPopup(false)} 
      />
    </div>
  );
};

export default Index;
