import React from 'react';
import CityServiceLayout from '@/components/CityServiceLayout';

const data = {
  city: 'Norfolk',
  path: '/service-areas/norfolk',
  geo: { lat: 36.8508, lng: -76.2859 },
  metaTitle: 'Tree Service Norfolk VA | Removal & Trimming',
  metaDesc: 'Tree removal, trimming and stump grinding in Norfolk, VA. Licensed, insured, BBB A+ tree service with 24/7 storm response across Hampton Roads. Free estimates.',
  heroImg: '/images/virginia-beach-tall-tree-climb.webp',
  heroAlt: 'Art-is-Tree climber high in a mature tree beside a Norfolk home',
  heroSub: 'Tree removal, trimming, crane work, and 24/7 storm response for Norfolk’s historic neighborhoods and tight urban lots.',
  introTitle: 'The tree service Norfolk’s old neighborhoods trust',
  introParagraphs: [
    'Norfolk has some of the oldest urban tree cover in Hampton Roads, and it takes a crew that knows how to work in tight spaces. From the towering willow oaks of Ghent and Larchmont to the packed waterfront lots of Ocean View and the established blocks around Wards Corner, our licensed and insured tree service handles removals, trimming, stump grinding, and crane work where there’s no margin for error.',
    'Mature trees here hang over historic homes, new roofs, shared driveways, and overhead power lines — exactly the kind of work an out-of-town crew botches. When people look for a <strong>tree service Norfolk VA</strong> homeowners can rely on, we bring the rigging skill, the crane, and the cleanup to do it right.',
  ],
  neighborhoods: ['Ghent', 'Larchmont', 'Colonial Place', 'Ocean View', 'Wards Corner', 'Riverview', 'Park Place', 'Freemason', 'East Beach', 'Talbot Park', 'Lafayette', 'Ballentine'],
  services: [
    { iconKey: 'removal', kw: 'Tree Removal in Norfolk', text: 'On Norfolk’s tight urban lots, we assess utility lines, structural leans, and internal decay before a single cut, then dismantle the tree piece by piece so nothing touches the house or the neighbor’s.' },
    { iconKey: 'crane', kw: 'Crane-Assisted Removal', text: 'In historic districts like Ghent and Wards Corner there’s often no room to fell a tree. Our crane tree removal lifts each section up and out over the rooftops to a clear staging area on the street.' },
    { iconKey: 'trim', kw: 'Tree Trimming & Pruning', text: 'Proper pruning keeps Norfolk’s live oaks and water oaks healthy and cuts their wind resistance before hurricane season. We climb spikeless to protect the trees while we shape and deadwood them.' },
    { iconKey: 'stump', kw: 'Stump Grinding', text: 'We grind stumps below grade so you can replant or reclaim the space — a clean finish to any Norfolk tree removal or a standalone stump grinding visit.' },
    { iconKey: 'emergency', kw: '24/7 Emergency Tree Service', text: 'A squall off the Chesapeake Bay can drop a limb over your roofline without warning. Our emergency tree service runs 24/7 across Norfolk to clear fallen and hanging limbs and secure the site fast.' },
    { iconKey: 'land', kw: 'Land & Lot Clearing', text: 'Clearing overgrown lots, brush, and hazardous trees on larger Norfolk parcels — we open up the space and haul everything off.' },
  ],
  localTitle: 'Old trees, tight lots, and tidal flooding',
  localParagraphs: [
    'Norfolk’s low elevation and frequent tidal flooding are hard on trees. Saturated ground and repeated storm stress weaken root systems, and a mature willow oak that looks fine can fail in the next big blow. Working these historic, densely built streets safely takes experience most crews don’t have.',
    'Street trees between the sidewalk and curb are usually the city’s responsibility and need Norfolk’s approval to remove; trees on your side of the line are yours. We help you tell the difference and coordinate the right approvals before any work starts.',
  ],
  localImg: '/images/virginia-beach-oak-crane-climb.webp',
  localAlt: 'Climber and crane removing a large oak on a tight lot',
  localCaption: 'Crane removal on a tight urban lot',
  localBadges: [['shield', 'Licensed & Insured'], ['waves', 'Flood-zone experienced']],
  ctaTitle: 'Get a free estimate in Norfolk',
  ctaText: 'A clear written quote with no hidden fees, from the same trained crew that works Virginia Beach and the rest of Hampton Roads.',
  mapQuery: 'Norfolk, VA',
  faqs: [
    { question: "Can you remove large trees on Norfolk's tight urban lots?", answer: 'Yes. In neighborhoods like Ghent, Colonial Place, and Larchmont, mature willow oaks and crape myrtles often stand just feet from historic homes, fences, and neighbors. We dismantle trees piece by piece — rigging limbs and lowering timber by rope or crane — so nothing lands on structures or gardens.' },
    { question: 'Who is responsible for a tree in the Norfolk right-of-way?', answer: "Street trees between the sidewalk and curb are typically the city's responsibility, and removing or heavily pruning them usually needs Norfolk's approval. Trees on your side of the property line are yours. We help you tell the difference and coordinate the right approvals before any work starts." },
    { question: 'Do you handle storm and flood-damaged trees in Norfolk?', answer: "Absolutely. Norfolk's low elevation and frequent tidal flooding stress root systems and topple weakened trees during storms. Our 24/7 emergency team clears fallen and hanging limbs, secures the site, and hauls away debris." },
  ],
  relatedPreferred: ['/case-studies/property-value', '/case-studies/virginia-tree-law'],
};

const NorfolkPage = () => <CityServiceLayout data={data} />;
export default NorfolkPage;
