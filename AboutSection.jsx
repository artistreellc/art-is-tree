import React from 'react';
import { motion } from 'framer-motion';
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
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1B4D3E]/20 rounded-full blur-2xl"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format,compress&q=75&fit=crop&w=1200"
                srcSet="
                  https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format,compress&q=75&fit=crop&w=600 600w,
                  https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format,compress&q=75&fit=crop&w=900 900w,
                  https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format,compress&q=75&fit=crop&w=1200 1200w
                "
                sizes="(max-width: 640px) 600px, (max-width: 1024px) 900px, 1200px"
                alt="Professional tree care crew assessing and performing comprehensive tree services"
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#1B4D3E]/10 px-4 py-2 rounded-full mb-2">
              <Leaf className="w-4 h-4 text-[#1B4D3E]" />
              <span className="text-[#1B4D3E] font-semibold text-sm uppercase tracking-wider">About Our Company</span>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              More than just tree cutters - Your Trusted Tree Care Team in Virginia Beach
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              At <strong className="text-[#1B4D3E]">Art-is-Tree LLC</strong>, we are passionate about arboriculture and dedicated to the health of our local urban canopy. When you need expert tree services in Virginia Beach, we don't just remove trees; we provide comprehensive care that enhances the safety, beauty, and value of your property.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of licensed professionals brings years of specialized experience to every project. Whether you need a delicate crown reduction, complex crane-assisted hazardous removal, or emergency storm cleanup, we execute with precision and a deep respect for your landscape.
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;