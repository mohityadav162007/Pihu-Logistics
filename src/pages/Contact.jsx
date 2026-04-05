import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        e.target.reset(); // Native reset over DOM
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 bg-brand-light/30 min-h-screen">
      <Section>
        <div className="max-w-4xl mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 lg:mb-6 tracking-tight">Connect With Us</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">Ready to experience logistics with a digital advantage? Initiate a conversation with our logistics architects today.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-6 lg:mb-8 tracking-tight">Corporate Directory</h3>
            
            <div className="space-y-8 lg:space-y-10">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-brand-main">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-base lg:text-lg mb-1 tracking-tight">Headquarters</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    50,000+ sqft Processing Hub<br />
                    Central India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-brand-main">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-base lg:text-lg mb-1 tracking-tight">Direct Line</h4>
                  <p className="text-slate-600 text-sm">+91 (XXX) XXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 text-brand-main">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-base lg:text-lg mb-1 tracking-tight">Communicate</h4>
                  <p className="text-slate-600 text-sm">commercial@pihulogistics.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-6 lg:p-12 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
              <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-6 lg:mb-8 tracking-tight">Business Inquiry</h3>
              
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 mx-auto">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Inquiry Submitted</h3>
                    <p className="text-slate-600 max-w-sm mx-auto">Thank you for reaching out. One of our logistics experts will contact you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-5 lg:space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Contact Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-main focus:border-brand-main transition-colors text-sm" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Organization</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-main focus:border-brand-main transition-colors text-sm" placeholder="Company Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
                    <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-main focus:border-brand-main transition-colors text-sm" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Area of Interest</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-main focus:border-brand-main transition-colors text-sm appearance-none cursor-pointer">
                      <option>Intelligent Warehousing</option>
                      <option>Domestic Distribution (3PL)</option>
                      <option>Value Added Processing</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Project Details</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-main focus:border-brand-main transition-colors text-sm" placeholder="Briefly describe your logistics requirements..."></textarea>
                </div>

                <div className="pt-2 relative">
                  <Button disabled={isSubmitting} className="w-full hover:bg-brand-main hover:text-white border border-transparent disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
