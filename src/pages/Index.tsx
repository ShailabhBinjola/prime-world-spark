
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import PricingSection from '../components/PricingSection';
import FacilitiesSection from '../components/FacilitiesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import WhatsAppFloat from '../components/WhatsAppFloat';
import EnquiryPopup from '../components/EnquiryPopup';
import { useEnquirySubmission } from '../hooks/useEnquirySubmission';

const Index = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const { hasSubmittedEnquiry, markEnquirySubmitted } = useEnquirySubmission();

  useEffect(() => {
    // Ensure page is fully loaded before showing any popups
    setIsPageLoaded(true);
    
    // Auto-trigger enquiry popup every 2 minutes only if no enquiry has been submitted
    const interval = setInterval(() => {
      if (isPageLoaded && !hasSubmittedEnquiry) {
        setShowEnquiryPopup(true);
      }
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, [isPageLoaded, hasSubmittedEnquiry]);

  const handleEnquirySubmit = () => {
    markEnquirySubmitted();
    setShowEnquiryPopup(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GallerySection />
      <PricingSection />
      <FacilitiesSection />
      <ContactSection onEnquirySubmit={markEnquirySubmitted} />
      <WhatsAppFloat onEnquirySubmit={markEnquirySubmitted} />
      {isPageLoaded && !hasSubmittedEnquiry && (
        <EnquiryPopup 
          isOpen={showEnquiryPopup} 
          onClose={() => setShowEnquiryPopup(false)}
          onEnquirySubmit={handleEnquirySubmit}
        />
      )}
    </div>
  );
};

export default Index;
