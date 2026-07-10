import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, TreePine, MapPin, ArrowRight, Anchor, Waves, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';

const CraneCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = "Crane-Assisted Removal of Storm-Damaged Pines";
  const description = "How we safely remove large, declining loblolly pines leaning over a waterfront Virginia Beach home — lifting each section over the roof with a crane, and keeping equipment out of the shoreline buffer.";

  return (
    <>
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-crane-removal-over-house.webp"
        url="/case-studies/crane-safety"
      />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Crane-Assisted Removal', path: '/case-studies/crane-safety' },
          ]} />
        </div>

        {/* ── HERO ── */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[320px] md:min-h-[440px]">
              <img
                src="/images/virginia-beach-crane-removal-over-house.webp"
                alt="Crane lifting a large pine section up and over a house in Virginia Beach"
                className="absolute inset-0 w-full h-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/85 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Crane Removal</Eyebrow>
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
                  {title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Waterfront · Virginia Beach</span>
                  <span className="flex items-center gap-1.5"><TreePine className="w-4 h-4 text-[#D4AF37]" /> Loblolly pines</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['Location', 'Waterfront lot, Virginia Beach'],
                ['The trees', 'Several large, declining loblolly pines'],
                ['The problem', 'Leaning toward the house — no safe fell path'],
                ['Access', 'Tight lot bordering a protected shoreline'],
                ['Method', 'Crane-assisted sectional removal'],
                ['Outcome', 'House & shoreline protected, cleared in one visit'],
              ]} />
            </div>
          </div>
        </header>

        {/* ── THE CHALLENGE ── */}
        <section className="container mx-auto px-4 max-w-4xl pb-16 md:pb-20">
          <SectionHeading eyebrow="The Challenge" title="No safe direction to drop them" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              On a tight waterfront lot in Virginia Beach, several tall loblolly pines had declined to the point that they were leaning toward the house. Years of coastal storms had opened cracks in the trunks and killed off sections of the canopy — the kind of damage that turns a tree into a liability the next time the wind picks up.
            </p>
            <p>
              The problem was that there was nowhere safe to put them. The house sat on one side. On the other was the water and its protected shoreline buffer, where heavy equipment and debris aren't allowed. Mature landscaping filled the space in between. Felling these pines the conventional way — cutting them at the base and dropping them — would have meant gambling the roof, the fence, or the shoreline on where an 80-foot tree decided to fall. That was off the table.
            </p>
          </div>
        </section>

        {/* ── THE APPROACH + DIAGRAM ── */}
        <section className="bg-white border-y border-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <SectionHeading eyebrow="The Approach" title="Take it out from the top, one section at a time" />
                <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                  Instead of dropping the pines, we removed them with a crane. The crane sets up on the street side with its outriggers down, well clear of the shoreline. Then the work is methodical:
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    ['Plan the picks', 'We map each cut before anything runs — where the crane sits, how much each section weighs, and the exact path it will travel.'],
                    ['Rig before the cut', 'A climber slings each section to the crane first. The crane takes the weight so there is no shock load and nothing drops.'],
                    ['Lift up and over', 'Each section is lifted straight up and swung over the house to a clear drop zone — never dragged across the roof or landscaping.'],
                    ['Process away from the water', 'The ground crew limbs and chips everything in the staging area, keeping all debris and machinery out of the shoreline buffer.'],
                  ].map(([h, t]) => (
                    <li key={h} className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed"><strong className="text-[#1B4D3E]">{h}.</strong> {t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:pt-4">
                <Figure
                  src="/images/virginia-beach-crane-lift-over-house.webp"
                  alt="Crane lifting a rigged tree section up and over a house in Virginia Beach"
                  caption="Each section lifted up and over the house to a clear drop zone"
                  aspect="aspect-[3/4]"
                  className="reveal"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── NEAR THE WATER ── */}
        <section className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Figure
              src="/images/virginia-beach-crane-oak-limb-rigging.webp"
              alt="Climber rigging a section to the crane before cutting, Virginia Beach"
              caption="Rigging each section to the crane before the cut"
              aspect="aspect-[4/3]"
            />
            <div>
              <SectionHeading eyebrow="Why It Matters Near the Water" title="Keeping the shoreline buffer untouched" />
              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                Waterfront lots in Virginia Beach often fall under the <Link to="/case-studies/chesapeake-bay-preservation-act" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Chesapeake Bay Preservation Act</Link>, which restricts clearing and heavy equipment inside the shoreline buffer. Lifting the tree out by crane meant we never had to bring machinery near the water or drag debris through it.
              </p>
              <blockquote className="mt-8 border-l-4 border-[#D4AF37] pl-5 py-1">
                <p className="font-playfair text-xl md:text-2xl text-[#1B4D3E] italic leading-snug">
                  “A crane turns a gamble into a controlled lift. You decide exactly where every piece goes.”
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── OUTCOME ── */}
        <section className="bg-[#0A2F24] py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeading eyebrow="The Outcome" title="A clean, controlled removal — in one visit" light align="center" />
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                [Shield, 'No damage', 'The roof, fence, and landscaping came through untouched.'],
                [Waves, 'Buffer protected', 'No equipment or debris ever entered the shoreline buffer.'],
                [Anchor, 'Hazard gone', 'What could have failed in the next storm was removed safely.'],
              ].map(([Icon, h, t]) => (
                <div key={h} className="bg-white/5 border border-white/10 border-t-4 border-t-[#D4AF37] rounded-2xl p-6 text-center">
                  <Icon className="w-9 h-9 text-[#D4AF37] mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">{h}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="container mx-auto px-4 max-w-4xl py-16 md:py-20">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12 text-center">
            <Eyebrow className="mb-3">Have a tree like this?</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-4 mt-0">
              A big tree over the house doesn’t have to be a gamble.
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              If you’ve got a large or leaning tree near your home, fence, or the water, we’ll come look at it and tell you honestly whether it needs a crane. The estimate is free.
            </p>
            <Button asChild size="lg" className="bg-[#1B4D3E] text-white hover:bg-[#143a2f] text-lg px-8 py-6 rounded-xl font-bold">
              <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/crane-safety" />
    </>
  );
};

export default CraneCaseStudy;
