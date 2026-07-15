import React from 'react';
import { Award, CheckCircle, ShieldCheck, BadgeCheck, Star, TreePine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { COMPANY_INFO } from '@/constants/seoMetadata';

// Icon-based, fully self-hosted recognition badges (no external image dependency).
const certifications = [
  {
    id: 'bbb',
    name: 'BBB A+ Rating',
    description: 'A+ accredited with the Better Business Bureau for straight dealing and a clean complaint record.',
    Icon: ShieldCheck,
  },
  {
    id: 'tcia',
    name: 'TCIA Member',
    description: 'Member of the Tree Care Industry Association, which sets the safety standards for professional tree work.',
    Icon: TreePine,
  },
  {
    id: 'angi',
    name: 'Angi Certified Pro',
    description: 'Highly rated on Angi by verified customers who hired us for real jobs.',
    Icon: BadgeCheck,
  },
  {
    id: 'yelp',
    name: 'Top-Rated on Yelp',
    description: 'Strong, verified Yelp reviews from homeowners across Hampton Roads.',
    Icon: Star,
  },
  {
    id: 'google',
    name: 'Google Verified',
    description: `Verified Google Business Profile with a 5.0 rating across ${COMPANY_INFO.rating.reviewCount} reviews.`,
    Icon: CheckCircle,
  },
  {
    id: 'hr-top',
    name: 'Hampton Roads Favorite',
    description: 'One of the most-recommended tree services in the Virginia Beach and Hampton Roads area.',
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
            We back up our work with real credentials and consistent 5-star reviews across the platforms homeowners actually check before they hire a tree service.
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
