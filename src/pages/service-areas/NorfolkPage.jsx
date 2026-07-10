import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceLinks from '@/components/ServiceLinks';
import GoogleMap from '@/components/GoogleMap';
import LocationFAQ from '@/components/LocationFAQ';

const norfolkFaqs = [
  {
    question: "Can you remove large trees on Norfolk's tight urban lots?",
    answer: "Yes. In neighborhoods like Ghent, Colonial Place, and Larchmont, mature willow oaks and crape myrtles often stand just feet from historic homes, fences, and neighbors. We dismantle trees piece by piece — rigging limbs and lowering timber by rope or crane — so nothing lands on structures or gardens.",
  },
  {
    question: "Who is responsible for a tree in the Norfolk right-of-way?",
    answer: "Street trees between the sidewalk and curb are typically the city's responsibility, and removing or heavily pruning them usually needs Norfolk's approval. Trees on your side of the property line are yours. We help you tell the difference and coordinate the right approvals before any work starts.",
  },
  {
    question: "Do you handle storm and flood-damaged trees in Norfolk?",
    answer: "Absolutely. Norfolk's low elevation and frequent tidal flooding stress root systems and topple weakened trees during storms. Our 24/7 emergency team clears fallen and hanging limbs, secures the site, and hauls away debris.",
  },
];

const NorfolkPage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Art-is-Tree LLC",
    "url": "https://artistreevabeach.com/service-areas/norfolk",
    "telephone": "+17573195131",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Norfolk",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.8508,
      "longitude": -76.2859
    },
    "areaServed": {
      "@type": "City",
      "name": "Norfolk"
    },
    "priceRange": "$$",
    "image": "https://artistreevabeach.com/logo.png"
  };

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Norfolk VA | Removal & Trimming"
        description="Tree removal, trimming and stump grinding in Norfolk, VA. Licensed, insured, BBB A+ tree service with 24/7 storm response across Hampton Roads. Free estimates."
      />
      <Head>
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Norfolk, Virginia" />
        <meta name="geo.position" content="36.8508;-76.2859" />
        <meta name="ICBM" content="36.8508, -76.2859" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-16">
        <Breadcrumbs />

        <section className="bg-[#1B4D3E] text-white pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 mt-0">
              Tree Service Norfolk, VA | Art-is-Tree LLC
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Expert tree care tailored for Norfolk's historic neighborhoods and challenging urban environments.
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
            <p>Norfolk has some of the oldest urban tree cover in Hampton Roads. The big street trees in Ghent and Larchmont, the tight waterfront lots in Ocean View, and the established blocks around Wards Corner all take experienced hands to work on safely.</p>
            <p>This is not the kind of work an out-of-town crew handles well. Norfolk's mature trees hang over historic homes, new roofs, shared driveways, and overhead power lines, and the lots are tight enough that there's no room for a mistake. That's exactly the work we're set up for.</p>
            
            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Removal in Norfolk, VA</h2>
            <p>When a mature tree fails or becomes a hazard in an urban environment, safe and calculated <Link to="/services/tree-removal" className="text-[#1B4D3E] font-bold underline hover:text-[#D4AF37]">tree removal</Link> is essential. We assess every variable—from subterranean utility lines to structural leans and internal decay—before making a single cut.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Crane-Assisted Removal for Tight Urban Lots</h2>
            <p>In many historic districts like Ghent and Wards Corner, traditional felling is simply impossible due to limited ground space. This is where the absolute necessity of our <Link to="/services/crane-removal" className="text-[#1B4D3E] font-bold underline hover:text-[#D4AF37]">crane-assisted removal</Link> comes into play.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Trimming & Pruning in Norfolk</h2>
            <p>Maintaining the health of Norfolk's live oaks and water oaks requires proactive, intelligent care. Proper tree trimming and pruning not only enhances the aesthetic appeal of your property but drastically reduces wind resistance during hurricane season.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Emergency Tree Service Norfolk</h2>
            <p>When a sudden squall off the Chesapeake Bay or a severe summer thunderstorm snaps a branch over your roofline, immediate action is required. We offer rapid, 24/7 <Link to="/services/emergency-tree-service" className="text-[#1B4D3E] font-bold underline hover:text-[#D4AF37]">emergency tree service</Link> across all of Norfolk.</p>
          </div>
        </main>

        <section className="container mx-auto px-4 max-w-4xl mb-16">
          <div className="bg-[#1B4D3E]/5 p-8 rounded-2xl border border-[#1B4D3E]/10">
            <h3 className="text-2xl font-playfair font-bold text-[#1B4D3E] mb-6">Our Core Norfolk Services:</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Tree Removal",
                "Crane-Assisted Removal",
                "Tree Trimming & Pruning",
                "Stump Grinding",
                "Emergency Tree Service",
                "Storm Damage Cleanup"
              ].map((service, index) => (
                <li key={index} className="flex items-center text-gray-800 font-medium text-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-[#1B4D3E] text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-playfair font-bold mb-4">Ready for Expert Tree Care in Norfolk?</h3>
            <p className="text-lg mb-8 text-gray-200">
              Call Art-is-Tree LLC for a free estimate in Norfolk. You get a clear written quote with no hidden fees, from the same trained crew that works Virginia Beach and the rest of Hampton Roads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-10 text-lg" asChild>
                <a href="tel:7573195131">
                  <Phone className="mr-2 w-5 h-5" /> Call (757) 319-5131
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold py-6 px-10 text-lg" asChild>
                <Link to="/contact">Get Free Estimate Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-4 max-w-4xl my-16">
        <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6 text-center">Serving Norfolk &amp; Its Historic Neighborhoods</h2>
        <GoogleMap query="Norfolk, VA" title="Art-is-Tree LLC tree service area — Norfolk, VA" />
      </section>

      <LocationFAQ city="Norfolk" faqs={norfolkFaqs} />
      <ServiceLinks cityName="Norfolk" />
      <RelatedCaseStudies currentPath="/service-areas/norfolk" preferred={['/case-studies/property-value', '/case-studies/unlicensed-contractors']} />
    </>
  );
};

export default NorfolkPage;