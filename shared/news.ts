/*
  ONE news list for the whole group.
  Both the ProFun site (/profun) and the Academy site (/academy) read this file,
  so a story added, edited or removed here changes on both sites.

  image: "academy:<file>" for photos in academy/public,
         otherwise a path under profun.com/wp-content/uploads/
  label: optional display tag (e.g. "Training Highlight"); filtering uses `tag`
  cta:   optional link to a page on the Academy site (e.g. "/contact")
  The list is shown newest first, sorted by `date`.
*/

export type NewsTag = 'ProFun News' | 'ProFun Academy' | 'Project News' | 'Client News' | 'Industry' | 'Insight'

export type NewsItem = {
  id: string
  title: string
  date: string
  tag: NewsTag
  label?: string
  image: string
  pos?: string
  summary: string
  body?: string[]
  link?: { label: string; href: string }
  cta?: { label: string; to: string }
  logo?: boolean
}

export const NEWS_TAGS: NewsTag[] = ['ProFun News', 'ProFun Academy', 'Project News', 'Client News', 'Industry', 'Insight']

export const NEWS_TAG_COLOR: Record<NewsTag, string> = {
  'ProFun News': '#F85707',
  'ProFun Academy': '#8238EB',
  'Project News': '#3985FD',
  'Client News': '#15D2A4',
  'Industry': '#FC026F',
  'Insight': '#00AFDC',
}

const src = (label: string, href: string) => ({ label: `Read on ${label}`, href })

const STORIES: NewsItem[] = [
  /* ── ProFun Academy ── */
  {
    id: "vao-graduates", date: "Nov 2025", tag: "ProFun Academy", label: "Training Highlight", image: "academy:news-vao-graduates.jpg", pos: "50% 28%",
    title: "The first Visitor Attractions Operator Program graduates.",
    summary: "A 12-week program across Riyadh, Tabuk, Abha and Yanbu, building Saudi talent for the attractions and entertainment sector.",
    body: [
      "We are proud to see the first graduates of the Visitor Attractions Operator Program complete their journey.",
      "Developed and delivered by ProFun in partnership with the Saudi Entertainment Academy, and commissioned by Qiddiya and Saudi Entertainment Ventures (SEVEN), the 12-week program was delivered across Riyadh, Tabuk, Abha and Yanbu, empowering Saudi talent to lead the future of the attractions and entertainment sector under Vision 2030.",
      "Congratulations to all the graduates. This is only the beginning of an incredible journey ahead.",
      "A big thank you to our ProFun instructional designers and trainers, the Saudi Entertainment Academy, and the teams at Qiddiya and SEVEN, all of whom made this program a success.",
    ],
  },
  {
    id: "website", date: "Nov 2026", tag: "ProFun Academy", label: "Announcement", image: "academy:news-website-v3.jpg",
    title: "Introducing the new home of The ProFun Academy.",
    summary: "A new website bringing our programs, learning formats, projects and people together in one place.",
    body: [
      "The ProFun Academy has launched its new website, theprofunacademy.com, a single destination for operators, project teams and professionals across the attractions industry.",
      "Visitors can explore our tailored and accredited programs, see how we deliver learning in person, virtually, online and blended, browse selected work from landmark destinations, and meet the team behind it.",
      "It is also where we will share Academy news, certifications, events and featured courses, so the industry can follow our work as it grows across Saudi Arabia and the wider region.",
    ],
    cta: { label: "Start a conversation", to: "/contact" },
  },
  {
    id: "iaapa-provider", date: "Oct 2026", tag: "ProFun Academy", label: "Industry Recognition", image: "academy:news-iaapa-provider.jpg",
    title: "The ProFun Academy recognized by IAAPA.",
    summary: "The ProFun Academy is an IAAPA Education Pre-Approved Provider.",
    body: [
      "The ProFun Academy is an IAAPA Education Pre-Approved Provider.",
      "This recognition reflects our commitment to delivering training programs tailored to the attractions industry, with a focus on operational standards, guest experience and the skills teams need on the job.",
    ],
  },
  {
    id: "ibcces-cac", date: "Oct 2026", tag: "ProFun Academy", label: "Inclusion & Accessibility", image: "academy:news-ibcces-cac.jpg",
    title: "Advancing autism awareness with IBCCES.",
    summary: "The ProFun Academy has achieved Certified Autism Center™ (CAC) recognition with IBCCES.",
    body: [
      "The ProFun Academy has partnered with the International Board of Credentialing and Continuing Education Standards (IBCCES) to achieve Certified Autism Center™ (CAC) recognition.",
      "This partnership supports our work to build autism awareness, understanding and more inclusive guest experiences across the attractions industry.",
    ],
  },
  {
    id: "iaapa-events", date: "Oct – Nov 2026", tag: "ProFun Academy", label: "Industry Events", image: "academy:news-iaapa-dubai.jpg",
    title: "Meet the ProFun team at IAAPA Dubai and Orlando.",
    summary: "IAAPA Presents Dubai on 29 October, then IAAPA Expo Orlando on 16–20 November.",
    body: [
      "IAAPA Presents Dubai, 29 October 2026. The ProFun team will join attractions professionals at Deep Dive Dubai and Atlantis The Palm for education, behind-the-scenes access and networking.",
      "IAAPA Expo 2026, Orlando, Florida, 16–20 November 2026. The team will be attending alongside visitor attractions professionals from around the world.",
      "If you’re attending either event, we’d welcome the opportunity to connect and exchange insights on the industry’s latest developments.",
    ],
    cta: { label: "Connect with our team", to: "/contact" },
  },
  {
    id: "first-aid", date: "Oct 2026", tag: "ProFun Academy", label: "Featured Course", image: "academy:news-first-aid.jpg",
    title: "First Aid, CPR & AED Training.",
    summary: "Essential skills when every second counts, delivered with Ellis & Associates.",
    body: [
      "Through our partnership with Ellis & Associates, The ProFun Academy offers First Aid, CPR (Cardiopulmonary Resuscitation) and AED (Automated External Defibrillator) training built for the attractions industry.",
      "The course helps professionals develop practical emergency response skills, supporting safer environments for guests and employees.",
    ],
    cta: { label: "Explore programs", to: "/programs" },
  },
  {
    id: "merdeka", date: "Oct 2026", tag: "ProFun Academy", label: "Project Spotlight", image: "academy:news-merdeka.jpg", pos: "50% 40%",
    title: "Merdeka 118: training for a landmark destination.",
    summary: "Over 130 hours of training content for The View at 118, across three phases.",
    body: [
      "ProFun has developed a comprehensive training program for The View at 118, comprising over 130 hours of training content across three phases: Induction, Core Skills Development, and Role-Based On-the-Job Training.",
      "The program covers workplace standards, guest experience excellence, operational procedures, safety awareness and practical simulations. Supported by dedicated training presentation decks and facilitator guides, it provides a structured approach to developing a competent, confident and service-focused workforce, ensuring operational readiness and consistent guest experience standards.",
    ],
  },
  {
    id: "ellis-sst", date: "Jun 2026", tag: "ProFun Academy", label: "Partnership", image: "academy:news-partnership-v2.jpg",
    title: "A new partnership for the region with SST and Ellis & Associates.",
    summary: "The ProFun Academy becomes an authorized delivery partner for the Ellis portfolio of internationally recognized training and certification programs.",
    body: [
      "The ProFun Academy has announced a strategic partnership with Safety Skills Training (SST) and Ellis & Associates (E&A), global leaders in aquatic safety, lifeguard training and attractions operations.",
      "Through this partnership, the Academy becomes an authorized delivery partner for the Ellis portfolio of internationally recognized training and certification programs, helping make world-class learning opportunities more accessible across Saudi Arabia and the wider region.",
      "At the heart of the partnership is a shared belief that well-trained professionals create safer environments, stronger operations and better guest experiences.",
      "“As the attractions industry continues to grow across the region, investing in people has never been more important. We’re excited to work alongside SST and Ellis & Associates to help make world-class learning opportunities more accessible.” Ryan Phillips, General Manager, The ProFun Academy.",
    ],
    link: { label: 'Read the press release (PDF)', href: 'https://profun.com/wp-content/uploads/2026/06/ProFun-Academy-SST-Ellis-Press-Release-Final-1.pdf' },
  },
  {
    id: "ryan", date: "Jun 2026", tag: "ProFun Academy", label: "Leadership", image: "academy:news-ryan-wide.jpg", pos: "50% 50%",
    title: "Ryan Phillips joins The ProFun Academy as General Manager.",
    summary: "Nearly two decades of international experience across waterparks, resorts and visitor attractions.",
    body: [
      "The ProFun Academy has appointed Ryan Phillips as General Manager. Ryan brings nearly two decades of international experience across waterparks, resorts and visitor attractions in the Americas, Asia and the Middle East.",
      "His background spans operational leadership, pre-opening, safety and large-scale workforce development, alongside extensive work in training and certification across the global attractions industry. He has supported projects and operators in more than 40 countries and contributed to the certification of thousands of professionals each year.",
      "Ryan’s appointment further strengthens ProFun’s ability to support visitor attractions through training, readiness and long-term operational excellence across Saudi Arabia and international markets.",
    ],
  },
  {
    id: "graduates", date: "Jun 2026", tag: "ProFun Academy", label: "Training Highlight", image: "academy:news-graduates-v2.jpg", pos: "50% 40%",
    title: "56 graduates complete the Visitor Attractions Operator Course.",
    summary: "Delivered for SEVEN in Madinah, another step toward the skilled workforce behind Saudi Arabia’s visitor experiences.",
    body: [
      "Congratulations to the 56 graduates who successfully completed the Visitor Attractions Operator Course delivered by The ProFun Academy for SEVEN in Madinah.",
      "Every graduate represents another step toward building the skilled workforce that powers exceptional visitor experiences across Saudi Arabia. We wish all graduates continued success in their careers.",
    ],
  },
  {
    id: "spoc", date: "Jun 2026", tag: "ProFun News", image: "academy:news-spoc.jpg", pos: "50% 45%",
    title: "Seder Group and ProFun launch SPOC.",
    summary: "A Saudi-born turnkey operator for entertainment, culture, tourism and sports destinations.",
    body: [
      "Established through a strategic joint venture between ProFun and SEDER GROUP, SPOC is a Saudi-born turnkey operating company for entertainment, culture, tourism and sports destinations.",
      "SPOC combines ProFun’s global attractions operations expertise with SEDER GROUP’s operational, facilities management and workforce capabilities.",
    ],
  },

  /* ── ProFun ── */
  { id: 'surf-park', date: 'Jun 20, 2025', tag: 'Industry', image: '2025/06/Neptune-Beach-Surf-Club.png', title: 'Bay Area’s first surf park planned for former naval air station.', summary: 'Neptune Beach Surf Club is proposed for Alameda Point’s Enterprise Park, bringing artificial waves to an underused waterfront.', link: src('SFGATE', 'https://www.sfgate.com/local/article/naval-station-become-bay-area-surf-park-20363552.php') },
  { id: 'brad-qa', date: 'Jun 20, 2025', tag: 'Insight', image: '2025/06/Shanghai-Disneyland-courtesy-of-Disney-1080x675.png', title: 'Attractions Expert Q&A: Brad Merriman shares a birthday with Disneyland, 15 years apart.', summary: 'ProFun Partner Brad Merriman on a career spanning World Expos, major brands and theme parks around the world.', link: src('Attractions Magazine', 'https://attractionsmagazine.com/attractions-expert-qa-brad-merriman-shares-a-birthday-with-disneyland-but-15-years-apart/') },
  { id: 'haichang', date: 'Jun 19, 2025', tag: 'Industry', image: '2025/06/Beijing-Haichang-Ocean-Park-Legacy-Entertainment-1200x675-1-1080x675.jpg', title: 'Legacy Entertainment unveils design for Beijing Haichang Ocean Park.', summary: 'Legacy Entertainment and The Aquarium Design Company reveal the design for the long-awaited Beijing park.', link: src('Blooloop', 'https://blooloop.com/animals/news/legacy-entertainment-beijing-haichang-ocean-park-2/') },
  { id: 'utah-dino', date: 'Jun 21, 2024', tag: 'Client News', image: '2024/06/New-Dino-Discovery_MAS_01-scaled-e1718916103876-900x506-1.jpg', title: 'New dinosaur unveiled at Natural History Museum of Utah.', summary: 'The museum presents a newly discovered dinosaur, offering a fresh look at prehistoric life.', link: src('KSL NewsRadio', 'https://kslnewsradio.com/2111620/new-dinosaur-lokiceratops-rangiformis/') },
  { id: 'netflix-house', date: 'Jun 18, 2024', tag: 'Industry', image: '2024/06/AAAAQVOj5HcL-5qLXmmj8U-quoZi-Gn4av6lsWFLuJGQxagpvSnnZVTT-oPqR5xee8K12kmA9nn4FhSduntki9U55dz-Pm5wHnrkTfMb9kSB7457QL2TafpwTJopkW1Ro0IoRiGx5PIdYcydbeGI3esersIHJIw-1080x675.jpg', title: 'Netflix House will let you experience your favorite shows and movies in real life.', summary: 'Netflix details its permanent, immersive venues built around its best-known titles.', link: src('Netflix Tudum', 'https://www.netflix.com/tudum/articles/netflix-house') },
  { id: 'philly-zoo', date: 'Jun 12, 2024', tag: 'Client News', image: '2024/06/150-year-Philadelphia-Zoo-1080x675.webp', title: 'Philadelphia Zoo celebrates 150 years.', summary: 'America’s first zoo marks its 150th anniversary with plans to celebrate the milestone.', link: src('Metro Philadelphia', 'https://metrophiladelphia.com/philadelphia-zoo-150th-anniversary/') },
  { id: 'da-vinci', date: 'May 22, 2024', tag: 'Industry', image: '2024/06/da-vinci.png', title: 'Da Vinci Science Center opens to the public in downtown Allentown.', summary: 'The new science center opens its doors after a ribbon-cutting in downtown Allentown, Pennsylvania.', link: src('WFMZ', 'https://www.wfmz.com/news/area/lehighvalley/da-vinci-science-center-opens-to-the-public-in-downtown-allentown/article_ccfa56ba-1850-11ef-8e58-47d89c478a28.html') },
  { id: 'dragon-ball', date: 'Mar 24, 2024', tag: 'Industry', image: '2024/06/Dragon-ball-theme-park-1-1080x675.png', title: 'The world’s first Dragon Ball theme park is coming to Saudi.', summary: 'A Dragon Ball theme park is planned for the Kingdom, the first of its kind in the world.', link: src('Time Out Riyadh', 'https://www.timeoutriyadh.com/attractions/dragon-ball-theme-park-saudi') },
  { id: 'sony-wonderverse', date: 'Jan 11, 2024', tag: 'Industry', image: '2024/06/thirllist-1080x675.webp', title: 'Sony opens a VR theme park and speakeasy outside Chicago.', summary: 'Wonderverse, a 45,000-square-foot venue, brings Sony’s films and shows to the Chicago suburbs.', link: src('Thrillist', 'https://www.thrillist.com/travel/chicago/sony-wonderverse-chicago') },
  { id: 'netflix-retail', date: 'Oct 16, 2023', tag: 'Industry', image: '2024/06/netflix-1080x675.webp', title: 'Netflix to open brick and mortar locations in 2025, adding retail to its roster.', summary: 'Netflix plans physical “Netflix Houses” where fans can shop, play and step into their favorite shows.', link: src('Forbes', 'https://www.forbes.com/sites/claraludmir/2023/10/16/netflix-to-open-brick-and-mortar-location-in-2025-adding-retail-to-its-roster/') },
  { id: 'ims-museum', date: 'Jul 11, 2023', tag: 'Industry', image: '2024/06/6a9d807f-48c4-4767-a265-332947493bb9-IMSMuseum_2023Renovation_Starting_Line_Experience_Rendering.webp', title: 'Planned $89 million renovation “a complete reimagination” of the IMS Museum experience.', summary: 'The Indianapolis Motor Speedway Museum closes for about 18 months for a transformational renovation.', link: src('IndyStar', 'https://www.indystar.com/story/sports/motor/2023/07/11/indianapolis-motor-speedway-museum-89-million-dollar-renovation-2025-indy-500-closed-ims/70392981007/') },
  { id: 'seattle-aquarium', date: 'Jul 11, 2023', tag: 'Industry', image: '2024/06/07112023_Seattle_Aquarium_120526.webp', title: 'Seattle Aquarium receives $1M Murdock Trust grant for expansion project.', summary: 'The grant supports construction of the aquarium’s new Ocean Pavilion.', link: src('The Seattle Times', 'https://www.seattletimes.com/life/seattle-aquarium-receives-1m-murdoch-trust-grant-for-expansion-project/') },
  { id: 'perelman-2023', date: 'Jun 14, 2023', tag: 'Industry', image: '2024/06/14perelman-season-1-gflt-superJumbo-1080x675.webp', title: 'World Trade Center arts space to open with music, theater and dance.', summary: 'The Perelman Performing Arts Center reveals its opening program at the World Trade Center site.', link: src('The New York Times', 'https://www.nytimes.com/2023/06/14/arts/perelman-performing-arts-center.html') },
  { id: 'nhm-commons', date: 'Dec 9, 2022', tag: 'Client News', image: '2024/06/natural-history-museum-los-angeles-county-1024x663-1.webp', title: 'LA’s Natural History Museum to open $75m transformation in 2024.', summary: 'NHM Commons, the museum’s renovation and expansion project, sets its opening year.', link: src('Blooloop', 'https://blooloop.com/museum/news/natural-history-museum-los-angeles-county-expansion-opening-date/') },
  { id: 'pilsner', date: 'Jul 15, 2022', tag: 'Industry', image: '2024/06/glass-of-pilsner-urquell-beer-photo-istock-nikada-ziofd-1080x650.webp', title: 'Pilsner Urquell will open an interactive beer center near Prague’s Wenceslas Square.', summary: 'A new brand experience brings the Pilsner Urquell story to central Prague.', link: src('Expats.cz', 'https://www.expats.cz/czech-news/article/pilsner-urquell-will-open-an-interactive-beer-center-near-prague-s-wenceslas-square') },
  { id: 'perelman-2021', date: 'Jul 28, 2021', tag: 'Industry', image: '2024/06/perelman.webp', title: 'A massive new performing arts center is opening at the World Trade Center.', summary: 'One of several cultural projects shaping New York’s next few years.', link: src('Time Out New York', 'https://www.timeout.com/newyork/news/a-massive-new-performing-arts-center-is-opening-at-the-world-trade-center-072821') },
  { id: 'baha-bay', date: 'Jul 7, 2021', tag: 'Project News', image: '2021/07/Baha-Bay-Grand-Opening-1080x650.webp', title: 'Beachfront waterpark opens in The Bahamas’ Baha Mar complex.', summary: 'Baha Bay, the luxury beachfront water park at Baha Mar, opens to resort guests.', link: src('TravelPulse', 'https://www.travelpulse.com/news/entertainment/beachfront-waterpark-opens-in-the-bahamas-baha-mar-complex.html') },
  { id: 'quest-opens', date: 'Jul 6, 2021', tag: 'Project News', image: '2021/07/doha-quest-time-travel-1080x675.jpg', title: 'Quest: Qatar’s first-ever indoor theme park opens in Doha.', summary: 'Quest, operated by ProFun, opens at Doha Oasis with more than 30 rides and attractions.', link: src('Blooloop', 'https://blooloop.com/theme-park/news/quest-doha-qatar-first-indoor-theme-park/?source=newsletter') },
  { id: 'peppa-pig', date: 'Mar 2, 2021', tag: 'Client News', image: '2021/03/peppa-pig-theme-park-legoland-florida.webp', title: 'Merlin teams with Hasbro on the world’s first Peppa Pig Theme Park.', summary: 'The stand-alone park is planned for Legoland Florida Resort.', link: src('Blooloop', 'https://blooloop.com/theme-park/news/merlin-peppa-pig-theme-park-legoland-florida/?source=newsletter') },
  { id: 'hasbro', date: 'Mar 2, 2021', tag: 'Client News', image: '2021/03/wizards-of-the-coast.webp', title: 'Hasbro reveals growth drivers, including Wizards of the Coast.', summary: 'Hasbro outlines new reporting segments across consumer products, gaming and entertainment.', link: src('Blooloop', 'https://blooloop.com/brands-ip/news/hasbro-growth-drivers-entertainment-products-digital-gaming/') },
  { id: 'longwood', date: 'Mar 2, 2021', tag: 'Client News', image: '2021/03/longwood-gardens-expansion-transformation.jpeg', title: 'Longwood Gardens unveils $250m expansion and transformation.', summary: 'New plantings and buildings across 17 acres will expand and connect the gardens’ central grounds.', link: src('Blooloop', 'https://blooloop.com/animals/news/longwood-gardens-expansion-reimagined-project/') },
  { id: 'meow-wolf', date: 'Mar 2, 2021', tag: 'Industry', image: '2021/03/Omega-Mart-front-Meow-Wolf.jpg', title: 'Meow Wolf continues to create under new leadership.', summary: 'The art collective turned arts production company enters a new chapter.', link: src('Blooloop', 'https://blooloop.com/brands-ip/in-depth/meow-wolf-ceos/') },
  { id: 'vanderbilt-open', date: 'Sep 14, 2020', tag: 'Project News', image: '2024/06/One-Vanderbilt-1080x675.webp', title: 'In Midtown, 1,401-foot One Vanderbilt is officially open.', summary: 'The supertall next to Grand Central opens to office tenants, with its observation deck to follow.', link: src('6sqft', 'https://www.6sqft.com/in-midtown-1401-foot-one-vanderbilt-is-officially-open/') },
  { id: 'shanghai-disney', date: 'May 13, 2020', tag: 'Industry', image: '2020/05/Bloomberg_Disneyland_Shanghai_Reopens.png', title: 'Disneyland Shanghai reopens to a new world of masks and distance.', summary: 'The park reopens with masks, temperature checks and distanced queues.', link: src('Bloomberg', 'https://www.bloomberg.com/news/articles/2020-05-11/shanghai-disneyland-reopens-with-mandatory-masks-fever-checks') },
  { id: 'vanderbilt-top', date: 'Sep 17, 2019', tag: 'Project News', image: '2024/06/One-Vanderbilt-Sept-17-1080x675.webp', title: 'One Vanderbilt tops out at 1,401 feet, becoming Midtown’s tallest office building.', summary: 'The tower reaches its full height beside Grand Central Terminal.', link: src('6sqft', 'https://www.6sqft.com/one-vanderbilt-tops-out-at-1401-feet-becomes-tallest-office-building-in-midtown/') },
  { id: 'wavehouse', date: 'Aug 1, 2019', tag: 'Industry', image: '2019/08/Wavehouse.avif', title: 'Wavehouse: Atlantis The Palm to host new entertainment venue.', summary: 'A first look at Wavehouse, the family entertainment venue at Atlantis The Palm, Dubai.', link: src('The National', 'https://www.thenationalnews.com/lifestyle/exclusive-preview-wavehouse-at-atlantis-the-palm-dubai-1.815963') },
  {
    id: 'icon-global', date: 'Jun 7, 2019', tag: 'ProFun News', image: '2023/10/PROFUN-COLORED-THIN-150x38-1.png',
    title: 'ProFun acquires Icon Global Partners, Ltd.',
    summary: 'The acquisition substantially enhances ProFun’s waterpark consulting and management capabilities.',
    body: [
      'Los Angeles, CA, June 7, 2019. ProFun, Inc announced today that on June 6, 2019 they entered into an agreement to acquire Icon Global Partners Limited. The acquisition represents a consolidation of the two leading independent providers of waterpark operational consulting and management services.',
      'This acquisition unites ProFun, the oldest and largest provider of independent operational consulting and management services in the attractions industry, with Icon Global Partners Limited, a leading provider of consulting services focused specifically on waterparks. The result is a premier operational consulting and management resource for owners of theme parks, waterparks, commercial attractions, cultural attractions, brand experiences and large-scale special events throughout the world.',
      '“This is a terrific moment for our organization,” said Brad Merriman, President of ProFun. “Acquiring the extensive operational and technical expertise of Icon Global Partners significantly enhances ProFun’s ability to further apply our forty years of experience in the ever-expanding waterpark sector.”',
      '“We are confident that our newly acquired waterpark-focused talent and resources cements our place as the attractions sector’s go-to resource for operational consulting and management. This acquisition will also allow us to expand our ability to service our clients in South East Asia and China from Icon’s office in Bangkok, Thailand,” said Mike Oswald, Managing Partner of ProFun’s Management Services division.',
      '“The Icon team is excited! ProFun brings significant resources and experience to the table which allows us to greatly improve the service and offering to our world class clients and projects,” said Tim Mow, Partner and Chief of Technical Services of Icon Global Partners.',
    ],
  },
  { id: 'edge-deck', date: 'Mar 12, 2019', tag: 'Project News', image: '2019/03/http-cdn.cnn_.com-cnnnext-dam-assets-190311103316-new-york-edge-1.jpg', title: 'New York to open the tallest outdoor observation deck in the Western Hemisphere.', summary: 'Edge at Hudson Yards is set to open with a glass floor high above Manhattan.', link: src('CNN', 'https://edition.cnn.com/travel/article/new-york-edge-observation-deck/index.html') },
  { id: 'owa-legends', date: 'Feb 14, 2019', tag: 'Project News', image: '2024/05/Rollin-Thunder-Drop.jpg', title: 'Legends in Concert to open a year-round show and theater at OWA.', summary: 'The long-running Las Vegas show announces a new residency at OWA in Foley, Alabama.', link: src('PR Newswire', 'https://www.prnewswire.com/news-releases/legends-in-concert-to-open-year-round-show-and-theater-at-owa-300794376.html') },
  { id: 'emerging-trends', date: 'Jan 29, 2019', tag: 'Insight', image: '2019/01/amusement-park-carnival-fairground-1674434-1800x1200-1-1080x675.jpg', title: 'Emerging trends shaping themed destination development and operations.', summary: 'What today’s guests expect from theme parks, and what it means for owners and operators.', link: src('nFusion', 'https://nfusion.companiesofnassal.com/insights/the-top-trends-shaping-the-theme-park-industry') },
  { id: 'mahanakhon-floor', date: 'Nov 20, 2018', tag: 'Project News', image: '2018/11/Mahanakhon-1080x612.png', title: 'Glass floor opens atop Thailand’s tallest completed building.', summary: 'The Mahanakhon SkyWalk opens its glass-floored observation deck above Bangkok.', link: src('CNN', 'https://www.cnn.com/travel/article/mahanakhon-skywalk-bangkok-thailand/index.html') },
  {
    id: 'mr-profun-merger', date: 'Nov 15, 2018', tag: 'ProFun News', image: '2018/11/MPF-logo-FINAL-1080x491.png',
    title: 'Management Resources and ProFun Management Group finalize merger to create MR-ProFun.',
    summary: 'Two respected operations consulting and management firms formally come together.',
    body: [
      'Today marks the formal introduction of MR-ProFun following the successful merger of Management Resources and ProFun Management Group, two highly respected operations consulting and management firms with long-standing reputations in the themed-entertainment and cultural attractions industry.',
      'Both entities provided an assortment of planning, advisory and management services, though Management Resources focused mainly on operational consulting while ProFun Management Group focused on operational management. The introduction follows a carefully orchestrated integration process that enabled the two companies to fully realize and optimize their combined resources within the new corporate entity.',
    ],
    link: src('Amusement Today', 'https://amusementtoday.com/2018/11/management-resources-and-profun-management-group-finalize-merger-to-create-mr-profun/'),
  },
  {
    id: 'mr-profun-rebrand', date: 'Nov 11, 2018', tag: 'ProFun News', image: '2018/11/MPF-logo-FINAL-1080x491.png',
    title: 'Management Resources and ProFun Management Group rebrand as MR-ProFun.',
    summary: 'After 38 years serving 350+ clients in 45 countries independently, the two firms unite under one brand.',
    body: [
      'For over 38 years, Management Resources and ProFun Management Group have operated independently while serving 350+ clients in 45 countries. Both entities provided an assortment of planning, advisory, training, implementation and management services to the themed-entertainment and cultural attractions industry, though Management Resources focused mainly on operational consulting while ProFun Management Group focused on operational management. Each established an exceptional track record of services to new and existing developments in the industry.',
    ],
    link: src('InPark Magazine', 'https://www.inparkmagazine.com/management-resources-and-profun-management-group-rebrand-as-mr-profun/'),
  },
  { id: 'global-village', date: 'Oct 29, 2018', tag: 'Industry', image: '2018/11/global-village-new-800x400-1.jpg', title: 'Dubai’s Global Village opens for its 23rd season.', summary: 'Dubai’s multicultural festival park returns for a new season.', link: src('Arabian Business', 'https://www.arabianbusiness.com/travel-hospitality/407065-dubais-global-village-to-open-for-23rd-season-on-tuesday') },
  { id: 'dubai-safari', date: 'Oct 27, 2018', tag: 'Industry', image: '2018/10/dubai-safari-park.jpg', title: 'Dubai Safari Park to reopen with new animals and adventures.', summary: 'The 12.8-million-square-foot park prepares to welcome visitors back.', link: src('Gulf News', 'https://gulfnews.com/uae/tourism/dubai-safari-park-to-reopen-with-new-animals-adventures-1.2294396') },
  { id: 'london-resort', date: 'Oct 26, 2018', tag: 'Industry', image: '2018/10/London-Resort-Park.jpg', title: 'Theme park plans formerly backed by Paramount given £25 million investment.', summary: 'A new investor commits funding to long-running plans for a UK entertainment resort.', link: src('KentOnline', 'https://www.kentonline.co.uk/dartford/news/theme-park-plans-to-get-25m-boost-192272/') },
  { id: 'six-flags-dubai', date: 'Oct 24, 2018', tag: 'Industry', image: '2018/10/six-flags-1024x675.jpg', title: 'Six Flags’ future in Dubai is now uncertain.', summary: 'The planned Six Flags park in Dubai is placed under review.', link: src('Skift', 'https://skift.com/2018/10/24/six-flags-future-in-dubai-is-now-uncertain/') },
  { id: 'dpr-visits', date: 'Oct 10, 2018', tag: 'Project News', image: '2018/10/Dubai-Parks-Legoland.jpg', title: 'Dubai Parks records 1.96 million visits in first nine months.', summary: 'Visits rise 33 percent on the same period the year before.', link: src('Gulf News', 'https://gulfnews.com/business/companies/dubai-parks-records-1-96m-visits-in-first-nine-months-1.2288435') },
  { id: 'jbr', date: 'Sep 30, 2018', tag: 'Industry', image: '2018/09/JBR-Dubai.jpg', title: 'Dubai’s JBR opens three new entertainment attractions.', summary: 'Jumeirah Beach Residence adds three new attractions to its waterfront.', link: src('Gulf Business', 'https://gulfbusiness.com/dubais-jbr-opens-three-new-entertainment-attractions/') },
  { id: 'museum-ar', date: 'Sep 21, 2018', tag: 'Industry', image: '2018/09/Mae-Jemison-AR-1080x675.webp', title: 'For museums, AR is the next frontier.', summary: 'How augmented reality is changing the way museums tell their stories.', link: src('WIRED', 'https://www.wired.com/story/museums-augmented-reality-next-frontier/') },
  { id: 'cartoon-bali', date: 'Jun 28, 2018', tag: 'Client News', image: '2018/06/Cartoon-Networld-waterpark.jpg', title: 'Cartoon Network entertainment park opening in Bali.', summary: 'A Cartoon Network park and the island’s largest waterpark are planned for Bali.', link: src('The Jakarta Post', 'https://www.thejakartapost.com/travel/2018/06/27/cartoon-network-entertainment-park-opening-in-bali.html') },
  { id: 'genting-fox', date: 'Jun 7, 2018', tag: 'Client News', image: '2018/06/Genting-20th-century-fox-park.jpg', title: 'Genting looks to the opening of Twentieth Century Fox World Theme Park.', summary: 'Genting reports results ahead of the planned theme park opening in Malaysia.', link: src('Australasian Leisure Management', 'https://www.ausleisure.com.au/news/genting-looks-to-opening-of-twentieth-century-fox-world-theme-park/') },
  { id: 'louvre-ad', date: 'Nov 7, 2017', tag: 'Industry', image: '2017/11/06LOURVE-top-superJumbo-1080x675.webp', title: 'Louvre Abu Dhabi, a cultural cornerstone where East meets West.', summary: 'Jean Nouvel’s domed museum opens on Saadiyat Island.', link: src('The New York Times', 'https://www.nytimes.com/2017/11/07/arts/design/louvre-abu-dhabi.html') },
  { id: 'mahanakhon-peek', date: 'Nov 6, 2017', tag: 'Project News', image: '2017/11/CNN-nahankhon.png', title: 'Thailand’s new tallest building: a sneak peek from atop Bangkok’s MahaNakhon.', summary: 'A first view from the top of King Power MahaNakhon ahead of the SkyWalk opening.', link: src('CNN', 'https://www.cnn.com/travel/article/bangkok-mahanakhon-building/index.html') },
  { id: 'owa-terror', date: 'Sep 29, 2017', tag: 'Project News', image: '2024/03/park-owa-logo.jpg', title: 'OWA announces haunted house called “Town of Terror.”', summary: 'The Park at OWA teams up with Nightmare Chambers for a seasonal haunted attraction.', link: src('WKRG', 'https://www.wkrg.com/2017/09/28/owa-announces-haunted-house-called-town-of-terror/') },
  { id: 'ghost-towers', date: 'Aug 22, 2017', tag: 'Industry', image: '2017/08/Bangkoks-abandoned-ghost-towers.png', title: 'Bangkok’s abandoned “ghost” towers still stand 20 years after the crash.', summary: 'A look at Bangkok’s unfinished towers two decades on.', link: src('CNN', 'https://www.cnn.com/style/article/bangkok-abandoned-ghost-towers/index.html') },
  {
    id: 'thea-awards', date: 'Apr 5, 2017', tag: 'ProFun News', image: '2024/05/5.png',
    title: '20th Annual Thea Awards.',
    summary: 'Brad Merriman presents the Thea Award for Outstanding Achievement to Mystic Manor, Hong Kong Disneyland.',
    body: [
      'Our industry celebrated what has come to be known as the “Oscars” of the themed entertainment industry, the 20th Annual Thea Awards Gala. The objective of the Thea Awards is to find excellence and celebrate it. We would like to congratulate all Thea Awards recipients that help create compelling experiences that are representative of the excellence found throughout our industry.',
      'ProFun Management Group Chief Operating Officer and Management Resources Principal, Brad Merriman, was honored to present with Brian Edwards of Edwards Technologies the Thea Award for Outstanding Achievement, Attraction, to Mystic Manor, Hong Kong Disneyland. Once again, congratulations to all honored at this year’s Thea Awards Gala!',
    ],
  },
  { id: 'owa-top-15', date: 'Apr 4, 2017', tag: 'Project News', image: '2017/04/OWA.jpg', title: '15 top theme park additions for 2017 (The Park at OWA is #10).', summary: 'The Park at OWA and its Rollin’ Thunder coaster make the list.', link: src('U.S. News', 'https://travel.usnews.com/gallery/15-top-theme-park-additions-for-2017?slide=10') },
  { id: 'ny-wheel-gm', date: 'Jan 28, 2017', tag: 'Project News', image: '2018/11/MPF-logo-FINAL-1080x491.png', title: 'New General Manager of NY Wheel.', summary: 'The New York Wheel’s new general manager sets out his ambitions for the attraction.', link: src('SILive', 'https://www.silive.com/news/2017/01/ny_wheel_hires_new_general_man.html') },
  { id: 'ny-wheel-crane', date: 'Jun 15, 2016', tag: 'Project News', image: '2016/06/NY-Wheel-1080x675.webp', title: 'The New York Wheel gets its first shipment of crane parts.', summary: 'Crane parts for the Staten Island observation wheel arrive at the South Brooklyn Marine Terminal.', link: src('6sqft', 'https://www.6sqft.com/shipment-of-crane-parts-for-new-york-wheel-marks-revival-of-south-brooklyn-marine-terminal/') },
  { id: 'parks-2015', date: 'Nov 11, 2015', tag: 'Industry', image: '2024/06/20th-century-fox-world-1080x607.png', title: '“Hunger Games,” “Aliens” and all the best new theme parks of 2015.', summary: 'A roundup of the year’s most notable new theme parks and rides.', link: src('CNN', 'https://www.cnn.com/2015/11/11/travel/new-theme-parks-2015/index.html') },
  { id: 'ny-wheel-council', date: 'Oct 30, 2015', tag: 'Project News', image: '2016/06/NY-Wheel-1080x675.webp', title: 'New York Wheel moves forward with City Council approval.', summary: 'The Staten Island observation wheel clears City Council approval ahead of construction.', link: src('Curbed', 'https://ny.curbed.com/archives/2015/10/30/new_york_wheel_moves_forward_with_city_council_approval.php') },
  { id: 'service-excellence', date: 'Dec 5, 2013', tag: 'Insight', image: '2018/11/MPF-logo-FINAL-1080x491.png', title: 'Service Excellence around the world.', summary: 'Shaun McKeogh’s guest service training takes him from Ho Chi Minh City and Moscow to Orlando and Sydney.', link: src('IAAPA', 'https://www.iaapa.org/about-iaapa/featured-member/featured-member-list/shaun-mckeogh') },
  { id: 'thrilling-ride', date: 'Sep 11, 2013', tag: 'Insight', image: '2013/09/5230c89302695-lost-paradise-of-dilmun-1080x675.webp', title: 'Theme park projects can provide a thrilling ride.', summary: 'ProFun’s view on why ride integration and technology are among the hardest parts of a project to manage.', link: src('Blooloop', 'https://blooloop.com/theme-park/in-depth/theme-park-projects-can-provide-a-thrilling-ride/') },
]

/* "Jul 2, 2026", "Nov 2026" or "Oct – Nov 2026" -> sortable number */
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const sortKey = (d: string) => {
  const m = d.toLowerCase().match(/([a-z]{3})[a-z]*\.?(?:\s+(\d{1,2}),)?/)
  const y = d.match(/(\d{4})/)
  return (y ? +y[1] : 0) * 10000 + (m ? MONTHS.indexOf(m[1]) + 1 : 0) * 100 + (m && m[2] ? +m[2] : 0)
}

/* Built-in copy of the stories. Used until the dashboard (Sanity) answers, and as a fallback. */
export const NEWS_ALL: NewsItem[] = [...STORIES].sort((a, b) => sortKey(b.date) - sortKey(a.date))

/* "Jul 2, 2026" -> "2026-07-02", "Nov 2026" -> "2026-11-01" (used by the dashboard import) */
export const isoDate = (d: string) => {
  const k = sortKey(d)
  const y = Math.floor(k / 10000), m = Math.floor(k / 100) % 100, day = k % 100
  return `${y}-${String(m || 1).padStart(2, '0')}-${String(day || 1).padStart(2, '0')}`
}
export const hasDay = (d: string) => /\d{1,2},\s*\d{4}/.test(d)

/* Image URL for a story, from either site */
const PF = 'https://profun.com/wp-content/uploads/'
export const newsImage = (img: string, site: 'profun' | 'academy') =>
  /^https?:/.test(img) ? img : img.startsWith('academy:') ? (site === 'academy' ? './' : '../academy/') + img.slice(8) : PF + img

/* Logos and wordmarks sit on white instead of being cropped like photos */
export const isLogoImage = (img: string) => /logo|PROFUN-COLORED|MPF-logo|2024\/05\/5\.png/i.test(img)

/* ── Live content from the dashboard (Sanity) ───────────────────────────── */
const SANITY = 'https://hxe3wh04.apicdn.sanity.io/v2025-01-01/data/query/production'
const QUERY = `*[_type == "news" && !(_id in path("drafts.**")) && defined(title)] | order(date desc) {
  _id, title, date, dateLabel, tag, label, logo, summary, body, link, cta, legacyImage, pos,
  "img": image.asset->url, "hs": image.hotspot
}`
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const showDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return `${MONTH[m - 1]} ${d}, ${y}`
}
type Raw = {
  _id: string; title: string; date: string; dateLabel?: string; tag: NewsTag; label?: string; logo?: boolean
  summary: string; body?: string; link?: { label?: string; href?: string }; cta?: { label?: string; to?: string }
  legacyImage?: string; pos?: string; img?: string; hs?: { x: number; y: number }
}
export async function fetchNews(): Promise<NewsItem[] | null> {
  try {
    const res = await fetch(`${SANITY}?query=${encodeURIComponent(QUERY)}`)
    if (!res.ok) return null
    const rows: Raw[] = (await res.json()).result ?? []
    if (!rows.length) return null
    return rows.map(r => ({
      id: r._id.replace(/^news-/, ''),
      title: r.title,
      date: r.dateLabel || (r.date ? showDate(r.date) : ''),
      tag: r.tag,
      label: r.label || undefined,
      image: r.img ? `${r.img}?w=1600&auto=format` : (r.legacyImage ?? ''),
      pos: r.img ? (r.hs ? `${Math.round(r.hs.x * 100)}% ${Math.round(r.hs.y * 100)}%` : undefined) : r.pos,
      logo: r.logo || (!r.img && !!r.legacyImage && isLogoImage(r.legacyImage)),
      summary: r.summary,
      body: r.body ? r.body.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean) : undefined,
      link: r.link?.href ? { label: r.link.label || 'Read more', href: r.link.href } : undefined,
      cta: r.cta?.to ? { label: r.cta.label || 'Learn more', to: r.cta.to } : undefined,
    }))
  } catch {
    return null
  }
}
