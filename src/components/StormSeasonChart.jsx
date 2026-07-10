import React from 'react';

/**
 * Self-contained bar chart (no external libs, no images) showing the relative
 * risk of storm-related tree failure across the year in coastal Virginia.
 * Used on the emergency page and city service-area pages to add real,
 * informative visual content.
 */
const MONTHS = [
  { m: 'Jan', v: 58, note: "Nor'easters" },
  { m: 'Feb', v: 52 },
  { m: 'Mar', v: 42 },
  { m: 'Apr', v: 38 },
  { m: 'May', v: 46 },
  { m: 'Jun', v: 56 },
  { m: 'Jul', v: 68 },
  { m: 'Aug', v: 88, note: 'Hurricanes' },
  { m: 'Sep', v: 100, note: 'Peak' },
  { m: 'Oct', v: 82 },
  { m: 'Nov', v: 44 },
  { m: 'Dec', v: 50 },
];

const StormSeasonChart = ({
  title = 'Storm & Tree-Failure Risk by Month in Hampton Roads',
  subtitle = 'Peak danger runs August through October with hurricane season, with a second spike from winter nor’easters.',
}) => {
  return (
    <figure className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 m-0">
      <figcaption className="mb-6 text-left">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#1B4D3E] mb-1 mt-0">{title}</h3>
        <p className="text-sm text-gray-500 m-0">{subtitle}</p>
      </figcaption>

      <div className="flex items-end justify-between gap-1.5 md:gap-3 h-52 md:h-64" role="img" aria-label={title}>
        {MONTHS.map(({ m, v, note }) => {
          const peak = v >= 80;
          return (
            <div key={m} className="flex-1 flex flex-col items-center justify-end h-full">
              {note && (
                <span className={`mb-1 text-[9px] md:text-[11px] font-semibold leading-tight text-center ${peak ? 'text-red-600' : 'text-gray-400'}`}>
                  {note}
                </span>
              )}
              <div
                className={`w-full rounded-t-md transition-all ${peak ? 'bg-red-500' : 'bg-[#1B4D3E]'}`}
                style={{ height: `${v}%` }}
              />
              <span className="mt-2 text-[10px] md:text-xs font-medium text-gray-500">{m}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-5 mt-5 text-xs text-gray-500">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-500 inline-block" /> Peak risk (hurricane season)</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#1B4D3E] inline-block" /> Elevated / normal</span>
      </div>
    </figure>
  );
};

export default StormSeasonChart;
