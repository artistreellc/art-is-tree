
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, MapPin, ArrowRight, Quote } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const ChesapeakeBayCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = "Waterfront Property Tree Care";
  const description = "Case study: Specialized tree care for waterfront properties. Protecting Chesapeake Bay area landscapes with expert techniques.";

  return (
    <>
      <LocalSEOMeta pageTitle="Chesapeake Bay | Tree Service Case Study | Art-is-Tree LLC" description="Environmental impact case study: responsible tree care that protects the Chesapeake Bay watershed. Licensed, insured tree care specialists serving Hampton Roads area." />
      
      <CaseStudySchema 
        title={title} 
        description={description} 
        imageUrl="" 
        url="/case-studies/chesapeake-bay-waterfront" 
      />

      <div className="min-h-screen bg-gray-50 pb-12">
        <div className="container mx-auto px-4 mb-6 pt-6">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Waterfront Property Management', path: '/case-studies/chesapeake-bay-waterfront' },
          ]} />
        </div>

        <header className="container mx-auto px-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] p-8 md:p-16 flex flex-col justify-center min-h-[40vh]">
            <span className="inline-block px-4 py-1 bg-[#D4AF37] text-[#1B4D3E] font-bold rounded-full text-sm uppercase tracking-wider mb-4 w-max">
              Erosion Control
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
              {title}
            </h1>
            <div className="flex items-center text-white/80 gap-4 mt-4">
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-1" /> Chesapeake Bay, VA</span>
              <span className="flex items-center"><Anchor className="w-5 h-5 mr-1" /> Waterfront Care</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg lg:prose-xl mx-auto">
            
            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block">The Challenge: Fighting the Tides</h2>
            <p>
              Virginia Beach waterfront properties represent some of the most beautiful and valuable real estate in Hampton Roads. However, they are constantly under siege. A luxury estate overlooking the Chesapeake Bay was experiencing aggressive shoreline erosion. Severe coastal weather, constant salt spray, and tidal actions were undermining the root systems of ancient live oaks that anchored the property's slope.
            </p>
            <p>
              The property owner faced a compounding disaster. As the trees lost their structural footing due to erosion, their massive canopies became sails catching gale-force winds, threatening to rip the entire root mass—and the surrounding soil—directly into the bay. The challenge required immediate Chesapeake Bay tree care intervention to reduce the canopy weight without damaging the trees, while simultaneously implementing strategies to stabilize the deteriorating bank.
            </p>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Solution: Strategic Canopy Management</h2>
            <p>
              Our approach to coastal erosion control via arboriculture is highly specialized. Instead of removing the trees—which would instantly accelerate the soil erosion—we prescribed a rigorous structural pruning regimen to preserve the vital root networks holding the land together.
            </p>
            <p>
              The methodology included:
            </p>
            <ul>
              <li><strong>Wind Sail Reduction:</strong> We carefully thinned the canopy by removing deadwood and strategic lateral branches, allowing hurricane-force winds to pass *through* the tree rather than pushing against it.</li>
              <li><strong>Salt Spray Remediation:</strong> We applied deep-root organic fertilization to counteract the toxic build-up of sodium in the soil, boosting the trees' natural immune systems.</li>
              <li><strong>Root System Protection:</strong> Working alongside coastal engineers, we coordinated the installation of organic retaining barriers, ensuring no heavy machinery compressed the critical root zones during construction.</li>
            </ul>

            <div className="my-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E]">Before & After Transformation</h3>
                <p className="text-gray-600 text-base">
                  <strong>Before:</strong> Dense, heavy oak canopies acting as wind sails. Roots exposed by tidal erosion, leading to a high risk of catastrophic uprooting during Nor'easters.
                </p>
                <p className="text-gray-600 text-base">
                  <strong>After:</strong> Aerodynamic, structurally balanced trees. The preserved root mass continues to act as nature's rebar, locking the expensive waterfront soil in place and protecting the estate's value.
                </p>
              </div>
            </div>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Results: Value Maintained</h2>
            <p>
              Through expert property management techniques applied to the trees, we halted the immediate threat of tree failure. The root systems were successfully preserved, playing a crucial role in preventing thousands of dollars in land loss.
            </p>

            <div className="my-10 bg-[#f4f7f6] p-8 rounded-2xl border-l-4 border-[#1B4D3E] shadow-sm relative">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#1B4D3E]/10" />
              <p className="text-xl italic text-gray-700 font-playfair mb-4 relative z-10">
                "We were terrified we were going to lose our majestic oaks—and a large chunk of our backyard—to the bay. Art-is-Tree LLC didn't just trim branches; they engineered a solution that saved our property. Their understanding of coastal environments is unmatched."
              </p>
              <p className="font-bold text-[#1B4D3E]">— Sarah M., Waterfront Homeowner, Chesapeake Bay</p>
            </div>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-8">Local Impact & Environmental Compliance</h2>
            <p>
              Working on the waterfront in Hampton Roads requires strict adherence to the Chesapeake Bay Preservation Act (CBPA). Our team ensured that all canopy reduction fell well within local regulatory limits, requiring zero mitigation planting or fines. Waterfront tree care services must balance aesthetics, safety, and environmental stewardship, a standard we meet on every project.
            </p>

            <div className="mt-16 bg-white border-2 border-[#1B4D3E] p-8 md:p-12 rounded-2xl text-center shadow-xl">
              <h3 className="font-playfair text-3xl font-bold mb-4 text-[#1B4D3E] mt-0">Protect Your Waterfront Investment</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Erosion and coastal storms wait for no one. Secure your property's trees with a crew who understands coastal dynamics.
              </p>
              <Button asChild size="lg" className="bg-[#1B4D3E] text-white hover:bg-[#12362b] text-lg px-8 py-6 rounded-xl font-bold transition-all">
                <Link to="/contact">Request a Waterfront Assessment <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </main>
      </div>

      <RelatedCaseStudies currentPath="/case-studies/chesapeake-bay-waterfront" />
    </>
  );
};

export default ChesapeakeBayCaseStudy;
