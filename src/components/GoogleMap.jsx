import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Embedded Google Map. Defaults to the Art-is-Tree HQ; pass `query` (an
 * address or "City, VA") and `title` to center it on a specific service area.
 */
const GoogleMap = ({
  query = '2597 Nestlebrook Trl, Virginia Beach, VA 23456',
  title = 'Art-is-Tree LLC Service Area — Virginia Beach',
  className,
}) => {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className={cn('w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50', className)}>
      <iframe
        title={title}
        src={src}
        className="w-full h-[400px] border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default React.memo(GoogleMap);
