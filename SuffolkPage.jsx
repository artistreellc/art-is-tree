import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceLinks from '@/components/ServiceLinks';

const SuffolkPage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Art-is-Tree LLC",
    "url": "https://artistreevabeach.com/service-areas/suffolk",
    "telephone": "+17573195131",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Suffolk",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.7282,
      "longitude": -76.5836
    },
    "areaServed": {
      "@type": "City",
      "name": "Suffolk"
    },
    "priceRange": "$$",
    "image": "https://artistreevabeach.com/logo.png"
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Suffolk VA | Removal & Land Clearing"
        description="Tree removal, trimming and land clearing in Suffolk, VA. Licensed, insured, BBB A+ tree service for rural acreage and homes. 24/7 storm response. Free estimates."
      />
      <Helmet>
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Suffolk, Virginia" />
        <meta name="geo.position" content="36.7282;-76.5836" />
        <meta name="ICBM" content="36.7282, -76.5836" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="bg-gray-50 min-h-screen pb-16">
        <Breadcrumbs />

        <section className="bg-[#1B4D3E] text-white pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div {...fadeInUp}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 mt-0">
                Tree Service Suffolk, VA | Art-is-Tree LLC
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Expert tree removal and land clearing tailored for Suffolk's rural acreage and expansive properties.
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
          </div>
        </section>

        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div 
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700 leading-relaxed"
            {...fadeInUp}
          >
            <p>Suffolk is Virginia's largest city by land area, presenting an incredibly vast and diverse working environment that contrasts sharply with the densely packed suburban grids found in neighboring coastal cities. Much of it is rural with large acreage properties common, and expansive active farmland and pine timber stands are common sights across the landscape.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Removal in Suffolk, VA</h2>
            <p>Expert tree extraction in rural Suffolk requires specialized heavy machinery and meticulous hazard assessments. We safely dismantle structurally compromised oaks, aging pines, and dead hardwoods piece by piece, utilizing advanced rigging systems to ensure no impact on your rural property's outbuildings or delicate fencing lines.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Rural Land Clearing & Site Preparation</h2>
            <p>Transforming raw, densely wooded acreage into prime real estate is our specialty. We provide comprehensive land clearing for new residential developments, equestrian properties, and agricultural expansions. Utilizing industrial forestry mulchers and high-capacity machinery, we rapidly process thick underbrush and heavy timber.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Storm Damage & Emergency Tree Service Suffolk</h2>
            <p>When isolated severe weather compromises towering trees across vast properties, fast stabilization is critical. Our responsive emergency crews cover the entirety of Suffolk, quickly deploying heavy-duty equipment to safely extract fallen timber, unblock long rural driveways, and secure your agricultural or residential property.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Stump Grinding in Suffolk</h2>
            <p>Clearing rural acreage requires effectively dealing with the aftermath. We utilize commercial-grade, track-driven stump grinders capable of processing multiple massive stumps across large fields with incredible speed.</p>
          </div>
        </main>

        <section className="container mx-auto px-4 max-w-4xl mb-16">
          <div 
            className="bg-[#1B4D3E]/5 p-8 rounded-2xl border border-[#1B4D3E]/10"
            {...fadeInUp}
          >
            <h3 className="text-2xl font-playfair font-bold text-[#1B4D3E] mb-6">Our Core Suffolk Services:</h3>
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
          <div 
            className="bg-[#1B4D3E] text-white p-10 rounded-2xl shadow-xl"
            {...fadeInUp}
          >
            <h3 className="text-3xl font-playfair font-bold mb-4">Ready to manage your Suffolk property?</h3>
            <p className="text-lg mb-8 text-gray-200">
              Contact Art-is-Tree LLC today for a free estimate in Suffolk. Whether you are dealing with a complex hazard assessment or need immediate site preparation, we provide detailed written estimates with absolutely no hidden fees.
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
      <ServiceLinks cityName="Suffolk" />
      <RelatedCaseStudies currentPath="/service-areas/suffolk" preferred={['/case-studies/property-value', '/case-studies/unlicensed-contractors']} />
    </>
  );
};

export default SuffolkPage;