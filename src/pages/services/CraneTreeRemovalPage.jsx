import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FAQSection from '@/components/FAQSection';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

const craneFaqs = [
  {
    question: "When is a crane needed to remove a tree?",
    answer: "A crane is the right call for very large, dead, or unstable trees, and for trees in tight or hard-to-reach spots such as over a house, pool, or fence, or on a lot equipment cannot easily access. The crane lifts heavy sections straight up and away instead of dropping them.",
  },
  {
    question: "Is crane removal safe for my property?",
    answer: "Yes; it is often the safest option. Lifting wood out by crane removes the risks of climbing a compromised tree and of heavy limbs falling toward structures, giving us precise control over every piece we remove.",
  },
  {
    question: "Does crane removal cost more than climbing?",
    answer: "The crane adds equipment cost, but it frequently reduces labor hours and the risk to your property, which can make it comparable overall. We provide a free written estimate so you can compare before deciding.",
  },
];

const CraneTreeRemovalPage = () => {
  const serviceAreas = ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"];
  const description = "Crane-assisted removal of large, hazardous trees in Virginia Beach and Hampton Roads. Tight lots and trees over homes handled safely. Licensed, insured.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocalSEOMeta 
        pageTitle="Crane Tree Removal Virginia Beach VA | Art-is-Tree" 
        description={description} 
      />
      
      <ServiceSchema 
        name="Crane Tree Removal" 
        description={description} 
        serviceAreas={serviceAreas} 
      />
      
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Crane Tree Removal', url: '/services/crane-removal' }
        ]} 
      />

      <section className="bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <nav className="text-sm font-medium text-gray-300 mb-6 flex justify-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>→</span>
            <Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <span>→</span>
            <span className="text-[#D4AF37]">Crane Tree Removal</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Crane Tree Removal Services in Virginia Beach
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            When a tree is too big, too close to a structure, or in a location where standard rigging is not safe, crane-assisted removal is often the only correct option. Art-is-Tree LLC handles complex crane removals across Virginia Beach, Norfolk, and Chesapeake — licensed, insured, and built around 15 years of Hampton Roads climbing experience.
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Crane-assisted tree removal is not a specialty service for unusual situations. In Virginia Beach and throughout Hampton Roads, it is often the only method that removes a large tree over a structure without causing damage to the structure. Residential lots in established neighborhoods like Thoroughgood, Great Neck, and Bayside routinely have mature live oaks and loblolly pines with canopy spreads that exceed the available drop zone by a factor of two or three. There is no safe felling direction. There is no way to section the tree from the ground. The crane provides a controlled vertical extraction point that overrides the geometry of the site.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">The Physics of a Safe Crane Pick</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">The rigging science behind crane-assisted tree removal is the same applied physics that governs any load management operation — center of gravity, load distribution, dynamic loading during the cut, and the mechanical advantage provided by the crane's boom position relative to the extraction point. When a climber makes a cut in the canopy, the detached section experiences a brief dynamic load increase before the crane's load line takes tension.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Why Experience Matters on Every Lift</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Mike Campbell has been working in Hampton Roads tree canopies for over 15 years, including complex crane-assisted removals over residential structures throughout Virginia Beach, Norfolk, and Chesapeake. Every person on the ground and in the tree has a defined role. Communication between the climber, the crane operator, and the ground crew follows a confirmed protocol before any cut is made. Read our <Link to="/case-studies/crane-safety" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">crane safety case study</Link> about a complex 100-foot red oak removal in Thoroughgood.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Hampton Roads Crane Removal Scenarios</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Hampton Roads produces specific crane removal scenarios that come from the interaction of the region's tree species, lot sizes, and proximity to structures. Waterfront properties along the Chesapeake Bay in Chicks Beach, Bayside, and Sandbridge have mature water oaks and live oaks that have grown unchecked for decades over boat docks, seawalls, and structures built directly at the water line. For all of these, the crane is not the expensive option — it is the option that prevents a much more expensive outcome.</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Art-is-Tree coordinates all crane logistics, site preparation, and debris removal. We carry full liability insurance for crane operations. For a free crane removal estimate in Virginia Beach or anywhere in Hampton Roads, call (757) 319-5131.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6">What's Included</h2>
            <ul className="space-y-4">
              {[
                "100-ton crane capacity for large trees",
                "Removal over structures and fences",
                "Waterfront and coastal property specialists",
                "Zero-impact extraction techniques",
                "Large tree specialists with precision rigging",
                "Full rigging and takedown services"
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
                  <Award className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Large Tree Specialists</h3>
                  <p className="text-gray-600">Proven track record handling massive pines and oaks in dense neighborhoods.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">ANSI-Standard Rigging</h3>
                  <p className="text-gray-600">Advanced rigging expertise to ensure loads are calculated flawlessly.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <MapPin className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Fully Insured Operations</h3>
                  <p className="text-gray-600">Extensive liability coverage explicitly covering heavy crane operations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#1B4D3E] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Have a difficult tree removal?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">We specialize in zero-impact crane removals. Protect your property and contact us today.</p>
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
      </div>
      <FAQPageSchema items={craneFaqs} />
      <FAQSection items={craneFaqs} title="Crane Tree Removal in Virginia Beach: FAQ" />
      <ServiceAreaLinks serviceName="Crane Tree Removal" />
      <RelatedCaseStudies currentPath="/services/tree-removal" preferred={['/case-studies/crane-safety', '/case-studies/osha-compliance', '/case-studies/spikeless-pruning']} />
    </div>
  );
};

export default CraneTreeRemovalPage;