import { Link } from 'react-router-dom'

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/profun-inc',
    color: '#3985FD',
    icon: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-1.85 3.76-1.85 4.02 0 4.76 2.5 4.76 5.75v5.6h-4v-4.96c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62v5.04h-4v-11Z" />,
  },
]

const cols: { title: string; links: [string, string][] }[] = [
  {
    title: 'Sectors',
    links: [
      ['Commercial Attractions', '/sectors?go=commercial'], ['Science & Culture', '/sectors?go=science'],
      ['Brand Centers', '/sectors?go=brand'], ['Expos & Mega-Events', '/sectors?go=expos'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Planning', '/services?go=planning'], ['Advisory', '/services?go=advisory'], ['Training', '/services?go=training'],
      ['Implementation', '/services?go=implementation'], ['Management', '/services?go=management'],
    ],
  },
  {
    title: 'Our Work',
    links: [
      ['Featured Projects', '/work'], ['Clients', '/work?go=clients'], ['Case Studies', '/work?go=case-studies'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '/about'], ['People', '/team'], ['Partners & Affiliations', '/about?go=affiliations'], ['News', '/news'], ['Careers', '/contact?go=careers'], ['Contact', '/contact'],
    ],
  },
]

const BRAND_BAR = ['#3985FD', '#15D2A4', '#99CA32', '#FFCA03', '#FC026F', '#8238EB', '#F85707']

export default function Footer() {
  return (
    <footer className="bg-[#111110] pt-16 sm:pt-20 pb-10 px-6 sm:px-12 relative overflow-hidden">
      {/* Brand color strip */}
      <div className="absolute top-0 left-0 right-0 flex h-1" aria-hidden="true">
        {BRAND_BAR.map(c => <span key={c} className="flex-1" style={{ background: c }} />)}
      </div>

      <div className="max-w-[1920px] mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8" aria-label="ProFun home">
              <img src="./profun-logo-white.svg" alt="ProFun" className="h-14 sm:h-16 w-auto" />
            </Link>
            <p className="text-[18px] text-white/55 leading-relaxed font-light max-w-[320px] mb-8">
              The world’s trusted partner in attraction operations. Tustin, California and Riyadh, Kingdom of Saudi Arabia.
            </p>
            <p className="text-[17px] font-medium text-white/75 mb-4">Follow ProFun</p>
            <ul className="flex items-center gap-7" aria-label="ProFun on social media">
              {SOCIALS.map(s => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="social-icon-link block text-white/70"
                    style={{ ['--brand' as string]: s.color }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{s.icon}</svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:flex sm:justify-end sm:gap-x-12 lg:gap-x-[clamp(44px,4vw,80px)]">
            {cols.map((col, i) => (
              <div key={col.title}>
                <p className="text-[17px] font-medium mb-5" style={{ color: ['#15D2A4', '#FFCA03', '#FC026F', '#00AFDC'][i] }}>
                  {col.title}
                </p>
                <ul className="space-y-1">
                  {col.links.map(([link, to]) => (
                    <li key={link}>
                      <Link
                        to={to}
                        className="inline-block py-1.5 text-[17px] text-white/60 hover:text-white transition-colors duration-200 font-light"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[15px] text-white/35 font-light">
            © {new Date().getFullYear()} ProFun Management Group Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:shrink-0 md:whitespace-nowrap">
          <a href="../academy/index.html#/" className="footer-academy inline-flex items-center gap-2 text-[15px] text-white font-medium">
            <img src="./profun-symbol-color.svg" alt="" aria-hidden="true" className="h-4 w-4" />
            ProFun Academy
            <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a
            href="mailto:info@profun.com"
            className="text-[15px] text-white/55 hover:text-[#FFCA03] transition-colors duration-200"
          >
            info@profun.com
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
