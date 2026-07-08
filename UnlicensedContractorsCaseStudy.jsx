import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ShieldAlert, MapPin, ArrowRight, Scale, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CaseStudySchema from '@/components/seo/CaseStudySchema';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const UnlicensedContractorsCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = "Risks of Unlicensed Tree Contractors";
  const description = "Case study: Dangers of hiring unlicensed contractors. Why professional certification and licensing matter for tree safety.";

  return (
    <>
      <LocalSEOMeta pageTitle="Unlicensed Contractors | Tree Service Case Study | Art-is-Tree LLC" description="Warning: hidden dangers of hiring unlicensed tree services in Virginia Beach. Learn to protect your property and avoid costly mistakes with a licensed, insured tree service." />

      <CaseStudySchema 
        title={title} 
        description={description} 
        imageUrl="" 
        url="/case-studies/unlicensed-contractors" 
      />

      <div className="min-h-screen bg-gray-50 pb-12">
        <div className="container mx-auto px-4 mb-6 pt-6">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Unlicensed Contractors', path: '/case-studies/unlicensed-contractors' },
          ]} />
        </div>

        <header className="container mx-auto px-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-900 to-slate-900 p-8 md:p-16 flex flex-col justify-center items-start min-h-[40vh]">
            <span className="inline-block px-4 py-1 bg-red-500 text-white font-bold rounded-full text-sm uppercase tracking-wider mb-4 flex items-center gap-2 w-max">
              <AlertTriangle className="w-4 h-4" /> Consumer Protection Alert
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight mt-0">
              {title}
            </h1>
            <div className="flex items-center text-red-100 gap-4 mt-2">
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-1" /> Virginia Beach & Norfolk</span>
              <span className="flex items-center"><ShieldAlert className="w-5 h-5 mr-1" /> Liability Awareness</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg lg:prose-xl mx-auto">
            
            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-0">The Challenge: The True Cost of a "Cheap Quote"</h2>
            <p>
              Following a severe coastal storm in Norfolk, homeowners were inundated with door-to-door offers for cheap, immediate tree removal. One homeowner, eager to clear a massive downed pine from their driveway, hired an unvetted crew working out of an unmarked truck. The decision quickly turned disastrous.
            </p>
            <p>
              Without an understanding of complex rigging or tension physics, the untrained crew attempted to cut the suspended trunk. The tree violently snapped back, crushing a portion of the homeowner's garage roof and severely injuring one of the workers. Because the crew was an unlicensed and uninsured "cash-only" operation, they immediately abandoned the site, leaving the homeowner legally and financially responsible for both the property damage and the worker's medical bills.
            </p>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-12">The Solution: Educating on Professional Licensing</h2>
            <p>
              Art-is-Tree LLC was subsequently called to remediate the disaster, safely extracting the remaining timber from the crushed roof. This unfortunate scenario highlights a critical reality in Hampton Roads: tree work is incredibly dangerous, and contractor licensing regulations exist to protect you, the consumer.
            </p>
            
            <div className="bg-red-50 p-8 rounded-xl shadow-md border border-red-100 my-8">
              <h3 className="font-playfair text-2xl font-bold text-red-900 mb-4 flex items-center mt-0">
                <Scale className="w-6 h-6 mr-2 text-red-700" /> Virginia Liability & Insurance Reality
              </h3>
              <p className="text-red-800 text-base mb-4">
                If an uninsured worker is injured on your property, your homeowner's insurance may refuse to cover the claim, and the injured party can sue you directly for medical expenses and lost wages.
              </p>
              <ul className="list-disc pl-5 text-red-800 space-y-2 text-base">
                <li><strong>General Liability Insurance:</strong> Protects your property if the contractor damages your house, fence, or landscaping. Unlicensed crews do not carry this.</li>
                <li><strong>Workers' Compensation:</strong> Crucial in tree care. It covers the medical costs if a climber falls or is injured by equipment.</li>
                <li><strong>Business Licensing:</strong> Ensures the company is registered, traceable, and accountable under Virginia regulations.</li>
              </ul>
            </div>

            <div className="my-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-4">
                <div className="bg-gray-100 px-3 py-1 rounded text-sm font-bold text-[#1B4D3E] inline-block mb-2">
                  Verified Professionals
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E] mt-0">Professional Credentials Documentation</h3>
                <p className="text-gray-600 text-base">
                  A licensed tree service provider will gladly provide a Certificate of Insurance (COI) directly from their insurance broker *before* any work begins. 
                </p>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <FileText className="text-[#1B4D3E] w-8 h-8 shrink-0" />
                  <span className="text-base font-semibold text-gray-700">Always verify the policy is active and covers Tree Pruning/Removal specifically.</span>
                </div>
              </div>
            </div>

            <h2 className="text-[#1B4D3E] font-playfair border-b-2 border-[#D4AF37] pb-2 inline-block mt-8">The Results: Zero Liability, Peace of Mind</h2>
            <p>
              By hiring a professional tree care company, homeowners guarantee that their property is shielded by multi-million dollar liability policies and comprehensive workers' compensation. Art-is-Tree LLC was able to safely complete the botched job, using specialized crane equipment to lift the tree off the garage without causing further structural damage.
            </p>
            <p>
              The difference between a cheap quote and a professional estimate is the cost of insurance, training, and legitimate equipment. When you hire licensed tree care professionals, you aren't just paying for tree removal—you are purchasing absolute peace of mind.
            </p>

            <div className="mt-16 bg-slate-900 text-white p-8 md:p-12 rounded-2xl text-center shadow-2xl">
              <ShieldAlert className="w-16 h-16 mx-auto text-red-500 mb-6" />
              <h3 className="font-playfair text-3xl font-bold mb-4 text-white mt-0">Demand Proof of Insurance</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Protect your most valuable asset. Contact us for fully licensed, insured, and highly-trained tree care services in Virginia Beach and Norfolk.
              </p>
              <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-6 rounded-xl font-bold transition-all shadow-md border-none">
                <Link to="/contact">Get a Verified Professional Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </main>
      </div>

      <RelatedCaseStudies currentPath="/case-studies/unlicensed-contractors" />
    </>
  );
};

export default UnlicensedContractorsCaseStudy;