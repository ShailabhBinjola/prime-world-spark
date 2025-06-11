
import { useState, useCallback } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both name and phone number.",
        variant: "destructive"
      });
      return;
    }

    if (formData.phone.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `🏠 Quick Enquiry - Pride World City

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}

I'm interested in Pride World City apartments. Please get in touch with details and pricing information.`;
      
      const whatsappUrl = `https://wa.me/917620658446?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in new tab
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      if (newWindow) {
        toast({
          title: "Message Sent!",
          description: "We'll contact you shortly.",
        });

        // Reset form and close popup
        setFormData({ name: '', phone: '' });
        setIsOpen(false);
      } else {
        toast({
          title: "Popup Blocked",
          description: "Please allow popups and try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setFormData({ name: '', phone: '' });
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleOpen}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/30"
          aria-label="Open WhatsApp enquiry form"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      {/* WhatsApp Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-real-estate-navy">
                    Quick Enquiry
                  </h3>
                  <p className="text-sm text-gray-600">Get instant assistance via WhatsApp</p>
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Close enquiry form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="whatsapp-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="whatsapp-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="whatsapp-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
                  required
                  disabled={isSubmitting}
                  maxLength={10}
                  pattern="[0-9]{10}"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message on WhatsApp'}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              🔒 We'll respond within minutes during business hours (9 AM - 8 PM)
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
