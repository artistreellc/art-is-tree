import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Scale, ArrowRight, Gavel, FileSignature, TriangleAlert, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';

const VirginiaTreeLawCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'The Tree on the Property Line: Virginia Tree Law in Kempsville';
  const description = 'A first-person case study on Virginia tree and timber law — the self-help rule from Fancher v. Fagella, treble-damages liability under Va. Code § 55.1-2836, and how to handle a neighbor tree dispute the right way.';

  return (
    <>
      <LocalSEOMeta pageTitle="Virginia Tree Law &amp; Neighbor Tree Disputes | Art-is-Tree" description={description} />
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-crane-operation-oak.webp"
        url="/case-studies/virginia-tree-law"
      />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Virginia Tree Law', path: '/case-studies/virginia-tree-law' },
          ]} />
        </div>

        {/* HERO */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] md:min-h-[460px]">
              <img src="/images/virginia-beach-crane-operation-oak.webp" alt="A large tree between two homes being removed in a Kempsville, Virginia Beach neighborhood" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Virginia Tree Law</Eyebrow>
                <h1 className="font-playfair text-2xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight max-w-2xl">
                  The Tree on the Property Line
                </h1>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Kempsville · Virginia Beach</span>
                  <span className="flex items-center gap-1.5"><Scale className="w-4 h-4 text-[#D4AF37]" /> Neighbor tree dispute</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['Location', 'Residential neighborhood, Kempsville'],
                ['The dispute', 'A neighbor’s tree overhanging our client’s roof'],
                ['The law', 'Fancher v. Fagella + Va. Code § 55.1-2836'],
                ['The risk', 'Treble (3×) damages for cutting a tree that isn’t yours'],
                ['What we did', 'Written permission + ANSI A300 pruning to the line'],
                ['Outcome', 'A legal, professional job — no lawsuit, no liability'],
              ]} />
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
          <SectionHeading eyebrow="In my own words" title="The call that starts at the fence line" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              I’m Mike, and I own Art-is-Tree. Every few months I get a call that starts the same way: “My neighbor’s tree is over my house and I want it cut.” It sounds simple, and most homeowners expect me to just show up and cut. But this is the one area of tree work where the biggest risk isn’t the tree — it’s the law. Virginia has specific, well-developed rules for trees between neighbors, and the price of getting it wrong is a lot steeper than most homeowners, and a lot of tree companies, realize.
            </p>
            <p>
              I’d rather explain it up front than have you find out the hard way. Here’s a real one from Kempsville — what the situation was, what Virginia law actually says, and why we did it the way we did.
            </p>
          </div>
        </section>

        {/* THE SITUATION */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Figure src="/images/virginia-beach-tall-tree-climb.webp" alt="Arborist working a large tree between homes in a Kempsville neighborhood" caption="A big tree right on the line between two properties" aspect="aspect-[4/3]" className="reveal max-w-md mx-auto lg:mx-0" />
              <div>
                <SectionHeading eyebrow="The situation" title="Two neighbors, one tree, no love lost" />
                <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The job was in a residential neighborhood in Kempsville, between two adjoining property owners who — to put it politely — did not get along. Our client called because his neighbor’s tree had grown unchecked for years, and the big limbs hanging over his roof were no longer something he could ignore. He wanted them gone, and he wanted them gone now.
                  </p>
                  <p>
                    The trunk was on the neighbor’s side of the line. The branches were over my client’s roof. That single fact — whose side the trunk is on — is where Virginia tree law starts, and it changes everything about what a tree company can legally do.
                  </p>
                  <p>
                    I’ve had this exact conversation in a dozen backyards. The homeowner is frustrated, sometimes after years of it, and they’re not wrong to want it handled — big limbs over a roof drop debris, clog gutters, and in a storm they come right through the shingles. But “I have a real problem” and “I can have someone cut my neighbor’s tree” are two very different things in Virginia, and the gap between them is exactly where people get themselves sued.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE LAW */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="The law" title="What Virginia actually allows" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Virginia’s leading case on exactly this is <em>Fancher v. Fagella</em>, decided by the Virginia Supreme Court in 2007.<sup><a href="#s1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup> There, a homeowner’s neighbor let a sweet gum tree grow across the line until it was dropping debris and damaging a retaining wall and underground water lines. As the attorneys at <strong>Tingen &amp; Williams</strong> explain in their overview of Virginia tree law, the court set a clear bar: to actually recover money from a neighbor over an encroaching tree, you have to prove <strong>real, significant property damage</strong> — not just leaves, fruit, or twigs on your lawn — and show that trimming it back yourself isn’t enough to fix the problem.<sup><a href="#s3" className="text-[#1B4D3E] hover:text-[#D4AF37]">3</a></sup>
            </p>
            <p>
              Short of that, your remedy is the <strong>self-help rule</strong>: you’re allowed to trim the branches and roots that cross onto your property, back to the property line, at your own expense. That’s it. You can clear what’s over <em>your</em> yard. What you cannot do is reach past that line and start cutting into the neighbor’s tree, top it, or take it down — no matter how much it’s bothering you.
            </p>
            <p>
              And self-help has limits people don’t expect. You can’t step onto the neighbor’s property to make the cut without permission — that’s its own trespass. You can’t prune so hard that you kill or destabilize the tree; if your “trim” ends up killing a healthy tree rooted on the other side of the line, you can be on the hook for it. Self-help means exactly that: your side, your dime, done carefully.
            </p>
          </div>
        </section>

        {/* TREBLE DAMAGES */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="The part that scares people" title="Cut a tree that isn’t yours, pay three times over" light />
            <div className="mt-6 space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
              <p>
                Here’s the part I make sure every client hears. Virginia’s timber statute — <strong>Va. Code § 55.1-2836</strong> — says that anyone who cuts or removes timber from someone else’s land without permission is liable for <strong>three times the value of the timber</strong>, plus reforestation costs, the cost of figuring out that value, court costs, and reasonable attorney’s fees.<sup><a href="#s2" className="text-[#D4AF37] hover:text-white">2</a></sup> And the burden flips: once the trespass is shown, it’s on the person who did the cutting to prove they acted prudently under a genuine claim of right.<sup><a href="#s2" className="text-[#D4AF37] hover:text-white">2</a></sup>
              </p>
              <p>
                Read that again — <em>treble</em> damages. On a mature, established tree, the “value” isn’t firewood value; it can run into real money, and then you multiply it by three and add attorney’s fees. I’ve seen a “just cut it back” request turn into exactly the kind of dispute that statute was written for. That’s not a risk I’m willing to hand a customer, and it’s not one you want a cut-rate crew handing you.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT MOST WOULD DO vs US */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <SectionHeading eyebrow="Two ways to run this job" title="The cheap way and the right way" align="center" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-3d bg-white border border-gray-200 border-t-4 border-t-red-500/70 rounded-2xl p-6 md:p-7">
              <div className="flex items-center gap-2 mb-3">
                <TriangleAlert className="w-5 h-5 text-red-600" />
                <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] m-0">What most companies would do</h3>
              </div>
              <p className="text-gray-600 leading-relaxed m-0">
                The crew that quoted this before us was ready to show up, set a bucket truck on our client’s side, lean into the neighbor’s tree, and cut every overhanging branch back to the line — no conversation with the neighbor, no permission, no thought about who owns the tree. Fast, cheap, and it hands the homeowner every ounce of the liability.
              </p>
            </div>
            <div className="card-3d bg-white border border-gray-200 border-t-4 border-t-[#D4AF37] rounded-2xl p-6 md:p-7">
              <div className="flex items-center gap-2 mb-3">
                <FileSignature className="w-5 h-5 text-[#1B4D3E]" />
                <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] m-0">What Art-is-Tree did instead</h3>
              </div>
              <p className="text-gray-600 leading-relaxed m-0">
                We do not touch a neighbor’s tree without written permission from the neighbor — full stop. We got that permission in writing first, then did the pruning the right way: <Link to="/services/tree-trimming" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">ANSI A300</Link> crown reduction, every cut at the branch collar, no flush cuts or stubs, and total live-crown removal kept well under the 25% limit so the tree stayed healthy.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE HANDLED IT */}
        <section className="container mx-auto px-4 max-w-4xl pb-14 md:pb-20">
          <SectionHeading eyebrow="How we handled it" title="Permission first, then careful work" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The first thing we did wasn’t cut anything — it was talk to the neighbor. Even when two owners aren’t on great terms, a straightforward conversation about clearing specific limbs off a roof usually lands, because it’s in everyone’s interest to keep the tree healthy and both houses safe. We got the neighbor’s agreement <strong>in writing</strong> before a saw ever came off the truck. That one piece of paper is what turns a lawsuit waiting to happen into a normal job.
            </p>
            <p>
              Then we did the pruning the right way. On a tree like this, sloppy cuts do real long-term damage — topping it or leaving stubs invites decay and throws up weak, whippy regrowth that’s a bigger hazard in five years than what we started with. We reduced the limbs over the roof with proper cuts back to living laterals, made every cut at the branch collar, and kept total live-crown removal well under the 25% ceiling so the tree stayed healthy and stable. Our client got his roof clearance, the neighbor kept a healthy tree, and nobody had a reason to call an attorney.
            </p>
          </div>
        </section>

        {/* OUTCOME + takeaway */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="The takeaway" title="Who’s actually on the hook" />
            <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                The most important thing I can tell you about a neighbor tree dispute is this: <strong>the homeowner who authorizes unauthorized tree work shares the liability — it isn’t just the contractor who swings the saw.</strong> If you hire someone to cut your neighbor’s tree without permission, you can be pulled into that treble-damages claim right alongside them. The person who “just wanted it handled” ends up in the exact lawsuit they were trying to avoid.
              </p>
              <p>
                Handled our way, this job ended quietly — which is the goal. The overhanging limbs came off our client’s roof, the tree stayed healthy, the neighbor had agreed to the work in writing, and nobody ended up in court. That’s what doing it right looks like: less dramatic, a little slower on the front end, and a whole lot cheaper than a lawsuit.
              </p>
              <p>
                So if you’re staring at a neighbor’s limb over your roof, here’s what I tell people: document it, talk to your neighbor first, and get any agreement in writing. If that conversation goes nowhere and the tree is genuinely damaging your property, that’s a matter for an attorney and possibly a court — not for a chainsaw over the fence. A good tree company will tell you where that line is and stay on the right side of it. That honesty is worth more than the fast quote.
              </p>
              <blockquote className="my-8 border-l-4 border-[#D4AF37] pl-5 py-1">
                <p className="font-playfair text-xl md:text-2xl text-[#1B4D3E] italic leading-snug m-0">
                  “On a property-line tree, the cheapest quote is usually the one that comes with a lawsuit attached.”
                </p>
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
              <p className="font-semibold text-gray-700 m-0">Sources</p>
              <p id="s1" className="m-0">1. <em>Fancher v. Fagella</em>, 274 Va. 549, 650 S.E.2d 519 (2007), <a href="https://caselaw.findlaw.com/court/va-supreme-court/1153823.html" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Supreme Court of Virginia.</a></p>
              <p id="s2" className="m-0">2. Code of Virginia, <a href="https://law.lis.virginia.gov/vacode/title55.1/chapter28/section55.1-2836/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">§ 55.1-2836, damages for unlawful timber cutting.</a></p>
              <p id="s3" className="m-0">3. Tingen &amp; Williams, PLLC, <a href="https://tingenwilliams.com/2018/brief-overview-virginia-tree-law/27389/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“A Brief Overview of Virginia Tree Law.”</a></p>
              <p className="italic text-gray-600 pt-2 m-0">This is a general overview from a tree service, not legal advice. Every property line and dispute is different — for your specific situation, consult a licensed Virginia attorney.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl border-t-4 border-[#D4AF37]">
            <Eyebrow className="mb-3">Tree dispute with a neighbor?</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">Let’s do it the way that keeps you out of court.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We’ll tell you honestly what Virginia law allows on your specific situation before any cutting begins — across Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. The assessment is free.
            </p>
            <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] text-lg px-8 py-6 rounded-xl font-bold">
              <Link to="/contact">Get a Free Assessment <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/virginia-tree-law" preferred={['/case-studies/chesapeake-bay-preservation-act', '/case-studies/spikeless-pruning']} />
    </>
  );
};

export default VirginiaTreeLawCaseStudy;
