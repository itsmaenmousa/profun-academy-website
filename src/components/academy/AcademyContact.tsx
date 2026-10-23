import type React from 'react'
import { useState } from 'react'
import { useInView } from '../../hooks/useInView'

export default function AcademyContact() {
  const [form, setForm] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const { ref, inView } = useInView()

  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputCls =
    'w-full bg-transparent border-b border-[#DDDBD6] py-3 text-[18px] text-[#1C1C1A] placeholder:text-[#BEBBB5] focus:outline-none focus:border-[#1C1C1A] transition-colors duration-200'

  return (
    <>
      {/* Contact section */}
      <section
        id="contact"
        ref={ref as React.RefObject<HTMLElement>}
        aria-labelledby="contact-heading"
        className="bg-[#111110] py-16 sm:py-24 lg:py-28 px-6 sm:px-10"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Chapter rule */}
          <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
            <span className="text-[20px] font-semibold text-[#F85707] whitespace-nowrap">Contact</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: statement + details */}
            <div className={`lg:col-span-4 reveal ${inView ? 'visible' : ''}`}>
              <h2
                id="contact-heading"
                className="font-serif text-[clamp(32px,3.4vw,52px)] text-white leading-tight tracking-[-0.01em] mb-10"
              >
                Turn learning into operational performance.
              </h2>

              <div className="space-y-10">
                {/* Email */}
                <div>
                  <p className="text-[16px] text-white/60 mb-3 font-medium">Email</p>
                  <a
                    href="mailto:info@theprofunacademy.com"
                    className="text-[18px] text-white/70 hover:text-[#F85707] transition-colors duration-200"
                  >
                    info@theprofunacademy.com
                  </a>
                </div>

                {/* Location */}
                <div className="pt-2 border-t border-white/8">
                  <p className="text-[16px] text-white/60 mb-3 font-medium">Location</p>
                  <p className="text-[17px] text-white/70 font-light">4936 Anas Ibn Malik, Al Malqa Dist., Riyadh 13525, Saudi Arabia</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className={`lg:col-span-6 lg:col-start-7 reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
              {sent ? (
                <div className="py-20 flex flex-col gap-6">
                  <div className="w-8 h-px bg-[#F85707]" />
                  <h3 className="font-serif text-[36px] text-white leading-tight">Thank you.</h3>
                  <p className="text-[19px] text-white/50 font-light max-w-[400px] leading-relaxed">
                    Your inquiry has been received. A member of the ProFun Academy team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handle} noValidate aria-label="Learning strategy inquiry form">
                  <p className="text-[16px] text-white/60 mb-8 font-medium">
                    Start the conversation
                  </p>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="ac-name" className="block text-[16px] text-white/60 mb-2 font-medium">
                          Full name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="ac-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-transparent border-b border-white/15 py-3 text-[18px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="ac-org" className="block text-[16px] text-white/60 mb-2 font-medium">
                          Organization
                        </label>
                        <input
                          id="ac-org"
                          type="text"
                          autoComplete="organization"
                          value={form.org}
                          onChange={e => setForm({ ...form, org: e.target.value })}
                          className="w-full bg-transparent border-b border-white/15 py-3 text-[18px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="ac-email" className="block text-[16px] text-white/60 mb-2 font-medium">
                          Email address <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="ac-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-transparent border-b border-white/15 py-3 text-[18px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="ac-phone" className="block text-[16px] text-white/60 mb-2 font-medium">
                          Phone
                        </label>
                        <input
                          id="ac-phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-transparent border-b border-white/15 py-3 text-[18px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200"
                          placeholder="+xxx xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="ac-interest" className="block text-[16px] text-white/60 mb-2 font-medium">
                        Area of interest
                      </label>
                      <select
                        id="ac-interest"
                        value={form.interest}
                        onChange={e => setForm({ ...form, interest: e.target.value })}
                        className="w-full bg-transparent border-b border-white/15 py-3 text-[18px] text-white/70 focus:outline-none focus:border-white/50 transition-colors duration-200 cursor-pointer"
                      >
                        <option value="" className="bg-[#111110]">Select a service area</option>
                        <option value="tailored" className="bg-[#111110]">Tailored learning experience design</option>
                        <option value="inperson" className="bg-[#111110]">In-person learning</option>
                        <option value="blended" className="bg-[#111110]">Blended or online learning</option>
                        <option value="accredited" className="bg-[#111110]">Accredited programs</option>
                        <option value="hcd" className="bg-[#111110]">Human capital development</option>
                        <option value="strategy" className="bg-[#111110]">Learning strategy</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="ac-message" className="block text-[16px] text-white/60 mb-2 font-medium">
                        Tell us about your learning challenge
                      </label>
                      <textarea
                        id="ac-message"
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-transparent border-b border-white/15 py-3 text-[18px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200 resize-none"
                        placeholder="Describe your team, your challenge and the outcome you're working toward"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 text-[15px] font-medium text-white bg-[#F85707] px-8 py-4 hover:bg-[#D94A05] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111110]"
                    >
                      Send inquiry
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                        <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A09] px-6 sm:px-10 py-10" role="contentinfo">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-white/8">
            {/* Brand */}
            <div className="flex items-center">
              <img src="./profun-academy-white.svg" alt="The ProFun Academy" className="h-20 sm:h-24 w-auto opacity-80" />
            </div>

            {/* Footer nav */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-8 gap-y-1">
                {['About', 'Services', 'Programs', 'Projects', 'Team', 'Contact'].map(l => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="inline-block py-2 text-[15px] font-medium text-white/50 hover:text-white/80 transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-[13px] text-white/20 font-light">
              © {new Date().getFullYear()} The ProFun Academy, a division of ProFun. All rights reserved.
            </p>
            <p className="text-[13px] text-white/20 font-light">
              Riyadh, KSA · Los Angeles, USA
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
