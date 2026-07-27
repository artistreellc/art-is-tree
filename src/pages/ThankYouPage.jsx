import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta';

// Post-submit confirmation page. Reached via the FormSubmit `_next` fallback
// (non-AJAX path); the AJAX form shows an in-page success state instead.
// noindex — this is a conversion confirmation URL, not a discoverable page.
const ThankYouPage = () => {
  return (
    <>
      <LocalSEOMeta
        pageTitle="Thank You | Art-is-Tree LLC"
        description="Thanks for contacting Art-is-Tree LLC. We've received your request and will get back to you within 24 hours."
        noindex
      />
      <section className="bg-gray-50 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 max-w-2xl py-16 md:py-24 text-center">
          <CheckCircle className="w-16 h-16 text-[#2A7A5E] mx-auto mb-6" />
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">
            Thank you — your request is in.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We've received your estimate request and a member of the Art-is-Tree
            team will get back to you within 24 hours during business days. For
            anything urgent, call us directly and you'll reach a person, not a machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7573195131"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-3 px-8 rounded-full text-lg shadow-lg"
            >
              <Phone className="w-5 h-5" /> (757) 319-5131
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] text-white hover:bg-[#153d32] font-semibold py-3 px-8 rounded-full text-lg"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
