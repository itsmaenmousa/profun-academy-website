import type React from 'react'
import { useInView } from '../hooks/useInView'

const team = [
  {
    name: 'Salah Elatrash',
    photo: './team-salah-elatrash-bw.jpg',
    role: 'Partner',
    bio: 'Salah leads ProFun\'s operations advisory practice across the Middle East and Africa, with deep expertise in workforce capability development and senior leadership program design.',
  },
  {
    name: 'Michael Oswald',
    photo: './team-michael-oswald-bw.jpg',
    role: 'Partner',
    bio: 'Michael brings extensive experience in global attractions operations, safety management systems and training architecture, underpinning ProFun\'s accreditation standards worldwide.',
  },
  {
    name: 'Ryan Phillips',
    photo: './team-ryan-phillips-bw.jpg',
    role: 'General Manager',
    bio: 'Ryan oversees program management and client delivery, with a focus on learning systems design and regional business development across ProFun\'s international portfolio.',
  },
  {
    name: 'Ludwig Louw',
    photo: './team-ludwig-louw-bw.jpg',
    role: 'Director',
    bio: 'Ludwig leads curriculum development and facilitation excellence, bringing a rigorous approach to experiential learning design and subject matter expert networks.',
  },
  {
    name: 'Joel Ward',
    photo: './team-joel-ward-bw.jpg',
    role: 'Senior Vice President, Head of Delivery',
    bio: 'Joel leads delivery at ProFun, drawing on senior roles as Global Head of Theme Parks at DreamWorks and in brand marketing and operations at Universal Studios. Key projects include Doha QUEST, Qiddiya and Genting SkyWorlds.',
  },
  {
    name: 'Ron Merriman',
    photo: '',
    role: 'Senior Vice President, Strategy',
    bio: 'Ron leads strategy at ProFun after serving as General Manager of ProFun China, working in media and entertainment at Accenture and sitting on the TEA Asia-Pacific board. Projects include Qiddiya, Shanghai World Expo and Ocean Park Hong Kong.',
  },
  {
    name: 'Chris Van Der Merwe',
    photo: './team-chris-van-der-merwe-bw.jpg',
    role: 'Vice President, MENA',
    bio: 'Chris leads ProFun across MENA, having run Meryal Waterpark and Saraya Aqaba as General Manager and headed operations at Riverland Dubai. Projects include Qiddiya, Mahanakhon SkyWalk and Ferrari World Abu Dhabi.',
  },
  {
    name: 'Peter Stapp',
    photo: '',
    role: 'Director, Operations',
    bio: 'Peter directs operations at ProFun, with previous roles as General Manager at Qiddiya Investment Company and at Universal Studios Florida and the Walt Disney Company. Projects include Qiddiya, Doha QUEST and The RIG.',
  },
  {
    name: 'Brad',
    photo: '',
    role: 'Role to be confirmed',
    bio: '',
  },
  {
    name: 'Samir Bubic',
    photo: './team-samir-bubic-bw.jpg',
    role: 'Director, MENA',
    bio: 'Samir is a Director for ProFun in the MENA region, supporting the Academy\'s regional client engagements.',
  },
  {
    name: 'Lester Silverio',
    photo: './team-lester-silverio-bw.jpg',
    role: 'Revenue Director, KSA',
    bio: 'Lester leads revenue for ProFun in Saudi Arabia.',
  },
  {
    name: 'Ibtisam Alotaibi',
    photo: './team-ibtisam-alotaibi-bw.jpg',
    role: 'Senior Finance Director, KSA',
    bio: 'Ibtisam leads finance for ProFun in Saudi Arabia.',
  },
  {
    name: 'Burhan Hanif',
    photo: './team-burhan-hanif-bw.jpg',
    role: 'Finance Director, KSA',
    bio: 'Burhan oversees finance for ProFun\'s operations in Saudi Arabia.',
  },
  {
    name: 'Raju Lama',
    photo: './team-raju-lama-bw.jpg',
    role: 'Delivery Excellence Manager, KSA',
    bio: 'Raju looks after delivery standards across ProFun\'s projects in Saudi Arabia.',
  },
  {
    name: 'Jhumur Jha',
    photo: './team-jhumur-jha-bw.jpg',
    role: 'QHSE Specialist, KSA',
    bio: 'Jhumur supports quality, health, safety and environment standards across ProFun\'s work in Saudi Arabia.',
  },
  {
    name: 'Joann Reyes',
    photo: './team-joann-reyes-bw.jpg',
    role: 'Document Controller, KSA',
    bio: 'Joann manages document control for ProFun in Saudi Arabia.',
  },
]

const PLACEHOLDER_TINTS = ['#3985FD', '#15D2A4', '#8238EB', '#F85707', '#00AFDC', '#FC026F', '#99CA32', '#000050']
const initials = (name: string) => name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('')

export default function Leadership() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  return (
    <section id="team" className="bg-[#F9F8F6] py-32 px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Leadership</p>
            <h2 className="font-serif text-[clamp(40px,4vw,60px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              The people who lead our practice
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light">
              ProFun's senior team combines academic rigour with extensive hands-on experience across every discipline relevant to the leisure and attractions industry.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E0DB]"
        >
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`bg-[#F9F8F6] group reveal reveal-delay-${(i % 4) + 1} ${inView2 ? 'visible' : ''}`}
            >
              {/* Portrait — empty */}
              <div className="aspect-[3/4] bg-white overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ background: `${PLACEHOLDER_TINTS[i % PLACEHOLDER_TINTS.length]}14` }}
                    aria-hidden="true"
                  >
                    <span
                      className="font-serif text-[clamp(56px,6vw,88px)] leading-none tracking-[-0.02em]"
                      style={{ color: PLACEHOLDER_TINTS[i % PLACEHOLDER_TINTS.length] }}
                    >
                      {initials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="p-8">
                <h3 className="font-serif text-[24px] text-[#1C1C1A] leading-tight mb-1">{member.name}</h3>
                <p className="text-[15px] text-[#F85707] font-medium mb-4">{member.role}</p>
                <p className="text-[17px] text-[#6B6B65] leading-relaxed font-light max-h-0 group-hover:max-h-56 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
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
