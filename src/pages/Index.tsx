
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
    setIsPageLoaded(true);
    
    const interval = setInterval(() => {
      if (isPageLoaded && !hasSubmittedEnquiry) {
        setShowEnquiryPopup(true);
      }
    }, 120000);

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
      {/* Add proper spacing for sections */}
      <div id="pricing" style={{ paddingTop: '80px' }}>
        <PricingSection />
      </div>
      <div id="facilities" style={{ paddingTop: '80px' }}>
        <FacilitiesSection />
      </div>
      <div id="contact" style={{ paddingTop: '80px' }}>
        <ContactSection onEnquirySubmit={markEnquirySubmitted} />
      </div>
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
