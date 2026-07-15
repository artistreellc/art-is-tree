import React from 'react';

/**
 * Turn a heading string into a stable, URL-safe anchor id (for deep links).
 * normalize('NFKD') + stripping curly/straight quotes matters because these
 * headings use apostrophes ("We’re", "won’t") that would otherwise become
 * ugly encoded ids like "we-re".
 */
const slugify = (value) =>
  String(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[‘’“”']/g, '') // curly + straight quotes → gone (We’re → were)
    .replace(/&/g, ' and ')
    .replace(/[^\w]+/g, '-') // any non-word run → single hyphen
    .replace(/^-+|-+$/g, '');

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** Format an ISO "YYYY-MM-DD" date deterministically (no locale/timezone drift). */
const formatDate = (iso) => {
  const [y, m, d] = String(iso).split('-').map(Number);
  if (!y || !m || !d) return '';
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

/**
 * Visible author byline. MUST stay in sync with the Person author emitted by
 * CaseStudySchema — Google's E-E-A-T guidance wants the schema author to match
 * a real, visible byline on the page.
 */
export const Byline = ({ date, light = false, className = '' }) => (
  <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium m-0 ${light ? 'text-white/85' : 'text-gray-600'} ${className}`}>
    <span>By <span className="font-bold">Mike Campbell</span>, Owner</span>
    {date && (
      <>
        <span aria-hidden="true" className={light ? 'text-white/50' : 'text-gray-400'}>·</span>
        <time dateTime={date}>{formatDate(date)}</time>
      </>
    )}
  </p>
);

/** Gold uppercase eyebrow label that sits above section headings. */
export const Eyebrow = ({ children, className = '' }) => (
  <span className={`inline-block text-[#D4AF37] font-bold tracking-[0.18em] uppercase text-xs md:text-sm ${className}`}>
    {children}
  </span>
);

/** Standard section heading block: eyebrow → title → gold rule → optional deck. */
export const SectionHeading = ({ eyebrow, title, deck, align = 'left', light = false, rule = true, className = '', id }) => (
  <div className={`${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left'} ${className}`}>
    {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
    <h2
      id={id || (typeof title === 'string' ? slugify(title) : undefined)}
      className={`font-playfair font-bold leading-tight text-3xl md:text-4xl scroll-mt-24 ${light ? 'text-white' : 'text-[#1B4D3E]'} mt-0 mb-3`}
    >
      {title}
    </h2>
    {rule && (
      <span className={`block h-[3px] w-14 rounded-full bg-[#D4AF37] ${align === 'center' ? 'mx-auto' : ''} ${deck ? 'mb-4' : ''}`} aria-hidden="true" />
    )}
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
  <figure className={`relative rounded-2xl overflow-hidden border border-black/5 ring-1 ring-black/5 shadow-[0_20px_45px_-18px_rgba(10,47,36,0.55)] ${aspect} ${className}`}>
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
  <div className={`bg-[#0A2F24] text-white rounded-2xl p-6 md:p-7 shadow-lg border-t-4 border-[#D4AF37] ${className}`}>
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
