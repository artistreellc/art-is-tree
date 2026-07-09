import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceLinks from '@/components/ServiceLinks';
import GoogleMap from '@/components/GoogleMap';
import LocationFAQ from '@/components/LocationFAQ';

const portsmouthFaqs = [
  {
    question: "Can you remove heritage trees in Portsmouth's historic districts?",
    answer: "Yes. Olde Towne, Cradock, and Port Norfolk hold some of Hampton Roads' oldest trees, and they often overhang historic homes. We use precise rigging and crane-assisted removal to take down massive oaks and pines section by section, lowering the timber safely without touching the surrounding architecture.",
  },
  {
    question: "How do I know if an old tree on my Portsmouth property is dangerous?",
    answer: "Internal decay is rarely visible from the ground. We provide a hazard assessment that checks for hidden rot, weak branch unions, cavities, and compromised roots that threaten foundations and rooflines, then recommend pruning, cabling, or removal based on what we find.",
  },
  {
    question: "Do you offer 24/7 emergency tree service in Portsmouth?",
    answer: "Yes. When a storm drops a heavy limb on a Portsmouth home, our emergency crew responds around the clock to remove hazardous debris, stabilize the property against further damage, and complete full cleanup.",
  },
];

const PortsmouthPage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Art-is-Tree LLC",
    "url": "https://artistreevabeach.com/service-areas/portsmouth",
    "telephone": "+17573195131",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portsmouth",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.8354,
      "longitude": -76.2983
    },
    "areaServed": {
      "@type": "City",
      "name": "Portsmouth"
    },
    "priceRange": "$$",
    "image": "https://artistreevabeach.com/logo.png"
  };


  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Portsmouth VA | Free Estimates"
        description="Tree removal, trimming and stump grinding in Portsmouth, VA. Licensed, insured, BBB A+ tree service with 24/7 emergency storm response. Free estimates."
      />
      <Head>
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Portsmouth, Virginia" />
        <meta name="geo.position" content="36.8354;-76.2983" />
        <meta name="ICBM" content="36.8354, -76.2983" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-16">
        <Breadcrumbs />

        <section className="bg-[#1B4D3E] text-white pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 mt-0">
                Tree Service Portsmouth, VA | Art-is-Tree LLC
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Expert hazardous tree assessment and precise extraction for Portsmouth's oldest neighborhoods and historical properties.
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
           
          >
            <p>Portsmouth represents one of the most historically significant residential housing stocks in the entire Hampton Roads region. Neighborhoods such as Olde Towne, Cradock, and Port Norfolk feature stunning architecture nestled alongside massive, deeply rooted heritage trees. In many cases, these incredibly mature trees actually predate the historic structures they tightly overhang.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Hazardous Tree Removal in Portsmouth, VA</h2>
            <p>Removing massive, structurally compromised trees in Portsmouth's densely packed historic districts requires exact calculations and surgical execution. We dismantle hazardous oaks, pines, and maples piece by piece, safely lowering heavy timber to the ground without ever impacting the surrounding architecture.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Risk Assessment for Older Properties</h2>
            <p>Because structural decay is rarely visible from the ground, our expert tree care team provides meticulous risk assessments for heritage trees. We identify hidden internal rot, unstable unions, and compromised root systems that threaten foundations and rooflines.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Tree Trimming & Pruning in Portsmouth</h2>
            <p>Maintaining the structural integrity of mature canopies requires strategic weight reduction and precise deadwooding. Our specialized tree trimming safely removes limbs that have grown too close to historic homes and overhead powerlines.</p>

            <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mt-12 mb-6">Emergency Tree Service Portsmouth</h2>
            <p>When a storm shatters a heavy limb over your property, immediate stabilization is essential. Our dedicated emergency response team is available around the clock to swiftly remove hazardous debris, secure your home against further damage, and restore safety to your historically significant Portsmouth property.</p>
          </div>
        </main>

        <section className="container mx-auto px-4 max-w-4xl mb-16">
          <div 
            className="bg-[#1B4D3E]/5 p-8 rounded-2xl border border-[#1B4D3E]/10"
           
          >
            <h3 className="text-2xl font-playfair font-bold text-[#1B4D3E] mb-6">Our Core Portsmouth Services:</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Tree Removal",
                "Hazardous Tree Assessment",
                "Crane-Assisted Removal",
                "Tree Trimming & Pruning",
                "Stump Grinding",
                "Emergency Tree Service"
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
           
          >
            <h3 className="text-3xl font-playfair font-bold mb-4">Ready to secure your Portsmouth property?</h3>
            <p className="text-lg mb-8 text-gray-200">
              Contact Art-is-Tree LLC today for a free estimate in Portsmouth. Whether you are dealing with a complex hazard assessment or need an immediate emergency extraction, we provide detailed written estimates with absolutely no hidden fees.
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
        <section className="container mx-auto px-4 max-w-4xl mt-4">
          <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6 text-center">Serving Portsmouth &amp; Surrounding Neighborhoods</h2>
          <GoogleMap query="Portsmouth, VA" title="Art-is-Tree LLC tree service area — Portsmouth, VA" />
        </section>
      </div>

      <LocationFAQ city="Portsmouth" faqs={portsmouthFaqs} />
      <ServiceLinks cityName="Portsmouth" />
      <RelatedCaseStudies currentPath="/service-areas/portsmouth" preferred={['/case-studies/unlicensed-contractors', '/case-studies/property-value']} />
    </>
  );
};

export default PortsmouthPage;