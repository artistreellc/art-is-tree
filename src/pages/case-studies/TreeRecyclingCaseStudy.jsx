import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Recycle, Factory, Flame, Newspaper, Truck, Sprout, TreePine, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import AnswerBlock from '@/components/AnswerBlock';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Eyebrow, SectionHeading, Figure, ProjectSpec, Byline } from '@/components/design/Primitives';
import { Button } from '@/components/ui/button';

// Schema FAQ items mirror the visible question H2s + their answers below.
const FAQ_ITEMS = [
  {
    question: 'What happens to a tree after it is removed?',
    answer: "Almost none of it is wasted. The wood and brush get chipped for biomass fuel or mulch, the straight logs go to a paper mill as pulpwood, and the bigger chunks are cut into firewood. In Hampton Roads that wood feeds mills in West Point and Franklin and Dominion's biomass power station in Southampton County. The only part that can't be recycled is the stump grindings, because they're a mix of wood and dirt.",
  },
  {
    question: 'Is my removed tree worth money as lumber?',
    answer: "Almost never. People think a big yard tree is a gold mine, but virtually no residential tree makes good lumber. Yard trees are full of embedded metal — nails, fence staples, old clothesline hooks — that destroys a sawmill blade, plus knots, cavities, and cracks from growing in the open. A sawmill won't touch them. Your tree has real value as pulpwood, biomass, mulch, and firewood — just not as boards.",
  },
  {
    question: 'What is the difference between a logger and an arborist?',
    answer: "A logger harvests volume out of the woods and hauls it to a mill by the ton — it's a forestry and hauling business. An arborist removes individual trees safely from around your house, wires, and driveway, then processes the wood. Same species of tree, completely different jobs, equipment, and skill sets. We're arborists; we send the wood into the logger's supply chain.",
  },
  {
    question: 'Can stump grindings be used as mulch or compost?',
    answer: "Stump grindings are the one product that can't be cleanly recycled, because grinding mixes the wood with soil and rocks. But if it's from the right hardwood, that mix breaks down into decent compost and garden soil over time. Pine and other softwoods turn acidic as they break down and rob nitrogen while they're fresh, so keep pine grindings away from the vegetable beds.",
  },
  {
    question: 'Where does the wood from Hampton Roads tree removals go?',
    answer: "Regional pulpwood and chips feed the Smurfit WestRock containerboard mill in West Point, the International Paper fluff-pulp mill in Franklin, and Dominion Energy's Southampton biomass power station, which burns waste wood to make electricity. Mulch and firewood stay local. It's a real, working market that runs out of the woods around Virginia Beach every day.",
  },
];

const TreeRecyclingCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Where Your Tree Goes After We Take It Down: The Hampton Roads Wood Chain';
  const description = 'What really happens to your tree after removal in Hampton Roads — chips to biomass power and mulch, logs to the West Point and Franklin paper mills, firewood, and why your yard tree is not a lumber gold mine.';

  return (
    <>
      <LocalSEOMeta
        pageTitle="Where Your Tree Goes After Removal | VA Wood Recycling"
        description="What happens to your tree after removal in Hampton Roads: chips to biomass power and mulch, pulpwood to the West Point & Franklin mills, firewood — and why a yard tree isn't a lumber gold mine."
      />
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-grapple-truck-street.webp"
        url="/case-studies/where-your-tree-goes"
        datePublished="2026-07-31"
        dateModified="2026-07-31"
      />
      <FAQPageSchema items={FAQ_ITEMS} />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Where Your Tree Goes', path: '/case-studies/where-your-tree-goes' },
          ]} />
        </div>

        {/* HERO */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] md:min-h-[460px]">
              <img src="/images/virginia-beach-grapple-truck-street.webp" alt="A grapple truck loading logs and wood from a tree removal on a Virginia Beach street" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Where the Wood Goes</Eyebrow>
                <h1 className="font-playfair text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight max-w-2xl">
                  Where Your Tree Goes After We Take It Down
                </h1>
                <p className="text-white/90 font-inter text-base md:text-lg mt-3 max-w-xl">Chips, pulp, power, and firewood — the wood chain that runs out of Hampton Roads, and the one thing that can’t be recycled.</p>
                <Byline date="2026-07-31" light className="mt-4" />
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> West Point · Franklin · Southampton</span>
                  <span className="flex items-center gap-1.5"><Recycle className="w-4 h-4 text-[#D4AF37]" /> Almost nothing wasted</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['The question', 'What happens to my tree after it’s gone?'],
                ['The short answer', 'It gets chipped, pulped, burned for power, or split for firewood'],
                ['The myth', 'A big yard tree is a lumber “gold mine” — it almost never is'],
                ['Where it goes', 'Mills in West Point & Franklin; a biomass power station in Southampton'],
                ['The one exception', 'Stump grindings — wood mixed with dirt, can’t be recycled clean'],
                ['Who does what', 'Loggers haul by the ton; arborists remove by the tree'],
              ]} />
            </div>
          </div>
        </header>

        {/* QUICK ANSWER — AEO featured-snippet block */}
        <AnswerBlock>
          When we take a tree out of your yard, almost none of it goes to waste. The brush and smaller wood get <strong>chipped</strong> — some of those chips get burned for electricity at a biomass power station, the rest become <strong>mulch</strong>. The straight trunks go to a paper mill as <strong>pulpwood</strong>. The big solid chunks get cut into <strong>firewood</strong>. The only thing that can’t be recycled clean is the <strong>stump grindings</strong>, because grinding mixes the wood with dirt. What your tree almost never becomes is <strong>lumber</strong> — and that surprises people every time.
        </AnswerBlock>

        {/* THE GOLD MINE MYTH */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Let’s kill this one first" title="“I’ve got a gold mine in my backyard,” right?" />
              <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  It happens on a lot of estimates. Somebody looks up at a 90-foot oak or a fat old pine and figures the wood in it must be worth a fortune — that I should be paying <em>them</em> for the lumber. I get it. It’s a huge tree. But here’s the honest truth of my trade: <strong>virtually no residential tree makes good lumber.</strong>
                </p>
                <p>
                  A sawmill wants a clean, straight log grown in a forest, where the tree stretched up for light and self-pruned its lower limbs. Your yard tree grew in the open. It’s full of <strong>knots, cavities, twists, and cracks</strong> from spreading out instead of up.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup>
                </p>
                <p>
                  And then there’s the killer: <strong>metal.</strong> Yard trees are full of it — nails, fence staples, old clothesline hooks, a treehouse lag bolt somebody sank in 1985, even grown-over barbed wire. The first few feet off the ground are the worst.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup> One hidden nail can destroy a sawmill blade or a veneer knife in a heartbeat, so most mills won’t even risk a yard tree. Add in the small volume from one or two trees and the cost of hauling it, and the “gold mine” is a liability, not a payday.
                </p>
                <p>
                  Your tree still has real value — just not as boards. It’s worth something as <strong>pulpwood, biomass, mulch, and firewood.</strong> That’s the chain I’m going to walk you through.
                </p>
              </div>
            </div>
            <Figure src="/images/virginia-beach-pine-log-cross-section.webp" alt="Cross-section of a felled pine log from a Virginia Beach tree removal showing the grain and knots" caption="Grown in the open, full of knots and hidden metal — real value, but not as lumber" aspect="aspect-[4/3]" className="reveal" />
          </div>
        </section>

        {/* THE WOOD CHAIN */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="One tree, four destinations" title="So where does it actually go?" />
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">Every tree we take down gets sorted on the spot. Different parts of the same tree head down completely different roads:</p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {[
                [Flame, 'Chips → biomass power', 'The brush and smaller wood run through the chipper. A share of those chips gets trucked to a wood-fired power station and burned in the boilers to make electricity. It’s literally your tree keeping the lights on.'],
                [Sprout, 'Chips → mulch', 'The rest of the chips become mulch — the same stuff you buy by the bag, made from clean wood that holds moisture and knocks down weeds around beds and trees.'],
                [Newspaper, 'Logs → pulpwood', 'The straight trunks get graded as pulpwood and sent to a paper mill, where they’re cooked down to fiber for cardboard, kraft paper, and even the fluff pulp in diapers and paper towels.'],
                [TreePine, 'Chunks → firewood', 'The big, solid, knotty pieces that aren’t worth hauling to a mill get bucked into firewood lengths — split, seasoned, and burned. Nothing fancy, but nothing wasted.'],
              ].map(([Icon, h, t]) => (
                <div key={h} className="bg-[#FAF9F6] border border-gray-200 rounded-2xl p-6">
                  <Icon className="w-8 h-8 text-[#1B4D3E] mb-3" />
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1.5 mt-0">{h}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed m-0">{t}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                The word that ties it together is <strong>pulpwood.</strong> In the timber world there are basically three grades: a <strong>sawlog</strong> (clean and straight, becomes lumber), <strong>pulpwood</strong> (smaller, crooked, or knotty wood that gets chipped and cooked into paper fiber), and <strong>chips or biomass</strong> (everything else — fuel). Almost everything that comes out of a yard is pulpwood-grade or lower. That’s not an insult to your tree; it’s just what open-grown wood is good for, and there’s a whole industry built to use it.
              </p>
            </div>
          </div>
        </section>

        {/* THE MILLS AND THE MARKET */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="The mills our wood feeds" title="The market, the mills, and the loggers who run it" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Southeastern Virginia is paper-mill country, and that’s not an accident — the region is blanketed in fast-growing Southern pine, which is exactly what these mills want.<sup><a href="#src2" className="text-[#1B4D3E] hover:text-[#D4AF37]">2</a></sup> A few big buyers anchor the whole market that our wood flows into:
            </p>
          </div>
          <div className="mt-8 space-y-4">
            {[
              [Factory, 'West Point — Smurfit WestRock', 'A big containerboard mill on the York River. It cooks pulpwood and sawmill chips into the brown kraft board that becomes corrugated boxes. Mills like this buy fiber as a mix of roundwood (whole logs) and chips — one WestRock Virginia mill reports buying roughly half its fiber as pulpwood and half as chips.', '3'],
              [Newspaper, 'Franklin — International Paper', 'The old Franklin paper mill was the heart of that town until it closed in 2010 and cost more than a thousand jobs. It reopened as a fluff-pulp mill — the soft absorbent fiber inside diapers, wipes, and feminine products — running on the Southern pine that grows all around it.', '4'],
              [Flame, 'Southampton — Dominion biomass power station', 'Dominion converted its old Southampton coal plant to burn waste wood back in 2013. It runs on the chips and scraps left over from timbering, makes about 51 megawatts of electricity, and the three converted stations burn close to 600,000 tons of wood biomass a year — supporting a hundred-plus local logging and trucking jobs.', '5'],
            ].map(([Icon, h, t, ref]) => (
              <div key={h} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0A2F24] text-[#D4AF37] flex items-center justify-center"><Icon className="w-6 h-6" /></span>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1.5 mt-0">{h}</h3>
                  <p className="text-gray-600 leading-relaxed m-0">{t}<sup><a href={`#src${ref}`} className="text-[#1B4D3E] hover:text-[#D4AF37]">{ref}</a></sup></p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              This is a <strong>commodity market</strong>, and it moves. The price a mill pays per ton of pulpwood swings with demand, the weather, and how many loggers are cutting that month — and a wet winter that bogs down the woods can spike prices as fast as a mill slowdown can crater them. The loggers I offload to don’t romanticize any of it. The way they put it to me: <em>it’s tonnage and diesel.</em> They live and die by the price the mill is posting that week and how far they’ve got to haul to hit it. When pulp prices are down, that “worthless” yard wood I’m handing off is barely worth the fuel to move — and when they’re up, everybody’s cutting.
            </p>
          </div>
        </section>

        {/* LOGGING VS ARBORICULTURE */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="Same trees, different worlds" title="Logging vs. arboriculture — what’s the difference?" light />
            <div className="mt-6 space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
              <p>
                People mix these up all the time, so let me draw the line clearly. A <strong>logger</strong> is in the volume business. He’s out in the woods dropping acres of timber, hauling it to the mill by the ton, and his whole world is efficiency and price-per-ton. He doesn’t need to worry about a swing set under the tree or a service drop three feet off the top, because there’s nothing out there but more trees.
              </p>
              <p>
                An <strong>arborist</strong> — that’s us — is in the exact opposite business. We take down <em>one</em> tree at a time, and it’s usually surrounded by the most expensive things you own: your house, your neighbor’s house, the power lines, the fence, the car. We climb it or crane it out in controlled pieces so nothing below it gets touched. It’s slow, technical, rigging-and-safety work governed by its own standards.
              </p>
              <p>
                Both jobs end with a log on the ground — but one is forestry and the other is closer to surgery. We’re arborists. Once we’ve gotten your tree down safely, <strong>we’re the front door of the logger’s supply chain</strong> — the wood we hand off is the same wood that feeds those mills. If you want the deeper version of why the safe-removal side is a licensed, insured, standards-driven trade, that’s in our <Link to="/case-studies/osha-compliance" className="underline decoration-white/40 hover:decoration-white">OSHA &amp; safety write-up</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* STUMP GRINDINGS — THE EXCEPTION */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Figure src="/images/virginia-beach-stump-grinding-cleanup.webp" alt="A ground stump and pile of stump grindings after a tree removal in Virginia Beach" caption="Stump grindings — wood and dirt mixed together, the one thing that can’t be recycled clean" aspect="aspect-[4/3]" className="reveal order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow="The one thing that can’t be recycled" title="Stump grindings — and why pine is a problem" />
              <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Everything I’ve described so far — chips, pulpwood, firewood — is clean wood that has a home. There’s exactly one product from a removal that <strong>can’t</strong> go into that chain: the <strong>stump grindings.</strong>
                </p>
                <p>
                  When we grind a stump, the teeth are chewing wood <em>and</em> soil at the same time, so what’s left is a pile of chips mixed with dirt, grit, and rocks. No mill wants that — the dirt is death on their equipment — and it doesn’t make good bagged mulch either. So it stays on site or gets hauled off as fill.
                </p>
                <p>
                  Here’s the useful part, though: if the stump was the <strong>right hardwood</strong>, that wood-and-soil mix actually breaks down into pretty good <strong>compost and garden soil</strong> over a season or two. It’s already got the dirt built in. A lot of folks just rake it into a bed and let it cook.
                </p>
                <p>
                  The catch is the species. <strong>Pine and other softwoods turn acidic as they break down</strong>, and fresh grindings of any wood will pull nitrogen out of the soil while they rot. So pine grindings are fine around acid-loving stuff like azaleas or in a back corner — but keep them out of the vegetable garden unless you’ve let them age and balanced them out. Right wood, right spot: free soil. Wrong wood in the wrong bed: a season of stunted tomatoes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE HANDLE IT */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="Where we stand" title="What we do with your wood — and your choice" />
            <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                I’m Mike Campbell, and I own Art-is-Tree. When we clear your tree, you’ve got a say in where the wood goes. Plenty of customers want us to <strong>leave the chips</strong> for their own mulch, or <strong>buck the trunk into firewood rounds</strong> and stack it — and that’ll knock money off your bill, because it’s wood we don’t have to haul. We get into that trade-off in our <Link to="/case-studies/affordable-tree-work" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">guide to affordable tree work</Link>.
              </p>
              <p>
                Whatever you don’t keep doesn’t go to a landfill. It goes into the chain you just read about — chipped for mulch and biomass, or hauled off as pulpwood into the same market that feeds the mills in West Point and Franklin. It’s one of the parts of this job I actually like: a hazard tree coming off your house on Monday is cardboard, mulch, or electricity by the end of the month.
              </p>
              <p>
                We handle <Link to="/services/tree-removal" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">tree removal</Link>, <Link to="/services/stump-grinding" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">stump grinding</Link>, and <Link to="/services/land-clearing" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">land clearing</Link> across <Link to="/service-areas/virginia-beach" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Virginia Beach</Link> and all of Hampton Roads — and the wood is always accounted for.
              </p>
            </div>

            {/* sources */}
            <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
              <p className="font-semibold text-gray-700 m-0">Sources</p>
              <p id="src1" className="m-0">1. UMass Building &amp; Construction Technology, <a href="https://www.umass.edu/bct/wp-content/uploads/2009/04/urban_wood_waste.pdf" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“Urban Wood Waste: Maximizing Log Value for the Sawmill Market”</a> — embedded metal, knots/defects, and small volumes make yard trees poor sawlogs.</p>
              <p id="src2" className="m-0">2. International Paper / RecyclingToday, <a href="https://www.recyclingtoday.com/news/international-paper-fluff-pulp-franklin-va/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“International Paper to Re-Open Virginia Mill”</a> — Southern pine prevalence and fluff-pulp production in Franklin, VA.</p>
              <p id="src3" className="m-0">3. Virginia Economic Development Partnership, <a href="https://www.vedp.org/news/future-manufacturing-america-westrock" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“The Future of Manufacturing in America: WestRock”</a> — WestRock’s Virginia paperboard operations and roundwood/chip fiber mix.</p>
              <p id="src4" className="m-0">4. United Steelworkers, <a href="https://usw.org/press-release/usw-lauds-international-papers-decision-to-reopen-franklin-virginia-mill/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">on the Franklin, VA mill’s 2010 closure and fluff-pulp reopening.</a></p>
              <p id="src5" className="m-0">5. Dominion Energy, <a href="https://www.dominionenergy.com/projects-and-facilities/biomass-fuel-facilities" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Biomass Fuel Facilities</a>, and Virginia Places, <a href="https://www.virginiaplaces.org/energy/biomass.html" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Biomass Energy in Virginia</a> — Southampton coal-to-biomass conversion, ~51 MW, and regional wood-fuel tonnage.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <Eyebrow className="mb-3">Got a tree to take down?</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">We’ll handle the tree — and the wood.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Free, written, and itemized — for any tree in <Link to="/service-areas/virginia-beach" className="underline decoration-white/40 hover:decoration-white">Virginia Beach</Link> or anywhere in <Link to="/service-areas" className="underline decoration-white/40 hover:decoration-white">Hampton Roads</Link>. Keep the chips and firewood, or let us haul it into the chain. Your call.
            </p>
            <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] text-lg px-8 py-6 rounded-xl font-bold">
              <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/where-your-tree-goes" preferred={['/case-studies/affordable-tree-work', '/case-studies/storm-damage-mitigation', '/case-studies/crane-safety']} />
    </>
  );
};

export default TreeRecyclingCaseStudy;
