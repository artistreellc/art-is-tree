import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ShieldCheck, AlertTriangle, Wind, Zap, Home, Car, AlertCircle, TreePine, Users, PhoneCall, Camera, Ban, Star } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta.jsx';
import ServiceSchema from '@/components/seo/ServiceSchema.jsx';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import FAQSection from '@/components/FAQSection';
import AnswerBlock from '@/components/AnswerBlock';
import StormSeasonChart from '@/components/StormSeasonChart';
import { useReviewStats } from '@/hooks/useReviewStats';

// Panic-moment questions. These are what somebody types with one hand while
// standing in the yard looking at the tree — not research questions.
const emergencyFaqs = [
  {
    question: 'A tree just fell on my house — what do I do first?',
    answer:
      'Get everyone out of the affected rooms and well away from the tree. Treat every downed wire as live and stay clear of it. If a line is down, gas is leaking, or anyone is hurt, call 911 and the power company before anyone else. Then call a licensed, insured tree crew — Art-is-Tree LLC answers 24/7 at (757) 319-5131. Photograph the damage before anything is moved; it makes the insurance claim far easier. Do not try to cut the tree yourself. A fallen trunk is loaded with tension and can kick back or roll without warning, which is where most homeowner injuries happen.',
  },
  {
    question: 'How fast can you get here for an emergency tree removal in Virginia Beach?',
    answer:
      'A real person answers the phone day or night, and we dispatch around the clock across Virginia Beach, Norfolk, Chesapeake, and Portsmouth. Trees on homes, on vehicles, on power connections, or blocking emergency access get worked first. During a major storm every tree company in Hampton Roads is running at once, so we triage by danger rather than by call order — the honest answer is that we tell you a real window when you call instead of promising a number we cannot hold.',
  },
  {
    question: 'Is it safe to go near a storm-damaged tree that is still standing?',
    answer:
      'No. A leaning tree, a split trunk, or a limb hung up in the canopy is still holding stored energy and can release with no warning and no sound. Root plates that lifted in saturated soil can settle further hours or days after the storm. Stay out from under it, keep children and pets clear, park vehicles somewhere else, and let a crew with rigging and the right insurance take the load off it.',
  },
  {
    question: 'Do I call my insurance company or the tree service first?',
    answer:
      'Call the tree service first if the tree is an active hazard. Insurers expect you to prevent further damage, and stabilizing a tree that is still threatening the structure is part of that. Photograph everything before it is moved, then open the claim. Art-is-Tree LLC provides written documentation of what was removed and how, and we can coordinate directly with your adjuster.',
  },
  {
    question: 'Does emergency tree removal cost more at night or on a holiday?',
    answer:
      'Emergency work does cost more than scheduled work, and that is true of any licensed tree service. You are paying for a crew mobilized outside normal hours, rigging a tree that is already damaged and unpredictable, and often crane time. What does not change is that you get a written price before we start. We give free estimates, and if the tree can safely wait until morning we will tell you so rather than bill you for the hour.',
  },
  {
    question: 'Do nor’easters really bring trees down, or is it just hurricanes?',
    answer:
      'Nor’easters do, and in Hampton Roads the fall ones are the storms that catch people off guard. A hurricane crosses Virginia Beach in a matter of hours; a fall nor’easter parks off the coast and pushes northeast wind, rain and tide at us for two or three days. In October and November the oaks still have their leaves, so the canopy catches the full load of that wind, and by the second day the ground is saturated and the root plate is sitting in mud. That is when a healthy-looking water oak or loblolly pine tips over whole. Art-is-Tree LLC runs the same 24/7 emergency tree service through nor’easter season as through hurricane season, across Virginia Beach, Norfolk, Chesapeake and Portsmouth.',
  },
  {
    question: 'Which cities do you cover for 24/7 emergency tree service?',
    answer:
      'Art-is-Tree LLC runs emergency and storm damage tree work across Virginia Beach, Norfolk, Chesapeake, and Portsmouth, and throughout Hampton Roads. We are licensed, insured, and BBB A+ rated, with 17 years of storm response in this region.',
  },
];

const EMERGENCY_STEPS = [
  { icon: Users, title: 'Get everyone clear', text: 'Move people and pets well away from the tree and anything it is leaning on. Stay clear of wires — treat every downed line as live.' },
  { icon: PhoneCall, title: 'Call 911 if it’s serious', text: 'If a power line is down, gas is leaking, or the tree hit a home with people inside, call 911 and the power company first.' },
  { icon: Phone, title: 'Call us — 24/7', text: 'Call (757) 319-5131. A real person answers day or night, and we get a crew out to stabilize the tree before it does more damage.' },
  { icon: Camera, title: 'Photograph the damage', text: 'Take photos before anything is moved. It makes your insurance claim far easier — and we can coordinate directly with your adjuster.' },
  { icon: Ban, title: 'Don’t cut it yourself', text: 'A fallen tree is loaded with tension and can kick back or roll without warning. This is where most homeowner injuries happen.' },
];

const WHAT_WE_HANDLE = [
  { icon: Home, text: 'Trees fallen on a roof, car, fence, or power lines' },
  { icon: Zap, text: 'Hanging or split limbs threatening the house' },
  { icon: AlertCircle, text: 'Storm-damaged trees leaning dangerously' },
  { icon: Car, text: 'Roads and driveways blocked by fallen trees' },
  { icon: Wind, text: 'Full post-hurricane and nor’easter cleanup' },
  { icon: TreePine, text: 'Hazardous dead trees that can’t wait' },
];

export default function EmergencyPage() {
  const { count: reviewCount, rating: reviewRating } = useReviewStats();
  const handlePhoneClick = () => {
    if (window.gtag_report_phone_click) window.gtag_report_phone_click();
  };

  return (
    <div className="w-full">
      <LocalSEOMeta
        pageTitle="Emergency Tree Service Virginia Beach VA | 24/7 Emergency Tree Removal Near Me, Storm Damage | Art-is-Tree LLC"
        description="Tree down on your house right now? Art-is-Tree LLC answers 24/7 for emergency tree removal and storm damage across Virginia Beach, Norfolk, Chesapeake, Portsmouth and Hampton Roads. A real person picks up, day or night. What to do in the first 10 minutes, what not to touch, and how we document it for your insurance claim. Licensed, insured, BBB A+, 5-Star rated. Free estimates. Call (757) 319-5131."
      />
      <ServiceSchema
        name="Emergency Storm Damage Tree Removal"
        description="24/7 emergency tree removal and storm damage response across Virginia Beach, Norfolk, Chesapeake, Portsmouth and Hampton Roads. Fallen trees on homes, vehicles and power connections, hung limbs and hurricane cleanup."
        serviceAreas={["Virginia Beach", "Norfolk", "Chesapeake", "Portsmouth"]}
      />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/emergency" />
      <LocalBusinessSchema />
      {/* Fed by EMERGENCY_STEPS — the same array "The First 10 Minutes" renders
          below — so the markup and the visible steps cannot drift apart. */}
      <HowToSchema
        name="What to do when a tree falls on your house"
        description="The first ten minutes after a tree comes down on a home in Virginia Beach or Hampton Roads, in order, before anyone touches a saw."
        steps={EMERGENCY_STEPS}
      />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 px-4">
        <img
          src="/images/virginia-beach-storm-tree-removal.webp"
          alt="Art-is-Tree crew clearing a storm-damaged tree in Virginia Beach"
          className="absolute inset-0 -z-10 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2F24]/85 via-[#0A2F24]/80 to-[#08251C]/95" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.25),transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full font-bold mb-8 shadow-lg border border-red-400/60 text-sm tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white/70" />
            </span>
            24/7 EMERGENCY RESPONSE
          </div>

          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white leading-tight speakable">
            Emergency Tree Service in Virginia Beach: 24/7 Storm Damage Tree Removal
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto speakable">
            Tree down on your house? We answer day or night. When a nor’easter drops a loblolly pine on your roof or the saturated coastal soil lets a water oak go over, our emergency tree service crew is standing by around the clock across Virginia Beach and Hampton Roads to make your property safe — fast.
          </p>

          <a
            href="tel:7573195131"
            onClick={handlePhoneClick}
            className="group bg-[#D4AF37] text-black font-black text-2xl py-5 px-10 rounded-2xl w-full max-w-md mx-auto flex items-center justify-center gap-3 shadow-2xl hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-7 h-7" fill="currentColor" />
            Call (757) 319-5131
          </a>

          {/* stat strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/90 text-sm md:text-base font-semibold">
            <span className="flex items-center gap-2"><PhoneCall className="w-5 h-5 text-[#D4AF37]" /> A real person answers</span>
            <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37]" /> Rapid 24/7 dispatch</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Licensed & fully insured</span>
          </div>
        </div>
      </section>

      {/* ─── QUICK ANSWER (AI Overview / featured snippet target) ─ */}
      <AnswerBlock label="If a tree just came down">
        Get everyone clear of the tree and stay away from any downed wire &mdash; call 911 first if a
        line is down, gas is leaking, or someone is hurt. Then call a licensed, insured crew rather
        than cutting it yourself, because a fallen trunk holds tension and can kick back. For{' '}
        <strong>emergency tree removal in Virginia Beach</strong> and storm damage across Hampton
        Roads, Art-is-Tree LLC answers 24/7 at{' '}
        <a href="tel:7573195131" onClick={handlePhoneClick} className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">(757) 319-5131</a>
        {' '}&mdash; a real person, day or night. Photograph the damage before anything is moved.
      </AnswerBlock>

      {/* ─── FIRST 10 MINUTES: STEP TIMELINE ──────────────────── */}
      <section className="bg-white py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">If it just happened</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mt-2 mb-4">The First 10 Minutes</h2>
            <p className="text-gray-600 text-lg">A tree just came down. Here’s exactly what to do — in order — before anyone touches a saw.</p>
          </div>

          <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {/* connecting line (desktop) */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-red-200 via-[#1B4D3E]/30 to-[#1B4D3E]/20" aria-hidden="true" />
            {EMERGENCY_STEPS.map((step, i) => (
              <li key={step.title} className="relative text-center md:text-left flex flex-col items-center md:items-start">
                <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-4 ${i === 2 ? 'bg-[#D4AF37] text-black' : 'bg-[#1B4D3E] text-[#D4AF37]'}`}>
                  <step.icon className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── STORM ARTICLE + CHART ─────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Why it happens here</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mt-2 mb-6">Coastal Storms Are Hard on Hampton Roads Trees</h2>
            <p className="text-gray-700 text-lg leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              Hampton Roads sits on flat, sandy soil with a high water table, and that changes how trees fail here. When a storm dumps rain for hours, the ground saturates and loses its grip on the root plate. A loblolly pine or water oak that stood for fifty years can tip over whole — roots and all — in soil that’s turned to soup.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              The wind does the rest. Our tallest pines catch a gust like a sail, and one split or a hidden pocket of rot is all it takes for a limb — or the whole trunk — to end up on a roof.
            </p>

            <blockquote className="my-8 border-l-4 border-[#D4AF37] pl-5 py-1">
              <p className="font-playfair text-xl md:text-2xl text-[#1B4D3E] italic leading-snug">
                “The trees that fail in a storm almost always had the problem long before the storm showed up.”
              </p>
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed">
              That’s why timing matters. Risk isn’t spread evenly across the year — it spikes with hurricane season and again with the fall and winter nor’easters. A little <Link to="/services/tree-trimming" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">storm-prep trimming</Link> before the season beats an emergency call during it.
            </p>
          </div>

          <div className="lg:pt-10">
            <StormSeasonChart />
            <div className="mt-6 relative rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-[16/10]">
              <img
                src="/images/virginia-beach-crane-removal-over-house.webp"
                alt="Crane lifting a storm-damaged tree section off a house in Virginia Beach"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                Crane removal over a home — Virginia Beach
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FALL NOR'EASTERS ──────────────────────────────────── */}
      <section className="bg-[#0A2F24] text-white py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">The season after hurricane season</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 mb-6">Fall Nor’easters: The Storms That Take Hampton Roads Trees by Surprise</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Hurricane season winds down and everyone relaxes. Then a nor’easter sets up off the Outer Banks in October or November and does something a hurricane rarely does here: it stays. A hurricane crosses Virginia Beach in a matter of hours. A fall nor’easter parks offshore and pushes northeast wind, rain and tide at the coast for two or three days straight.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mt-4">
              That is exactly the wrong weather for our trees. In October the oaks still have their leaves, so a canopy that would let a January wind through catches the whole load. By the second day the ground is saturated, and along the Bay and the Lynnhaven the tide has pushed water up into yards that never flood, so the root plate is sitting in mud. A water oak or loblolly pine that looked fine all summer tips over whole &mdash; roots and all &mdash; often on the last night of the storm, after the worst of the wind has already passed.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mt-4">
              If a nor’easter is sitting over Hampton Roads as you read this, the trees that are going to fail are already showing it: a lean that was not there yesterday, soil lifting on the uphill side of a trunk, a limb hanging by a strip of bark over the driveway. The setup comes back every fall, and it finds the same trees: the leaner nobody looked at, the loblolly pine standing alone after the neighbors took theirs out, the water oak with a hollow nobody could see from the ground. Art-is-Tree LLC runs emergency tree service through every nor’easter, not just hurricanes &mdash; if a tree is on the house, leaning at the house, or blocking the road in Virginia Beach, Norfolk, Chesapeake or Portsmouth, call <a href="tel:7573195131" onClick={handlePhoneClick} className="text-[#D4AF37] font-semibold underline hover:text-white">(757) 319-5131</a> now and a real person picks up.
            </p>

            <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#D4AF37] mt-8 mb-4">What to look at before the first fall storm</h3>
            <ul className="space-y-3 text-gray-200 text-lg">
              {[
                'A lean that was not there last year, or soil lifting and cracking on the side away from the lean. That is a root plate starting to move.',
                'Dead limbs and hangers over the roof, the driveway or the service drop. Wind does not need a whole tree to fail to put a limb through a window.',
                'Loblolly pines left standing alone. Pines grow up in a stand and share the wind; the last one left catches all of it.',
                'Water oaks and other soft-wooded trees with cavities, fungal conks at the base, or a co-dominant union that has started to split.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-200 text-lg leading-relaxed mt-6">
              A few hours of <Link to="/services/tree-trimming" className="text-[#D4AF37] font-semibold underline hover:text-white">storm-prep trimming</Link> in September is cheaper than any emergency call in November, and the warning signs a tree gives before it fails are laid out in our <Link to="/case-studies/storm-damage-mitigation" className="text-[#D4AF37] font-semibold underline hover:text-white">storm &amp; hurricane damage case study</Link>. If the storm gets there first, the same crew answers 24/7 &mdash; and documents the damage for <Link to="/services/emergency-tree-service" className="text-[#D4AF37] font-semibold underline hover:text-white">your insurance claim</Link>.
            </p>
          </div>

          <aside className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 lg:mt-14">
            <h3 className="font-playfair text-xl font-bold text-white mt-0 mb-5">Nor’easter season at a glance</h3>
            <dl className="divide-y divide-white/10 m-0">
              {[
                ['When', 'September through April. The fall storms hit while the trees are still in leaf.'],
                ['Wind', 'Northeast, sustained for a day or more, with the strongest gusts along the Bay and the Oceanfront.'],
                ['Ground', 'Saturated by the second day, with tidal flooding on the low streets near the Bay, the Lynnhaven and the Elizabeth River.'],
                ['Trees most at risk', 'Loblolly pine, water oak, willow oak, and Bradford pear with a split co-dominant union.'],
                ['How they fail', 'Whole-tree root-plate failure in wet ground; long limbs snapped by sustained wind.'],
              ].map(([term, def]) => (
                <div key={term} className="py-3 grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4">
                  <dt className="text-[#D4AF37] font-semibold text-xs uppercase tracking-wide sm:pt-0.5">{term}</dt>
                  <dd className="text-gray-100 m-0">{def}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ─── WHAT WE HANDLE ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3">What We Handle</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">If a tree is threatening your home or blocking your way, we’ve dealt with it before.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_WE_HANDLE.map(({ icon: Icon, text }) => (
              <div key={text} className="flex gap-4 items-start bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-[#1B4D3E]/20 hover:shadow-sm transition-all">
                <div className="w-11 h-11 rounded-lg bg-[#1B4D3E] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-gray-800 font-medium pt-1.5">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mt-10">
            A tree that comes down in a storm usually takes the fence with it. Once we&rsquo;ve cleared it
            and your yard is safe again, we&rsquo;ll point you to VB Fences for{' '}
            <a
              href="https://vbfences.com/services/fence-repair"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]"
            >
              fence repair after tree damage
            </a>
            {' '}&mdash; a local Hampton Roads crew we trust to put it back.
          </p>
        </div>
      </section>

      {/* ─── STAT / TRUST BAND ─────────────────────────────────── */}
      <section className="bg-[#1B4D3E] py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            ['24/7', 'Every day of the year'],
            ['17 yrs', 'Climbing Hampton Roads'],
            [`${reviewRating.toFixed(1)} ★`, `${reviewCount} Google reviews`],
            ['BBB A+', 'Licensed & insured'],
          ].map(([big, small]) => (
            <div key={big}>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-[#D4AF37]">{big}</div>
              <div className="text-sm text-gray-300 mt-1">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ (panic-moment questions; feeds FAQPage schema) ── */}
      <FAQPageSchema items={emergencyFaqs} />
      <FAQSection items={emergencyFaqs} title="Emergency Tree Removal in Virginia Beach: FAQ" />

      {/* ─── SERVICE AREAS ─────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-4">24/7 Emergency Tree Service Across Hampton Roads</h2>
          <p className="text-gray-600 mb-8">
            Storm damage and emergency tree removal in Virginia Beach, Norfolk, Chesapeake and Portsmouth &mdash; licensed, insured, and dispatched around the clock.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ['Virginia Beach', '/service-areas/virginia-beach'],
              ['Norfolk', '/service-areas/norfolk'],
              ['Chesapeake', '/service-areas/chesapeake'],
              ['Portsmouth', '/service-areas/portsmouth'],
            ].map(([city, path]) => (
              <Link
                key={city}
                to={path}
                className="bg-gray-100 hover:bg-[#1B4D3E] hover:text-white text-gray-800 px-6 py-3 rounded-full text-base font-semibold border border-gray-200 transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#08251C] py-20 px-4 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)]" />
        <div className="max-w-3xl mx-auto">
          <AlertTriangle className="w-10 h-10 text-[#D4AF37] mx-auto mb-5" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">Don’t wait for it to get worse.</h2>
          <p className="text-gray-300 text-lg mb-8">
            A leaning tree or a hung limb only gets more dangerous. Call now — we answer every time, and we can coordinate with your insurance adjuster to make the claim painless.
          </p>
          <p className="text-gray-400 text-base mb-8">
            Already past the emergency and dealing with the paperwork? Here&rsquo;s{' '}
            <Link to="/services/emergency-tree-service" className="text-[#D4AF37] underline hover:text-white">
              what insurance covers on a storm damage claim
            </Link>
            {' '}&mdash; and what it costs. If the tree came from next door, our{' '}
            <Link to="/case-studies/virginia-tree-law" className="text-[#D4AF37] underline hover:text-white">
              Virginia tree law guide
            </Link>
            {' '}covers who is responsible.
          </p>
          <a
            href="tel:7573195131"
            onClick={handlePhoneClick}
            className="bg-[#D4AF37] text-black font-black text-2xl py-5 px-10 rounded-2xl w-full max-w-md mx-auto flex items-center justify-center gap-3 shadow-2xl hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-7 h-7" fill="currentColor" />
            Call (757) 319-5131
          </a>
        </div>
      </section>
    </div>
  );
}
