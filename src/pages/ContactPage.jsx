
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import { Phone, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import ContactPointSchema from '@/components/seo/ContactPointSchema';

const ContactPage = () => {
  return (
    <>
      <LocalSEOMeta 
        pageTitle="Contact Art-is-Tree LLC | Free Tree Service Quote" 
        description="Contact Art-is-Tree LLC in Virginia Beach for a free tree service estimate. Call (757) 319-5131. Licensed, insured, serving all of Hampton Roads, VA." 
      />

      <LocalBusinessSchema />
      <ContactPointSchema />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/contact" />
      
      <div className="contact-page pt-0 bg-gray-50 min-h-screen pb-20">
        <header className="contact-hero bg-gradient-to-r from-[#1B4D3E] to-[#2A7A5E] py-20 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/images/virginia-beach-winter-storm-cleanup.webp')] opacity-10 bg-cover bg-center"></div>
           <div className="relative z-10 container mx-auto px-4">
             <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-0 speakable">Contact Us</h1>
             <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light speakable">
               Reach out today for professional tree care solutions. We pride ourselves on quick scheduling and unmatched attention to detail.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg shadow-lg" asChild>
                  <a href="tel:7573195131" onClick={() => { if (window.gtag_report_phone_click) window.gtag_report_phone_click(); }}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us: (757) 319-5131
                  </a>
                </Button>
             </div>
           </div>
        </header>
        
        <main className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 lg:order-1">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative">
                  <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                    <ShieldCheck className="w-32 h-32 text-[#1B4D3E]" />
                  </div>
                  <div className="relative z-10 mb-8">
                    <h2 className="text-3xl font-bold text-[#1B4D3E] font-playfair mb-2 mt-0">Request a Free Estimate</h2>
                    <p className="text-gray-600">Fill out the form below and we will contact you promptly to schedule your evaluation. For urgent tree removal, please call us directly.</p>
                  </div>
                  <ContactForm />
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8 lg:order-2">
                <div className="prose prose-lg text-gray-700 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#1B4D3E] font-playfair mb-4 mt-0">Why Contact Us?</h2>
                  <p>
                    Bringing 15+ years of elite climbing experience to every job, <strong>Art-is-Tree LLC</strong> is your premier choice when you need to <strong>contact tree service Virginia Beach</strong> professionals. We are a locally owned and operated, <Link to="/case-studies/virginia-tree-law" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">fully licensed and insured tree service</Link> provider dedicated to absolute excellence in arboriculture. 
                  </p>
                  <p>
                    Getting a <strong>free tree estimate</strong> has never been easier. Whether you need routine tree pruning and trimming, or complex hazardous tree removal and crane assisted projects, our commitment ensures you are working with dedicated tree care professionals focused on safety. Whenever you need <strong>tree service experts in Virginia Beach</strong>, our line is always open.
                  </p>
                </div>

                <div className="bg-[#1B4D3E] text-white p-8 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold mb-6 font-playfair text-[#D4AF37] mt-0">Direct Contact Info</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                      <div>
                        <strong className="block text-lg">Phone (24/7 Emergencies)</strong>
                        <a href="tel:7573195131" className="text-gray-200 hover:text-white text-lg">(757) 319-5131</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                      <div>
                        <strong className="block text-lg">Email</strong>
                        <a href="mailto:artistreeofvirginia@gmail.com" className="text-gray-200 hover:text-white break-all">artistreeofvirginia@gmail.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                      <div>
                        <strong className="block text-lg">Service Area</strong>
                        <span className="text-gray-200">Virginia Beach, Norfolk, Chesapeake, and the greater Hampton Roads area.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                      <div>
                        <strong className="block text-lg">Business Hours</strong>
                        <span className="text-gray-200">Open 24/7</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
