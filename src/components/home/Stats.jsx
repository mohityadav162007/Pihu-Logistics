import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { 
      label: "GST Registered", 
      value: "23CBPPSS022H1ZZ", 
      description: "Verified Entity" 
    },
    { 
      label: "MSME Registered", 
      value: "Certified operations", 
      description: "Udyam Aadhar" 
    },
    { 
      label: "50,000+ sq ft", 
      value: "Central processing hub", 
      description: "State-of-the-art" 
    },
    { 
      label: "100+ Team", 
      value: "Dedicated workforce", 
      description: "Logistics Experts" 
    }
  ];

  return (
    <div className="relative z-20 -mt-10 lg:-mt-16 container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-3xl bg-white/95 hover:shadow-premium transition-all duration-300 group"
          >
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-brand-blue transition-colors">
              {stat.label}
            </div>
            <div className="text-lg font-extrabold text-brand-dark mb-1 leading-tight">
              {stat.value}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
