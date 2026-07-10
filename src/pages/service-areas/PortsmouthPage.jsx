import React from 'react';
import CityServiceLayout from '@/components/CityServiceLayout';

const data = {
  city: 'Portsmouth',
  path: '/service-areas/portsmouth',
  geo: { lat: 36.8354, lng: -76.2983 },
  metaTitle: 'Tree Service Portsmouth VA | Removal & Trimming',
  metaDesc: 'Tree removal, trimming, stump grinding and 24/7 emergency tree service in Portsmouth, VA. Licensed, insured, BBB A+. Free estimates from Art-is-Tree LLC.',
  heroImg: '/images/virginia-beach-crane-rigging-storm.webp',
  heroAlt: 'Art-is-Tree climber rigging a large trunk to a crane in Portsmouth',
  heroSub: 'Careful tree removal, pruning, and crane work for Portsmouth’s historic districts and heritage trees.',
  introTitle: 'Careful tree work for historic Portsmouth',
  introParagraphs: [
    'Portsmouth has some of the oldest housing stock in Hampton Roads, and the trees match it. Neighborhoods like Olde Towne, Cradock, and Port Norfolk sit under big heritage oaks and elms — many older than the homes they hang over. Our licensed and insured tree service knows how to work around historic architecture without doing damage.',
    'Tight lots, mature trees, and homes worth protecting mean there’s no room for a careless drop. When people search for a <strong>tree service Portsmouth VA</strong> that respects an old property, we bring precise rigging, crane capability, and a clean job site.',
  ],
  neighborhoods: ['Olde Towne', 'Cradock', 'Port Norfolk', 'Churchland', 'Park View', 'West Park View', 'Cavalier Manor', 'Simonsdale'],
  services: [
    { iconKey: 'removal', kw: 'Tree Removal in Portsmouth', text: 'Removing a big, failing tree in Portsmouth’s packed historic districts leaves no margin. We bring hazardous oaks, pines, and maples down in sections, lowering the heavy wood a piece at a time so nothing hits the house next door.' },
    { iconKey: 'crane', kw: 'Crane-Assisted Removal', text: 'On tight Olde Towne and Cradock lots there’s often no safe fell path. Our crane tree removal lifts each section up and over the rooftops to a clear staging area.' },
    { iconKey: 'trim', kw: 'Tree Trimming & Pruning', text: 'Keeping a mature canopy sound comes down to smart weight reduction and clearing deadwood. We trim back limbs that have grown too close to historic homes and power lines before they become a problem.' },
    { iconKey: 'stump', kw: 'Stump Grinding', text: 'We grind stumps below grade so you can restore the yard — part of a Portsmouth removal or on its own.' },
    { iconKey: 'emergency', kw: '24/7 Emergency Tree Service', text: 'When a storm drops a heritage limb across your roof or driveway, our emergency tree service answers 24/7 to secure the hazard and clear the damage.' },
    { iconKey: 'land', kw: 'Tree Risk Assessment', text: 'Most structural decay doesn’t show from the ground. We check heritage trees for internal rot, weak unions, and failing roots — the problems that put a limb through a roof or crack a foundation.' },
  ],
  localTitle: 'Heritage trees over historic homes',
  localParagraphs: [
    'The trees that make Olde Towne, Cradock, and Port Norfolk beautiful are also the ones most likely to hide trouble. Decades of growth over historic rooflines, combined with hidden internal decay and shallow, disturbed roots, mean a tree can look healthy and still be a real risk.',
    'That’s why we assess before we quote. We identify what’s actually going on inside a heritage tree and give you a straight answer — prune it, cable it, or take it down — so you can protect both the home and the tree when it makes sense.',
  ],
  localImg: '/images/virginia-beach-pine-log-cross-section.webp',
  localAlt: 'Fresh cross-section of a large tree trunk showing the rings',
  localCaption: 'Reading a trunk’s cross-section tells the tree’s real condition',
  localBadges: [['shield', 'Licensed & Insured']],
  ctaTitle: 'Get a free estimate in Portsmouth',
  ctaText: 'A detailed written quote with no hidden fees, from a crew that treats an old property with the care it deserves. Book online and take 5% off.',
  mapQuery: 'Portsmouth, VA',
  faqs: [
    { question: 'Can you work around historic homes in Olde Towne?', answer: 'Yes — that’s much of what we do in Portsmouth. On tight historic lots we rig and lower each section by rope or crane instead of dropping the tree, so the house, porch, fence, and gardens stay protected throughout the job.' },
    { question: 'How do I know if my heritage tree is dangerous?', answer: 'Most structural decay isn’t visible from the ground. We assess heritage trees for internal rot, weak branch unions, and compromised roots, then give you an honest recommendation — prune, cable, or remove — before any work begins.' },
    { question: 'Do you offer 24/7 storm response in Portsmouth?', answer: 'Yes. Our emergency crew is on call around the clock across Portsmouth to clear fallen and hanging limbs, secure the property, and haul away debris after a storm.' },
  ],
  relatedPreferred: ['/case-studies/virginia-tree-law', '/case-studies/spikeless-pruning'],
};

const PortsmouthPage = () => <CityServiceLayout data={data} />;
export default PortsmouthPage;
