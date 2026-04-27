import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark">
                <Truck size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                Pihu <span className="text-brand-blue">Logistics</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Technology-driven logistics provider offering end-to-end integrated services from Purchase Order to Proof of Delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><span className="cursor-default hover:text-brand-blue transition-colors">Warehousing</span></li>
              <li><span className="cursor-default hover:text-brand-blue transition-colors">Domestic Trucking</span></li>
              <li><span className="cursor-default hover:text-brand-blue transition-colors">Customized Logistics</span></li>
              <li><span className="cursor-default hover:text-brand-blue transition-colors">Digital Integrations</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Contact</h4>
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-white font-bold text-[10px] uppercase tracking-widest mb-1.5 grayscale opacity-50">GST Registration</div>
                <div className="font-medium">23CBPPSS022H1ZZ</div>
              </div>
              <div>
                <div className="text-white font-bold text-[10px] uppercase tracking-widest mb-1.5 grayscale opacity-50">Corporate HQ</div>
                <div className="font-medium">50,000+ sqft processing hub</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} Pihu Logistics. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-brand-blue transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-brand-blue transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
