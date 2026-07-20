import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ShieldCheck, TreePine, Star } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { useReviewStats } from '@/hooks/useReviewStats';

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";

const Footer = () => {
  const { count: reviewCount } = useReviewStats();
  const currentYear = new Date().getFullYear();
  const { setIsModalOpen } = useCookieConsent();
  const logoUrl = "/logo.png";
  
  return (
    <footer className="bg-[#1B4D3E] text-white pt-16 pb-8 border-t-[10px] border-[#D4AF37] relative overflow-hidden contain-content footer-contain" role="contentinfo" style={{ contain: 'layout style paint' }}>
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3 w-[384px] h-[384px]">
        <TreePine width={384} height={384} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 lg:gap-8 mb-12">

          <div className="space-y-6 lg:col-span-2 flex flex-col justify-start">
            <Link to="/" className="inline-flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-white/10 transition-colors w-fit h-[60px]" aria-label="Home">
              <img src={logoUrl} alt="Art-is-Tree LLC Logo" className="w-[42px] h-[36px] bg-white p-1 rounded-md" width="42" height="36" loading="lazy" decoding="async" />
              <span className="font-playfair text-2xl font-bold text-white tracking-tight h-[32px] flex items-center">
                Art-is-Tree <span className="text-[#D4AF37] ml-1">LLC</span>
              </span>
            </Link>
            <p className="text-gray-300 font-inter leading-relaxed max-w-sm min-h-[80px]">
              Professional, fully licensed, and insured tree care experts serving Virginia Beach, Norfolk, and Chesapeake. We bring safety, precision, and artistry to every job.
            </p>
            <div className="flex gap-4 h-[44px]">
              <a href="https://www.facebook.com/artistreeva" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 w-[44px] h-[44px] flex items-center justify-center" aria-label="Facebook">
                <Facebook size={20} width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/artistreeva" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#D4AF37] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 w-[44px] h-[44px] flex items-center justify-center" aria-label="Instagram">
                <Instagram size={20} width={20} height={20} />
              </a>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-medium w-fit h-[40px]">
              <ShieldCheck className="text-[#D4AF37]" size={20} width={20} height={20} />
              Licensed & Fully Insured
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl font-bold mb-6 text-[#D4AF37] h-[28px]">Quick Links</h3>
            <ul className="space-y-4">
              <li className="h-[24px]"><Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>About Us</Link></li>
              <li className="h-[24px]"><Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Services</Link></li>
              <li className="h-[24px]"><Link to="/emergency" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>24/7 Emergency Service</Link></li>
              <li className="h-[24px]"><Link to="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>FAQ</Link></li>
              <li className="h-[24px]"><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Project Gallery</Link></li>
              <li className="h-[24px]"><Link to="/find-us-online" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Find Us Online</Link></li>
              <li className="h-[24px]"><Link to="/partners" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Partners</Link></li>
              <li className="h-[24px]"><Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Contact Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl font-bold mb-6 text-[#D4AF37] h-[28px]">Service Areas</h3>
            <ul className="space-y-4">
              <li className="h-[24px]"><Link to="/service-areas/virginia-beach" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Virginia Beach</Link></li>
              <li className="h-[24px]"><Link to="/service-areas/norfolk" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Norfolk</Link></li>
              <li className="h-[24px]"><Link to="/service-areas/chesapeake" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Chesapeake</Link></li>
              <li className="h-[24px]"><Link to="/service-areas/portsmouth" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Portsmouth</Link></li>
              <li className="h-[24px]"><Link to="/service-areas/suffolk" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Suffolk</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl font-bold mb-6 text-[#D4AF37] h-[28px]">Case Studies</h3>
            {/* Kept tight on purpose: the full list lives in the header dropdown
                and on /case-studies — the footer features the evergreen four. */}
            <ul className="space-y-4">
              {[
                ['/case-studies', 'All Case Studies'],
                ['/case-studies/affordable-tree-work', 'Affordable Tree Work'],
                ['/case-studies/storm-damage-mitigation', 'Storm Damage'],
                ['/case-studies/virginia-tree-law', 'Virginia Tree Law'],
                ['/case-studies/osha-compliance', 'OSHA Safety'],
              ].map(([to, label]) => (
                <li key={to} className="leading-snug"><Link to={to} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block flex-shrink-0"></span>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl font-bold mb-6 text-[#D4AF37] h-[28px]">Connect & Reviews</h3>
            <ul className="space-y-4">
              <li className="h-[24px]">
                <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  <Star className="text-yellow-400" size={16} width={16} height={16} />
                  Google 5.0 ({reviewCount})
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.yelp.com/biz/art-is-tree-virginia-beach-3" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  Yelp Reviews
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc-reviews-10302177.htm" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  Angi Reviews
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.homeadvisor.com/rated.ArtistreeOfVirginia.118108285.html" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  HomeAdvisor Reviews
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.bbb.org/us/va/virginia-beach/profile/tree-service/art-is-tree-llc-0583-90336149" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  BBB A+ Profile
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.linkedin.com/company/artistreevabeach" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  LinkedIn
                </a>
              </li>
              <li className="h-[24px]">
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>
                  All Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl font-bold mb-6 text-[#D4AF37] h-[28px]">Contact Info</h3>
            <ul className="space-y-5 text-gray-300 local-business-info">
              <li className="flex items-start gap-3 group min-h-[48px]">
                <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={20} width={20} height={20} />
                <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors">Serving Virginia Beach,<br />Chesapeake, and Norfolk</a>
              </li>
              <li className="flex items-center gap-3 group min-h-[24px]">
                <Phone className="text-[#D4AF37] shrink-0" size={20} width={20} height={20} />
                <a href="tel:7573195131" onClick={() => { if (window.gtag_report_phone_click) window.gtag_report_phone_click(); }} className="hover:text-white transition-colors">(757) 319-5131</a>
              </li>
              <li className="flex items-center gap-3 group min-h-[24px]">
                <Mail className="text-[#D4AF37] shrink-0" size={20} width={20} height={20} />
                <a href="mailto:artistreeofvirginia@gmail.com" className="hover:text-white transition-colors break-all">artistreeofvirginia@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 group min-h-[48px]">
                <Clock className="text-[#D4AF37] shrink-0 mt-1" size={20} width={20} height={20} />
                <span className="group-hover:text-white transition-colors">Open 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm min-h-[40px]">
          <p className="h-[20px]">&copy; {currentYear} Art-is-Tree LLC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 min-h-[24px]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <button onClick={() => setIsModalOpen(true)} className="text-gray-400 hover:text-white transition-colors underline bg-transparent border-none cursor-pointer p-0 m-0 h-auto">
              Manage Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
