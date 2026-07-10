import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Award, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FAQSection from '@/components/FAQSection';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

const treeTrimmingFaqs = [
  {
    question: "How often should I have my trees trimmed or pruned?",
    answer: "As a general guide, young trees benefit from pruning every 2-3 years to build strong structure, and mature trees every 3-5 years for maintenance. The dormant season (late fall through early spring) is usually best, though dead or hazardous limbs can be removed any time. Oaks are the exception: to avoid oak wilt they should not be pruned during the active season, roughly April through October.",
  },
  {
    question: "What's the difference between tree trimming and pruning?",
    answer: "Trimming generally shapes the canopy and clears overgrowth away from your home, roof, and power lines, while pruning is the targeted removal of dead, diseased, or structurally weak limbs to improve the tree's health and safety. We do both, and we never top a tree.",
  },
  {
    question: "Will trimming hurt my tree?",
    answer: "Done correctly, no; proper pruning keeps trees healthier and safer. We follow arboriculture standards: clean cuts at the branch collar, removing no more than about a quarter of the canopy at once, and never topping, which stresses trees and invites decay.",
  },
];

const TreeTrimmingPage = () => {
  const serviceAreas = ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"];
  const description = "Expert tree trimming and pruning in Virginia Beach and Hampton Roads. Improve tree health, safety and curb appeal. Licensed, insured. Free estimates.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocalSEOMeta 
        pageTitle="Tree Trimming & Pruning Virginia Beach VA" 
        description={description} 
      />
      
      <ServiceSchema 
        name="Tree Trimming" 
        description={description} 
        serviceAreas={serviceAreas} 
      />
      
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Tree Trimming', url: '/services/tree-trimming' }
        ]} 
      />

      <section className="bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <nav className="text-sm font-medium text-gray-300 mb-6 flex justify-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>→</span>
            <Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <span>→</span>
            <span className="text-[#D4AF37]">Tree Trimming</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Tree Trimming & Pruning in Virginia Beach
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Enhance the beauty, safety, and health of your landscape with our expert, zero-impact spikeless pruning services.
          </p>
          
          <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-10 text-lg shadow-xl" asChild>
            <a href="tel:7573195131">
              <Phone className="mr-2 w-5 h-5" />
              Call (757) 319-5131 for a Free Estimate
            </a>
          </Button>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-4 py-16">
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Most homeowners in Virginia Beach don't think about tree trimming until something forces them to. A branch comes through the screened porch in a July storm. A limb that's been growing toward the roofline for three seasons gets heavy enough in an ice event to make contact. Properly timed tree trimming is not cosmetic maintenance — it's structural management, and it follows documented science.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Art-is-Tree LLC prunes according to <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">ANSI A300 Part 1 standards</Link> — the American National Standards Institute's benchmark for tree care practices. <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">ANSI A300</Link> defines pruning cut types, acceptable removal limits, and correct techniques for each species category. It prohibits topping, prohibits flush cuts that remove the branch collar, and requires that no more than 25 percent of a tree's live crown be removed in a single pruning cycle.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Virginia Beach grows a specific mix of trees that each behave differently and respond differently to pruning. Loblolly pines — the dominant species across Hampton Roads — develop both a central taproot in deep sandy soil and wide lateral root systems that make them vulnerable to windthrow when the soil is saturated. As loblolly pines mature, lower limb removal improves structural stability by reducing the surface area that catches wind load during storms.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Live oaks require a completely different approach. A live oak's structural strength comes from its distributed crown, and the correct management is selective crown thinning. Topping a live oak is one of the most destructive things that can be done to the tree.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The same logic applies to climbing method. <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">ANSI A300</Link> standards prohibit the use of climbing spikes on any live tree that is not being removed. Art-is-Tree uses spikeless rope access techniques on all trimming and pruning work. It requires more technical skill and more time. It also doesn't damage the trees we're hired to maintain. Read our <Link to="/case-studies/spikeless-pruning" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">spikeless pruning case study</Link> for a real example.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            All trimming quotes from Art-is-Tree are written, fixed, and include complete debris removal. We serve Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. For a free tree trimming estimate call (757) 319-5131.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6">What's Included</h2>
            <ul className="space-y-4">
              {[
                "Crown thinning and shaping for tree health",
                "Deadwood removal and hazard mitigation",
                "Canopy elevation for clearance",
                "Spikeless climbing on all pruning jobs",
                "Storm damage prevention trimming",
                "Vista pruning for waterfront properties"
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
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Skilled Tree Climbers</h3>
                  <p className="text-gray-600">TCIA member with arboricultural expertise on staff.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Scissors className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Spikeless Climbing</h3>
                  <p className="text-gray-600">We never use spikes on living trees, preventing diseases and pests.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">15+ Years Experience</h3>
                  <p className="text-gray-600">Decades of professional trimming experience across Hampton Roads.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#1B4D3E] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Protect Your Canopy Today</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Proper pruning adds years of life to your trees. Contact us today for professional, spikeless tree care.</p>
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
      <FAQPageSchema items={treeTrimmingFaqs} />
      <FAQSection items={treeTrimmingFaqs} title="Tree Trimming & Pruning in Virginia Beach: FAQ" />
      <ServiceAreaLinks serviceName="Tree Trimming & Pruning" />
      <RelatedCaseStudies currentPath="/services/tree-trimming" preferred={['/case-studies/spikeless-pruning', '/case-studies/emerald-ash-borer', '/case-studies/property-value']} />
    </div>
  );
};

export default TreeTrimmingPage;
