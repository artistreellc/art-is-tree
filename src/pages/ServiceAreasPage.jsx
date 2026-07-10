
import React from 'react';
import { ChevronRight, Home, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceAreasMap from '@/components/ServiceAreasMap';
import NeighborhoodServiceContent from '@/components/NeighborhoodServiceContent';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const ServiceAreasPage = () => {
  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Areas | Hampton Roads VA | Art-is-Tree" 
        description="Art-is-Tree LLC serves Virginia Beach, Norfolk, Chesapeake, Portsmouth and Suffolk with licensed, insured tree removal, trimming and 24/7 storm cleanup." 
      />

      <div className="pt-0 min-h-screen bg-gray-50">
        <header className="bg-[#1B4D3E] text-white pt-20 pb-20 text-center relative border-b border-[#12362b] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=50&w=1200')] opacity-10 bg-cover bg-center"></div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-0">Service Areas</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6 font-light">Dedicated Hampton Roads tree professionals serving your neighborhood.</p>
              
              <nav className="flex justify-center items-center text-sm font-medium text-gray-300">
                <Link to="/" className="hover:text-white transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
                <span className="text-white">Service Areas</span>
              </nav>
            </div>
        </header>

        <main className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl mb-16">
             <div className="prose prose-lg text-gray-700 leading-relaxed mx-auto space-y-6">
               <p className="text-xl text-[#1B4D3E] font-medium text-center mb-10 border-b border-gray-200 pb-8">
                 <strong>Art-is-Tree LLC</strong> is a locally owned <strong>Hampton Roads tree service</strong>, working across Virginia Beach and the surrounding cities.
               </p>
               <p>
                 Our owner has 15+ years climbing in these exact communities, so we know how the coast treats trees here &mdash; the wind, the sandy and clay soils, and which removals fall under local and waterfront rules. We work for homeowners, HOAs, and businesses throughout the region.
               </p>
               <h2 className="text-2xl font-bold text-[#1B4D3E] font-playfair mt-8 mb-4">Virginia Beach Coverage</h2>
               <p>
                 Virginia Beach is home base. When people search for a <strong>tree service Virginia Beach</strong> homeowners actually trust, that's us. Oceanfront, Great Neck, Kempsville, Pungo &mdash; wherever you are in the city, we can get a crew out to you.
               </p>
               <h2 className="text-2xl font-bold text-[#1B4D3E] font-playfair mt-8 mb-4">Norfolk and Chesapeake</h2>
               <p>
                 We also cover the neighboring cities, including <strong>tree service Chesapeake</strong> and <strong>tree service Norfolk</strong>. Norfolk's older neighborhoods have big, mature trees packed into tight lots, which takes careful rigging and often a crane to remove safely. We're set up for exactly that kind of work.
               </p>
               <h2 className="text-2xl font-bold text-[#1B4D3E] font-playfair mt-8 mb-4">Same Standard Everywhere</h2>
               <p>
                 Wherever you are in our service area, the job is done the same way: careful, to code, and cleaned up after. And because we're licensed and insured, any liability during the work is on us, not you.
               </p>
             </div>
          </div>

          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-12 text-center">
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Interactive Coverage</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mt-0">Explore Our Service Regions</h2>
            </div>
            
            <ServiceAreasMap />

            <div className="max-w-4xl mx-auto mt-20 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#1B4D3E] font-playfair">Serving Tree Care Across Hampton Roads</h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed mx-auto space-y-6">
                <p>We provide expert tree removal, trimming, and emergency tree services throughout the Oceanfront, Virginia Beach. In Great Neck, our tree care crew delivers precision pruning and canopy management for mature oaks. Homeowners in Kempsville rely on us for fast storm cleanup and hazardous tree removal.</p>
                <p>Beyond Virginia Beach, we provide comprehensive tree care across the greater region. We offer precision urban tree removal and crane-assisted extraction in Norfolk. Large property tree care and extensive canopy maintenance are available throughout Chesapeake. We also deliver professional stump grinding and emergency tree services in Portsmouth and Suffolk.</p>
              </div>
            </div>
            
            <div className="mt-16 text-center max-w-3xl mx-auto bg-gray-50 p-10 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-playfair font-bold text-[#1B4D3E] mb-4 mt-0">Don't see your neighborhood?</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Contact us to verify coverage in your specific location. We regularly accommodate clients on the borders of our primary service areas to provide our top-tier tree removal and maintenance solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-[#D4AF37] rounded-lg hover:bg-[#c19b2e] transition-all duration-300 shadow-lg"
                >
                  <Clock className="w-5 h-5 mr-2" /> Request Quick Scheduling
                </Link>
                <a 
                  href="tel:7573195131" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#1B4D3E] rounded-lg hover:bg-[#12362b] transition-all duration-300 shadow-lg"
                >
                  <ShieldCheck className="w-5 h-5 mr-2" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </main>

        <NeighborhoodServiceContent />
      </div>
    </>
  );
};

export default ServiceAreasPage;
