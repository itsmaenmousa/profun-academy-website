import { TEAM, pf } from './data'

const academyTeam = [
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

/*
  ProFun team: everyone on the Academy site keeps their black-and-white portrait;
  the rest of the ProFun team uses their profun.com headshot until new photos are ready.
*/
const ORDER = ['Salah Elatrash', 'Michael Oswald', 'Brad Merriman', 'Ray Giang', 'Jim Higashi', 'Ryan Phillips', 'Joel Ward', 'Ron Merriman', 'Chris van der Merwe', 'Ludwig Louw', 'Peter Stapp', 'Samir Bubic', 'John MacDonald', 'Amber Watson', 'Kenny Wagener', 'Robert Baldwin', 'Steven Fulton', 'Alistair Rawlings', 'Lester Silverio', 'David Ciciora', 'Ibtisam Alotaibi', 'Burhan Hanif', 'Raju Lama', 'Jhumur Jha', 'Joann Reyes', 'Jami Thomas', 'Joey Secard', 'Allie Friedman', 'Jake Oswald', 'Abdulelah Khoshaim', 'John Hawkins', 'Maen Mousa']
const others = TEAM
  .filter(m => !academyTeam.some(a => a.name.split(' ').pop()!.toLowerCase() === m.name.split(' ').pop()!.toLowerCase() && a.name[0] === m.name[0]))
  .map(m => ({ name: m.name, photo: pf(m.photo), role: m.role, bio: m.bio }))
const same = (a: string, b: string) => a.split(' ').pop()!.toLowerCase() === b.split(' ').pop()!.toLowerCase() && a[0] === b[0]
// Keep the black-and-white portraits, but use the role and bio from profun.com where the person is listed there
const merged = academyTeam.map(a => { const t = TEAM.find(m => same(a.name, m.name)); return t ? { ...a, role: t.role, bio: t.bio } : a })
const all = [...merged, ...others]
/* The People page list, in display order. Edited in the dashboard (Sanity); this is the built-in copy. */
export const TEAM_LIST: { name: string; photo: string; role: string; bio: string }[] = ORDER.map(n => all.find(m => m.name === n)).filter(Boolean) as typeof all

