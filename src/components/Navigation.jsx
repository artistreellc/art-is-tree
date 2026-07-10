import React, { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Instagram, Facebook, Menu, X, ShieldCheck, Terminal, Star, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useThrottle } from '@/hooks/useThrottle';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'All Services', path: '/services' },
      { name: 'Tree Removal', path: '/services/tree-removal' },
      { name: 'Tree Trimming', path: '/services/tree-trimming' },
      { name: 'Stump Grinding', path: '/services/stump-grinding' },
      { name: 'Emergency Service', path: '/services/emergency-tree-service' },
      { name: 'Crane Removal', path: '/services/crane-removal' },
      { name: 'Land Clearing', path: '/services/land-clearing' },
    ]
  },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  {
    name: 'Service Areas',
    path: '/service-areas',
    dropdown: [
      { name: 'All Service Areas', path: '/service-areas' },
      { name: 'Virginia Beach', path: '/service-areas/virginia-beach' },
      { name: 'Norfolk', path: '/service-areas/norfolk' },
      { name: 'Chesapeake', path: '/service-areas/chesapeake' },
      { name: 'Portsmouth', path: '/service-areas/portsmouth' },
      { name: 'Suffolk', path: '/service-areas/suffolk' },
    ]
  },
  {
    name: 'Case Studies',
    path: '/case-studies',
    dropdown: [
      { name: 'All Case Studies', path: '/case-studies' },
      { name: 'Crane Safety', path: '/case-studies/crane-safety' },
      { name: 'Chesapeake Bay', path: '/case-studies/chesapeake-bay-preservation-act' },
      { name: 'Disease Management', path: '/case-studies/disease-management' },
      { name: 'OSHA Compliance', path: '/case-studies/osha-compliance' },
      { name: 'Property Value', path: '/case-studies/property-value' },
      { name: 'Unlicensed Contractors', path: '/case-studies/unlicensed-contractors' },
      { name: 'Spikeless Pruning', path: '/case-studies/spikeless-pruning' },
    ]
  },
  { name: 'Directories', path: '/find-us-online' },
  { name: '🚨 Emergency', path: '/emergency' },
];

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";
const FACEBOOK_URL = "https://www.facebook.com/artistreeva";
const INSTAGRAM_URL = "https://www.instagram.com/artistreeva";

const NavLink = memo(({ link, isActive }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  if (!link.dropdown) {
    return (
      <Link
        to={link.path}
        className={`group relative py-2 px-1 ${link.path === '/emergency' ? 'text-red-400 font-black' : ''}`}
      >
        <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
          isActive ? 'text-yellow-200' : link.path === '/emergency' ? 'text-red-400 hover:text-red-300' : 'text-yellow-400 hover:text-yellow-200'
        }`}>
          {link.name}
        </span>
        <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
          isActive ? 'bg-yellow-200 scale-x-100' : 'bg-yellow-400 scale-x-0 group-hover:scale-x-100'
        }`} />
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative py-2 px-1" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
          isActive ? 'text-yellow-200' : 'text-yellow-400 hover:text-yellow-200'
        }`}
      >
        {link.name}
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-[#1B4D3E] border border-white/20 rounded-xl shadow-2xl z-[100] py-2 overflow-hidden">
          {link.dropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/10 hover:text-yellow-300 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});
NavLink.displayName = 'NavLink';

const MobileMenuItem = memo(({ link, isActive, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  if (!link.dropdown) {
    return (
      <Link
        to={link.path}
        onClick={onClick}
        className={`block px-5 py-4 rounded-lg text-lg font-bold uppercase tracking-wider transition-all duration-200 min-h-[56px] flex items-center ${
          link.path === '/emergency' ? 'text-red-300 bg-red-900/20' :
          isActive ? 'bg-white/10 text-yellow-200 pl-7 border-l-4 border-yellow-200' :
          'text-white hover:bg-white/5 hover:text-yellow-200'
        }`}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(prev => !prev)}
        className={`w-full text-left px-5 py-4 rounded-lg text-lg font-bold uppercase tracking-wider transition-all duration-200 min-h-[56px] flex items-center justify-between ${
          isActive ? 'bg-white/10 text-yellow-200' : 'text-white hover:bg-white/5'
        }`}
      >
        {link.name}
        <svg className={`w-5 h-5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="ml-4 mt-1 mb-2 border-l-2 border-yellow-400/30 pl-4 flex flex-col gap-1">
          {link.dropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClick}
              className="block py-2.5 text-base text-gray-300 hover:text-yellow-300 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});
MobileMenuItem.displayName = 'MobileMenuItem';

const Navigation = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const { user } = useAuth();
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  const isActive = useCallback((path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, handleClickOutside]);

  const handleResize = useThrottle(useCallback(() => {
    // Menu now serves all screen sizes; no auto-close on resize.
  }, []), 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      if (isMobileMenuOpen || y < 120) {
        setNavHidden(false);
      } else if (y > lastScrollY.current + 6) {
        setNavHidden(true);   // scrolling down -> hide
      } else if (y < lastScrollY.current - 6) {
        setNavHidden(false);  // scrolling up -> show
      }
      lastScrollY.current = y;
    };
    // Coalesce scroll events to one state update per animation frame so
    // scrolling stays smooth and doesn't inflate INP.
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const adminLinks = useMemo(() => {
    if (!user) return null;
    return (
      <>
        <Link to="/admin/reviews" onClick={closeMobileMenu} className="block px-5 py-4 rounded-lg text-lg font-bold uppercase tracking-wider transition-all duration-200 min-h-[56px] flex items-center text-red-400 hover:bg-white/5">
          <ShieldCheck className="w-5 h-5 mr-2" /> Manage Reviews
        </Link>
        <Link to="/admin/debug-places" onClick={closeMobileMenu} className="block px-5 py-4 rounded-lg text-lg font-bold uppercase tracking-wider transition-all duration-200 min-h-[56px] flex items-center text-blue-400 hover:bg-white/5">
          <Terminal className="w-5 h-5 mr-2" /> Debug Google API
        </Link>
      </>
    );
  }, [user, closeMobileMenu]);

  const logoUrl = "/logo.png";

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1B4D3E] shadow-xl border-b border-white/10 transition-transform duration-300 ease-in-out" style={{ transform: navHidden ? 'translateY(-100%)' : 'translateY(0)' }} ref={menuRef} aria-label="Main Navigation">
      {/* Utility bar: location, hours, credentials, socials */}
      <div className="bg-[#153e32] border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-xs md:text-[13px]">
            <div className="flex items-center gap-3 md:gap-5 text-gray-200 min-w-0">
              <span className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="truncate"><span className="hidden sm:inline">Serving </span>Virginia Beach &amp; Hampton Roads</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5 shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> 24/7 Emergency Service
              </span>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              <span className="hidden lg:flex items-center gap-1.5 text-gray-200 mr-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Licensed &amp; Insured
              </span>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Art-is-Tree on Facebook" className="p-1.5 rounded text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Art-is-Tree on Instagram" className="p-1.5 rounded text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" aria-label="Art-is-Tree 5-star reviews on Google" className="p-1.5 rounded text-[#D4AF37] hover:bg-white/10 transition-colors">
                <Star className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between min-h-[56px]">
          <Link to="/" className="flex-shrink-0 relative z-50 touch-target" aria-label="Go to Homepage">
            <div className="bg-white p-1.5 md:p-2 rounded-lg shadow-md flex items-center gap-2">
              <picture>
                <source srcSet={`${logoUrl}?format=webp&w=42 1x, ${logoUrl}?format=webp&w=84 2x`} type="image/webp" />
                <img src={`${logoUrl}?format=jpeg&w=42`} srcSet={`${logoUrl}?format=jpeg&w=42 1x, ${logoUrl}?format=jpeg&w=84 2x`} alt="Art-is-Tree LLC Logo" className="w-auto" width="42" height="36" style={{ height: '36px', width: 'auto' }} fetchPriority="high" loading="eager" decoding="sync" />
              </picture>
              <span className="font-playfair text-xl font-bold text-[#1B4D3E] tracking-tight hidden sm:block">
                Art-is-Tree <span className="text-[#D4AF37]">LLC</span>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
            <a 
              href={GOOGLE_LISTING_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Read our 134 5-star reviews on Google"
            >
              <div className="flex text-[#D4AF37]">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              </div>
              <span className="text-white font-bold text-sm md:text-base tracking-wide">5.0 stars, 134 reviews</span>
            </a>

            <Button className="bg-yellow-400 text-[#1B4D3E] hover:bg-yellow-300 font-bold border-none px-3 md:px-5 shadow-md text-sm md:text-base h-10 md:h-11" size="default" asChild>
              <a href="tel:7573195131" onClick={() => { if (window.gtag_report_phone_click) window.gtag_report_phone_click(); }} aria-label="Call Art-is-Tree LLC">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Call Now: 757-319-5131</span>
                <span className="sm:hidden font-bold">Call Now</span>
              </a>
            </Button>
            
            <button onClick={toggleMobileMenu} className="text-white p-2 focus:outline-none hover:bg-white/10 rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"} aria-expanded={isMobileMenuOpen}>
               {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 mt-px w-full max-w-sm bg-[#153e32] border-l border-b border-white/10 rounded-bl-2xl shadow-2xl overflow-hidden z-[60] animate-nav-drop">
             <div className="flex flex-col p-4 space-y-2 pb-6 max-h-[calc(100vh-90px)] overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <MobileMenuItem key={link.path} link={link} isActive={isActive(link.path)} onClick={closeMobileMenu} />
                ))}
                {adminLinks}
                <div className="pt-6 mt-4 border-t border-white/10 flex flex-col items-center gap-4 px-4">
                   <a 
                     href={GOOGLE_LISTING_URL} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold h-12 rounded-md transition-colors border border-white/10"
                   >
                     <div className="flex text-[#D4AF37]">
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                     </div>
                     <span className="tracking-wide">5.0 stars, 134 reviews</span>
                   </a>

                   <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#1B4D3E] font-bold h-12 text-lg" asChild>
                     <a href="tel:7573195131" onClick={() => { if (window.gtag_report_phone_click) window.gtag_report_phone_click(); }}>Call Now: (757) 319-5131</a>
                   </Button>
                  <a href="https://www.instagram.com/artistreeva" target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-400 font-bold uppercase text-sm tracking-wider min-h-[44px]">
                    <Instagram className="w-6 h-6 mr-2" /> Follow on Instagram
                  </a>
                </div>
             </div>
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;