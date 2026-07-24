import React from 'react';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <LocalSEOMeta pageTitle="Terms and Conditions | Art-is-Tree LLC" description="Review Art-is-Tree LLC service terms and conditions. Clear policies on estimates, safety, liability, and cancellation for Virginia Beach tree services." />

        <header>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#1B4D3E] mb-8 mt-0 text-center">Terms and Conditions</h1>
        </header>
        
        <div className="prose prose-lg text-gray-700 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <p><strong>Last Updated: July 24, 2026</strong></p>
          
          <p>
            Welcome to Art-is-Tree LLC. By accessing our website, requesting a quote, or engaging our professional tree care services, you agree to be bound by the following Terms and Conditions. Please read these terms carefully before proceeding with any service agreements.
          </p>

          <h2 className="mt-8 mb-4">1. Service Description</h2>
          <p>
            We provide a comprehensive range of arboricultural services to residential and commercial clients in Virginia Beach, Norfolk, Chesapeake, and surrounding areas. Our services include, but are not limited to, tree removal, tree trimming and pruning, stump grinding, crane-assisted hazard removal, and 24/7 emergency storm response. All services are performed by or under the supervision of trained professionals in accordance with industry standards (such as ANSI A300) to ensure the health of your trees and the safety of your property.
          </p>

          <h2 className="mt-8 mb-4">2. User Responsibilities</h2>
          <p>
            As a client, you are responsible for ensuring that we have clear, unobstructed access to the work site on the scheduled service date. You must identify and accurately communicate property lines, property boundaries, and the location of any underground utilities, sprinkler systems, or invisible fences prior to the commencement of work. We rely on your representations regarding property ownership; by authorizing work, you warrant that all trees subject to our services are legally located on your property or that you have obtained explicit, written permission from the legal owner to proceed.
          </p>

          <h2 className="mt-8 mb-4">3. Limitation of Liability</h2>
          <p>
            While we exercise the utmost care and utilize industry-standard safety protocols, tree care inherently involves risks. We are fully licensed and insured; however, to the maximum extent permitted by law, we shall not be held liable for indirect, incidental, special, consequential, or punitive damages arising from the performance of our services. Furthermore, we are not responsible for damage to hidden or uncommunicated underground utilities, superficial damage to lawns caused by necessary heavy machinery access, or unforeseen structural issues resulting from the removal of a Dead tree. additionally we are not held liable for damage due to heavy machinery to any concret and asphalt surfaces after ground protection mats have been placed.
          </p>

          <h2 className="mt-8 mb-4">4. Warranty Disclaimers</h2>
          <p>
            We provide our services "as is" and without any warranties, express or implied. Due to the unpredictable nature of biological organisms and environmental factors, we cannot guarantee the survival or long-term health of a tree following pruning, trimming, or disease treatment services. We make no warranty that our services will completely eradicate an ongoing pest infestation or systemic tree disease. Our recommendations are based on professional expertise, but we disclaim any liability for conditions beyond our control.
          </p>

          <h2 className="mt-8 mb-4">5. Payment Terms</h2>
          <p>
            Unless otherwise agreed upon in writing, payment is due in full upon completion of the requested services. For extensive commercial projects or particularly large residential jobs, a deposit may be required before work begins. We accept various forms of payment including major credit cards, checks, and digital transfers. Invoices that remain unpaid after 30 days may be subject to late fees or interest charges at the maximum rate permitted by Virginia state law.
          </p>

          <h2 className="mt-8 mb-4">6. Cancellation Policy</h2>
          <p>
            We understand that circumstances can change. If you need to cancel or reschedule a confirmed service appointment, we require a minimum of 48 hours' notice. This allows us to adjust our crew schedules and allocate resources efficiently. Cancellations made with less than 48 hours' notice, or instances where our crew arrives on-site and cannot perform the work due to client-caused obstructions, may be subject to a mobilization or cancellation fee to cover incurred operational costs.
          </p>

          <h2 className="mt-8 mb-4">7. Dispute Resolution</h2>
          <p>
            In the rare event that a dispute arises from these Terms and Conditions or the services provided by us, both parties agree to attempt to resolve the issue amicably through good-faith negotiations. If a resolution cannot be reached directly, the dispute shall be submitted to binding arbitration in the Commonwealth of Virginia, in accordance with the rules of the American Arbitration Association. The prevailing party shall be entitled to recover reasonable attorney's fees and costs.
          </p>

          <h2 className="mt-8 mb-4">8. Third-Party Financing</h2>
          <p>
            As a convenience to our customers, Art-is-Tree LLC may present financing options offered through Acorn Finance and its network of third-party lenders. Art-is-Tree LLC is a tree care company only. We are not a lender, bank, broker, or financial institution, and we do not originate, underwrite, fund, or service any loan or financial product. Acorn Finance and its partner lenders are independent third parties; Art-is-Tree LLC is not a subsidiary, agent, or representative of Acorn Finance or any lender, and we do not act on their behalf.
          </p>
          <p>
            We do not make credit decisions and have no control over—and accept no responsibility or liability for—loan approval, denial, interest rates, terms, fees, funding times, or servicing, all of which are determined solely by Acorn Finance and the applicable lender. All financing is subject to credit review and approval. Checking your rate typically involves a soft credit inquiry that does not affect your credit score, while proceeding with an offer may involve a hard credit inquiry conducted by the lender. Any financing agreement you enter into is solely between you and the lender. We make no representations or warranties regarding any financing offer, and we encourage you to review all terms and the applicable third-party privacy policies before accepting.
          </p>

          <hr className="my-8 border-gray-200" />
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Art-is-Tree LLC. All rights reserved. Virginia Beach, VA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;