import React from 'react';
import { Award, CheckCircle, ShieldCheck, BadgeCheck, Star, TreePine } from 'lucide-react';
import { cn } from '@/lib/utils';

// Icon-based, fully self-hosted recognition badges (no external image dependency).
const certifications = [
  {
    id: 'bbb',
    name: 'BBB A+ Rating',
    description: 'Committed to the highest standard of trust, transparency, and business practices.',
    Icon: ShieldCheck,
  },
  {
    id: 'tcia',
    name: 'TCIA Member',
    description: 'Tree Care Industry Association member dedicated to safety and ethical tree care.',
    Icon: TreePine,
  },
  {
    id: 'angi',
    name: 'Angi Certified Pro',
    description: 'Consistently highly rated by verified customers for exceptional service.',
    Icon: BadgeCheck,
  },
  {
    id: 'yelp',
    name: 'Top-Rated on Yelp',
    description: 'Trusted local service provider with strong, verified customer reviews.',
    Icon: Star,
  },
  {
    id: 'google',
    name: 'Google Verified',
    description: 'Verified local business with outstanding community feedback and reviews.',
    Icon: CheckCircle,
  },
  {
    id: 'hr-top',
    name: 'Hampton Roads Top 10',
    description: 'Voted among the top tree service providers in the Hampton Roads area.',
    Icon: Award,
    custom: true,
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-[#D4AF37]" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">
              Recognized &amp; Award-Winning
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to excellence is backed by industry-leading recognition and community trust. We hold ourselves to the highest standards of safety, quality, and customer satisfaction.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert) => {
            const Icon = cert.Icon;
            return (
              <div
                key={cert.id}
                className={cn(
                  'cert-card bg-card w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(33.333%-16px)] rounded-xl p-6 border border-border flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group',
                  cert.custom ? 'bg-primary text-primary-foreground hover:bg-primary/95' : ''
                )}
              >
                <div
                  className={cn(
                    'w-24 h-24 mb-4 rounded-full flex items-center justify-center border-4 shadow-inner transition-transform duration-300 group-hover:scale-110',
                    cert.custom ? 'bg-[#1B4D3E] border-[#D4AF37]/40' : 'bg-[#1B4D3E] border-muted'
                  )}
                >
                  <Icon className="w-10 h-10 text-[#D4AF37]" />
                </div>

                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <span className={cn('font-bold text-lg', cert.custom ? 'text-primary-foreground' : 'text-foreground')}>
                    {cert.name}
                  </span>
                  {!cert.custom && <CheckCircle className="w-4 h-4 text-[#D4AF37]" />}
                </div>

                <p className={cn('text-sm text-balance', cert.custom ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
