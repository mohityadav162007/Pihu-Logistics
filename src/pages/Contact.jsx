import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = 'pihulogistics@gmail.com';
    const subject = `Business Inquiry from ${formData.name} (${formData.company})`;
    const body = formData.message;
    
    // Using Gmail's web compose URL specifically
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="bg-brand-light">
      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Motion.div
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
          </Motion.div>
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
                    <p className="text-slate-500 leading-relaxed">pihulogistics@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="glass-card bg-white p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
                <h3 className="text-3xl font-bold text-brand-dark mb-10 tracking-tight">Business Inquiry</h3>
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark" 
                        placeholder="Mohit Yadav" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                      <input 
                        required 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark" 
                        placeholder="Logistics Corp" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark" 
                      placeholder="mohit@company.com" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Requirement Details</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark resize-none" 
                      placeholder="Briefly describe your logistics volume and routes..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-dark text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-brand-dark/10"
                  >
                    <Send size={20} />
                    Submit Business Inquiry
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest">
                    This will open your default email client to send the inquiry.
                  </p>
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
