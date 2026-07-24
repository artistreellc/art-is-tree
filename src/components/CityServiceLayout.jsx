import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, Axe, Truck, Scissors, CircleOff, Zap, Trees, ShieldCheck, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import ServiceLinks from '@/components/ServiceLinks';
import GoogleMap from '@/components/GoogleMap';
import LocationFAQ from '@/components/LocationFAQ';
import { FinancingSection } from '@/components/Financing';
import { Eyebrow, SectionHeading, Figure } from '@/components/design/Primitives';
import { COMPANY_INFO } from '@/constants/seoMetadata';
import { ldJson } from '@/utils/seoHelpers';

const ICONS = { removal: Axe, crane: Truck, trim: Scissors, stump: CircleOff, emergency: Zap, land: Trees };

/**
 * Shared, photo-led city service-area page. Content is city-specific (passed
 * via `data`) but the layout, styling, and structure stay consistent across
 * Virginia Beach, Norfolk, Chesapeake, Portsmouth and Suffolk.
 */
const CityServiceLayout = ({ data }) => {
  const {
    city, path, geo, metaTitle, metaDesc,
    heroImg, heroAlt, heroSub,
    introTitle, introParagraphs,
    neighborhoods, services,
    localTitle, localParagraphs, localImg, localAlt, localCaption, localBadges = [],
    ctaTitle, ctaText, mapQuery, faqs, relatedPreferred, financingText,
  } = data;

  const schema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Art-is-Tree LLC',
    url: `https://artistreevabeach.com${path}`, telephone: '+17573195131',
    address: { '@type': 'PostalAddress', addressLocality: city, addressRegion: 'VA', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng },
    areaServed: { '@type': 'City', name: city }, priceRange: '$$',
    image: 'https://artistreevabeach.com/logo.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY_INFO.rating.value,
      reviewCount: COMPANY_INFO.rating.reviewCount,
      bestRating: COMPANY_INFO.rating.best,
      worstRating: COMPANY_INFO.rating.worst,
    },
  };

  return (
    <>
      <LocalSEOMeta pageTitle={metaTitle} description={metaDesc} />
      <Head>
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content={`${city}, Virginia`} />
        <meta name="geo.position" content={`${geo.lat};${geo.lng}`} />
        <meta name="ICBM" content={`${geo.lat}, ${geo.lng}`} />
        <script type="application/ld+json">{ldJson(schema)}</script>
      </Head>

      <div className="bg-[#FAF9F6]">
        {/* HERO */}
        <header className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28 px-4 text-white">
          <img src={heroImg} alt={heroAlt} className="absolute inset-0 -z-10 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2F24]/88 via-[#0A2F24]/80 to-[#08251C]/92" />
          <div className="container mx-auto max-w-4xl text-center">
            <Eyebrow className="mb-4">{city}, VA</Eyebrow>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Tree Service in {city}, VA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">{heroSub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg" asChild>
                <a href="tel:7573195131"><Phone className="mr-2 w-5 h-5" /> Call (757) 319-5131</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold py-6 px-8 text-lg" asChild>
                <Link to="/contact">Free Estimate</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* INTRO + neighborhoods */}
        <section className="container mx-auto px-4 max-w-4xl py-16 md:py-20">
          <SectionHeading eyebrow="Your local crew" title={introTitle} />
          <div className="mt-6 space-y-5 text-gray-700 text-lg leading-relaxed">
            {introParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-[#1B4D3E] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]' : ''}
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className="reveal card-3d mt-10 bg-white rounded-2xl border border-gray-200 p-6 md:p-7">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#1B4D3E] m-0">{city} neighborhoods we work in every week</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-white text-[#1B4D3E] border border-gray-200 shadow-[0_1px_2px_rgba(10,47,36,0.10)] px-3.5 py-1.5 rounded-full text-sm font-semibold hover:border-[#D4AF37]/50 hover:shadow-md transition-all">{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white border-y border-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading eyebrow="What we do here" title={`Full-service tree care in ${city}`} align="center" className="mb-12" />
            <div className="grid md:grid-cols-2 gap-5">
              {services.map(({ iconKey, kw, text }) => {
                const Icon = ICONS[iconKey] || Axe;
                return (
                  <div key={kw} className="reveal card-3d group flex gap-5 bg-white border border-gray-200/90 border-t-[3px] border-t-[#D4AF37]/80 rounded-2xl p-6 hover:border-[#1B4D3E]/25">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#245c49] to-[#123a2d] flex items-center justify-center flex-shrink-0 shadow-md ring-1 ring-black/10 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-1.5">{kw}</h3>
                      <p className="text-gray-600 leading-relaxed text-[15px] m-0">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOCAL CONDITIONS */}
        <section className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Figure src={localImg} alt={localAlt} caption={localCaption} aspect="aspect-[3/4]" className="reveal max-w-md mx-auto lg:mx-0" />
            <div>
              <SectionHeading eyebrow="Why local knowledge matters" title={localTitle} />
              <div className="mt-6 space-y-4 text-gray-700 text-lg leading-relaxed">
                {localParagraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
              </div>
              {localBadges.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[#1B4D3E]">
                  {localBadges.map(([Kind, label]) => (
                    <span key={label} className="flex items-center gap-2">
                      {Kind === 'shield' ? <ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> : <Waves className="w-5 h-5 text-[#D4AF37]" />}
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl pb-16">
          <div className="bg-[#0A2F24] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-0">{ctaTitle}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{ctaText}</p>
            <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-10 text-lg" asChild>
              <Link to="/contact">Get Your Free Estimate <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </div>

      <section className="container mx-auto px-4 max-w-4xl my-16">
        <h2 className="text-3xl font-playfair font-bold text-[#1B4D3E] mb-6 text-center">Serving All of {city}</h2>
        <GoogleMap query={mapQuery} title={`Art-is-Tree LLC tree service area — ${city}, VA`} />
      </section>

      <LocationFAQ city={city} faqs={faqs} />
      {financingText && (
        <FinancingSection heading={`Tree Service Financing in ${city}`} description={financingText} />
      )}
      <ServiceLinks cityName={city} />
      <RelatedCaseStudies currentPath={path} preferred={relatedPreferred} />
    </>
  );
};

export default CityServiceLayout;
