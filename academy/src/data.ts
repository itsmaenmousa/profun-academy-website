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

export const VALUES: { title: string; desc: string; color: string }[] = [
  { title: 'Shaped by operational experience', desc: 'Learning shaped by attractions professionals who understand the realities of opening, operating, and leading visitor experiences.', color: '#3985FD' },
  { title: 'Practical learning, real-world application', desc: 'Scenarios, simulations, and practical activities connect learning to the workplace, with on-site delivery where the brief requires it.', color: '#15D2A4' },
  { title: 'Built around each role', desc: 'Programs tailored to specific responsibilities and career stages, from frontline operations to management and leadership.', color: '#99CA32' },
  { title: 'Culturally grounded, in design and delivery', desc: 'Learning shaped around local cultures, values, and workplace expectations, with delivery that connects with diverse teams across regions.', color: '#FFCA03' },
  { title: 'Learning that speaks your team\u2019s language', desc: 'Programs delivered in Arabic, English, and other languages to suit your workforce, helping participants understand, engage, and apply their learning.', color: '#FC026F' },
  { title: 'From frontline to senior leadership', desc: 'Development that supports capability at every level, helping organizations prepare teams, strengthen managers, and develop leaders.', color: '#8238EB' },
  { title: 'Capability that stays with your team', desc: 'On-site coaching and train-the-trainer options help your people reinforce learning and sustain standards over time.', color: '#00AFDC' },
  { title: 'Recognized training and specialist partnerships', desc: 'Programs supported by recognized accreditations, certifications, and specialist partnerships, with the applicable recognition specified for each program.', color: '#F85707' },
]

export const SERVICES: { short: string; title: string; desc: string; color: string }[] = [
  {
    short: 'Learning Strategy',
    title: 'Learning Strategy and Management',
    desc: 'Align learning with business priorities through needs analysis, planning, governance, and performance measurement.',
    color: '#000050',
  },
  {
    short: 'Workforce Capability',
    title: 'Workforce Capability Development',
    desc: 'Define role competencies, career pathways, and leadership development priorities to build a capable workforce.',
    color: '#3985FD',
  },
  {
    short: 'Program Design',
    title: 'Program Design and Content Development',
    desc: 'Create customized programs, materials, and assessments shaped around your operations, culture, and workforce needs.',
    color: '#8238EB',
  },
  {
    short: 'Training Delivery',
    title: 'Training Delivery and Facilitation',
    desc: 'Build practical skills through facilitated training, on-site coaching, and train-the-trainer programs tailored to your teams.',
    color: '#FC026F',
  },
  {
    short: 'Operational Readiness',
    title: 'Pre-Opening and Operational Readiness Training',
    desc: 'Prepare teams for opening through role-specific training, operational simulations, and readiness assessments.',
    color: '#F85707',
  },
]

export const FORMATS: { id: string; color: string; label: string; title: string; desc: string; tags: string[]; image: string; pos: string }[] = [
  {
    id: 'in-person',
    color: '#3985FD',
    label: 'In-Person',
    title: 'In-Person Learning.',
    desc: 'Practical sessions led by experienced facilitators at your workplace or a dedicated venue, using discussion, activities, and realistic scenarios to build skills and confidence.',
    tags: ['Workshops', 'Seminars', 'Site Visits', 'Role-Play Simulations', 'Train-the-Trainer'],
    image: './learning-in-person.jpg',
    pos: '60% 22%',
  },
  {
    id: 'virtual',
    color: '#FC026F',
    label: 'Virtual',
    title: 'Virtual Learning.',
    desc: 'Live, facilitator-led online sessions that bring teams together through interactive discussions, group activities, and guided practice.',
    tags: ['Live Webinars', 'Virtual Cohorts', 'Remote Coaching', 'Group Breakouts'],
    image: './academy-virtual.jpg',
    pos: '50% 38%',
  },
  {
    id: 'elearning',
    color: '#00AFDC',
    label: 'eLearning',
    title: 'eLearning.',
    desc: 'Self-paced digital learning that helps employees build knowledge and reinforce skills, with language options and progress tracking based on program requirements.',
    tags: ['SCORM Modules', 'Microlearning', 'Video-Based Learning', 'Knowledge Assessments'],
    image: './academy-elearning.jpg',
    pos: '50% 45%',
  },
  {
    id: 'blended',
    color: '#15D2A4',
    label: 'Blended',
    title: 'Blended Learning.',
    desc: 'A tailored combination of in-person, virtual, and self-paced learning, supported by workplace practice to reinforce application over time.',
    tags: ['Pre-Work', 'Live Session', 'Sustained Follow-Through', 'Spaced Learning Design'],
    image: './learning-virtual.jpg',
    pos: '50% 26%',
  },
]

export type Area = { name: string; color: string; subs: string[] }
export type Program = { category: string; title: string; desc: string; image: string; color: string; pos?: string; label: string; items: (string | Area)[] }

export const TAILORED: Program[] = [
  {
    category: 'Tailored Training Programs',
    title: 'The ProFun Academy',
    desc: 'Tailored training across every part of an attraction, shaped around your people, culture and operations.',
    image: './training-programs-v2.jpg',
    pos: '50% 35%',
    color: '#8238EB',
    label: 'Explore program areas',
    items: [
      { name: 'Leadership & Management', color: '#3985FD', subs: ['Policy & Procedure Development Across All Departments', 'Leadership Development & Capability Building', 'Keynote Speakers', 'Revenue & Financial Management'] },
      { name: 'Industry Experience', color: '#E0A800', subs: ['Global Benchmarking', 'Facility Tours', 'Industry Networking & Association', 'International Study & Exposure Trips'] },
      { name: 'Safety & Security', color: '#15D2A4', subs: ['Facility Audits and Reviews', 'First Aid, CPR & AED Certification', 'Risk Assessment Overview', 'Emergency Action Planning', 'Incident Reporting and Follow-up', 'Regulatory Compliance Best Practices'] },
      { name: 'Rides & Attractions', color: '#00AFDC', subs: ['Ride Operator Certification', 'Lifeguard Certification', 'Ride Scripts, Spiels and Safety Announcements', 'Throughput & Queue-line Management', 'Guest Management and Accessibility'] },
      { name: 'Frontline Colleagues', color: '#F85707', subs: ['Introduction and History of Attractions', 'Effective Communication', 'Conflict Resolution & Service Recovery', 'Point of Sale Operations', 'Admission & Ticketing Operations'] },
      { name: 'Human Resources', color: '#7FB01F', subs: ['Motivation & Incentive Programs', 'Colleague Engagement Programs', 'Coaching & Mentorship', 'Train-the-Trainer Programs', 'Onboarding and Induction', 'Performance Management', 'Facilitator Guides & Assessment Tools'] },
      { name: 'Guest Service Excellence', color: '#8238EB', subs: ['Guest Interaction Scripts and Best Practices', 'Entertainment in Attractions', 'Audits and Secret Shoppers', 'KPI Recommendations', 'Role-play Simulations & Coaching', 'Guided Experiences'] },
      { name: 'Sales & Marketing', color: '#FC026F', subs: ['Current Trends and Best Practices', 'Brand Positioning', 'Industry Strategies and Tactics', 'Social Media Engagement', 'Sales Channel Management'] },
      { name: 'Food & Beverage', color: '#3985FD', subs: ['Outlet Setup & Layout', 'Upselling Techniques', 'Food Hygiene Best Practices', 'Kitchen Operation Efficiency', 'Attractions Menu Overview'] },
      { name: 'Retail', color: '#15D2A4', subs: ['Merchandising & Store Layout', 'Inventory & Stock Management', 'Sales Strategies', 'Loss Prevention & Shrinkage', 'Cashiering Overview'] },
      { name: 'Engineering & Technical Services', color: '#7FB01F', subs: ['Technical Regulations & Industry Best Practices', 'Inspection Protocols', 'Preventive & Predictive Maintenance'] },
      { name: 'Information Technology', color: '#8238EB', subs: ['Technology in Attractions', 'Applications and Digital Experience', 'Guest Analytics'] },
      { name: 'Housekeeping', color: '#F85707', subs: ['Chemical Handling Procedures', 'Inspection Protocols', 'Cleaning Standards'] },
    ],
  },
]

export const ACCREDITED: Program[] = [
  {
    category: 'Accredited and Certified Programs',
    title: 'Ellis & Associates',
    desc: 'The gold standard in first aid, CPR and safety certification for attractions teams, plus lifeguard and aquatic programs.',
    image: './ellis-first-aid.jpg',
    color: '#00AFDC',
    label: 'Explore courses',
    items: ['CPR & First Aid', 'Preventing Bloodborne & Airborne Pathogens', 'Supplemental Oxygen Support', 'Active Shooter Assailant Safety', 'Attraction Operator', 'Water Slide Dispatch Operator', 'International Lifeguard Training Program', 'vanGUARD Aquatics Leadership', 'Water Safety Plus', 'Jeff Ellis Swimming', 'Train the Trainer'],
  },
]
