import React from 'react';
import { CheckCircle2, Award, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    "Licensed & Insured",
    "24/7 Emergency Storm Response",
    "Fully Insured for Your Protection",
    "State-of-the-Art Equipment",
    "Eco-Friendly Practices",
    "100% Satisfaction Guarantee"
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div 
           
           
            className="relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1B4D3E]/20 rounded-full blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/virginia-beach-arborist-hardwood-removal.webp"
                width="1200"
                height="1600"
                alt="Art-is-Tree LLC arborist safely sectioning a large hardwood tree in Virginia Beach"
                loading="lazy"
                decoding="async"
                className="w-full h-[400px] md:h-[550px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="bg-[#1B4D3E] p-3 rounded-full text-white">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-tight">15+ Years</p>
                  <p className="text-sm text-gray-600 font-medium">Local Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div 
           
           
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#1B4D3E]/10 px-4 py-2 rounded-full mb-2">
              <Leaf className="w-4 h-4 text-[#1B4D3E]" />
              <span className="text-[#1B4D3E] font-semibold text-sm uppercase tracking-wider">About Our Company</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              A family-owned Virginia Beach tree service, run by a working climber
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              <strong className="text-[#1B4D3E]">Art-is-Tree LLC</strong> is a family-owned company, and the owner still climbs every job. We do this work because we are skilled at it &mdash; reading a tree, setting the right rigging, and bringing it down without damaging the landscape beneath it. That is the difference between a professional tree service and an unlicensed crew with a chainsaw.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our crew is trained and the company is fully licensed and insured. Crown reductions, crane-assisted removals over structures, and emergency storm cleanup are routine work for us. We treat every property as if it were our own: deliberate rigging, clean cuts, and a site raked and cleared before we leave.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link 
                to="/about" 
                className="bg-[#1B4D3E] text-white px-8 py-4 rounded-full font-bold hover:bg-[#153e32] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
              >
                Discover Our Story
              </Link>
              <div className="flex items-center gap-3 px-4 py-2">
                <Shield className="w-10 h-10 text-[#1B4D3E]" />
                <div className="text-sm">
                  <p className="font-bold text-gray-900">Fully Licensed</p>
                  <p className="text-gray-500">& Insured</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;