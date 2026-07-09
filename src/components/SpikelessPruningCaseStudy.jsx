import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Crosshair, MapPin, ArrowRight, Zap, Award } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Button } from '@/components/ui/button';

const SpikelessPruningCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = "Advanced Spikeless Pruning Techniques for Tree Health in Hampton Roads";
  const description = "Spikeless Pruning Case Study - Advanced pruning techniques for tree health";

  return (
    <>
      <CaseStudySchema 
        title={title} 
        description={description} 
        imageUrl="" 
        url="/case-studies/spikeless-pruning" 
      />

      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4 mb-6">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Spikeless Pruning', path: '/case-studies/spikeless-pruning' },
          ]} />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1B4D3E] to-[#12362b] p-8 md:p-16 flex flex-col justify-center items-center text-center min-h-[40vh]">
            <span className="inline-block px-4 py-1 bg-[#D4AF37] text-[#1B4D3E] font-bold rounded-full text-sm uppercase tracking-wider mb-4">
              Advanced Arboriculture
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
              {title}
            </h1>
            <div className="flex items-center justify-center text-white/90 gap-4 mt-4">
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-1" /> Virginia Beach & Chesapeake</span>
              <span className="flex items-center"><Leaf className="w-5 h-5 mr-1" /> Tree Physiology</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg lg:prose-xl mx-auto">
            
            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block">The Challenge: The Damage of Antiquated Methods</h2>
            <p>
              For decades, the standard method for climbers to access a tree canopy was by strapping on heavy steel spurs, or "gaffs," and systematically spiking their way up the trunk. While effective for climbing, this method punches thousands of deep holes straight through the tree's bark and into the cambium layer—the tree's vital vascular system.
            </p>
            <p>
              In the humid environment of Virginia Beach, every single puncture wound creates an open doorway for invasive fungi, bacteria, and wood-boring insects. We were called to assess a row of mature shade trees that were slowly dying back. The culprit? Severe internal decay stemming directly from climbing spike damage inflicted by a previous "tree trimmer" who had pruned the trees two years prior. The challenge was implementing a modern, non-invasive methodology that completely eliminated mechanical damage to the trunk during maintenance.
            </p>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Solution: Spikeless Rope Access & Aerial Lifts</h2>
            <p>
              At Art-is-Tree LLC, our spikeless pruning Virginia Beach operations are built on the foundational rule of modern arboriculture: <strong>Spikes are for removals only.</strong> When the goal is preservation, we employ advanced rope access techniques and bucket trucks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
               <div className="bg-white p-6 rounded-xl border-l-4 border-[#1B4D3E] shadow-sm">
                 <h4 className="font-bold text-[#1B4D3E] text-xl mb-2 flex items-center"><Crosshair className="w-5 h-5 mr-2" /> Technical Methodology</h4>
                 <p className="text-base text-gray-600 m-0">
                   Our skilled climbers use throw-lines to set high-strength synthetic ropes high in the canopy crotches. Using friction hitches (like the Blake's Hitch or mechanical ascenders), our climbers pull themselves into the canopy without ever piercing the bark.
                 </p>
               </div>
               <div className="bg-white p-6 rounded-xl border-l-4 border-[#D4AF37] shadow-sm">
                 <h4 className="font-bold text-[#1B4D3E] text-xl mb-2 flex items-center"><Zap className="w-5 h-5 mr-2" /> Aerial Lift Integration</h4>
                 <p className="text-base text-gray-600 m-0">
                   Where site access permits, we deploy specialized bucket trucks. This allows our climbers to maneuver around the exterior of the canopy with absolute precision, making perfect, clean cuts at the branch collar without stepping foot on the tree itself.
                 </p>
               </div>
            </div>

            <div className="my-12 bg-[#1B4D3E] text-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-[#D4AF37]">Tree Health Benefits Documentation</h3>
                <p className="text-gray-200">
                  By eliminating the use of harmful climbing spikes during maintenance, we actively preserve the natural defenses and biological efficiency of the tree.
                </p>
                <ul className="space-y-4 text-base text-gray-200 list-none pl-0 mt-6">
                  <li className="flex items-start"><Award className="w-6 h-6 text-[#D4AF37] mr-3 shrink-0 mt-0.5" /> <strong>Intact Cambium:</strong> Ensures uninterrupted flow of water and nutrients from roots to leaves.</li>
                  <li className="flex items-start"><Award className="w-6 h-6 text-[#D4AF37] mr-3 shrink-0 mt-0.5" /> <strong>Disease Prevention:</strong> Eliminates entry points for Hampton Roads' prevalent fungal pathogens.</li>
                  <li className="flex items-start"><Award className="w-6 h-6 text-[#D4AF37] mr-3 shrink-0 mt-0.5" /> <strong>Energy Conservation:</strong> Trees don't waste energy compartmentalizing hundreds of human-made wounds.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-8">The Results: Vigor & Rapid Healing</h2>
            <p>
              The difference in tree health is profound. Following our spikeless pruning intervention, the trees displayed vigorous new growth by the following spring. Because we made exact, clean cuts at the branch collars (without gouging the trunk), the trees were able to quickly form wound-wood (callus tissue), rapidly compartmentalizing the pruned areas.
            </p>
            <p>
              Advanced tree care Hampton Roads requires an evolution in technique. By refusing to compromise tree physiology for the sake of an easier climb, we deliver enhanced aesthetics, vastly improved tree health, and a much longer lifespan for the majestic trees that define our local landscapes.
            </p>

            <div className="mt-16 bg-white border-2 border-[#1B4D3E] p-8 md:p-12 rounded-2xl text-center shadow-xl">
              <Leaf className="w-16 h-16 mx-auto text-[#1B4D3E] mb-6" />
              <h3 className="font-playfair text-3xl font-bold mb-4 text-[#1B4D3E]">Why Art-is-Tree LLC?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                At Art-is-Tree LLC, we are committed to elevating the standard of arboriculture. Insist on spikeless pruning techniques. Contact our experienced, modern climbers for your canopy maintenance.
              </p>
              <Button asChild size="lg" className="bg-[#1B4D3E] text-white hover:bg-[#12362b] text-lg px-8 py-6 rounded-xl font-bold transition-all shadow-md">
                <Link to="/contact">Schedule Modern Tree Care <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <RelatedCaseStudies currentPath="/case-studies/spikeless-pruning" />
    </>
  );
};

export default SpikelessPruningCaseStudy;