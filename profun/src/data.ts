/*
  ProFun content, taken from profun.com.
  Images are served from profun.com's media library (PF) until final files are supplied.
*/
export const PF = 'https://profun.com/wp-content/uploads/'
export const pf = (p: string) => PF + p

/* ── Sectors (the four approved tags) ─────────────────────────── */
export type SectorId = 'commercial' | 'science' | 'brand' | 'expos'

export const SECTORS: {
  id: SectorId
  tag: string
  name: string
  color: string
  title: string
  lead: string
  body: string[]
  cover: string
  projects: [string, string, string][]
}[] = [
  {
    id: 'commercial',
    tag: 'Commercial Attraction',
    name: 'Commercial Attractions',
    color: '#F85707',
    title: 'Where guest experience meets the bottom line.',
    lead: 'We align unforgettable visitor moments with robust financial outcomes.',
    body: [
      'The leisure market is crowded and evolving. Guests measure theme parks against not only each other but also movies, gaming, esports and digital entertainment. Competing means creating operations that are lean, scalable and resilient.',
      'ProFun brings nearly 45 years of experience guiding commercial attractions to outperform expectations. We advise on capacity planning, pricing and ticketing strategy, workforce design, operational readiness and ongoing management. The outcome: attractions that deliver memorable guest experiences and strong, repeatable financial returns.',
    ],
    cover: pf('2024/05/Ferrari-World.jpg'),
    projects: [
      ['Ferrari World', 'Yas Island, Abu Dhabi', '2024/05/Ferrari-World.jpg'],
      ['Ain Dubai', 'Dubai, UAE', '2024/04/Ain-Dubai-wheel.jpg'],
      ['QUEST', 'Doha, Qatar', '2024/04/Doha-Oasis-Quest.jpg'],
      ['The Vessel', 'New York, USA', '2024/04/Hudson-Yards.jpg'],
      ['Dubai Parks and Resorts', 'Dubai, UAE', '2024/05/Motiongate.jpg'],
      ['The Making of Harry Potter', 'London, UK', '2024/04/The-Making-of-Harry-Potter-London.jpg'],
      ['One Vanderbilt', 'New York, USA', '2024/04/1-Vanderbilt.jpg'],
      ['Mahanakhon Skywalk', 'Bangkok, Thailand', '2024/04/Mahanakhon-Skywalk-1.jpg'],
      ['The Park at OWA', 'Foley, USA', '2024/05/Rollin-Thunder-Drop.jpg'],
      ['The Crayola Experience', 'Easton, USA', '2024/04/The-Crayola-Experience.jpg'],
      ['Space Center Houston', 'Houston, USA', '2024/04/Space-Center-Houston-1.jpg'],
      ['Yas Waterworld', 'Abu Dhabi, UAE', '2024/04/Yas-Waterworld-1.jpg'],
      ['Kennedy Space Center', 'Merritt Island, USA', '2024/04/Kennedy-Space-Center-1.jpg'],
      ['New York Botanical Garden', 'New York, USA', '2024/04/New-York-Botanical-Garden-1.jpg'],
      ['Everland Resort', 'Yongin, South Korea', '2024/04/Everland-Resort.jpg'],
    ],
  },
  {
    id: 'science',
    tag: 'Science & Culture',
    name: 'Science & Culture',
    color: '#15D2A4',
    title: 'Keeping culture vibrant, and viable.',
    lead: 'We help cultural institutions innovate while protecting their long-term sustainability.',
    body: [
      'Cultural institutions face rising expectations: visitors want interactive, personalized experiences, while funders demand financial responsibility. ProFun helps museums, aquariums and science centers innovate without losing sight of economic sustainability.',
      'We have supported leading institutions, from New York’s American Museum of Natural History to Philadelphia’s Please Touch Museum, in rethinking pricing, streamlining operations and building attendance strategies. Our work enables cultural organizations to remain relevant, accessible and financially secure.',
    ],
    cover: pf('2024/04/American-Museum-of-Natural-History.jpg'),
    projects: [
      ['The Henry Ford Museum', 'Dearborn, USA', '2024/04/The-Henry-Ford-Museum.jpg'],
      ['California Academy of Sciences', 'San Francisco, USA', '2024/04/CA-Academy-of-Sciences.jpg'],
      ['Makkah Clock Tower', 'Makkah, Saudi Arabia', '2024/04/Makkah-Clock-Tower-1.jpg'],
      ['Aquarium of the Pacific', 'Long Beach, USA', '2024/04/Aquarium-of-the-Pacific-1.jpg'],
      ['American Museum of Natural History', 'New York, USA', '2024/04/American-Museum-of-Natural-History.jpg'],
      ['9/11 Memorial and Museum', 'New York, USA', '2024/04/911-Memorial-Museum.jpg'],
      ['uShaka Marine World', 'Durban, South Africa', '2024/04/uShaka-Marine-World.jpg'],
      ['Longwood Gardens', 'Kennett Square, USA', '2024/04/Longwood-Gardens-1.jpg'],
      ['The Maryland Zoo', 'Baltimore, USA', '2024/04/The-Maryland-Zoo-in-Baltimore-1.jpg'],
      ['Georgia Aquarium', 'Atlanta, USA', '2024/04/Georgia-Aquarium-1.jpg'],
      ['The Smithsonian Museum', 'Washington, DC', '2024/04/Smithsonian-Museum-1.jpg'],
      ['Brookfield Zoo', 'Brookfield, USA', '2024/04/Brookfield-Zoo.jpg'],
      ['Chicago Botanic Garden', 'Chicago, USA', '2024/04/Chicago-Botanic-Garden.jpg'],
      ['Academy of Motion Picture Arts and Sciences', 'Los Angeles, USA', '2024/04/Academy-of-Motion-Picture-Art-and-Sciences-1.jpg'],
    ],
  },
  {
    id: 'brand',
    tag: 'Brand Centers',
    name: 'Brand Centers',
    color: '#8238EB',
    title: 'From products to places, flawlessly run.',
    lead: 'We turn corporate identity into destinations that operate efficiently and profitably.',
    body: [
      'Today’s leading brands understand that engagement goes beyond product: it’s about immersive experiences. ProFun helps corporations translate brand identity into operationally viable destinations: visitor centers, tours, exhibitions and brand lands that extend loyalty and drive revenue.',
      'Our role is not design but commercial and operational discipline. We bring financial modeling, operational planning and management expertise to ensure brand destinations run efficiently, profitably and in alignment with brand values.',
    ],
    cover: pf('2024/04/World-of-Coca-Cola.jpg'),
    projects: [
      ['Absolut Home Experience', 'Åhus, Sweden', '2024/04/Absolut-Home-Building-1.jpg'],
      ['The Heineken Experience', 'Amsterdam, Netherlands', '2024/05/The-Heineken-Experience.jpg'],
      ['Autostadt', 'Wolfsburg, Germany', '2024/04/Autostadt.jpg'],
      ['CNN Studio Tours', 'Atlanta, USA', '2024/04/CNN-Studio-Tour.jpg'],
      ['Ford Rouge Factory Tour', 'Dearborn, USA', '2024/04/Ford-Rouge-Factory-Tour.jpg'],
      ['World of Coca-Cola', 'Atlanta, USA', '2024/04/World-of-Coca-Cola.jpg'],
      ['The Jameson Experience', 'Midleton, Ireland', '2024/05/The-Jameson-Experience.jpg'],
      ['The Johnnie Walker Experience', 'Edinburgh, UK', '2024/04/Johnnie-Walker-statues.jpg'],
      ['Hershey’s Chocolate World', 'Hershey, USA', '2024/04/Hersheys-Chocolate-World.jpg'],
    ],
  },
  {
    id: 'expos',
    tag: 'Expositions & Mega-Events',
    name: 'Expositions & Mega-Events',
    color: '#3985FD',
    title: 'Planned with precision. Managed to perfection.',
    lead: 'From financial planning to day-to-day management, we ensure the world’s biggest events deliver.',
    body: [
      'World expos and Olympiads combine scale, complexity and global visibility. They demand flawless planning, cross-sector collaboration and operational control under extreme scrutiny.',
      'ProFun has been involved in every dimension of exposition operations since Knoxville 1982. We develop sound financial frameworks, create staffing and concession strategies, implement operational systems and manage day-to-day execution. Our goal: ensure each event delivers on its promise while running efficiently and profitably.',
    ],
    cover: pf('2024/04/Expo-2020-Dubai-1.jpg'),
    projects: [
      ['Expo 2020', 'Dubai, UAE', '2024/04/Expo-2020-Dubai-1.jpg'],
      ['2012 Summer Olympics', 'London, UK', '2024/04/2012-Summer-Olympics-London-1.jpg'],
      ['Expo 2010', 'Shanghai, China', '2024/04/Expo-2010-Shanghai.jpg'],
      ['Pacific National Exhibition', 'Vancouver, Canada', '2024/04/Pacific-National-Exhibition-Vancouver-1.jpg'],
      ['Del Mar Fair', 'Del Mar, USA', '2024/04/Del-Mar-Fair.jpg'],
      ['Expo 2000', 'Hannover, Germany', '2024/05/Expo-2000-Hannover.jpg'],
      ['The Calgary Exhibition and Stampede', 'Calgary, Canada', '2024/04/The-Calgary-Exhibition-and-Stampede.jpg'],
      ['Expo 1992', 'Seville, Spain', '2024/04/Expo-1992-Seville.jpg'],
      ['Expo 1986', 'Vancouver, Canada', '2024/05/Expo-1986-Vancouver.jpg'],
      ['1984 Summer Olympics', 'Los Angeles, USA', '2024/04/1984-Summer-Olympics-Los-Angeles.jpg'],
    ],
  },
]
export const sectorById = (id: SectorId) => SECTORS.find(s => s.id === id)!

/* ── Featured projects (home page rail) ───────────────────────── */
export const FEATURED: { title: string; location: string; sector: SectorId; image: string; about: string; link?: string }[] = [
  { title: 'QUEST', location: 'Doha, Qatar', sector: 'commercial', image: pf('2023/12/20210630-DohaQuest2.jpg'), about: 'Qatar’s first indoor theme park, at Doha Oasis, with record-breaking rides and themed zones.', link: 'https://www.dohaquest.com/en' },
  { title: 'King Power Mahanakhon Skywalk', location: 'Bangkok, Thailand', sector: 'commercial', image: pf('2024/06/Mahanakhon-Skywalk-1-scaled.jpg'), about: 'A rooftop observation deck with a glass floor, high above one of Bangkok’s tallest towers.' },
  { title: 'Ferrari World', location: 'Yas Island, Abu Dhabi', sector: 'commercial', image: pf('2024/05/Ferrari-World.jpg'), about: 'The world’s first Ferrari-branded theme park, home to one of the fastest roller coasters.' },
  { title: 'American Museum of Natural History', location: 'New York, USA', sector: 'science', image: pf('2024/06/AMNH-Rose-Center-scaled.jpg'), about: 'One of the world’s great natural history museums, on Manhattan’s Upper West Side.', link: 'https://www.amnh.org/' },
  { title: 'Makkah Royal Clock Tower', location: 'Makkah, Saudi Arabia', sector: 'science', image: pf('2024/06/Makkah-Royal-Clock-Tower-scaled.jpg'), about: 'A landmark tower beside the Grand Mosque, crowned by its iconic clock and museum.' },
  { title: 'Aquarium of the Pacific', location: 'Long Beach, USA', sector: 'science', image: pf('2024/06/Aquarium-of-the-Pacific-scaled.jpg'), about: 'A leading public aquarium on the Long Beach waterfront, focused on the Pacific Ocean.', link: 'https://www.aquariumofpacific.org/' },
  { title: 'Smithsonian Museum of Natural History', location: 'Washington, DC', sector: 'science', image: pf('2024/06/Smithsonian-Museum-scaled.jpg'), about: 'One of the most visited museums in the world, on the National Mall.', link: 'https://naturalhistory.si.edu/' },
  { title: 'Autostadt', location: 'Wolfsburg, Germany', sector: 'brand', image: pf('2024/06/Autostadt-scaled.jpg'), about: 'Volkswagen’s brand destination beside its home factory, with pavilions for each of its marques.' },
  { title: 'Edge', location: 'New York, USA', sector: 'commercial', image: pf('2024/06/The-Edge-scaled.jpg'), about: 'The highest outdoor sky deck in the Western Hemisphere, at Hudson Yards.', link: 'https://www.edgenyc.com/en' },
  { title: 'Georgia Aquarium', location: 'Atlanta, USA', sector: 'science', image: pf('2024/06/Georgia-Aquarium-scaled.jpg'), about: 'One of the largest aquariums in the world, in downtown Atlanta.', link: 'https://www.georgiaaquarium.org/' },
]

/* ── Services ─────────────────────────────────────────────────── */
export const SERVICES: { id: string; short: string; title: string; lead: string; desc: string; items?: string[]; color: string; cases: string[] }[] = [
  {
    id: 'planning', short: 'Planning', title: 'Strategies designed to operate.', color: '#3985FD',
    lead: 'We create plans that are executable, resilient and commercially grounded.',
    desc: 'Strong planning ensures creative ambition translates into operational success. ProFun develops strategies that balance guest expectations with cost structures, workforce realities and financial feasibility.',
    items: ['Strategic, business and operational planning', 'Facility programming and operational input into design', 'Market analysis and ticketing strategy', 'Staffing and workforce planning', 'Owner representation and operational readiness'],
    cases: ['Osaka World Expo 2025', 'Dubai World Expo 2020', '2012 London Olympics', 'Absolut Home Experience', 'The Johnnie Walker Experience', 'Newfields', 'Newport Mansions', 'Dubai Parks and Resorts', 'Ain Dubai', 'Baha Mar Bay'],
  },
  {
    id: 'advisory', short: 'Advisory', title: 'Insight that powers operations.', color: '#15D2A4',
    lead: 'We combine sharp analysis with practical recommendations, at every stage of a project, to drive measurable impact.',
    desc: 'Every attraction faces the same challenge: increasing revenue while controlling cost without sacrificing the visitor experience. ProFun’s advisory services deliver the strategies, audits and interventions needed to unlock performance.',
    items: ['Operations, marketing and organizational audits', 'Revenue growth strategies (pricing, promotions, ticketing)', 'Employee engagement and leadership training', 'Service excellence improvement programs', 'Destination travel and relationship marketing strategies'],
    cases: ['Osaka World Expo 2025', 'Dubai World Expo 2020', 'Absolut Home Experience', 'The Johnnie Walker Experience', 'Dubai Parks and Resorts', 'Baha Mar Bay', 'Desert Falls Water & Adventure Park', 'Qiddiya', 'Please Touch Museum', 'QUEST'],
  },
  {
    id: 'training', short: 'Training', title: 'Developing and training teams that deliver.', color: '#FC026F',
    lead: 'We equip staff and leaders with the skills to improve guest experience, operations, safety, service and profitability.',
    desc: 'The ProFun Academy has delivered award-winning training for over 30 years. We design training “by operators, for operators,” ensuring every module is grounded in best practice and tailored to client needs. Many of our programs have been recognized with IAAPA Brass Ring Awards for innovation and impact.',
    cases: ['Ferrari World', 'Paisley Park', 'The Strat', 'Qiddiya', 'Rock & Roll Hall of Fame', 'Natural History Museum LA', 'Expo 2010 Shanghai', 'Exploratorium', 'QUEST', 'The Crayola Experience'],
  },
  {
    id: 'implementation', short: 'Implementation', title: 'From strategy to opening day.', color: '#FFCA03',
    lead: 'We close the gap between planning and reality with hands-on execution.',
    desc: 'A strategy is only as strong as its execution. ProFun supports full operational launch, from staff recruitment and training to systems integration and opening-day management. We anticipate risks, resolve bottlenecks and ensure the operation is positioned for long-term success.',
    cases: ['Paisley Park', 'The Park at OWA', 'One Vanderbilt', 'Desert Falls Water & Adventure Park', 'The Strat', 'Qiddiya', 'Please Touch Museum', 'Natural History Museum LA', 'Expo 2010 Shanghai', 'Warner Bros. Studio Tour, The Making of Harry Potter', 'World of Coca-Cola', 'Mystic Seaport Museum', 'The Henry Ford', 'Exploratorium', 'QUEST', 'CNN Studio Tour', 'American Museum of Natural History', 'The Crayola Experience', 'Aquarium of the Pacific', 'Hershey’s Chocolate World'],
  },
  {
    id: 'management', short: 'Management', title: 'Operational excellence, sustained.', color: '#8238EB',
    lead: 'We manage attractions day-to-day so they run efficiently, profitably and consistently.',
    desc: 'Design and construction are milestones, not endpoints. Sustained performance requires management discipline. ProFun provides on-site operational leadership across all functions, from guest services and ticketing to food & beverage, retail, finance, HR and maintenance. Our role: to safeguard guest satisfaction, optimize efficiency and protect profitability long after the ribbon is cut.',
    cases: ['2012 London Olympics', 'The Park at OWA', 'Desert Falls Water & Adventure Park', 'Qiddiya', 'Sky Deck Chicago', 'Rock & Roll Hall of Fame', 'uShaka Marine World', 'Mystic Seaport Museum', 'QUEST', 'CNN Studio Tour', 'College Football Hall of Fame', 'Mahanakhon Skywalk', 'Hershey’s Chocolate World'],
  },
]

/* ── Case studies (with the services involved) ────────────────── */
export const CASE_STUDIES: [string, string[], string][] = [
  ['Osaka World Expo 2025', ['Advisory', 'Planning'], '2026/02/expo-2025.jpg'],
  ['Dubai World Expo 2020', ['Advisory', 'Planning'], '2026/02/Expo-2020.png'],
  ['2012 London Olympics', ['Management', 'Planning'], '2026/02/London-2012-Logo-375x284.png'],
  ['Ferrari World', ['Training'], '2024/05/200x150-1.jpg'],
  ['Absolut Home Experience', ['Advisory', 'Planning'], '2024/03/Absolut-Home-Experience-logo.jpg'],
  ['The Johnnie Walker Experience', ['Advisory', 'Planning'], '2024/03/Johnnie-Walker-Logo.jpg'],
  ['Newfields', ['Planning'], '2024/03/Newfields-logo.jpg'],
  ['Newport Mansions', ['Planning'], '2024/03/200x150.png'],
  ['Paisley Park', ['Implementation', 'Training'], '2024/03/Paisley-Park-logo.jpg'],
  ['Dubai Parks and Resorts', ['Advisory', 'Planning'], '2023/10/Dubai-Parks.jpg'],
  ['Ain Dubai', ['Planning'], '2024/03/blue-waters-logo.jpg'],
  ['Baha Mar Bay', ['Advisory', 'Planning'], '2024/03/Baha-Bay-Logo.jpg'],
  ['The Park at OWA', ['Implementation', 'Management', 'Planning'], '2024/03/park-owa-logo.jpg'],
  ['One Vanderbilt', ['Implementation', 'Planning'], '2024/03/One-Vanderbilt-Logo.jpg'],
  ['Hudson Yards', ['Planning'], '2024/03/Hudson-Yards-logo.jpg'],
  ['Desert Falls Water & Adventure Park', ['Advisory', 'Implementation', 'Management', 'Planning'], '2024/03/Salwa.png'],
  ['The Strat', ['Implementation', 'Planning', 'Training'], '2024/03/Strat-logo.jpg'],
  ['Qiddiya', ['Advisory', 'Implementation', 'Management', 'Planning', 'Training'], '2024/03/Qiddiya-logo.jpg'],
  ['Sky Deck Chicago', ['Management'], '2024/03/Sky-Deck-logo.jpg'],
  ['Rock & Roll Hall of Fame', ['Management', 'Planning', 'Training'], '2023/10/Rock-N-Rol-Hall.jpg'],
  ['Please Touch Museum', ['Advisory', 'Implementation', 'Planning'], '2024/03/Please-Touch-Museum-Logo.jpg'],
  ['Natural History Museum LA', ['Implementation', 'Planning', 'Training'], '2023/10/Nat-History-Museum-of-LAC.jpg'],
  ['Expo 2010 Shanghai', ['Implementation', 'Planning', 'Training'], '2023/10/003.png'],
  ['uShaka Marine World', ['Management', 'Planning'], '2023/10/Ushaka.png'],
  ['Warner Bros. Studio Tour, The Making of Harry Potter', ['Implementation', 'Planning'], '2023/10/Warner-Bros.jpg'],
  ['World of Coca-Cola', ['Implementation', 'Planning'], '2023/10/Coca-Cola.jpg'],
  ['Mystic Seaport Museum', ['Implementation', 'Management', 'Planning'], '2023/10/Mystic-Seaport.jpg'],
  ['The Field Museum', ['Planning'], '2023/10/Field-Museum.jpg'],
  ['The Henry Ford', ['Implementation', 'Planning'], '2023/10/Ford.jpg'],
  ['Exploratorium', ['Implementation', 'Planning', 'Training'], '2023/10/Exploratorium.jpg'],
  ['QUEST', ['Advisory', 'Implementation', 'Management', 'Planning', 'Training'], '2023/10/Doha-Oasis.png'],
  ['9/11 Memorial and Museum', ['Planning'], '2023/10/9-11-Memorial.jpg'],
  ['CNN Studio Tour', ['Implementation', 'Management', 'Planning'], '2023/10/CNN-tour.jpg'],
  ['California Academy of Sciences', ['Planning'], '2023/10/CA-Academy-of-Sciences.jpg'],
  ['American Museum of Natural History', ['Implementation', 'Planning'], '2023/10/Amer-Museum-of-Nat-History.jpg'],
  ['College Football Hall of Fame', ['Management', 'Planning'], '2023/10/College-Football-Hall.jpg'],
  ['The Crayola Experience', ['Implementation', 'Planning', 'Training'], '2023/10/Crayola.jpg'],
  ['Aquarium of the Pacific', ['Implementation', 'Planning'], '2023/10/Aquarium-of-the-Pacific.jpg'],
  ['Mahanakhon Skywalk', ['Management', 'Training'], '2024/03/Mahanakhon.png'],
  ['Hershey’s Chocolate World', ['Advisory', 'Implementation', 'Management', 'Planning', 'Training'], '2023/10/Hersheys.jpg'],
  ['Makkah Clock Tower', ['Implementation', 'Planning'], '2023/12/Makkah-ClockRoyal-Tower.png'],
]

/* ── Clients & projects (logo wall with Sector / Region / Sort) ─ */
export type RegionId = 'na' | 'eu' | 'ap' | 'mea'
export const REGIONS: { id: RegionId; name: string }[] = [
  { id: 'na', name: 'North & Central America' },
  { id: 'eu', name: 'Europe' },
  { id: 'ap', name: 'Asia Pacific' },
  { id: 'mea', name: 'Middle East & Africa' },
]
// [name, sectors, region, logo]
export const CLIENTS: [string, SectorId[], RegionId, string][] = [
  ['1984 Louisiana World Exposition', ['expos'], 'na', '2023/10/002.png'],
  ['Expo 2010 Shanghai', ['expos'], 'ap', '2023/10/003.png'],
  ['1988 Winter Olympics, Calgary', ['expos'], 'na', '2023/10/004.png'],
  ['1982 World’s Fair, Knoxville', ['expos'], 'na', '2023/10/005.png'],
  ['Expo ’86 Vancouver', ['expos'], 'na', '2023/10/008.png'],
  ['AmeriFlora ’92, Columbus', ['expos'], 'na', '2023/10/006.png'],
  ['1984 Summer Olympics, Los Angeles', ['expos'], 'na', '2023/10/007.png'],
  ['Expo 2000 Hannover', ['expos'], 'eu', '2023/10/009.png'],
  ['9/11 Memorial & Museum', ['science'], 'na', '2023/10/9-11-Memorial.jpg'],
  ['2012 Summer Olympics, London', ['expos'], 'eu', '2023/10/010.png'],
  ['Expo ’98 Lisbon', ['expos'], 'eu', '2023/10/011.png'],
  ['Expo ’92 Seville', ['expos'], 'eu', '2023/10/012.png'],
  ['Absolut Home', ['brand', 'commercial'], 'eu', '2023/10/Absolut.jpg'],
  ['American Airlines', ['brand'], 'na', '2023/10/American-Airlines.jpg'],
  ['American Girl', ['brand', 'commercial'], 'na', '2023/10/American-Girl.jpg'],
  ['Museum of the American Revolution', ['science'], 'na', '2023/10/American-Revolution.jpg'],
  ['American Museum of Natural History', ['science'], 'na', '2023/10/Amer-Museum-of-Nat-History.jpg'],
  ['Aquarium of the Pacific', ['commercial', 'science'], 'na', '2023/10/Aquarium-of-the-Pacific.jpg'],
  ['Audubon Nature Institute', ['science'], 'na', '2023/10/Audobon-Nature.jpg'],
  ['Bacardi', ['brand', 'commercial'], 'na', '2023/10/Bacardi.jpg'],
  ['Boeing', ['brand'], 'na', '2023/10/Boeing.jpg'],
  ['BBC', ['brand'], 'eu', '2023/10/BBC.jpg'],
  ['California Academy of Sciences', ['science'], 'na', '2023/10/CA-Academy-of-Sciences.jpg'],
  ['Cartoon Network', ['commercial'], 'na', '2023/10/Cartoon-Network.jpg'],
  ['Cirque du Soleil', ['commercial'], 'na', '2023/10/Cirque.jpg'],
  ['CNN Studio Tours', ['brand'], 'na', '2023/10/CNN-tour.jpg'],
  ['World of Coca-Cola', ['brand'], 'na', '2023/10/Coca-Cola.jpg'],
  ['College Football Hall of Fame', ['science'], 'na', '2023/10/College-Football-Hall.jpg'],
  ['Crayola Experience', ['brand', 'commercial'], 'na', '2023/10/Crayola.jpg'],
  ['Danfoss Universe', ['brand'], 'eu', '2023/10/Danfoss.jpg'],
  ['Delaware Children’s Museum', ['science'], 'na', '2023/10/Delaware-Childrens-Museum.jpg'],
  ['Doha Quest', ['commercial'], 'mea', '2023/10/Doha-Oasis.png'],
  ['DreamWorks', ['commercial'], 'na', '2023/10/Dreamworks.jpg'],
  ['Dubai Parks', ['commercial'], 'mea', '2023/10/Dubai-Parks.jpg'],
  ['Everland Resort', ['commercial'], 'ap', '2023/10/Everland.jpg'],
  ['Exploratorium', ['science'], 'na', '2023/10/Exploratorium.jpg'],
  ['Field Museum', ['science'], 'na', '2023/10/Field-Museum.jpg'],
  ['Ford', ['brand'], 'na', '2023/10/Ford.jpg'],
  ['The Franklin Institute', ['science'], 'na', '2023/10/Franklin-Institute.jpg'],
  ['Genting', ['commercial'], 'ap', '2023/10/Genting.jpg'],
  ['Georgia Aquarium', ['science'], 'na', '2023/10/Georgia-Aquarium.jpg'],
  ['Hasbro', ['brand'], 'na', '2023/10/Hasbro.jpg'],
  ['Heineken', ['brand'], 'eu', '2023/10/Heineken.jpg'],
  ['Herschend Family Entertainment', ['commercial'], 'na', '2023/10/Herschend.jpg'],
  ['Hershey’s Chocolate World', ['brand'], 'na', '2023/10/Hersheys.jpg'],
  ['Intrepid Museum', ['science'], 'na', '2023/10/Intrepid.jpg'],
  ['Jameson', ['brand'], 'eu', '2023/10/Jameson.jpg'],
  ['LEGO', ['brand'], 'na', '2023/10/LEGO.jpg'],
  ['Liberty Science Center', ['science'], 'na', '2023/10/Library-Science-Center.jpg'],
  ['KidZania', ['commercial'], 'na', '2023/10/Kidzania.jpg'],
  ['Longwood Gardens', ['science'], 'na', '2023/10/Longwood-Gardens.jpg'],
  ['Metro Goldwyn Mayer', ['commercial'], 'na', '2023/10/MGM.jpg'],
  ['MoMA', ['science'], 'na', '2023/10/MoMA.jpg'],
  ['Mystic Seaport Museum', ['science'], 'na', '2023/10/Mystic-Seaport.jpg'],
  ['Natural History Museum LA', ['science'], 'na', '2023/10/Nat-History-Museum-of-LAC.jpg'],
  ['National Aquarium', ['science'], 'na', '2023/10/National-Aquarium.jpg'],
  ['National Children’s Museum', ['science'], 'na', '2023/10/Natl-Childrens-Museum.jpg'],
  ['NBA', ['brand'], 'na', '2023/10/NBA.jpg'],
  ['Newseum', ['science'], 'na', '2023/10/Newseum.jpg'],
  ['Natural History Museum of Utah', ['science'], 'na', '2023/10/NHMO-Utah.jpg'],
  ['Ocean Park Hong Kong', ['commercial'], 'ap', '2023/10/Ocean-Park-Hong-Kong.jpg'],
  ['Omaha Children’s Museum', ['science'], 'na', '2023/10/Omaha-Childrens-Museum.jpg'],
  ['Paramount', ['commercial'], 'na', '2023/10/Paramount.jpg'],
  ['Pretend City Children’s Museum', ['science'], 'na', '2023/10/Pretend-City.jpg'],
  ['Rock & Roll Hall of Fame', ['science'], 'na', '2023/10/Rock-N-Rol-Hall.jpg'],
  ['SeaWorld', ['commercial'], 'na', '2023/10/Seaworld.jpg'],
  ['SFMOMA', ['science'], 'na', '2023/10/SFMO.jpg'],
  ['Shedd Aquarium', ['science'], 'na', '2023/10/Shedd.jpg'],
  ['Thanksgiving Point', ['science'], 'na', '2023/10/Thanksgiving-Point.jpg'],
  ['The DoSeum', ['science'], 'na', '2023/10/The-Do-Seum.jpg'],
  ['Titanic Belfast', ['science'], 'eu', '2023/10/Titanic-Belfast.jpg'],
  ['uShaka Marine World', ['commercial', 'science'], 'mea', '2023/10/Ushaka.png'],
  ['Warner Bros.', ['brand'], 'na', '2023/10/Warner-Bros.jpg'],
  ['Wet’n’Wild Sydney', ['commercial'], 'ap', '2023/10/Wet-n-Wild.jpg'],
  ['The National WWII Museum', ['science'], 'na', '2023/10/WWII-Museum.jpg'],
  ['HBO', ['brand', 'commercial'], 'na', '2024/01/HBO-logo-1.png'],
  ['Universal', ['commercial'], 'na', '2023/10/Universal-e1555098134622.jpg'],
]

/* ── Team ─────────────────────────────────────────────────────── */
export type Office = 'KSA' | 'USA' | 'MENA'
export const TEAM: { name: string; role: string; office: Office; photo: string; bio: string }[] = [
  { name: 'Brad Merriman', role: 'Partner', office: 'USA', photo: '2024/03/Brad_Merriman_Headshot-1000x-1000-640x640.png', bio: 'A partner with the firm, Brad has been at ProFun since 1996. In addition to his general company leadership responsibilities, Brad’s focus is on business development and strategy. With a broad background in finance and operations, as well as first-hand experience in theme park mergers and acquisitions, Brad has represented ProFun on six continents and led company efforts in China, UAE, Qatar and the Pacific Rim, on projects ranging from small museums to large, multi-component developments like Yas Island, Resorts World Genting and Doha Oasis. Brad is a frequent speaker at industry events and was a 12-year member and former Chairman of the THEA Awards Nominating Committee.' },
  { name: 'Mike Oswald', role: 'Partner', office: 'KSA', photo: '2026/02/Mike-Oswald-Headshot-1000x1000-1-640x640.png', bio: 'Mike is the head of ProFun’s global attraction management and the Saudi Arabian office, where he oversees the planning, pre-opening and operations of a variety of innovative and record-breaking theme and water park projects. His career with ProFun began in 2008 as General Manager at Yas Waterworld Abu Dhabi. During six years in Abu Dhabi, Mike led Yas Waterworld and Ferrari World to record attendance and revenue, with Yas Waterworld named the World’s #2 Waterpark by the LA Times and the Middle East’s Leading Tourist Attraction in 2013. After returning to the U.S. in 2014, Mike became a Partner and has since spearheaded the planning and opening of numerous groundbreaking projects worldwide. His passion for theme and water parks dates back to his early career as a lifeguard at Raging Waters Los Angeles in 1991.' },
  { name: 'Salah Elatrash', role: 'Partner', office: 'KSA', photo: '2026/02/Salah_Elatrash_Headshot-1000x1000-1-640x640.png', bio: 'A Partner at ProFun since 2021, Salah’s background spans attraction design, production and development, coupled with expertise in general management, finance and budgeting. Focused on projects in Saudi Arabia, Salah has played a crucial role in overseeing operational design and operations planning for multiple iconic entertainment projects in the Kingdom. As a project sponsor, he supervised the design and construction of entertainment and cultural attractions in the UAE, including The Shindagha Museum and At The Top Burj Khalifa. Beyond ProFun, he contributes to several entertainment and tech companies as a board member.' },
  { name: 'Ray Giang', role: 'Partner', office: 'USA', photo: '2024/03/Ray_Giang_Headshot-1000-x-1000-640x640.png', bio: 'Since joining ProFun in 2007, Ray has risen to Partner. His strategic vision has been pivotal in the expansion and rollout of projects such as Crayola Experience and Electric Playhouse, alongside other ventures tied to intellectual property, and in shaping long-term growth strategies. He has directed pricing and packaging strategies for numerous clients, delivering substantial revenue gains while balancing brand and access goals. Clients include Space Center Houston, Meow Wolf, Liberty Science Center, Hershey’s Chocolate World, Georgia Aquarium, Philadelphia Zoo and Longwood Gardens.' },
  { name: 'Jim Higashi', role: 'Partner', office: 'USA', photo: '2024/03/Jim_Higashi_Headshot-1000-x-1000-640x640.png', bio: 'Jim has been with ProFun since 1995 and is a Partner. With a background in Information Systems Management from the University of San Francisco, his expertise spans museums, cultural experiences, brand centers and location-based entertainment. Jim has led operational and business planning for brand centers including World of Coca-Cola, Jameson, Raiders, Johnnie Walker, Warner Bros. Studio Tour The Making of Harry Potter, Absolut, Jeep and CNN, and revenue enhancement, expansion and capacity planning for the Aquarium of the Pacific, Shedd Aquarium, National Aquarium and Seattle Aquarium.' },
  { name: 'Ron Merriman', role: 'Senior Vice President', office: 'USA', photo: '2024/03/Ron_Merriman_Headshot-1000-x-1000-640x640.png', bio: 'Ron has been with ProFun since 2010 and is Senior Vice President. He holds an MBA in Corporate Strategy and Operational Management from UC Berkeley. Ron opened and ran ProFun’s Shanghai office as General Manager before becoming Vice President of Strategy. He has delivered strategic and operational planning for clients such as Chimelong Group, New World Development, KOP Entertainment and the Harbin International Snow & Ice Festival, and for IP-licensed projects with Hasbro, the NBA, Discovery Communications, SONY and Ripley’s.' },
  { name: 'Joel Ward', role: 'Senior Vice President', office: 'KSA', photo: '2026/02/Joel_Ward_Headshot-1000x1000-1-640x640.png', bio: 'With over 30 years in attraction and resort development, Joel has brought operations, marketing and strategic planning expertise to ProFun since 2011, overseeing operations planning, development and management for large-scale projects across China, Vietnam, Malaysia and Qatar. Before ProFun, Joel spent 18 years at Universal Studios Hollywood in operations and marketing leadership, then joined DreamWorks Animation to establish and lead its location-based entertainment department.' },
  { name: 'Chris Van Der Merwe', role: 'Vice President', office: 'KSA', photo: '2026/02/Chris_VanDerMerwe_Headshot-1000x1000-1-640x640.png', bio: 'Joining ProFun in 2018, Chris brings more than two decades in the theme park and hospitality industry, beginning in 1998 on the pre-opening team of Disney’s Animal Kingdom at Walt Disney World. His projects include operational input and business planning for large-scale theme and waterpark projects at Qiddiya.' },
  { name: 'Lester Silverio', role: 'Revenue Director', office: 'KSA', photo: '2026/02/Lester_Silverio_Headshot-1000x1000-1-640x640.png', bio: 'A Director at ProFun since 2023, Lester has provided operational input and business planning for large-scale theme and waterpark projects at Qiddiya, and led operational design for an iconic entertainment project at Rua Al Madinah. He was Director of Operations for Meryal Waterpark in Doha during pre-opening, and contributed to pre-opening planning for F&B, Retail and Operations at Doha QUEST.' },
  { name: 'David Ciciora', role: 'Technical Services Director', office: 'KSA', photo: '2026/02/David_Ciciora_Headshot-1000x1000-1-640x640.png', bio: 'Joining ProFun in 2012, David has provided technical services across the design, construction and operational phases of numerous new theme park projects. His background includes technical services management at Ferrari World Abu Dhabi, Universal Studios, Legoland, Morey’s Pier and Hard Rock Park. He is an active member of IAAPA, AIMS and ASTM.' },
  { name: 'Peter Stapp', role: 'Operations Director', office: 'USA', photo: '2024/03/Peter-Stapp-Headshot-1-640x640.png', bio: 'A Director at ProFun since 2013, Peter has provided operational input and business planning for large theme and waterpark projects at Qiddiya, led operations planning for Rua Al Madinah, and contributed to a new major theme park in Oklahoma, The RIG and Doha QUEST. He previously served as a General Manager for Qiddiya.' },
  { name: 'John MacDonald', role: 'Vice President', office: 'USA', photo: '2024/03/John-MacDonald-Headshot-1000-x-1000-640x640.png', bio: 'With ProFun since 2004, John began his career at Knott’s Berry Farm before working as an independent consultant on projects such as Yamay Resort in Thailand, Pacific Park in Santa Monica and engagements with the U.S. Navy. He provides operational input and business planning for multiple large theme and waterpark projects in Saudi Arabia, from development through pre-opening, training and beyond.' },
  { name: 'Amber Watson', role: 'Vice President', office: 'USA', photo: '2019/03/Amber-Watson-Headshot-1000x1000-1-640x640.png', bio: 'Amber has been with ProFun since 2018. She led the setup and launch of a major IP-branded attraction for Sony in Chicago, contributed to Rua Al Madinah and The RIG, and oversaw the setup and operation of Prince’s Paisley Park and the NFL Raiders Stadium Tour. Her planning work includes Doha QUEST, the City of Tracy Waterpark and the Mahanakhon Skywalk.' },
  { name: 'Kenny Wagener', role: 'Vice President', office: 'USA', photo: '2024/03/Kenny-Wagener-Headhost-640x640.png', bio: 'Kenny brings over 40 years in the theme park and attractions industry and has been with ProFun since 2003. He advised on the launch of the $450 million Gilder Center expansion at the American Museum of Natural History, served as marketing and operations advisor to Space Center Houston, joined the opening team for Kiewit Luminarium and advised on pricing for the National WWII Museum.' },
  { name: 'Jami Thomas', role: 'Senior Associate', office: 'USA', photo: '2024/03/Jami_Thomas_Headshot-1000-x-1000-640x640.png', bio: 'Joining in 2015, Jami specializes in data analytics, business and operating plans, financial reports, capacity studies, attendance projections and pricing strategies. Projects include data tracking and projections for the Natural History Museum of Utah and the Field Museum, operating analyses for the Aquarium of the Pacific’s expansion, and planning for the Johnnie Walker Princes Street Experience and Jameson Bow St. Distillery.' },
  { name: 'Joey Secard', role: 'Associate', office: 'USA', photo: '2026/02/Joseph_Secard_Headshot-1000-x-1000-640x640.png', bio: 'Joey joined ProFun in 2022, bringing a foundation in financial management and business analytics across pricing, operational planning, financial modeling and capacity studies. He delivered the operating and business plan for Pretend City Children’s Museum’s relocation and built a real-time Power BI dashboard for the Natural History Museum of Utah.' },
  { name: 'Allie Friedman', role: 'Associate', office: 'USA', photo: '2024/03/alexandra-friedman-headshot-640x640.png', bio: 'Allie joined ProFun as an Associate in 2023, bringing experience in business planning and operations from several General Management roles. At ProFun she has supported internal projects, including the ProFun rebrand.' },
  { name: 'Samir Bubic', role: 'Director', office: 'MENA', photo: '2026/02/Samir_Bubic_Headshot-1000x1000-1-640x640.png', bio: 'Samir has extensive experience in the waterpark and entertainment sector. He served as Pre-opening Director of Guest Services for Meryal Waterpark in Doha and Commercial Manager for Saraya Aqaba Waterpark, and contributed to the openings of Yas Waterworld and Ferrari World Abu Dhabi, with management roles at Miral Experiences and Jumeirah Group.' },
  { name: 'Steven Fulton', role: 'Director of Attraction Operations Advisory', office: 'KSA', photo: '2026/02/Steven_Fulton_Headshot-1000x1000-1-640x640.png', bio: 'Steven brings over a decade of international attraction and theme park operations, with senior roles at Snow Abu Dhabi, Ferrari World Abu Dhabi and Global Village Dubai, including the launch of Snow Abu Dhabi. A Glasgow University graduate in Leisure Management, he combines operational excellence with strategic planning and team leadership.' },
  { name: 'Alistair Rawlings', role: 'Director of Attraction Operations Advisory', office: 'KSA', photo: '2026/02/Alistair_Rawlings_Headshot-1000x1000-1-640x640.png', bio: 'Alistair brings over 15 years in theme park and attraction operations, with senior roles at Miral Experiences, Majid Al Futtaim Entertainment, Merlin Entertainments and The Escapade Group. He has delivered launches including Warner Bros. World Abu Dhabi, Ferrari World Abu Dhabi and Magic Planet. He is PMP-certified with Lean Six Sigma credentials.' },
  { name: 'Ludwig Louw', role: 'Director of Learning and Development', office: 'KSA', photo: '2026/02/Ludwig-Louw-640x640.png', bio: 'Ludwig is a strategic operations and learning leader with experience across aviation, hospitality, healthcare and retail, including Co-Founder of a CX consultancy and Manager of International Lounges at Etihad Airways. He has designed national customer experience strategies and embedded leadership and service excellence programs across diverse sectors.' },
  { name: 'Jake Oswald', role: 'Associate', office: 'KSA', photo: '2026/02/Jake_Oswald_Headshot-1000x1000-1-640x640.png', bio: 'Jake holds an MS in Spatial Data Management from the University of Southern California and brings experience in GIS, analytics and project implementation, helping translate complex data into actionable insights and streamlined processes.' },
  { name: 'Abdulelah Khoshaim', role: 'Associate', office: 'KSA', photo: '2026/02/Abdulelah_Khoshaim_Headshot-1000x1000-1-640x640.png', bio: 'Abdulelah brings experience in event operations and hospitality, supporting major international events including Formula 1 and the FIFA Club World Cup across guest services, wayfinding and VIP operations.' },
  { name: 'John Hawkins', role: 'Technical Specialist', office: 'KSA', photo: '2026/02/John-Hawkins-Headshot-1000x1000-1-640x640.png', bio: 'John holds a BEng (Hons) from the University of Sunderland and brings extensive experience in ride installation, maintenance and project delivery, previously as a Project Engineer at Interlink LG.' },
  { name: 'Raju Lama', role: 'Delivery Excellence Manager', office: 'KSA', photo: '2026/02/Raju_Lama_Headshot-1000x1000-1-640x640.png', bio: 'Raju joined ProFun in 2024 with over a decade in the theme park industry, starting on the pre-opening team at Ferrari World Abu Dhabi and later as Business Performance Manager across Ferrari World, Yas Waterworld, Warner Bros. World Abu Dhabi, CLYMB and Qasr Al Watan.' },
  { name: 'Jhumur Jha', role: 'QHSE Specialist', office: 'KSA', photo: '2026/02/Jhumur_Jha_Headshot-1000x1000-1-640x640.png', bio: 'Jhumur is an experienced safety and security manager for high-profile events and openings, including the G20 at The Suryaa in New Delhi, Rixos Qetaifan and Meryal Waterpark in Qatar, and Desert Falls Water & Adventure Park.' },
  { name: 'Burhan Hanif', role: 'Finance Director', office: 'KSA', photo: '2026/02/Burhan_Hanif_Headshot-1000x1000-1-640x640.png', bio: 'Burhan is a Chartered Accountant with over a decade of international experience in financial leadership, with senior roles at Canon Saudi Arabia, Alstom Transport, Samsung C&T and Ernst & Young.' },
  { name: 'Ibtisam Alotaibi', role: 'Senior Finance Director', office: 'KSA', photo: '2026/02/Ibtisam_Alotaibi_Headshot-1000x1000-1-640x640.png', bio: 'Ibtisam holds a BBA in Finance from Shaqra University and supports accurate financial reporting, reconciliation and internal controls across ProFun.' },
  { name: 'Joann Reyes', role: 'Document Controller', office: 'KSA', photo: '2026/02/Joann_Reyes_Headshot-1000x1000-1-640x640.png', bio: 'Joann is a skilled Document Controller with experience across Saad Al Kaabi Steel and Aluminum, Boom Construction and Hyundai Engineering & Construction.' },
  { name: 'Robert Baldwin', role: 'Vice President', office: 'USA', photo: '2024/03/Bob_Baldwin_Headshot-1000x1000-1-640x640.png', bio: 'Bob spent 30 years at The Walt Disney Company in marketing, sales and operations, including two decades leading Disney’s direct marketing programs and international teams for the openings of Tokyo Disneyland and Disneyland Paris. At ProFun since 2000, he audits clients’ marketing, sales and ticketing and recommends improvements.' },
]

/* ── News (from profun.com) ───────────────────────────────────── */
export const NEWS: { title: string; date: string; image: string; href: string; tag: string }[] = [
  { title: 'Seder Group and ProFun launch SPOC, a Saudi-born turnkey operator for entertainment, culture, tourism and sports destinations', date: 'Jul 2, 2026', image: '2026/07/SPOC-Signing-2-1080x675.png', href: 'https://profun.com/2026/07/02/seder-group-and-profun-launch-spoc/', tag: 'ProFun News' },
  { title: 'ProFun Academy announces strategic training partnership', date: 'Jun 25, 2026', image: '2026/06/PFA-Resized.png', href: 'https://profun.com/2026/06/25/27394/', tag: 'ProFun Academy' },
  { title: 'Bay Area’s first surf park planned for former naval air station', date: 'Jun 20, 2025', image: '2025/06/Neptune-Beach-Surf-Club.png', href: 'https://profun.com/2025/06/20/bay-areas-first-surf-park/', tag: 'Industry' },
  { title: 'Attractions Expert Q&A: Brad Merriman shares a birthday with Disneyland, 15 years apart', date: 'Jun 20, 2025', image: '2025/06/Shanghai-Disneyland-courtesy-of-Disney-1080x675.png', href: 'https://profun.com/2025/06/20/attractions-expert-qa-brad-merriman-shares-a-birthday-with-disneyland-but-15-years-apart/', tag: 'Interview' },
  { title: 'Legacy Entertainment unveils design for Beijing Haichang Ocean Park', date: 'Jun 19, 2025', image: '2025/06/Beijing-Haichang-Ocean-Park-Legacy-Entertainment-1200x675-1-1080x675.jpg', href: 'https://profun.com/2025/06/19/legacy-entertainment-unveils-design-for-beijing-haichang-ocean-park/', tag: 'Industry' },
  { title: 'New dinosaur unveiled at Natural History Museum of Utah', date: 'Jun 21, 2024', image: '2024/06/New-Dino-Discovery_MAS_01-scaled-e1718916103876-900x506-1.jpg', href: 'https://profun.com/2024/06/21/new-dinosaur-unveiled-at-natural-history-museum-of-utah/', tag: 'Client News' },
  { title: 'Philadelphia Zoo celebrates 150 years', date: 'Jun 12, 2024', image: '2024/06/150-year-Philadelphia-Zoo-1080x675.webp', href: 'https://profun.com/2024/06/12/philadelphia-zoo-celebrates-150-years/', tag: 'Client News' },
  { title: 'The world’s first Dragon Ball theme park is coming to Saudi', date: 'Mar 24, 2024', image: '2024/06/Dragon-ball-theme-park-1-1080x675.png', href: 'https://profun.com/2024/03/24/the-worlds-first-dragon-ball-theme-park-is-coming-to-saudi/', tag: 'Industry' },
  { title: 'Quest: Qatar’s first-ever indoor theme park opens in Doha', date: 'Jul 6, 2021', image: '2021/07/doha-quest-time-travel-1080x675.jpg', href: 'https://profun.com/2021/07/06/quest-qatars-first-ever-indoor-theme-park-opens-in-doha/', tag: 'Project News' },
]

/* ── Offices ──────────────────────────────────────────────────── */
export const OFFICES = [
  { name: 'Corporate Headquarters', lines: ['210 W Main St #201', 'Tustin, CA 92780', 'United States'], phone: '+1 714 832 1201', email: 'info@profun.com' },
  { name: 'Kingdom of Saudi Arabia', lines: ['Dist. 7336 Anas Ibn Malik Rd', 'Al Malqa District, RRMA4936', 'Riyadh 13525, Saudi Arabia'], phone: '+966 50 061 1174', email: 'info@profun.sa' },
]

/* ── Affiliations ─────────────────────────────────────────────── */
export const AFFILIATIONS = [
  { name: 'IAAPA', logo: './partner-iaapa-v2.png', color: '#3985FD' },
  { name: 'Themed Entertainment Association', logo: './partner-tea-v2.png', color: '#8238EB', big: true },
  { name: 'World Waterpark Association', logo: './partner-wwa-hd.png', color: '#F85707', big: true },
  { name: 'American Alliance of Museums', logo: './partner-aam-v2.png', color: '#000050' },
  { name: 'AIMS International', logo: pf('2024/05/3.png'), color: '#15D2A4', big: true },
  { name: 'MENALAC', logo: pf('2024/05/1.png'), color: '#FC026F', big: true },
]

export const ACADEMY_URL = '../academy/index.html#/'
