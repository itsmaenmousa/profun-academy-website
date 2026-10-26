import { useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { TEAM, pf } from '../data'

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
const team = ORDER.map(n => all.find(m => m.name === n)).filter(Boolean) as typeof all

const initials = (name: string) => name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('')

export default function Leadership() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="team" className="bg-[#F9F8F6] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10 sm:mb-16 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Leadership</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em]">
              The people who lead our practice
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light">
              A proven team of international and local professionals, experienced in planning and managing entertainment, corporate and cultural attractions worldwide.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-px"
        >
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`team-card bg-[#F9F8F6] group reveal reveal-delay-${(i % 4) + 1} ${inView2 ? 'visible' : ''} ${openIdx === i ? 'is-open' : ''}`}
              onClick={() => setOpenIdx(o => (o === i ? null : i))}
            >
              {/* Portrait — empty */}
              <div className="aspect-[3/4] bg-white overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ background: '#EEEDEA' }}
                    aria-hidden="true"
                  >
                    <span
                      className="font-serif text-[clamp(56px,6vw,88px)] leading-none tracking-[-0.02em]"
                      style={{ color: '#000050' }}
                    >
                      {initials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="pt-4 pb-2 sm:p-8">
                <span className="team-more lg:hidden float-right mt-1 ml-2 w-6 h-6 rounded-full border border-[#D4D2CC] text-[#000050] flex items-center justify-center" aria-hidden="true"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
                <h3 className="font-serif text-[19px] sm:text-[24px] text-[#1C1C1A] leading-tight mb-1">{member.name}</h3>
                <p className="text-[14px] sm:text-[15px] text-[#F85707] font-medium leading-snug sm:mb-4">{member.role}</p>
                <p className="team-bio text-[15px] sm:text-[17px] text-[#4A4A45] leading-snug sm:leading-relaxed font-light overflow-hidden">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
