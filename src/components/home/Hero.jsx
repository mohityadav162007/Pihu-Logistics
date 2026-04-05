import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-16 lg:pt-52 lg:pb-40 bg-brand-light/30">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-md bg-white border border-slate-200 shadow-sm mb-6 lg:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-main"></span>
            <span className="text-slate-600 font-medium tracking-wide text-xs uppercase">Premium Logistics Provider</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-brand-dark tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Logistics with a <br/>
            <span className="text-brand-main">Digital Advantage.</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 lg:mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            End-to-end integrated services from Purchase Order to Proof of Delivery. 
            Empowering your supply chain with cloud-based platforms and data-driven operations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Button variant="primary" className="w-full sm:w-auto" onClick={() => navigate('/contact')}>
              Partner With Us
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" onClick={() => navigate('/services')}>
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Structural visual element hidden on mobile */}
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block opacity-10 bg-brand-main" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
    </section>
  );
};

export default Hero;
