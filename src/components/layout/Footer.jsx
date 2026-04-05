const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold text-white mb-6">
            PIHU <span className="text-brand-main">LOGISTICS</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Technology-driven logistics provider offering end-to-end integrated services from Purchase Order to Proof of Delivery.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><a href="/" className="hover:text-white transition-colors block">Home</a></li>
            <li><a href="/services" className="hover:text-white transition-colors block">Services</a></li>
            <li><a href="/about" className="hover:text-white transition-colors block">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors block">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Services</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><span className="block">Warehousing</span></li>
            <li><span className="block">Domestic Trucking</span></li>
            <li><span className="block">Customized Logistics</span></li>
            <li><span className="block">Digital Integrations</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Contact</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              <span className="text-white block mb-1">GST Registration</span>
              23CSBPS5022H1ZZ
            </li>
            <li className="mt-4">
              <span className="text-white block mb-1">Corporate HQ</span>
              50,000+ sqft processing hub
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Pihu Logistics. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
