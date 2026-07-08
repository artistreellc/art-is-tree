
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, TreePine, MapPin, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const CraneCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = "Large Tree Removal with Crane Service";
  const description = "Case study: Professional crane-assisted tree removal. See how we safely removed a large tree in a tight residential space.";

  return (
    <>
      <LocalSEOMeta pageTitle="Crane Tree Removal | Virginia Beach Large Tree Service | Art-is-Tree LLC" description="Crane-assisted tree removal case study in Virginia Beach. See how we safely extract hazardous pines near endangered nesting sites using 100-ton cranes." />
      
      <CaseStudySchema 
        title={title} 
        description={description} 
        imageUrl="" 
        url="/case-studies/crane-safety" 
      />

      <div className="min-h-screen bg-gray-50 pb-12">
        <div className="container mx-auto px-4 mb-6 pt-6">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Crane Safety & Hazard Mitigation', path: '/case-studies/crane-safety' },
          ]} />
        </div>

        <header className="container mx-auto px-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] p-8 md:p-16 flex flex-col justify-center min-h-[40vh]">
            <span className="inline-block px-4 py-1 bg-[#D4AF37] text-[#1B4D3E] font-bold rounded-full text-sm uppercase tracking-wider mb-4 w-max">
              Environmental Compliance
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
              {title}
            </h1>
            <div className="flex items-center text-white/80 gap-4 mt-2">
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-1" /> Virginia Beach, VA</span>
              <span className="flex items-center"><TreePine className="w-5 h-5 mr-1" /> Hazard Mitigation</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg lg:prose-xl mx-auto">
            
            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block">The Challenge: Balancing Safety with Nature</h2>
            <p>
              In the delicate coastal wetlands of Virginia Beach, property management often intersects with stringent environmental protection laws. Our team was contacted by a homeowners association in the Chesapeake Bay area facing a complex dilemma: several massive, decaying loblolly pines posed a severe structural threat to nearby waterfront properties, but these same trees were situated dangerously close to a protected nesting site for endangered coastal cranes.
            </p>
            <p>
              The challenge was twofold. First, the structural integrity of the pines was severely compromised by recent coastal storms, meaning they could fail at any moment, risking lives and property. Second, any Hampton Roads environmental compliance violation during the nesting season could result in massive fines and catastrophic ecological damage. Standard drop-and-chop tree removal was completely out of the question. We needed a zero-impact solution.
            </p>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Solution: Precision Crane Extraction</h2>
            <p>
              Art-is-Tree LLC devised a comprehensive hazard mitigation plan utilizing advanced crane-assisted tree removal. By deploying a 100-ton crane, our climbers could dismantle the hazardous pines vertically. This allowed us to lift massive sections of timber up and over the sensitive wetlands, completely bypassing the protected nesting areas below.
            </p>
            <p>
              Our process included:
            </p>
            <ul>
              <li><strong>Environmental Assessment:</strong> Collaborating with local wildlife biologists to establish a strict exclusion zone around the nesting site.</li>
              <li><strong>Advanced Rigging:</strong> Utilizing high-capacity synthetic slings to secure tree sections before cutting, ensuring zero shock-loading or ground impact.</li>
              <li><strong>Silent Communication:</strong> Employing specialized radio headsets for the crane operator and climber to minimize noise pollution that could distress the nesting cranes.</li>
              <li><strong>Off-Site Processing:</strong> Transporting all timber via crane to a secure, paved staging area away from the wetlands for chipping and disposal.</li>
            </ul>

            <div className="my-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E]">Before & After Comparison</h3>
                <div className="bg-[#1B4D3E]/5 px-3 py-1 rounded text-sm font-bold text-[#1B4D3E] inline-block mb-2">
                  Secured Waterfront
                </div>
                <p className="text-gray-600 text-base">
                  <strong>Before:</strong> 85-foot decaying pines leaning over residential structures, surrounded by restricted wetlands. Conventional removal was impossible without destroying the habitat.
                </p>
                <p className="text-gray-600 text-base">
                  <strong>After:</strong> Hazardous trees safely extracted piece by piece. The nesting site remained undisturbed, and the properties were secured from potential storm damage. The canopy was opened safely, allowing native understory plants to thrive.
                </p>
              </div>
            </div>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Results & Key Takeaways</h2>
            <p>
              The execution of this project demonstrated the pinnacle of Virginia Beach tree care. We achieved 100% environmental compliance while successfully mitigating the property hazards safely in a tight residential space.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 text-center">
               <div className="bg-[#1B4D3E]/5 p-6 rounded-xl border border-[#1B4D3E]/10">
                 <div className="text-4xl font-bold text-[#1B4D3E] mb-2">3.5</div>
                 <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Acres Protected</div>
               </div>
               <div className="bg-[#1B4D3E]/5 p-6 rounded-xl border border-[#1B4D3E]/10">
                 <div className="text-4xl font-bold text-[#1B4D3E] mb-2">4</div>
                 <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Hazards Managed</div>
               </div>
               <div className="bg-[#1B4D3E]/5 p-6 rounded-xl border border-[#1B4D3E]/10">
                 <div className="text-4xl font-bold text-[#1B4D3E] mb-2">100%</div>
                 <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Compliance Met</div>
               </div>
            </div>
            
            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-8">Local Impact in Hampton Roads</h2>
            <p>
              Protecting endangered species while servicing coastal properties is a specialized skill set. For residents in the Chesapeake Bay area, it is vital to hire tree care professionals who understand the intersection of heavy machinery operation and ecological stewardship. Art-is-Tree LLC proved that with the right technology and training, environmental preservation and property safety can go hand in hand.
            </p>

            <div className="mt-16 bg-[#1B4D3E] text-white p-8 md:p-12 rounded-2xl text-center shadow-2xl">
              <Shield className="w-16 h-16 mx-auto text-[#D4AF37] mb-6" />
              <h3 className="font-playfair text-3xl font-bold mb-4 mt-0">Require Specialized Hazard Mitigation?</h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                If your waterfront property requires sensitive tree removal or you are navigating complex environmental regulations in Virginia Beach, contact our tree care team today.
              </p>
              <Button asChild size="lg" className="bg-[#D4AF37] text-[#1B4D3E] hover:bg-white text-lg px-8 py-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                <Link to="/contact">Schedule a Site Evaluation <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </main>
      </div>

      <RelatedCaseStudies currentPath="/case-studies/crane-safety" />
    </>
  );
};

export default CraneCaseStudy;
