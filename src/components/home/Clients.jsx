import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Clients = () => {
  const logos = Array.from({ length: 6 }).map((_, i) => `Partner ${i + 1}`);

  return (
    <Section className="bg-slate-50 border-y border-slate-100">
      <div className="text-center mb-16">
        <h2 className="text-brand-main font-semibold tracking-wider text-sm uppercase mb-3 block">Alliances</h2>
        <h3 className="text-3xl font-bold text-brand-dark tracking-tight">Trusted Industry Networks</h3>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="text-xl font-bold tracking-widest text-slate-400 hover:text-brand-dark transition-colors duration-300 select-none grayscale hover:grayscale-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            {logo}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Clients;
