import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  HardHat, 
  AlertTriangle, 
  FileText, 
  Users,
  ArrowRight,
  ClipboardCheck,
  HeartPulse,
  Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SafetyBenefitCard from '@/components/SafetyBenefitCard';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';

const Zap = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const Home = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);
const TrendingUpIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

const OSHACaseStudyPage = () => {
  const benefits = [
    {
      icon: Users,
      title: "Trained Crew Members",
      description: "Every team member undergoes rigorous training in tree climbing, aerial lift operation, and complex rigging techniques."
    },
    {
      icon: HardHat,
      title: "Proper PPE Usage",
      description: "Strict adherence to personal protective equipment standards including helmets, eye protection, and chainsaw chaps."
    },
    {
      icon: HeartPulse,
      title: "Fall Protection & Rescue",
      description: "Advanced training in fall arrest systems and aerial rescue procedures to ensure crew safety at any height."
    },
    {
      icon: ClipboardCheck,
      title: "Equipment Maintenance",
      description: "Daily inspections and rigorous maintenance protocols for all chainsaws, chippers, and heavy machinery."
    },
    {
      icon: AlertTriangle,
      title: "Hazard Recognition",
      description: "Expert risk assessment skills to identify electrical hazards, structural weaknesses, and drop zone dangers."
    },
    {
      icon: TrendingUpIcon, 
      title: "Zero-Accident Culture",
      description: "A proven track record of reduced workplace injuries through continuous education and safety meetings."
    }
  ];

  return (
    <>
      <LocalSEOMeta 
        pageTitle="OSHA Safety | Tree Service Case Study | Art-is-Tree LLC" 
        description="OSHA safety compliance case study. Learn why licensed, insured tree care experts are essential for safe tree removal in Virginia Beach & Hampton Roads area." 
      />
      
      <div className="min-h-screen bg-gray-50 pt-20">
        <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1631300313270-227604e71ea5" 
              alt="Tree care crew member checking safety gear in Virginia Beach" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50" />
          </div>
          
          <div className="relative container mx-auto px-4 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400 text-blue-100 backdrop-blur-sm mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Safety First Commitment</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight mt-0"
            >
              OSHA Compliance and Safety Standards
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-inter text-xl text-gray-200 max-w-3xl mx-auto font-light"
            >
              Professional training isn't just a requirement—it's the foundation of how we protect our team and your home.
            </motion.p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'OSHA Compliance', path: '/case-studies/osha-compliance' },
          ]} />
        </div>

        <main>
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-0">The Hidden Risks of Untrained Crews</h2>
                  <p className="text-gray-600 text-lg">Tree care is statistically one of the most dangerous professions. Cutting corners on safety training can lead to catastrophic results.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-red-50 p-8 rounded-xl border border-red-100"
                  >
                    <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="font-bold text-xl text-red-900 mb-3 mt-0">The "Fly-by-Night" Scenario</h3>
                    <p className="text-red-800/80 leading-relaxed">
                      Imagine a crew showing up in a pickup truck with no helmets, using old ropes, and lacking insurance. If a worker gets injured on your property, <strong>you</strong> could be <Link to="/case-studies/unlicensed-contractors" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">held liable</Link>. If a tree falls the wrong way due to poor judgment, your home pays the price.
                    </p>
                  </motion.div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Scale className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mt-0 mb-1"><Link to="/case-studies/unlicensed-contractors" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">Legal Liability</Link></h4>
                        <p className="text-sm text-gray-600">Homeowners can be sued if an uninsured worker is injured on their land.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Home className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mt-0 mb-1"><Link to="/case-studies/unlicensed-contractors" className="text-[#1B4D3E] underline hover:text-[#D4AF37] font-semibold">Property Damage</Link></h4>
                        <p className="text-sm text-gray-600">Lack of rigging knowledge often results in fences, roofs, and landscapes being crushed.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Zap className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mt-0 mb-1">Electrical Hazards</h4>
                        <p className="text-sm text-gray-600">Untrained workers often fail to recognize the dangers of arcing power lines.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                  <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Our Standard</span>
                  <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-2 mb-6 text-white">The Art-is-Tree Difference</h2>
                  <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                    We invest heavily in OSHA-compliant training because safety is the ultimate indicator of professionalism.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <SafetyBenefitCard 
                      key={index}
                      icon={benefit.icon}
                      title={benefit.title}
                      description={benefit.description}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>
          </section>
        </main>
      </div>
      <RelatedCaseStudies currentPath="/case-studies/osha-compliance" preferred={['/case-studies/crane-safety', '/case-studies/unlicensed-contractors', '/case-studies/property-value']} />
    </>
  );
};

export default OSHACaseStudyPage;