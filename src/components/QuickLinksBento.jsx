import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Axe, Truck, Images, Star, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { useReviewStats } from '@/hooks/useReviewStats';

/**
 * Bold "link bubble" bento grid — attention-grabbing linked tiles with big
 * headers over real job photos and solid brand colors. Routes visitors to the
 * pages that matter (emergency, services, work, reviews, estimate).
 */
const PhotoTile = ({ to, img, alt, eyebrow, title, sub, span = '', badge }) => (
  <Link
    to={to}
    className={`group relative overflow-hidden rounded-3xl min-h-[220px] shadow-md ${span}`}
  >
    <img src={img} alt={alt} loading="lazy" decoding="async"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
    {badge && (
      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
        <AlertTriangle className="w-3.5 h-3.5" /> {badge}
      </span>
    )}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      {eyebrow && <span className="text-[#D4AF37] font-bold tracking-[0.15em] uppercase text-xs">{eyebrow}</span>}
      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white leading-tight mt-1">{title}</h3>
      {sub && <p className="text-gray-200 text-sm mt-2 max-w-sm">{sub}</p>}
      <span className="inline-flex items-center gap-1 text-white font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
        Learn more <ArrowUpRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
);

const SolidTile = ({ to, title, sub, Icon, bg, text = 'text-white', accent = 'text-[#D4AF37]', span = '' }) => (
  <Link
    to={to}
    className={`group relative isolate overflow-hidden rounded-3xl min-h-[220px] p-6 flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${bg} ${span}`}
  >
    {/* depth: soft light from top-left + oversized ghost icon */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" />
    <Icon className={`absolute -bottom-5 -right-4 w-40 h-40 opacity-[0.08] ${accent}`} strokeWidth={1.25} />
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm ${accent}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className={`font-playfair text-2xl md:text-3xl font-bold leading-tight ${text}`}>{title}</h3>
      {sub && <p className={`text-sm mt-2 opacity-90 ${text}`}>{sub}</p>}
      <span className={`inline-flex items-center gap-1 font-semibold text-sm mt-3 ${text} group-hover:gap-2 transition-all`}>
        Go <ArrowUpRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
);

const QuickLinksBento = () => {
  const { count: reviewCount, rating: reviewRating } = useReviewStats();
  return (
    <section className="py-16 md:py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-[#D4AF37] font-bold tracking-[0.18em] uppercase text-sm">Where to next</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mt-2">
            What do you need done?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[220px]">
          <PhotoTile
            to="/emergency"
            img="/images/virginia-beach-crane-rigging-storm.webp"
            alt="Climber rigging a large storm-damaged trunk to a crane under a dark sky"
            badge="24/7 Emergency"
            eyebrow="Storm damage?"
            title="Tree on your house? We answer now."
            sub="A real person, day or night, across Hampton Roads."
            span="col-span-2 row-span-2"
          />
          <PhotoTile
            to="/services/crane-removal"
            img="/images/virginia-beach-crane-operation-oak.webp"
            alt="Crane and crew removing a large oak beside a Virginia Beach home"
            eyebrow="Big & hazardous"
            title="Crane Removals"
            span="col-span-2"
          />
          <SolidTile
            to="/services/tree-removal"
            title="Tree Removal"
            sub="Safe, clean takedowns."
            Icon={Axe}
            bg="bg-[#1B4D3E]"
          />
          <SolidTile
            to="/services/tree-trimming"
            title="Trimming & Pruning"
            sub="Storm-prep and shaping."
            Icon={Truck}
            bg="bg-[#0A2F24]"
          />
          <PhotoTile
            to="/gallery"
            img="/images/virginia-beach-tall-tree-climb.webp"
            alt="Climber high in a bare tree next to a house in Virginia Beach"
            eyebrow="See the work"
            title="Our Gallery"
            span="col-span-2"
          />
          <SolidTile
            to="/testimonials"
            title={`${reviewRating.toFixed(1)}★ · ${reviewCount} Reviews`}
            sub="What your neighbors say."
            Icon={Star}
            bg="bg-[#D4AF37]"
            text="text-[#1B4D3E]"
            accent="text-[#1B4D3E]"
          />
          <SolidTile
            to="/contact"
            title="Free Estimate"
            sub="5% off when you book online."
            Icon={ClipboardCheck}
            bg="bg-[#1B4D3E]"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickLinksBento;
