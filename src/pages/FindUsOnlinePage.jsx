import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink, Handshake, Building2, Star } from 'lucide-react';
import DirectoryLinksSchema from '@/components/seo/DirectoryLinksSchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import { COMPANY_INFO } from '@/constants/seoMetadata';

// Partner companies Art-is-Tree works with regularly. Each entry renders as a
// clickable tile linking to the partner's site. Add `logo` when the file is
// available; until then the tile shows a branded icon + the company name.
//   { name: 'Company Name', url: 'https://…', tagline: '…', logo: '/images/partners/company.png' }
const PARTNERS = [
  { name: 'Virginia Lawns', url: 'https://virginialawnsllc.com', tagline: 'Lawn care & landscaping — Virginia Beach' },
  { name: 'Merritt Stump Grinding', url: 'https://www.cityof.com/va/portsmouth/merritt-stump-grinding-357727', tagline: 'Stump grinding — Portsmouth, VA' },
  { name: 'Hartson Crane Service', url: 'https://www.facebook.com/people/Hartson-Crane-Service/61575475611389/', tagline: 'Crane services — Virginia Beach' },
  { name: 'Osborne Welding', url: 'https://www.facebook.com/p/Osborne-Welding-Inc-100035421654172/', tagline: 'Welding & steel fabrication — Portsmouth, VA' },
  { name: "Triton's Pressure Washing", url: 'https://tritonspressurewashing.com', tagline: 'Pressure & power washing — Virginia Beach' },
  { name: 'Alien Handyman', url: 'https://www.facebook.com/kyle.kiehnau/', tagline: 'Handyman services — Hampton Roads' },
  { name: 'Law Offices of Daniel J. Miller', url: 'https://www.legaldefense.com', tagline: 'Attorney — Virginia Beach' },
  { name: "Brinn's Lawn Care", url: 'https://www.facebook.com/brinnslawncare/', tagline: 'Lawn care — Hampton Roads' },
  { name: 'North Landing Firewood & Hauling', url: 'https://northlandingfirewood.com', tagline: 'Firewood, sawmilling & hauling — Virginia Beach' },
  { name: 'Sign Wizards', url: 'https://www.facebook.com/SignWizards.VA/', tagline: 'Signs & banners — Virginia Beach' },
];

// Compact "Listings" dropdown: the small company logo + a drop-bar that reveals
// every verified Art-is-Tree profile, each linking out to that listing.
const ListingsDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-full pl-2 pr-4 py-2 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      >
        <img src="/logo.png" alt="Art-is-Tree LLC" width="28" height="28" className="h-7 w-7 rounded-full object-contain bg-white" />
        <span className="font-bold text-[#1B4D3E] text-sm md:text-base">Listings</span>
        <ChevronDown className={`w-4 h-4 text-[#1B4D3E] transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-60 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 py-2 max-h-80 overflow-y-auto">
          {COMPANY_INFO.listings.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B4D3E] transition-colors"
            >
              <span className="font-medium flex items-center gap-2">
                {l.name}
                {l.rating && <span className="inline-flex items-center gap-0.5 text-xs text-gray-500">{l.rating}<Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" /></span>}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const FindUsOnlinePage = () => {
  return (
    <>
      <LocalSEOMeta
        pageTitle="Trusted Partners | Art-is-Tree Virginia Beach Tree Service"
        description="The local companies Art-is-Tree LLC trusts and works with across Virginia Beach & Hampton Roads — plus every verified listing where you can find and review us."
      />

      <DirectoryLinksSchema />

      <div className="bg-gray-50 min-h-screen">
        {/* HERO */}
        <header className="bg-[#1B4D3E] text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">
              <Handshake className="w-5 h-5" aria-hidden="true" /> Who We Work With
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-5 mt-0">
              Trusted Partners
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              The local companies we count on — and who count on us — to get tree work done right across Virginia Beach and Hampton Roads.
            </p>

            {/* First icon on the page: company logo + Listings dropdown */}
            <div className="mt-8 flex justify-center">
              <ListingsDropdown />
            </div>
          </div>
        </header>

        {/* HOW WE VALUE OUR PARTNERS */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 text-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-4 mt-0">
              We don’t do it alone
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Great tree work is a team effort. Over the years we’ve built real relationships with a
              handful of local companies we trust — landscapers, equipment and crane operators,
              excavators, and fellow tradespeople across Hampton Roads. When a job calls for a partner,
              these are the people we call, and they’re the ones who call us. We value them because they
              show up, they do honest work, and they hold the same standard for their customers that we
              hold for ours. If you’re working with any of the companies below, you’re in good hands.
            </p>
          </div>
        </section>

        {/* PARTNER COMPANIES */}
        <section className="container mx-auto px-4 max-w-6xl pb-16 md:pb-24">
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">The Companies</span>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mt-0">Companies we work with regularly</h2>
          </div>

          {PARTNERS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {PARTNERS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  title={p.name}
                  className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center justify-center gap-3 p-6 min-h-[160px] text-center"
                >
                  {p.logo ? (
                    <img src={p.logo} alt={`${p.name} logo`} className="max-h-16 w-auto object-contain" />
                  ) : (
                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0A2F24] text-[#D4AF37]">
                      <Building2 className="w-7 h-7" aria-hidden="true" />
                    </span>
                  )}
                  <span className="font-bold text-[#1B4D3E] text-base group-hover:text-[#D4AF37] transition-colors">{p.name}</span>
                  {p.tagline && <span className="text-gray-500 text-xs leading-snug">{p.tagline}</span>}
                </a>
              ))}
            </div>
          ) : (
            // Placeholder scaffold — real partner logos/links drop straight into
            // the PARTNERS array above and replace these tiles automatically.
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-3 p-6 min-h-[160px] text-center"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-300">
                    <Building2 className="w-7 h-7" aria-hidden="true" />
                  </span>
                  <span className="text-gray-400 text-sm font-medium">Partner logo</span>
                </div>
              ))}
            </div>
          )}

          <p className="text-center text-gray-500 text-sm mt-8">
            Want to partner with Art-is-Tree? <Link to="/contact" className="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Get in touch</Link>.
          </p>
        </section>
      </div>
    </>
  );
};

export default FindUsOnlinePage;
