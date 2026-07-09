import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FAQSection from '@/components/FAQSection';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

const emergencyFaqs = [
  {
    question: "How fast can you respond to a tree emergency?",
    answer: "We answer emergency calls 24/7 across Virginia Beach and Hampton Roads. Storm-damaged trees on homes, vehicles, and power lines get top priority. Call (757) 319-5131 and we will get a crew moving.",
  },
  {
    question: "What should I do if a tree falls on my house?",
    answer: "First make sure everyone is safe and out of the affected area. Stay well away from any downed power lines and report them to the utility. Then call us; we will stabilize the situation, remove the tree safely, and document the damage for your insurance claim.",
  },
  {
    question: "Does homeowners insurance cover emergency tree removal?",
    answer: "Usually yes, when a covered event such as a storm topples a tree and it damages a covered structure like your home, garage, or fence. Removing a healthy or leaning tree as a precaution is considered maintenance and typically is not covered. We provide written estimates and documentation to support your claim.",
  },
];

const EmergencyTreeServicePage = () => {
  const serviceAreas = ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"];
  const description = "Around-the-clock emergency and storm-damage tree service in Virginia Beach and Hampton Roads. Fallen or leaning trees removed fast. Licensed, insured. Call now.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocalSEOMeta 
        pageTitle="Emergency Tree Service Virginia Beach VA | 24/7" 
        description={description} 
      />
      
      <ServiceSchema 
        name="Emergency Tree Service" 
        description={description} 
        serviceAreas={serviceAreas} 
      />
      
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Emergency Tree Service', url: '/services/emergency-tree-service' }
        ]} 
      />

      <section className="bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <nav className="text-sm font-medium text-gray-300 mb-6 flex justify-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>→</span>
            <Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <span>→</span>
            <span className="text-[#D4AF37]">Emergency Tree Service</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-red-600/90 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6 border border-red-500/50 shadow-lg">
            <AlertTriangle className="w-5 h-5" />
            24/7 EMERGENCY RESPONSE
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            24/7 Emergency Tree Service in Virginia Beach
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            When a tree comes down on your property at 2 in the morning, you need someone who picks up the phone. Art-is-Tree LLC answers emergency calls 24 hours a day, 365 days a year across Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. Licensed, insured, and built on 15 years of Hampton Roads storm response experience.
          </p>
          
          <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-extrabold py-8 px-12 text-xl md:text-2xl shadow-xl w-full sm:w-auto animate-pulse" asChild>
            <a href="tel:7573195131">
              <Phone className="mr-3 w-6 h-6 md:w-8 md:h-8" />
              Call Now: (757) 319-5131
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Hampton Roads occupies a specific geographic position that makes it one of the more storm-exposed metro areas on the East Coast. The region sits at the intersection of Mid-Atlantic coastal storm tracks, tropical weather systems moving up the Atlantic seaboard, and the thermodynamic instability generated where warm Chesapeake Bay water meets summer continental air masses. In Virginia Beach, you do not need a direct hurricane landfall to have a major tree emergency. An ordinary summer convective event is enough.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">A Real Person Answers Every Call</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Art-is-Tree LLC provides 24/7 emergency tree service across Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. Call (757) 319-5131 and a real person answers — not a voicemail, not an answering service, not a callback promise. We respond fast because a tree on a roof, a tree blocking emergency vehicle access, or a tree that has come down on a utility connection is not a situation where a next-business-day response is acceptable.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">15 Years of Storm Response Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Mike Campbell built Art-is-Tree on 15 years of climbing experience in Hampton Roads including storm response work across the region's worst weather events. His team has cleared trees from residential rooftops in Kempsville and Great Neck, cut storm-dropped loblolly pines from vehicles in Red Mill and Sandbridge, and cleared debris from access routes in Chesapeake following major storm events. For storm-damaged trees requiring crane-assisted extraction, see our <Link to="/services/crane-removal" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">crane tree removal service</Link>.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Why Virginia Beach Soil Makes Storms More Dangerous</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Virginia Beach's sandy coastal plain soils drain well under normal conditions but become nearly completely saturated during major rainfall events — saturation reduces internal friction between soil particles and eliminates the passive resistance that anchors root plates in place. Our <Link to="/case-studies/crane-safety" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">crane safety case study</Link> covers a complex residential removal that began with similar warning signs.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Insurance Documentation Done Right</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Art-is-Tree carries full liability insurance and works directly with homeowners' insurance adjusters on storm damage documentation. We know what the claims process requires and we provide thorough, accurate documentation of what was removed, how it was removed, and what was present at the site.</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">For 24/7 emergency tree service in Virginia Beach and Hampton Roads call (757) 319-5131. We answer every call.</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6">What's Included</h2>
            <ul className="space-y-4">
              {[
                "Storm damage cleanup and debris removal",
                "Fallen tree removal from roofs and vehicles",
                "Hazardous hanging limb removal",
                "Road and driveway clearance",
                "Same-day response across Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk",
                "Available 365 days a year"
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
                  <Clock className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">24/7 Availability</h3>
                  <p className="text-gray-600">Available 365 days a year. We pick up the phone when you need us most.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Fully Insured for Storms</h3>
                  <p className="text-gray-600">We carry comprehensive insurance for high-risk storm damage scenarios.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Rapid Response Times</h3>
                  <p className="text-gray-600">Quick dispatch across Hampton Roads to mitigate further property damage.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#1B4D3E] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Don't wait for the damage to worsen!</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Call our emergency hotline immediately. Our crews are ready to deploy and secure your property safely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg w-full sm:w-auto" asChild>
                <a href="tel:7573195131">
                  <Phone className="mr-2 w-5 h-5" /> Call (757) 319-5131
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <FAQPageSchema items={emergencyFaqs} />
      <FAQSection items={emergencyFaqs} title="Emergency Tree Service in Virginia Beach: FAQ" />
      <ServiceAreaLinks serviceName="Emergency Tree Service" />
      <RelatedCaseStudies currentPath="/services/emergency-tree-service" preferred={['/case-studies/osha-compliance', '/case-studies/crane-safety', '/case-studies/property-value']} />
    </div>
  );
};

export default EmergencyTreeServicePage;