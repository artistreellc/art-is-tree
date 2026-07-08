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
            Art-is-Tree LLC provides premier, fully licensed tree care services across the entire Hampton Roads region. From emergency storm response to routine maintenance, our tree care professionals are dedicated to protecting your property and enhancing the natural beauty of Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk.
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
              Specialized coastal wind damage and salt spray tree care.
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
              Large mature oaks requiring professional pruning and canopy management.
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
              Rapid response storm cleanup and hazardous emergency tree removal.
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
              Historic tree preservation, delicate maintenance, and health assessments.
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
              Comprehensive waterfront property tree management and canopy lifting.
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
              Coastal erosion mitigation and wind-resistant tree pruning services.
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
              Commercial and urban tree care, street canopy maintenance, and landscape management.
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
              Detail-oriented residential tree trimming, lot clearing, and complete stump grinding.
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
              Heavy-duty rural land clearing, acreage management, and hazardous deadwood removal.
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
              Proactive waterfront tree services, structural thinning, and hurricane storm preparation.
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
              Precision urban tree removal in tight spaces, crane-assisted extraction, and 24/7 emergency response.
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
              Large property tree care, extensive canopy maintenance, and professional land clearing services.
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