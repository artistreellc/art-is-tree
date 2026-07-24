import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, DollarSign, CalendarClock, ArrowUpRight, ArrowRight, FileText, Download, Phone, CheckCircle2 } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Eyebrow, SectionHeading } from '@/components/design/Primitives';
import { FINANCING_APPLY_URL } from '@/components/Financing';

const ACORN_LOGO = '/images/acorn-finance-logo.png';
const OVERVIEW_IMG = '/images/acorn-finance-overview.png';
const OVERVIEW_PDF = '/acorn-finance-overview.pdf';

const ApplyButton = ({ children = 'Check Your Rate', className = '' }) => (
  <a
    href={FINANCING_APPLY_URL}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className={`inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c19b2e] text-[#0A2F24] font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${className}`}
  >
    {children} <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
  </a>
);

const BENEFITS = [
  { Icon: ShieldCheck, title: 'No credit-score impact', text: 'Checking your rate uses a soft credit pull, so seeing your pre-qualified offers never affects your score.' },
  { Icon: DollarSign, title: '$1,000 – $100,000', text: 'Financing amounts to fit anything from a single removal to a full property of tree work, with competitive APRs.' },
  { Icon: CalendarClock, title: 'Terms up to 20 years', text: 'Spread the cost into affordable monthly payments over a term that fits your budget.' },
];

const STEPS = [
  { n: 1, title: 'Check your rate', text: 'Click below to pre-qualify with Acorn Finance in minutes. It’s a soft credit check that does not affect your score, and you’ll see real offers from a network of lenders.' },
  { n: 2, title: 'Choose your offer', text: 'If you’re pre-qualified, pick the offer that works for you and finish the quick application directly with the lender for final approval.' },
  { n: 3, title: 'Get funded & get it done', text: 'Once approved, funds can arrive in as little as 24 hours. Use them to pay for your Art-is-Tree work — removal, trimming, stump grinding, storm cleanup, whatever your property needs.' },
];

const FinancingPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const description =
    'Understand your tree service financing options in Virginia Beach and Hampton Roads. Art-is-Tree LLC partners with Acorn Finance so you can get tree work done now and pay over time — check your rate with no impact to your credit score, borrow $1,000 to $100,000, and choose terms up to 20 years.';

  return (
    <>
      <LocalSEOMeta pageTitle="Tree Service Financing | Pay Over Time | Art-is-Tree LLC" description={description} />

      <div className="bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Financing', path: '/financing' },
          ]} />
        </div>

        {/* HERO */}
        <header className="relative isolate overflow-hidden bg-gradient-to-b from-[#0A2F24] via-[#11402F] to-[#0A2F24] text-white">
          <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl text-center">
            <Eyebrow className="mb-4">Understanding Financing</Eyebrow>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-5">
              Get your tree work done now. Pay over time.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
              Some tree work can’t wait — and it shouldn’t have to. We’ve partnered with <strong className="text-white">Acorn Finance</strong> so
              homeowners across Virginia Beach and Hampton Roads can break a project into affordable monthly payments,
              with <strong className="text-[#D4AF37]">no impact to your credit score</strong> to check your rate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ApplyButton />
              <img src={ACORN_LOGO} alt="Acorn Finance — our financing partner" width="180" height="54" className="h-9 w-auto bg-white rounded-md px-3 py-1.5" />
            </div>
            <p className="text-xs text-gray-300/80 mt-4">Financing provided through Acorn Finance partner lenders.</p>
          </div>
        </header>

        {/* BENEFITS */}
        <section className="container mx-auto px-4 max-w-5xl py-14 md:py-20">
          <SectionHeading eyebrow="Why it helps" title="Affordable payments, on your terms" align="center" />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {BENEFITS.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-[#D4AF37] shadow-sm p-6 text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A2F24] text-[#D4AF37] mb-4">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          {/* trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-10 opacity-90">
            <img src="/images/trustpilot-rating.png" alt="Acorn Finance Trustpilot rating 4.6 stars from 937 reviews" width="150" height="54" className="h-10 w-auto" />
            <img src="/images/bbb-accredited.png" alt="Acorn Finance BBB Accredited Business, A+ rating" width="150" height="72" className="h-12 w-auto" />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white border-y border-gray-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="Simple & secure" title="How financing works" align="center" />
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {STEPS.map(({ n, title, text }) => (
                <div key={n} className="relative bg-[#FAF9F6] rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 rounded-full bg-[#0A2F24] text-[#D4AF37] font-playfair font-bold text-lg flex items-center justify-center mb-4">{n}</div>
                  <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-2">{title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <ApplyButton />
            </div>
          </div>
        </section>

        {/* THE OVERVIEW (focal point) */}
        <section className="container mx-auto px-4 max-w-5xl py-14 md:py-20">
          <SectionHeading eyebrow="The details" title="The Acorn Finance overview" align="center" />
          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-10">
            Here’s the one-page overview straight from our financing partner. Take a look, or download it to keep.
          </p>
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <a
              href={OVERVIEW_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-3 block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Open the Acorn Finance overview PDF"
            >
              <img src={OVERVIEW_IMG} alt="Acorn Finance customer overview — keep your budget flexible, no credit-score impact, loans $1,000 to $100,000, terms 2 to 20 years, funded in as little as 24 hours" width="1002" height="1296" className="w-full h-auto" />
            </a>
            <div className="lg:col-span-2">
              <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E] mb-4">Keep your budget flexible</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                {['Search offers from a network of top lenders','No impact to your credit score to check','Loans from $1,000 to $100,000','Terms from 2 to 20 years','Funded in as little as 24 hours after approval'].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#2A7A5E] flex-shrink-0 mt-0.5" aria-hidden="true" /> <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={OVERVIEW_PDF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] hover:bg-[#143a2f] text-white font-bold px-5 py-3 rounded-xl transition-colors">
                  <FileText className="w-4 h-4" aria-hidden="true" /> View overview
                </a>
                <a href={OVERVIEW_PDF} download className="inline-flex items-center justify-center gap-2 border border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white font-bold px-5 py-3 rounded-xl transition-colors">
                  <Download className="w-4 h-4" aria-hidden="true" /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL CONTEXT */}
        <section className="bg-[#0A2F24] text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading eyebrow="Virginia Beach & Hampton Roads" title="Financing that fits real tree work" light />
            <div className="mt-6 space-y-5 text-lg leading-relaxed [&_p]:text-gray-100">
              <p>
                A big removal, a crane job over the house, or a full property cleanup after a storm can be a real expense — and coastal
                Virginia gives us plenty of all three. Financing lets you handle the work that actually needs doing now, safely and to
                the ANSI A300 and Z133 standards, and pay for it in monthly payments instead of one lump sum.
              </p>
              <p>
                It pairs naturally with the money-saving options in our{' '}
                <Link to="/case-studies/affordable-tree-work" className="text-[#D4AF37] font-semibold underline hover:text-white">affordable tree work guide</Link>:
                phase the project, keep the wood and chips, skip the stump grinding — then finance what’s left. Every estimate is still
                free and written, and our 5% discount for military, first responders, and seniors always applies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12 text-center">
            <Eyebrow className="mb-3">Ready when you are</Eyebrow>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-4 mt-0">See what you pre-qualify for</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              It takes a few minutes and won’t affect your credit score. Prefer to talk it through first? Call us and we’ll walk you
              through your options.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ApplyButton />
              <a href="tel:+17573195131" className="inline-flex items-center gap-2 text-[#1B4D3E] font-bold text-lg hover:text-[#D4AF37] transition-colors">
                <Phone className="w-5 h-5" aria-hidden="true" /> (757) 319-5131
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-8 max-w-2xl mx-auto">
              All loans and financial products are subject to credit review and approval by Acorn Finance partner lenders. Prequalifications
              use a soft credit pull that does not impact your credit score; if you proceed with an offer, the lender may conduct a hard
              credit pull. Rates, terms, and funding times vary by lender and are not set by Art-is-Tree LLC.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancingPage;
