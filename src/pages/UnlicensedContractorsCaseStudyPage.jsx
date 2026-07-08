

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';

const UnlicensedContractorsCaseStudyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Neighbor's Tree Damage & Virginia Law | Art-is-Tree LLC" 
        description="A real Virginia Beach case study: how Fancher v. Fagella, ANSI A300, and the right process turned a neighbor tree dispute into a permitted, professional job." 
      />

      <div className="pt-24 pb-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1B4D3E] hover:text-[#D4AF37] transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            &larr; Back to Case Studies
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Case Studies', path: '/case-studies' },
          { label: 'Unlicensed Contractors', path: '/case-studies/unlicensed-contractors' },
        ]} />
      </div>

      <main className="container mx-auto px-4 max-w-4xl py-12">
        <article className="prose prose-lg lg:prose-xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-gray-100">
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold !text-[#1B4D3E] mb-6 leading-tight">
              When Your Neighbor's Tree Damages Your Property: A Virginia Tree Law Case Study from Kempsville
            </h1>
          </header>

          <section className="space-y-6 text-gray-700 leading-relaxed">
            <p className="!text-gray-900">Every few months, Art-is-Tree LLC gets a call that starts something like this. A homeowner has a problem with a tree on their neighbor's property.</p>
            <p className="!text-gray-900">The legal reality in Virginia is more complicated than most homeowners realize, and the consequences of getting it wrong are far more serious than most tree companies are willing to admit.</p>

            <h2 className="text-2xl md:text-3xl font-playfair font-bold !text-[#1B4D3E] mt-12 mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">
              The Situation in Kempsville
            </h2>
            <p className="!text-gray-900">The job was in a residential neighborhood in Kempsville. Two adjoining property owners who, to put it plainly, did not get along. Our client called us because his neighbor's tree had grown unchecked for years and the consequences were no longer something he could ignore.</p>

            <h2 className="text-2xl md:text-3xl font-playfair font-bold !text-[#1B4D3E] mt-12 mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">
              Why Virginia Tree Law Makes This More Complicated Than It Looks
            </h2>
            <p className="!text-gray-900">What most homeowners and a surprising number of tree companies do not know is that Virginia has specific, well-developed law governing tree disputes between neighbors. The framework comes from a 2007 Virginia Supreme Court case called Fancher v. Fagella.</p>

            <h2 className="text-2xl md:text-3xl font-playfair font-bold !text-[#1B4D3E] mt-12 mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">
              The Self-Help Rule and Where It Stops
            </h2>
            <p className="!text-gray-900">Virginia law allows what is called self-help — the affected homeowner can prune encroaching branches and roots back to the property line at their own expense. But the law is very specific about how that self-help can be performed.</p>

            <h2 className="text-2xl md:text-3xl font-playfair font-bold !text-[#1B4D3E] mt-12 mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">
              What Most Tree Companies Would Have Done
            </h2>
            <p className="!text-gray-900">The other company that quoted this job before we did was prepared to show up, set up a ladder or bucket truck, lean into the neighbor's tree from the client's property, and cut every branch overhanging the roof back to the property line.</p>

            <h2 className="text-2xl md:text-3xl font-playfair font-bold !text-[#1B4D3E] mt-12 mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">
              What Art-is-Tree Did Instead
            </h2>
            <p className="!text-gray-900">The right answer to this situation is not what most homeowners want to hear at first, but it is what protects everyone — including the homeowner who hired us. We do not cut a neighbor's tree without written permission from the neighbor. Full stop.</p>

            <h2 className="text-2xl md:text-3xl font-playfair font-bold !text-[#1B4D3E] mt-12 mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">
              The Outcome
            </h2>
            <p className="!text-gray-900">We performed the pruning the right way. Crown reduction following <Link to="/services/tree-trimming" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">ANSI A300</Link> standards, every cut made at the branch collar, no flush cuts, no stub cuts, total live crown removal kept well under the 25 percent limit.</p>

            <h2 className="text-2xl md:text-3xl font-playfair font-bold !text-[#1B4D3E] mt-12 mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">
              The Takeaway for Homeowners
            </h2>
            <p className="!text-gray-900">If you have a tree dispute with a neighbor in Virginia Beach, Norfolk, Chesapeake, or anywhere in Hampton Roads, the most important thing to understand is that the homeowner who authorizes unauthorized tree work bears the liability — not just the contractor who performs it.</p>
            <p className="!text-gray-900">Art-is-Tree LLC handles neighbor tree disputes across Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk. We are licensed, insured, and we will tell you the truth about what Virginia law actually allows on your specific situation before any cutting begins. For a free assessment, call (757) 319-5131.</p>
          </section>
        </article>
      </main>
    </>
  );
};

export default UnlicensedContractorsCaseStudyPage;
