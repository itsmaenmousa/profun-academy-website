import type React from 'react'
import { useState } from 'react'
import { useInView } from '../../hooks/useInView'

const categories = [
  'All',
  'Leadership & Management',
  'Industry Experience',
  'Safety & Security',
  'Rides & Attractions',
  'Frontline Colleagues',
  'Human Resources',
  'Guest Service Excellence',
  'Sales & Marketing',
  'Food & Beverage',
  'Retail',
  'Engineering & Technical Services',
  'Information Technology',
  'Housekeeping',
]

const modules = [
  { cat: 'Leadership & Management', title: 'Policy & Procedure Development Across All Departments' },
  { cat: 'Leadership & Management', title: 'Leadership Development & Capability Building' },
  { cat: 'Leadership & Management', title: 'Keynote Speakers' },
  { cat: 'Leadership & Management', title: 'Revenue & Financial Management' },
  { cat: 'Industry Experience', title: 'Global Benchmarking' },
  { cat: 'Industry Experience', title: 'Facility Tours' },
  { cat: 'Industry Experience', title: 'Industry Networking & Association' },
  { cat: 'Industry Experience', title: 'International Study & Exposure Trips' },
  { cat: 'Safety & Security', title: 'Facility Audits and Reviews' },
  { cat: 'Safety & Security', title: 'First-aid, CPR & AED Certification' },
  { cat: 'Safety & Security', title: 'Risk Assessment Overview' },
  { cat: 'Safety & Security', title: 'Emergency Action Planning' },
  { cat: 'Safety & Security', title: 'Incident Reporting and Follow-up' },
  { cat: 'Safety & Security', title: 'Regulatory Compliance Best Practices' },
  { cat: 'Rides & Attractions', title: 'Ride Operator Certification' },
  { cat: 'Rides & Attractions', title: 'Lifeguard Certification' },
  { cat: 'Rides & Attractions', title: 'Ride Scripts, Spiels and Safety Announcements' },
  { cat: 'Rides & Attractions', title: 'Throughput & Queue-line Management' },
  { cat: 'Rides & Attractions', title: 'Guest Management and Accessibility' },
  { cat: 'Frontline Colleagues', title: 'Introduction and History of Attractions' },
  { cat: 'Frontline Colleagues', title: 'Effective Communication' },
  { cat: 'Frontline Colleagues', title: 'Conflict Resolution & Service Recovery' },
  { cat: 'Frontline Colleagues', title: 'Point of Sale Operations' },
  { cat: 'Frontline Colleagues', title: 'Admission & Ticketing Operations' },
  { cat: 'Human Resources', title: 'Motivation & Incentive Programs' },
  { cat: 'Human Resources', title: 'Colleague Engagement Programs' },
  { cat: 'Human Resources', title: 'Coaching & Mentorship' },
  { cat: 'Human Resources', title: 'Train-the-Trainer Programs' },
  { cat: 'Human Resources', title: 'On-boarding and Induction' },
  { cat: 'Human Resources', title: 'Performance Management' },
  { cat: 'Human Resources', title: 'Facilitator Guides & Assessment Tools' },
  { cat: 'Guest Service Excellence', title: 'Guest Interaction Scripts and Best Practices' },
  { cat: 'Guest Service Excellence', title: 'Entertainment in Attractions' },
  { cat: 'Guest Service Excellence', title: 'Audits and Secret Shoppers' },
  { cat: 'Guest Service Excellence', title: 'KPI Recommendations' },
  { cat: 'Guest Service Excellence', title: 'Role-play Simulations & Coaching' },
  { cat: 'Guest Service Excellence', title: 'Guided Experiences' },
  { cat: 'Sales & Marketing', title: 'Current Trends and Best Practices' },
  { cat: 'Sales & Marketing', title: 'Brand Positioning' },
  { cat: 'Sales & Marketing', title: 'Industry Strategies & Tactics' },
  { cat: 'Sales & Marketing', title: 'Social Media Engagement' },
  { cat: 'Sales & Marketing', title: 'Sales Channel Management' },
  { cat: 'Food & Beverage', title: 'Outlet Setup & Layout' },
  { cat: 'Food & Beverage', title: 'Upselling Techniques' },
  { cat: 'Food & Beverage', title: 'Food Hygiene Best Practices' },
  { cat: 'Food & Beverage', title: 'Kitchen Operation Efficiency' },
  { cat: 'Food & Beverage', title: 'Attractions Menu Overview' },
  { cat: 'Retail', title: 'Merchandising & Store Layout' },
  { cat: 'Retail', title: 'Inventory & Stock Management' },
  { cat: 'Retail', title: 'Sales Strategies' },
  { cat: 'Retail', title: 'Loss Prevention & Shrinkage' },
  { cat: 'Retail', title: 'Cashiering Overview' },
  { cat: 'Engineering & Technical Services', title: 'Technical Regulations & Industry Best Practices' },
  { cat: 'Engineering & Technical Services', title: 'Inspection Protocols' },
  { cat: 'Engineering & Technical Services', title: 'Preventive & Predictive Maintenance' },
  { cat: 'Information Technology', title: 'Technology in Attractions' },
  { cat: 'Information Technology', title: 'Applications and Digital Experience' },
  { cat: 'Information Technology', title: 'Guest Analytics' },
  { cat: 'Housekeeping', title: 'Chemical Handling Procedures' },
  { cat: 'Housekeeping', title: 'Inspection Protocols' },
  { cat: 'Housekeeping', title: 'Cleaning Standards' },
]

export default function AcademyLibrary() {
  const [filter, setFilter] = useState('All')
  const { ref, inView } = useInView()

  const visible = filter === 'All' ? modules : modules.filter(m => m.cat === filter)
  const count = visible.length

  return (
    <section
      id="library"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="library-heading"
      className="bg-[#F9F8F6] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">07</span>
          <span className="flex-1 h-px bg-[#DDDBD6]" />
          <span className="text-[#6B6B65] text-[12px] font-medium tracking-[0.15em] uppercase">Training Library</span>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <h2 id="library-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              A complete curriculum for attraction operations.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">
              Select training and delivery topics across 13 curriculum areas. Filter by discipline to explore what we deliver.
            </p>
          </div>
        </div>

        {/* Filter controls */}
        <div
          className={`mb-8 reveal reveal-delay-1 ${inView ? 'visible' : ''}`}
          role="group"
          aria-label="Filter training modules by category"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[14px] font-medium px-4 py-2 border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
                  filter === cat
                    ? 'bg-[#1C1C1A] text-white border-[#1C1C1A]'
                    : 'text-[#6B6B65] border-[#DDDBD6] hover:border-[#1C1C1A] hover:text-[#1C1C1A]'
                }`}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-[14px] text-[#6B6B65] font-light mb-8 reveal reveal-delay-2" aria-live="polite">
          Showing {count} module{count !== 1 ? 's' : ''}
          {filter !== 'All' ? ` in ${filter}` : ''}
        </p>

        {/* Module grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDDBD6] reveal reveal-delay-2 ${inView ? 'visible' : ''}`}
        >
          {visible.map((m, i) => (
            <div
              key={`${m.cat}-${m.title}-${i}`}
              className="bg-[#F9F8F6] p-6 hover:bg-[#F2F1EF] transition-colors duration-200 group cursor-pointer"
            >
              <p className="text-[12px] tracking-[0.12em] uppercase text-[#F85707] font-medium mb-3">{m.cat}</p>
              <p className="text-[16px] font-medium text-[#1C1C1A] leading-snug group-hover:text-[#000050] transition-colors duration-200">
                {m.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
