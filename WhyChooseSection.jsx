
import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, Zap, PiggyBank, HeartHandshake } from 'lucide-react';

/**
 * @param {Object} props
 * @param {string} [props.title]
 */
const WhyChooseSection = ({ title = "Why Choose Art-is-Tree LLC?" }) => {
  const reasons = [
    {
      icon: ThumbsUp,
      title: "Expert Knowledge",
      description: "Our team consists of professionals who understand tree biology and proper pruning techniques."
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "We offer 24/7 emergency services and guarantee rapid response times for hazardous situations."
    },
    {
      icon: PiggyBank,
      title: "Transparent Pricing",
      description: "No hidden fees. We provide free, detailed written estimates before any work begins."
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description: "We treat your property like our own, ensuring a meticulous cleanup after every single job."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">{title}</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1B4D3E] transition-colors duration-300 shadow-sm border border-gray-100">
                <reason.icon className="w-10 h-10 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
