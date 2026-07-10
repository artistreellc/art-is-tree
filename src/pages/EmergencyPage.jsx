import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ShieldCheck, AlertTriangle, Wind, Zap, Home, Car, AlertCircle, TreePine, Users, PhoneCall, Camera, Ban, Star } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta.jsx';
import ServiceSchema from '@/components/seo/ServiceSchema.jsx';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import StormSeasonChart from '@/components/StormSeasonChart';

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
  const handlePhoneClick = () => {
    if (window.gtag_report_phone_click) window.gtag_report_phone_click();
  };

  return (
    <div className="w-full">
      <LocalSEOMeta
        pageTitle="24/7 Emergency Tree Service Virginia Beach VA"
        description="Storm damage or fallen tree? Art-is-Tree offers 24/7 emergency tree service across Virginia Beach and Hampton Roads. Licensed, insured, BBB A+. Call (757) 319-5131."
      />
      <ServiceSchema
        name="Emergency Tree Service"
        description="24/7 emergency tree removal across Virginia Beach and Hampton Roads."
        serviceAreas={["Virginia Beach", "Norfolk", "Chesapeake", "Portsmouth", "Suffolk"]}
      />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/emergency" />

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
            Tree Down in Virginia Beach?<br className="hidden md:block" /> We Answer Day or Night.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto speakable">
            When a nor’easter drops a loblolly pine on your roof or the saturated coastal soil lets a water oak go over, our crew is standing by around the clock to make your property safe — fast.
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
              That’s why timing matters. Risk isn’t spread evenly across the year — it spikes with hurricane season and again with winter nor’easters. A little <Link to="/services/tree-trimming" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">storm-prep trimming</Link> before the season beats an emergency call during it.
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
        </div>
      </section>

      {/* ─── STAT / TRUST BAND ─────────────────────────────────── */}
      <section className="bg-[#1B4D3E] py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            ['24/7', 'Every day of the year'],
            ['15+ yrs', 'Climbing Hampton Roads'],
            ['5.0 ★', '134 Google reviews'],
            ['BBB A+', 'Licensed & insured'],
          ].map(([big, small]) => (
            <div key={big}>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-[#D4AF37]">{big}</div>
              <div className="text-sm text-gray-300 mt-1">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICE AREAS ─────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-8">Emergency Service Across Hampton Roads</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Virginia Beach", "Norfolk", "Chesapeake", "Portsmouth", "Suffolk"].map((city) => (
              <span key={city} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-base font-semibold border border-gray-200">
                {city}
              </span>
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
