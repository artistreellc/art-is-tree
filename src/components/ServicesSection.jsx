import React from 'react';
import { Trash2, Scissors, Tractor, CircleDot, AlertCircle, Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [{
    icon: Trash2,
    name: 'Professional Tree Removal',
    path: '/services/tree-removal',
    linkText: 'Learn More About Tree Removal',
    description: 'Expert tree removal in Virginia Beach using crane-assisted techniques. As a top tree service in Virginia Beach, our climbers safely remove trees of any size with advanced rigging systems.'
  }, {
    icon: Scissors,
    name: 'Tree Trimming & Pruning',
    path: '/services/tree-trimming',
    linkText: 'Learn More About Tree Trimming',
    description: 'Professional tree trimming and crown reduction services by local tree care pros in Virginia Beach. We provide expert tree pruning following ANSI A300 standards to enhance tree health and safety.'
  }, {
    icon: Tractor,
    name: 'Land Clearing & Site Prep',
    path: '/services/land-clearing',
    linkText: 'Learn More About Land Clearing',
    description: 'Comprehensive land clearing services for residential and commercial properties. Our local tree experts provide professional site preparation and forestry mulching throughout the region.'
  }, {
    icon: CircleDot,
    name: 'Stump Grinding & Removal',
    path: '/services/stump-grinding',
    linkText: 'Learn More About Stump Grinding',
    description: 'Complete stump removal and tree services in Virginia Beach. Our professional team uses powerful machinery to grind stumps below grade, eliminating trip hazards and reclaiming your yard space.'
  }, {
    icon: AlertCircle,
    name: '24/7 Emergency Tree Service',
    path: '/services/emergency-tree-service',
    linkText: 'Learn More About Emergency Tree Services',
    description: 'Rapid-response emergency tree services in Virginia Beach available 24/7. Our professionals respond immediately to storm damage and hazardous tree situations to keep your property safe.'
  }, {
    icon: Cloud,
    name: 'Storm Damage Cleanup',
    path: '/emergency',
    linkText: 'Learn More About Storm Damage Cleanup',
    description: 'Professional storm damage tree removal and cleanup. Our local tree service team clears fallen branches, uprooted trees, and dangerous hanging limbs after severe weather events.'
  }];

  return (
    <section className="py-12 md:py-24 bg-gray-50" id="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#1B4D3E] font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
            Expert Tree Care Services
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-[#1B4D3E] mb-4 md:mb-6">
            Professional Tree Services in Virginia Beach
          </h2>
          <p className="font-inter text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            From routine tree maintenance to emergency tree removal, we provide comprehensive professional tree services tailored to your property's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                
                
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 flex flex-col h-full group"
              >
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 mb-4">
                  <div className="bg-[#1B4D3E] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center group-hover:bg-[#153e32] transition-colors duration-300 shrink-0">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#1B4D3E] group-hover:text-[#D4AF37] transition-colors">
                    {service.name}
                  </h3>
                </div>

                <p className="font-inter text-gray-600 mb-6 leading-relaxed flex-grow text-sm md:text-[15px]">
                  {service.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-[#1B4D3E] font-bold text-sm hover:text-[#D4AF37] transition-colors group/link py-2 min-h-[44px]"
                    aria-label={service.linkText}
                  >
                    {service.linkText} <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <Button size="lg" className="bg-[#1B4D3E] hover:bg-[#153e32] text-white px-8 py-6 rounded-full text-base md:text-lg shadow-lg w-full sm:w-auto h-auto min-h-[56px]" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;