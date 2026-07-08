

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Leaf, MapPin, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const BigLeafMapleWiltCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = "Big Leaf Maple Disease Treatment";
  const description = "Case study: Diagnosing and treating big leaf maple wilt disease. Expert tree care intervention saved a valuable landscape tree.";

  return (
    <>
      <LocalSEOMeta pageTitle="Tree Disease Management Case Study | Art-is-Tree LLC" description="Big Leaf Maple disease treatment success story from Virginia Beach. Expert diagnosis and treatment saved a valuable mature tree. Licensed local tree service." />
      
      <CaseStudySchema 
        title={title} 
        description={description} 
        imageUrl="" 
        url="/case-studies/disease-management" 
      />

      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <header className="container mx-auto px-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] p-8 md:p-16 flex flex-col justify-center items-center text-center min-h-[40vh]">
            <span className="inline-block px-4 py-1 bg-[#D4AF37] text-[#1B4D3E] font-bold rounded-full text-sm uppercase tracking-wider mb-4">
              Plant Healthcare
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight mt-0">
              {title}
            </h1>
            <div className="flex items-center justify-center text-white/90 gap-4 mt-4">
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-1" /> Hampton Roads, VA</span>
              <span className="flex items-center"><Stethoscope className="w-5 h-5 mr-1" /> Diagnostics</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-4 mb-8">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Disease Management', path: '/case-studies/disease-management' },
          ]} />
        </div>

        <main className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg lg:prose-xl mx-auto">
            
            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block">The Challenge: A Silent Canopy Killer</h2>
            <p>
              In the humid, unpredictable climate of Hampton Roads, vascular wilt diseases can spread through a neighborhood canopy with terrifying speed. We were called to a historic property in Norfolk where several mature shade trees were exhibiting sudden, severe symptoms: rapid leaf scorch, premature defoliation in mid-summer, and distinct streaking in the sapwood. 
            </p>
            <p>
              These are classic indicators of vascular wilt. The challenge in Virginia Beach arboriculture is that by the time wilt symptoms become visible, the fungal pathogens have already severely clogged the tree's water-conducting vessels. The property owner risked losing century-old trees that provided critical shade and immense property value. Without immediate intervention, the disease would spread to neighboring Chesapeake tree care zones through root grafts.
            </p>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Solution: Targeted Biological Intervention</h2>
            <p>
              Our tree care specialists moved quickly to confirm the diagnosis through laboratory testing. Once identified, we initiated a comprehensive tree health management protocol designed not just to treat the infection, but to fortify the tree's natural defenses against the specific Virginia Beach climate and soil conditions.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#D4AF37] my-8">
              <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E] mb-4 flex items-center mt-0">
                <Clock className="w-6 h-6 mr-2 text-[#D4AF37]" /> Treatment Timeline
              </h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4">
                  <strong className="text-[#1B4D3E] min-w-[100px]">Week 1:</strong> 
                  <span className="text-gray-600">Macro-infusion of targeted systemic fungicides directly into the root flare to attack the pathogen.</span>
                </li>
                <li className="flex gap-4">
                  <strong className="text-[#1B4D3E] min-w-[100px]">Week 3:</strong> 
                  <span className="text-gray-600">Prescription soil aeration and application of custom bio-stimulants to repair damaged root hairs and improve water uptake.</span>
                </li>
                <li className="flex gap-4">
                  <strong className="text-[#1B4D3E] min-w-[100px]">Month 3:</strong> 
                  <span className="text-gray-600">Sanitary spikeless pruning to remove necrotic tissue, preventing secondary insect infestations.</span>
                </li>
              </ul>
            </div>

            <div className="my-12 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white/90 px-3 py-1 rounded text-sm font-bold text-[#1B4D3E] inline-block mb-2 border border-gray-200">
                  Sanitary Canopy Care
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E] mt-0">Expert Recommendations for Disease Prevention</h3>
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-1" /> <span className="text-gray-700">Ensure proper mulching (avoid "volcano" mulching) to prevent stem-girdling roots.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-1" /> <span className="text-gray-700">Schedule pruning during dormant winter months to prevent open wounds from attracting disease vectors.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-1" /> <span className="text-gray-700">Irrigate deeply during Hampton Roads summer droughts to reduce physiological stress.</span></li>
                </ul>
              </div>
            </div>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-8">The Results: Restoration & Preservation</h2>
            <p>
              By the following spring, the results of the Hampton Roads tree disease intervention were undeniable. The treated trees exhibited a 90% recovery in canopy density, with robust, vibrant foliage returning. Furthermore, the prophylactic trenching we performed prevented the wilt from spreading through the root grafts, effectively saving the surrounding landscape.
            </p>
            <p>
              Property aesthetics were completely restored. This case study underscores that a diagnosis of vascular wilt is not always a death sentence when managed by knowledgeable professionals utilizing modern plant healthcare science.
            </p>

            <div className="mt-16 bg-[#1B4D3E] text-white p-8 md:p-12 rounded-2xl text-center shadow-2xl">
              <Leaf className="w-16 h-16 mx-auto text-[#D4AF37] mb-6" />
              <h3 className="font-playfair text-3xl font-bold mb-4 mt-0">Notice Signs of Tree Decline?</h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Early diagnosis is critical. If your trees are showing premature color change, dead branches, or sparse canopies, time is of the essence.
              </p>
              <Button asChild size="lg" className="bg-[#D4AF37] text-[#1B4D3E] hover:bg-white text-lg px-8 py-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                <Link to="/contact">Request a Plant Health Diagnosis <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </main>
      </div>

      <RelatedCaseStudies currentPath="/case-studies/disease-management" />
    </>
  );
};

export default BigLeafMapleWiltCaseStudy;
