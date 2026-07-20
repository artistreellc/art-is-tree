
import React, { useEffect } from 'react';
import { Award, HeartHandshake as Handshake, Users, ArrowRight, TrendingUp, BookOpen, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';

const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    { 
      name: "Regional Arborist Association", 
      desc: "Setting the standard for professional arboriculture practices and safety guidelines in Hampton Roads.", 
      initials: "RAA",
      color: "bg-blue-100 text-blue-800"
    },
    { 
      name: "Tree Care Equipment Co.", 
      desc: "Providing state-of-the-art, safe, and efficient climbing and rigging gear for our specialized crews.", 
      initials: "TCE",
      color: "bg-orange-100 text-orange-800"
    },
    { 
      name: "Environmental Services Network", 
      desc: "Collaborating on sustainable waste reduction, mulching, and wood recycling initiatives.", 
      initials: "ESN",
      color: "bg-green-100 text-green-800"
    },
    { 
      name: "Landscape Design Partners", 
      desc: "Working together to integrate mature trees into beautiful new commercial and residential landscape designs.", 
      initials: "LDP",
      color: "bg-purple-100 text-purple-800"
    },
    { 
      name: "Urban Forestry Institute", 
      desc: "Partnering on ecological research and advanced canopy preservation techniques in urban environments.", 
      initials: "UFI",
      color: "bg-teal-100 text-teal-800"
    },
    { 
      name: "Safety Certification Board", 
      desc: "Ensuring our teams consistently meet and exceed all OSHA and industry safety compliance standards.", 
      initials: "SCB",
      color: "bg-red-100 text-red-800"
    },
  ];

  const benefits = [
    { 
      title: "Professional Network", 
      desc: "Connect with top-tier tree care professionals, local businesses, and landscaping providers across Virginia.", 
      icon: Users 
    },
    { 
      title: "Industry Resources", 
      desc: "Gain access to exclusive technical training, equipment networks, and safety protocol updates.", 
      icon: BookOpen 
    },
    { 
      title: "Growth Opportunities", 
      desc: "Expand your service reach and revenue through strategic referrals and collaborative joint projects.", 
      icon: TrendingUp 
    },
    { 
      title: "Certification Support", 
      desc: "Receive dedicated assistance, mentorship, and sponsorship for advanced industry certifications.", 
      icon: ShieldCheck 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <LocalSEOMeta 
        pageTitle="Partners | Tree Service Virginia Beach | Art-is-Tree" 
        description="Art-is-Tree LLC partners with Hampton Roads property managers, builders and landscapers for reliable, licensed and insured tree care across Virginia Beach." 
      />

      <section className="bg-[#1B4D3E] text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/virginia-beach-winter-storm-cleanup.webp')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs />
          <div className="max-w-4xl mt-12 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] font-semibold rounded-full text-sm uppercase tracking-wider mb-6">
              <Handshake className="w-4 h-4" /> Collaborative Excellence
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Partners <span className="text-[#D4AF37]">&</span> Affiliates
            </h1>
            <p className="font-inter text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
              We believe in the power of collaboration. By aligning with industry leaders, safety organizations, and local professionals, we elevate the standard of arboriculture throughout Hampton Roads.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">Trusted Industry Network</h2>
            <p className="text-lg text-gray-600">
              Our professional network consists of organizations dedicated to safety, environmental sustainability, and excellence in the tree care industry.
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
           
           
          >
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold mb-6 ${partner.color} group-hover:scale-110 transition-transform duration-300`}>
                  {partner.initials}
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">Benefits of Partnership</h2>
            <p className="text-lg text-gray-600">
              Joining the Art-is-Tree LLC affiliate network unlocks a wealth of resources and collaborative growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1B4D3E] rounded-full flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1B4D3E] to-[#12362b]">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/virginia-beach-winter-storm-cleanup.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl">
            <Award className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              Join Art-is-Tree LLC's network of trusted partners and let's grow our businesses together while elevating the standard of arboriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-[#D4AF37] text-[#1B4D3E] hover:bg-[#c19b2e] font-bold py-6 px-8 text-lg shadow-lg w-full sm:w-auto transition-transform hover:-translate-y-1">
                <Link to="/about">
                  About Art-is-Tree <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1B4D3E] font-bold py-6 px-8 text-lg w-full sm:w-auto bg-transparent transition-all">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
