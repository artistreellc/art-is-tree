import React, { useState } from 'react';
import { Play } from 'lucide-react';

/**
 * Lightweight YouTube embed. Renders only the thumbnail + a play button until
 * clicked, then swaps in the real iframe. This keeps the heavy YouTube player
 * JS off the initial page load (protects LCP/TBT/INP) while still offering the
 * video. Uses the privacy-friendly youtube-nocookie domain.
 */
const YouTubeFacade = ({ id, title = 'Watch video', aspectClass = 'aspect-video', className = '' }) => {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl shadow-lg bg-black ${className}`}>
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 shadow-xl group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
          </span>
        </button>
      )}
    </div>
  );
};

export default YouTubeFacade;
