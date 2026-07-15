import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import GoogleReviewsDisplay from '@/components/GoogleReviewsDisplay';
import GoogleMap from '@/components/GoogleMap';
import { Phone, MapPin, Award, ShieldCheck, TreePine, BadgeCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import Cite from '@/components/Cite';
import { COMPANY_INFO } from '@/constants/seoMetadata';
import { useReviewStats } from '@/hooks/useReviewStats';

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";

const AboutPage = () => {
  const { count: reviewCount, rating: reviewRating } = useReviewStats();
  return (
    <>
      <LocalSEOMeta 
        pageTitle="About Art-is-Tree LLC | Tree Service Virginia Beach" 
        description="Family-owned tree service in Virginia Beach with 15+ years experience. Licensed, insured, BBB A+, ISA member, and working to ANSI A300 &amp; Z133 standards, serving all of Hampton Roads, VA." 
      />

      <LocalBusinessSchema />

      <div className="pt-0 bg-gray-50">
        <header className="bg-gradient-to-r from-[#1B4D3E] to-[#2A7A5E] py-20 md:py-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/virginia-beach-winter-storm-cleanup.webp')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
              About Art-is-Tree LLC
            </h1>
            <p className="font-inter text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light drop-shadow">
              Elevating the Standard of Arboriculture in Hampton Roads
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
               <Button className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg shadow-lg" asChild>
                 <a href="tel:7573195131">
                   <Phone className="w-5 h-5 mr-2" />
                   Call Us: (757) 319-5131
                 </a>
               </Button>
               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B4D3E] font-bold py-6 px-8 text-lg bg-transparent shadow-lg" asChild>
                 <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer">
                   {reviewRating.toFixed(1)} ★ {reviewCount} reviews <ExternalLink className="ml-2 w-4 h-4" />
                 </a>
               </Button>
            </div>
          </div>
        </header>
        
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
             <div className="prose prose-lg text-gray-700 leading-relaxed mx-auto max-w-none space-y-8">
               
               <div className="flex flex-wrap gap-4 mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 justify-center">
                 <div className="flex items-center gap-2 font-semibold text-[#1B4D3E]"><Award className="text-[#D4AF37]"/> 15+ Years Experience</div>
                 <div className="flex items-center gap-2 font-semibold text-[#1B4D3E]"><ShieldCheck className="text-[#D4AF37]"/> Licensed & Insured</div>
                 <div className="flex items-center gap-2 font-semibold text-[#1B4D3E]"><BadgeCheck className="text-[#D4AF37]"/> BBB A+ Accredited<Cite href={COMPANY_INFO.socials.bbb} label="BBB" /></div>
                 <div className="flex items-center gap-2 font-semibold text-[#1B4D3E]"><TreePine className="text-[#D4AF37]"/> ISA Member<Cite href="https://www.isa-arbor.com/" label="ISA" /></div>
                 <div className="flex items-center gap-2 font-semibold text-[#1B4D3E]"><TreePine className="text-[#D4AF37]"/> ANSI A300 &amp; Z133 Standards</div>
               </div>

               <h2 className="text-3xl font-bold text-[#1B4D3E] font-playfair mb-6">Our History and Foundation</h2>
               <p>
                 Mike Campbell grew up in Virginia Beach and has always felt a strong connection to the local environment. For 15 years he climbed trees across Hampton Roads, tackling increasingly complex challenges and refining his technique. He knows firsthand that safely removing 25-foot sections from a 60-foot oak requires not just strength, but calculated precision and deep expertise.
               </p>
               
               <h2 className="text-3xl font-bold text-[#1B4D3E] font-playfair mt-12 mb-6">Uncompromising Professionalism & Credentials</h2>
               <p>
                 We founded this company to provide a truly <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">professional standards</Link> tree care service. Our commitment is to the health of your trees and the safety of your property. We never compromise on safety protocols, ensuring that every job is executed flawlessly while protecting our crew and your home.
               </p>

               <h2 className="text-3xl font-bold text-[#1B4D3E] font-playfair mt-12 mb-6">Comprehensive Residential and Commercial Services</h2>
               <p>
                 Whether we are pruning ornamental trees, grinding stubborn stumps, or safely bringing down massive pines, our approach remains the same: efficient, clean, and professional work. We are fully equipped for any scale of job. Call (757) 319-5131 for a free estimate or use the contact form and we'll schedule quickly.
               </p>
             </div>
          </div>
        </section>

        <AboutSection />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">
                 Where We Operate
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                 Serving Virginia Beach, Norfolk, Chesapeake, and the rest of Hampton Roads.
               </p>
            </div>
            <GoogleMap />
          </div>
        </section>

        <WhyChooseSection title="Why Trust Art-is-Tree LLC?" />
        <GoogleReviewsDisplay />
      </div>
    </>
  );
};

export default AboutPage;