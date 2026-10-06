import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', organisation: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#F9F8F6] py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[3px] bg-[#15D2A4]" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-[#6B6B65]">Get started</span>
            </div>
            <h2 className="font-serif text-[clamp(38px,3.3vw,52px)] text-[#000050] leading-tight mb-8 tracking-[-0.01em]">
              Build capability<br className="hidden sm:block" /> that lasts.
            </h2>
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light mb-12">
              Whether you need a single program or a full learning strategy, tell us about your team and we will shape the right approach with you.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#6B6B65] mb-2">Location</p>
                <p className="text-[17px] text-[#1C1C1A] font-light leading-relaxed">
                  Riyadh, Kingdom of Saudi Arabia
                </p>
              </div>
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#6B6B65] mb-2">Get in touch</p>
                <a href="mailto:info@theprofunacademy.com" className="text-[17px] text-[#F85707] hover:text-[#D94A05] transition-colors">
                  info@theprofunacademy.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full py-16">
                <div className="w-8 h-px bg-[#F85707] mb-8" />
                <h3 className="font-serif text-[36px] text-[#1C1C1A] mb-4">Thank you</h3>
                <p className="text-[19px] text-[#6B6B65] font-light leading-relaxed">
                  We have received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] tracking-[0.12em] uppercase text-[#6B6B65] mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#E2E0DB] py-3 text-[17px] text-[#1C1C1A] placeholder:text-[#C0BDB8] focus:outline-none focus:border-[#1C1C1A] transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] tracking-[0.12em] uppercase text-[#6B6B65] mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      value={form.organisation}
                      onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      className="w-full bg-transparent border-b border-[#E2E0DB] py-3 text-[17px] text-[#1C1C1A] placeholder:text-[#C0BDB8] focus:outline-none focus:border-[#1C1C1A] transition-colors duration-200"
                      placeholder="Your organisation"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] tracking-[0.12em] uppercase text-[#6B6B65] mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#E2E0DB] py-3 text-[17px] text-[#1C1C1A] placeholder:text-[#C0BDB8] focus:outline-none focus:border-[#1C1C1A] transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[14px] tracking-[0.12em] uppercase text-[#6B6B65] mb-2">
                    How can we help?
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#E2E0DB] py-3 text-[17px] text-[#1C1C1A] placeholder:text-[#C0BDB8] focus:outline-none focus:border-[#1C1C1A] transition-colors duration-200 resize-none"
                    placeholder="Tell us about your team, your learning challenge and the outcome you are working towards"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 text-[16px] font-medium text-white bg-[#F85707] px-8 py-4 transition-all duration-300 hover:bg-[#000050]"
                  >
                    Send message
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
