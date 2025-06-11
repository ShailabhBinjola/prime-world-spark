
import { useState } from 'react';
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
      title: "Message Sent!",
      description: "We'll contact you shortly.",
    });

    // Reset form and close popup
    setFormData({ name: '', phone: '' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse-gold transition-all duration-300 hover:scale-110"
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
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
                required
              />
              
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
                required
              />
              
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
              >
                Send Message on WhatsApp
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We'll respond within minutes during business hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
