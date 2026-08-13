import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight, ShieldCheck, ClipboardCheck, Search, MessageSquare, DollarSign } from 'lucide-react';
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
    question: 'Do people really read reviews before hiring a tree service?',
    answer: "Yes — 97% of consumers read online reviews for local businesses before choosing one, 68% won't consider a business under 4 stars, and 49% trust reviews as much as a personal recommendation.",
  },
  {
    question: 'Should you get more than one tree removal quote?',
    answer: 'Yes. Get a written estimate from every company you contact. Two honest companies can price the same tree differently based on equipment, crew, and insurance, so comparing is the only way to know what fair looks like and to avoid an uninsured lowball bid.',
  },
  {
    question: 'How much does tree removal cost in Virginia Beach?',
    answer: "Price depends on the tree's size, location, and risk, which is why you should get written quotes. Art-is-Tree gives free written estimates that spell out removal, stump grinding, cleanup, and hauling. Call (757) 319-5131.",
  },
  {
    question: 'How do I choose the right tree service?',
    answer: 'Check for recent, specific reviews; confirm the company is licensed and insured with proof; get a written itemized estimate; look for an independent trust signal like a BBB A+ rating; and see whether they treat the estimate appointment seriously.',
  },
];

const ChooseTreeServiceCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'How to Choose a Tree Service in Virginia Beach: Read the Reviews, Get Every Quote';
  // Meta description kept ~155 chars so it doesn't truncate in the SERP.
  const description = 'A Virginia Beach owner on how to choose a tree service, why to get every quote, and what tree removal really costs. Free written estimates: (757) 319-5131.';

  return (
    <>
      <LocalSEOMeta
        pageTitle="Tree Removal Cost Virginia Beach: Read Reviews, Get Quotes | Art-is-Tree LLC"
        description={description}
      />
      <CaseStudySchema
        title={title}
        description={description}
        imageUrl="https://artistreevabeach.com/images/virginia-beach-arborist-hardwood-removal.webp"
        url="/case-studies/how-to-choose-a-tree-service"
        datePublished="2026-07-27"
        dateModified="2026-07-27"
      />
      <FAQPageSchema items={FAQ_ITEMS} />

      <article className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'How to Choose a Tree Service', path: '/case-studies/how-to-choose-a-tree-service' },
          ]} />
        </div>

        {/* HERO */}
        <header className="container mx-auto px-4 pt-6 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] md:min-h-[460px]">
              <img src="/images/virginia-beach-arborist-hardwood-removal.webp" alt="An Art-is-Tree crew working a professional tree removal in Virginia Beach" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Eyebrow className="mb-3">Case Study · Hiring a Pro</Eyebrow>
                <h1 className="font-playfair text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight max-w-2xl">
                  How to Choose a Tree Service in Virginia Beach
                </h1>
                <p className="text-white/90 font-inter text-base md:text-lg mt-3 max-w-xl">Read the reviews. Get every quote. Here’s the honest reason why.</p>
                <Byline date="2026-07-27" light className="mt-4" />
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm font-medium mt-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Virginia Beach · Hampton Roads</span>
                  <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#D4AF37]" /> Reviews · Quotes · Trust</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectSpec rows={[
                ['The reality', '97% of people read reviews before hiring a local business'],
                ['The big shift', '49% trust an online review as much as a personal referral'],
                ['The smart move', 'Get a written quote from every company you contact'],
                ['What to verify', 'Licensed & insured, BBB A+, recent and specific reviews'],
                ['What it costs us', 'A single real lead runs a tree company $20–$230+'],
                ['Our promise', 'Read our reviews, go get other quotes — we’ll earn it'],
              ]} />
            </div>
          </div>
        </header>

        {/* QUICK ANSWER — AEO featured-snippet block */}
        <AnswerBlock>
          Almost everyone reads reviews before hiring a tree service now, and they’re right to. Before you let anyone put a chainsaw near your house, read the <strong>recent</strong> reviews, confirm the company is <strong>licensed and insured</strong>, and get a <strong>written quote from every company you contact</strong>. It costs you nothing but time — and it costs the tree company real money every time you reach out, which is exactly why you should make them earn it.
        </AnswerBlock>

        {/* DO PEOPLE READ REVIEWS */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="And that’s a good thing" title="Do people really read reviews before hiring a tree service?" />
            <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                If you’ve ever pulled up Google, read a company’s reviews, and made your decision before you ever picked up the phone — you’re completely normal. You’re the overwhelming majority.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {[
                ['97%', 'of consumers read online reviews for local businesses before choosing one'],
                ['68%', 'won’t even consider a business under a 4-star average — 31% hold out for 4.5+'],
                ['49%', 'trust an online review as much as a recommendation from a friend or family'],
              ].map(([stat, label]) => (
                <div key={stat} className="card-3d bg-[#FAF9F6] border border-gray-200 border-t-4 border-t-[#D4AF37] rounded-2xl p-6 text-center">
                  <div className="font-playfair text-4xl font-bold text-[#1B4D3E] mb-2">{stat}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                That last one is the big shift: a stranger’s honest review now carries nearly the same weight as your neighbor telling you who cleared their yard. People are cross-checking harder than ever — even the folks asking AI assistants like ChatGPT for a recommendation. <strong>97% of them go verify the AI’s suggestion against real reviews before trusting it.</strong><sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup> So if you’re doing your homework, you’re doing exactly what smart homeowners are supposed to do. You can <Link to="/testimonials" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">read our reviews here</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT GOOD REVIEWS TELL YOU */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="It’s not just the star count" title="What do good tree service reviews actually tell you?" />
              <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong>Recency.</strong> This is the one most people miss. <strong>74% of consumers only trust reviews written in the last three months</strong>, and a growing group only pays attention to reviews from the last two weeks.<sup><a href="#src1" className="text-[#1B4D3E] hover:text-[#D4AF37]">1</a></sup> A great rating from two years ago with nothing since isn’t necessarily good <em>today</em> — crews change, ownership changes. Look for a steady stream of fresh reviews.
                </p>
                <p>
                  <strong>Specifics.</strong> “Great job!” is fine, but “they took down a huge oak leaning over our roof near the power lines and cleaned up so well you’d never know they were here” tells you what the crew can actually do. Look for reviews describing work like yours.
                </p>
                <p>
                  <strong>How they respond.</strong> Read the owner’s replies — especially to the occasional critical review. A company that answers calmly, takes responsibility, and makes it right is showing you how they’ll treat <em>you</em> if something goes sideways. Nobody’s perfect; how they handle imperfection is the tell.
                </p>
                <p>
                  There’s real money behind this, too. Harvard Business School research on local businesses found that a <strong>one-star increase in rating corresponds to a 5–9% increase in revenue.</strong><sup><a href="#src2" className="text-[#1B4D3E] hover:text-[#D4AF37]">2</a></sup> Reviews aren’t a popularity contest — they’re the closest thing you have to a company’s report card.
                </p>
              </div>
            </div>
            <Figure src="/images/virginia-beach-tree-climber-portrait.webp" alt="Owner and lead climber of Art-is-Tree in safety gear on a Virginia Beach job" caption="The company that shows up on time to estimate is the one that shows up on time to do the work" aspect="aspect-[3/4]" position="top" className="reveal max-w-md mx-auto lg:mx-0" />
          </div>
        </section>

        {/* GET A QUOTE FROM EVERYONE */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="Every company you contact" title="Should you get more than one tree removal quote?" light />
            <div className="mt-6 space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
              <p>
                Yes — get a written quote from every company you contact. Here’s the advice I give people even when it means they might not pick me: <strong>contact several companies and get a written estimate from each.</strong> Tree work isn’t like buying a gallon of milk. Two honest companies can look at the same tree and price it differently based on their equipment, crew size, insurance, and how they’d approach the job safely. The only way to know what fair looks like <em>for your specific tree</em> is to compare.
              </p>
              <p>
                Getting multiple quotes protects you from overpaying — and just as important, from the lowball “guy with a truck” whose price looks amazing until something goes wrong and you find out he wasn’t insured. When you compare, weigh more than price:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                [ShieldCheck, 'Licensed & insured — with proof', 'On a tree-on-your-house job this is everything. An uninsured crew hurt on your property can become your problem.'],
                [ClipboardCheck, 'A written, itemized estimate', 'Removal, stump, cleanup, and hauling all spelled out — not a number scribbled on a truck door.'],
                [Star, 'Reviews that match the promise', 'Recent, specific, and describing work like yours.'],
                [MessageSquare, 'An independent trust signal', 'A BBB A+ rating, a long track record, an owner who answers the phone.'],
              ].map(([Icon, h, t]) => (
                <div key={h} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <Icon className="w-8 h-8 text-[#D4AF37] mb-3" />
                  <h3 className="font-playfair text-lg font-bold text-white mb-1.5">{h}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mt-8">
              A company confident in its work <em>wants</em> you to compare. We do. We’d rather you choose us with your eyes open than wonder later if you overpaid — you can <Link to="/contact" className="underline decoration-white/40 hover:decoration-white">get a free written estimate from us here</Link>. It’s the same honesty we bring to pricing in our <Link to="/case-studies/affordable-tree-work" className="underline decoration-white/40 hover:decoration-white">affordable tree work guide</Link>.
            </p>
          </div>
        </section>

        {/* WHAT IT COSTS / HOW MUCH */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="Behind the curtain" title="How much does tree removal cost in Virginia Beach — and why?" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The honest answer is that it depends on the tree — its size, how close it is to your house or power lines, its condition, and whether you add stump grinding — which is exactly why you should get a written quote. But there’s a hidden cost most homeowners never see, and it’s the reason I <em>want</em> you to be a serious, informed buyer.
            </p>
            <p>
              Every time you search “tree service near me” and click an ad or fill out a form, that click costs the business real money. In home services, a single Google-ad click averages <strong>$7.85</strong> and is climbing toward <strong>$8.33 in 2026</strong>;<sup><a href="#src3" className="text-[#1B4D3E] hover:text-[#D4AF37]">3</a></sup><sup><a href="#src4" className="text-[#1B4D3E] hover:text-[#D4AF37]">4</a></sup> for competitive tree-service searches, estimates run $10–$20 or more apiece.
            </p>
            <p>
              But the click is just the start. Only about <strong>7% of home-services ad clicks</strong> ever turn into a real inquiry — meaning more than 9 out of 10 clicks we pay for lead nowhere.<sup><a href="#src3" className="text-[#1B4D3E] hover:text-[#D4AF37]">3</a></sup> So the real cost of a single genuine phone call or quote request runs <strong>$90 on average, and $150–$230+</strong> in the priciest trades. On Google’s Local Services Ads, tree-service leads run roughly <strong>$20–$60 each</strong>,<sup><a href="#src5" className="text-[#1B4D3E] hover:text-[#D4AF37]">5</a></sup> and to actually <em>win</em> one new customer a home-services business typically spends <strong>$75 to $250+</strong> after all the clicks and no-show estimates that didn’t pan out.<sup><a href="#src6" className="text-[#1B4D3E] hover:text-[#D4AF37]">6</a></sup> Home improvement is now one of the most expensive categories to advertise in — right behind lawyers and dentists.<sup><a href="#src4" className="text-[#1B4D3E] hover:text-[#D4AF37]">4</a></sup>
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              ['$8.33', 'average home-services ad click in 2026'],
              ['~7%', 'of those clicks become a real inquiry'],
              ['$75–$250+', 'typical cost to win one new customer'],
            ].map(([stat, label]) => (
              <div key={stat} className="card-3d bg-white border border-gray-200 border-t-4 border-t-[#D4AF37] rounded-2xl p-6 text-center">
                <div className="font-playfair text-3xl font-bold text-[#1B4D3E] mb-2">{stat}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#FAF9F6] border-l-4 border-l-[#D4AF37] border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-4 mt-0 flex items-center gap-2"><DollarSign className="w-5 h-5 text-[#D4AF37]" /> Why I’m telling you this</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="m-0">
                <strong>1. It’s exactly why you should get a quote from everyone.</strong> These companies are already spending a fortune for the chance to talk to you. Make them earn it — the market is set up in <em>your</em> favor, so use it.
              </p>
              <p className="m-0">
                <strong>2. It’s a small ask for a big courtesy.</strong> If you request a quote, a real person drives out, climbs around your trees, and spends an hour building an honest estimate — and it already cost the business money just to reach you. You don’t owe anyone the job. But showing up for the appointment and giving an honest yes or no goes a long way — and it’s how you get a company’s best price and best attention.
              </p>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="A simple checklist" title="What’s the checklist for choosing the right tree service?" />
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">Put every company you’re considering through the same five questions:</p>
            <ol className="mt-8 space-y-5">
              {[
                ['Recent, specific reviews?', 'A steady stream in the last few months, describing work like yours.'],
                ['Licensed and insured — with proof on request?', ''],
                ['A written, itemized estimate?', 'Removal, stump grinding, cleanup, and hauling all spelled out.'],
                ['An independent trust signal?', 'A BBB A+ rating, a long track record, an owner who answers the phone.'],
                ['Do they treat the quote like it matters?', 'The company that shows up on time to estimate is the one that shows up on time to do the job.'],
              ].map(([q, a], i) => (
                <li key={q} className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-1 mt-0">{q}</h3>
                    <p className="text-gray-600 leading-relaxed m-0">
                      {i === 1 ? (<>Non-negotiable for anything near your home or power lines. More on why in our <Link to="/case-studies/osha-compliance" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">OSHA &amp; safety case study</Link>, and what an uninsured crew can cost you in our <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Virginia tree law</Link> write-up.</>) : a}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHERE WE STAND */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <SectionHeading eyebrow="Where we stand" title="Where Art-is-Tree stands — and our promise" />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              I’m Mike Campbell, and I own Art-is-Tree. We’re an owner-operated, <strong>licensed and insured</strong> tree service with a <strong>BBB A+ rating</strong> and a <strong>5.0 rating across 146 Google reviews</strong>, serving <Link to="/service-areas/virginia-beach" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Virginia Beach</Link>, <Link to="/service-areas/norfolk" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Norfolk</Link>, <Link to="/service-areas/chesapeake" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Chesapeake</Link>, and <Link to="/service-areas/portsmouth" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Portsmouth</Link>. We handle <Link to="/services/tree-removal" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">tree removal</Link>, <Link to="/services/tree-trimming" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">tree trimming</Link>, <Link to="/services/stump-grinding" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">stump grinding</Link>, and 24/7 storm response. We do free written estimates, we spell out exactly what you’re paying for, and we leave your property cleaner than we found it.
            </p>
            <p>
              And we mean what this whole article says: <strong>read our reviews, and go get other quotes.</strong> We’d rather win your trust than assume it. When you’ve compared honestly and you’re ready, we’ll be here — and we’ll earn it.
            </p>
          </div>

          {/* sources */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-2">
            <p className="font-semibold text-gray-700 m-0">Sources</p>
            <p id="src1" className="m-0">1. BrightLocal, <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">Local Consumer Review Survey 2026</a> — review reading, star thresholds, recency, and AI cross-checking.</p>
            <p id="src2" className="m-0">2. Michael Luca, <a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=41233" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">“Reviews, Reputation, and Revenue: The Case of Yelp.com,”</a> Harvard Business School (2011, rev. 2016) — a one-star rating increase corresponds to a 5–9% revenue increase.</p>
            <p id="src3" className="m-0">3. LocaliQ, <a href="https://localiq.com/blog/home-services-search-advertising-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">2025 Search Advertising Benchmarks for Home Services</a> — cost per click, conversion rate, and cost per lead.</p>
            <p id="src4" className="m-0">4. WordStream, <a href="https://www.wordstream.com/blog/2026-google-ads-benchmarks" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">2026 Google Ads Benchmarks</a> — home-services CPC trend and category rankings.</p>
            <p id="src5" className="m-0">5. Home Service Direct, <a href="https://www.homeservicedirect.net/how-much-are-tree-service-leads-worth/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">How Much Are Tree Service Leads Worth?</a> (2026) — Local Services Ads tree-lead pricing.</p>
            <p id="src6" className="m-0">6. WebFX, <a href="https://www.webfx.com/blog/home-services/hvac-marketing-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline hover:text-[#D4AF37]">2026 Home Services Marketing Benchmarks</a> — customer acquisition cost ($75–$250).</p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl pb-14 md:pb-20">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <Eyebrow className="mb-3">Compare freely — then choose confidently</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">Get one of your quotes from us.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Free, written, and itemized — for any tree in <Link to="/service-areas/virginia-beach" className="underline decoration-white/40 hover:decoration-white">Virginia Beach</Link> or anywhere in <Link to="/service-areas" className="underline decoration-white/40 hover:decoration-white">Hampton Roads</Link>. Read our reviews first; we want you to.
            </p>
            <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] text-lg px-8 py-6 rounded-xl font-bold">
              <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </article>

      <RelatedCaseStudies currentPath="/case-studies/how-to-choose-a-tree-service" preferred={['/case-studies/affordable-tree-work', '/case-studies/osha-compliance', '/case-studies/virginia-tree-law']} />
    </>
  );
};

export default ChooseTreeServiceCaseStudy;
