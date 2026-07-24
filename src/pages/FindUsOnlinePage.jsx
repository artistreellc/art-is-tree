
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, MapPin, BadgeCheck } from 'lucide-react';
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

        {/* WHY OUR LISTINGS MATTER — real, keyword-rich context */}
        <section className="container mx-auto px-4 max-w-4xl mt-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-4 mt-0">
              The same Art-is-Tree, everywhere you find us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you found us on Google, the Better Business Bureau, Yelp, Angi, or a local Hampton Roads
              directory, you are looking at the same locally owned and operated company. Our name, address, and
              phone number — <a href="tel:+17573195131" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">(757) 319-5131</a> —
              are kept consistent across every listing so you can quickly confirm you are hiring the real,{' '}
              <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">licensed and insured</Link>{' '}
              Art-is-Tree LLC and not a look-alike. Consistent citations are also how search engines verify a
              legitimate local business, which is part of why we rank at the top for tree service in Virginia Beach.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Every profile links back to real work: hundreds of five-star reviews from neighbors across Virginia
              Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk, photos from actual crane removals and storm
              cleanups in our <Link to="/gallery" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">work gallery</Link>,
              and the full range of our <Link to="/services" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">tree services</Link>.
              If you are comparing quotes, our verified listings and BBB A+ accreditation give you an easy way to
              vet us before you ever pick up the phone.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A2F24] text-[#D4AF37] flex-shrink-0">
                  <BadgeCheck className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1 mt-0">Verified &amp; accredited</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    A verified Google Business Profile and BBB A+ accreditation — real credentials you can check yourself.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A2F24] text-[#D4AF37] flex-shrink-0">
                  <Star className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1 mt-0">Reviewed by neighbors</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    Read hundreds of authentic <Link to="/testimonials" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">customer reviews</Link> from
                    homeowners right here in Hampton Roads.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A2F24] text-[#D4AF37] flex-shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1 mt-0">Local to the coast</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    Serving all of <Link to="/service-areas/virginia-beach" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Virginia Beach</Link> and
                    the greater Hampton Roads area, seven days a week.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A2F24] text-[#D4AF37] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1 mt-0">Licensed &amp; insured</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    Fully licensed and insured, working to ANSI A300 and Z133 safety standards on every job.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                Prefer to talk it through? Reach out for a free, no-obligation estimate anywhere in Hampton Roads.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#1B4D3E] hover:bg-[#143a2f] text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FindUsOnlinePage;
