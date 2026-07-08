
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const certifications = [
  {
    id: 'bbb',
    name: 'BBB A+ Rating',
    description: 'Committed to the highest standard of trust, transparency, and business practices.',
    imgUrl: 'https://horizons-cdn.hostinger.com/1ec5599f-e2e5-4afa-b25c-06e1360f6589/3ddeff76ea13458886ddde8d70897f11.png',
    alt: 'BBB A+ Rating Badge'
  },
  {
    id: 'tcia',
    name: 'TCIA Member',
    description: 'Tree Care Industry Association member dedicated to safety and ethical tree care.',
    imgUrl: 'https://horizons-cdn.hostinger.com/1ec5599f-e2e5-4afa-b25c-06e1360f6589/ec4a9bf655a4f8220cf96072fb7f0084.png',
    alt: 'TCIA - Tree Care Industry Association Official Logo'
  },
  {
    id: 'angi',
    name: 'Angi Certified Pro',
    description: 'Consistently highly rated by verified customers for exceptional service.',
    imgUrl: 'https://horizons-cdn.hostinger.com/1ec5599f-e2e5-4afa-b25c-06e1360f6589/c7c769ded9d833535c1ef7b025a66990.jpg',
    alt: 'Angi Certified Pro badge'
  },
  {
    id: 'yelp',
    name: 'Yelp Guaranteed',
    description: 'Trusted local service provider with guaranteed quality workmanship.',
    imgUrl: 'https://horizons-cdn.hostinger.com/1ec5599f-e2e5-4afa-b25c-06e1360f6589/599292ec073b7caab6bfd7715e9df3bb.png',
    alt: 'Yelp Guaranteed Badge'
  },
  {
    id: 'google',
    name: 'Google Verified',
    description: 'Verified local business with outstanding community feedback and reviews.',
    imgUrl: 'https://horizons-cdn.hostinger.com/1ec5599f-e2e5-4afa-b25c-06e1360f6589/7da845651a49a4757d032300ff1306ab.png',
    alt: 'Google Verified Agency Badge'
  },
  {
    id: 'hr-top',
    name: 'Hampton Roads Top 10',
    description: 'Voted among the top tree service providers in the Hampton Roads area.',
    custom: true,
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-[#D4AF37]" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">
              Recognized & Award-Winning
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to excellence is backed by industry-leading recognition and community trust. We hold ourselves to the highest standards of safety, quality, and customer satisfaction.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className={cn(
                "cert-card bg-card w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(33.333%-16px)] rounded-xl p-6 border border-border flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group",
                cert.custom ? "bg-primary text-primary-foreground hover:bg-primary/95" : ""
              )}
            >
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center border-4 border-muted shadow-inner relative transition-transform duration-300 group-hover:scale-110">
                {cert.custom ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1B4D3E] text-[#D4AF37]">
                    <Award className="w-8 h-8 mb-1" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Top 10</span>
                  </div>
                ) : (
                  <img 
                    src={cert.imgUrl} 
                    alt={cert.alt || `${cert.name} recognition badge`}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                )}
              </div>
              
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <span className={cn("font-bold text-lg", cert.custom ? "text-primary-foreground" : "text-foreground")}>
                  {cert.name}
                </span>
                {!cert.custom && <CheckCircle className="w-4 h-4 text-[#D4AF37]" />}
              </div>
              
              <p className={cn("text-sm text-balance", cert.custom ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
