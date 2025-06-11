
import { useState } from 'react';
import { X, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryPopup = ({ isOpen, onClose }: EnquiryPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in both name and phone number.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hello, I'm interested in Prime World City. My name is ${formData.name}, and my contact number is ${formData.phone}. Please get in touch!`;
    
    const whatsappUrl = `https://wa.me/917721873487?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Enquiry Sent!",
      description: "We'll contact you shortly with special offers.",
    });

    // Reset form and close popup
    setFormData({ name: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mr-3">
              <Gift className="w-6 h-6 text-real-estate-navy" />
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-real-estate-navy">
                Exclusive Offer!
              </h3>
              <p className="text-sm text-gray-600">Limited time opportunity</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-luxury-gradient rounded-2xl p-6 mb-6 text-real-estate-navy">
          <h4 className="font-playfair text-xl font-semibold mb-3">
            🎁 Special Launch Benefits
          </h4>
          <ul className="space-y-2 text-sm">
            <li>✓ Zero Brokerage Fee (Save ₹2+ Lakh)</li>
            <li>✓ Free Registration & Legal Documentation</li>
            <li>✓ Instant Price Lock (Current Rates)</li>
            <li>✓ Priority Floor Selection</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-4 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
            required
          />
          
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-4 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
            required
          />
          
          <Button
            type="submit"
            className="w-full bg-real-estate-navy hover:bg-real-estate-navy/90 text-white py-4 rounded-xl font-semibold text-lg"
          >
            Claim Your Exclusive Offer
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            ⏰ Offer valid only for the next 24 hours
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Our team will contact you within 10 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
