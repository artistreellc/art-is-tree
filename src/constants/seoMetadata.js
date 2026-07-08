import { BASE_URL, stripWww } from '@/utils/seoHelpers';

const COMPANY_INFO = {
  name: 'Art-is-Tree LLC',
  phone: '(757) 319-5131',
  phoneRaw: '7573195131',
  email: 'artistreeofvirginia@gmail.com',
  address: {
    street: '2597 Nestlebrook Trl',
    city: 'Virginia Beach',
    state: 'VA',
    zip: '23456',
    country: 'US'
  }
};

const SEO_METADATA = {
  home: {
    title: 'Professional Tree Service Virginia Beach | Art-is-Tree LLC',
    description: 'Professional tree service in Virginia Beach. Expert tree removal, trimming, stump grinding, and emergency care. Licensed, insured, and trusted by homeowners.',
    keywords: 'tree service Virginia Beach, tree removal Virginia Beach, emergency tree service, tree care specialists, tree trimming, stump grinding, tree care',
    ogImage: `${BASE_URL}/og-image-home.jpg`
  },
  services: {
    title: 'Tree Services Virginia Beach | Expert Tree Removal & Trimming',
    description: 'Comprehensive tree services in Virginia Beach including safe removal, precision trimming, pruning, stump grinding, and 24/7 emergency arboriculture care.',
    keywords: 'tree removal, tree trimming, stump grinding, tree pruning, land clearing, emergency tree service',
    ogImage: `${BASE_URL}/og-image-services.jpg`
  },
  gallery: {
    title: 'Tree Service Gallery | Before & After Photos | Art-is-Tree LLC',
    description: 'Explore our tree service gallery showcasing professional tree removal, precision trimming, and stump grinding in Virginia Beach. See our expert tree care work.',
    keywords: 'tree service photos, tree removal gallery, before after tree work, professional tree service portfolio',
    ogImage: `${BASE_URL}/og-image-gallery.jpg`
  },
  testimonials: {
    title: 'Customer Reviews & Testimonials | Art-is-Tree LLC Virginia Beach',
    description: 'Read verified customer testimonials and reviews for Art-is-Tree LLC. Discover why Virginia Beach homeowners trust our professional tree removal and care team.',
    keywords: 'tree service reviews, customer testimonials, Google reviews, tree removal ratings',
    ogImage: `${BASE_URL}/og-image-testimonials.jpg`
  },
  contact: {
    title: 'Contact Us - Free Tree Service Estimate | Art-is-Tree LLC',
    description: 'Contact Art-is-Tree LLC for a free tree service quote. Call or fill out our form for professional tree removal, trimming, and emergency care in Virginia Beach.',
    keywords: 'tree service estimate, free tree quote, emergency tree service contact, Virginia Beach tree service',
    ogImage: `${BASE_URL}/og-image-contact.jpg`
  },
  faq: {
    title: 'Tree Service FAQ | Common Questions Answered | Art-is-Tree LLC',
    description: 'Find answers to frequently asked questions about tree removal, trimming, stump grinding, and emergency services in Virginia Beach from our experienced team.',
    keywords: 'tree service FAQ, tree removal questions, tree care FAQ, tree care information',
    ogImage: `${BASE_URL}/og-image-faq.jpg`
  },
  caseStudies: {
    title: 'Tree Service Case Studies | Real Projects & Results',
    description: 'Explore our detailed tree service case studies. Read about complex tree removals, crane-assisted projects, and expert tree care solutions in Virginia Beach.',
    keywords: 'tree service case studies, tree removal projects, professional tree service work, tree care examples',
    ogImage: `${BASE_URL}/og-image-case-studies.jpg`
  },
  serviceAreas: {
    title: 'Service Areas - Virginia Beach & Hampton Roads | Art-is-Tree LLC',
    description: 'Discover our professional tree service areas across Virginia Beach, Norfolk, Chesapeake, and Hampton Roads. Find reliable, licensed tree care near your home.',
    keywords: 'tree service Virginia Beach, Norfolk tree removal, Chesapeake tree service, Hampton Roads tree service',
    ogImage: `${BASE_URL}/og-image-service-areas.jpg`
  },
  about: {
    title: 'About Art-is-Tree LLC | Licensed & Insured Tree Service',
    description: 'Learn about Art-is-Tree LLC, your trusted tree service provider in Virginia Beach. We bring 15+ years of hands-on experience and deep local trust.',
    keywords: 'about Art-is-Tree, Virginia Beach tree service, tree service company, Virginia Beach tree experts',
    ogImage: `${BASE_URL}/og-image-about.jpg`
  },
  termsAndConditions: {
    title: 'Terms and Conditions | Art-is-Tree LLC',
    description: 'Read the terms and conditions for Art-is-Tree LLC. Review our detailed tree service agreements, project warranties, and comprehensive customer care policies.',
    keywords: 'terms and conditions, service agreement, tree service policies',
    ogImage: `${BASE_URL}/og-image.jpg`
  },
  privacyPolicy: {
    title: 'Privacy Policy | Art-is-Tree LLC',
    description: 'Review the privacy policy for Art-is-Tree LLC. Learn exactly how we securely collect, use, and protect your personal information when you request our services.',
    keywords: 'privacy policy, data protection, customer information security',
    ogImage: `${BASE_URL}/og-image.jpg`
  }
};

export const getPageMetadata = (page) => {
  const metadata = SEO_METADATA[page] || SEO_METADATA.home;
  
  return {
    ...metadata,
    companyInfo: COMPANY_INFO,
    baseUrl: BASE_URL
  };
};

export const seoMetadata = {
  HomePage: SEO_METADATA.home,
  ServicesPage: SEO_METADATA.services,
  GalleryPage: SEO_METADATA.gallery,
  TestimonialsPage: SEO_METADATA.testimonials,
  ContactPage: SEO_METADATA.contact,
  FAQPage: SEO_METADATA.faq,
  CaseStudiesPage: SEO_METADATA.caseStudies,
  ServiceAreasPage: SEO_METADATA.serviceAreas,
  AboutPage: SEO_METADATA.about,
  TermsAndConditionsPage: SEO_METADATA.termsAndConditions,
  PrivacyPolicyPage: SEO_METADATA.privacyPolicy
};

export { BASE_URL, COMPANY_INFO, SEO_METADATA };
export default seoMetadata;