
import React from 'react';
import { ThumbsUp, Zap, PiggyBank, HeartHandshake } from 'lucide-react';

/**
 * @param {Object} props
 * @param {string} [props.title]
 */
const WhyChooseSection = ({ title = "Why Choose Art-is-Tree LLC?" }) => {
  const reasons = [
    {
      icon: ThumbsUp,
      title: "Trained Climbers",
      description: "Every removal is run by an experienced climber who knows how to rig a tree and take it down safely, not a day-labor crew."
    },
    {
      icon: Zap,
      title: "24/7 Storm Response",
      description: "Tree on your house or blocking the drive? We answer the phone around the clock and get out fast to make it safe."
    },
    {
      icon: PiggyBank,
      title: "Free Written Estimates",
      description: "You get a clear, itemized quote up front. No hidden fees, and no work starts until you approve the price."
    },
    {
      icon: HeartHandshake,
      title: "Clean Site, Every Time",
      description: "We rake up, haul off the debris, and leave your yard cleaner than we found it. Cleanup is part of the job, not an add-on."
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
            <div 
              key={index}
             
             
              className="text-center group"
            >
              <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1B4D3E] transition-colors duration-300 shadow-sm border border-gray-100">
                <reason.icon className="w-10 h-10 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
