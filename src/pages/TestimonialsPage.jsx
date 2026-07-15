
import React from 'react';
import { ShieldCheck, Award, ThumbsUp, ExternalLink, Star, Facebook, Instagram } from 'lucide-react';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import { useReviewStats } from '@/hooks/useReviewStats';

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
  Google: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
  Yelp: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100',
  Angi: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100',
  BBB: 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100',
};

// Each review links back to the platform it's published on, so any visitor can
// verify it's real and read the rest of the reviews there.
const SOURCE_URLS = {
  Google: GOOGLE_LISTING_URL,
  Yelp: 'https://www.yelp.com/biz/art-is-tree-virginia-beach-3',
  Angi: 'https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc-reviews-10302177.htm',
  BBB: 'https://www.bbb.org/us/va/virginia-beach/profile/tree-service/art-is-tree-llc-0583-90336149',
};

const Stars = () => (
  <div className="flex text-[#D4AF37]" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
);

// Real brand marks for the "reviewed & trusted on" badge bar.
const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6" aria-hidden="true">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
  </svg>
);
const CircleStar = ({ color }) => (
  <span
    className="flex items-center justify-center w-7 h-7 rounded-full"
    style={{ backgroundColor: color }}
  >
    <Star className="w-4 h-4 text-white fill-white" />
  </span>
);
const BBBMark = () => (
  <span className="flex items-center justify-center w-7 h-7 rounded bg-[#00457c] text-white text-[11px] font-extrabold leading-none">
    A+
  </span>
);

// Every badge deep-links to the real, public profile so visitors can verify.
const PLATFORMS = [
  { name: 'Google', url: GOOGLE_LISTING_URL, icon: <GoogleG /> },
  { name: 'Facebook', url: 'https://www.facebook.com/artistreeva', icon: <Facebook className="w-6 h-6 text-[#1877F2]" fill="#1877F2" strokeWidth={0} /> },
  { name: 'Instagram', url: 'https://www.instagram.com/artistreeva', icon: <Instagram className="w-6 h-6 text-[#E4405F]" /> },
  { name: 'Yelp', url: 'https://www.yelp.com/biz/art-is-tree-virginia-beach-3', icon: <CircleStar color="#FF1A1A" /> },
  { name: 'Angi', url: 'https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc-reviews-10302177.htm', icon: <CircleStar color="#F5822A" /> },
  { name: 'BBB A+', url: 'https://www.bbb.org/us/va/virginia-beach/profile/tree-service/art-is-tree-llc-0583-90336149', icon: <BBBMark /> },
];

const TestimonialsPage = () => {
  const { count, rating } = useReviewStats();
  return (
    <>
      <LocalSEOMeta
        pageTitle="Reviews | Tree Service Virginia Beach | Art-is-Tree LLC"
        description="Read real 5-star reviews of Art-is-Tree LLC from Google, Yelp, Angi and BBB. Trusted, licensed and insured tree removal, crane work and trimming across Virginia Beach and Hampton Roads."
      />

      <LocalBusinessSchema />

      <div className="min-h-screen bg-gray-50 pb-24">
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
              <a
                href={GOOGLE_LISTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-[#1B4D3E] group"
              >
                <ThumbsUp className="w-7 h-7 text-[#D4AF37] mb-2" />
                <strong className="text-lg group-hover:underline">{rating.toFixed(1)} Rated</strong>
                <span className="text-sm text-gray-500">{count} Google Reviews</span>
              </a>
              <a
                href={SOURCE_URLS.BBB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-[#1B4D3E] group"
              >
                <ShieldCheck className="w-7 h-7 text-[#D4AF37] mb-2" />
                <strong className="text-lg group-hover:underline">Licensed &amp; Insured</strong>
                <span className="text-sm text-gray-500">BBB A+ Accredited</span>
              </a>
              <div className="flex flex-col items-center text-[#1B4D3E]">
                <Award className="w-7 h-7 text-[#D4AF37] mb-2" />
                <strong className="text-lg">ANSI-Standard Work</strong>
                <span className="text-sm text-gray-500">A300 &amp; Z133 Standards</span>
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
                  <a
                    href={SOURCE_URLS[r.source] || GOOGLE_LISTING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify this review on ${r.source}`}
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors ${SOURCE_STYLES[r.source] || 'bg-gray-50 text-gray-600 border-gray-200'}`}
                  >
                    {r.source}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <blockquote className="text-gray-700 leading-relaxed text-[15px]">
                  {r.text}
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="font-semibold text-[#1B4D3E]">{r.name}</span>
                  <a
                    href={SOURCE_URLS[r.source] || GOOGLE_LISTING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:text-[#1B4D3E] transition-colors"
                  >
                    {r.date} · Verified
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Reviewed & trusted across the web */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-1">
              Reviewed &amp; Trusted Across the Web
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
              Every one of these is a real, public profile — tap any badge to verify our reviews and follow along.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Art-is-Tree on ${p.name}`}
                  className="group flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-2 pr-4 py-2 hover:shadow-md hover:border-gray-300 transition-all"
                >
                  <span className="w-7 h-7 flex items-center justify-center">{p.icon}</span>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1B4D3E]">
                    {p.name}
                  </span>
                </a>
              ))}
            </div>

            <p className="text-gray-600 mb-4">
              These are just a few — read all {count} five-star reviews on our Google Business Profile.
            </p>
            <a
              href={GOOGLE_LISTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white px-6 py-3 rounded-lg hover:bg-[#143a2f] transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Read our {count} reviews on Google
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestimonialsPage;
