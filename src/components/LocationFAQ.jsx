import React from 'react';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

/**
 * Localized FAQ block for a service-area page. Renders a visible, crawlable
 * accordion and emits matching FAQPage JSON-LD (good for rich results + AEO).
 *
 * @param {string} [city]     City name, e.g. "Norfolk" (used for the default heading)
 * @param {string} [heading]  Overrides the default heading (e.g. for service pages)
 * @param {{question: string, answer: string}[]} faqs
 */
const LocationFAQ = ({ city, heading, faqs = [] }) => {
  if (!faqs.length) return null;

  const title = heading || `Tree Service in ${city}: Frequently Asked Questions`;

  return (
    <section className="container mx-auto px-4 max-w-4xl my-16" aria-labelledby="location-faq-heading">
      <FAQPageSchema items={faqs} />
      <h2
        id="location-faq-heading"
        className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-8 text-center"
      >
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="font-semibold text-lg text-[#1B4D3E] cursor-pointer list-none flex justify-between items-center gap-4">
              {faq.question}
              <span aria-hidden="true" className="text-[#D4AF37] text-2xl leading-none flex-shrink-0">+</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default LocationFAQ;
