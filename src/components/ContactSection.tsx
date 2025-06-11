
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        description: "Please fill in your name and phone number.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hello, I'm interested in Prime World City. My name is ${formData.name}, and my contact number is ${formData.phone}. ${formData.email ? `Email: ${formData.email}. ` : ''}${formData.message ? `Message: ${formData.message}` : 'Please get in touch!'}`;
    
    const whatsappUrl = `https://wa.me/917721873487?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Enquiry Sent!",
      description: "We'll contact you shortly.",
    });

    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-real-estate-navy/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-real-estate-navy mb-4">
              Ready to Make <span className="luxury-text-gradient">Prime World City</span> Your Home?
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch with our expert team for personalized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-real-estate-platinum/30">
              <h3 className="font-playfair text-2xl font-semibold text-real-estate-navy mb-6">
                Book Your Site Visit
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address (Optional)"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Any specific requirements or questions?"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border-real-estate-platinum/50 rounded-xl focus:border-real-estate-gold min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-luxury-gradient text-real-estate-navy hover:bg-real-estate-gold text-lg py-4 rounded-xl font-semibold hover-lift"
                >
                  Send Enquiry via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-real-estate-navy rounded-3xl p-8 text-white">
                <h3 className="font-playfair text-2xl font-semibold mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mr-4">
                      <span className="text-real-estate-navy font-bold">📞</span>
                    </div>
                    <div>
                      <p className="text-real-estate-platinum text-sm">Call us directly</p>
                      <p className="font-semibold">+91 77218 73487</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mr-4">
                      <span className="text-real-estate-navy font-bold">📧</span>
                    </div>
                    <div>
                      <p className="text-real-estate-platinum text-sm">Email us</p>
                      <p className="font-semibold">info@trueviewrealty.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mr-4">
                      <span className="text-real-estate-navy font-bold">📍</span>
                    </div>
                    <div>
                      <p className="text-real-estate-platinum text-sm">Visit our office</p>
                      <p className="font-semibold">Prime World City Sales Office</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-luxury-gradient rounded-3xl p-8 text-real-estate-navy">
                <h4 className="font-playfair text-xl font-semibold mb-4">
                  🎁 Special Launch Offers
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Zero Brokerage Fee</li>
                  <li>✓ Free Registration & Legal</li>
                  <li>✓ Flexible Payment Plans</li>
                  <li>✓ Early Bird Discounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
