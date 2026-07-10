import React from 'react';

/** Gold uppercase eyebrow label that sits above section headings. */
export const Eyebrow = ({ children, className = '' }) => (
  <span className={`inline-block text-[#D4AF37] font-bold tracking-[0.18em] uppercase text-xs md:text-sm ${className}`}>
    {children}
  </span>
);

/** Standard section heading block: eyebrow → title → optional deck. */
export const SectionHeading = ({ eyebrow, title, deck, align = 'left', light = false, className = '' }) => (
  <div className={`${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left'} ${className}`}>
    {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
    <h2 className={`font-playfair font-bold leading-tight text-3xl md:text-4xl ${light ? 'text-white' : 'text-[#1B4D3E]'} mt-0 mb-4`}>
      {title}
    </h2>
    {deck && (
      <p className={`text-lg leading-relaxed ${light ? 'text-gray-200' : 'text-gray-600'} m-0`}>{deck}</p>
    )}
  </div>
);

/** Horizontal stat band (big number + label). */
export const StatBand = ({ stats, className = '' }) => (
  <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${className}`}>
    {stats.map(([big, small]) => (
      <div key={small}>
        <div className="font-playfair text-3xl md:text-4xl font-bold text-[#D4AF37]">{big}</div>
        <div className="text-sm text-gray-300 mt-1">{small}</div>
      </div>
    ))}
  </div>
);

/** Photo with a caption chip, consistent framing. */
export const Figure = ({ src, alt, caption, aspect = 'aspect-[16/10]', className = '' }) => (
  <figure className={`relative rounded-2xl overflow-hidden shadow-md border border-gray-200 ${aspect} ${className}`}>
    <img src={src} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
    {caption && (
      <figcaption className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
        {caption}
      </figcaption>
    )}
  </figure>
);

/** "Project spec" sidebar card used on case studies (like an architecture feature). */
export const ProjectSpec = ({ rows, className = '' }) => (
  <div className={`bg-[#0A2F24] text-white rounded-2xl p-6 md:p-7 shadow-lg ${className}`}>
    <div className="text-[#D4AF37] font-bold tracking-[0.18em] uppercase text-xs mb-5">Project Detail</div>
    <dl className="space-y-4">
      {rows.map(([label, value]) => (
        <div key={label} className="flex flex-col gap-0.5 border-b border-white/10 pb-3 last:border-0 last:pb-0">
          <dt className="text-xs uppercase tracking-wide text-gray-400">{label}</dt>
          <dd className="text-[15px] font-semibold text-white m-0">{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);
