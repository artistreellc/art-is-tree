import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, MapPin, ArrowRight, DollarSign } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Button } from '@/components/ui/button';

const PropertyValueCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = "Property Value Enhancement Through Tree Care";
  const description = "Case study: How professional tree maintenance increased property value. Strategic pruning and care for landscape enhancement.";

  return (
    <>
      
      <CaseStudySchema 
        title={title} 
        description={description} 
        imageUrl="" 
        url="/case-studies/property-value" 
      />

      <div className="min-h-screen bg-gray-50 pb-12">
        <div className="container mx-auto px-4 mb-6 pt-6">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Property Value Enhancement', path: '/case-studies/property-value' },
          ]} />
        </div>

        <header className="container mx-auto px-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 md:p-16 flex flex-col justify-center items-start min-h-[40vh]">
            <span className="inline-block px-4 py-1 bg-emerald-500 text-white font-bold rounded-full text-sm uppercase tracking-wider mb-4">
              Real Estate Impact
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
              {title}
            </h1>
            <div className="flex items-center text-emerald-100 gap-4 mt-2">
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-1" /> Virginia Beach, VA</span>
              <span className="flex items-center"><TrendingUp className="w-5 h-5 mr-1" /> ROI Analysis</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg lg:prose-xl mx-auto">
            
            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-0">The Challenge: Overgrown & Undervalued</h2>
            <p>
              In the competitive Hampton Roads real estate market, first impressions dictate final sale prices. A property owner in a prestigious Virginia Beach neighborhood was preparing to list their home, but the expansive front yard had become a liability rather than an asset. Decades of neglected tree maintenance resulted in an overgrown, gloomy exterior. Low-hanging limbs obscured the architectural beauty of the house, deadwood posed a visible threat to the roof, and the dense canopy starved the front lawn of essential sunlight, leaving patchy, barren soil.
            </p>
            <p>
              The challenge was clear: the property's "curb appeal" was severely depressed. Real estate agents noted that prospective buyers would view the unkempt trees as a massive impending expense, directly driving down the perceived Virginia Beach property value.
            </p>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Solution: Strategic Landscape Enhancement</h2>
            <p>
              Our tree care team was contracted to execute a strategic landscape enhancement Norfolk and Virginia Beach realtors highly recommend prior to listing. We treated the trees not as debris to be removed, but as architectural elements to be refined.
            </p>
            
            <ul>
              <li><strong>Crown Elevation (Canopy Lifting):</strong> We systematically removed the lower limbs to open up the sightlines from the street to the home's front facade, instantly making the property look larger and more inviting.</li>
              <li><strong>Crown Thinning:</strong> By selectively removing crossing branches and interior foliage, we dramatically increased sunlight penetration to the turf below, allowing for rapid grass recovery before the open house.</li>
              <li><strong>Deadwooding:</strong> Eliminating stark, dead branches signaled to buyers that the property was meticulously maintained, erasing the fear of immediate arboriculture expenses.</li>
              <li><strong>Selective Removal:</strong> We removed two diseased, structurally compromised trees that crowded the driveway, instantly improving functional space and safety.</li>
            </ul>

            <div className="my-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <div className="space-y-4">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded font-bold text-sm shadow-md inline-block mb-2">
                  Curb Appeal Restored
                </div>
                <h3 className="font-playfair text-2xl font-bold text-emerald-800 mt-0">Property Value Comparison Data</h3>
                <p className="text-gray-600 text-base">
                  According to the Council of Tree and Landscape Appraisers, a mature, well-maintained tree can have an appraised value of between $1,000 and $10,000. 
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <div className="flex justify-between items-center mb-2 border-b border-emerald-200 pb-2">
                    <span className="font-bold text-emerald-900">Tree Care Investment:</span>
                    <span className="text-emerald-700 font-mono font-bold">$3,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-emerald-900">Estimated Value Increase:</span>
                    <span className="text-emerald-700 font-mono font-bold">up to 15%</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-8">The Results: Maximized ROI</h2>
            <p>
              The transformation was night and day. By lifting the canopy and clearing the deadwood, the home was bathed in natural light. The strategic pruning showcased the property's beautiful brickwork and expansive lawn. 
            </p>
            <p>
              When the property hit the market, the tree care investment yielded an exceptional return. The home received multiple offers within the first week, ultimately selling above the initial asking price. This success story proves that professional arboriculture is not a maintenance cost, but a direct investment into the equity of your home.
            </p>

            <div className="mt-16 bg-white border-2 border-emerald-600 p-8 md:p-12 rounded-2xl text-center shadow-xl">
              <DollarSign className="w-16 h-16 mx-auto text-emerald-600 mb-6 bg-emerald-50 p-3 rounded-full" />
              <h3 className="font-playfair text-3xl font-bold mb-4 text-emerald-900 mt-0">Preparing to Sell Your Home?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't let overgrown trees diminish your home's appraisal value. Invest in professional canopy refinement to maximize your listing price.
              </p>
              <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-6 rounded-xl font-bold transition-all shadow-md">
                <Link to="/contact">Maximize Your Property Value <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </main>
      </div>

      <RelatedCaseStudies currentPath="/case-studies/property-value" />
    </>
  );
};

export default PropertyValueCaseStudy;
