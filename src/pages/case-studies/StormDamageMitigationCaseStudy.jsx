import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Wind, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2, Eye, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec, Byline } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';

const StormDamageMitigationCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'After the Storm: Hurricane and Tornado Tree Damage in Virginia Beach — and What It Takes to Clean It Up Safely';
  const description = 'A first-person look at storm-damaged tree work in Virginia Beach and Hampton Roads: what to look for before a hurricane, why storm cleanup is so dangerous, and two real jobs — a root-failed tree we rigged by hand with no crane access, and tornado-snapped pines at Broad Bay Island.';

  return (
    <>
      <LocalSEOMeta pageTitle="Storm &amp; Hurricane Tree Damage Cleanup in Virginia Beach | Art-is-Tree LLC" description={description} />
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-storm-pine-on-house.webp"
        url="/case-studies/storm-damage-mitigation"
        datePublished="2026-07-15"
      />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Storm & Hurricane Damage', path: '/case-studies/storm-damage-mitigation' },
          ]} />
        </div>

        {/* HERO */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] md:min-h-[460px]">
              <img src="/images/virginia-beach-storm-pine-on-house.webp" alt="A large pine snapped by a tornado resting against a house in the Broad Bay Island neighborhood of Virginia Beach" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Storm &amp; Hurricane Damage</Eyebrow>
                <h1 className="font-playfair text-2xl md:text-4xl lg:text-[2.7rem] font-bold text-white leading-tight max-w-2xl">
                  After the Storm
                </h1>
                <Byline date="2026-07-15" light className="mt-4" />
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Virginia Beach · Broad Bay Island</span>
                  <span className="flex items-center gap-1.5"><Wind className="w-4 h-4 text-[#D4AF37]" /> Hurricane · Tornado · Nor’easter</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['The region', 'Hampton Roads — hurricanes, nor’easters, and the odd tornado'],
                ['When we’re busiest', 'The 48 hours after a named storm'],
                ['What to watch', 'Lean, root heave, cracks, decay, and hanging limbs'],
                ['The real danger', 'Stored energy — storm wood is under load and unpredictable'],
                ['Featured here', 'A root-failed tree rigged by hand + Broad Bay Island tornado pines'],
                ['Our response', 'Licensed, insured, and ready for storm emergencies'],
              ]} />
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
          <SectionHeading eyebrow="In my own words" title="Storms are when the phone doesn’t stop" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              If you live in Hampton Roads, you already know the routine. Every summer and fall we watch the tropics, and every few years something real comes up the coast — a hurricane, the tail of one, a nor’easter that parks off the coast for three days, or a fast, nasty line of storms that drops a tornado nobody saw coming. We sit on a flat, wet, low-lying coast that the National Weather Service office in Wakefield covers for exactly these events, and our soil holds water, which is a big part of why our trees come down the way they do.<sup><a href="#src4" className="text-[#1B4D3E] hover:text-[#D4AF37]">4</a></sup>
            </p>
            <p>
              When the wind quits, my phone starts. And the work that comes after a storm is not the same job as a planned removal on a calm Tuesday. A storm-damaged tree is already broken, already loaded, already leaning on something it shouldn’t be — and everything about taking it apart safely changes because of that. This is an honest look at what we look for before a storm, what makes the cleanup so dangerous, and two real jobs that show what it actually takes.
            </p>
          </div>
        </section>

        {/* WHAT TO LOOK FOR */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading eyebrow="Before the wind" title="The warning signs a tree is going to fail" />
                <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Most trees that fail in a storm were telling you something first. The International Society of Arboriculture publishes a straightforward list of the things that make a tree hazardous, and after twenty years of climbing them I look for the same handful every time I walk a property.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup>
                  </p>
                  <ul className="space-y-3 list-none pl-0">
                    {[
                      ['A new or worsening lean', 'especially one that started after the last storm, and most of all a lean with cracked or heaving soil on the high side of the root plate.'],
                      ['Soil lifting or cracking around the base', 'that mounding or a gap opening on one side means the roots are already tearing — the tree is partway out of the ground.'],
                      ['Mushrooms or conks at the base', 'fungal fruiting bodies on the root flare or lower trunk are a sign the roots or butt are rotting from the inside.'],
                      ['Cracks, cavities, and included bark', 'vertical cracks, open hollows, and tight V-shaped unions where two stems press together are the places a tree splits apart.'],
                      ['Deadwood and hanging limbs', 'dead branches and “widow-makers” already hung up in the canopy come down first and come down hard.'],
                      ['A thin, dying, or one-sided canopy', 'sparse leaves or dieback up top usually means trouble down in the roots or trunk.'],
                    ].map(([b, t]) => (
                      <li key={b} className="flex gap-3">
                        <Eye className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1.5" />
                        <span><strong className="text-[#1B4D3E]">{b}</strong> — {t}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    None of these guarantee a tree will fall, and none of them are a reason to panic and cut down every tree in the yard — trees are worth <Link to="/case-studies/property-value" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">real money and real shade</Link>. But together they’re how a professional decides what needs attention <em>before</em> a storm turns a warning sign into an emergency.
                  </p>
                </div>
              </div>
              <Figure src="/images/virginia-beach-storm-root-failure.webp" alt="A large beech leaning hard over its own lifted root plate on a Virginia Beach waterfront lot, roots pulled from the ground" caption="Soil heaved, roots lifting — this tree was already halfway out of the ground before we arrived" aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </section>

        {/* PRE-STORM SAFETY PLAN */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="Your best defense" title="A safety plan for your trees, before the season starts" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The cheapest storm damage is the kind that never happens. The Virginia Department of Forestry and every arborist worth hiring say the same thing: the time to deal with a risky tree is on a calm day, not during a warning.<sup><a href="#src3" className="text-[#1B4D3E] hover:text-[#D4AF37]">3</a></sup> Here’s the plan I’d give my own family.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {[
                ['Get the high-risk trees looked at', 'Have anything big near the house, the driveway, or a power line assessed before hurricane season. One honest inspection tells you what to watch and what to act on.'],
                ['Prune out the deadwood and hangers', 'Removing dead limbs and structural weak points ahead of time takes away the first thing the wind throws at your roof.'],
                ['Cable or brace where it makes sense', 'A tight, splitting union on a tree worth keeping can sometimes be supported with a cable or brace rod instead of removed.'],
                ['Remove the ones that are already failing', 'A tree with root rot, a heaving base, or a serious lean over a target isn’t a pruning job — it’s a removal, and it’s cheaper standing than it is on your house.'],
              ].map(([h, t]) => (
                <div key={h} className="bg-white border border-gray-200 border-l-4 border-l-[#D4AF37] rounded-xl p-5">
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1.5">{h}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed m-0">{t}</p>
                </div>
              ))}
            </div>
            <p className="mt-8">
              And keep the boring habits: know where your gutters and drains are, don’t stack firewood or debris against the house, and after any big blow, walk the yard and look up before the kids and the dog go back out. If something’s hung up or leaning, keep everyone clear and call — do not walk under it.
            </p>
          </div>
        </section>

        {/* PROJECT ONE */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading eyebrow="Featured project · 1" title="The tree that came loose from its own roots" light />
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              <div className="space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
                <p>
                  This one, on a waterfront lot here in Virginia Beach, was as close to a trap as trees get. It was a big beech, and the roots underneath it had rotted out and let go almost completely. The tree wasn’t just leaning — it was <strong>disconnected</strong>, sitting in a socket of soft ground, and every time we touched it the whole thing wanted to slide backward into the hole its own root plate had lifted out of. A tree that can move under you is a tree that can kill you.
                </p>
                <p>
                  There was no crane answer here, either. The tree was tucked where a crane simply could not reach it — no setup, no angle, no way to get steel over it. So we built our own.
                </p>
                <p>
                  First we stopped the sliding. We set large pieces of <strong>dunnage</strong> — heavy timber blocking — down into the root hole to build a solid base, so the trunk had something firm to bear against instead of sliding farther back every time the load shifted. With the tree stabilized, we rigged our own lifting system: a series of <strong>span rigging</strong> lines strung between solid anchor trees, working like a highline — our own crane made out of rope and pulleys — so we could pick each piece, take its weight, and move it out over the ground that a machine could never have reached.
                </p>
                <p>
                  From there it was patience. Through bracing and <strong>multiple rigging points</strong>, we kept the trunk stable and secured at every stage while we dissected it piece by piece — each cut planned so the tree never got a chance to run. Nobody worked under an unsupported load, nothing came down until it was tied off and controlled, and the beech came apart in pieces instead of all at once.
                </p>
              </div>
              <div className="space-y-6">
                <Figure src="/images/virginia-beach-hurricane-leaning-beech.webp" alt="Looking up the leaning trunk of a storm-damaged beech with rigging lines set, Virginia Beach" caption="Our own “crane” — span rigging strung between anchor trees where no machine could reach" aspect="aspect-[4/3]" className="reveal" />
                <ProjectSpec rows={[
                  ['The tree', 'A large waterfront beech, roots rotted and disconnected'],
                  ['The hazard', 'Unstable — the whole tree slid backward when loaded'],
                  ['Access', 'Zero crane access — no angle a machine could reach'],
                  ['The base', 'Heavy dunnage cribbed into the root hole to stop the slide'],
                  ['Our “crane”', 'Span (highline) rigging — rope and pulleys between anchor trees'],
                  ['The method', 'Bracing + multiple rigging points, dissected under control'],
                ]} />
              </div>
            </div>
          </div>
        </section>

        {/* COMPLEXITY OF STORM CLEANUP */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="Why you don’t DIY this" title="Storm wood is loaded — and it doesn’t warn you" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Here’s the thing most people don’t understand about a downed or broken tree, and it’s the thing that gets homeowners hurt every hurricane season. A storm-damaged tree is full of <strong>stored energy</strong>. A trunk bent over and pinned has tons of force wound up in it. A limb trapped under another is a loaded spring. A leaning tree half out of the ground is a counterweight waiting to swing. OSHA specifically warns that this stored energy — spring poles, bent limbs, trees under tension — is one of the deadliest parts of storm cleanup, because the moment you make the wrong cut, all that force releases at once, in a direction you didn’t predict.<sup><a href="#src2" className="text-[#1B4D3E] hover:text-[#D4AF37]">2</a></sup>
            </p>
            <p>
              That’s why a storm job is really several dangerous jobs stacked on top of each other. Before any saw runs, we read the load in every piece: what’s in tension, what’s in compression, what’s holding what up, and what moves if we cut here versus there. We relieve that stored energy in a planned order, we rig pieces that would otherwise drop or swing, and we keep people out from under anything that isn’t controlled — the exact same discipline we bring to every job, which I wrote about in our <Link to="/case-studies/osha-compliance" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">safety and OSHA case study</Link>. When a piece is too big or too committed to a target to handle by hand, that’s when the <Link to="/services/crane-removal" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">crane</Link> earns its keep — and when a crane can’t reach, we build the rigging to do it by hand, like we did on the beech above.
            </p>
            <p>
              A chainsaw and a good intention are exactly how people lose fingers, hands, and lives after a storm. There is no part of “a tree is on my house” that a homeowner should be solving alone.
            </p>
          </div>
        </section>

        {/* PROJECT TWO */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading eyebrow="Featured project · 2" title="The Broad Bay Island tornado" />
            <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
              <Figure src="/images/virginia-beach-tornado-snapped-pine.webp" alt="A mature pine snapped clean in half by tornado-force wind with a splintered break, Virginia Beach" caption="Snapped clean in half — the fresh, splintered break shows how violent the wind was" aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  When a tornado tore through the Broad Bay Island neighborhood here in Virginia Beach, it did the kind of damage that reminds you wind is not gentle. This wasn’t trees tipping over. Mature <strong>pines were snapped clean in half</strong>, mid-trunk, and the tops were thrown — one of them a good hundred yards — toward the house.
                </p>
                <p>
                  A snapped pine is a different animal from an uprooted one. The break leaves a jagged, splintered spar still standing, often with the broken top hung up in what’s left or draped across a roof, and every piece of it is under load from the way it fell. On this property it wasn’t one failure, it was several at once — snapped trunks, a top against the house, debris flung across the whole lot.
                </p>
                <p>
                  So we worked it the way you have to work a storm: one hazard at a time, in order. We took the weight off the house first, relieved the tension in the pieces that were loaded, and rigged down the broken spars in controlled sections instead of trusting a splintered trunk to behave. What looks like a pile of firewood to walk up and cut is, up close, a yard full of springs — and clearing it safely is slow, deliberate, planned work.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <Figure src="/images/virginia-beach-tornado-downed-tree.webp" alt="A downed tree and snapped pine across a yard after a tornado in Virginia Beach" caption="One lot, several failures — a storm cleanup is really several dangerous jobs at once" aspect="aspect-[4/3]" className="reveal" />
              <Figure src="/images/virginia-beach-tornado-debris-cleanup.webp" alt="Storm-snapped pine debris scattered across a Virginia Beach lawn during cleanup, with a saw on the ground" caption="Pieces thrown across the lot — every one loaded where it landed" aspect="aspect-[4/3]" className="reveal" />
            </div>
          </div>
        </section>

        {/*
          ========================================================================
          RESERVED — FUTURE STORM PROJECT (Project 3)
          To add another job to this article, copy the "Featured project · 2"
          <section> block above, bump the eyebrow number, drop in the new photos
          (add the .webp files to /public/images and reference them here), and
          write the story. Nothing else needs to change.
          ========================================================================
        */}

        {/* WHAT IT MEANS FOR YOU / CTA */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              [ShieldCheck, 'Licensed & insured', 'Real liability and workers’ comp coverage — so a storm job on your property never becomes your liability.'],
              [AlertTriangle, 'Load-aware rigging', 'We read stored energy and rig loaded wood down under control, by crane or by hand when a crane can’t reach.'],
              [CheckCircle2, 'Whole-yard cleanup', 'From the tree on the house to the last branch on the lawn — we leave it safe and clean, not half-done.'],
            ].map(([Icon, h, t]) => (
              <div key={h} className="card-3d bg-white border border-gray-200 border-t-4 border-t-[#D4AF37] rounded-2xl p-6 text-center">
                <Icon className="w-9 h-9 text-[#D4AF37] mx-auto mb-3" />
                <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1.5">{h}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <Eyebrow className="mb-3">Tree down, or one you’re worried about?</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">Storm-damaged, leaning, or on your house — we’ll handle it.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We cover storm and hurricane tree damage across <Link to="/service-areas/virginia-beach" className="underline decoration-white/40 hover:decoration-white">Virginia Beach</Link> and all of <Link to="/service-areas" className="underline decoration-white/40 hover:decoration-white">Hampton Roads</Link> — licensed, insured, and set up to rig the trees other crews won’t touch. If it’s an active emergency, call us. If it’s a tree you want checked <em>before</em> the next storm, the estimate is free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] text-lg px-8 py-6 rounded-xl font-bold">
                <Link to="/emergency">Storm &amp; Emergency Service <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A2F24] text-lg px-8 py-6 rounded-xl font-bold bg-transparent">
                <a href="tel:+17573195131"><Phone className="mr-2 w-5 h-5" /> (757) 319-5131</a>
              </Button>
            </div>
          </div>

          {/* sources */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
            <p className="font-semibold text-gray-700 m-0">Sources</p>
            <p id="src1" className="m-0">1. International Society of Arboriculture, TreesAreGood — <a href="https://www.treesaregood.org/treeowner/recognizingtreerisk" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Recognizing Tree Risk</a> and <a href="https://www.treesaregood.org/treeowner/stormdamagedtrees" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Storm-Damaged Trees</a>.</p>
            <p id="src2" className="m-0">2. U.S. Occupational Safety and Health Administration (OSHA), <a href="https://www.osha.gov/tree-care" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Tree Care</a> and tree/storm cleanup hazards — stored energy, spring poles, and loads under tension.</p>
            <p id="src3" className="m-0">3. Virginia Department of Forestry — <a href="https://dof.virginia.gov/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">tree care and storm preparation guidance</a>.</p>
            <p id="src4" className="m-0">4. NOAA / National Weather Service, Wakefield VA (AKQ) — <a href="https://www.weather.gov/akq/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">severe weather for Hampton Roads</a> (tropical systems and tornadoes).</p>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/storm-damage-mitigation" preferred={['/case-studies/crane-safety', '/case-studies/osha-compliance', '/case-studies/emerald-ash-borer']} />
    </>
  );
};

export default StormDamageMitigationCaseStudy;
