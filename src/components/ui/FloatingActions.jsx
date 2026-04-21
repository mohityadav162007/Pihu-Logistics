import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  // Corporate contact numbers
  const phoneNumber = "+919993552893";
  const whatsappNumber = "919993552893"; // Without '+' for wa.me

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col space-y-3">
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 lg:p-4 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center"
      >
        <MessageCircle size={20} className="lg:w-6 lg:h-6" />
      </a>
      <a 
        href={`tel:${phoneNumber}`}
        className="bg-brand-main hover:bg-blue-700 text-white p-3 lg:p-4 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center"
      >
        <Phone size={20} className="lg:w-6 lg:h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
