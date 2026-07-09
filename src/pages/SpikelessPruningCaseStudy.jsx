
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Leaf, 
  Activity, 
  Heart, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Crosshair,
  Award,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/Breadcrumbs';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const SpikelessPruningCaseStudy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Spikeless Pruning Case Study | Art-is-Tree LLC Virginia Beach" 
        description="Learn how Art-is-Tree LLC uses spikeless climbing to protect tree health during pruning. Expert, damage-free tree pruning methods for Virginia Beach homeowners." 
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        <header className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1550002079-5b59db6b6df9" 
              alt="Tree climber pruning a canopy in Virginia Beach" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <span 
             
              className="inline-block py-2 px-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] font-semibold mb-6 backdrop-blur-sm"
            >
              Industry Standard Tree Care
            </span>
            <h1 
             
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight mt-0"
            >
              Spikeless Pruning Techniques
            </h1>
            <p 
             
              className="font-inter text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
            >
              Minimizing tree damage while achieving optimal health and appearance.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-4">
           <Breadcrumbs items={[
             { label: 'Home', path: '/' },
             { label: 'Case Studies', path: '/case-studies' },
             { label: 'Spikeless Pruning', path: '/case-studies/spikeless-pruning' },
           ]} />
        </div>

        <main>
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <div>
                <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#1B4D3E] mb-6 mt-0">
                  The New Standard in Arboriculture
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-inter">
                  Spikeless pruning is the industry standard for maintaining tree health. Unlike older methods that rely on climbing spikes (gaffs) to ascend trees, spikeless climbing utilizes advanced rope techniques and friction hitches, or bucket trucks, to navigate the canopy. This approach is critical because every puncture wound created by a spike provides an entry point for disease, fungi, and harmful insects, directly threatening the long-term vitality of the tree.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1702204853970-531e29d4bb02" 
                    alt="Bark damage from improper climbing spikes" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-sm">
                    <AlertTriangle className="w-5 h-5" />
                    The Problem
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mt-0">
                    Damage Caused by Climbing Spikes
                  </h2>
                  <p className="text-lg text-gray-600">
                    Spikes should ONLY be used for tree removals. When used for pruning, they cause irreversible harm:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Severe Bark Damage: Punctures the protective cambium layer.",
                      "Tree Wounds: Deep gouges disrupt the flow of water and nutrients.",
                      "Disease Entry Points: Open wounds invite decay fungi and bacterial infections.",
                      "Pest Vulnerability: Insects target stressed, wounded trees.",
                      "Long-Term Health Impacts: Successive spike usage can severely reduce a tree's lifespan."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="bg-red-100 p-1 rounded-full mt-1">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-[#1B4D3E] text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4 mt-0 text-white">Benefits of Spikeless Pruning</h2>
                <p className="text-gray-300 text-xl max-w-2xl mx-auto">Protecting your trees with advanced care methods.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Shield, title: "Eliminates Wounds", desc: "No punctures means the bark remains fully intact and protective." },
                  { icon: Leaf, title: "Reduces Disease Risk", desc: "Closes the door on fungal infections and invasive pests." },
                  { icon: Activity, title: "Faster Healing", desc: "Trees expend less energy recovering from human-inflicted damage." },
                  { icon: Heart, title: "Longevity & Health", desc: "Promotes vigorous growth and extends the structural integrity of the tree." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                    <item.icon className="w-10 h-10 text-[#D4AF37] mb-4" />
                    <h3 className="font-playfair text-2xl font-bold mb-3 mt-0 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 relative overflow-hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 relative z-10 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#1B4D3E] mb-6 mt-0">
                  Why Art-is-Tree LLC?
                </h2>
                <p className="text-[#D4AF37] text-xl mb-8 font-medium">
                  "We don't just cut branches; we prescribe care."
                </p>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
                  At Art-is-Tree LLC, we are committed to elevating the standard of arboriculture in Virginia Beach. We exclusively use bucket trucks and spikeless climbing techniques for all pruning jobs. Our highly trained arborists ensure that your landscape investments are protected, nurtured, and structurally sound for generations to come.
                </p>
                <Button asChild className="bg-[#1B4D3E] text-white hover:bg-[#12362b] text-lg px-8 py-6 rounded-lg font-bold shadow-lg transition-all">
                  <Link to="/contact">
                    Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SpikelessPruningCaseStudy;
