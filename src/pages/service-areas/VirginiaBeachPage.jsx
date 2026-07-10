import React from 'react';
import CityServiceLayout from '@/components/CityServiceLayout';

const data = {
  city: 'Virginia Beach',
  path: '/service-areas/virginia-beach',
  geo: { lat: 36.8529, lng: -75.9780 },
  metaTitle: 'Tree Service Virginia Beach VA | Free Estimates',
  metaDesc: 'Local tree removal, trimming, stump grinding and 24/7 emergency service in Virginia Beach, VA. Licensed, insured, BBB A+. Free estimates from Art-is-Tree LLC.',
  heroImg: '/images/virginia-beach-bucket-truck-pine.webp',
  heroAlt: 'Art-is-Tree bucket truck servicing tall pines in a Virginia Beach neighborhood',
  heroSub: 'Licensed, insured tree removal, trimming, stump grinding, crane work, and 24/7 storm response — from the Oceanfront to Pungo.',
  introTitle: 'The tree service Virginia Beach calls first',
  introParagraphs: [
    'Virginia Beach is home base for Art-is-Tree LLC, and it’s where we do most of our work. We’re a licensed and insured tree service covering every corner of the city — from the Oceanfront and Chic’s Beach down to Sandbridge, Red Mill, and the open acreage of Pungo. Whether you need a hazardous tree removed off your roof in Kempsville, storm-prep pruning on the big live oaks in Great Neck, or a stump ground out flush in Thoroughgood, you get the same crew that’s been climbing these coastal trees for 15+ years.',
    'Tree removal, tree trimming, stump grinding, crane-assisted removal, land clearing, and 24/7 emergency storm response — it’s all in-house, and it’s all done to one standard: safe, to code, and cleaned up before we leave. When people search for a <strong>tree service Virginia Beach</strong> homeowners actually trust, that’s the reputation we’ve built one job at a time.',
  ],
  neighborhoods: ['Oceanfront', 'Great Neck', 'Kempsville', 'Sandbridge', 'Thoroughgood', 'Chic’s Beach', 'Red Mill', 'Pungo', 'Bayside', 'Town Center', 'Alanton', 'Little Neck', 'Hilltop', 'Nimmo'],
  services: [
    { iconKey: 'removal', kw: 'Tree Removal in Virginia Beach', text: 'From a single dead loblolly pine to a massive live oak leaning over the house, every tree removal is planned before the first cut. On tight coastal lots we climb and rig the tree down in pieces so nothing lands on your roof, fence, or landscaping.' },
    { iconKey: 'crane', kw: 'Crane-Assisted Tree Removal', text: 'When a tree is too big or too close to the house to fell safely, our crane tree removal lifts it out in sections and over the roof to a clear drop zone — the safest way to take down hazardous trees on Virginia Beach’s packed waterfront lots.' },
    { iconKey: 'trim', kw: 'Tree Trimming & Pruning', text: 'Storm-prep pruning and ANSI-standard tree trimming that keeps your canopy strong and off the roof. We use spikeless climbing on live oaks and hardwoods to protect the tree while we shape it and clear deadwood.' },
    { iconKey: 'stump', kw: 'Stump Grinding', text: 'We grind stumps below grade so you can reclaim the yard for grass, a garden, or a new planting — as part of a removal or as a standalone stump grinding service anywhere in Virginia Beach.' },
    { iconKey: 'emergency', kw: '24/7 Emergency Tree Service', text: 'A tree on the house or a road blocked after a nor’easter can’t wait. Our emergency tree service runs 24/7 across Virginia Beach — we answer the phone, stabilize the hazard, and clear the storm damage fast.' },
    { iconKey: 'land', kw: 'Land & Lot Clearing', text: 'Overgrown lots and rural acreage from Pungo to the Blackwater line — we handle land clearing, brush removal, and hauling so you can open up and use your property.' },
  ],
  localTitle: 'Coastal trees fail in specific ways',
  localParagraphs: [
    'Virginia Beach sits on flat, sandy coastal-plain soil with a high water table. When heavy rain saturates the ground, that soil loses its grip on the root plate, and a tall <strong>loblolly pine</strong> or mature <strong>water oak</strong> can tip over whole in the next storm. Out-of-town crews routinely misread how our soil and coastal wind change a removal.',
    'On waterfront lots near the Lynnhaven or the Chesapeake Bay, the <a href="/case-studies/chesapeake-bay-preservation-act" class="text-[#1B4D3E] font-semibold underline hover:text-[#D4AF37]">Chesapeake Bay Preservation Act</a> restricts clearing inside the 100-ft shoreline buffer. We know how to work those lots — and every other kind in the city — safely and to code.',
  ],
  localImg: '/images/virginia-beach-large-tree-over-house.webp',
  localAlt: 'A large hardwood towering over a home in Virginia Beach before removal',
  localCaption: 'A large hardwood over a home — a common Virginia Beach call',
  localBadges: [['shield', 'Licensed & Insured'], ['waves', 'Waterfront & CBPA-savvy']],
  ctaTitle: 'Get a free estimate in Virginia Beach',
  ctaText: 'A detailed written quote with no hidden fees, from a local crew that does the work itself. Book online and take 5% off.',
  mapQuery: 'Virginia Beach, VA',
  faqs: [
    { question: 'Do I need a permit to remove a tree in Virginia Beach?', answer: 'On an ordinary residential lot, no permit is required to remove a tree on your own property. The main exception is waterfront and near-water property in the Chesapeake Bay Preservation Act’s Resource Protection Area, where clearing within the shoreline buffer is restricted and removing many healthy trees can require Board review. Dead, dying, and hazardous trees can generally come down. We confirm the rules for your specific lot before any cutting begins.' },
    { question: 'How fast can you respond to a storm-damaged tree in Virginia Beach?', answer: 'Our emergency crew is on call 24/7 across Virginia Beach, from Sandbridge and Red Mill to Great Neck and the Oceanfront. After a nor’easter or hurricane we prioritize trees on homes, driveways, and power lines, tarping and stabilizing to prevent further damage before completing full removal and cleanup.' },
    { question: 'What does tree removal cost in Virginia Beach?', answer: 'There is no flat rate. Cost depends on the tree’s size, its proximity to your house or power lines, equipment access, and whether you add stump grinding. Tall loblolly pines and sprawling live oaks on tight coastal lots cost more because they must be climbed and rigged down in sections. You get a free written estimate, and the price we quote is the price you pay.' },
  ],
  relatedPreferred: ['/case-studies/crane-safety', '/case-studies/property-value'],
};

const VirginiaBeachPage = () => <CityServiceLayout data={data} />;
export default VirginiaBeachPage;
