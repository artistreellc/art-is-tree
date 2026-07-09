import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/seoMetadata';

/**
 * DirectoryLinksSection lists every verified profile/listing the business
 * maintains, linked under its descriptive name. Sourced from
 * COMPANY_INFO.listings so it stays in sync with the JSON-LD sameAs graph.
 */
const DirectoryLinksSection = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Find Us Across the Web</h2>
          <p className="text-gray-600 mt-2">Art-is-Tree LLC on the review sites and directories homeowners trust.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMPANY_INFO.listings.map((dir) => (
            <a
              key={dir.name}
              href={dir.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Art-is-Tree LLC on ${dir.name}`}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center group min-h-[140px]"
            >
              <span className="font-bold text-[#1B4D3E] mb-2">{dir.name}</span>

              {dir.rating ? (
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-sm text-gray-600 font-medium mb-1">
                    {dir.rating} <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  </div>
                  {dir.reviews && (
                    <div className="text-xs text-gray-500 mb-2">({dir.reviews} reviews)</div>
                  )}
                </div>
              ) : (
                <div className="text-xs text-gray-500 mb-2 italic">Official Profile</div>
              )}

              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#1B4D3E] transition-colors mt-auto" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectoryLinksSection;
