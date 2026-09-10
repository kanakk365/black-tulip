/* =========================================================
   Content for the Black Tulip Metal landing page.
   Service names, project captions and contact details are
   taken verbatim from blacktulipmetals.com.
   ========================================================= */

export type Category = 'structural' | 'architectural';

export interface Service {
  no: string;
  title: string;
  copy: string;
  img: string;
  alt: string;
  cat: Category;
}

export interface Project {
  title: string;
  desc: string;
  tags: [string, string];
  img: string;
  alt: string;
  /** Original caption from the client's projects gallery. */
  caption: string;
}

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
] as const;

export const HERO_SLIDES = [
  {
    img: '/img/banner/banner-1554979344.jpg',
    alt: 'Architectural metal screen facade fabricated by Black Tulip Metal',
    word: 'Structural',
  },
  {
    img: '/img/banner/banner-1554979371.jpg',
    alt: 'Architectural metal works by Black Tulip Metal',
    word: 'Architectural',
  },
  {
    img: '/img/banner/banner-1555556329.jpg',
    alt: 'Composite cladding facade, Dubai Marina',
    word: 'Aluminium',
  },
  {
    img: '/img/banner/banner-1555556335.jpg',
    alt: 'Storage tanks with steel access platforms and cage ladders',
    word: 'Fabrication',
  },
] as const;

export const HERO_TAGS = [
  'Building & Warehouse Structures',
  'Balustrades & Handrails',
  'Cladding & Canopies',
  'Glass, Mirror & Aluminium',
] as const;

export const TICKER = [
  'Structural Steel',
  'Architectural Metals',
  'Aluminium & Glass',
  'Form Works',
  'Cladding Systems',
  'Balustrades',
  'Canopies & Pergolas',
  'Storage Tanks',
] as const;

export const CAPABILITIES = [
  { no: '01', name: 'Structural Works', img: '/img/structural/building-structures.jpg' },
  {
    no: '02',
    name: 'Architectural Metals',
    img: '/img/architectural/wall-column-and-ceiling-cladding-works.jpg',
  },
  { no: '03', name: 'Aluminium & Glass', img: '/img/architectural/glass-and-mirror-works.jpg' },
  { no: '04', name: 'Form Works', img: '/img/structural/form-works.jpg' },
] as const;

export const SERVICES: Service[] = [
  {
    no: '01',
    title: 'Building Structures',
    copy: 'Primary steel frames, columns and beams fabricated and erected to drawing.',
    img: '/img/structural/building-structures.jpg',
    alt: 'Building structures',
    cat: 'structural',
  },
  {
    no: '02',
    title: 'Warehouse Structures',
    copy: 'Clear-span portal frames, purlins and roofing systems for industrial sheds.',
    img: '/img/structural/warehouse-structures.jpg',
    alt: 'Warehouse structures',
    cat: 'structural',
  },
  {
    no: '03',
    title: 'Staircases & Handrails',
    copy: 'Straight, spiral and dog-leg stairs complete with compliant handrail systems.',
    img: '/img/structural/structural-staircase-with-handrails.jpg',
    alt: 'Structural staircase with handrails',
    cat: 'structural',
  },
  {
    no: '04',
    title: 'Platforms, Walkways & Bridges',
    copy: 'Access platforms, gratings and link bridges for plant and commercial sites.',
    img: '/img/structural/structural-platforms-walkway-bridges.jpg',
    alt: 'Structural platforms, walkways and bridges',
    cat: 'structural',
  },
  {
    no: '05',
    title: 'Signage Poles',
    copy: 'Engineered pole and gantry supports for signage, wayfinding and totems.',
    img: '/img/structural/signage-poles.jpg',
    alt: 'Signage poles',
    cat: 'structural',
  },
  {
    no: '06',
    title: 'Form Works',
    copy: 'Purpose-built steel shuttering and moulds, fabricated to the pour.',
    img: '/img/structural/form-works.jpg',
    alt: 'Form works',
    cat: 'structural',
  },
  {
    no: '07',
    title: 'Storage Tanks',
    copy: 'Fabricated tanks with access ladders, cages and maintenance platforms.',
    img: '/img/structural/storage-tanks.jpg',
    alt: 'Storage tanks',
    cat: 'structural',
  },
  {
    no: '08',
    title: 'Main & Secondary Supports',
    copy: 'Support steel for facades, MEP services, plant and equipment.',
    img: '/img/structural/main-secondary-support-works.jpg',
    alt: 'Main and secondary support works',
    cat: 'structural',
  },
  {
    no: '09',
    title: 'Wall, Column & Ceiling Cladding',
    copy: 'Stainless, copper, aluminium and composite cladding with concealed fixings.',
    img: '/img/architectural/wall-column-and-ceiling-cladding-works.jpg',
    alt: 'Wall, column and ceiling cladding works',
    cat: 'architectural',
  },
  {
    no: '10',
    title: 'Balustrades & Handrails',
    copy: 'Glass, stainless and mild steel balustrades with polished top rails.',
    img: '/img/architectural/balustrade-and-handrail-works.jpg',
    alt: 'Balustrade and handrail works',
    cat: 'architectural',
  },
  {
    no: '11',
    title: 'Canopies & Pergolas',
    copy: 'Entrance canopies, shade structures and skylight framing.',
    img: '/img/architectural/canopy-pergola-works.jpg',
    alt: 'Canopy and pergola works',
    cat: 'architectural',
  },
  {
    no: '12',
    title: 'Glass & Mirror Works',
    copy: 'Toughened glass, mirror panels and aluminium framing, cut and installed.',
    img: '/img/architectural/glass-and-mirror-works.jpg',
    alt: 'Glass and mirror works',
    cat: 'architectural',
  },
];

export const STATS = [
  { count: 10, suffix: '+', label: 'Years of experience' },
  { count: 12, suffix: '', label: 'In-house disciplines' },
  { count: 23, suffix: '', label: 'Clients & main contractors' },
  { count: 2, suffix: '', label: 'Facilities — Sharjah & Dubai' },
] as const;

export const PROJECTS: Project[] = [
  {
    title: 'Jumeirah Beach Hotel — 360 Marina',
    desc: 'Glass handrails with stainless steel top rail.',
    tags: ['Balustrades', 'Stainless'],
    img: '/img/gallery/01.jpg',
    alt: 'Glass handrails with stainless steel top rail, 360 Marina Restaurants, Jumeirah Beach Hotel',
    caption:
      'Glass Handrails with Stainless Steel Top Rail at Jumeirah Beach Hotel, 360 Marina Restaurants, Dubai.',
  },
  {
    title: 'Le Meridien Hotel, Jumeirah',
    desc: 'Mild steel walkway with handrails.',
    tags: ['Walkways', 'Structural'],
    img: '/img/gallery/02.jpg',
    alt: 'Mild steel walkway with handrails, Le Meridien Hotel, Jumeirah',
    caption: 'Mild Steel Walkway with Handrails at Le Meridien Hotel, Jumeirah, Dubai.',
  },
  {
    title: 'Atlantis Aquaventure Expansion',
    desc: 'Structural support works, Palm Jumeirah.',
    tags: ['Support Steel', 'Structural'],
    img: '/img/gallery/03.jpg',
    alt: 'Structural support works, Atlantis Aquaventure expansion, Palm Jumeirah',
    caption:
      'Structural Support works at Atlantis Aquaventure Expansion, Palm Jumeirah, Dubai.',
  },
  {
    title: 'Big Easy — ELS Club, Sports City',
    desc: 'Beaten copper cladding works.',
    tags: ['Cladding', 'Copper'],
    img: '/img/gallery/24.jpg',
    alt: 'Beaten copper cladding, Big Easy Restaurant, ELS Club, Sports City',
    caption:
      'Beaten Copper Cladding works at Big Easy Restaurant, ELS Club, Sports City, Dubai.',
  },
  {
    title: 'Al Tawfique Mosque, Marina',
    desc: 'Wall cladding, gratings, grab & foot rails.',
    tags: ['Cladding', 'Stainless'],
    img: '/img/gallery/05.jpg',
    alt: 'Stainless steel wall cladding and gratings, Al Tawfique Mosque, Dubai Marina',
    caption:
      'Stainless Steel Wall Cladding, Gratings, Grab Rail and Foot Rail at Ablution Area, Al Tawfique Mosque, Marina, Dubai.',
  },
  {
    title: 'Dubai Festival City',
    desc: 'Glass balustrade with ACP cladding works.',
    tags: ['Balustrades', 'ACP'],
    img: '/img/gallery/06.jpg',
    alt: 'Glass balustrade with ACP cladding, Dubai Festival City',
    caption: 'Glass Balustrade with ACP Cladding works at Dubai Festival City, Dubai.',
  },
  {
    title: 'Mövenpick Restaurant, JBR',
    desc: 'Copper cladding of oven.',
    tags: ['Cladding', 'Copper'],
    img: '/img/gallery/08.jpg',
    alt: 'Copper cladding of oven, Movenpick Restaurant, JBR',
    caption: 'Copper Cladding of Oven at Movenpic Restaurant, JBR, Dubai.',
  },
  {
    title: 'DUSUP — Margam Gas Plant',
    desc: 'Mild steel platform works.',
    tags: ['Platforms', 'Industrial'],
    img: '/img/gallery/09.jpg',
    alt: 'Mild steel platform works, Dubai Supply Authority, Margam Gas Plant',
    caption: 'Mild Steel Platform works at Dubai Supply Authority / Margam Gas Plant.',
  },
];

export const CLIENTS_ROW_A = [
  { src: '/img/clients/arabtec.jpg', alt: 'Arabtec' },
  { src: '/img/clients/alec.jpg', alt: 'ALEC' },
  { src: '/img/clients/shapoorji.jpg', alt: 'Shapoorji' },
  { src: '/img/clients/rostamani.jpg', alt: 'Rostamani' },
  { src: '/img/clients/easa-saleh.jpg', alt: 'Easa Saleh Al Gurg' },
  { src: '/img/clients/eastcoast.jpg', alt: 'East Coast' },
  { src: '/img/clients/broadway.jpg', alt: 'Broadway' },
  { src: '/img/clients/mkm.jpg', alt: 'MKM' },
  { src: '/img/clients/elp.jpg', alt: 'ELP' },
  { src: '/img/clients/hi-star.jpg', alt: 'Hi-Star' },
  { src: '/img/clients/amusementwhitewater.jpg', alt: 'Amusement White Water' },
  { src: '/img/clients/daw.jpg', alt: 'DAW' },
] as const;

export const CLIENTS_ROW_B = [
  { src: '/img/clients/eta.jpg', alt: 'ETA' },
  { src: '/img/clients/kps.jpg', alt: 'KPS' },
  { src: '/img/clients/btf.jpg', alt: 'BTF' },
  { src: '/img/clients/plafond.jpg', alt: 'Plafond' },
  { src: '/img/clients/skai.jpg', alt: 'SKAI' },
  { src: '/img/clients/clients01.jpg', alt: 'Client of Black Tulip Metal' },
  { src: '/img/clients/clients02.jpg', alt: 'Client of Black Tulip Metal' },
  { src: '/img/clients/clients03.jpg', alt: 'Client of Black Tulip Metal' },
  { src: '/img/clients/clients04.jpg', alt: 'Client of Black Tulip Metal' },
  { src: '/img/clients/clients05.jpg', alt: 'Client of Black Tulip Metal' },
  { src: '/img/clients/clients06.jpg', alt: 'Client of Black Tulip Metal' },
] as const;

export const OFFICES = [
  {
    city: 'Sharjah',
    kind: 'Head Office',
    address: ['P.O. Box 72180, Plot No: 848 A,', 'Industrial Area – 2, U.A.E.'],
    rows: [
      { label: 'Tel', value: '+971 6 531 6603', href: 'tel:+97165316603' },
      { label: 'Fax', value: '+971 6 531 6604', href: 'tel:+97165316604' },
      { label: 'Email', value: 'info@blacktulipmetals.ae', href: 'mailto:info@blacktulipmetals.ae' },
    ],
  },
  {
    city: 'Dubai',
    kind: 'Branch',
    address: [
      'Warehouse No 1, Plot No: 246 – 239,',
      'Al Qusais Ind. Area – 3, U.A.E.',
    ],
    rows: [
      { label: 'Tel', value: '+971 4 262 2637', href: 'tel:+97142622637' },
      { label: 'Email', value: 'info@blacktulipmetals.ae', href: 'mailto:info@blacktulipmetals.ae' },
    ],
  },
] as const;

export const FOOTER_COLS = [
  {
    heading: 'Navigate',
    links: ['About us', 'Capabilities', 'Projects gallery', 'Clients', 'Contact'],
    hrefs: ['#about', '#capabilities', '#projects', '#clients', '#contact'],
  },
  {
    heading: 'Structural works',
    links: [
      'Building Structures',
      'Warehouse Structures',
      'Staircases & Handrails',
      'Platforms & Bridges',
      'Signage Poles',
      'Form Works',
      'Storage Tanks',
    ],
    hrefs: null,
  },
  {
    heading: 'Architectural works',
    links: [
      'Wall & Ceiling Cladding',
      'Balustrades & Handrails',
      'Canopies & Pergolas',
      'Glass & Mirror Works',
    ],
    hrefs: null,
  },
] as const;
