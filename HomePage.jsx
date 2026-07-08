import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader2, ShieldCheck, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';

// Schemas
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import AggregateRatingSchema from '@/components/seo/AggregateRatingSchema';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
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
    question: "Do you serve Virginia Beach?",
    answer: "Yes, we provide comprehensive, professional tree care services throughout the Virginia Beach area."
  }, {
    question: "What areas do you cover?",
    answer: "We proudly serve Virginia Beach, Norfolk, Chesapeake, Hampton, and the greater Hampton Roads region."
  }, {
    question: "Are you licensed in Virginia?",
    answer: "Yes, Art-is-Tree LLC is a fully licensed and insured tree company operating in Virginia."
  }, {
    question: "Do you offer emergency tree removal?",
    answer: "Yes, we offer 24/7 emergency tree removal services across Hampton Roads to ensure your property remains safe."
  }, {
    question: "What is your service radius?",
    answer: "Our service radius covers approximately 30 miles surrounding Virginia Beach, including neighboring coastal communities."
  }];

  return <>
      <LocalSEOMeta 
        pageTitle="Tree Service Virginia Beach VA | Art-is-Tree LLC" 
        description="Licensed, insured tree service in Virginia Beach and Hampton Roads. Tree removal, trimming, stump grinding and 24/7 storm response. Free estimates. Call today." 
      />
      
      <OrganizationSchema />
      <LocalBusinessSchema />
      <AggregateRatingSchema />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/" />
      
      <div className="flex flex-col w-full overflow-x-hidden">
        <header className="relative bg-[#1B4D3E] text-white py-24 md:py-32 overflow-hidden flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587541884826-b43073ad974c?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 drop-shadow-md mt-0 text-white speakable">
              Art-is-Tree LLC: Professional Tree Services in Virginia Beach
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-10 drop-shadow speakable">
              Expert tree care, pruning, removal, and maintenance by skilled tree climbers serving the community with dedication and unparalleled skill.
              5% off all services with website submission!
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
                <span className="flex items-center gap-2"><Award className="w-5 h-5 text-[#D4AF37]" /> Skilled Tree Climbers</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Licensed & Insured</span>
                <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37]" /> 24/7 Emergency Service</span>
              </div>
            </div>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed font-light text-left mx-auto max-w-none space-y-6">
              <p>
                There are a lot of tree companies in Virginia Beach, but Art-is-Tree LLC stands apart through sheer dedication and local expertise. Mike Campbell started climbing trees professionally at 19 years old, and over the years, he has cultivated an unmatched understanding of local arboriculture. Whether you are dealing with towering loblolly pines in Kempsville or delicate ornamental pruning, you need an experienced arborist in Virginia Beach who can handle the job flawlessly.
              </p>
              <p>
                We are equipped to tackle the most demanding situations, including complex crane-assisted tree removal when standard methods fall short. Additionally, when extreme weather hits our coastal area, our emergency tree service team deploys rapidly to secure your property and eliminate immediate <Link to="/case-studies/unlicensed-contractors" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">property damage</Link> dangers.
              </p>
              <p>
                From meticulous pruning to complete stump grinding, we deliver quality at every stage. If you need routine maintenance, a high-risk extraction, emergency tree service, or simply some thorough stump grinding, we have you covered. For a free estimate, call (757) 319-5131. We answer every call.
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