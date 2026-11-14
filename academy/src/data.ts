/*
  Academy lists. Edited in the dashboard (Sanity); these are the built-in copies
  used until the dashboard answers. See src/cms.ts.
*/

export const TEAM: { name: string; photo: string; role: string; bio: string }[] = [
  {
    name: 'Salah Elatrash',
    photo: './team-salah-elatrash-v4.jpg',
    role: 'Partner',
    bio: 'Salah leads ProFun\'s operations advisory practice across the Middle East and Africa, with deep expertise in workforce capability development and senior leadership program design.',
  },
  {
    name: 'Michael Oswald',
    photo: './team-michael-oswald-v4.jpg',
    role: 'Partner',
    bio: 'Michael brings extensive experience in global attractions operations, safety management systems and training architecture, underpinning ProFun\'s accreditation standards worldwide.',
  },
  {
    name: 'Brad Merriman',
    photo: './team-brad-merriman-v4.jpg',
    role: 'Partner',
    bio: 'Brad brings deep experience in global attractions operations and advisory, shaping ProFun\'s training architecture, safety standards and senior leadership program design across its international portfolio.',
  },
  {
    name: 'Ryan Phillips',
    photo: './team-ryan-phillips-v4.jpg',
    role: 'General Manager',
    bio: 'Ryan oversees program management and client delivery, with a focus on learning systems design and regional business development across ProFun\'s international portfolio.',
  },
  {
    name: 'Ludwig Louw',
    photo: './team-ludwig-louw-v4.jpg',
    role: 'Director',
    bio: 'Ludwig leads curriculum development and facilitation excellence, bringing a rigorous approach to experiential learning design and subject matter expert networks.',
  },
  {
    name: 'Joel Ward',
    photo: './team-joel-ward-v4.jpg',
    role: 'Senior Vice President, Head of Delivery',
    bio: 'Joel leads delivery at ProFun, drawing on senior roles as Global Head of Theme Parks at DreamWorks and in brand marketing and operations at Universal Studios. Key projects include Doha QUEST, Qiddiya and Genting SkyWorlds.',
  },
  {
    name: 'Ron Merriman',
    photo: './team-ron-merriman-v5.jpg',
    role: 'Senior Vice President, Strategy',
    bio: 'Ron leads strategy at ProFun after serving as General Manager of ProFun China, working in media and entertainment at Accenture and sitting on the TEA Asia-Pacific board. Projects include Qiddiya, Shanghai World Expo and Ocean Park Hong Kong.',
  },
  {
    name: 'Chris van der Merwe',
    photo: './team-chris-van-der-merwe-v4.jpg',
    role: 'Vice President, MENA',
    bio: 'Chris leads ProFun across MENA, having run Meryal Waterpark and Saraya Aqaba as General Manager and headed operations at Riverland Dubai. Projects include Qiddiya, Mahanakhon SkyWalk and Ferrari World Abu Dhabi.',
  },
  {
    name: 'Peter Stapp',
    photo: './team-peter-stapp-v4.jpg',
    role: 'Director, Operations',
    bio: 'Peter directs operations at ProFun, with previous roles as General Manager at Qiddiya Investment Company and at Universal Studios Florida and the Walt Disney Company. Projects include Qiddiya, Doha QUEST and The RIG.',
  },
  {
    name: 'Samir Bubic',
    photo: './team-samir-bubic-v4.jpg',
    role: 'Director, MENA',
    bio: 'Samir is a Director for ProFun in the MENA region, supporting the Academy\'s regional client engagements.',
  },
  {
    name: 'Lester Silverio',
    photo: './team-lester-silverio-v5.jpg',
    role: 'Revenue Director, KSA',
    bio: 'Lester leads revenue for ProFun in Saudi Arabia.',
  },
  {
    name: 'Ibtisam Alotaibi',
    photo: './team-ibtisam-alotaibi-v4.jpg',
    role: 'Senior Finance Director, KSA',
    bio: 'Ibtisam leads finance for ProFun in Saudi Arabia.',
  },
  {
    name: 'Burhan Hanif',
    photo: './team-burhan-hanif-v4.jpg',
    role: 'Finance Director, KSA',
    bio: 'Burhan oversees finance for ProFun\'s operations in Saudi Arabia.',
  },
  {
    name: 'Raju Lama',
    photo: './team-raju-lama-v4.jpg',
    role: 'Delivery Excellence Manager, KSA',
    bio: 'Raju looks after delivery standards across ProFun\'s projects in Saudi Arabia.',
  },
  {
    name: 'Jhumur Jha',
    photo: './team-jhumur-jha-v4.jpg',
    role: 'QHSE Specialist, KSA',
    bio: 'Jhumur supports quality, health, safety and environment standards across ProFun\'s work in Saudi Arabia.',
  },
  {
    name: 'Joann Reyes',
    photo: './team-joann-reyes-v4.jpg',
    role: 'Office Manager, KSA',
    bio: 'Joann manages office operations for ProFun in Saudi Arabia.',
  },
  {
    name: 'Maen Mousa',
    photo: './team-maen-mousa-v4.jpg',
    role: 'Marketing & Communication',
    bio: 'Maen leads digital marketing and communications for the Academy, building lasting relationships with clients and partners across the business.',
  },
]

export const PROJECTS: { title: string; about: string; category: string; location: string; image: string }[] = [
  {
    title: 'Grand Hyatt Dubai Waterpark',
    about: "A resort waterpark in the heart of Dubai, with slides, pools and water play for the whole family.",
    category: 'Commercial Attraction',
    location: 'Dubai, UAE',
    image: './grand-hyatt-waterpark-card.jpg',
  },
  {
    title: 'Qiddiya City',
    about: "Saudi Arabia's future capital of entertainment, sports and culture, rising just outside Riyadh.",
    category: 'Commercial Attraction',
    location: 'Riyadh, Saudi Arabia',
    image: './qiddiya-entertainment-city-card.jpg',
  },
  {
    title: 'Ferrari World Abu Dhabi',
    about: "The world's first Ferrari-branded theme park, home to Formula Rossa, one of the fastest coasters.",
    category: 'Commercial Attraction',
    location: 'Abu Dhabi, UAE',
    image: './ferrari-world-abu-dhabi-card.jpg',
  },
  {
    title: 'Doha Quest',
    about: "An indoor theme park at Doha Oasis, home to record-breaking rides and immersive themed zones.",
    category: 'Commercial Attraction',
    location: 'Doha, Qatar',
    image: './doha-quest-card.jpg',
  },
  {
    title: 'Merdeka 118',
    about: "Malaysia's tallest tower, home to The View at 118, one of the highest observation decks on Earth.",
    category: 'Commercial Attraction',
    location: 'Kuala Lumpur, Malaysia',
    image: './merdeka-118-card.jpg',
  },
  {
    title: 'Expo 2020',
    about: "The first World Expo in the Middle East, welcoming millions of visitors to Dubai over six months.",
    category: 'Expositions & Mega-Events',
    location: 'Dubai, UAE',
    image: './expo-2020-dubai-card.jpg',
  },
  {
    title: 'Makkah Clock Royal Tower',
    about: "A landmark hotel tower beside the Grand Mosque in Makkah, crowned by its iconic clock and museum.",
    category: 'Science & Culture',
    location: 'Makkah, Kingdom of Saudi Arabia',
    image: './makkah-clock-royal-tower-card.jpg',
  },
  {
    title: 'Natural History Museum',
    about: "The largest natural and historical museum in the western US, with over 35 million specimens.",
    category: 'Science & Culture',
    location: 'Los Angeles, USA',
    image: './natural-history-museum-los-angeles-card.jpg',
  },
  {
    title: 'Dubai Parks & Resorts',
    about: "The region's largest integrated leisure destination, with theme parks, a waterpark and a resort.",
    category: 'Commercial Attraction',
    location: 'Dubai, UAE',
    image: './dubai-parks-resorts-card.jpg',
  },
]

export const PARTNERS: { name: string; logo: string; color: string; big?: boolean }[] = [
  { name: 'Ellis & Associates', logo: './partner-ellis-sst.png', color: '#00AFDC' },
  { name: 'IAAPA', logo: './partner-iaapa-v2.png', color: '#3985FD' },
  { name: 'IBCCES', logo: './partner-ibcces-v2.png', color: '#15D2A4' },
  { name: 'American Alliance of Museums', logo: './partner-aam-v2.png', color: '#000050' },
  { name: 'World Waterpark Association', logo: './partner-wwa-hd.png', color: '#F85707', big: true },
  { name: 'Themed Entertainment Association', logo: './partner-tea-v2.png', color: '#8238EB', big: true },
]

export const STATS: { numeric: number; suffix: string; label: string; color: string; ink: string }[] = [
  { numeric: 45, suffix: '+', label: 'Years in the industry, since 1980', color: '#3985FD', ink: '#2F6FE0' },
  { numeric: 500, suffix: '+', label: 'Clients & projects across six continents', color: '#15D2A4', ink: '#0E9F7C' },
  { numeric: 50, suffix: '+', label: 'Countries served globally', color: '#FFCA03', ink: '#C99A00' },
  { numeric: 10, suffix: 'K+', label: 'Trainees developed, and growing', color: '#FC026F', ink: '#E0025F' },
]

export type Format = 'In-Person' | 'Virtual' | 'eLearning' | 'Blended'
export type Course = {
  id: string
  title: string
  category: string
  format: Format
  duration: string
  price: number
  accredited?: string
  desc: string
  dates: string[]
}

export const CATEGORY_COLORS: Record<string, string> = {
  'Safety & Certification': '#00AFDC',
  'Guest Experience': '#FC026F',
  'Operations': '#3985FD',
  'Leadership': '#8238EB',
  'Industry Experience': '#15D2A4',
}

export const SELF_PACED = ['Start anytime']

export const COURSES: Course[] = [
  {
    id: 'iltp', title: 'International Lifeguard Training Program', category: 'Safety & Certification', format: 'Blended',
    duration: '4 days', price: 2400, accredited: 'Ellis & Associates',
    desc: 'The global standard in lifeguard certification for waterparks, resorts and aquatic venues.',
    dates: ['9 Nov 2026 · Riyadh', '7 Dec 2026 · Jeddah', '11 Jan 2027 · Riyadh'],
  },
  {
    id: 'cpr', title: 'CPR & First Aid', category: 'Safety & Certification', format: 'Blended',
    duration: '1 day', price: 650, accredited: 'Ellis & Associates',
    desc: 'Combined CPR, AED and first aid certification at layperson and healthcare provider levels.',
    dates: ['16 Nov 2026 · Riyadh', '14 Dec 2026 · Riyadh', '18 Jan 2027 · Jeddah'],
  },
  {
    id: 'vanguard', title: 'vanGUARD Aquatics Leadership', category: 'Leadership', format: 'Blended',
    duration: '2 days', price: 1800, accredited: 'Ellis & Associates',
    desc: 'Leadership training for aquatic supervisors and managers who run lifeguard teams.',
    dates: ['23 Nov 2026 · Riyadh', '25 Jan 2027 · Riyadh'],
  },
  {
    id: 'slide', title: 'Water Slide Dispatch Operator', category: 'Safety & Certification', format: 'eLearning',
    duration: 'Self-paced · approx. 3 hrs', price: 320, accredited: 'Ellis & Associates',
    desc: 'Safe dispatch procedures, rider requirements and emergency response for slide operators.',
    dates: SELF_PACED,
  },
  {
    id: 'pathogens', title: 'Preventing Bloodborne & Airborne Pathogens', category: 'Safety & Certification', format: 'eLearning',
    duration: 'Self-paced · approx. 2 hrs', price: 240, accredited: 'Ellis & Associates',
    desc: 'Exposure control, protective equipment and response protocols for frontline teams.',
    dates: SELF_PACED,
  },
  {
    id: 'ttt', title: 'Train the Trainer', category: 'Leadership', format: 'eLearning',
    duration: 'Self-paced · approx. 6 hrs', price: 890, accredited: 'Ellis & Associates',
    desc: 'Build the skills to deliver training in-house with confidence and consistency.',
    dates: SELF_PACED,
  },
  {
    id: 'gse', title: 'Guest Service Excellence', category: 'Guest Experience', format: 'In-Person',
    duration: '2 days', price: 1450,
    desc: 'The behaviors, scripts and standards behind world-class guest experiences.',
    dates: ['10 Nov 2026 · Riyadh', '8 Dec 2026 · Riyadh', '12 Jan 2027 · Jeddah'],
  },
  {
    id: 'recovery', title: 'Conflict Resolution & Service Recovery', category: 'Guest Experience', format: 'Virtual',
    duration: '2 half-days', price: 780,
    desc: 'Turn difficult moments into loyal guests, with role-play and real attraction scenarios.',
    dates: ['18 Nov 2026 · Live online', '16 Dec 2026 · Live online'],
  },
  {
    id: 'ride', title: 'Ride Operator Certification', category: 'Operations', format: 'In-Person',
    duration: '3 days', price: 1950,
    desc: 'Ride operation, safety checks, guest communication and emergency procedures.',
    dates: ['24 Nov 2026 · Riyadh', '19 Jan 2027 · Riyadh'],
  },
  {
    id: 'queue', title: 'Throughput & Queue-Line Management', category: 'Operations', format: 'Virtual',
    duration: '1 day', price: 690,
    desc: 'Capacity planning, queue design and guest flow that lift throughput and satisfaction.',
    dates: ['2 Dec 2026 · Live online', '27 Jan 2027 · Live online'],
  },
  {
    id: 'leadership', title: 'Leadership & Management in Attractions', category: 'Leadership', format: 'In-Person',
    duration: '3 days', price: 3200,
    desc: 'Practical leadership for supervisors and managers, from coaching to performance and KPIs.',
    dates: ['30 Nov 2026 · Riyadh', '2 Feb 2027 · Riyadh'],
  },
  {
    id: 'intro', title: 'Introduction to the Attractions Industry', category: 'Industry Experience', format: 'eLearning',
    duration: 'Self-paced · approx. 4 hrs', price: 290,
    desc: 'How theme parks, waterparks, museums and destinations work, and where you fit in.',
    dates: SELF_PACED,
  },
]
