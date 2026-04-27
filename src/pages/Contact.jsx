import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-brand-light">
      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase">Contact</div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Connect with our <br />
              Logistics <span className="text-brand-blue">Architects.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Ready to experience logistics with a digital advantage? Initiate a conversation about your supply chain today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-bold text-brand-dark mb-12 tracking-tight">Corporate Directory</h3>
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">Central Hub</h4>
                    <p className="text-slate-500 leading-relaxed">
                      50,000+ sqft Processing Hub<br />
                      Central India Regional HQ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">Direct Line</h4>
                    <p className="text-slate-500 leading-relaxed font-bold text-xl">+91 9993552893</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">Electronic Mail</h4>
                    <p className="text-slate-500 leading-relaxed">commercial@pihulogistics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="glass-card bg-white p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
                <h3 className="text-3xl font-bold text-brand-dark mb-10 tracking-tight">Business Inquiry</h3>
                
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-12 text-center"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8 text-green-600">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="text-3xl font-bold text-brand-dark mb-4">Request Submitted</h3>
                      <p className="text-slate-500 max-w-sm">One of our logistics experts will review your requirements and contact you within 24 hours.</p>
                      <button onClick={() => setIsSuccess(false)} className="mt-10 text-brand-blue font-bold uppercase tracking-widest text-[10px]">Send another inquiry</button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input required type="text" className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark" placeholder="Mohit Yadav" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                      <input required type="text" className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark" placeholder="Logistics Corp" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                    <input required type="email" className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark" placeholder="mohit@company.com" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Requirement Details</label>
                    <textarea required rows={4} className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark resize-none" placeholder="Briefly describe your logistics volume and routes..."></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting} 
                    className="w-full bg-brand-dark text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 shadow-lg shadow-brand-dark/10"
                  >
                    {isSubmitting ? (
                      "Processing Request..."
                    ) : (
                      <>
                        <Send size={20} />
                        Submit Business Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
