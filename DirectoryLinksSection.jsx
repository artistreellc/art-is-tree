
import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

/**
 * DirectoryLinksSection displays external profile links.
 * Updated: Star ratings removed for Yelp, Angi, and HomeAdvisor per Task 1.
 * Google Business Profile retains its specific rating and review count.
 */
const DirectoryLinksSection = () => {
  const directories = [
    { 
      name: "Google Business Profile", 
      url: "https://www.google.com/maps?cid=12599844776703525086", 
      color: "text-blue-600", 
      rating: "5.0", 
      reviews: "(134 reviews)",
      showRating: true 
    },
    { 
      name: "Yelp", 
      url: "https://www.yelp.com/biz/art-is-tree-virginia-beach-5", 
      color: "text-red-600", 
      showRating: false 
    },
    { 
      name: "Angi", 
      url: "https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc.htm", 
      color: "text-green-600", 
      showRating: false 
    },
    { 
      name: "HomeAdvisor", 
      url: "https://www.homeadvisor.com/rated.ArtisTreeLLC.html", 
      color: "text-orange-600", 
      showRating: false 
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Find Us Across the Web</h2>
          <p className="text-gray-600 mt-2">Check out our profiles and reviews on trusted platforms.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {directories.map((dir, index) => (
            <a 
              key={index}
              href={dir.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center group min-h-[140px]"
            >
              <span className={`font-bold ${dir.color} mb-2`}>{dir.name}</span>
              
              {dir.showRating && (
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-sm text-gray-600 font-medium mb-1">
                    {dir.rating} <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  </div>
                  {dir.reviews && (
                    <div className="text-xs text-gray-500 mb-2">{dir.reviews}</div>
                  )}
                </div>
              )}
              
              {!dir.showRating && (
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
