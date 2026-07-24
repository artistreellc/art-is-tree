import React from 'react';
import CityServiceLayout from '@/components/CityServiceLayout';

const data = {
  city: 'Suffolk',
  path: '/service-areas/suffolk',
  geo: { lat: 36.7282, lng: -76.5836 },
  metaTitle: 'Tree Service Suffolk VA | Removal & Land Clearing',
  metaDesc: 'Tree removal, land clearing, stump grinding and 24/7 emergency tree service in Suffolk, VA. Licensed, insured, BBB A+. Free estimates from Art-is-Tree LLC.',
  heroImg: '/images/virginia-beach-winter-storm-cleanup.webp',
  heroAlt: 'Art-is-Tree crew clearing a downed tree on a Suffolk property',
  heroSub: 'Tree removal, land clearing, and 24/7 storm response built for Suffolk’s rural acreage and big-tree country.',
  introTitle: 'Tree service and land clearing for rural Suffolk',
  introParagraphs: [
    'Suffolk is the largest city in Virginia by land area, and most of it is rural — large-acreage properties, working farmland, and stands of pine timber that make for a very different kind of tree work than the packed lots closer to the coast. Our licensed and insured crew is built for it: heavy-duty tree removal, land clearing, stump grinding, and storm cleanup.',
    'From Harbour View and North Suffolk over to Chuckatuck, Holland, and Whaleyville, we bring the equipment to take down big timber and open up overgrown ground. When people search for a <strong>tree service Suffolk VA</strong> that can handle acreage, we’re the crew that shows up ready.',
  ],
  neighborhoods: ['Harbour View', 'North Suffolk', 'Driver', 'Chuckatuck', 'Holland', 'Whaleyville', 'Nansemond', 'Eclipse', 'Bennetts Creek', 'Wilroy'],
  services: [
    { iconKey: 'removal', kw: 'Tree Removal in Suffolk', text: 'Taking down big timber on rural Suffolk property often needs heavy equipment and a careful plan. We bring down failing oaks, old pines, and dead hardwoods in sections so nothing lands on your outbuildings or fence lines.' },
    { iconKey: 'land', kw: 'Land & Lot Clearing', text: 'This is core Suffolk work — clearing acreage, brush, and pine stands for building, farming, or opening up a view. We drop, process, and haul so the ground is ready to use.' },
    { iconKey: 'crane', kw: 'Crane-Assisted Removal', text: 'For the biggest trees or ones tight to a farmhouse or barn, our crane tree removal lifts the weight out in controlled sections instead of gambling on where it falls.' },
    { iconKey: 'trim', kw: 'Tree Trimming & Pruning', text: 'We prune to keep your trees healthy and clear of the house, the driveway, and the power lines that run along Suffolk’s rural roads.' },
    { iconKey: 'stump', kw: 'Stump Grinding', text: 'We grind stumps below grade so you can mow, plant, or farm right over the spot — part of a Suffolk removal or on its own.' },
    { iconKey: 'emergency', kw: '24/7 Emergency Tree Service', text: 'When a storm brings a big tree down across a rural driveway or onto a farm building, our emergency tree service answers 24/7 to clear it and make the property safe.' },
  ],
  localTitle: 'Big-tree country needs the right equipment',
  localParagraphs: [
    'A tree job on a Suffolk farm or wooded acreage is a different animal from a suburban backyard. Bigger trees, softer and wetter rural ground, and access down long drives or through fields all change the plan — and the equipment. We come out, walk the property, and bring what the job actually needs.',
    'Whether it’s a single hazardous oak leaning on a barn or several cleared acres for a new build, we handle the scale and haul everything off, leaving the ground ready for whatever’s next.',
  ],
  localImg: '/images/virginia-beach-crane-tree-removal.webp',
  localAlt: 'Crane removing a large tree on a rural property near Suffolk',
  localCaption: 'Crane removal of a large tree on an open property',
  localBadges: [['shield', 'Licensed & Insured'], ['waves', 'Acreage & land clearing']],
  ctaTitle: 'Get a free estimate in Suffolk',
  ctaText: 'A detailed written quote with no hidden fees, whether it’s one big tree or several acres to clear. Book online and take 5% off.',
  mapQuery: 'Suffolk, VA',
  faqs: [
    { question: 'Do you clear land and acreage in Suffolk?', answer: 'Yes — land clearing is one of our main services in Suffolk. We clear wooded acreage, brush, and pine stands for building lots, farmland, and open space, then process and haul everything off so the ground is ready to use.' },
    { question: 'Can you remove very large trees on a rural Suffolk property?', answer: 'Yes. Big rural trees often need heavy equipment or a crane. We rig and remove failing oaks, pines, and dead hardwoods in sections so nothing lands on outbuildings, fences, or crops.' },
    { question: 'Do you offer 24/7 storm response in Suffolk?', answer: 'Yes. Our emergency crew is on call around the clock across Suffolk to clear trees down across rural drives, roads, and farm structures, and to make the property safe fast.' },
  ],
  financingText: "Art-is-Tree LLC now offers tree service financing throughout Suffolk, so large rural and residential tree jobs never have to wait for the right time. From tree removal and trimming to stump grinding and land clearing, our local financing lets Suffolk property owners spread the cost into affordable monthly payments instead of one upfront bill. Whether it's hazardous trees close to the home, wooded acreage to clear, or storm cleanup after a coastal blow, you can get professional, licensed, and insured tree care today and pay over time. Ask about our Suffolk tree service financing and flexible payment plans when you request your free written estimate — quick to apply.",
  relatedPreferred: ['/case-studies/property-value', '/case-studies/crane-safety'],
};

const SuffolkPage = () => <CityServiceLayout data={data} />;
export default SuffolkPage;
