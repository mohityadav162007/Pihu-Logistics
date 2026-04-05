import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  // Replace these with the actual corporate numbers
  const phoneNumber = "+919999999999";
  const whatsappNumber = "919999999999"; // Without '+' for wa.me

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col space-y-3">
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-slate-800 hover:bg-slate-900 text-white p-3 lg:p-4 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center"
      >
        <MessageCircle size={20} className="lg:w-6 lg:h-6" />
      </a>
      <a 
        href={`tel:${phoneNumber}`}
        className="bg-brand-main hover:bg-orange-600 text-white p-3 lg:p-4 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center"
      >
        <Phone size={20} className="lg:w-6 lg:h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
