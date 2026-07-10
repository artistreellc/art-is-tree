import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, Axe, Truck, Scissors, CircleOff, Zap, Trees, ShieldCheck, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceLinks from '@/components/ServiceLinks';
import GoogleMap from '@/components/GoogleMap';
import LocationFAQ from '@/components/LocationFAQ';
import { Eyebrow, SectionHeading, Figure } from '@/components/design/Primitives';

const NEIGHBORHOODS = [
  'Oceanfront', 'Great Neck', 'Kempsville', 'Sandbridge', 'Thoroughgood',
  'Chic’s Beach', 'Red Mill', 'Pungo', 'Bayside', 'Town Center',
  'Alanton', 'Little Neck', 'Hilltop', 'Nimmo',
];

const SERVICES = [
  { icon: Axe, kw: 'Tree Removal in Virginia Beach',
    text: 'From a single dead loblolly pine to a massive live oak leaning over the house, every tree removal is planned before the first cut. On tight coastal lots we climb and rig the tree down in pieces so nothing lands on your roof, fence, or landscaping.' },
  { icon: Truck, kw: 'Crane-Assisted Tree Removal',
    text: 'When a tree is too big or too close to the house to fell safely, our crane tree removal lifts it out in sections and over the roof to a clear drop zone — the safest way to take down hazardous trees on Virginia Beach’s packed waterfront lots.' },
  { icon: Scissors, kw: 'Tree Trimming & Pruning',
    text: 'Storm-prep pruning and ANSI-standard tree trimming that keeps your canopy strong and off the roof. We use spikeless climbing on live oaks and hardwoods to protect the tree while we shape it and clear deadwood.' },
  { icon: CircleOff, kw: 'Stump Grinding',
    text: 'We grind stumps below grade so you can reclaim the yard for grass, a garden, or a new planting — as part of a removal or as a standalone stump grinding service anywhere in Virginia Beach.' },
  { icon: Zap, kw: '24/7 Emergency Tree Service',
    text: 'A tree on the house or a road blocked after a nor’easter can’t wait. Our emergency tree service runs 24/7 across Virginia Beach — we answer the phone, stabilize the hazard, and clear the storm damage fast.' },
  { icon: Trees, kw: 'Land & Lot Clearing',
    text: 'Overgrown lots and rural acreage from Pungo to the Blackwater line — we handle land clearing, brush removal, and hauling so you can open up and use your property.' },
];

const virginiaBeachFaqs = [
  {
    question: 'Do I need a permit to remove a tree in Virginia Beach?',
    answer: 'On an ordinary residential lot, no permit is required to remove a tree on your own property. The main exception is waterfront and near-water property in the Chesapeake Bay Preservation Act’s Resource Protection Area, where clearing within the shoreline buffer is restricted and removing many healthy trees can require Board review. Dead, dying, and hazardous trees can generally come down. We confirm the rules for your specific lot before any cutting begins.',
  },
  {
    question: 'How fast can you respond to a storm-damaged tree in Virginia Beach?',
    answer: 'Our emergency crew is on call 24/7 across Virginia Beach, from Sandbridge and Red Mill to Great Neck and the Oceanfront. After a nor’easter or hurricane we prioritize trees on homes, driveways, and power lines, tarping and stabilizing to prevent further damage before completing full removal and cleanup.',
  },
  {
    question: 'What does tree removal cost in Virginia Beach?',
    answer: 'There is no flat rate. Cost depends on the tree’s size, its proximity to your house or power lines, equipment access, and whether you add stump grinding. Tall loblolly pines and sprawling live oaks on tight coastal lots cost more because they must be climbed and rigged down in sections. You get a free written estimate, and the price we quote is the price you pay.',
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

      <div className="bg-[#FAF9F6]">
        {/* ── HERO ── */}
        <header className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28 px-4 text-white">
          <img src="/images/virginia-beach-bucket-truck-pine.webp" alt="Art-is-Tree bucket truck servicing tall pines in a Virginia Beach neighborhood" className="absolute inset-0 -z-10 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2F24]/88 via-[#0A2F24]/80 to-[#08251C]/92" />
          <div className="container mx-auto max-w-4xl text-center">
            <Eyebrow className="mb-4">Virginia Beach, VA</Eyebrow>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Tree Service in Virginia Beach, VA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Licensed, insured tree removal, trimming, stump grinding, crane work, and 24/7 storm response &mdash; from the Oceanfront to Pungo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg" asChild>
                <a href="tel:7573195131"><Phone className="mr-2 w-5 h-5" /> Call (757) 319-5131</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold py-6 px-8 text-lg" asChild>
                <Link to="/contact">Free Estimate</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* ── INTRO ── */}
        <section className="container mx-auto px-4 max-w-4xl py-16 md:py-20">
          <SectionHeading eyebrow="Your local crew" title="The tree service Virginia Beach calls first" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              Virginia Beach is home base for Art-is-Tree LLC, and it&rsquo;s where we do most of our work. We&rsquo;re a licensed and insured tree service covering every corner of the city &mdash; from the Oceanfront and Chic&rsquo;s Beach down to Sandbridge, Red Mill, and the open acreage of Pungo. Whether you need a hazardous tree removed off your roof in Kempsville, storm-prep pruning on the big live oaks in Great Neck, or a stump ground out flush in Thoroughgood, you get the same crew that&rsquo;s been climbing these coastal trees for 15+ years.
            </p>
            <p>
              Tree removal, tree trimming, stump grinding, crane-assisted removal, land clearing, and 24/7 emergency storm response &mdash; it&rsquo;s all in-house, and it&rsquo;s all done to one standard: safe, to code, and cleaned up before we leave. When people search for a <strong>tree service Virginia Beach</strong> homeowners actually trust, that&rsquo;s the reputation we&rsquo;ve built one job at a time.
            </p>
          </div>

          {/* neighborhood chips */}
          <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-7">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#1B4D3E] m-0">Virginia Beach neighborhoods we work in every week</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {NEIGHBORHOODS.map((n) => (
                <span key={n} className="bg-[#1B4D3E]/[0.06] text-[#1B4D3E] border border-[#1B4D3E]/10 px-3.5 py-1.5 rounded-full text-sm font-semibold">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES (styled colored list) ── */}
        <section className="bg-white border-y border-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading eyebrow="What we do here" title="Full-service tree care in Virginia Beach" align="center" className="mb-12" />
            <div className="grid md:grid-cols-2 gap-5">
              {SERVICES.map(({ icon: Icon, kw, text }) => (
                <div key={kw} className="group flex gap-5 bg-[#FAF9F6] border border-gray-200 rounded-2xl p-6 hover:border-[#1B4D3E]/25 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#1B4D3E] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-1.5">{kw}</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] m-0">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCAL CONDITIONS (research) + photo ── */}
        <section className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Figure
              src="/images/virginia-beach-large-tree-over-house.webp"
              alt="A large hardwood towering over a home in Virginia Beach before removal"
              caption="A large hardwood over a home — a common Virginia Beach call"
              aspect="aspect-[3/4]"
              className="max-w-md mx-auto lg:mx-0"
            />
            <div>
              <SectionHeading eyebrow="Why local knowledge matters" title="Coastal trees fail in specific ways" />
              <div className="mt-6 space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Virginia Beach sits on flat, sandy coastal-plain soil with a high water table. When heavy rain saturates the ground, that soil loses its grip on the root plate, and a tall <strong>loblolly pine</strong> or mature <strong>water oak</strong> can tip over whole in the next storm. Out-of-town crews routinely misread how our soil and coastal wind change a removal.
                </p>
                <p>
                  On waterfront lots near the Lynnhaven or the Chesapeake Bay, the <Link to="/case-studies/chesapeake-bay-preservation-act" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Chesapeake Bay Preservation Act</Link> restricts clearing inside the 100-ft shoreline buffer. We know how to work those lots &mdash; and every other kind in the city &mdash; safely and to code.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[#1B4D3E]">
                <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-2"><Waves className="w-5 h-5 text-[#D4AF37]" /> Waterfront &amp; CBPA-savvy</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="container mx-auto px-4 max-w-4xl pb-16">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">Get a free estimate in Virginia Beach</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              A detailed written quote with no hidden fees, from a local crew that does the work itself. Book online and take 5% off.
            </p>
            <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-10 text-lg" asChild>
              <Link to="/contact">Get Your Free Estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
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
