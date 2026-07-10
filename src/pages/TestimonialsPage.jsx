
import React from 'react';
import { ShieldCheck, Award, ThumbsUp, ExternalLink, Star } from 'lucide-react';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const GOOGLE_LISTING_URL = 'https://www.google.com/maps?cid=12599844776703525086';

// Real, published customer reviews (verbatim) pulled from the business's Google,
// Yelp, Angi, and BBB profiles. Displayed as visible testimonials only — no
// per-review JSON-LD, since Google does not allow self-serving review rich
// results on a business's own site (the aggregate rating lives in
// LocalBusinessSchema instead).
const REVIEWS = [
  {
    name: 'Melissa Thomas',
    source: 'Google',
    date: '2026',
    text: `Art-is-Tree came out to provide a proposal for pruning many trees around our church property and the removal of a 200-year-old ash tree in our church yard. They promptly answered the many questions I had as we were making decisions about the work. It is very clear they take great pride in the work they do. By the end of the day everything was cleaned up as if they'd never been there, and they returned the next morning to grind down the stump, spread new soil, and seed the area. They were very careful not to damage an altar that sits under the tree canopy. Art-is-Tree knows what they are doing and I would highly recommend their services to anyone, residential or commercial.`,
  },
  {
    name: 'Shawn Demayo',
    source: 'Google',
    date: '2025',
    text: `Mike from Art-is-Tree recently removed my large red oak and did a fantastic job. I wouldn't call anyone else for the job — Mike and his crew made my yard look better than when they started. This is the second tree job we've used them for. Our family is safe now that the tree is gone, no more worrying if a storm will damage our house from the huge tree that used to be feet away from my daughter's window. Thanks Mike and the crew!`,
  },
  {
    name: 'Misty Scanlon',
    source: 'Google',
    date: '2025',
    text: `Cannot recommend this company enough! We needed a tree cut down in a very tight space, some trees cut/pruned, and deadwooding in other areas. Michael, Tommy and team took care of us earlier than originally planned. They knocked everything out, plus some extra we added last minute, in a very fast and efficient manner. And the cleanup… perfection! Our yard (and our neighbor's yard) is cleaner than when they showed up. I would absolutely use these guys if you need tree work!`,
  },
  {
    name: 'Manoflamancha C.',
    source: 'Google',
    date: 'Jan 2026',
    text: `These guys do fabulous work. Took down a tree near the house power line with no trouble. Plus their cleanup was perfect. I will use them again for sure. Plus they really know about trees — rare.`,
  },
  {
    name: 'Ivo',
    source: 'Google',
    date: '2025',
    text: `Overall, they did fantastic. The tree was in a tight spot with some concerns about potential house damage, but they handled it no problem. Competitive pricing, prompt, quick, polite. They did superb and earned 5 stars without question. I trust them and will certainly use them for my other trees in the near future.`,
  },
  {
    name: 'Peter G.',
    source: 'Yelp',
    date: 'Jul 2025',
    text: `These guys showed up as promised, responded to my concerns, and did a great job. They were considerate of me and my neighbors, and cleaned up leaving no trace. Owner was on-site. Exceeded my expectations.`,
  },
  {
    name: 'Suranda C.',
    source: 'Yelp',
    date: 'Sep 2025',
    text: `My neighbor was having trees trimmed and they asked if they could enter my back yard for easier access. I mentioned I hate my mature river birch because it makes such a mess. Tommy, who was very friendly, immediately gave me a reasonable quote to take it down, and they showed up early the very next day. Finished and cleaned up beautifully.`,
  },
  {
    name: 'Paul P.',
    source: 'Angi',
    date: 'Mar 2026',
    text: `Job was done on time and very quickly. They cleaned up after and did not cause any damage to my property. Awesome job!!`,
  },
  {
    name: 'Jeff G.',
    source: 'BBB',
    date: 'Apr 2024',
    text: `Mike and his team did a great job taking down some large limbs over my house. They thoroughly cleaned up everything and even cut the large logs into 12-foot sections so we could make firewood out of it. They even found time to do the same for my neighbor, unscheduled! Highly recommend him and his team.`,
  },
];

const SOURCE_STYLES = {
  Google: 'bg-blue-50 text-blue-700 border-blue-200',
  Yelp: 'bg-red-50 text-red-700 border-red-200',
  Angi: 'bg-orange-50 text-orange-700 border-orange-200',
  BBB: 'bg-sky-50 text-sky-800 border-sky-200',
};

const Stars = () => (
  <div className="flex text-[#D4AF37]" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
);

const TestimonialsPage = () => {
  return (
    <>
      <LocalSEOMeta
        pageTitle="Reviews | Tree Service Virginia Beach | Art-is-Tree LLC"
        description="Read real 5-star reviews of Art-is-Tree LLC from Google, Yelp, Angi and BBB. Trusted, licensed and insured tree removal, crane work and trimming across Virginia Beach and Hampton Roads."
      />

      <LocalBusinessSchema />

      <main className="min-h-screen bg-gray-50 pb-24">
        <header className="relative py-20 md:py-24 bg-[#1B4D3E] text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-5 mt-0">
              Customer Reviews
            </h1>
            <p className="text-lg md:text-xl text-[#D4AF37] font-medium max-w-2xl mx-auto">
              Real 5-star reviews from Virginia Beach &amp; Hampton Roads homeowners — tree removal, crane work, trimming, and storm cleanup.
            </p>
          </div>
        </header>

        <section className="container mx-auto px-4 max-w-6xl -mt-10 relative z-20">
          {/* Trust summary */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 mb-10">
            <div className="flex flex-wrap justify-center gap-8 md:gap-14">
              <div className="flex flex-col items-center text-[#1B4D3E]">
                <ThumbsUp className="w-7 h-7 text-[#D4AF37] mb-2" />
                <strong className="text-lg">5.0 Rated</strong>
                <span className="text-sm text-gray-500">134 Google Reviews</span>
              </div>
              <div className="flex flex-col items-center text-[#1B4D3E]">
                <ShieldCheck className="w-7 h-7 text-[#D4AF37] mb-2" />
                <strong className="text-lg">Licensed &amp; Insured</strong>
                <span className="text-sm text-gray-500">BBB A+ Accredited</span>
              </div>
              <div className="flex flex-col items-center text-[#1B4D3E]">
                <Award className="w-7 h-7 text-[#D4AF37] mb-2" />
                <strong className="text-lg">TCIA Members</strong>
                <span className="text-sm text-gray-500">Professional Arborists</span>
              </div>
            </div>
          </div>

          {/* Review wall — masonry so varying lengths stay tidy */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {REVIEWS.map((r) => (
              <figure
                key={r.name + r.source}
                className="break-inside-avoid mb-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <Stars />
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${SOURCE_STYLES[r.source] || 'bg-gray-50 text-gray-600 border-gray-200'}`}
                  >
                    {r.source}
                  </span>
                </div>
                <blockquote className="text-gray-700 leading-relaxed text-[15px]">
                  {r.text}
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="font-semibold text-[#1B4D3E]">{r.name}</span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              These are just a few — read all 134 five-star reviews on our Google Business Profile.
            </p>
            <a
              href={GOOGLE_LISTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white px-6 py-3 rounded-lg hover:bg-[#143a2f] transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Read our 134 reviews on Google
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default TestimonialsPage;
