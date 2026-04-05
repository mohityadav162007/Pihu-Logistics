import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 py-4' : 'bg-white/90 backdrop-blur-sm py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-brand-dark">
          PIHU <span className="text-brand-main font-semibold">LOGISTICS</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 items-center">
          <a href="/" className="font-medium text-slate-500 hover:text-brand-main transition-colors text-sm tracking-wide uppercase">Home</a>
          <a href="/services" className="font-medium text-slate-500 hover:text-brand-main transition-colors text-sm tracking-wide uppercase">Services</a>
          <a href="/about" className="font-medium text-slate-500 hover:text-brand-main transition-colors text-sm tracking-wide uppercase">About Us</a>
          <a href="/contact" className="font-medium text-slate-500 hover:text-brand-main transition-colors text-sm tracking-wide uppercase">Contact</a>
          <button className="bg-brand-dark hover:bg-slate-800 text-white px-8 py-3 rounded-md font-semibold text-sm transition-colors duration-300">
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              <a href="/" className="font-medium text-brand-dark hover:text-brand-main py-2 border-b border-slate-100">Home</a>
              <a href="/services" className="font-medium text-brand-dark hover:text-brand-main py-2 border-b border-slate-100">Services</a>
              <a href="/about" className="font-medium text-brand-dark hover:text-brand-main py-2 border-b border-slate-100">About Us</a>
              <a href="/contact" className="font-medium text-brand-dark hover:text-brand-main py-2 border-b border-slate-100">Contact</a>
              <button className="bg-brand-main text-white px-6 py-3 rounded-md font-semibold text-sm mt-4 w-full">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
