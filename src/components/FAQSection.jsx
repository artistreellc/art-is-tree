import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * @param {Object} props
 * @param {Array<{question: string, answer: string}>} [props.items]
 * @param {string} [props.title]
 */
const FAQSection = ({ items = [], title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">{title}</h2>
          <p className="text-gray-600">Find answers to common questions about our tree care services.</p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <button
                  id={`faq-q-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="font-bold text-left text-gray-900">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                  hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;