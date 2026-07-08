
import React from 'react';
import { Award, ShieldCheck, ThumbsUp } from 'lucide-react';

const TrustAndCredentialsSection = () => {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-[#1B4D3E] mb-4" />
            <h3 className="font-bold text-xl text-[#1B4D3E] mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Fully covered for your peace of mind</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-12 h-12 text-[#1B4D3E] mb-4" />
            <h3 className="font-bold text-xl text-[#1B4D3E] mb-2">15+ Years Experience</h3>
            <p className="text-gray-600">Expert tree care crews serving Hampton Roads</p>
          </div>
          <div className="flex flex-col items-center">
            <ThumbsUp className="w-12 h-12 text-[#1B4D3E] mb-4" />
            <h3 className="font-bold text-xl text-[#1B4D3E] mb-2">5.0 Star Rating</h3>
            <p className="text-gray-600">Based on 134 verified customer reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndCredentialsSection;
