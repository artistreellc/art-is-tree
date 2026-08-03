import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TreePine, ArrowRight, Bug, ShieldAlert, CheckCircle2, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec, Byline } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps?cid=12599844776703525086';

const EmeraldAshBorerCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'The 200-Year-Old Church Ash: An Emerald Ash Borer Removal in Kempsville';
  const description = 'A first-person account of removing a massive, emerald ash borer–killed ash tree over a church altar and day-school play area in Kempsville, Virginia Beach — a cabled, rotten co-dominant union that needed a crane.';

  return (
    <>
      <LocalSEOMeta pageTitle="Emerald Ash Borer Tree Removal in Virginia Beach | Art-is-Tree" description={description} />
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-church-ash-tree.webp"
        url="/case-studies/emerald-ash-borer"
        datePublished="2026-07-10"
      />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Emerald Ash Borer Removal', path: '/case-studies/emerald-ash-borer' },
          ]} />
        </div>

        {/* HERO */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] md:min-h-[460px]">
              <img src="/images/virginia-beach-church-ash-tree.webp" alt="A large 200-year-old ash tree in a Kempsville church yard, being climbed and rigged for removal" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Emerald Ash Borer</Eyebrow>
                <h1 className="font-playfair text-2xl md:text-4xl lg:text-[2.7rem] font-bold text-white leading-tight max-w-2xl">
                  The 200-Year-Old Church Ash
                </h1>
                <Byline date="2026-07-10" light className="mt-4" />
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Kempsville · Virginia Beach</span>
                  <span className="flex items-center gap-1.5"><Bug className="w-4 h-4 text-[#D4AF37]" /> Emerald ash borer</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['Location', 'Church property, Kempsville, Virginia Beach'],
                ['The tree', 'A ~200-year-old ash, roughly 4 ft across at the union'],
                ['Diagnosis', 'Emerald ash borer — rapid, fatal decline'],
                ['The hazard', 'Rotten co-dominant union held by a steel cable, over an altar, a fence, and the day-school play area'],
                ['Method', 'Crane-assisted removal, rigged before every cut'],
                ['On record', 'Corroborated by owner Melissa Thomas’s 5-star review'],
              ]} />
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
          <SectionHeading eyebrow="In my own words" title="This is one I won’t forget" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              I’ve taken down a lot of trees in my years climbing around Hampton Roads, but the big ash at the church in Kempsville is one that stuck with me. It was close to two hundred years old — older than most of the buildings around it — and by the time the church called us, it was dying fast. The people there loved that tree. Nobody wanted to lose it. But once I walked the property and got a look at what was really going on, there wasn’t a decision to make. That tree had to come down, and it had to come down carefully, because of what was sitting underneath it.
            </p>
            <p>
              Directly below the canopy was an outdoor altar the congregation uses, a fence line, and — this is the part that mattered most to me — the play area for the church’s day school. Kids play under that tree. So this wasn’t just a tree job. It was a hazard sitting over the exact spot you least want a hazard.
            </p>
          </div>
        </section>

        {/* THE SIGNS */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading eyebrow="What the tree was telling us" title="Every telltale sign of emerald ash borer" />
                <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The <strong>emerald ash borer</strong> is a small metallic-green beetle that has quietly wiped out ash trees across the country, and this ash had the whole checklist. The first thing you notice is <strong>canopy dieback</strong> — the top of the tree thins out and whole branches die while the rest is still leafing. Virginia Cooperative Extension calls canopy dieback the first indication of an emerald ash borer problem, and up in that tree it was obvious.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup>
                  </p>
                  <p>
                    From there it was the rest of the signs. Pale patches on the bark where woodpeckers had been stripping it to get at the larvae underneath — arborists call that “blonding.” The D-shaped exit holes, about a quarter inch, where the adult beetles chew their way out. Peel back a piece of dead bark and you find the S-shaped tunnels the larvae carve through the layer that keeps a tree alive.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup> Those tunnels are what kill it — they cut off the tree’s ability to move water and food, and once enough of them ring the trunk, the tree starves from the inside out.
                  </p>
                  <p>
                    That’s why an ash goes downhill so fast. A heavy infestation can kill a mature ash in as little as three years, and emerald ash borer attacks every species of ash we have in Virginia.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup> This one was well past the point where treatment made sense.
                  </p>
                </div>
              </div>
              <Figure src="/images/virginia-beach-church-ash-tree.webp" alt="The full 200-year-old ash tree showing thinning canopy and the large co-dominant union" caption="The ash from the ground — note the thin, dying canopy" aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </section>

        {/* THE UNION / CABLE */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Figure src="/images/virginia-beach-church-ash-crane-rigging.webp" alt="Mike in a blue hard hat rigging the large ash lead to the crane before cutting" caption="Rigging the big lead to the crane before a single cut" aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
            <div>
              <SectionHeading eyebrow="The real danger" title="A rotten union, hanging by a thread" />
              <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  The thing that made this tree dangerous wasn’t just the beetle — it was where the beetle’s damage lined up with an old structural weak point. The ash had a <strong>co-dominant union</strong>, where two massive leads grew up side by side instead of one central trunk. That union was easily four feet around. There was so much decay hollowed out at the crotch that you could literally fit your leg through the gap in the tree.
                </p>
                <p>
                  The only thing holding that whole lead in place was a <strong>steel support cable</strong> someone had installed years earlier — a <Link to="/case-studies/spikeless-pruning" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">cable brace</Link> up in the canopy meant to keep the two leads from splitting apart. That cable was doing exactly its job, and it had probably been doing it for a long time. But the wood it was anchored into was rotting out from the emerald ash borer and age. In my honest opinion, if that cable hadn’t been there, that lead would have come down on its own — on a windy afternoon, in a storm, whenever. It was hanging by a thread.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY A CRANE */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="The plan" title="Why this one had to be a crane job" light />
            <div className="mt-6 space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
              <p>
                Here’s the problem the cable created. That steel cable was the only thing keeping the rotten lead up — but I couldn’t take the lead down without dealing with the cable, and the second you cut a cable that’s under load, whatever it was holding <em>goes</em>. If I’d cut that cable with the lead still attached to the tree, the whole thing would have dropped straight down onto the altar and the fence underneath it. That’s not a risk you take with a congregation’s altar and a children’s play area sitting right there.
              </p>
              <p>
                So we brought in the crane. The crane let us take the weight of that lead <em>before</em> anything got cut — we rigged it, the crane took the load, and only then did we make the cut and relieve the cable. Instead of gambling on where a rotten, two-ton limb would fall, we lifted it straight up and away, over the roofline and out to a clear drop zone where the ground crew could process it. Every piece came off that tree the same way: rig it, let the crane hold it, cut it, fly it out. Nothing was ever dropped.
              </p>
              <p className="text-gray-300">
                This is the same reason the USDA notes that emerald ash borer–infested trees in cities and near buildings are usually removed rather than treated — once they’re this far gone, they’re a danger to people and property.<sup><a href="#src2" className="text-[#D4AF37] hover:text-white">2</a></sup> Removal was the safe call. The crane was how we made it a safe removal.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WENT / OUTCOME + review */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="The day of" title="Careful work, clean finish" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              We took the tree down piece by piece with the crane, keeping every section under control the whole way. The altar never got touched. The fence never got touched. By the end of the day you honestly couldn’t tell we’d run a full crane removal in that yard — everything was cleaned up and hauled off. The next morning we came back, ground the stump down below grade, spread fresh soil, and seeded the bare spot so the grass would come back in.
            </p>
            <p>
              I don’t have to take my own word for how it went, because the property owner wrote it down. Here’s part of Melissa’s review of that exact job:
            </p>
          </div>

          <blockquote className="my-8 bg-white border border-gray-200 card-3d rounded-2xl p-6 md:p-8">
            <div className="flex text-[#D4AF37] mb-3">{'★★★★★'}</div>
            <p className="font-playfair text-lg md:text-xl text-[#1B4D3E] italic leading-snug m-0">
              “Art-is-Tree came out to provide a proposal for pruning many trees around our church property and the removal of a 200-year-old ash tree in our church yard… By the end of the day everything was cleaned up as if they’d never been there, and they returned the next morning to grind down the stump, spread new soil, and seed the area. They were very careful not to damage an altar that sits under the tree canopy.”
            </p>
            <footer className="mt-4 text-sm text-gray-500">
              — Melissa Thomas, verified Google review ·{' '}
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] font-semibold hover:text-[#D4AF37] inline-flex items-center gap-1">read it on Google <ExternalLink className="w-3.5 h-3.5" /></a>
            </footer>
          </blockquote>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {[
              [ShieldAlert, 'Hazard removed', 'A lead that could have failed at any moment is gone — off the altar and the play area for good.'],
              [CheckCircle2, 'Nothing damaged', 'Altar, fence, and landscaping all came through untouched.'],
              [TreePine, 'Ground restored', 'Stump ground out, soil spread, and the area re-seeded the next morning.'],
            ].map(([Icon, h, t]) => (
              <div key={h} className="card-3d bg-white border border-gray-200 border-t-4 border-t-[#D4AF37] rounded-2xl p-6 text-center">
                <Icon className="w-9 h-9 text-[#D4AF37] mx-auto mb-3" />
                <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1.5">{h}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT IT MEANS FOR YOU */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="If you have an ash tree" title="What this means for Virginia Beach homeowners" />
            <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                Emerald ash borer is not a maybe anymore — it’s here, and it has already killed hundreds of millions of ash trees across North America, with billions more at risk.<sup><a href="#src2" className="text-[#1B4D3E] hover:text-[#D4AF37]">2</a></sup> If you have an ash on your property in Virginia Beach, Kempsville, or anywhere in Hampton Roads, it is almost certainly on borrowed time unless it’s being treated. The tricky part is that an ash can look mostly fine one season and be a genuine hazard the next, because the damage is happening inside the trunk where you can’t see it.
              </p>
              <p>
                What I tell people is simple: if you’ve got an ash and you’re seeing dieback in the top, bark blonding, or those little D-shaped holes, get it looked at before it becomes an emergency. Caught early, some ash trees can be treated. Caught late — especially a big one over a house, a driveway, or a play area — it becomes a removal, and often a <Link to="/services/crane-removal" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">crane removal</Link>, because a dead ash gets brittle and unpredictable. We’ll come out, tell you honestly which one you’re looking at, and never charge you for the estimate.
              </p>
            </div>

            {/* sources */}
            <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
              <p className="font-semibold text-gray-700 m-0">Sources</p>
              <p id="src1" className="m-0">1. Virginia Cooperative Extension / Virginia Tech, <a href="https://www.pubs.ext.vt.edu/ENTO/ENTO-76/ENTO-76.html" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“Emerald Ash Borer: Options for Landowners.”</a></p>
              <p id="src2" className="m-0">2. USDA Animal and Plant Health Inspection Service (APHIS), <a href="https://www.aphis.usda.gov/plant-pests-diseases/eab" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“Emerald Ash Borer.”</a></p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <Eyebrow className="mb-3">Worried about an ash tree?</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">Get it looked at before it becomes an emergency.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              If you have an ash showing dieback, blonding, or D-shaped holes in <Link to="/service-areas/virginia-beach" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Virginia Beach</Link> or <Link to="/service-areas" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Hampton Roads</Link>, we’ll come assess it and give you a straight answer on <Link to="/services/tree-removal" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">tree removal</Link>. The estimate is free.
            </p>
            <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] text-lg px-8 py-6 rounded-xl font-bold">
              <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/emerald-ash-borer" preferred={['/case-studies/crane-safety', '/case-studies/spikeless-pruning']} />
    </>
  );
};

export default EmeraldAshBorerCaseStudy;
