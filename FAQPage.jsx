
import React from 'react';
import FAQSection from '@/components/FAQSection';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import SpeakableSchema from '@/components/seo/SpeakableSchema';

const FAQPage = () => {
  const faqs = [
    { 
      question: "Are you a licensed and insured tree service?", 
      answer: "Yes, absolutely. Art-is-Tree LLC is a fully licensed and insured tree service provider. We carry comprehensive general liability and workers' compensation insurance to fully protect your property and our staff." 
    },
    { 
      question: "What areas do you serve in Hampton Roads?", 
      answer: "We proudly operate throughout Virginia Beach, Norfolk, Chesapeake, and the surrounding communities." 
    },
    { 
      question: "What is your experience level?", 
      answer: "We bring over 15 years of professional climbing and tree care experience to the company." 
    },
    { 
      question: "Do you handle emergency tree removal?", 
      answer: "Yes, we provide 24/7 emergency tree removal. Coastal storms can cause immediate, unpredictable damage. If a tree falls on your home or blocks your driveway, call us right away for rapid, safe extraction." 
    },
    { 
      question: "Can you remove trees in tight or dangerous spaces?", 
      answer: "Yes, we specialize in hazardous tree removal and crane assisted tree projects." 
    },
    { 
      question: "Do you offer stump grinding after a removal?", 
      answer: "Yes, stump grinding is a core part of our comprehensive services." 
    },
    { 
      question: "What does tree maintenance and pruning involve?", 
      answer: "Our tree maintenance services include expert tree pruning and tree trimming to remove deadwood, shape the canopy, and improve structural integrity." 
    },
    { 
      question: "Do you service commercial properties?", 
      answer: "Yes, we provide extensive residential and commercial tree services. Property managers and HOAs trust us because we are fully insured, highly professional, and capable of handling large-scale tree maintenance and removal operations with minimal disruption." 
    },
    {
      question: "How do I know if my tree needs to be removed?",
      answer: "Signs that a tree may need removal include extensive trunk decay, large hollow areas, sudden leaning, dying or dropping branches in the upper crown, and fungal growth at the base."
    },
    {
      question: "Is tree topping a good practice?",
      answer: "No. Tree topping is an outdated, harmful practice that removes the upper canopy of a tree. It causes severe stress, creates entry points for disease, and leads to weak, rapid regrowth."
    }
  ];

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service FAQ | Virginia Beach | Art-is-Tree LLC" 
        description="Answers to common tree service questions on cost, permits, storm response and stump grinding from Art-is-Tree LLC, licensed tree pros in Virginia Beach." 
      />
      
      <FAQPageSchema faqs={faqs} />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/faq" />

      <div className="pt-0 bg-gray-50 min-h-screen">
        <header className="bg-[#1B4D3E] py-20 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
           <div className="relative z-10 container mx-auto px-4">
             <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-0 speakable">Frequently Asked Questions</h1>
             <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light speakable">Expert answers from your trusted Virginia Beach tree professionals.</p>
           </div>
        </header>
        
        <main className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
             <div className="prose prose-lg text-gray-700 leading-relaxed mx-auto text-left mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <p>
                 Navigating the complexities of professional tree care can often lead to many <strong>tree care questions</strong>. That's why Art-is-Tree LLC has compiled this comprehensive <strong>tree removal FAQ</strong> section to provide you with clear, accurate answers directly from our experienced team. Finding reliable <strong>tree care advice</strong> is crucial for the longevity of your landscape.
               </p>
               <p>
                 As highly trained tree professionals, we prioritize education and transparency. Whether you are wondering about the specific factors involved in crane assisted tree projects, looking for <strong>tree health tips</strong>, the necessity of routine pruning, or the logistics of our 24/7 emergency tree removal, you will find valuable insights here.
               </p>
               <p>
                 We operate as a fully licensed and insured tree service, offering everything from stump grinding and detailed trimming to complex hazardous tree removal across the entire Hampton Roads area. Browse our most common inquiries below, and if you still need assistance, our team is always ready to provide personalized guidance.
               </p>
             </div>
             
             <FAQSection items={faqs} />
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;
