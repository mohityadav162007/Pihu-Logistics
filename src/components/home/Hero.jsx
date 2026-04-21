import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-16 lg:pt-52 lg:pb-40 overflow-hidden bg-slate-50">
      {/* Background Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-main opacity-20 blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400 opacity-20 blur-[100px] md:blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="max-w-3xl pt-8 lg:pt-0 lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_16px_rgba(0,0,0,0.03)] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-main shadow-[0_0_8px_rgba(29,78,216,0.8)] animate-pulse"></span>
              <span className="text-slate-700 font-semibold tracking-wider text-xs uppercase">Premium Logistics Provider</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Logistics with a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Digital Advantage.</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              End-to-end integrated services from Purchase Order to Proof of Delivery. 
              Empowering your supply chain with cloud-based platforms and data-driven operations.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="primary" className="w-full sm:w-auto shadow-xl shadow-brand-main/20" onClick={() => navigate('/contact')}>
                Partner With Us
              </Button>
              <Button variant="outline" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-slate-300/80 hover:bg-white transition-all shadow-sm" onClick={() => navigate('/services')}>
                Explore Services
              </Button>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:w-2/5 relative h-[500px] w-full">
            {/* Visual Glass Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-10 right-4 w-72 bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-20"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">99.9%</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">On-time Delivery</p>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mt-4 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full w-[99%]"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-20 left-4 w-72 bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Global Cloud</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Live Tracking</p>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <div className="w-full h-2 bg-slate-200/60 rounded-full"></div>
                <div className="w-4/5 h-2 bg-slate-200/60 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
