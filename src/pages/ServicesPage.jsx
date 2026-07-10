
import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, Settings, ShieldAlert, Tractor, Zap, Building2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceSchema from '@/components/seo/ServiceSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import SpeakableSchema from '@/components/seo/SpeakableSchema';

const ServicesPage = () => {
  const serviceAreas = ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"];

  return (
    <div className="bg-gray-50 min-h-screen pt-0 pb-24">
      <LocalSEOMeta 
        pageTitle="Tree Services Virginia Beach VA | Art-is-Tree LLC" 
        description="Full-service tree care in Hampton Roads: removal, trimming, stump grinding, crane work, land clearing and 24/7 emergency service. Licensed, insured. Free quotes." 
      />

      <LocalBusinessSchema />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/services" />

      {/* Multiple Service Schemas based on task requirements */}
      <ServiceSchema 
        name="Tree Removal" 
        description="Safe and professional tree removal services for dead, diseased, or unwanted trees." 
        serviceAreas={serviceAreas} 
      />
      <ServiceSchema 
        name="Tree Pruning" 
        description="Expert tree pruning to enhance tree health, appearance, and property safety." 
        serviceAreas={serviceAreas} 
      />
      <ServiceSchema 
        name="Stump Grinding" 
        description="Complete stump grinding and root removal services." 
        serviceAreas={serviceAreas} 
      />
      <ServiceSchema 
        name="Emergency Tree Service" 
        description="24/7 emergency response for fallen trees and storm damage." 
        serviceAreas={serviceAreas} 
      />
      <ServiceSchema 
        name="Tree Maintenance" 
        description="Routine tree care and maintenance to ensure long-term health and growth." 
        serviceAreas={serviceAreas} 
      />
      <ServiceSchema 
        name="Crown Cleaning" 
        description="Detailed removal of dead, dying, or diseased branches from the tree crown." 
        serviceAreas={serviceAreas} 
      />
      <ServiceSchema 
        name="Hazard Tree Removal" 
        description="Specialized removal of dangerous or high-risk trees using advanced equipment." 
        serviceAreas={serviceAreas} 
      />
      
      <header className="bg-[#1B4D3E] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=50&w=1200')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair mt-0 text-white speakable">
            Our Tree Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light speakable">
            Expert execution, uncompromising safety, and detailed cleanup on every project by Art-is-Tree LLC.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <p className="text-xl text-[#1B4D3E] font-medium text-center mb-10">
            <strong>Art-is-Tree LLC</strong> handles residential and commercial tree work across Virginia Beach and Hampton Roads. We're locally owned, licensed, and insured, and every job is run to the same safety standard &mdash; whether it's one tree in a backyard or a full lot to clear.
          </p>

          <p>
            We do the whole range of tree work. That covers the <strong>tree removal Virginia Beach</strong> homeowners need after a storm takes down a limb, the careful <strong>tree pruning</strong> that keeps a canopy healthy and off the roof, and everything in between. The work is done right &mdash; sound cuts, proper rigging, and a clean site &mdash; without tearing up the rest of your yard to get it done.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-[#1B4D3E] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Trees className="text-[#D4AF37] w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4 font-playfair mt-0">Expert Tree Pruning & Trimming</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Good <strong>tree pruning</strong> is more than making a tree look neat. We trim to keep the canopy strong &mdash; taking out deadwood, crossing branches, and diseased limbs so the tree holds up in a storm and stays healthy for years.
              </p>
              <Button asChild variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white mt-4 w-fit">
                <Link to="/services/tree-trimming">Learn More →</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-[#1B4D3E] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ShieldAlert className="text-[#D4AF37] w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4 font-playfair mt-0">Hazardous Tree Removal</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                When a tree dies, gets diseased, or cracks in a storm, it becomes a real risk to your house and everyone around it. We take those trees down safely &mdash; even in tight spots and rough conditions &mdash; and haul them off your property.
              </p>
              <Button asChild variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white mt-4 w-fit">
                <Link to="/services/tree-removal">Learn More →</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-[#1B4D3E] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Settings className="text-[#D4AF37] w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4 font-playfair mt-0">Crane Assisted Tree Projects</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Some trees are simply too massive, too compromised, or located in areas too confined for traditional climbing and rigging. For these situations, we specialize in crane assisted tree projects.
              </p>
              <Button asChild variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white mt-4 w-fit">
                <Link to="/services/crane-removal">Learn More →</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-[#1B4D3E] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Tractor className="text-[#D4AF37] w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4 font-playfair mt-0">Professional Stump Grinding</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Cutting down a tree is only part of the process. Left behind, stumps are unsightly, pose tripping hazards, and can become breeding grounds for termites, ants, and fungal diseases. Our complete <strong>stump grinding</strong> services resolve this issue efficiently.
              </p>
              <Button asChild variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white mt-4 w-fit">
                <Link to="/services/stump-grinding">Learn More →</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-[#1B4D3E] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-[#D4AF37] w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4 font-playfair mt-0">24/7 Emergency Tree Service</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Severe thunderstorms, hurricanes, and heavy winds can cause unexpected and devastating damage to your canopy. Our <strong>emergency tree service</strong> team is on call 24/7 to respond to urgent situations.
              </p>
              <Button asChild variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white mt-4 w-fit">
                <Link to="/services/emergency-tree-service">Learn More →</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-[#1B4D3E] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-[#D4AF37] w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4 font-playfair mt-0">Commercial & Land Clearing</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                We handle residential and commercial land clearing, from a single overgrown lot to acreage. Property managers, HOAs, and developers call us when there's real volume to clear and it has to be done right.
              </p>
              <Button asChild variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white mt-4 w-fit">
                <Link to="/services/land-clearing">Learn More →</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200 text-center">
             <h3 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6 mt-0">Ready to Schedule Your Project?</h3>
             <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
               Scheduling is quick, the work is detailed, and the price is fair for what your property actually needs. Get a free estimate and we'll take it from there.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-10 text-lg w-full sm:w-auto shadow-lg">
                 <Link to="/contact">Get Your Free Estimate</Link>
               </Button>
               <Button asChild size="lg" variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white font-bold py-6 px-10 text-lg w-full sm:w-auto">
                 <Link to="/service-areas"><MapPin className="mr-2 w-5 h-5"/> View Service Areas</Link>
               </Button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
