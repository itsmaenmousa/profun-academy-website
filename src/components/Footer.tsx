import { Link } from 'react-router-dom'

// Swap these for the Academy's real profile URLs.
const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    color: '#3985FD',
    icon: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-1.85 3.76-1.85 4.02 0 4.76 2.5 4.76 5.75v5.6h-4v-4.96c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62v5.04h-4v-11Z" />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    color: '#00AFDC',
    icon: <path d="M13.5 21v-7.6h2.56l.38-2.97H13.5V8.54c0-.86.24-1.45 1.47-1.45h1.57V4.43a21 21 0 0 0-2.29-.12c-2.27 0-3.82 1.38-3.82 3.93v2.19H7.87v2.97h2.56V21h3.07Z" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    color: '#FC026F',
    icon: <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm5.98-7.94a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.1 8.2c-.07-1.47-.4-2.77-1.48-3.84-1.07-1.07-2.37-1.4-3.84-1.48-1.51-.09-6.05-.09-7.56 0-1.47.07-2.77.4-3.84 1.47S2.98 6.72 2.9 8.2c-.09 1.51-.09 6.05 0 7.56.07 1.47.4 2.77 1.48 3.84 1.07 1.07 2.37 1.4 3.84 1.48 1.51.09 6.05.09 7.56 0 1.47-.07 2.77-.4 3.84-1.48 1.07-1.07 1.4-2.37 1.48-3.84.09-1.51.09-6.04 0-7.55Zm-1.97 9.17a3.1 3.1 0 0 1-1.74 1.74c-1.21.48-4.07.37-5.39.37s-4.19.1-5.39-.37a3.1 3.1 0 0 1-1.74-1.74c-.48-1.21-.37-4.07-.37-5.39s-.1-4.19.37-5.39a3.1 3.1 0 0 1 1.74-1.74c1.21-.48 4.07-.37 5.39-.37s4.19-.1 5.39.37a3.1 3.1 0 0 1 1.74 1.74c.48 1.21.37 4.07.37 5.39s.11 4.19-.37 5.39Z" />,
  },
  {
    name: 'X',
    href: 'https://x.com/',
    color: '#8238EB',
    icon: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45Z" />,
  },
]

const cols: { title: string; links: [string, string][] }[] = [
  {
    title: 'Services',
    links: [
      ['Bespoke Learning Design', '/services'], ['In-Person Learning', '/services'], ['Blended & Online', '/services'],
      ['Accredited Programs', '/programs'], ['Capability Development', '/services'], ['Learning Strategy', '/services'],
    ],
  },
  {
    title: 'Learning',
    links: [
      ['In-Person', '/learning'], ['Virtual', '/learning'], ['eLearning', '/learning'],
      ['Experiential', '/learning'], ['Blended', '/learning'], ['Training Topics', '/programs'],
    ],
  },
  {
    title: 'Academy',
    links: [
      ['About', '/about'], ['Programs', '/programs'], ['Projects', '/projects'],
      ['Team', '/team'], ['Full Academy profile', '/academy'], ['Contact', '/contact'],
    ],
  },
]

const BRAND_BAR = ['#3985FD', '#15D2A4', '#99CA32', '#FFCA03', '#FC026F', '#8238EB', '#F85707']

export default function Footer() {
  return (
    <footer className="bg-[#111110] pt-16 sm:pt-20 pb-10 px-6 sm:px-12 relative overflow-hidden">
      {/* Brand colour strip */}
      <div className="absolute top-0 left-0 right-0 flex h-1" aria-hidden="true">
        {BRAND_BAR.map(c => <span key={c} className="flex-1" style={{ background: c }} />)}
      </div>

      <div className="max-w-[1920px] mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8" aria-label="The ProFun Academy home">
              <img src="./profun-academy-white.svg" alt="The ProFun Academy" className="h-20 sm:h-24 w-auto" />
            </Link>
            <p className="text-[17px] text-white/55 leading-relaxed font-light max-w-[320px] mb-8">
              Tailored learning and capability development for the attractions industry. Riyadh, Kingdom of Saudi Arabia.
            </p>
            <p className="text-[12px] tracking-[0.15em] uppercase text-white/35 mb-4">Follow the Academy</p>
            <ul className="flex items-center gap-7" aria-label="The ProFun Academy on social media">
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
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((col, i) => (
              <div key={col.title}>
                <p className="text-[12px] tracking-[0.15em] uppercase mb-6" style={{ color: ['#15D2A4', '#FFCA03', '#00AFDC'][i] }}>
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map(([link, to]) => (
                    <li key={link}>
                      <Link
                        to={to}
                        className="text-[16px] text-white/60 hover:text-white transition-colors duration-200 font-light"
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
          <p className="text-[14px] text-white/35 font-light">
            © {new Date().getFullYear()} ProFun. All rights reserved. The ProFun Academy is a division of ProFun International.
          </p>
          <a
            href="mailto:info@theprofunacademy.com"
            className="text-[14px] text-white/55 hover:text-[#FFCA03] transition-colors duration-200"
          >
            info@theprofunacademy.com
          </a>
        </div>
      </div>
    </footer>
  )
}
