import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Award, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';

const LandClearingPage = () => {
  const serviceAreas = ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"];
  const description = "Lot and land clearing across Virginia Beach and Hampton Roads for building, landscaping and brush removal. Licensed, insured crews. Free estimates.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocalSEOMeta 
        pageTitle="Land Clearing Virginia Beach VA | Hampton Roads" 
        description={description} 
      />
      
      <ServiceSchema 
        name="Land Clearing" 
        description={description} 
        serviceAreas={serviceAreas} 
      />
      
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Land Clearing', url: '/services/land-clearing' }
        ]} 
      />

      <section className="bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <nav className="text-sm font-medium text-gray-300 mb-6 flex justify-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>→</span>
            <Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <span>→</span>
            <span className="text-[#D4AF37]">Land Clearing</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Land Clearing & Lot Clearing in Virginia Beach
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you are clearing a residential lot for new construction, a commercial parcel for development, or an overgrown property for general cleanup, Art-is-Tree LLC handles land clearing across Virginia Beach, Chesapeake, Norfolk, Suffolk, and surrounding Hampton Roads. Licensed, insured, and equipped for any scale of clearing job.
          </p>
          
          <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-10 text-lg shadow-xl" asChild>
            <a href="tel:7573195131">
              <Phone className="mr-2 w-5 h-5" />
              Call (757) 319-5131 for a Free Estimate
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Land clearing in Hampton Roads requires understanding what's happening below the surface as much as what's visible above it. Virginia Beach and Chesapeake sit on the Atlantic Coastal Plain — a geological formation characterized by deep sandy and loamy soils layered over varying depths of clay substrate. What grows on a lot and how the roots behave in the soil determines how the clearing job needs to be approached — and that varies significantly across Hampton Roads.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Full-Scope Land Clearing Across Hampton Roads</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Art-is-Tree clears residential lots and commercial acreage across Virginia Beach, Chesapeake, Suffolk, Norfolk, and surrounding Hampton Roads for new construction, pool installations, additions, landscaping projects, and general property cleanup. We handle the full scope from the first assessment through final site preparation — not just the visible material above grade but the stumps, root systems, and organic debris below it that will affect how the cleared area performs over time.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Native and Invasive Species in Hampton Roads Lots</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Virginia Beach's wooded lots contain a mix of native and invasive species that each create different clearing challenges. Loblolly pines in the southern Virginia Beach corridor — Pungo, Creeds, and the rural sections west of Princess Anne Road — grow fast in the region's coastal plain soils and develop wide lateral root networks. For individual large tree work outside of full clearing projects, see our <Link to="/services/tree-removal" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">tree removal service</Link>. Sweetgum trees, which are common throughout Hampton Roads residential areas, produce persistent root systems that resprout aggressively from cut stumps unless the root collar is ground completely below grade.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Soil Stability in the Great Dismal Swamp Corridor</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Lots adjacent to the Great Dismal Swamp corridor in Chesapeake and Suffolk require specific consideration for soil stability and drainage. The organic-rich soils in this zone are highly compressible and can fail under equipment load when saturated — clearing work in these areas needs to account for ground conditions and equipment selection before a machine goes on the property.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Stump Grinding and Site Cleanup Included</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Every clearing job includes <Link to="/services/stump-grinding" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">stump grinding</Link> to the depth required for the end use — deeper for construction, shallower for landscaping. Debris is chipped and removed from the property or distributed on-site as mulch depending on the project and client preference. We contact Miss Utility before any ground-disturbing work begins. All quotes are free, written, and fixed. We serve Virginia Beach, Chesapeake, Norfolk, Portsmouth, Suffolk, and surrounding Hampton Roads. Call (757) 319-5131 for a free land clearing estimate.</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6">What's Included</h2>
            <ul className="space-y-4">
              {[
                "Full lot clearing for new construction",
                "Brush and undergrowth removal",
                "Stump removal included",
                "Debris hauling and disposal",
                "Grading preparation for landscaping",
                "Residential and commercial projects"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6">Why Art-is-Tree LLC</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Licensed and Insured</h3>
                  <p className="text-gray-600">Fully covered for massive clearing projects on any size property.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Award className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Commercial Experience</h3>
                  <p className="text-gray-600">Trusted by developers, HOAs, and municipalities across the region.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Mountain className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Complete Site Cleanup Guaranteed</h3>
                  <p className="text-gray-600">We leave your property thoroughly clean and ready for the next phase.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#1B4D3E] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Start your site prep the right way.</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Get a fast, transparent estimate for your residential or commercial land clearing project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg w-full sm:w-auto" asChild>
                <a href="tel:7573195131">
                  <Phone className="mr-2 w-5 h-5" /> Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold py-6 px-8 text-lg w-full sm:w-auto" asChild>
                <Link to="/contact">Request Estimate Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <ServiceAreaLinks serviceName="Land Clearing" />
      <RelatedCaseStudies currentPath="/services/land-clearing" preferred={['/case-studies/chesapeake-bay-preservation-act', '/case-studies/property-value']} />
    </div>
  );
};

export default LandClearingPage;