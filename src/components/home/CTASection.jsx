import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-blue via-brand-accent to-indigo-700 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-16 relative z-10 items-center">
            {/* Left Content */}
            <div className="lg:w-3/5">
              <span className="text-white/70 font-bold tracking-widest text-[10px] mb-6 uppercase block">Contact</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                Need a logistics partner for warehousing, trucking or digital dispatch?
              </h2>
              <p className="text-blue-50 leading-relaxed text-lg lg:text-xl max-w-xl">
                Tell us your volume, routes and fulfilment requirements. The Pihu Logistics team will recommend a practical operating model for your business.
              </p>
            </div>

            {/* Right Action Block */}
            <div className="lg:w-2/5 w-full">
              <div className="glass-card bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-3xl space-y-6">
                <button className="w-full bg-white text-brand-blue py-5 rounded-2xl font-bold text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-xl">
                  Get Quote
                </button>
                <button className="w-full bg-transparent border-2 border-white/30 text-white py-5 rounded-2xl font-bold text-lg transition-all hover:bg-white/10 active:scale-95">
                  Call Logistics Team
                </button>
                
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">Corporate HQ</div>
                    <div className="text-sm font-semibold">50,000+ sqft processing hub</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">Registrations</div>
                    <div className="text-sm font-semibold">GST Registered • MSME Registered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
