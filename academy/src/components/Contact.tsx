import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', organization: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // No form backend: open the visitor's email app with the message ready to send
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Website enquiry from ${form.name}${form.organization ? `, ${form.organization}` : ''}`
    const body = `${form.message}\n\n${form.name}${form.organization ? `\n${form.organization}` : ''}\n${form.email}`
    window.location.href = `mailto:info@theprofunacademy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#F9F8F6] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:pr-8">
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Get Started</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] mb-8 tracking-[-0.01em]">
              Build capability<br className="hidden sm:block" /> that lasts.
            </h2>
            <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light lg:mb-12">
              Whether you need a single program or a full learning strategy, tell us about your team and we will shape the right approach with you.
            </p>

            <div className="hidden lg:block border-t border-[#E2E0DB] divide-y divide-[#E2E0DB]">
              <div className="py-5">
                <p className="text-[15px] font-medium text-[#000050] mb-1.5">Location</p>
                <p className="text-[18px] text-[#1C1C1A] font-light leading-relaxed">
                  Riyadh, Kingdom of Saudi Arabia
                </p>
              </div>
              <div className="py-5">
                <p className="text-[15px] font-medium text-[#000050] mb-1.5">Get in touch</p>
                <a href="mailto:info@theprofunacademy.com" className="text-[18px] text-[#F85707] hover:text-[#D94A05] transition-colors">
                  info@theprofunacademy.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            {sent ? (
              <div className="relative bg-white border border-[#E2E0DB] p-6 sm:p-10 lg:p-12 flex flex-col items-start justify-center min-h-[420px]">
                <h3 className="font-serif text-[36px] text-[#000050] mb-4">Almost there</h3>
                <p className="text-[20px] text-[#6B6B65] font-light leading-relaxed">
                  Your message is ready in your email app. Press send and the Academy team will get back to you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative bg-white border border-[#E2E0DB] p-6 sm:p-10 lg:p-12 space-y-6">
                <span className="absolute top-0 left-0 right-0 h-1 flex" aria-hidden="true">
                  {['#3985FD', '#15D2A4', '#FFCA03', '#FC026F', '#8238EB', '#F85707'].map(c => <span key={c} className="flex-1" style={{ background: c }} />)}
                </span>
                <div className="pb-2">
                  <h3 className="font-serif text-[clamp(24px,2vw,30px)] text-[#000050] leading-tight">Send us a message</h3>
                  <p className="mt-2 text-[16px] text-[#6B6B65] font-light">Fill in the form and our team will get back to you.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[15px] font-medium text-[#000050] mb-2.5">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#F4F3F0] border border-transparent px-5 py-4 text-[17px] text-[#1C1C1A] placeholder:text-[#A8A59F] focus:outline-none focus:bg-white focus:border-[#000050] transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-medium text-[#000050] mb-2.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full bg-[#F4F3F0] border border-transparent px-5 py-4 text-[17px] text-[#1C1C1A] placeholder:text-[#A8A59F] focus:outline-none focus:bg-white focus:border-[#000050] transition-colors duration-200"
                      placeholder="Your organization"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-[#000050] mb-2.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#F4F3F0] border border-transparent px-5 py-4 text-[17px] text-[#1C1C1A] placeholder:text-[#A8A59F] focus:outline-none focus:bg-white focus:border-[#000050] transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-[#000050] mb-2.5">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#F4F3F0] border border-transparent px-5 py-4 text-[17px] text-[#1C1C1A] placeholder:text-[#A8A59F] focus:outline-none focus:bg-white focus:border-[#000050] transition-colors duration-200 resize-none"
                    placeholder="Tell us about your team, your learning challenge and the outcome you are working toward"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group/btn w-full sm:w-auto justify-center inline-flex items-center gap-3 text-[17px] font-medium text-white bg-[#F85707] px-8 py-4 transition-all duration-300 hover:bg-[#000050]"
                  >
                    Send message
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location and email: below the form on phones and tablets */}
            <div className="lg:hidden border-t border-[#E2E0DB] divide-y divide-[#E2E0DB]">
              <div className="py-5">
                <p className="text-[15px] font-medium text-[#000050] mb-1.5">Location</p>
                <p className="text-[18px] text-[#1C1C1A] font-light leading-relaxed">
                  Riyadh, Kingdom of Saudi Arabia
                </p>
              </div>
              <div className="py-5">
                <p className="text-[15px] font-medium text-[#000050] mb-1.5">Get in touch</p>
                <a href="mailto:info@theprofunacademy.com" className="text-[18px] text-[#F85707] hover:text-[#D94A05] transition-colors">
                  info@theprofunacademy.com
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
