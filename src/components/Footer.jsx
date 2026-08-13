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

// Collapsible bar on mobile, plain always-open column at md+. The button keeps
// its accessible semantics on mobile; at md+ the chevron is hidden and pointer
// events are dropped so the heading doesn't read as a control that does nothing.
const FooterSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 md:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-2 py-4 md:py-0 md:mb-5 md:pointer-events-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
      >
        <h3 className="font-playfair text-lg md:text-xl font-bold text-[#D4AF37] m-0">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform md:hidden ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div className={`${open ? 'block' : 'hidden'} md:block pb-5 md:pb-0`}>
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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-8 md:gap-y-10 mb-10">

          {/* Brand block — never collapses; it is the identity, not a link list. */}
          <div className="space-y-5 lg:col-span-2 pb-8 md:pb-0">
            <Link to="/" className="inline-flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-white/10 transition-colors w-fit" aria-label="Home">
              <img src="/logo.png" alt="Art-is-Tree LLC Logo" className="w-[42px] h-[36px] bg-white p-1 rounded-md" width="42" height="36" loading="lazy" decoding="async" />
              <span className="font-playfair text-2xl font-bold text-white tracking-tight">
                Art-is-Tree <span className="text-[#D4AF37] ml-1">LLC</span>
              </span>
            </Link>
            <p className="text-gray-300 font-inter leading-relaxed max-w-sm">
              Professional, fully licensed, and insured tree care experts serving Virginia Beach, Norfolk, Chesapeake, and Portsmouth. We bring safety, precision, and artistry to every job.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/artistreeva" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white rounded-full transition-colors w-[44px] h-[44px] flex items-center justify-center" aria-label="Facebook">
                <Facebook size={20} width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/artistreeva" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white rounded-full transition-colors w-[44px] h-[44px] flex items-center justify-center" aria-label="Instagram">
                <Instagram size={20} width={20} height={20} />
              </a>
              <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white rounded-full px-4 h-[44px] flex items-center gap-2 text-sm font-semibold transition-colors citation-link">
                <Star className="text-yellow-400" size={16} width={16} height={16} /> 5.0 ({reviewCount})
              </a>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium w-fit">
              <ShieldCheck className="text-[#D4AF37]" size={20} width={20} height={20} />
              Licensed &amp; Fully Insured &middot; BBB A+
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
                <a href="mailto:artistreeofvirginia@gmail.com" className="hover:text-white transition-colors break-all">artistreeofvirginia@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#D4AF37] shrink-0" size={20} width={20} height={20} />
                <span>Open 24/7</span>
              </li>
              <li className="pt-1">
                <Link to="/testimonials" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-white transition-colors">
                  Reviews &amp; where to find us &rarr;
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
