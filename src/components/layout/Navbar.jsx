import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useSiteImage } from '../../hooks/useSiteImage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const logoSrc = useSiteImage('siteLogo');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-premium py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoSrc}
            alt="Pihu Logistics"
            className="h-12 w-auto max-w-[180px] object-contain transition-transform group-hover:scale-105"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-brand-dark text-white px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:bg-brand-blue hover:shadow-xl active:scale-95"
          >
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
          <Motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-semibold text-brand-dark hover:text-brand-blue transition-colors px-4 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => { setIsOpen(false); navigate('/contact'); }}
                className="bg-brand-dark text-white px-6 py-4 rounded-xl font-bold text-center active:scale-95"
              >
                Get Quote
              </button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
