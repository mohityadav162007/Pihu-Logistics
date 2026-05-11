import { MessageCircle, Phone } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const FloatingActions = () => {
  // Corporate contact numbers
  const phoneNumber = "+919993552893";
  const whatsappNumber = "919993552893"; // Without '+' for wa.me

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex flex-col items-end space-y-4">
      {/* WhatsApp Action */}
      <Motion.a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 bg-white text-[#25D366] px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-50">
          WhatsApp Us
        </span>
      </Motion.a>

      {/* Call Action */}
      <Motion.a 
        href={`tel:${phoneNumber}`}
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-brand-blue text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <Phone size={24} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-brand-blue px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-50">
          Call Us
        </span>
      </Motion.a>
    </div>
  );
};

export default FloatingActions;
