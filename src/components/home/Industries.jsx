import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Industries = () => {
  const industries = [
    { name: "Automotive Parts", image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop" },
    { name: "White Goods", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" },
    { name: "Specialized Chemicals", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" },
    { name: "Retail & FMCG", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
    { name: "Heavy Engineering", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop" }
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-3xl mb-16">
        <span className="text-brand-main font-semibold tracking-wider text-sm uppercase mb-3 block">Sectors</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 tracking-tight">Tailored Industry Focus</h2>
        <p className="text-slate-600 text-lg leading-relaxed">Deep domain expertise allows us to engineer logistics solutions perfectly fitted to the rigorous demands of specialized industries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, index) => (
          <motion.div
            key={index}
            className={`relative rounded-md overflow-hidden group cursor-pointer h-72 border border-slate-200 ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/10 transition-colors duration-500 z-10"></div>
            <img 
              src={ind.image} 
              alt={ind.name}
              className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <h4 className="text-xl font-bold text-white tracking-wide">{ind.name}</h4>
              <div className="w-8 h-1 bg-brand-main mt-3 transform origin-left group-hover:w-16 transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;
