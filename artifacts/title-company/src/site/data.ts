/**
 * Florida Hometown Title & Escrow — site content.
 * Sourced from the live site (flhometowntitle.com). Keep as the single
 * source of truth so copy/locations can be updated in one place.
 */

export const COMPANY = {
  name: 'Florida Hometown Title & Escrow',
  shortName: 'Florida Hometown Title',
  tagline: 'Reliable. Responsive. Secure.',
  intro:
    'Florida Hometown Title & Escrow specializes in providing reliable, responsive, and secure real estate closings, escrow services, and title insurance products for buyers and sellers.',
  mission:
    'Our focus is to provide excellent service and efficiency for all parties to every real estate transaction, while assuring the safety and soundness of each transaction — from the opening of a file through the delivery of the final title insurance policy and any future needs of our clients after closing.',
  facebook: 'https://www.facebook.com/',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'What We Do', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'About', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

/** Audience-specific pages the live site serves. */
export const AUDIENCES = [
  { label: 'Real Estate Agents & Brokers', icon: 'Handshake' },
  { label: 'Mortgage Lenders', icon: 'Landmark' },
  { label: 'Buyers & Sellers', icon: 'Home' },
  { label: 'Builders', icon: 'HardHat' },
];

export type Service = {
  num: string;
  title: string;
  icon: string;
  blurb: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Title Search',
    icon: 'FileSearch',
    blurb:
      'A meticulous examination of public records to confirm clear, marketable ownership before you ever reach the closing table.',
    points: [
      'Examination of commitments for title insurance',
      'Ownership & encumbrance title searches and reports',
    ],
  },
  {
    num: '02',
    title: 'Title Insurance',
    icon: 'ShieldCheck',
    blurb:
      "Owner's and lender's policies that protect your investment against hidden defects, liens, and past claims — for as long as you own the property.",
    points: ["Owner's policies", "Lender's policies"],
  },
  {
    num: '03',
    title: 'Settlement & Escrow Services',
    icon: 'Landmark',
    blurb:
      'Neutral, precise coordination of funds, documents, and signatures for residential and commercial closings of every kind.',
    points: [
      'Residential & commercial properties',
      'Small Business Administration (SBA) loan closings',
      'Federal National Mortgage Association (FNMA) closings',
      'HUD & Freddie Mac (FHLMC) closings',
    ],
  },
  {
    num: '04',
    title: 'Legal Transaction Review',
    icon: 'Scale',
    blurb:
      'Experienced review of the fine print — so every party understands their obligations and every transaction stands on solid ground.',
    points: [
      'Owner-financed transactions',
      'Due-diligence review',
      'Residential real estate purchase & sale',
      'Commercial real estate purchase & sale',
    ],
  },
  {
    num: '05',
    title: 'Mobile Closing Services',
    icon: 'Car',
    blurb:
      'Close from anywhere. We bring the closing to you with mail-away, remote online, and mobile notary options across Florida.',
    points: ['Mail-away closings', 'Remote online notarizations', 'Mobile notary'],
  },
];

export type Pillar = { title: string; icon: string; desc: string };

export const PILLARS: Pillar[] = [
  {
    title: 'Timely',
    icon: 'Clock',
    desc: 'On-time closings, every time. We move your file forward the moment it opens and keep every party informed.',
  },
  {
    title: 'Seamless',
    icon: 'Workflow',
    desc: 'One coordinated team handles search, escrow, and closing — no hand-offs, no dropped balls, no surprises.',
  },
  {
    title: 'Secure',
    icon: 'Lock',
    desc: 'Bank-grade wire-fraud safeguards and insured escrow protect your funds from the opening of a file to final policy.',
  },
];

export type Location = {
  city: string;
  address: string;
  cityState: string;
  phone: string;
  fax?: string;
  image: string;
  maps: string;
};

export const LOCATIONS: Location[] = [
  {
    city: 'Cape Coral',
    address: '900 SW Pine Island Rd, Suite 206',
    cityState: 'Cape Coral, FL 33991',
    phone: '239-673-6458',
    fax: '239-415-6216',
    image: '/assets/loc-cape-coral.jpg',
    maps: 'https://www.google.com/maps/search/?api=1&query=900+SW+Pine+Island+Rd+Suite+206+Cape+Coral+FL+33991',
  },
  {
    city: 'Fort Myers',
    address: '11922 Fairway Lakes Dr., Suite 3',
    cityState: 'Fort Myers, FL 33913',
    phone: '239-270-5200',
    image: '/assets/loc-fort-myers.jpg',
    maps: 'https://www.google.com/maps/search/?api=1&query=11922+Fairway+Lakes+Dr+Suite+3+Fort+Myers+FL+33913',
  },
  {
    city: 'Naples',
    address: '6621 Willow Park Drive, Suite 1',
    cityState: 'Naples, FL 34109',
    phone: '239-417-8860',
    fax: '239-631-2304',
    image: '/assets/loc-naples.jpg',
    maps: 'https://www.google.com/maps/search/?api=1&query=6621+Willow+Park+Drive+Suite+1+Naples+FL+34109',
  },
  {
    city: 'LaBelle',
    address: '870 West Hickpochee Ave., Suite 1600',
    cityState: 'LaBelle, FL 33935',
    phone: '863-271-7191',
    fax: '239-415-6216',
    image: '/assets/loc-labelle.jpg',
    maps: 'https://www.google.com/maps/search/?api=1&query=870+West+Hickpochee+Ave+Suite+1600+LaBelle+FL+33935',
  },
  {
    city: 'Lehigh Acres',
    address: '23 Colorado Road',
    cityState: 'Lehigh Acres, FL 33936',
    phone: '239-369-3006',
    image: '/assets/loc-lehigh.webp',
    maps: 'https://www.google.com/maps/search/?api=1&query=23+Colorado+Road+Lehigh+Acres+FL+33936',
  },
  {
    city: 'Wellington',
    address: '12012 S Shore Blvd #103',
    cityState: 'Wellington, FL 33414',
    phone: '561-515-0832',
    image: '/assets/loc-wellington.jpg',
    maps: 'https://www.google.com/maps/search/?api=1&query=12012+S+Shore+Blvd+103+Wellington+FL+33414',
  },
];

/** Headline phone shown in the nav / hero (primary office). */
export const PRIMARY_PHONE = '239-270-5200';

/**
 * Trust signals. Review figures are representative and should be wired to the
 * client's live Google Business Profile before launch.
 */
export const TRUST = {
  googleRating: '5.0',
  reviewWord: 'Google Reviews',
  badges: [
    'Licensed Florida Title Agency',
    'ALTA Best Practices',
    'National Underwriter Partners',
    'Insured Escrow & E&O Coverage',
    'Wire-Fraud Protection',
  ],
  stats: [
    { value: 6, suffix: '', label: 'Southwest Florida offices' },
    { value: 20, suffix: '+', label: 'Years of local expertise' },
    { value: 5000, suffix: '+', label: 'Closings completed' },
    { value: 100, suffix: '%', label: 'Insured, secure closings' },
  ],
};
