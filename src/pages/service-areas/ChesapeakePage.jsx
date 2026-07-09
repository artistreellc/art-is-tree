import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceLinks from '@/components/ServiceLinks';

const ChesapeakePage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Art-is-Tree LLC",
    "url": "https://artistreevabeach.com/service-areas/chesapeake",
    "telephone": "+17573195131",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chesapeake",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.7682,
      "longitude": -76.2875
    },
    "areaServed": {
      "@type": "City",
      "name": "Chesapeake"
    },
    "priceRange": "$$",
    "image": "https://artistreevabeach.com/logo.png"
  };

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Chesapeake VA | Removal & Clearing"
        description="Tree removal, trimming, stump grinding and land clearing in Chesapeake, VA. Licensed, insured, BBB A+ tree service. 24/7 storm response. Free estimates."
      />
      <Head>
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Chesapeake, Virginia" />
        <meta name="geo.position" content="36.7682;-76.2875" />
        <meta name="ICBM" content="36.7682, -76.2875" />
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
              Tree Service Chesapeake, VA | Art-is-Tree LLC
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Expert tree care tailored for Chesapeake's diverse geography, from dense suburban neighborhoods to expansive rural acreage.
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
            <p>Chesapeake is geographically the second largest city in the Commonwealth of Virginia, presenting a remarkably diverse landscape that requires an incredibly broad range of specialized tree care expertise. As a city that aggressively bridges the gap between highly dense suburban development and vast, untouched rural acreage, Chesapeake demands a tree service company capable of adapting to wildly different environmental conditions on a daily basis.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Removal in Chesapeake, VA</h2>
            <p>Expert tree removal in Chesapeake requires an understanding of how to navigate both tight suburban spaces and vast acreage. We safely dismantle massive hazard trees with absolute precision, utilizing complex rigging in Greenbrier's residential lots and heavy-duty extraction techniques in Deep Creek and beyond.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Land Clearing for Large Properties & New Construction</h2>
            <p>Given Chesapeake's continuous expansion, we specialize in high-capacity land clearing for new residential developments, agricultural reclamation, and commercial site preparation. Our industrial forestry equipment quickly processes dense underbrush, invasive Callery pear stands, and thick pine thickets.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Stump Grinding in Chesapeake</h2>
            <p>Eliminating hazardous stumps is essential for preventing subterranean pest infestations, particularly in Chesapeake's damp, organic soils. We utilize specialized track-driven stump grinders that systematically eradicate large root systems well below grade without devastating the surrounding turf.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Emergency Tree Service Chesapeake</h2>
            <p>When massive storms compromise tall pines or heavy hardwoods, immediate stabilization is critical. Our responsive, 24/7 emergency crews deploy rapidly throughout Chesapeake to safely lift hazardous trees off homes, clear blocked driveways, and prevent further catastrophic damage to your property.</p>
          </div>
        </main>

        <section className="container mx-auto px-4 max-w-4xl mb-16">
          <div className="bg-[#1B4D3E]/5 p-8 rounded-2xl border border-[#1B4D3E]/10">
            <h3 className="text-2xl font-playfair font-bold text-[#1B4D3E] mb-6">Our Core Chesapeake Services:</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Tree Removal",
                "Land Clearing",
                "Stump Grinding",
                "Tree Trimming & Pruning",
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
            <h3 className="text-3xl font-playfair font-bold mb-4">Ready to tackle your Chesapeake property project?</h3>
            <p className="text-lg mb-8 text-gray-200">
              Contact Art-is-Tree LLC today for a free estimate in Chesapeake. Whether you need a single hazardous tree removed or comprehensive site preparation, we provide clear, written estimates with absolutely no hidden fees.
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
      <ServiceLinks cityName="Chesapeake" />
      <RelatedCaseStudies currentPath="/service-areas/chesapeake" preferred={['/case-studies/chesapeake-bay-preservation-act', '/case-studies/property-value']} />
    </>
  );
};

export default ChesapeakePage;