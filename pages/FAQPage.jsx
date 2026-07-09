import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema';

const FAQPage = () => {
  // Condensed Q&A pairs for structured data (AEO / Google rich results)
  const faqSchemaItems = [
    {
      question: "How much does tree removal cost in Virginia Beach?",
      answer: "There is no flat rate. Tree removal cost depends on the tree's size and height, how close it is to your house or power lines, how easy it is to get equipment to it, its condition, and whether you add stump grinding. Large loblolly pines and live oaks on tight coastal lots cost more because they must be climbed and rigged down in sections, sometimes with a crane. Art-is-Tree LLC gives a free written estimate, and the price we write is the price you pay."
    },
    {
      question: "Do I need a permit to remove a tree in Virginia Beach?",
      answer: "For most homes on ordinary residential lots, no permit is required to remove a tree on your own property. The exception is waterfront and near-water property, which can fall under the Chesapeake Bay Preservation Act. Its Resource Protection Area buffer restricts clearing near tidal water, canals, and marshes, and removing roughly ten or more healthy trees there can require a Chesapeake Bay Preservation Area Board review. Dead, dying, or invasive trees can generally be removed. Street and right-of-way trees need city approval, and many neighborhoods have HOA rules. We help you confirm the rules before any cutting begins."
    },
    {
      question: "When is the best time of year to trim or prune trees?",
      answer: "The best time to prune most trees is the dormant season, from late fall through early spring. With the leaves down the structure is easy to read, the tree is under less stress, and cuts close over before spring growth. Oaks are the key exception because of oak wilt, so oaks should not be pruned during the active season, roughly April through October. Dead, broken, or hazardous limbs can be removed any time of year."
    },
    {
      question: "How often should I have my trees trimmed or pruned?",
      answer: "As a general guide, young trees benefit from pruning every two to three years to build strong structure, and mature trees every three to five years for maintenance. Fast-growing species need attention more often, fruit trees are usually pruned yearly, and pines need very little routine pruning. Never top a tree, and avoid over-pruning, which stresses the tree and invites decay."
    },
    {
      question: "Does homeowners insurance cover tree removal?",
      answer: "Usually, homeowners insurance covers tree removal when a covered event such as a storm or high wind fells a tree and it damages a covered structure like your house, garage, or fence. Removing a healthy, dead, or leaning tree as prevention is considered maintenance and is typically not covered, and neither is a tree that falls and hits nothing. Document damage with photos, and we can provide written estimates and documentation for your claim."
    },
    {
      question: "How do I know if a tree needs to be removed or can be saved?",
      answer: "Warning signs that a tree may need to come down include a sudden new lean with heaved or cracked soil at the base, deep trunk cracks, large dead branches, a hollow or soft trunk, mushrooms or conks growing at the base, root damage, and a hazardous location over a house or power line. But many trees do not need removal. Pruning, deadwooding, or cabling and bracing can often save a tree, and we will tell you honestly which path your tree needs."
    },
    {
      question: "Why does it matter that a tree service is licensed and insured?",
      answer: "Tree work is one of the most dangerous jobs there is. Virginia has a dedicated safety regulation for tree operations that governs job briefings, minimum approach distances from power lines, how climbers are secured, and crane rigging, and Art-is-Tree LLC works to those standards. If a company that is not licensed and insured is hurt on your property or damages your home or a neighbor's, you can be held liable. Art-is-Tree LLC is licensed, insured, BBB A+ accredited, and a TCIA member. Always ask any tree company for proof of insurance before work begins."
    },
    {
      question: "Do you handle cleanup, hauling, and stump grinding?",
      answer: "Yes. Cleanup and hauling are included with every tree removal. We chip the brush, haul the wood or cut it into firewood lengths if you want it, and rake the area so you can barely tell we were there. Stump grinding is a separate add-on because it uses a different machine and is priced by the stump. We grind below grade so you can sod, replant, or build over the spot, and we call 811 before grinding to protect underground utilities."
    }
  ];

  return (
    <>
      <LocalSEOMeta
        pageTitle="Tree Service FAQ | Virginia Beach & Hampton Roads | Art-is-Tree LLC"
        description="Honest answers on tree removal cost, permits, pruning timing, insurance, and hiring a licensed and insured tree service in Virginia Beach, from owner Mike Campbell."
      />

      <FAQPageSchema items={faqSchemaItems} />
      <SpeakableSchema pageUrl="https://artistreevabeach.com/faq" />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' }
        ]}
      />

      <div className="bg-gray-50 min-h-screen">
        <header className="bg-[#1B4D3E] py-20 md:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=50&w=1200')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-0 speakable">
              Tree Service Questions, Answered Straight
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light speakable">
              Honest answers to the questions Virginia Beach homeowners ask us most, from the owner himself.
            </p>
          </div>
        </header>

        <main className="py-16 bg-white">
          <article className="container mx-auto px-4 max-w-3xl prose prose-lg prose-headings:font-playfair prose-headings:text-[#1B4D3E] text-gray-700 leading-relaxed">

            <p className="text-xl text-gray-800 font-medium">
              I'm Mike Campbell, owner of Art-is-Tree LLC. I started climbing trees professionally at nineteen, and over the years working across Hampton Roads I've heard just about every question a homeowner can ask about their trees.
            </p>
            <p>
              So I put the ones we hear most on this page and answered them the way I'd answer a neighbor over the fence: honestly, in plain English, with no sales pitch. Whether you're trying to figure out what a removal should cost, whether you even need to take a tree down, or how to tell a real tree company from a guy with a chainsaw and a ladder, you'll find a straight answer here. And if you'd rather just talk it through, call me at <a href="tel:7573195131" className="font-semibold no-underline text-[#1B4D3E]">(757) 319-5131</a>. We answer every call.
            </p>

            <h2>How much does tree removal cost in Virginia Beach?</h2>
            <p>
              I'll be honest with you: any company that quotes you a flat price over the phone without seeing the tree is guessing. Every job is different, and the price comes down to a handful of real factors. The big ones are the tree's size and height, how close it is to your house, fence, or power lines, and how easy it is to get to. A tree standing alone in an open backyard can be felled in one drop. A seventy-foot loblolly pine leaning over your roof with ten feet of clearance on either side has to be climbed and lowered in sections with rigging, sometimes with a crane, and that takes more time, more skill, and more equipment.
            </p>
            <p>
              Condition matters too, along with whether you want the stump ground out afterward. Here on the coast, our big pines and live oaks on tight lots tend to be the tougher jobs. That's exactly why we come out and look before we give you a number. Your estimate is free, it's in writing, and, as our customers will tell you, the price we write down is the price you pay, even if the job turns out harder than it looked. If another company already told you your tree was too big, too close, or too difficult, that's the job we were built for. Here's more on our <Link to="/services/tree-removal">tree removal service</Link>.
            </p>

            <h2>Do I need a permit to remove a tree in Virginia Beach?</h2>
            <p>
              For most homeowners on an ordinary lot, no. You generally don't need a city permit to remove a tree on your own residential property. The place it gets more involved is waterfront and near-water property, which is common in parts of Virginia Beach. If your lot borders the bay, a canal, a marsh, or a tidal creek, it may fall under the Chesapeake Bay Preservation Act, which protects a vegetated buffer along the water called the Resource Protection Area. Clearing live trees inside that buffer usually needs city approval, and removing roughly ten or more healthy trees can trigger a Chesapeake Bay Preservation Area Board review with a water quality assessment.
            </p>
            <p>
              The good news is that dead, dying, diseased, or invasive trees can generally be removed even in the buffer, and we handle waterfront jobs the right way all the time. Street trees and trees in the public right-of-way need city approval, and plenty of neighborhoods here have HOA rules on top of all that. The bottom line: if you're on or near the water, don't cut first and ask later. We'll help you figure out exactly what applies before we start, and you can reach the City's Planning office at (757) 385-4621. See how we navigated this on a real job in our <Link to="/case-studies/chesapeake-bay-preservation-act">Chesapeake Bay Preservation Act case study</Link>.
            </p>

            <h2>When is the best time of year to trim or prune my trees?</h2>
            <p>
              For most trees, the best time to prune is the dormant season, from late fall through early spring, roughly November into March. There are good reasons for it. With the leaves down, I can actually see the structure of the tree and make smart cuts. The tree is resting, so pruning stresses it less. And the wounds close over cleanly right as spring growth kicks in. Down here, dormant-season pruning also does something practical: it gets weak and overextended limbs off your tree before hurricane season, so there's less up there to catch the wind.
            </p>
            <p>
              There's one big exception, and it's oaks. Oaks shouldn't be pruned during the growing season, roughly April through October, because fresh cuts attract the beetles that spread oak wilt, a disease that can kill an oak. We prune oaks in winter for that reason. The other exception goes the other way: dead, broken, cracked, or clearly hazardous limbs should come off whenever you spot them, any season, because a dead limb over your driveway isn't going to wait for winter. You can read more about our <Link to="/services/tree-trimming">tree trimming and pruning</Link>.
            </p>

            <h2>How often should I have my trees trimmed or pruned?</h2>
            <p>
              It depends on the tree, but here's a rule of thumb. Young trees benefit from a light structural pruning every two to three years, which is where you build the strong framework that pays off for the next fifty years. Mature trees usually need maintenance pruning every three to five years to clear deadwood, keep clearance from the house, and manage the canopy. Fast growers need it more often, fruit trees are typically done every year, and pines need very little routine pruning at all.
            </p>
            <p>
              Two things I'll always tell you: don't over-prune, and never let anyone top your tree. Topping, which means cutting big limbs back to stubs, is an outdated, damaging practice. It stresses the tree, invites rot and disease into those big open wounds, and forces weak, ugly regrowth that becomes a hazard down the road. Good pruning works with the tree, not against it, and after any big coastal storm it's worth having your trees looked at for damage.
            </p>

            <h2>Does homeowners insurance cover tree removal?</h2>
            <p>
              Sometimes, and the rule most insurers follow is pretty consistent. If a covered event, like a storm or high wind, brings a tree down and it damages a covered structure such as your house, garage, shed, or fence, your policy will typically pay to repair the damage and remove the tree, up to your limits and after your deductible. A tree blocking your driveway is often covered too, even without structural damage.
            </p>
            <p>
              What's usually not covered is preventive removal. If you want a healthy, leaning, or dead tree taken down before it causes a problem, insurers generally treat that as maintenance, and it's on you. A tree that falls in your yard and hits nothing usually isn't covered either. One thing worth knowing: if you knew a tree was dead or dangerous and left it, an insurer may deny a later claim as negligence, which is a good reason to deal with a hazard tree sooner rather than later. If a storm does hit, take photos, and we'll give you a written estimate and documentation you can hand straight to your adjuster. When you need us fast, we run <Link to="/services/emergency-tree-service">24/7 emergency tree service</Link>.
            </p>

            <h2>How do I know if a tree needs to be removed, or can it be saved?</h2>
            <p>
              This is my favorite question, because the honest answer surprises people: a lot of trees don't need to come down. Before I ever recommend removal, I look for the real warning signs. A sudden new lean, especially with soil heaving or cracking up on one side of the base, is a serious one. So are deep cracks or splits in the trunk, large dead branches up top, a trunk that sounds or feels hollow and soft, mushrooms or shelf-like conks growing at the base, major root damage, and a tree in a spot where a failure would land on your house, your car, or a power line.
            </p>
            <p>
              But plenty of trees that look scary can be saved. Localized decay, a few dead limbs, or a weak crotch can often be handled with pruning, deadwooding, or a cabling and bracing system that supports a heavy limb so you get to keep the tree. I'm not going to sell you a removal you don't need. If your tree can be saved safely, I'll tell you, and if it truly has to come down, I'll tell you that too, and why.
            </p>

            <h2>Why does it matter that a tree service is licensed and insured?</h2>
            <p>
              Of everything on this page, this is the one I'd want my own family to understand. Tree work is genuinely one of the most dangerous jobs in the country. It's so hazardous that Virginia has an entire safety regulation written specifically for tree operations. It spells out real requirements: a safety briefing before every job, strict minimum distances crews must keep from power lines, exactly how a climber has to be tied in and secured aloft, and detailed rules for rigging and lifting sections with a crane. We work to those standards on every job, because that's how everybody goes home safe and your property stays in one piece.
            </p>
            <p>
              Here's why it matters to your wallet, not just your conscience. If you hire a crew that isn't properly insured and one of them gets hurt in your yard, or they drop a limb through your roof or your neighbor's, you can end up personally on the hook for it. A licensed and insured company carries that risk instead of handing it to you. Virginia also requires a contractor license for tree work above a certain dollar amount, so a real removal outfit has to be licensed to legally do the job. Art-is-Tree LLC is licensed, insured, BBB A+ accredited, and a member of the Tree Care Industry Association. Ask any company you're considering for proof of insurance before they touch a tree. A legitimate one will hand it right over. We wrote up what can go wrong when people skip this in our <Link to="/case-studies/unlicensed-contractors">unlicensed contractors case study</Link>.
            </p>

            <h2>Do you handle cleanup, hauling, and stump grinding?</h2>
            <p>
              Yes, and cleanup is a point of pride for us. Every removal includes complete cleanup: we chip the brush, haul the wood away, or cut it into firewood lengths and stack it if that's what you'd rather have, and then we rake and blow the area down. The compliment we hear most is that you can barely tell we were there, and that's exactly the standard we're going for. Your yard should look better when we leave than when we pulled up.
            </p>
            <p>
              Stump grinding is a separate line on your estimate, and that's normal across the industry, because it's a completely different machine and it's priced by the size of the stump. We grind the stump down below grade so you can lay sod, replant, or build over the spot without a root system in the way. Before we grind, we call 811 to get underground utilities marked, so nobody hits a gas or water line. You can read more about our <Link to="/services/stump-grinding">stump grinding service</Link>.
            </p>

            <h2>A few more questions we hear all the time</h2>
            <p>
              <strong>Will you protect my fence, lawn, pool, and A/C unit?</strong> Absolutely, and this is where our rigging really earns its keep. When a tree is over something that matters, we don't just drop pieces and hope. We lower every section under control by rope, protect the drop zone, and treat your property like it's our own. It's the reason customers tell us their pool, shed, and landscaping came through completely untouched.
            </p>
            <p>
              <strong>Do you offer free estimates, and can I just text you photos?</strong> Yes to both. Estimates are always free with no obligation, and for a lot of jobs we can get you a quote from clear photos and a few details by text, which saves everybody time. Submit your request through our website and you'll get 5% off your service.
            </p>
            <p>
              <strong>How fast can you come out for a storm emergency?</strong> We run emergency service 24/7 across Hampton Roads. If a tree is on your house or blocking your driveway, call and we'll move.
            </p>
            <p>
              <strong>What areas do you serve?</strong> We cover Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk.
            </p>

            <div className="not-prose mt-14 bg-[#1B4D3E] rounded-3xl p-10 md:p-12 text-center text-white shadow-2xl">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-white mt-0">Still have a question about your tree?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Call and talk to us directly, or request a free written estimate. We answer every call, and you'll get 5% off when you request your estimate online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:7573195131" className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black hover:bg-[#c19b2e] font-bold py-4 px-8 rounded-full text-lg shadow-lg w-full sm:w-auto">
                  <Phone className="w-5 h-5" /> Call (757) 319-5131
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg w-full sm:w-auto no-underline">
                  Get a Free Estimate
                </Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
};

export default FAQPage;
