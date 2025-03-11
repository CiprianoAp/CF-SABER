'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "+351123456789"; // Substitua pelo número real do WhatsApp
  const message = "Olá! Gostaria de saber mais sobre o curso."; // Mensagem predefinida

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg 
                hover:bg-green-600 transition-all duration-300 ease-in-out
                hover:scale-110 hover:shadow-xl
                flex items-center gap-2 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
        Fale Conosco
      </span>
    </button>
  );
} 