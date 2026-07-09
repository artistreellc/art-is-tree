import React from 'react';
import { Phone, Clock, ShieldCheck, AlertTriangle, Wind, Zap, Home, Car, AlertCircle, TreePine } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta.jsx';
import ServiceSchema from '@/components/seo/ServiceSchema.jsx';
import SpeakableSchema from '@/components/seo/SpeakableSchema';

export default function EmergencyPage() {
  const handlePhoneClick = () => {
    if (window.gtag_report_phone_click) {
      window.gtag_report_phone_click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <LocalSEOMeta 
        pageTitle="24/7 Emergency Tree Service Virginia Beach VA"
        description="Storm damage or fallen tree? Art-is-Tree offers 24/7 emergency tree service across Virginia Beach and Hampton Roads. Licensed, insured. Call (757) 319-5131."
      />
      
      <ServiceSchema 
        name="Emergency Tree Service"
        description="24/7 emergency tree removal across Virginia Beach and Hampton Roads."
        serviceAreas={[
          "Virginia Beach", 
          "Norfolk", 
          "Chesapeake", 
          "Portsmouth", 
          "Suffolk"
        ]}
      />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/emergency" />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-red-900 via-[#1B4D3E] to-[#0A2F24] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-bold mb-8 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)] border border-red-400">
            <AlertTriangle className="w-6 h-6" />
            <span className="tracking-wide">🚨 24/7 EMERGENCY RESPONSE — WE ANSWER EVERY CALL</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight speakable">
            Emergency Tree Service Virginia Beach — Call Now
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto speakable">
            A tree emergency doesn't happen on a schedule. Whether a severe nor'easter brings down massive loblolly pines or the shifting sandy coastal soil causes a sudden uprooting, our rapid-response team is standing by 24 hours a day, 365 days a year to secure your property.
          </p>

          <a
            href="tel:7573195131"
            onClick={handlePhoneClick}
            className="bg-[#D4AF37] text-black font-black text-2xl py-6 px-12 rounded-2xl w-full max-w-md mx-auto flex items-center justify-center gap-3 shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-8 h-8 animate-bounce" fill="currentColor" />
            Call Now
          </a>
          <p className="mt-6 text-gray-200 font-bold text-xl drop-shadow-md">
            (757) 319-5131 — Tap to call immediately
          </p>
        </div>
      </section>

      {/* RESPONSE CARDS SECTION */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Answer 24/7</h3>
              <p className="text-gray-700 text-lg">no voicemail, no answering service, a real person picks up</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid On-Site Response</h3>
              <p className="text-gray-700 text-lg">crews across Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Insured</h3>
              <p className="text-gray-700 text-lg">multi-million dollar liability coverage, zero risk to you</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE SECTION */}
      <section className="bg-[#1B4D3E] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-white tracking-tight">
            What We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#133A2E] p-6 rounded-xl border border-[#236652] flex gap-4 items-start">
              <Home className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-white text-lg font-medium">Trees fallen on roof, car, fence, or power lines</p>
            </div>
            
            <div className="bg-[#133A2E] p-6 rounded-xl border border-[#236652] flex gap-4 items-start">
              <Zap className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-white text-lg font-medium">Hanging or split limbs threatening structures</p>
            </div>
            
            <div className="bg-[#133A2E] p-6 rounded-xl border border-[#236652] flex gap-4 items-start">
              <AlertCircle className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-white text-lg font-medium">Storm-damaged trees leaning dangerously</p>
            </div>
            
            <div className="bg-[#133A2E] p-6 rounded-xl border border-[#236652] flex gap-4 items-start">
              <Car className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-white text-lg font-medium">Road and driveway blockage</p>
            </div>
            
            <div className="bg-[#133A2E] p-6 rounded-xl border border-[#236652] flex gap-4 items-start">
              <Wind className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-white text-lg font-medium">Post-hurricane cleanup</p>
            </div>
            
            <div className="bg-[#133A2E] p-6 rounded-xl border border-[#236652] flex gap-4 items-start">
              <TreePine className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-white text-lg font-medium">Hazardous dead trees requiring immediate removal</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS SECTION */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Emergency Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Virginia Beach", "Norfolk", "Chesapeake", "Portsmouth", "Suffolk"].map((city) => (
              <span key={city} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold border border-gray-200 shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
            Don't Wait — We Are Ready to Dispatch
          </h2>
          <a
            href="tel:7573195131"
            onClick={handlePhoneClick}
            className="bg-[#D4AF37] text-black font-black text-2xl py-6 px-12 rounded-2xl w-full max-w-md mx-auto flex items-center justify-center gap-3 shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-8 h-8" fill="currentColor" />
            Call Now
          </a>
          <p className="mt-6 text-gray-300 font-medium text-lg">
            We work efficiently and can even coordinate with your insurance adjuster to streamline your claim. For 24/7 emergency tree service in Virginia Beach and Hampton Roads, call (757) 319-5131 right now. We answer every call.
          </p>
        </div>
      </section>
    </div>
  );
}
