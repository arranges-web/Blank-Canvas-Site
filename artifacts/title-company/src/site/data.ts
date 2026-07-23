/**
 * Florida Hometown Title & Escrow — site content (single source of truth).
 * Copy elevated for a high-end, editorial brand voice; facts sourced from
 * the live site (flhometowntitle.com).
 */

export const COMPANY = {
  name: 'Florida Hometown Title & Escrow',
  shortName: 'Florida Hometown Title',
  tagline: 'Reliable. Responsive. Secure.',
  promise: 'The art of a flawless closing.',
  intro:
    'Florida Hometown Title & Escrow delivers reliable, responsive, and secure real estate closings, escrow, and title insurance for buyers, sellers, and the professionals who serve them.',
  mission:
    'We safeguard every transaction from the opening of a file through the delivery of the final policy — pairing meticulous title work with the kind of white-glove service Southwest Florida remembers.',
  facebook: 'https://www.facebook.com/',
};

export const ROUTES = {
  home: '/',
  services: '/services',
  realtors: '/realtors',
  about: '/about',
  locations: '/locations',
  contact: '/contact',
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const NAV: NavItem[] = [
  { label: 'Home', href: ROUTES.home },
  {
    label: 'What We Do',
    href: ROUTES.services,
    children: [
      { label: 'Title Search', href: ROUTES.services + '#title-search', desc: 'Clear, marketable ownership — verified.' },
      { label: 'Title Insurance', href: ROUTES.services + '#title-insurance', desc: "Owner's & lender's protection for life." },
      { label: 'Settlement & Escrow', href: ROUTES.services + '#settlement', desc: 'Precise coordination of every closing.' },
      { label: 'Legal Transaction Review', href: ROUTES.services + '#legal', desc: 'Experienced eyes on the fine print.' },
      { label: 'Mobile Closing', href: ROUTES.services + '#mobile', desc: 'Close from anywhere in Florida.' },
    ],
  },
  { label: 'For Realtors', href: ROUTES.realtors },
  { label: 'About', href: ROUTES.about },
  {
    label: 'Locations',
    href: ROUTES.locations,
  },
  { label: 'Contact', href: ROUTES.contact },
];

/** Audience-specific pages the live site serves. */
export const AUDIENCES = [
  { label: 'Real Estate Agents & Brokers', icon: 'Handshake', href: ROUTES.realtors },
  { label: 'Mortgage Lenders', icon: 'Landmark', href: ROUTES.contact },
  { label: 'Buyers & Sellers', icon: 'Home', href: ROUTES.contact },
  { label: 'Builders', icon: 'HardHat', href: ROUTES.contact },
];

export type Service = {
  id: string;
  num: string;
  title: string;
  icon: string;
  blurb: string;
  points: string[];
  image: string | null;
};

export const SERVICES: Service[] = [
  {
    id: 'title-search',
    num: '01',
    title: 'Title Search',
    icon: 'FileSearch',
    blurb:
      'A meticulous examination of the public record to confirm clear, marketable ownership long before you reach the closing table.',
    points: [
      'Examination of commitments for title insurance',
      'Ownership & encumbrance title searches and reports',
    ],
    image: '/assets/svc-title-search.jpg',
  },
  {
    id: 'title-insurance',
    num: '02',
    title: 'Title Insurance',
    icon: 'ShieldCheck',
    blurb:
      "Owner's and lender's policies that quietly protect your investment against hidden defects and past claims — for as long as you own the property.",
    points: ["Owner's policies", "Lender's policies"],
    image: null,
  },
  {
    id: 'settlement',
    num: '03',
    title: 'Settlement & Escrow Services',
    icon: 'Landmark',
    blurb:
      'Neutral, exacting coordination of funds, documents, and signatures for residential and commercial closings of every kind.',
    points: [
      'Residential & commercial properties',
      'Small Business Administration (SBA) loan closings',
      'Federal National Mortgage Association (FNMA) closings',
      'HUD & Freddie Mac (FHLMC) closings',
    ],
    image: '/assets/svc-settlement.jpg',
  },
  {
    id: 'legal',
    num: '04',
    title: 'Legal Transaction Review',
    icon: 'Scale',
    blurb:
      'Experienced review of the fine print — so every party understands their obligations and every transaction rests on solid ground.',
    points: [
      'Owner-financed transactions',
      'Due-diligence review',
      'Residential real estate purchase & sale',
      'Commercial real estate purchase & sale',
    ],
    image: null,
  },
  {
    id: 'mobile',
    num: '05',
    title: 'Mobile Closing Services',
    icon: 'Car',
    blurb:
      'Close from anywhere. We bring the signing to you — by mail-away, remote online notarization, or a mobile notary at your door.',
    points: ['Mail-away closings', 'Remote online notarizations', 'Mobile notary'],
    image: '/assets/svc-notary.jpg',
  },
];

export type Pillar = { title: string; icon: string; desc: string };

export const PILLARS: Pillar[] = [
  {
    title: 'Reliable',
    icon: 'Clock',
    desc: 'On-time closings, every time. We advance your file the moment it opens and keep every party informed to the minute.',
  },
  {
    title: 'Responsive',
    icon: 'Workflow',
    desc: 'One dedicated team from search to signing — real people who answer, anticipate, and never let a detail slip.',
  },
  {
    title: 'Secure',
    icon: 'Lock',
    desc: 'Bank-grade wire-fraud safeguards and insured escrow protect your funds from the opening of a file to the final policy.',
  },
];

/** Why realtors partner with us. */
export const REALTOR_BENEFITS = [
  { title: 'On-time, every time', icon: 'CalendarCheck', desc: 'Your commissions and your reputation ride on the closing date. We protect both with disciplined timelines.' },
  { title: 'Deal-saving communication', icon: 'MessageSquare', desc: 'Proactive status updates to you, your buyer, and the lender — so you are never the last to know.' },
  { title: 'Clean title, fewer surprises', icon: 'ShieldCheck', desc: 'Thorough search and curative work up front means fewer last-minute fires at the table.' },
  { title: 'Anywhere closings', icon: 'Globe', desc: 'Mail-away, RON, and mobile notary keep out-of-town buyers and snowbird sellers moving.' },
  { title: 'Six offices, one standard', icon: 'MapPin', desc: 'From Cape Coral to Wellington, your clients get the same white-glove experience.' },
  { title: 'A partner, not a vendor', icon: 'Handshake', desc: 'We treat your clients like our own and make you look like the hero you are.' },
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
    { value: 6, suffix: '', label: 'Offices across Southwest Florida' },
    { value: 20, suffix: '+', label: 'Years of local expertise' },
    { value: 5000, suffix: '+', label: 'Closings completed' },
    { value: 100, suffix: '%', label: 'Insured, secure closings' },
  ],
};

/** Steps in the closing journey — used on Home / Services. */
export const PROCESS = [
  { num: '01', title: 'Open the File', desc: 'Send us the contract. We open your order and introduce your dedicated closing team the same day.' },
  { num: '02', title: 'Search & Examine', desc: 'We examine the public record for decades back, resolving liens and defects before they become problems.' },
  { num: '03', title: 'Clear to Close', desc: 'Title commitment issued, figures reconciled, and every party aligned for a calm, confident closing.' },
  { num: '04', title: 'Sign & Settle', desc: 'In person, mail-away, or fully online — we coordinate signing, funding, and recording to the minute.' },
];

/**
 * Concierge knowledge base — powers the on-page assistant.
 * Each intent matches on keywords and returns a scripted, on-brand answer.
 */
export type Intent = {
  id: string;
  keywords: string[];
  answer: string;
  chips?: string[];
};

export const CONCIERGE_INTENTS: Intent[] = [
  {
    id: 'services',
    keywords: ['service', 'what do you do', 'offer', 'help with', 'title work'],
    answer:
      'We handle the full closing under one roof: title search, title insurance, settlement & escrow, legal transaction review, and mobile/remote closings. Which one can I tell you more about?',
    chips: ['Title insurance', 'Escrow & settlement', 'Mobile closing', 'Get a quote'],
  },
  {
    id: 'title-insurance',
    keywords: ['title insurance', 'insurance', 'owner policy', 'lender policy', 'protect'],
    answer:
      "Title insurance protects you against hidden defects, liens, or past claims on a property — for as long as you own it. We issue both owner's and lender's policies, backed by top national underwriters.",
    chips: ['What does it cost?', 'Get a quote', 'Talk to a person'],
  },
  {
    id: 'quote',
    keywords: ['quote', 'price', 'cost', 'fee', 'how much', 'estimate'],
    answer:
      "Happy to help you get a fast, no-obligation quote. Tell me your nearest office and I'll point you to our quote request — or you can tap below.",
    chips: ['Request a quote', 'See locations', 'Call an office'],
  },
  {
    id: 'locations',
    keywords: ['location', 'office', 'address', 'near me', 'where', 'cape coral', 'fort myers', 'naples', 'labelle', 'lehigh', 'wellington'],
    answer:
      'We have six offices across Southwest Florida: Cape Coral, Fort Myers, Naples, LaBelle, Lehigh Acres, and Wellington. Want directions or the phone number for one?',
    chips: ['See all locations', 'Book a closing', 'Talk to a person'],
  },
  {
    id: 'realtor',
    keywords: ['realtor', 'agent', 'broker', 'partner', 'referral', 'my clients'],
    answer:
      'Realtors are our people. We protect your closing dates, over-communicate with every party, and make you the hero at the table. Explore our partner page or let’s set up your next closing.',
    chips: ['For Realtors', 'Open an order', 'Talk to a person'],
  },
  {
    id: 'mobile',
    keywords: ['mobile', 'remote', 'online', 'ron', 'notary', 'mail away', 'snowbird', 'out of town'],
    answer:
      'Yes — close from anywhere. We offer mail-away closings, remote online notarization (RON), and mobile notaries who come to you. Perfect for out-of-town buyers and snowbird sellers.',
    chips: ['Get a quote', 'See locations'],
  },
  {
    id: 'hours',
    keywords: ['hours', 'open', 'when', 'time', 'today'],
    answer:
      'Our offices keep standard business hours, Monday through Friday. The fastest way to reach a specific office is by phone — want me to pull up the numbers?',
    chips: ['See locations', 'Contact us'],
  },
  {
    id: 'human',
    keywords: ['person', 'human', 'someone', 'call', 'talk', 'representative', 'agent now', 'speak'],
    answer:
      "Of course. The quickest route is to call your nearest office or send us a note through our contact page — a real member of our team will follow up promptly.",
    chips: ['Contact us', 'See locations', 'Request a quote'],
  },
  {
    id: 'wire',
    keywords: ['wire', 'fraud', 'safe', 'security', 'scam', 'secure'],
    answer:
      'Wire safety is serious to us. We use bank-grade safeguards and will never change wire instructions by email. Always call a verified office number before sending funds — never trust emailed changes.',
    chips: ['Contact us', 'See locations'],
  },
];

export const CONCIERGE = {
  name: 'Ava',
  role: 'Title Concierge',
  greeting:
    "Hi, I'm Ava — your title concierge. 👋 I can help with quotes, our services, locations, or getting your closing started. What brings you in today?",
  quickStart: ['Request a quote', 'What services do you offer?', 'Find an office', "I'm a Realtor"],
  fallback:
    "I want to get that exactly right for you. The best next step is a quick note to our team or a call to your nearest office — would you like either of those?",
};
