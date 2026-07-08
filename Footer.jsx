import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ShieldCheck, TreePine, Star } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { setIsModalOpen } = useCookieConsent();
  const logoUrl = "https://horizons-cdn.hostinger.com/1ec5599f-e2e5-4afa-b25c-06e1360f6589/d020f44d77156debf187e715175abef2.png";
  
  return (
    <footer className="bg-[#1B4D3E] text-white pt-16 pb-8 border-t-[10px] border-[#D4AF37] relative overflow-hidden contain-content footer-contain" role="contentinfo" style={{ contain: 'layout style paint' }}>
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3 w-[384px] h-[384px]">
        <TreePine width={384} height={384} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12 min-h-[300px]">
          
          <div className="space-y-6 lg:col-span-2 flex flex-col justify-start">
            <Link to="/" className="inline-flex items-center gap-3 bg-white/5 p-2 rounded-xl hover:bg-white/10 transition-colors w-fit h-[60px]" aria-label="Home">
              <picture className="h-[36px] w-[42px] block">
                <source srcSet={`${logoUrl}?format=webp&w=42 1x, ${logoUrl}?format=webp&w=84 2x`} type="image/webp" />
                <img src={`${logoUrl}?format=jpeg&w=42`} srcSet={`${logoUrl}?format=jpeg&w=42 1x, ${logoUrl}?format=jpeg&w=84 2x`} alt="Art-is-Tree LLC Logo" className="w-[42px] h-[36px] bg-white p-1 rounded-md" width="42" height="36" loading="lazy" decoding="async" />
              </picture>
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
              <li className="h-[24px]"><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Project Gallery</Link></li>
              <li className="h-[24px]"><Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Contact Us</Link></li>
            </ul>

            <h3 className="font-playfair text-xl font-bold mb-6 mt-8 text-[#D4AF37]">Case Studies</h3>
            <ul className="space-y-4">
              <li className="h-[24px]"><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>All Case Studies</Link></li>
              <li className="h-[24px]"><Link to="/case-studies/crane-safety" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Crane Safety</Link></li>
              <li className="h-[24px]"><Link to="/case-studies/chesapeake-bay-waterfront" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Chesapeake Bay</Link></li>
              <li className="h-[24px]"><Link to="/case-studies/disease-management" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Disease Management</Link></li>
              <li className="h-[24px]"><Link to="/case-studies/osha-compliance" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>OSHA Compliance</Link></li>
              <li className="h-[24px]"><Link to="/case-studies/property-value" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Property Value</Link></li>
              <li className="h-[24px]"><Link to="/case-studies/unlicensed-contractors" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Unlicensed Contractors</Link></li>
              <li className="h-[24px]"><Link to="/case-studies/spikeless-pruning" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group h-full"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity inline-block"></span>Spikeless Pruning</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-playfair text-xl font-bold mb-6 text-[#D4AF37] h-[28px]">Connect & Reviews</h3>
            <ul className="space-y-4">
              <li className="h-[24px]">
                <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  <Star className="text-yellow-400" size={16} width={16} height={16} />
                  Google 5.0 (134)
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.yelp.com/biz/art-is-tree-virginia-beach-5" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  Yelp Reviews
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc.htm" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  Angi Reviews
                </a>
              </li>
              <li className="h-[24px]">
                <a href="https://www.homeadvisor.com/rated.ArtisTreeLLC.html" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group citation-link h-full">
                  HomeAdvisor Reviews
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