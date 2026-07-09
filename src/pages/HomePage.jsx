import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader2, ShieldCheck, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Cite from '@/components/Cite';
import { COMPANY_INFO } from '@/constants/seoMetadata';

// Schemas
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import AggregateRatingSchema from '@/components/seo/AggregateRatingSchema';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import GoogleReviewsDisplay from '@/components/GoogleReviewsDisplay';

// Lazy Loaded Components
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const NeighborhoodServiceContent = lazy(() => import('@/components/NeighborhoodServiceContent'));
const ComprehensiveServicesOverview = lazy(() => import('@/components/ComprehensiveServicesOverview'));
const TrustAndCredentialsSection = lazy(() => import('@/components/TrustAndCredentialsSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const ServiceAreasSection = lazy(() => import('@/components/ServiceAreasSection'));
const LocalBusinessInfo = lazy(() => import('@/components/LocalBusinessInfo'));
const WhyChooseSection = lazy(() => import('@/components/WhyChooseSection'));
const DirectoryLinksSection = lazy(() => import('@/components/DirectoryLinksSection'));
const CertificationsSection = lazy(() => import('@/components/CertificationsSection'));

const SectionFallback = () => <div className="w-full h-48 flex items-center justify-center bg-gray-50/50">
    <Loader2 className="w-8 h-8 text-[#1B4D3E] animate-spin" />
  </div>;

const HomePage = () => {
  const location = useLocation();

  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
    }
  }, [location.pathname]);

  const homeFaqData = [{
    question: "What areas does Art-is-Tree LLC serve?",
    answer: "Art-is-Tree LLC is based in Virginia Beach, VA, and provides tree service throughout Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, and the greater Hampton Roads region. Our service radius covers roughly 30 miles around Virginia Beach, including nearby coastal and waterfront communities."
  }, {
    question: "Is Art-is-Tree LLC licensed and insured?",
    answer: "Yes. Art-is-Tree LLC is a fully licensed and insured tree service company operating in Virginia. We are BBB A+ accredited and a member of the Tree Care Industry Association (TCIA). Hiring a licensed and insured tree company protects you from liability if damage or injury occurs on your property during the work."
  }, {
    question: "How much does tree removal cost in Virginia Beach?",
    answer: "Tree removal cost in Virginia Beach depends on the tree's size and height, its location and proximity to structures or power lines, how difficult it is to access, and whether stump grinding is included. Small trees cost far less than large, hazardous removals that require a crane. Because every job is different, we provide free, no-obligation estimates. Call (757) 319-5131 for a quote."
  }, {
    question: "Do you offer emergency and storm-damage tree removal?",
    answer: "Yes. We offer 24/7 emergency tree service across Hampton Roads. Coastal storms, high winds, and hurricanes frequently bring down trees and large limbs in Virginia Beach, and our crew responds quickly to remove fallen or leaning trees, clear driveways and roofs, and make your property safe."
  }, {
    question: "What tree services do you provide?",
    answer: "We provide complete tree care: tree removal, tree trimming and pruning, stump grinding, crane-assisted removal of large or hazardous trees, land and lot clearing, brush removal, and 24/7 emergency storm response. Whether you need routine maintenance or a complex high-risk extraction, we handle it."
  }, {
    question: "Do you remove the stump after cutting down a tree?",
    answer: "Stump grinding is available as part of a removal or as a standalone service. Removing the tree leaves a stump behind, and grinding it below grade lets you reclaim the space for grass, landscaping, or new planting. We can quote removal with or without stump grinding so you can choose what fits your budget."
  }, {
    question: "Can you remove large trees close to my house?",
    answer: "Yes. Large trees over homes, on tight lots, or near power lines are our specialty. When a standard drop is unsafe, we use crane-assisted tree removal to lift heavy sections up and away from your roof, fence, and landscaping piece by piece, protecting your property throughout the job."
  }, {
    question: "Do I need a permit to remove a tree in Virginia Beach?",
    answer: "It depends on the property. Many residential tree removals do not require a permit, but waterfront and near-water properties in Virginia Beach may fall under the Chesapeake Bay Preservation Act (CBPA), with Resource Protection Area buffers that restrict clearing. We help homeowners understand and navigate these local requirements before work begins."
  }, {
    question: "How soon can you come out for an estimate?",
    answer: "We schedule free estimates promptly, usually within a few days, and often sooner. For emergencies such as a tree on a house or a road blocked by storm damage, we respond 24/7. Call (757) 319-5131 and we answer every call."
  }, {
    question: "Do you offer free estimates?",
    answer: "Yes, every estimate is free and carries no obligation. As a bonus, we offer 5% off all services when you submit your request through our website."
  }, {
    question: "Why should I hire a licensed tree company instead of a cheaper unlicensed crew?",
    answer: "Tree work is dangerous and can cause serious property damage. When you hire an unlicensed, uninsured crew, you can be held liable for injuries or damage on your property. A licensed and insured company like Art-is-Tree LLC carries that risk instead, follows recognized safety standards, and stands behind its work."
  }, {
    question: "Who owns Art-is-Tree LLC?",
    answer: "Art-is-Tree LLC is a family-owned Virginia Beach company. Owner Mike Campbell began climbing trees professionally at 19 and has built the business on hands-on skill, safety, and local knowledge of Hampton Roads trees and coastal conditions."
  }];

  return <>
      <LocalSEOMeta
        pageTitle="Tree Service Virginia Beach VA | Art-is-Tree LLC"
        description="Licensed, insured tree service in Virginia Beach and Hampton Roads. Tree removal, trimming, stump grinding and 24/7 storm response. Free estimates. Call today."
      />

      <OrganizationSchema />
      <LocalBusinessSchema />
      <AggregateRatingSchema />
      <FAQPageSchema items={homeFaqData} />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/" />

      <div className="flex flex-col w-full overflow-x-hidden">
        <header className="relative bg-[#1B4D3E] text-white py-24 md:py-32 overflow-hidden flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587541884826-b43073ad974c?auto=format&fit=crop&q=65&w=1024')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 drop-shadow-md mt-0 text-white speakable">
              Tree Service in Virginia Beach, VA
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-6 drop-shadow speakable">
              Art-is-Tree LLC is a licensed and insured, BBB A+ tree service serving Virginia Beach and all of Hampton Roads. Tree removal, trimming, stump grinding, crane work, and 24/7 emergency storm response.
            </p>
            <p className="text-lg text-[#D4AF37] font-semibold max-w-2xl mx-auto mb-10">
              Get 5% off any service when you request your free estimate through our website.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg shadow-lg" asChild>
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B4D3E] font-bold py-6 px-8 text-lg bg-transparent shadow-lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-6 mt-0">
                Your Trusted Hampton Roads Tree Service
              </h2>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-[#1B4D3E] font-medium">
                <span className="flex items-center gap-2"><Award className="w-5 h-5 text-[#D4AF37]" /> BBB A+ &amp; TCIA Member</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37]" /> 24/7 Emergency Service</span>
              </div>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed font-light text-left mx-auto max-w-none space-y-6">
              <p>
                <strong>Art-is-Tree LLC is a licensed and insured tree service company based in Virginia Beach, VA</strong>, serving homeowners and property managers across Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, and the greater Hampton Roads region. We provide tree removal, tree trimming and pruning, stump grinding, crane-assisted removal, land clearing, and 24/7 emergency storm response &mdash; backed by a BBB A+ rating<Cite href={COMPANY_INFO.socials.bbb} label="BBB" />, TCIA membership<Cite href="https://www.tcia.org/" label="TCIA" />, and a 5.0-star reputation across 134 reviews<Cite href={COMPANY_INFO.socials.googleMaps} label="Google" />.
              </p>
              <p>
                There are a lot of tree companies in Virginia Beach, but Art-is-Tree LLC stands apart through dedication and deep local knowledge. Owner Mike Campbell started climbing trees professionally at 19 years old and has spent years mastering the coastal trees of Hampton Roads. Whether you are dealing with towering loblolly pines in Kempsville or delicate ornamental pruning, you get an experienced tree care specialist who handles the job safely and cleanly.
              </p>
              <p>
                We are equipped for the most demanding situations, including complex crane-assisted tree removal when a standard drop is unsafe near homes, fences, or power lines. When extreme weather hits our coastal area, our emergency tree service crew deploys rapidly to secure your property and eliminate immediate <Link to="/case-studies/unlicensed-contractors" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">property damage</Link> hazards. And on waterfront lots, we help you navigate <Link to="/case-studies/chesapeake-bay-preservation-act" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">Chesapeake Bay Preservation Act</Link> requirements before any cutting begins.
              </p>
              <p>
                From meticulous <Link to="/services/tree-trimming" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">tree trimming</Link> to complete <Link to="/services/stump-grinding" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">stump grinding</Link>, we deliver quality at every stage. If you need routine maintenance, a high-risk <Link to="/services/tree-removal" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">tree removal</Link>, 24/7 <Link to="/services/emergency-tree-service" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">emergency tree service</Link>, or thorough stump grinding, we have you covered. For a free estimate, call <a href="tel:7573195131" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">(757) 319-5131</a> &mdash; we answer every call.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
          <CertificationsSection />
          <NeighborhoodServiceContent />
          <WhyChooseSection title="Why Choose Art-is-Tree LLC?" />
          <ComprehensiveServicesOverview />
          <TrustAndCredentialsSection />
          <AboutSection />
          <GoogleReviewsDisplay />
          <ContactSection />
          <FAQSection items={homeFaqData} />
          <LocalBusinessInfo />
          <ServiceAreasSection />
          <DirectoryLinksSection />
        </Suspense>
      </div>
    </>;
};
export default HomePage;
