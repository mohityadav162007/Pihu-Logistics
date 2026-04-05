import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

const About = () => {
  return (
    <div className="pt-24 bg-brand-light/30 min-h-screen">
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 lg:mb-6 tracking-tight"
          >
            About <span className="text-brand-main">Pihu Logistics</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            A technology-driven enterprise anchored on efficiency, scale, and uncompromising compliance.
          </motion.p>
        </div>
      </div>

      <Section>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="lg:w-1/2">
            <span className="text-brand-main font-semibold tracking-wider text-xs lg:text-sm uppercase mb-3 block">Corporate History</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-6 lg:mb-8 tracking-tight">Structured for Scale Since 2017</h3>
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed">
              <p>
                Since our inception in 2017, Pihu Logistics has systematically modernized the logistics landscape by integrating deep technology with robust physical infrastructure. We recognized early that superior logistics requires more than just square footage and fleets.
              </p>
              <p>
                We execute an end-to-end digitization strategy. Instead of utilizing fragmented point solutions, we operate a centralized processing hub that brings your entire supply chain onto a single, cloud-based collaborative framework. This ensures operational transparency and unmatched agility.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-8 lg:mt-12 bg-white p-6 lg:p-8 rounded-lg border border-slate-200 shadow-sm">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight">5</div>
                <div className="text-brand-main flex-shrink-0 text-[10px] lg:text-xs uppercase tracking-widest font-semibold mt-2">Owned Hubs</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight">15+</div>
                <div className="text-brand-main flex-shrink-0 text-[10px] lg:text-xs uppercase tracking-widest font-semibold mt-2">Partner Sites</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              <div className="aspect-[16/9] bg-slate-200 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Processing Hub" />
              </div>
              <div className="aspect-[16/9] bg-slate-200 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Logistics Command Center" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-dark border-t border-slate-800">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-brand-main font-semibold tracking-wider text-xs lg:text-sm uppercase mb-3 block">Corporate Governance</span>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 tracking-tight">Uncompromising Standards</h3>
          <p className="text-base lg:text-lg text-slate-400 leading-relaxed">We take our legal and social responsibilities seriously, engineering strict safety protocols for our workforce while securing the integrity of your products.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {[
            { title: "GST Registered", desc: "Fully compliant operations and transparent invoicing. Corporate Identity: 23CSBPS5022H1ZZ" },
            { title: "MSME Certified", desc: "Recognized operational scale ensuring organizational agility paired with enterprise-level capability." },
            { title: "HSE Framework", desc: "Mandatory adherence to comprehensive Health, Safety, and Environment protocols across all active hubs." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-6 lg:p-8 rounded-lg border border-slate-700">
              <h4 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed text-xs lg:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
