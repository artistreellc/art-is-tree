import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, ClipboardList } from 'lucide-react';

export default function MobileCTABar() {
  const location = useLocation();

  const handlePhoneClick = () => {
    if (window.gtag_report_phone_click) {
      window.gtag_report_phone_click();
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A2F24] border-t border-[#1B4D3E] shadow-[0_-4px_15px_rgba(0,0,0,0.3)] safe-area-pb">
      <div className="flex justify-between items-stretch h-16">
        <Link
          to="/emergency"
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${
            location.pathname === '/emergency' ? 'bg-[#133A2E] text-white' : 'text-gray-300 hover:text-white hover:bg-[#133A2E]'
          }`}
          aria-label="Emergency Services"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Emergency</span>
        </Link>

        <a
          href="tel:7573195131"
          onClick={handlePhoneClick}
          className="flex-[1.2] flex flex-col items-center justify-center gap-1 bg-[#D4AF37] text-black transition-transform active:scale-95 shadow-inner"
          aria-label="Call Now: (757) 319-5131"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="text-[11px] font-extrabold uppercase tracking-wider">Call Now</span>
        </a>

        <Link
          to="/contact"
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${
            location.pathname === '/contact' ? 'bg-[#133A2E] text-white' : 'text-gray-300 hover:text-white hover:bg-[#133A2E]'
          }`}
          aria-label="Get a Free Quote"
        >
          <ClipboardList className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Free Quote</span>
        </Link>
      </div>
    </div>
  );
}