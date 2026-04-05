import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../ui/Section';

const Usps = () => {
  const points = [
    "Customer-centric operations",
    "Centralized processing hub",
    "End-to-end digitization of logistics",
    "Data-driven decision making",
    "SKU-level tracking accuracy",
    "Stringent HSE practices"
  ];

  return (
    <Section className="bg-brand-light/30">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-1/2 w-full">
          <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1553413077-ec178b5e9081?q=80&w=2065&auto=format&fit=crop" 
              alt="Advanced Logistics Hub" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <span className="text-brand-main font-semibold tracking-wider text-sm uppercase mb-3 block">Corporate Advantage</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 tracking-tight">The Pihu Standard</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            By integrating cloud-based collaborative platforms with our robust physical infrastructure, we provide unprecedented visibility and operational efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            {points.map((point, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-main/10 flex items-center justify-center border border-brand-main/20">
                  <Check className="text-brand-main" size={12} strokeWidth={3} />
                </div>
                <span className="ml-3 font-medium text-slate-700 text-sm leading-snug">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Usps;
