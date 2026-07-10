import React from 'react';
import { MapPin, ChevronRight, Trees, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeighborhoodServiceContent = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden contain-content">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Local Coverage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-[#1B4D3E] mt-0 mb-6">
            Serving Every Neighborhood in Virginia Beach & Hampton Roads
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We work all over Hampton Roads &mdash; from emergency storm calls to scheduled pruning &mdash; for homeowners and businesses in Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. Trees, soil, and setback rules change from one neighborhood to the next, and we know the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Oceanfront */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Oceanfront</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Salt spray and steady wind are hard on trees near the beach. We prune and remove them to hold up in coastal conditions.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Great Neck */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Great Neck</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Big mature oaks that need proper pruning and canopy work to stay healthy and safe over the house.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: Kempsville */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Kempsville</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Fast storm cleanup and hazardous removals when a limb or a whole tree comes down on your property.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Thoroughgood */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Thoroughgood</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              An older neighborhood with heritage trees &mdash; careful pruning and honest health checks to keep them standing.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 5: Chicks Beach */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Chicks Beach</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Waterfront lots where we lift canopies and clear trees crowding the house or blocking the view.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 6: Sandbridge */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Sandbridge</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Exposed coastal properties where storms hit hardest &mdash; we prune trees to take the wind.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 7: Town Center */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Town Center</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Commercial and street trees kept trimmed, safe, and clear of buildings, parking, and signage.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 8: Red Mill */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Red Mill</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Residential trimming, lot clearing, and stump grinding done clean in an established neighborhood.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 9: Pungo */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Pungo</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Rural acreage &mdash; land clearing, brush work, and taking down dead or hazardous trees on bigger lots.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 10: Bayside */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Bayside</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Virginia Beach</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Waterfront thinning and storm prep so your trees are ready before hurricane season, not after.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 11: Norfolk */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Norfolk</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Norfolk</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Tight urban lots where removals take crane work and careful rigging, plus 24/7 storm response.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 12: Chesapeake */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:border-[#1B4D3E]/20 transition-all duration-300 relative group contain-content flex flex-col h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trees className="w-16 h-16 text-[#1B4D3E]" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 m-0 leading-tight">Chesapeake</h3>
                <p className="text-sm text-gray-500 font-medium m-0 uppercase tracking-wide">Chesapeake</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 flex-grow text-base">
              Larger properties with a lot of canopy to manage, plus land clearing when you need space opened up.
            </p>
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm font-bold text-[#1B4D3E] hover:text-[#D4AF37] transition-colors mt-auto relative z-10 touch-target"
            >
              View Service Area <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeighborhoodServiceContent;