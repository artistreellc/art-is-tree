import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

const GoogleMap = ({ className }) => {
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef} 
      className={cn("w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50", className)}
    >
      <iframe
        title="Art-is-Tree LLC Service Area — Virginia Beach"
        src="https://www.google.com/maps?q=2597+Nestlebrook+Trl,+Virginia+Beach,+VA+23456&output=embed"
        className="w-full h-[400px] border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default React.memo(GoogleMap);