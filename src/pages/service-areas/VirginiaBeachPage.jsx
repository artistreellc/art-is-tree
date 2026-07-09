import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceLinks from '@/components/ServiceLinks';
import GoogleMap from '@/components/GoogleMap';
import LocationFAQ from '@/components/LocationFAQ';

const virginiaBeachFaqs = [
  {
    question: "Do I need a permit to remove a tree in Virginia Beach?",
    answer: "On an ordinary residential lot, no permit is required to remove a tree on your own property. The main exception is waterfront and near-water property in the Chesapeake Bay Preservation Act's Resource Protection Area, where clearing within the shoreline buffer is restricted and removing many healthy trees can require Board review. Dead, dying, and hazardous trees can generally come down. We confirm the rules for your specific lot before any cutting begins.",
  },
  {
    question: "How fast can you respond to a storm-damaged tree in Virginia Beach?",
    answer: "Our emergency crew is on call 24/7 across Virginia Beach, from Sandbridge and Red Mill to Great Neck and the Oceanfront. After a nor'easter or hurricane we prioritize trees on homes, driveways, and power lines, tarping and stabilizing to prevent further damage before completing full removal and cleanup.",
  },
  {
    question: "What does tree removal cost in Virginia Beach?",
    answer: "There is no flat rate. Cost depends on the tree's size, its proximity to your house or power lines, equipment access, and whether you add stump grinding. Tall loblolly pines and sprawling live oaks on tight coastal lots cost more because they must be climbed and rigged down in sections. You get a free written estimate, and the price we quote is the price you pay.",
  },
];

const VirginiaBeachPage = () => {
  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Virginia Beach VA | Free Estimates"
        description="Local tree removal, trimming, stump grinding and 24/7 emergency service in Virginia Beach, VA. Licensed, insured, BBB A+. Free estimates from Art-is-Tree LLC."
      />
      <Head>
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Virginia Beach, Virginia" />
        <meta name="geo.position" content="36.8529;-75.9780" />
        <meta name="ICBM" content="36.8529, -75.9780" />
      </Head>

      <div className="bg-gray-50 min-h-screen pb-16">
        <section className="bg-[#1B4D3E] text-white pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 mt-0">
              Tree Service Virginia Beach, VA | Art-is-Tree LLC
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Your local, trusted tree care experts serving every neighborhood in Virginia Beach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg" asChild>
                <a href="tel:7573195131">
                  <Phone className="mr-2 w-5 h-5" /> Call (757) 319-5131
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold py-6 px-8 text-lg" asChild>
                <Link to="/contact">Request a Free Estimate</Link>
              </Button>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>Virginia Beach is Art-is-Tree LLC's home market and the core of our daily operations. Our owner, Mike Campbell, grew up right here in Hampton Roads, spending over 15+ years working hands-on in nearly every neighborhood from the bustling Oceanfront all the way down to the rural, open stretches of Pungo. This deep local experience matters because Virginia Beach features a very specific humid subtropical climate and unique sandy coastal plain soil that create specific tree failure risks.</p>
            <p>Unfortunately, out-of-area contractors often don't understand our highly localized conditions. They routinely misjudge how our exceptionally high water table, sudden temperature shifts, and frequent coastal storms impact root stability. When heavy seasonal rains saturate the ground, the structural integrity of the soil is severely compromised.</p>
            <p>Similarly, the region's majestic hardwoods present their own unique challenges. Massive live oaks and water oaks, with structural root plates extending 40 feet in diameter or more, can conceal advanced decay underground long after a severe storm passes. Root decay continues to progress silently beneath the surface, posing a hidden, unpredictable danger to nearby homes, driveways, and underground utilities.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Removal in Virginia Beach, VA</h2>
            <p>Safe and efficient <Link to="/services/tree-removal" className="text-[#1B4D3E] font-bold underline hover:text-[#D4AF37]">tree removal</Link> in Virginia Beach demands absolute precision and careful planning. The tight residential lots and massive, mature trees typical of our area require meticulous structural assessment before a single cut is made.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Crane-Assisted Removal for Coastal Properties</h2>
            <p>For waterfront homes and extremely tight spaces, our specialized <Link to="/services/crane-removal" className="text-[#1B4D3E] font-bold underline hover:text-[#D4AF37]">crane-assisted removal</Link> ensures that massive, compromised trees are lifted cleanly over delicate structures without causing collateral damage.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Trimming & Storm Prep in Virginia Beach</h2>
            <p>Proactive, scientifically sound <Link to="/services/tree-trimming" className="text-[#1B4D3E] font-bold underline hover:text-[#D4AF37]">tree trimming</Link> is essential for both aesthetic beauty and vital storm preparation. Our experienced tree climbers utilize spikeless climbing techniques to completely protect the cambium layer of your live oaks and pines.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Emergency Tree Service Virginia Beach</h2>
            <p>When severe weather strikes unexpectedly, our highly responsive <Link to="/services/emergency-tree-service" className="text-[#1B4D3E] font-bold underline hover:text-[#D4AF37]">emergency tree service</Link> is available 24/7. We dispatch rapidly to safely handle fallen trees, secure hazardous hanging limbs, and clear devastating storm damage across all Virginia Beach neighborhoods.</p>
          </div>
        </main>

        <section className="container mx-auto px-4 max-w-4xl mb-16">
          <div className="bg-[#1B4D3E]/5 p-8 rounded-2xl border border-[#1B4D3E]/10">
            <h3 className="text-2xl font-playfair font-bold text-[#1B4D3E] mb-6">Our Comprehensive Virginia Beach Services:</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Tree Removal",
                "Crane-Assisted Removal",
                "Tree Trimming & Pruning",
                "Stump Grinding",
                "Land Clearing",
                "Emergency Tree Service",
                "Storm Damage Cleanup"
              ].map((service, index) => (
                <li key={index} className="flex items-center text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-[#1B4D3E] text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-playfair font-bold mb-4">Ready for Expert Tree Care in Virginia Beach?</h3>
            <p className="text-lg mb-8 text-gray-200">
              Contact Art-is-Tree LLC today for a free, comprehensive estimate in Virginia Beach. We pride ourselves on providing detailed written estimates with absolutely no hidden fees. As a locally owned and operated business, your satisfaction and safety are our top priorities.
            </p>
            <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-10 text-lg" asChild>
              <Link to="/contact">Get Your Free Estimate</Link>
            </Button>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-4 max-w-4xl my-16">
        <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6 text-center">Serving All of Virginia Beach</h2>
        <GoogleMap query="Virginia Beach, VA" title="Art-is-Tree LLC tree service area — Virginia Beach, VA" />
      </section>

      <LocationFAQ city="Virginia Beach" faqs={virginiaBeachFaqs} />
      <ServiceLinks cityName="Virginia Beach" />
      <RelatedCaseStudies currentPath="/service-areas/virginia-beach" preferred={['/case-studies/crane-safety', '/case-studies/property-value']} />
    </>
  );
};

export default VirginiaBeachPage;