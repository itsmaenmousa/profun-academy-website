import { useEffect, useMemo, useState } from 'react'
import type React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { getLenis } from '../lib/smooth'

/*
  Courses & Booking (preview).
  Not linked from the main navigation; reached from a discreet footer link.
  Course list is drawn from the Academy company profile. Dates and prices are
  sample values for the demo; nothing is charged and nothing is sent.
*/

type Format = 'In-Person' | 'Virtual' | 'eLearning' | 'Blended'
type Course = {
  id: string
  title: string
  category: string
  format: Format
  duration: string
  price: number
  accredited?: string
  desc: string
  dates: string[]
}

const CATEGORY_COLORS: Record<string, string> = {
  'Safety & Certification': '#00AFDC',
  'Guest Experience': '#FC026F',
  'Operations': '#3985FD',
  'Leadership': '#8238EB',
  'Industry Experience': '#15D2A4',
}

const SELF_PACED = ['Start anytime']

const COURSES: Course[] = [
  {
    id: 'iltp', title: 'International Lifeguard Training Program', category: 'Safety & Certification', format: 'Blended',
    duration: '4 days', price: 2400, accredited: 'Ellis & Associates',
    desc: 'The global standard in lifeguard certification for waterparks, resorts and aquatic venues.',
    dates: ['9 Nov 2026 · Riyadh', '7 Dec 2026 · Jeddah', '11 Jan 2027 · Riyadh'],
  },
  {
    id: 'cpr', title: 'CPR & First Aid', category: 'Safety & Certification', format: 'Blended',
    duration: '1 day', price: 650, accredited: 'Ellis & Associates',
    desc: 'Combined CPR, AED and first aid certification at layperson and healthcare provider levels.',
    dates: ['16 Nov 2026 · Riyadh', '14 Dec 2026 · Riyadh', '18 Jan 2027 · Jeddah'],
  },
  {
    id: 'vanguard', title: 'vanGUARD Aquatics Leadership', category: 'Leadership', format: 'Blended',
    duration: '2 days', price: 1800, accredited: 'Ellis & Associates',
    desc: 'Leadership training for aquatic supervisors and managers who run lifeguard teams.',
    dates: ['23 Nov 2026 · Riyadh', '25 Jan 2027 · Riyadh'],
  },
  {
    id: 'slide', title: 'Water Slide Dispatch Operator', category: 'Safety & Certification', format: 'eLearning',
    duration: 'Self-paced · approx. 3 hrs', price: 320, accredited: 'Ellis & Associates',
    desc: 'Safe dispatch procedures, rider requirements and emergency response for slide operators.',
    dates: SELF_PACED,
  },
  {
    id: 'pathogens', title: 'Preventing Bloodborne & Airborne Pathogens', category: 'Safety & Certification', format: 'eLearning',
    duration: 'Self-paced · approx. 2 hrs', price: 240, accredited: 'Ellis & Associates',
    desc: 'Exposure control, protective equipment and response protocols for frontline teams.',
    dates: SELF_PACED,
  },
  {
    id: 'ttt', title: 'Train the Trainer', category: 'Leadership', format: 'eLearning',
    duration: 'Self-paced · approx. 6 hrs', price: 890, accredited: 'Ellis & Associates',
    desc: 'Build the skills to deliver training in-house with confidence and consistency.',
    dates: SELF_PACED,
  },
  {
    id: 'gse', title: 'Guest Service Excellence', category: 'Guest Experience', format: 'In-Person',
    duration: '2 days', price: 1450,
    desc: 'The behaviors, scripts and standards behind world-class guest experiences.',
    dates: ['10 Nov 2026 · Riyadh', '8 Dec 2026 · Riyadh', '12 Jan 2027 · Jeddah'],
  },
  {
    id: 'recovery', title: 'Conflict Resolution & Service Recovery', category: 'Guest Experience', format: 'Virtual',
    duration: '2 half-days', price: 780,
    desc: 'Turn difficult moments into loyal guests, with role-play and real attraction scenarios.',
    dates: ['18 Nov 2026 · Live online', '16 Dec 2026 · Live online'],
  },
  {
    id: 'ride', title: 'Ride Operator Certification', category: 'Operations', format: 'In-Person',
    duration: '3 days', price: 1950,
    desc: 'Ride operation, safety checks, guest communication and emergency procedures.',
    dates: ['24 Nov 2026 · Riyadh', '19 Jan 2027 · Riyadh'],
  },
  {
    id: 'queue', title: 'Throughput & Queue-Line Management', category: 'Operations', format: 'Virtual',
    duration: '1 day', price: 690,
    desc: 'Capacity planning, queue design and guest flow that lift throughput and satisfaction.',
    dates: ['2 Dec 2026 · Live online', '27 Jan 2027 · Live online'],
  },
  {
    id: 'leadership', title: 'Leadership & Management in Attractions', category: 'Leadership', format: 'In-Person',
    duration: '3 days', price: 3200,
    desc: 'Practical leadership for supervisors and managers, from coaching to performance and KPIs.',
    dates: ['30 Nov 2026 · Riyadh', '2 Feb 2027 · Riyadh'],
  },
  {
    id: 'intro', title: 'Introduction to the Attractions Industry', category: 'Industry Experience', format: 'eLearning',
    duration: 'Self-paced · approx. 4 hrs', price: 290,
    desc: 'How theme parks, waterparks, museums and destinations work, and where you fit in.',
    dates: SELF_PACED,
  },
]

const FILTERS = ['All', 'Safety & Certification', 'Guest Experience', 'Operations', 'Leadership', 'Industry Experience']
const sar = (n: number) => `SAR ${n.toLocaleString('en-US')}`

export default function Courses() {
  const { ref, inView } = useInView()
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState<Course | null>(null)

  const list = useMemo(() => (filter === 'All' ? COURSES : COURSES.filter(c => c.category === filter)), [filter])

  return (
    <section id="courses" className="bg-[#F9F8F6] py-16 sm:py-24 lg:py-32 px-6 sm:px-12 min-h-screen">
      <div className="max-w-[1920px] mx-auto">
        {/* Preview notice */}
        <div className="mb-12 inline-flex items-center gap-3 bg-[#FFCA03]/20 text-[#000050] text-[15px] px-4 py-2.5">
          <span className="w-2 h-2 rounded-full bg-[#FFCA03]" aria-hidden="true" />
          Preview only. Dates and prices are samples and no payments are taken.
        </div>

        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Courses & Booking</p>
            <h1 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-tight tracking-[-0.01em] max-w-[820px]">
              Book a program.<br className="hidden md:block" /> Build your team's capability.
            </h1>
          </div>
          <p className="max-w-[440px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
            Open-enrollment programs from the Academy, including accredited certifications delivered with Ellis & Associates. For tailored team programs, <Link to="/contact" className="text-[#F85707] hover:underline">get in touch</Link>.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter courses">
          {FILTERS.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-[15px] font-medium border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
                filter === f ? 'bg-[#000050] text-white border-[#000050]' : 'bg-white text-[#000050] border-[#E2E0DB] hover:border-[#000050]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-[#E2E0DB] border border-[#E2E0DB]">
          {list.map(c => {
            const color = CATEGORY_COLORS[c.category]
            return (
              <article key={c.id} className="group bg-white p-8 flex flex-col min-h-[340px] relative">
                <span className="absolute top-0 left-0 right-0 h-1" style={{ background: color }} aria-hidden="true" />
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[15px] font-medium" style={{ color }}>{c.category}</span>
                  <span className="text-[14px] text-[#000050] bg-[#F2F1EF] px-2.5 py-1">{c.format}</span>
                </div>
                <h2 className="font-serif text-[clamp(22px,1.7vw,28px)] text-[#000050] leading-snug mb-3">{c.title}</h2>
                <p className="text-[16px] text-[#6B6B65] font-light leading-relaxed mb-6">{c.desc}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-[#6B6B65] mb-5">
                    <span>{c.duration}</span>
                    {c.accredited && <span>Certified by {c.accredited}</span>}
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-5 border-t border-[#E2E0DB]">
                    <span className="text-[19px] font-medium text-[#000050]">{sar(c.price)}</span>
                    <button
                      onClick={() => setActive(c)}
                      className="text-[15px] font-medium text-white bg-[#F85707] px-5 py-2.5 hover:bg-[#000050] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707]"
                    >
                      {c.format === 'eLearning' ? 'Enroll' : 'Book'}
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {active && <Booking course={active} onClose={() => setActive(null)} />}
    </section>
  )
}

/* ── Booking panel ─────────────────────────────────────────── */

type Step = 'details' | 'pay' | 'done'

function Booking({ course, onClose }: { course: Course; onClose: () => void }) {
  const isE = course.format === 'eLearning'
  const [step, setStep] = useState<Step>('details')
  const [date, setDate] = useState(course.dates[0])
  const [seats, setSeats] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [ref] = useState(() => 'PFA-' + Math.random().toString(36).slice(2, 7).toUpperCase())
  const total = course.price * seats
  const color = CATEGORY_COLORS[course.category]

  useEffect(() => {
    getLenis()?.stop()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { getLenis()?.start(); window.removeEventListener('keydown', onKey) }
  }, [onClose])

  const canContinue = name.trim() && /\S+@\S+\.\S+/.test(email)
  const field = 'w-full border border-[#E2E0DB] bg-white px-4 py-3 text-[16px] text-[#1C1C1A] focus:outline-none focus:border-[#000050]'
  const label = 'block text-[15px] font-medium text-[#000050] mb-2'

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-modal="true" aria-label={`Book ${course.title}`}>
      <button className="absolute inset-0 bg-[#000050]/40 backdrop-blur-[2px] cursor-default" onClick={onClose} aria-label="Close" />
      <div className="relative w-full max-w-[520px] h-full bg-[#F9F8F6] overflow-y-auto booking-panel" data-lenis-prevent>
        <span className="block h-1" style={{ background: color }} aria-hidden="true" />
        <div className="p-8 sm:p-10">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div>
              <p className="text-[15px] font-medium mb-2" style={{ color }}>{course.category} · {course.format}</p>
              <h2 className="font-serif text-[28px] text-[#000050] leading-snug">{course.title}</h2>
            </div>
            <button onClick={onClose} className="text-[#6B6B65] hover:text-[#000050] p-1" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>

          {/* Steps */}
          <ol className="flex items-center gap-3 mb-10 text-[14px]">
            {(['details', 'pay', 'done'] as Step[]).map((s, i) => {
              const idx = ['details', 'pay', 'done'].indexOf(step)
              const on = i <= idx
              return (
                <li key={s} className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-medium ${on ? 'bg-[#000050] text-white' : 'bg-[#E2E0DB] text-[#6B6B65]'}`}>{i + 1}</span>
                  <span className={on ? 'text-[#000050]' : 'text-[#6B6B65]'}>{['Details', 'Payment', 'Confirmed'][i]}</span>
                  {i < 2 && <span className="w-6 h-px bg-[#E2E0DB]" aria-hidden="true" />}
                </li>
              )
            })}
          </ol>

          {step === 'details' && (
            <form onSubmit={e => { e.preventDefault(); if (canContinue) setStep('pay') }} className="space-y-6">
              {!isE && (
                <div>
                  <label className={label} htmlFor="b-date">Date & location</label>
                  <select id="b-date" value={date} onChange={e => setDate(e.target.value)} className={field}>
                    {course.dates.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
              )}
              <div>
                <label className={label} htmlFor="b-seats">{isE ? 'Learners' : 'Seats'}</label>
                <div className="flex items-center border border-[#E2E0DB] bg-white w-max">
                  <button type="button" onClick={() => setSeats(s => Math.max(1, s - 1))} className="w-11 h-11 text-[20px] text-[#000050] hover:bg-[#F2F1EF]" aria-label="Fewer">−</button>
                  <span id="b-seats" className="w-12 text-center text-[16px]">{seats}</span>
                  <button type="button" onClick={() => setSeats(s => Math.min(20, s + 1))} className="w-11 h-11 text-[20px] text-[#000050] hover:bg-[#F2F1EF]" aria-label="More">+</button>
                </div>
              </div>
              <div>
                <label className={label} htmlFor="b-name">Full name</label>
                <input id="b-name" value={name} onChange={e => setName(e.target.value)} className={field} autoComplete="off" />
              </div>
              <div>
                <label className={label} htmlFor="b-email">Email</label>
                <input id="b-email" type="email" value={email} onChange={e => setEmail(e.target.value)} className={field} autoComplete="off" />
              </div>
              <div>
                <label className={label} htmlFor="b-company">Company <span className="font-light text-[#6B6B65]">(optional)</span></label>
                <input id="b-company" value={company} onChange={e => setCompany(e.target.value)} className={field} autoComplete="off" />
              </div>
              {isE && (
                <p className="text-[15px] text-[#6B6B65] font-light leading-relaxed">
                  eLearning includes a learner login, so each person can access their modules, track progress and download their certificate.
                </p>
              )}
              <Summary course={course} seats={seats} total={total} date={isE ? undefined : date} />
              <button
                type="submit"
                disabled={!canContinue}
                className="w-full text-[16px] font-medium text-white bg-[#F85707] py-4 hover:bg-[#000050] transition-colors duration-300 disabled:opacity-40 disabled:hover:bg-[#F85707]"
              >
                Continue to payment
              </button>
            </form>
          )}

          {step === 'pay' && (
            <div className="space-y-6">
              <Summary course={course} seats={seats} total={total} date={isE ? undefined : date} />
              <div className="border border-dashed border-[#C9C7C1] bg-white p-6 text-center">
                <p className="text-[16px] text-[#000050] font-medium mb-1">Secure checkout</p>
                <p className="text-[15px] text-[#6B6B65] font-light leading-relaxed">
                  In the live version, trainees pay here by card, Apple Pay or Mada through a secure payment provider. This preview skips payment.
                </p>
              </div>
              <button
                onClick={() => setStep('done')}
                className="w-full text-[16px] font-medium text-white bg-[#F85707] py-4 hover:bg-[#000050] transition-colors duration-300"
              >
                Pay {sar(total)} (demo)
              </button>
              <button onClick={() => setStep('details')} className="w-full text-[15px] text-[#6B6B65] hover:text-[#000050]">Back</button>
            </div>
          )}

          {step === 'done' && (
            <div>
              <div className="w-14 h-14 rounded-full bg-[#15D2A4] flex items-center justify-center mb-6" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="font-serif text-[28px] text-[#000050] leading-snug mb-3">{isE ? "You're enrolled." : "You're booked."}</h3>
              <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed mb-8">
                Thanks {name.split(' ')[0]}. A confirmation{isE ? ' and your login link' : ''} would be emailed to <span className="text-[#000050]">{email}</span>. Booking reference <span className="text-[#000050] font-medium">{ref}</span>.
              </p>
              <Summary course={course} seats={seats} total={total} date={isE ? undefined : date} paid />
              <button onClick={onClose} className="mt-8 w-full text-[16px] font-medium text-[#000050] border border-[#000050] py-4 hover:bg-[#000050] hover:text-white transition-colors duration-300">
                Back to courses
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Summary({ course, seats, total, date, paid }: { course: Course; seats: number; total: number; date?: string; paid?: boolean }) {
  return (
    <div className="bg-white border border-[#E2E0DB] p-6 space-y-3 text-[15px]">
      <Row k="Program" v={course.title} />
      <Row k={date ? 'Date' : 'Access'} v={date ?? 'Start anytime · 12 months'} />
      <Row k={course.format === 'eLearning' ? 'Learners' : 'Seats'} v={`${seats} × ${sar(course.price)}`} />
      <div className="flex justify-between pt-3 border-t border-[#E2E0DB] text-[17px]">
        <span className="font-medium text-[#000050]">{paid ? 'Paid' : 'Total'}</span>
        <span className="font-medium text-[#000050]">{sar(total)}</span>
      </div>
    </div>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-6">
      <span className="text-[#6B6B65] font-light">{k}</span>
      <span className="text-[#1C1C1A] text-right">{v}</span>
    </div>
  )
}
