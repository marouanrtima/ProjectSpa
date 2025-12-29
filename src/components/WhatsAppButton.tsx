import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = '+212764715502'; // Replace with actual number
    const message = encodeURIComponent(('Salam, bghit n3raf taman'));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      title={('whatsapp')}
    >
      <MessageCircle size={24} />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {('whatsapp')}
      </span>
    </button>
  );
};