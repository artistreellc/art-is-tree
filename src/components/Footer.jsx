import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ShieldCheck, TreePine, Star, ChevronDown } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { useReviewStats } from '@/hooks/useReviewStats';

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";

const QUICK_LINKS = [
  ['/about', 'About Us'],
  ['/services', 'Services'],
  ['/emergency', '24/7 Emergency Service'],
  ['/gallery', 'Project Gallery'],
  ['/financing', 'Financing'],
  ['/faq', 'FAQ'],
  ['/find-us-online', 'Recommended Pros'],
  ['/contact', 'Contact Us'],
];

const SERVICE_AREAS = [
  ['/service-areas/virginia-beach', 'Virginia Beach'],
  ['/service-areas/norfolk', 'Norfolk'],
  ['/service-areas/chesapeake', 'Chesapeake'],
  ['/service-areas/portsmouth', 'Portsmouth'],
  ['/service-areas', 'All Service Areas'],
];

const CASE_STUDIES = [
  ['/case-studies', 'All ART-icles'],
  ['/case-studies/how-to-choose-a-tree-service', 'How to Choose a Tree Service'],
  ['/case-studies/affordable-tree-work', 'Affordable Tree Work'],
  ['/case-studies/storm-damage-mitigation', 'Storm Damage'],
  ['/case-studies/virginia-tree-law', 'Virginia Tree Law'],
  ['/case-studies/osha-compliance', 'OSHA Compliance'],
];

// A collapsed bar at every width, not just on mobile. Expanded columns made the
// footer ~585px tall on desktop — half a screen of links below the fold on every
// page. Collapsed, the four bars sit on one line and the whole footer is a strip.
//
// The links stay in the HTML when collapsed (display:none, not conditional
// render), so crawlers still see them and internal link equity to the
// service-area and ART-icle pages is unaffected.
const FooterSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-2 py-3.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
      >
        <h3 className="font-playfair text-lg font-bold text-[#D4AF37] m-0 group-hover:text-white transition-colors">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div className={`${open ? 'block' : 'hidden'} pb-4`}>
        {children}
      </div>
    </div>
  );
};

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group py-1.5 leading-snug">
    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block shrink-0" />
    {children}
  </Link>
);

const Footer = () => {
  const { count: reviewCount } = useReviewStats();
  const currentYear = new Date().getFullYear();
  const { setIsModalOpen } = useCookieConsent();

  return (
    <footer className="bg-[#1B4D3E] text-white pt-12 md:pt-16 pb-8 border-t-[10px] border-[#D4AF37] relative overflow-hidden contain-content footer-contain" role="contentinfo" style={{ contain: 'layout style paint' }}>
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3 w-[384px] h-[384px]">
        <TreePine width={384} height={384} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Column count must equal brand span + one per section, or the last
            section wraps to a second row with a dead void beside it:
            lg = 2 (brand) + 4 sections = 6.  md = 2, brand takes a full row. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 md:gap-y-10 mb-10">

          {/* Brand block — never collapses; it is the identity, not a link list.
              Kept tight because it is the tallest item in the row and therefore
              sets the whole footer's height. */}
          <div className="space-y-3.5 md:col-span-2 lg:col-span-2 pb-6 lg:pb-0">
            <Link to="/" className="inline-flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-white/10 transition-colors w-fit" aria-label="Home">
              <img src="/logo.png" alt="Art-is-Tree LLC Logo" className="w-[42px] h-[36px] bg-white p-1 rounded-md" width="42" height="36" loading="lazy" decoding="async" />
              <span className="font-playfair text-2xl font-bold text-white tracking-tight">
                Art-is-Tree <span className="text-[#D4AF37] ml-1">LLC</span>
              </span>
            </Link>
            <p className="text-gray-300 font-inter text-sm leading-relaxed max-w-sm">
              Professional, fully licensed, and insured tree care experts serving Virginia Beach, Norfolk, Chesapeake, and Portsmouth. We bring safety, precision, and artistry to every job.
            </p>
            {/* Socials, rating and the trust badge on one wrapping row rather
                than three stacked blocks — same content, a third of the height. */}
            <div className="flex flex-wrap items-center gap-2">
              <a href="https://www.facebook.com/artistreeva" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white rounded-full transition-colors w-[40px] h-[40px] flex items-center justify-center" aria-label="Facebook">
                <Facebook size={18} width={18} height={18} />
              </a>
              <a href="https://www.instagram.com/artistreeva" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white rounded-full transition-colors w-[40px] h-[40px] flex items-center justify-center" aria-label="Instagram">
                <Instagram size={18} width={18} height={18} />
              </a>
              <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white rounded-full px-3 h-[40px] flex items-center gap-1.5 text-sm font-semibold transition-colors citation-link">
                <Star className="text-yellow-400" size={15} width={15} height={15} /> 5.0 ({reviewCount})
              </a>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 h-[40px] rounded-full text-xs font-medium whitespace-nowrap">
                <ShieldCheck className="text-[#D4AF37]" size={16} width={16} height={16} />
                Licensed &amp; Fully Insured &middot; BBB A+
              </span>
            </div>
          </div>

          <FooterSection title="Quick Links">
            <ul>
              {QUICK_LINKS.map(([to, label]) => (
                <li key={to}><FooterLink to={to}>{label}</FooterLink></li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Service Areas">
            <ul>
              {SERVICE_AREAS.map(([to, label]) => (
                <li key={to}><FooterLink to={to}>{label}</FooterLink></li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="ART-icles">
            <ul>
              {CASE_STUDIES.map(([to, label]) => (
                <li key={to}><FooterLink to={to}>{label}</FooterLink></li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Contact">
            <ul className="space-y-4 text-gray-300 local-business-info">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] shrink-0 mt-0.5" size={20} width={20} height={20} />
                <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Serving Virginia Beach, Norfolk, Chesapeake, and Portsmouth</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#D4AF37] shrink-0" size={20} width={20} height={20} />
                <a href="tel:7573195131" onClick={() => { if (window.gtag_report_phone_click) window.gtag_report_phone_click(); }} className="hover:text-white transition-colors font-semibold">(757) 319-5131</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#D4AF37] shrink-0" size={20} width={20} height={20} />
                {/* The address is one unbreakable token wider than this column,
                    so it needs a forced break or it overflows — that is why the
                    original used break-all. `anywhere` does the same job but
                    only after normal break opportunities are exhausted. */}
                <a href="mailto:artistreeofvirginia@gmail.com" className="hover:text-white transition-colors [overflow-wrap:anywhere]">artistreeofvirginia@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#D4AF37] shrink-0" size={20} width={20} height={20} />
                <span>Open 24/7</span>
              </li>
              <li className="pt-1">
                <Link to="/testimonials" className="inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold hover:text-white transition-colors">
                  Reviews &amp; listings
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
          <p className="m-0">&copy; {currentYear} Art-is-Tree LLC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <button onClick={() => setIsModalOpen(true)} className="text-gray-300 hover:text-white transition-colors underline bg-transparent border-none cursor-pointer p-0 m-0">
              Manage Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
