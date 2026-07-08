import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';

const TreeRemovalPage = () => {
  const serviceAreas = ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"];
  const description = "Safe, licensed and insured tree removal in Virginia Beach and Hampton Roads. Hazardous, dead and large tree specialists. Crane-assisted. Free estimates.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocalSEOMeta 
        pageTitle="Tree Removal Virginia Beach VA | Art-is-Tree LLC" 
        description={description} 
      />
      
      <ServiceSchema 
        name="Tree Removal" 
        description={description} 
        serviceAreas={serviceAreas} 
      />
      
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Tree Removal', url: '/services/tree-removal' }
        ]} 
      />

      <section className="bg-gradient-to-br from-[#1B4D3E] to-[#0A2F24] pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <nav className="text-sm font-medium text-gray-300 mb-6 flex justify-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>→</span>
            <Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <span>→</span>
            <span className="text-[#D4AF37]">Tree Removal</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Tree Removal in Virginia Beach & Hampton Roads
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Tree removal in Virginia Beach is not a simple job, especially when dealing with towering timber in tight spaces. We are large tree specialists dedicated to safe and efficient extraction.
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Tree removal in Virginia Beach is not a simple job. The lots are tight. The trees are big. The sandy coastal soil means root systems do not always hold the way you would expect, and a tree that looks stable can fail fast when conditions are right. A large loblolly pine, a mature water oak, or a decades-old live oak that has grown over your roofline requires real planning to come down safely — the right rigging, the right equipment, and a climber who has made these decisions before under real pressure.</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Mike Campbell has been making those decisions for over 15 years. Before starting Art-is-Tree LLC in 2021, he climbed trees for other Hampton Roads companies, learning every scenario this area produces. He has taken down 70-foot loblolly pines in residential backyards in Kempsville with less than 10 feet of clearance on either side. He has removed massive live oaks overhanging rooflines in Thoroughgood and Great Neck. He has handled storm-damaged trees leaning against structures in Chesapeake and Portsmouth that needed to come down immediately and correctly — no margin for error. One customer watched the crew drop 25-foot sections from a 60-foot oak with precision that left the shed directly below completely untouched. That removal is documented in our <Link to="/case-studies/crane-safety" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">crane safety case study from Thoroughgood</Link>.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">How We Approach Every Tree Removal</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">When Art-is-Tree handles a tree removal in Virginia Beach, the process starts before anyone touches a chainsaw. We assess the lean, the weight distribution, and every hazard on the ground. We determine whether the tree can be sectioned down from the top or whether <Link to="/services/crane-removal" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">crane-assisted removal</Link> is the right call for tight-access properties. We set the rigging, clear the drop zone, and the climber goes up knowing exactly what the plan is for every cut. Nothing is improvised when a tree is coming down over a structure.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Large Tree Specialists</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">We are large tree specialists. If you have gotten quotes from other tree companies who said your tree was too big, too close to the house, too difficult, or inaccessible — call us. Difficult large tree removal is what Art-is-Tree was built for. Crane-assisted tree removal, tight residential lots, trees over structures, trees near power lines, waterfront properties along the Chesapeake Bay — these are the jobs where 15 years of climbing experience and proper professional equipment matter most.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-10 mb-6">Complete Cleanup Included</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Every tree removal includes complete debris cleanup. We chip the brush, remove the wood, and rake the area. Your yard should look better when we leave than it did before we arrived. <Link to="/services/stump-grinding" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">Stump grinding</Link> is available as an add-on — ground below grade so you can sod, replant, or build over the area with no remnant root system left behind.</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">All quotes are free, written, and never exceeded on the day of service. We serve Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, and surrounding Hampton Roads. For a free tree removal estimate call (757) 319-5131.</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6">What's Included</h2>
            <ul className="space-y-4">
              {[
                "Safe felling techniques for any tree size",
                "Sectional dismantling for tight spaces",
                "Crane-assisted removal over structures and fences",
                "Complete debris cleanup and hauling",
                "Stump grinding available as add-on",
                "Emergency same-day removal available"
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
                  <h3 className="font-bold text-xl text-gray-900 mb-1">BBB A+ Rated</h3>
                  <p className="text-gray-600">With 15+ years of dedicated professional experience.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Fully Licensed & Insured</h3>
                  <p className="text-gray-600">Comprehensive coverage protecting your property completely.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1B4D3E]/10 p-3 rounded-full mr-4">
                  <Clock className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">24/7 Availability</h3>
                  <p className="text-gray-600">Emergency response available for hazardous situations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#1B4D3E] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Ready to clear your property?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Our experienced tree removal crew is ready to handle the job safely and effectively. For a free tree removal estimate call (757) 319-5131.
            </p>
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
      <ServiceAreaLinks serviceName="Tree Removal" />
      <RelatedCaseStudies currentPath="/services/tree-removal" preferred={['/case-studies/crane-safety', '/case-studies/unlicensed-contractors', '/case-studies/property-value']} />
    </div>
  );
};

export default TreeRemovalPage;