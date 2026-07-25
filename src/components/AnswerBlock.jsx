import React from 'react';

// Concise, featured-snippet / AI-Overview-friendly "quick answer" block.
// Placed directly under a page's hero so the direct answer to the page's core
// question is the first substantive content a crawler (or answer engine) reads.
// Keep the answer to roughly 40-60 words of plain, factual text.
const AnswerBlock = ({ label = 'Quick answer', children }) => (
  <section aria-label={label} className="bg-white border-b border-gray-100">
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-10">
      <div className="rounded-2xl border border-gray-200 border-l-4 border-l-[#D4AF37] bg-[#FAF9F6] p-6 md:p-8 shadow-sm">
        <p className="text-[#A8801A] font-bold tracking-[0.12em] uppercase text-[11px] mb-2">{label}</p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed m-0">
          {children}
        </p>
      </div>
    </div>
  </section>
);

export default AnswerBlock;
