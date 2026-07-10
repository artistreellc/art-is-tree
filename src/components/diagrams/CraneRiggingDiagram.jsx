import React from 'react';

/**
 * Hand-built technical diagram (pure SVG, no images/libs) showing how a
 * crane-assisted removal lifts a tree section up and over the house to a
 * clear drop zone. Used on the crane case study and crane-removal service page.
 */
const CraneRiggingDiagram = () => {
  const green = '#1B4D3E';
  const gold = '#D4AF37';
  const ink = '#334155';
  return (
    <figure className="m-0 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-6">
      <svg viewBox="0 0 820 470" className="w-full h-auto" role="img"
        aria-label="Diagram: a crane lifts a tree section up and over the house to a clear drop zone">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F3F6F4" />
            <stop offset="1" stopColor="#FBFBF9" />
          </linearGradient>
        </defs>

        {/* backdrop + ground */}
        <rect x="0" y="0" width="820" height="470" fill="url(#sky)" rx="12" />
        <line x1="24" y1="410" x2="796" y2="410" stroke={green} strokeWidth="2" />
        <rect x="24" y="410" width="772" height="40" fill={green} opacity="0.05" />

        {/* keep-clear ground strip under the house */}
        <rect x="600" y="411" width="196" height="7" rx="3.5" fill="#DC2626" opacity="0.35" />
        <text x="698" y="438" textAnchor="middle" fontSize="12" fontWeight="600" fill="#B91C1C" fontFamily="Inter, sans-serif">Keep clear: house &amp; landscaping</text>

        {/* clear drop zone (left) */}
        <ellipse cx="230" cy="404" rx="70" ry="10" fill={gold} opacity="0.18" />
        <path d="M194 402 l14 -22 12 16 10 -26 12 30 z" fill={green} opacity="0.55" />
        <text x="230" y="438" textAnchor="middle" fontSize="12" fontWeight="600" fill={ink} fontFamily="Inter, sans-serif">Clear drop zone</text>

        {/* ── house (right) ── */}
        <polygon points="612,320 700,270 792,320" fill={green} opacity="0.9" />
        <rect x="632" y="320" width="150" height="90" fill="#E7ECE9" stroke={green} strokeWidth="1.5" />
        <rect x="690" y="356" width="34" height="54" fill={green} opacity="0.8" />
        <rect x="648" y="338" width="26" height="24" fill={green} opacity="0.25" />

        {/* ── remaining tree trunk beside the house ── */}
        <path d="M600 410 C596 360 604 330 600 300" stroke="#6B4A2B" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M600 306 l-14 -6 M600 314 l16 -8" stroke="#6B4A2B" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="600" cy="300" rx="9" ry="4" fill="#C9A227" />

        {/* ── crane (left) ── */}
        {/* outrigger pads */}
        <rect x="60" y="398" width="30" height="10" rx="2" fill={ink} />
        <rect x="196" y="398" width="30" height="10" rx="2" fill={ink} />
        {/* body */}
        <rect x="78" y="338" width="128" height="58" rx="8" fill={green} />
        <rect x="150" y="348" width="46" height="30" rx="4" fill={gold} opacity="0.85" />
        {/* counterweight */}
        <rect x="70" y="352" width="20" height="40" rx="3" fill="#1a3a30" />

        {/* lattice boom pivot -> tip */}
        <g stroke={green} strokeWidth="7" strokeLinecap="round">
          <line x1="150" y1="352" x2="556" y2="96" />
        </g>
        <g stroke={gold} strokeWidth="2.5" opacity="0.9">
          <line x1="150" y1="360" x2="556" y2="104" />
          <line x1="150" y1="344" x2="556" y2="88" />
          {/* lattice cross-bracing */}
          {[0.16, 0.34, 0.52, 0.7, 0.86].map((t, i) => {
            const x1 = 150 + t * (556 - 150), y1 = 344 + t * (88 - 344);
            const x2 = 150 + t * (556 - 150), y2 = 360 + t * (104 - 360);
            const nx = 150 + (t + 0.08) * (556 - 150), ny = 360 + (t + 0.08) * (104 - 360);
            return <g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} /><line x1={x1} y1={y1} x2={nx} y2={ny} /></g>;
          })}
        </g>
        {/* pulley at tip */}
        <circle cx="556" cy="96" r="7" fill="#fff" stroke={green} strokeWidth="3" />

        {/* load line down to hook */}
        <line x1="556" y1="103" x2="556" y2="196" stroke={ink} strokeWidth="2" />
        <path d="M551 196 a5 6 0 1 0 10 0" fill="none" stroke={ink} strokeWidth="2.5" />

        {/* rigging sling + lifted section */}
        <line x1="556" y1="200" x2="547" y2="212" stroke={gold} strokeWidth="2.5" />
        <line x1="556" y1="200" x2="569" y2="212" stroke={gold} strokeWidth="2.5" />
        <rect x="544" y="212" width="28" height="74" rx="8" fill="#6B4A2B" />
        <ellipse cx="558" cy="212" rx="14" ry="4.5" fill="#8a6238" />

        {/* lift path arc over the house */}
        <path d="M558 250 C470 150 360 120 262 384" fill="none" stroke={gold} strokeWidth="2.5" strokeDasharray="7 7" />
        <polygon points="262,384 256,372 270,374" fill={gold} />

        {/* ── labels ── */}
        <g fontFamily="Inter, sans-serif" fontSize="12.5" fontWeight="600" fill={ink}>
          <line x1="360" y1="196" x2="360" y2="232" stroke={ink} strokeWidth="1" />
          <text x="360" y="248" textAnchor="middle">Lattice boom</text>

          <line x1="556" y1="150" x2="616" y2="150" stroke={ink} strokeWidth="1" />
          <text x="620" y="154">Load line</text>

          <line x1="558" y1="230" x2="470" y2="292" stroke={ink} strokeWidth="1" />
          <text x="466" y="306" textAnchor="end">Rigged section &amp; sling</text>

          <text x="392" y="112" textAnchor="middle" fill={gold} fontSize="13" fontWeight="700">Lift path clears the roof</text>
        </g>
      </svg>
      <figcaption className="text-sm text-gray-500 mt-3 px-1">
        How a crane removal works: each section is rigged, cut, and lifted straight up and over the house to a clear drop zone — never dragged across the roof or landscaping.
      </figcaption>
    </figure>
  );
};

export default CraneRiggingDiagram;
