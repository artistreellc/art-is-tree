import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Award, Tractor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FAQSection from '@/components/FAQSection';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

const stumpGrindingFaqs = [
  {
    question: "What's the difference between stump grinding and stump removal?",
    answer: "Stump grinding uses a machine to chip the stump down to several inches below ground level, which is fast, affordable, and leaves your yard mostly intact. Full stump removal pulls out the entire root ball, leaving a large hole and much more disruption. Most homeowners choose grinding.",
  },
  {
    question: "How deep do you grind the stump?",
    answer: "Typically 4-6 inches below grade, which is enough to replant grass or lay sod. If you plan to install a patio, fence post, or a new tree in the same spot, we can grind deeper on request.",
  },
  {
    question: "What happens to the wood chips and roots?",
    answer: "We can haul the grindings away or leave them as free mulch, whichever you prefer. Large surface roots can be ground as well; smaller roots left underground simply decompose over time.",
  },
];

const StumpGrindingPage = () => {
  const serviceAreas = ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"];
  const description = "Fast, affordable stump grinding in Virginia Beach and Hampton Roads. Reclaim your yard with our licensed, insured crew. Free estimates. Call Art-is-Tree LLC.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocalSEOMeta 
        pageTitle="Stump Grinding Virginia Beach VA | Art-is-Tree" 
        description={description} 
      />
      
      <ServiceSchema 
        name="Stump Grinding" 
        description={description} 
        serviceAreas={serviceAreas} 
      />
      
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Stump Grinding', url: '/services/stump-grinding' }
        ]} 
      />

      <section className="bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <nav className="text-sm font-medium text-gray-300 mb-6 flex justify-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>→</span>
            <Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <span>→</span>
            <span className="text-[#D4AF37]">Stump Grinding</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Stump Grinding & Removal in Virginia Beach
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Eliminate trip hazards and reclaim your yard. We provide deep stump grinding services so you can replant or build over old stumps seamlessly.
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">A stump left in the ground after tree removal is not a finished job. It is an active biological system that continues to affect everything around it. In Virginia Beach's humid subtropical climate, a decaying stump reaches peak termite and carpenter ant activity within one to two growing seasons. After <Link to="/services/tree-removal" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">tree removal</Link>, stump grinding is the next step that prevents these pest pathways from continuing to develop.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Why Coastal Virginia Root Systems Are Different</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">The root system of a large tree in Virginia Beach's sandy coastal soil spreads laterally further than most homeowners realize. These root systems do not disappear when the tree is gone. They continue to decay, creating voids in the soil as organic material breaks down, and providing subsurface habitat for insects and fungal organisms.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">How Stump Grinding Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Stump grinding mechanically removes the stump and primary root flare to a specified depth below grade using a rotating carbide-tipped cutting wheel. The depth of grinding determines what the site can support afterward. Art-is-Tree grinds to the depth the end use requires, not the minimum that allows us to call the job done.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Sandy Soil and Utility Awareness</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Virginia Beach's sandy soil composition affects how stump grinding proceeds. Art-is-Tree contacts Miss Utility for underground utility clearance on every stump grinding job before a grinding wheel is engaged. If utilities or irrigation infrastructure are confirmed near the grinding zone, we adjust depth and approach to protect them.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">What Happens to the Wood Chips</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">The wood chip material produced by stump grinding is a natural byproduct with multiple uses. Left in the void and topped with soil, the chips biodegrade and provide organic matter as the site settles. Spread in garden beds, the chips function as effective moisture-retaining mulch. If you prefer the site completely cleared, we haul the chips off the property. We fill the void, grade the surface, and leave the area ready for whatever comes next.</p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">Art-is-Tree handles stump grinding as a standalone service across Hampton Roads — you do not need to have used us for the original removal. If you are clearing a property completely, our <Link to="/services/land-clearing" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">land clearing service</Link> includes stump grinding throughout the project. All quotes are free, written, and fixed. We serve Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. Call (757) 319-5131 for a free estimate.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6">What's Included</h2>
            <ul className="space-y-4">
              {[
                "Grinding below surface level for replanting",
                "Root flare removal for complete extraction",
                "Debris cleanup and site restoration",
                "Site leveling after grinding",
                "Treatment to prevent regrowth",
                "Works on any size stump"
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
                  <p className="text-gray-600">Full coverage for heavy machinery operations on your property.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Award className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Competitive Pricing</h3>
                  <p className="text-gray-600">Transparent quotes with no hidden fees and free on-site estimates.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Tractor className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Same-Day Availability</h3>
                  <p className="text-gray-600">Quick dispatch across Virginia Beach and Hampton Roads.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#1B4D3E] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Ready to erase that stump?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Reclaim your landscaping today with our fast, affordable stump grinding services.</p>
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
      <FAQPageSchema items={stumpGrindingFaqs} />
      <FAQSection items={stumpGrindingFaqs} title="Stump Grinding in Virginia Beach: FAQ" />
      <ServiceAreaLinks serviceName="Stump Grinding" />
      <RelatedCaseStudies currentPath="/services/stump-grinding" preferred={['/case-studies/property-value', '/case-studies/virginia-tree-law']} />
    </div>
  );
};

export default StumpGrindingPage;
