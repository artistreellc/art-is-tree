import React from 'react';
import CityServiceLayout from '@/components/CityServiceLayout';

const data = {
  city: 'Chesapeake',
  path: '/service-areas/chesapeake',
  geo: { lat: 36.7682, lng: -76.2875 },
  metaTitle: 'Tree Service Chesapeake VA | Removal, Trimming & Arborist',
  metaDesc: 'Tree removal, trimming, stump grinding and land clearing in Chesapeake, VA. Licensed, insured, BBB A+ tree service with 24/7 storm response. Free estimates.',
  heroImg: '/images/virginia-beach-crane-operation-oak.webp',
  heroAlt: 'Crane crew removing a large oak beside a Chesapeake home',
  heroSub: 'Tree removal, trimming, stump grinding, land clearing, and 24/7 storm response — from Greenbrier’s subdivisions to Hickory’s open acreage.',
  introTitle: 'Full-service tree care across Chesapeake',
  introParagraphs: [
    'Chesapeake covers a lot of ground — dense suburban subdivisions in Greenbrier and Western Branch, established yards in Great Bridge and Deep Creek, and wide rural acreage out toward Hickory and the Dismal Swamp. Our licensed and insured tree service works all of it: tree removal, trimming, stump grinding, crane work, and land clearing.',
    'Bigger lots mean bigger trees and more canopy to manage, and rural parcels often need real clearing, not just a trim. When homeowners search for a <strong>tree service Chesapeake VA</strong> they can count on, we bring the equipment and the crew to handle any size job and clean up after.',
  ],
  neighborhoods: ['Great Bridge', 'Greenbrier', 'Western Branch', 'Deep Creek', 'Hickory', 'South Norfolk', 'Grassfield', 'Fentress', 'Camelot', 'Etheridge Manor'],
  services: [
    { iconKey: 'removal', kw: 'Tree Removal in Chesapeake', text: 'From storm-cracked pines in Greenbrier to sprawling oaks on Great Bridge lots, we plan every removal, rig it down safely, and protect the house, the fence, and the flower beds while we work.' },
    { iconKey: 'crane', kw: 'Crane-Assisted Removal', text: 'When a tree is too large or too close to the house to fell, our crane tree removal lifts it out in controlled sections — the safest option on Chesapeake’s tighter suburban lots.' },
    { iconKey: 'trim', kw: 'Tree Trimming & Pruning', text: 'Regular tree trimming and pruning in Chesapeake keeps your canopy strong, off the roof, and ready for hurricane season. We climb spikeless to protect mature hardwoods from Greenbrier to Great Bridge.' },
    { iconKey: 'stump', kw: 'Stump Grinding', text: 'Grinding stumps below grade so you can reclaim the yard — part of a Chesapeake removal or a standalone stump grinding service.' },
    { iconKey: 'emergency', kw: '24/7 Emergency Tree Service', text: 'Storms roll through Chesapeake hard. Our emergency tree service answers 24/7 to clear fallen trees, secure hanging limbs, and reopen driveways and roads.' },
    { iconKey: 'land', kw: 'Land & Lot Clearing', text: 'Out toward Hickory, Fentress, and the Dismal Swamp edge, we clear acreage, brush, and overgrowth so you can build, farm, or open up your Chesapeake property.' },
  ],
  localTitle: 'From suburban yards to rural acreage',
  localParagraphs: [
    'Chesapeake is one of the most varied cities we work in. A tree job in a packed Greenbrier cul-de-sac is a completely different problem from clearing overgrown acreage near Hickory or the Great Dismal Swamp — different equipment, different access, different plan. We’re set up for both.',
    'A lot of Chesapeake also drains toward canals, creeks, and the swamp, so ground can stay wet and roots can be shallow. That changes how a tree comes down, and it’s the kind of local detail we account for before we quote the job.',
  ],
  localImg: '/images/virginia-beach-large-stump-neighborhood.webp',
  localAlt: 'Crew beside a very large stump and log section in a Chesapeake neighborhood',
  localCaption: 'A large hardwood removed in a Hampton Roads neighborhood',
  localBadges: [['shield', 'Licensed & Insured'], ['waves', 'Wet-ground experienced']],
  ctaTitle: 'Get a free estimate in Chesapeake',
  ctaText: 'A detailed written quote with no hidden fees, whether it’s one tree in the backyard or a full lot to clear. Book online and take 5% off.',
  mapQuery: 'Chesapeake, VA',
  faqs: [
    { question: 'Do you clear large or wooded lots in Chesapeake?', answer: 'Yes. Beyond single-tree removals, we handle land and lot clearing on larger Chesapeake parcels out toward Hickory, Fentress, and the Dismal Swamp edge — taking down trees, clearing brush and undergrowth, and hauling it all off so you can build, farm, or open up the property.' },
    { question: 'Can you remove a big tree close to my house in Chesapeake?', answer: 'Yes. On tighter suburban lots in Greenbrier, Great Bridge, or Western Branch, a large tree over the house is exactly what crane-assisted removal is for. We lift it out in sections rather than dropping it, so the roof, fence, and landscaping stay untouched.' },
    { question: 'How fast can you respond to storm damage in Chesapeake?', answer: 'Our emergency crew is on call 24/7 across Chesapeake. After a storm we prioritize trees on homes, driveways, and power lines, stabilize the hazard, and return to complete full removal and cleanup.' },
    { question: 'Is your Chesapeake tree service run by an arborist?', answer: 'Yes. Art-is-Tree LLC is a member of the International Society of Arboriculture (ISA) and works to the ANSI A300 and Z133 standards. If you need an arborist in Chesapeake, VA to assess a tree’s health, judge whether it can be saved, or plan pruning the right way, that’s exactly what we do — an honest evaluation before any work is quoted.' },
  ],
  financingText: "Art-is-Tree LLC now offers tree service financing throughout Chesapeake, so a big tree job never has to wait for the right time. From tree removal and trimming to stump grinding and land clearing, our local financing lets Chesapeake homeowners spread the cost into affordable monthly payments instead of one upfront bill. Whether it's a storm-cracked pine in Greenbrier, a large oak on a Great Bridge lot, or acreage to clear near Hickory, you can get professional, licensed, and insured tree care today and pay over time. Ask about our Chesapeake tree service financing and flexible payment plans when you request your free written estimate — quick to apply.",
  relatedPreferred: ['/case-studies/property-value', '/case-studies/crane-safety'],
};

const ChesapeakePage = () => <CityServiceLayout data={data} />;
export default ChesapeakePage;
