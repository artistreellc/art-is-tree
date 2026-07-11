import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, HardHat, ArrowRight, ShieldAlert, CheckCircle2, Zap, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';

const OSHACaseStudyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Why Safety Isn’t Optional: OSHA, ANSI Z133, and How We Actually Work';
  const description = 'A first-person look at how a licensed, insured Virginia Beach tree service runs OSHA-compliant, ANSI Z133 work — minimum approach distances to power lines, fall protection, PPE, and rigging — and why hiring an uninsured crew puts your property and your liability on the line.';

  return (
    <>
      <LocalSEOMeta pageTitle="Tree Service Safety: OSHA &amp; ANSI Z133 | Art-is-Tree Virginia Beach" description={description} />
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-tall-tree-climb.webp"
        url="/case-studies/osha-compliance"
      />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'OSHA Compliance & Safety', path: '/case-studies/osha-compliance' },
          ]} />
        </div>

        {/* HERO */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] md:min-h-[460px]">
              <img src="/images/virginia-beach-tall-tree-climb.webp" alt="An Art-is-Tree climber working high in a tall tree on rope in Virginia Beach, tied in with fall protection" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Safety & Compliance</Eyebrow>
                <h1 className="font-playfair text-2xl md:text-4xl lg:text-[2.7rem] font-bold text-white leading-tight max-w-2xl">
                  Why Safety Isn’t Optional
                </h1>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Virginia Beach · Hampton Roads</span>
                  <span className="flex items-center gap-1.5"><HardHat className="w-4 h-4 text-[#D4AF37]" /> OSHA · ANSI Z133</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['The reality', 'Tree work is among the most dangerous jobs in America'],
                ['The standard', 'ANSI Z133 — the national safety standard for tree work'],
                ['The regulator', 'OSHA, via the General Duty Clause and 29 CFR 1910.269'],
                ['Biggest killers', 'Falls, struck-by (falling limbs), and electrocution'],
                ['Our practice', 'Fall protection, full PPE, minimum approach distances, rigged loads'],
                ['Your exposure', 'An uninsured injury on your property can land on you'],
              ]} />
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
          <SectionHeading eyebrow="In my own words" title="The stuff you don’t see is what keeps everyone alive" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              I’m Mike, and I own Art-is-Tree. When people watch us work, they see the exciting parts — a climber a hundred feet up, a crane picking a two-ton log clean over a roofline, big pieces of wood flying out to the chipper. What they don’t see is the two hours of planning, the gear checks, the ropes we retired last month, and the dozens of small decisions that happen before anybody ever pulls a saw. That invisible part is the whole job. It’s the difference between a tree service and a guy with a chainsaw and a ladder.
            </p>
            <p>
              I don’t write about safety to brag about it. I write about it because tree work is genuinely dangerous, because most homeowners have no way to tell a professional crew from a reckless one until something goes wrong, and because who you hire can put <em>your</em> property and <em>your</em> liability on the line. So here’s an honest look at how we actually run a job, what the rules are, and why they exist.
            </p>
          </div>
        </section>

        {/* HOW DANGEROUS */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading eyebrow="Let’s be honest about the risk" title="One of the most dangerous jobs in the country" />
                <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    This isn’t me being dramatic. Tree care consistently ranks among the most dangerous occupations in the United States, with a fatality rate many times higher than the all-industry average. The three things that kill tree workers are almost always the same: <strong>falls from height</strong>, <strong>being struck</strong> by a falling limb or log, and <strong>electrocution</strong> from contact with power lines.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup>
                  </p>
                  <p>
                    Every one of those is preventable. A fall is preventable with a properly rigged climbing system and fall protection. A struck-by is preventable with a clear drop zone, controlled rigging, and a ground crew that knows where to stand. An electrocution is preventable by respecting minimum approach distances and never treating a power line as “probably dead.” None of that is luck. It’s training, gear, and discipline, applied the same way on every single job — the easy backyard trim and the storm-snapped pine leaning on a house both.
                  </p>
                  <p>
                    The crews that get people hurt aren’t unlucky. They’re the ones skipping the invisible part — no fall protection, worn-out ropes, no plan for where the wood lands, no idea how close is too close to a line. It costs money and time to do it right, and cutting those corners is exactly how the low bid gets low.
                  </p>
                </div>
              </div>
              <Figure src="/images/virginia-beach-tree-climber-portrait.webp" alt="An Art-is-Tree climber in helmet and safety gear during a Virginia Beach removal" caption="Helmet, eye and hearing protection, saw-rated leg protection — before the first cut" aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </section>

        {/* THE RULES: OSHA + ANSI Z133 */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="Who makes the rules" title="OSHA sets the floor. ANSI Z133 sets the standard." />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Here’s something most people don’t realize: OSHA doesn’t have one single, all-in-one rulebook written just for tree care. What it has is the <strong>General Duty Clause</strong> — the legal requirement that an employer keep the workplace free of recognized hazards that can kill or seriously hurt someone — plus specific standards that apply to our work, like the rules for working near energized power lines under 29 CFR 1910.269.<sup><a href="#src2" className="text-[#1B4D3E] hover:text-[#D4AF37]">2</a></sup> OSHA can and does cite tree companies under those rules when someone gets hurt.
            </p>
            <p>
              The detailed, tree-specific playbook is <strong>ANSI Z133</strong> — the American National Standard for arboricultural operations, published through the Tree Care Industry Association. Z133 is the consensus safety standard our whole industry is measured against. It spells out the minimum approach distances to power lines, the personal protective equipment required, how climbing and rigging systems have to be set up and inspected, and how the work zone gets controlled.<sup><a href="#src3" className="text-[#1B4D3E] hover:text-[#D4AF37]">3</a></sup> When I tell you we work to Z133, I’m telling you we hold ourselves to the same written standard a court or an insurer would use to judge whether a job was done responsibly.
            </p>
            <p>
              We’re a <Link to="/about" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">TCIA member</Link>, we’re licensed, and we carry real liability and workers’ compensation insurance. That last part matters more than most homeowners think, and I’ll come back to why.
            </p>
          </div>
        </section>

        {/* POWER LINES */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="The one that scares me most" title="Power lines don’t give second chances" light />
            <div className="mt-6 space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
              <p>
                Of everything we do, electrical contact is the hazard I respect the most, because it’s the one that offers no warning and no do-over. A limb that looks like it’s clear of a line can conduct if it’s wet. A line that looks dead almost never is. This is why Z133 sets <strong>minimum approach distances</strong> — hard limits on how close an unqualified worker or a conductive tool can get to an energized conductor — and why OSHA’s 1910.269 governs this work directly.<sup><a href="#src2" className="text-[#D4AF37] hover:text-white">2</a></sup>
              </p>
              <p>
                On our jobs, if a tree is inside that danger zone, the answer isn’t “be careful.” The answer is a plan: we keep the required distance, we treat every line as live, and when the work genuinely belongs to the utility, we get the line cleared or de-energized before anyone goes near it. Hampton Roads has a lot of mature trees grown up right into overhead lines, and after every big storm we get calls about limbs down on wires. That’s exactly the situation where an untrained crew gets someone killed — and exactly where the boring discipline of a minimum approach distance saves a life.
              </p>
              <p className="text-gray-300">
                There is no tree worth a life, and no deadline worth cutting that corner. If a job needs the power company involved, it waits for the power company.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE RUN A JOB */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Figure src="/images/virginia-beach-spar-removal-house.webp" alt="A controlled spar removal beside a Virginia Beach house with rigging in place" caption="Tight to the house — every piece rigged and lowered, nothing dropped" aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
            <div>
              <SectionHeading eyebrow="How a safe job actually runs" title="Plan the work, then work the plan" />
              <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Before we cut anything, we walk the property and hold what amounts to a tailgate briefing. Where’s the tree going to be taken apart? Where’s the drop zone? Where are the lines, the house, the fence, the neighbor’s shed, the septic field? Who’s climbing, who’s running the ground, who’s watching the road? Everybody knows the plan before a saw starts, and if the plan needs to change mid-job, we stop and re-set it.
                </p>
                <p>
                  Then the gear. Helmets, eye and hearing protection, and saw-rated leg protection are not optional on my crew. Climbing lines, lanyards, and rigging get inspected, and anything that’s worn or questionable gets retired — rope is cheap, and a person is not. When a piece is too big or too close to something to just cut and drop, we rig it: the climber ties it off, the ground crew controls the line, and the wood comes down under control instead of falling where gravity feels like taking it. When the tree is over a house or a target we can’t risk at all, that’s when we bring in the <Link to="/services/crane-removal" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">crane</Link> and take the weight off before the cut — the same approach you can read about in our <Link to="/case-studies/crane-safety" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">crane removal case study</Link>.
                </p>
                <p>
                  And we climb <Link to="/case-studies/spikeless-pruning" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">spikeless</Link> on anything we’re not removing, because spikes wound a living tree — that’s a health standard, but it comes from the same mindset: do the job the right way even when the shortcut is easier.
                </p>
                <p>
                  None of this is a one-time thing you learn and forget. The gear changes, the standards get updated, and every property throws something new at you — a rotten leader, a hidden line, saturated ground after a nor’easter. So we keep training, we talk through the near-misses, and we treat a routine Tuesday removal in Kempsville with the same seriousness as a crane pick over a rooftop in Great Neck. A safety culture isn’t a poster in the truck. It’s the habit of never assuming, on any job, that the boring precaution is the one you can skip today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IT MEANS FOR YOU / LIABILITY */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="Why this is your problem too" title="Hiring the wrong crew moves the risk onto you" />
            <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                Here’s the part that catches homeowners off guard. When an uninsured worker gets hurt on your property, the injury doesn’t just stay with him. Without workers’ compensation coverage behind that crew, an injured worker can look to the property owner — you — to pay for medical bills and lost wages. And if a poorly judged cut sends a tree through your roof, an uninsured company may have nothing to make you whole with. The “great price” from the truck with no logo and no certificate of insurance can turn into the most expensive tree work of your life.
              </p>
              <p>
                This is the same thread that runs through our <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Virginia tree law</Link> case study: cheap and unaccountable are usually the same company. Asking for proof of liability insurance and workers’ comp isn’t rude — it’s the single best question a homeowner can ask, and any legitimate company will hand you the certificate without blinking.
              </p>
              <p>
                So when you get a quote from us, part of what you’re paying for is the invisible half of the job — the training, the inspected gear, the insurance, and the discipline to do it to standard every time. That’s not overhead. That’s the reason everyone goes home at the end of the day and your property is the same or better than we found it.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {[
                [ShieldAlert, 'Real coverage', 'Licensed, insured, and carrying workers’ comp — so a jobsite injury never becomes your bill.'],
                [Zap, 'Line-aware', 'Minimum approach distances respected on every job; live lines are left to the utility.'],
                [CheckCircle2, 'Done to standard', 'ANSI Z133 practices and full PPE on the easy jobs and the hard ones alike.'],
              ].map(([Icon, h, t]) => (
                <div key={h} className="card-3d bg-white border border-gray-200 border-t-4 border-t-[#D4AF37] rounded-2xl p-6 text-center">
                  <Icon className="w-9 h-9 text-[#D4AF37] mx-auto mb-3" />
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1.5">{h}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>

            {/* sources */}
            <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
              <p className="font-semibold text-gray-700 m-0">Sources</p>
              <p id="src1" className="m-0">1. U.S. Centers for Disease Control and Prevention / NIOSH, <a href="https://www.cdc.gov/niosh/topics/landscaping/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">landscaping and tree-care worker safety</a> — falls, struck-by, and electrocution as leading causes of death in tree work.</p>
              <p id="src2" className="m-0">2. U.S. Occupational Safety and Health Administration (OSHA), <a href="https://www.osha.gov/tree-care" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“Tree Care”</a> — General Duty Clause and 29 CFR 1910.269 (electric power line work).</p>
              <p id="src3" className="m-0">3. Tree Care Industry Association, <a href="https://treecareindustryassociation.org/products/ansi-z133-arboricultural-safety-standards/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">ANSI Z133 Arboricultural Safety Standards.</a></p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <Eyebrow className="mb-3">Hire the crew that does the invisible part right</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">Licensed, insured, and done to standard.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              If you’ve got a tricky tree — near a line, over the house, or storm-damaged — in Virginia Beach or anywhere in Hampton Roads, we’ll come assess it and give you a straight, safe plan. The estimate is free.
            </p>
            <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] text-lg px-8 py-6 rounded-xl font-bold">
              <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/osha-compliance" preferred={['/case-studies/crane-safety', '/case-studies/virginia-tree-law', '/case-studies/property-value']} />
    </>
  );
};

export default OSHACaseStudyPage;
