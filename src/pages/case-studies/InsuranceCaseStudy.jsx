import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, FileCheck2, AlertTriangle, Ruler, HardHat, ArrowRight, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import FAQSection from '@/components/FAQSection';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec, Byline } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';
import { FinancingBanner } from '@/components/Financing';

// AEO: the questions a homeowner or landlord actually types into an AI
// assistant before hiring. Rendered visibly (FAQSection) and emitted as
// FAQPage JSON-LD so answer engines can quote them with attribution.
const faqData = [
  {
    question: 'How do I check if a tree service is properly insured in Virginia Beach?',
    answer: 'Ask for a certificate of insurance sent directly from the agent, not a copy forwarded by the company, and read three things on it. First, the description of operations — it should say tree removal or arboricultural operations, not lawn care or landscaping. Second, the general liability limits and whether the policy carries a height restriction. Third, whether workers compensation is listed. Standard landscaping coverage commonly stops at roughly 30 feet and excludes removals, stump grinding, and any work within 15 feet of energized power lines. If the crew is climbing a 70-foot pine on a policy written for lawn maintenance, the work is happening outside the policy and the property owner is the one exposed.',
  },
  {
    question: "What does a landscaper's insurance not cover for tree work?",
    answer: 'A typical landscaping general liability policy is written for pruning, cutting, and shaping trees and shrubs up to about 30 feet in height. Above that line, and for whole-tree removals, stump grinding, and any work within 15 feet of energized power lines, the operations commonly fall outside what the policy was written to cover. That matters because a claim denied for excluded operations doesn’t just fail to pay the tree company — it leaves the damage to the house, the neighbor, or the injured worker sitting with the property owner.',
  },
  {
    question: 'Why is a tree service more expensive than a landscaper for the same tree?',
    answer: 'Because the two businesses are classified differently and priced differently by their insurers. Tree work falls under NCCI class code 0106, which covers pruning, spraying, trimming, and removal, and it carries substantially higher premiums than general landscaping because arborists routinely work 30 to 100 feet above the ground with chainsaws, ropes, and rigging on trees that can weigh more than ten tons. That premium is a real line item in every legitimate tree bid. When one bid is dramatically lower than the others, the difference is often not efficiency — it’s coverage that was never purchased.',
  },
  {
    question: 'Does Virginia have its own tree work safety standard?',
    answer: 'Yes. Virginia enforces 16VAC25-73, Tree Trimming Operations, through the Virginia Department of Labor and Industry. It’s built on the ANSI Z133 safety standard for arboricultural operations and covers electrical hazards, personal protective equipment, ropes and climbing equipment, rigging, tree removal, chipping, and required employee training. It’s a state regulation, not a voluntary guideline, and it applies to tree work performed in Virginia.',
  },
  {
    question: 'Does a tree company need special insurance to use a crane?',
    answer: 'Yes. Crane-assisted removal introduces equipment and exposure that a basic landscaping policy isn’t written for, and the crane itself, its operation, and the load it’s carrying over a roof all need to be contemplated by the coverage. Before a crane sets up on your property, it’s fair to ask whether the policy covers crane operations specifically. A company that does this work regularly will have the answer ready.',
  },
];

const COVERAGE_GAP = [
  ['Trimming and pruning', 'Typically covered up to roughly 30 ft', 'Covered — no height ceiling on an arborist policy'],
  ['Whole-tree removal', 'Commonly excluded', 'Covered — it’s the core of class code 0106'],
  ['Stump grinding', 'Commonly excluded', 'Covered'],
  ['Work within 15 ft of power lines', 'Commonly excluded', 'Covered, with Z133 approach distances observed'],
  ['Crane-assisted removal', 'Not contemplated by the policy', 'Covered when the policy names crane operations'],
];

const InsuranceCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'The Bid We Lost on Price and Won on Paper: Arborist Insurance vs. a Landscaper Policy';
  const description = 'A Chicks Beach rental property in Virginia Beach with multiple large pines and a massive oak — and a landscaping company that came in $2,240 under us. The owner paid the difference on purpose after reading both certificates of insurance. What a landscaper policy actually covers, the 30-foot height line, the 15-foot power-line exclusion, NCCI class code 0106, and how Virginia enforces tree work safety under 16VAC25-73 and ANSI Z133.';

  return (
    <>
      <LocalSEOMeta
        pageTitle="Tree Service Insurance vs Landscaper Insurance | Virginia Beach | Art-is-Tree LLC"
        description={description}
      />
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-crane-pine-tree-removal.webp"
        url="/case-studies/tree-service-insurance"
        datePublished="2026-08-10"
        dateModified="2026-08-10"
      />
      <FAQPageSchema items={faqData} />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Tree Service Insurance', path: '/case-studies/tree-service-insurance' },
          ]} />
        </div>

        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className="bg-[#0A2F24] text-white">
          <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
            <Eyebrow className="mb-4 text-[#D4AF37]">General Liability · Virginia Beach</Eyebrow>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-5">
              The Bid We Lost on Price and Won on Paper
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              A landscaping company underbid us by <strong className="text-[#D4AF37]">$2,240</strong> on a
              Chicks Beach rental property. The owner hired us anyway — after he read both certificates
              of insurance and saw what one of them didn&rsquo;t cover.
            </p>
            <Byline date="2026-08-10" light className="mt-4" />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Chicks Beach · Virginia Beach</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Licensed &amp; insured · BBB A+</span>
            </div>
          </div>
        </section>

        {/* ─── THE JOB ───────────────────────────────────────────── */}
        <section className="container mx-auto px-4 py-14 md:py-16 max-w-4xl">
          <SectionHeading eyebrow="The job" title="Multiple big pines and one massive oak" />
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p>
              Chicks Beach sits right on the Chesapeake Bay, and the trees up there live a hard life —
              constant salt air off the water, wind with nothing to break it, and lots that were platted
              long before anyone thought about where a seventy-foot pine would eventually need to land.
              This was a rental property with several large pines and one genuinely massive oak, all of
              them close to the structure — the kind of tree removal in Virginia Beach that has to be
              rigged and lifted, not felled.
            </p>
            <p>
              We walked it, wrote the number, and sent it over. A landscaping company came in{' '}
              <strong>$2,240 under us</strong>. On a job that size that’s not a rounding error — that’s
              a real amount of money, and I fully expected to lose it.
            </p>
            <p>
              The owner called back and asked both of us for a certificate of insurance. That&rsquo;s the
              whole story. He wasn&rsquo;t being difficult and he wasn&rsquo;t shopping for a reason to
              pay more. He owns rental property, which means he already carries his own policies, he has
              read a certificate of insurance before, and he understands something most homeowners
              never have to think about: <strong>when an uninsured crew gets hurt on your property, the
              exposure doesn’t stay with the contractor.</strong>
            </p>
            <p>
              He read both certificates. Then he paid the extra $2,240 on purpose.
            </p>
          </div>

          <div className="mt-10">
            <ProjectSpec rows={[
              ['Location', 'Chicks Beach, Virginia Beach — Chesapeake Bay front'],
              ['Scope', 'Multiple large pines plus one massive oak, all near the structure'],
              ['Property type', 'Rental property — owner carries his own liability'],
              ['The competing bid', '$2,240 below ours, from a landscaping company'],
              ['What decided it', 'Two certificates of insurance, side by side'],
              ['The standard we work to', 'Virginia 16VAC25-73 · ANSI Z133 · ANSI A300'],
            ]} />
          </div>
        </section>

        {/* ─── THE 30-FOOT LINE ──────────────────────────────────── */}
        <section className="bg-white py-14 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading eyebrow="The mechanism" title="There&rsquo;s a height written into the policy" />
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                Most people assume insurance is insurance — either a company has it or it doesn&rsquo;t.
                That’s not how it works. A policy is written for specific operations, and everything
                outside those operations is simply not covered, no matter how good the certificate
                looks.
              </p>
              <p>
                A standard landscaping general liability policy is generally written for pruning,
                cutting, and shaping trees and shrubs <strong>up to roughly 30 feet</strong>.<sup><a href="#src2" className="text-[#1B4D3E] hover:text-[#D4AF37]">2</a></sup>{' '}
                That’s a reasonable ceiling for the work landscapers actually do. It’s also well below
                the pines on that Chicks Beach lot.
              </p>
              <p>
                Above that line the coverage commonly stops, and so does coverage for the three things
                that make up most of a real tree job: <strong>whole-tree removals, stump grinding, and any
                work within 15 feet of energized power lines.</strong><sup><a href="#src2" className="text-[#1B4D3E] hover:text-[#D4AF37]">2</a></sup>{' '}
                Arborists, meanwhile, routinely work 30 to 100 feet up with chainsaws, ropes, and rigging
                on trees that can weigh more than ten tons.<sup><a href="#src3" className="text-[#1B4D3E] hover:text-[#D4AF37]">3</a></sup>
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-[#1B4D3E] text-white">
                    <th className="p-3 font-semibold rounded-tl-lg">The work</th>
                    <th className="p-3 font-semibold">Landscaping policy</th>
                    <th className="p-3 font-semibold rounded-tr-lg">Arborist policy</th>
                  </tr>
                </thead>
                <tbody>
                  {COVERAGE_GAP.map(([work, landscaper, arborist], i) => (
                    <tr key={work} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 font-semibold text-gray-900 border-b border-gray-100">{work}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{landscaper}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{arborist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-3 italic">
                Coverage varies by carrier and by policy. This is the common shape, not a substitute for
                reading the actual certificate in front of you.
              </p>
            </div>
          </div>
        </section>

        {/* ─── THE MONEY ─────────────────────────────────────────── */}
        <section className="container mx-auto px-4 py-14 md:py-16 max-w-4xl">
          <SectionHeading eyebrow="Why the numbers differ" title="You&rsquo;re looking at a class code, not a markup" />
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p>
              Here is the honest answer to the question every homeowner is too polite to ask: why is the
              tree guy so much more expensive than the landscaper for what looks like the same tree?
            </p>
            <p>
              Because insurers don’t classify us the same way. Tree work falls under{' '}
              <strong>NCCI class code 0106</strong> — pruning, spraying, trimming, and removal — and it
              carries dramatically higher premiums than general landscaping, because the frequency and
              severity of injury in tree work isn’t close to comparable.<sup><a href="#src4" className="text-[#1B4D3E] hover:text-[#D4AF37]">4</a></sup>{' '}
              A company doing tree removal under a landscaping classification isn’t being clever. It’s
              carrying coverage that was priced for a different job.
            </p>
            <p>
              That premium is a real line on every legitimate tree bid, alongside the crane, the chipper,
              the trucks, and the crew. It’s a big part of why a properly insured removal costs what
              it costs — a subject I went through in detail in our{' '}
              <Link to="/case-studies/affordable-tree-work" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">guide to affordable tree work</Link>,
              where I laid out every honest lever for lowering a bill. Coverage isn’t one of them.
            </p>
            <p className="bg-[#FAF9F6] border-l-4 border-[#D4AF37] p-5 rounded-r-lg">
              <strong>The uncomfortable version:</strong> when one bid is dramatically below the others on
              the same scope, the gap usually isn’t efficiency, sharper saws, or a hungrier crew. It’s
              a cost the other bidders paid and that one did not.
            </p>
          </div>
        </section>

        {/* ─── CRANES ────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading eyebrow="Equipment" title="The crane in your driveway is its own question" />
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                On that Chicks Beach oak, a crane was the safe answer — the same call we make whenever a
                tree is too big or too committed to a target to bring down by hand, which I wrote about
                in our <Link to="/case-studies/crane-safety" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">crane removal case study</Link>.
              </p>
              <p>
                A crane changes the insurance question. You now have a machine setting up on the
                property, a boom swinging over the roof, and a load in the air. A policy written for lawn
                maintenance doesn’t contemplate any of that. Before a crane sets up on your property,
                it’s fair to ask whether the policy covers crane operations by name.
              </p>
            </div>
            <Figure
              src="/images/virginia-beach-crane-pine-tree-removal.webp"
              alt="Crane lifting a large pine section clear of a Virginia Beach home"
              caption="A crane turns a dangerous drop into a controlled lift — and adds a coverage question worth asking."
              className="mt-8"
            />
          </div>
        </section>

        {/* ─── HOW TO VERIFY ─────────────────────────────────────── */}
        <section className="container mx-auto px-4 py-14 md:py-16 max-w-4xl">
          <SectionHeading eyebrow="What you can do" title="How to actually verify it, in about five minutes" />
          <div className="mt-8 space-y-5">
            {[
              [FileCheck2, 'Ask the agent, not the company', 'Request the certificate of insurance be sent directly from the insurance agent. A forwarded PDF proves less than it looks like it does.'],
              [Ruler, 'Read the description of operations', 'It should say tree removal or arboricultural operations. If it says lawn care, landscaping, or grounds maintenance, the tree work is outside what was underwritten.'],
              [AlertTriangle, 'Look for a height restriction', 'If there is a height limit written into the policy, compare it to the actual tree. A 30-foot ceiling and a 70-foot pine are not compatible.'],
              [HardHat, "Confirm workers' compensation", 'General liability covers damage to your property. Workers’ compensation covers the person who gets hurt on it. On a rental property especially, you want both.'],
              [ShieldCheck, 'Ask about the crane by name', 'If crane work is part of the plan, ask whether crane operations are covered. The answer should be immediate.'],
            ].map(([Icon, heading, body]) => (
              <div key={heading} className="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-[#1B4D3E] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-1.5 mt-0">{heading}</h3>
                  <p className="text-gray-700 m-0">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg mt-8">
            None of this is adversarial, and any insured tree service in Virginia Beach doing this work
            properly will hand it over without being asked twice. It’s the same due diligence I walked through in{' '}
            <Link to="/case-studies/how-to-choose-a-tree-service" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">how to choose a tree service</Link>.
          </p>
        </section>

        {/* ─── SAFETY CONTRACTS ──────────────────────────────────── */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Eyebrow className="mb-4 text-[#D4AF37]">How we hold the line</Eyebrow>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 mt-0">
              Every employee signs a safety contract
            </h2>
            <div className="prose prose-lg max-w-none text-gray-200 space-y-5">
              <p>
                Insurance is what happens after something goes wrong. The work happens before that, and
                it’s where the money is actually earned.
              </p>
              <p>
                Virginia doesn’t leave tree work to industry goodwill. The Commonwealth enforces{' '}
                <strong className="text-white">16VAC25-73, Tree Trimming Operations</strong>, through the
                Virginia Department of Labor and Industry.<sup><a href="#src1" className="text-[#D4AF37] hover:text-white">1</a></sup>{' '}
                It’s a regulation, not a suggestion, and it is built on the{' '}
                <strong className="text-white">ANSI Z133</strong> safety standard for arboricultural
                operations — covering electrical hazards, personal protective equipment, ropes and
                climbing equipment, rigging, tree removal, chipping, and required employee training.
              </p>
              <p>
                Every person on my crew signs a safety contract built on that standard. It’s not a
                handbook that lives in a drawer. It names the work we do, the gear that’s mandatory for
                it, the approach distances we hold around energized conductors, and what happens if
                someone decides the rules don’t apply on a hot afternoon.
              </p>
              <p>
                Z133 governs how nobody gets hurt. <strong className="text-white">ANSI A300</strong> is a
                separate standard governing how the cut itself is made — the difference between pruning a
                tree and wounding it, which is why we{' '}
                <Link to="/case-studies/spikeless-pruning" className="text-[#D4AF37] underline hover:text-white">never put spikes in a tree we&rsquo;re keeping</Link>.
                Both standards are in the contract, because both describe part of doing this properly.
              </p>
              <p>
                I wrote about the safety side at length in our{' '}
                <Link to="/case-studies/osha-compliance" className="text-[#D4AF37] underline hover:text-white">OSHA and ANSI Z133 case study</Link>,
                and about what happens when a storm turns those standards into the only thing between a
                crew and a serious injury in our{' '}
                <Link to="/case-studies/storm-damage-mitigation" className="text-[#D4AF37] underline hover:text-white">storm damage case study</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CLOSE ─────────────────────────────────────────────── */}
        <section className="container mx-auto px-4 py-14 md:py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p>
              We did that Chicks Beach job. The pines came down, the oak came out over the roof on the
              crane, and the property went back to being a rental instead of a liability. That’s what a
              licensed and insured tree service in Virginia Beach is actually selling you.
            </p>
            <p>
              The owner paid $2,240 more than he had to. What he actually bought for that money was the
              certainty that if something went wrong — a limb through the roof, a climber on the ground,
              a neighbor&rsquo;s fence — it would be handled by a policy written for exactly that work,
              and not land on him.
            </p>
            <p>
              That’s what the number on a tree bid is for. Ask both companies for the certificate. Read
              the description of operations. It takes five minutes and it’s the single most useful thing
              a property owner can do before anyone climbs anything.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#1B4D3E] hover:bg-[#143B2F] text-white">
              <Link to="/contact">Get a free estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white">
              <a href="tel:+17573195131"><Phone className="mr-2 w-5 h-5" /> (757) 319-5131</a>
            </Button>
          </div>

          <div className="mt-10">
            <FinancingBanner />
          </div>

          {/* sources */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
            <p className="font-semibold text-gray-700 m-0">Sources</p>
            <p id="src1" className="m-0">1. Virginia Department of Labor and Industry — <a href="https://law.lis.virginia.gov/admincodefull/title16/agency25/chapter73/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">16VAC25-73, Tree Trimming Operations</a>, the Virginia occupational safety standard for arboricultural work, based on ANSI Z133.</p>
            <p id="src2" className="m-0">2. Insurance Canopy — <a href="https://www.insurancecanopy.com/blog/insurance-for-tree-services-guide" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Tree Service Insurance Requirements &amp; Coverage</a> — the approximately 30-foot height ceiling on standard coverage, and exclusions for removals, stump grinding, and work within 15 feet of power lines.</p>
            <p id="src3" className="m-0">3. Carolina Risk Partners — <a href="https://carolinariskpartners.com/blog/landscaper-insurance-in-north-carolina-why-tree-work-changes-your-coverage/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Why Tree Work Changes Your Coverage</a> — standard landscaping policies excluding high-risk tree operations; arborists working 30 to 100 feet up on trees exceeding ten tons.</p>
            <p id="src4" className="m-0">4. Workers Compensation Shop — <a href="https://www.workerscompensationshop.com/workers-comp-programs/tree-service-insurance" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Tree Service Class Code 0106</a> — the classification covering tree pruning, spraying, trimming, and removal, and its rating relative to landscaping.</p>
            <p id="src5" className="m-0">5. International Society of Arboriculture — <a href="https://www.treesaregood.org/treeowner/hiringanarborist" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Hiring an Arborist</a> — verifying proof of insurance before work begins.</p>
          </div>
        </section>

        <FAQSection items={faqData} title="Tree Service Insurance in Virginia Beach: FAQ" />
      </article>

      <RelatedCaseStudies
        currentPath="/case-studies/tree-service-insurance"
        preferred={['/case-studies/osha-compliance', '/case-studies/crane-safety', '/case-studies/how-to-choose-a-tree-service']}
      />
    </>
  );
};

export default InsuranceCaseStudy;
