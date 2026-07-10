import React from 'react';
import { CheckCircle2, Trees, Scissors, Tractor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ComprehensiveServicesOverview = ({
  title = "Full-Service Tree Care in Virginia Beach",
  description = "From residential tree pruning to large-scale commercial land clearing, we handle the full range of tree work across Hampton Roads."
}) => {
  const categories = [
    {
      title: "Tree Removal & Trimming",
      icon: Trees,
      features: ["Hazardous Tree Removal", "Precision Crown Thinning", "Deadwood Removal", "Crane-Assisted Takedowns"]
    },
    {
      title: "Stump & Root Care",
      icon: Tractor,
      features: ["Deep Stump Grinding", "Surface Root Pruning", "Soil Aeration", "Post-Removal Site Prep"]
    },
    {
      title: "Plant Health Care",
      icon: Scissors,
      features: ["Disease Diagnosis", "Pest Management", "Fertilization", "Cabling & Bracing"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white contain-content" id="comprehensive-services" style={{ contain: 'layout paint' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 min-h-[96px]">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[350px]">
          {categories.map((category, index) => {
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow contain-content"
              >
                <div className="bg-[#1B4D3E]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4 h-[28px]">{category.title}</h3>
                <ul className="space-y-3 mb-8">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 h-[24px]">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 h-[56px]">
          <Button className="bg-[#1B4D3E] hover:bg-[#153e32] text-white px-8 py-6 rounded-full text-lg min-h-[56px] min-w-[200px]" asChild>
            <Link to="/services" className="inline-flex items-center justify-center">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ComprehensiveServicesOverview);
