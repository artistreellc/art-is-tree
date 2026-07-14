
import React from 'react';
import DirectoryLinksSection from '@/components/DirectoryLinksSection';
import DirectoryLinksSchema from '@/components/seo/DirectoryLinksSchema';
import GoogleBusinessProfileIntegration from '@/components/GoogleBusinessProfileIntegration';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const FindUsOnlinePage = () => {
  return (
    <>
      <LocalSEOMeta 
        pageTitle="Find Art-is-Tree Online | Virginia Beach Tree Care" 
        description="Connect with Art-is-Tree LLC on Google, BBB, Yelp and Angi. The licensed, insured, BBB A+ tree service for Virginia Beach and Hampton Roads, VA." 
      />
      
      <DirectoryLinksSchema />

      <div className="flex flex-col w-full min-h-screen bg-gray-50 pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
            Verified Local Listings & Citations
          </h1>
          <p className="text-gray-600 text-lg">
            Art-is-Tree LLC is proud to be a highly-rated, verified tree service provider in Virginia Beach, Norfolk, and Chesapeake. Explore our profiles across the web.
          </p>
        </div>

        <DirectoryLinksSection />
        
        <div className="my-8"></div>

        <GoogleBusinessProfileIntegration />
      </div>
    </>
  );
};

export default FindUsOnlinePage;
