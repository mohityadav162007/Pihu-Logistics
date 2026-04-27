import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import warehouseHero from '../../assets/warehouse_hero.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Premium Logistics Provider</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-dark mb-8 tracking-tight"
            >
              Logistics with a <br />
              <span className="text-brand-blue">Digital Advantage.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed"
            >
              End-to-end integrated services from Purchase Order to Proof of Delivery. 
              Built for Indian businesses that need reliable warehousing, trucking and cloud-based visibility.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary"
              >
                Partner With Us
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="btn-secondary"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="flex-1 relative w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-4 bg-white shadow-2xl overflow-hidden border border-white/50"
            >
              <img 
                src={warehouseHero} 
                alt="Modern Warehouse" 
                className="w-full h-[450px] object-cover rounded-2xl"
              />
              
              {/* Overlay: 99.9% Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-10 left-10 glass-card p-4 rounded-2xl flex items-center gap-4 border border-white/40 shadow-premium"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-dark leading-none">99.9%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">On-time Delivery</div>
                </div>
              </motion.div>

              {/* Overlay: Live Tracking */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-10 left-6 right-6 glass-card p-6 rounded-2xl flex justify-between items-center bg-white/90"
              >
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Live Tracking</div>
                  <div className="text-xl font-extrabold text-brand-dark">Global Cloud</div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-600 uppercase">Online</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Shadow/Glow under the card */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-brand-blue/10 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
