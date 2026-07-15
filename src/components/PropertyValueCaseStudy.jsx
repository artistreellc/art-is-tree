import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, ArrowRight, DollarSign, Sun, Home, Scissors } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec, Byline } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';

const PropertyValueCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'The Listing That Sold in a Week: Tree Care and Property Value in Virginia Beach';
  const description = 'A first-person account of prepping an overgrown Virginia Beach property for sale — crown lifting, thinning, and deadwooding to restore curb appeal — and the research on how professional tree care raises property value.';

  return (
    <>
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-large-tree-over-house.webp"
        url="/case-studies/property-value"
        datePublished="2026-07-07"
      />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Property Value Enhancement', path: '/case-studies/property-value' },
          ]} />
        </div>

        {/* HERO */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] md:min-h-[460px]">
              <img src="/images/virginia-beach-large-tree-over-house.webp" alt="A large, well-shaped tree framing a Virginia Beach home after professional canopy work" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Property Value</Eyebrow>
                <h1 className="font-playfair text-2xl md:text-4xl lg:text-[2.7rem] font-bold text-white leading-tight max-w-2xl">
                  The Listing That Sold in a Week
                </h1>
                <Byline date="2026-07-07" light className="mt-4" />
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Virginia Beach · Hampton Roads</span>
                  <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-[#D4AF37]" /> Curb appeal & ROI</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['The property', 'A dated-looking home about to hit the market'],
                ['The problem', 'Overgrown, gloomy front yard killing curb appeal'],
                ['The work', 'Crown lifting, crown thinning, deadwooding, two removals'],
                ['The goal', 'Sell the trees as an asset, not a buyer’s future expense'],
                ['The research', 'Mature trees can add roughly 10% to a home’s value'],
                ['The result', 'Multiple offers in the first week, over asking'],
              ]} />
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
          <SectionHeading eyebrow="In my own words" title="Trees can sell a house — or scare buyers off" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              I’m Mike, and I own Art-is-Tree. Most of the calls we get are about a problem — a dead tree, a storm-cracked limb, something leaning on a house. But every so often we get a different kind of call: a homeowner or their realtor getting a property ready to list, who has figured out that the trees out front are either going to help sell the place or quietly cost them money. This is a story about one of those, and about what I’ve learned in the years since about how much trees actually move the needle on what a home is worth.
            </p>
            <p>
              The house was in a nice older Virginia Beach neighborhood — good bones, good street, the kind of place that should show well. The trouble was the front yard. Nobody had touched the trees in probably fifteen years, and instead of framing the house they were swallowing it.
            </p>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading eyebrow="What we walked up to" title="Overgrown, dark, and reading as ‘expensive’" />
                <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    You couldn’t really see the front of the house from the street. Low limbs hung down over the walkway and across the face of the home, so the architecture — nice brickwork, a good roofline — was hidden behind a wall of leaves. The canopy was so dense that almost no light reached the lawn underneath, and the grass had given up: bare, patchy dirt where there should have been a green front yard.
                  </p>
                  <p>
                    There was dead wood hanging in the crowns, too — the kind of stark gray deadwood a buyer notices from the driveway. And that’s the real problem. When a buyer pulls up to a house like that, they don’t think “beautiful mature trees.” They think “that’s going to be a huge bill the day I move in.” The realtor told me flat out that the trees were dragging down every showing. An overgrown, gloomy exterior reads as deferred maintenance, and deferred maintenance comes straight off the offer.
                  </p>
                  <p>
                    So the job wasn’t removal. Almost none of it was. The job was to take a set of good trees that had gone feral and turn them back into what they were supposed to be — the thing that makes the house look cared-for and inviting.
                  </p>
                </div>
              </div>
              <Figure src="/images/virginia-beach-tall-tree-climb.webp" alt="An Art-is-Tree climber up in the canopy performing selective crown thinning in Virginia Beach" caption="Refining the canopy by hand — selective, spikeless, no topping" aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </section>

        {/* THE WORK */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="What we actually did" title="Refining trees, not removing them" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              We treated the trees as architectural elements to be refined, not debris to be hauled off. There were four moves, and they’re the same four I’d recommend on most curb-appeal jobs:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {[
              [Home, 'Crown lifting', 'We took the lowest limbs off to open up the sightline from the street to the front of the house. That one change instantly made the property look bigger, brighter, and more welcoming.'],
              [Sun, 'Crown thinning', 'By selectively removing crossing and interior branches, we let real light down to the lawn again — so the grass could start recovering before the open house.'],
              [Scissors, 'Deadwooding', 'Clearing the dead gray limbs out of the canopy erased the number-one visual cue that tells a buyer “this place has been neglected.”'],
              [DollarSign, 'Two selective removals', 'Two structurally compromised trees crowding the driveway came out — cleaning up the approach and removing a genuine liability at the same time.'],
            ].map(([Icon, h, t]) => (
              <div key={h} className="card-3d bg-white border border-gray-200 border-t-4 border-t-[#D4AF37] rounded-2xl p-6">
                <Icon className="w-9 h-9 text-[#D4AF37] mb-3" />
                <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1.5">{h}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Every cut on the trees we kept followed <Link to="/case-studies/spikeless-pruning" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">proper pruning standards</Link> — clean cuts at the branch collar, no topping, no more than about a quarter of the live crown removed at once, and no spikes on a living tree. That matters here for a reason people don’t expect: sloppy pruning creates its own problems down the road, and topping a tree actually <em>lowers</em> value because it permanently disfigures it and invites decay. You can’t restore curb appeal by butchering the trees. You do it by pruning them correctly and letting them look like healthy, well-kept trees.
            </p>
          </div>
        </section>

        {/* THE RESEARCH / VALUE */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="Why this pays for itself" title="What the research actually says about trees and value" light />
            <div className="mt-6 space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
              <p>
                This isn’t just my opinion as a guy who loves trees. The research is pretty consistent: healthy, mature, well-placed trees add real, measurable value to a home. The U.S. Forest Service and arboriculture groups have long put the figure at roughly <strong>ten percent</strong> of a property’s value for good tree cover — and studies of mature trees and thoughtful landscaping have found premiums that can run higher than that on the right property.<sup><a href="#src1" className="text-[#D4AF37] hover:text-white">1</a></sup>
              </p>
              <p>
                Individual trees carry appraised value, too. The Council of Tree and Landscape Appraisers publishes the industry’s standard method for putting a dollar figure on a tree, and a single large, healthy, well-located tree can be appraised in the thousands of dollars.<sup><a href="#src2" className="text-[#D4AF37] hover:text-white">2</a></sup> That’s the flip side of a removal: a mature tree is an asset with a number attached, which is exactly why we don’t take one down unless it needs to come down.
              </p>
              <p>
                There’s a Hampton Roads wrinkle worth adding, too. Buyers here are storm-aware — they know what a nor’easter or a hurricane can do to a big tree over a roof. So a tree that reads as neglected doesn’t just look bad; it reads as a <em>risk</em>, and risk gets priced in. A tree that’s been properly deadwooded and thinned reads as the opposite: safe, maintained, one less thing to worry about after closing. In a coastal market, healthy structure isn’t only prettier, it’s reassuring, and reassurance is worth money on offer day.
              </p>
              <p className="text-gray-300">
                The point for a seller is simple. Spending a few thousand dollars to make your trees an asset instead of a liability is one of the highest-return moves you can make before a listing — right up there with paint and landscaping, and often cheaper than either.
              </p>
            </div>
          </div>
        </section>

        {/* THE RESULT */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Figure src="/images/virginia-beach-tree-debris-grapple-truck.webp" alt="Art-is-Tree cleaning up and hauling debris from a Virginia Beach property with a grapple truck" caption="Full cleanup and haul-off — the yard was show-ready the same day" aspect="aspect-[4/3]" className="reveal" />
            <div>
              <SectionHeading eyebrow="How it turned out" title="Multiple offers in the first week" />
              <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  The difference was night and day. With the canopy lifted and the deadwood gone, the whole front of the house was suddenly bathed in light. You could finally see the brickwork and the lawn, and the trees framed the home instead of hiding it. We cleaned up completely and hauled everything off, so the yard was show-ready the same day we finished.
                </p>
                <p>
                  When it listed, the trees were working for the seller instead of against them. The home drew multiple offers in the first week and sold above the initial asking price. I can’t take credit for the whole sale — a lot goes into a good listing — but the realtor was clear that fixing the trees changed how the property showed from the very first photo.
                </p>
                <p>
                  That’s the whole lesson: professional tree care isn’t a maintenance cost you grudgingly pay. On a home you’re about to sell, it’s a direct investment in your equity — and unlike a lot of pre-listing spending, it’s one buyers can literally see from the curb before they ever walk in the door.
                </p>
              </div>
            </div>
          </div>

          {/* ROI callout */}
          <div className="mt-12 bg-white border border-gray-200 card-3d border-t-4 border-t-[#D4AF37] rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-[#1B4D3E] font-bold text-sm uppercase tracking-wider mb-4">
              <TrendingUp className="w-5 h-5 text-[#D4AF37]" /> Representative ROI
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#F4F1E8] rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-gray-500 m-0">Tree care investment</p>
                <p className="font-playfair text-3xl font-bold text-[#1B4D3E] mt-1 mb-0">~$3,200</p>
              </div>
              <div className="bg-[#F4F1E8] rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-gray-500 m-0">Value / curb-appeal lift</p>
                <p className="font-playfair text-3xl font-bold text-[#1B4D3E] mt-1 mb-0">up to ~10%</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 mb-0 text-center">Representative figures for a single property; actual results vary by home, market, and tree condition.</p>
          </div>
        </section>

        {/* WHAT IT MEANS + sources */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="If you’re thinking of selling" title="What this means for Virginia Beach homeowners" />
            <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                If you’re getting a home ready to list anywhere in Virginia Beach or Hampton Roads, look at your trees the way a buyer will. Are they framing the house or hiding it? Is there dead wood in the crowns? Is the front yard dark and patchy because nothing gets light? Those are all fixable, usually with pruning rather than removal, and usually for a fraction of what buyers would knock off the price to deal with it themselves.
              </p>
              <p>
                One caution: timing and technique matter. The move that raises value is skilled, standards-based pruning — not hacking the trees back or, worse, topping them, which permanently disfigures a tree and actually lowers what it’s worth. Done right, a curb-appeal prune is usually a single visit a few weeks before photos and showings, with a full cleanup so the yard is camera-ready. Done wrong, it can set you back further than doing nothing. That’s the difference between hiring an arborist and hiring whoever has a chainsaw in the truck.
              </p>
              <p>
                And even if you’re not selling — well-maintained trees are quietly adding to your home’s value every year you own it. Keeping them healthy with <Link to="/services/tree-trimming" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">routine pruning</Link> protects an asset that’s genuinely worth thousands of dollars. We’ll walk your property, tell you honestly what would move the needle before a sale and what to leave alone, and the estimate is always free.
              </p>
            </div>

            {/* sources */}
            <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
              <p className="font-semibold text-gray-700 m-0">Sources</p>
              <p id="src1" className="m-0">1. International Society of Arboriculture, <a href="https://www.treesaregood.org/treeowner/benefitsoftrees" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“Benefits of Trees”</a> (citing U.S. Forest Service research that healthy, mature trees add roughly 10% to residential property value).</p>
              <p id="src2" className="m-0">2. Council of Tree and Landscape Appraisers, <a href="https://www.isa-arbor.com/Store/Product?ProductID=115" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Guide for Plant Appraisal</a> — the standard method for appraising the monetary value of individual trees.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <Eyebrow className="mb-3">Preparing to sell your home?</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">Turn your trees into an asset before you list.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Don’t let overgrown trees quietly cost you money at the closing table. We’ll refine your canopy, restore the curb appeal, and clean up completely — anywhere in Virginia Beach and Hampton Roads. Free estimate.
            </p>
            <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] text-lg px-8 py-6 rounded-xl font-bold">
              <Link to="/contact">Maximize Your Property Value <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/property-value" preferred={['/case-studies/spikeless-pruning', '/case-studies/emerald-ash-borer', '/case-studies/osha-compliance']} />
    </>
  );
};

export default PropertyValueCaseStudy;
