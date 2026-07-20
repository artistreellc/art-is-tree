import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Head } from 'vite-react-ssg';
import { Link, useLocation } from 'react-router-dom';
import { Loader2, ShieldCheck, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Cite from '@/components/Cite';
import { COMPANY_INFO } from '@/constants/seoMetadata';

// Schemas
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import GoogleReviewsDisplay from '@/components/GoogleReviewsDisplay';
import FeaturedCaseStudyBanner from '@/components/FeaturedCaseStudyBanner';
import YouTubeFacade from '@/components/YouTubeFacade';
import QuickLinksBento from '@/components/QuickLinksBento';

// Lazy Loaded Components
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
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
    answer: "Yes. Art-is-Tree LLC is a fully licensed and insured tree service company operating in Virginia. We are BBB A+ accredited and members of the International Society of Arboriculture (ISA). Hiring a licensed and insured tree company protects you from liability if damage or injury occurs on your property during the work."
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
      {/* Preload the LCP hero (responsive) so it starts before the CSS/JS. */}
      <Head>
        <link
          rel="preload"
          as="image"
          href="/images/virginia-beach-winter-storm-cleanup-960.webp"
          imageSrcSet="/images/virginia-beach-winter-storm-cleanup-640.webp 640w, /images/virginia-beach-winter-storm-cleanup-960.webp 960w, /images/virginia-beach-winter-storm-cleanup.webp 1280w"
          imageSizes="100vw"
          fetchPriority="high"
        />
      </Head>

      <LocalSEOMeta
        pageTitle="Tree Service Virginia Beach VA | Art-is-Tree LLC"
        description="Licensed, insured tree service in Virginia Beach and Hampton Roads. Tree removal, trimming, stump grinding and 24/7 storm response. Free estimates. Call today."
      />

      <LocalBusinessSchema />
      <FAQPageSchema items={homeFaqData} />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/" />

      <div className="flex flex-col w-full overflow-x-hidden">
        <header className="relative isolate text-white py-28 md:py-40 overflow-hidden flex items-center justify-center text-center">
          <img
            src="/images/virginia-beach-winter-storm-cleanup-960.webp"
            srcSet="/images/virginia-beach-winter-storm-cleanup-640.webp 640w, /images/virginia-beach-winter-storm-cleanup-960.webp 960w, /images/virginia-beach-winter-storm-cleanup.webp 1280w"
            sizes="100vw"
            width="1280"
            height="960"
            alt="Art-is-Tree LLC crew clearing a storm-downed tree in Virginia Beach"
            className="absolute inset-0 -z-10 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2F24]/90 via-[#0A2F24]/78 to-[#08251C]/94"></div>
          <div className="container relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 drop-shadow-md mt-0 text-white speakable">
              Tree Service in Virginia Beach, VA
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-6 drop-shadow speakable">
              Tree removal, trimming, stump grinding, and 24/7 storm cleanup across Virginia Beach and Hampton Roads. Licensed, insured, BBB A+, and rated 5.0 across {COMPANY_INFO.rating.reviewCount} reviews &mdash; with the crane and the experience to take on the jobs other companies turn down.
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

        <FeaturedCaseStudyBanner />

        <QuickLinksBento />

        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-6 mt-0">
                Experienced Climbers. Serious Equipment. Clean Job Sites.
              </h2>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-[#1B4D3E] font-medium">
                <span className="flex items-center gap-2"><Award className="w-5 h-5 text-[#D4AF37]" /> BBB A+ &amp; ISA Member</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37]" /> 24/7 Emergency Service</span>
              </div>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed font-light text-left mx-auto max-w-none space-y-6">
              <p>
                <strong>Art-is-Tree LLC is a licensed and insured tree service in Virginia Beach, VA</strong> &mdash; and we've earned a 5.0 rating across {COMPANY_INFO.rating.reviewCount} Google reviews<Cite href={COMPANY_INFO.socials.googleMaps} label="Google" /> doing the work a lot of companies would rather hand off. Removals, trimming and pruning, stump grinding, crane jobs, land clearing, and storm cleanup, all in-house and all over Hampton Roads: Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. We're BBB A+ rated<Cite href={COMPANY_INFO.socials.bbb} label="BBB" />, licensed and insured, and members of the International Society of Arboriculture<Cite href="https://www.isa-arbor.com/" label="ISA" />.
              </p>
              <p>
                Virginia Beach has no shortage of tree companies. What sets us apart is experience on the ropes. Owner Mike Campbell has climbed professionally since he was 19 and has spent years working the coastal trees of Hampton Roads &mdash; the loblolly pines that fail in a nor'easter, the mature water oaks overhanging homes in Kempsville, and the sandy soil that changes how a tree has to come down. Every job is run by someone who has done it thousands of times, not a crew learning on your property.
              </p>
              <p>
                We are equipped for the work other crews turn down. When a tree stands too close to a house, fence, or power line to fell conventionally, we rig it to a crane and remove it in controlled sections. When a storm drives a limb through a roof, we respond around the clock to secure the property before it causes more <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">damage</Link>. And on waterfront lots, we help you work through <Link to="/case-studies/chesapeake-bay-preservation-act" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">Chesapeake Bay Preservation Act</Link> requirements before the first cut, so a removal doesn't turn into a violation.
              </p>
              <p>
                The standard is the same whether the job is large or small. From routine <Link to="/services/tree-trimming" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">tree trimming</Link> to a high-risk <Link to="/services/tree-removal" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">tree removal</Link>, <Link to="/services/stump-grinding" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">stump grinding</Link> taken below grade, or <Link to="/services/emergency-tree-service" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">emergency service</Link> after a storm, the work is done right and the site is left clean. Call <a href="tel:7573195131" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">(757) 319-5131</a> for a free estimate &mdash; every call reaches a person, not a machine.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3 mt-0">Recent Work in Hampton Roads</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Real crane removals, technical climbing, and cleanups from Art-is-Tree LLC job sites across Virginia Beach.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                ['virginia-beach-crane-rigging-storm', 'Climber rigging a storm-damaged trunk to a crane in Virginia Beach, VA'],
                ['virginia-beach-tall-tree-climb', 'Arborist climbing a tall tree beside a home in Virginia Beach, VA'],
                ['virginia-beach-oak-crane-climb', 'Climber and crane removing a large oak in Virginia Beach, VA'],
                ['virginia-beach-crane-operation-oak', 'Crane crew removing a large oak by a Virginia Beach home'],
              ].map(([file, alt]) => (
                <Link key={file} to="/gallery" className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md border border-gray-200 bg-gray-100 group">
                  <img src={`/images/${file}.webp`} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-[#1B4D3E] text-white hover:bg-[#14392e] font-semibold py-6 px-8">
                <Link to="/gallery">See More of Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
          <CertificationsSection />

          <section className="py-16 md:py-20 bg-[#1B4D3E]">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white text-center mb-3 mt-0">See Our Team at Work</h2>
              <p className="text-gray-200 text-center mb-8 max-w-2xl mx-auto">Watch how Art-is-Tree LLC safely handles complex tree removals across Virginia Beach and Hampton Roads.</p>
              <YouTubeFacade id="9xS3CGC3fjo" title="Art-is-Tree LLC tree service in Virginia Beach, VA" />
            </div>
          </section>

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
