import { useEffect } from 'react'
import { resetScroll } from '../lib/smooth'
import AcademyNav from '../components/academy/AcademyNav'
import AcademyHero from '../components/academy/AcademyHero'
import AcademyAuthority from '../components/academy/AcademyAuthority'
import AcademyMetrics from '../components/academy/AcademyMetrics'
import AcademyCapability from '../components/academy/AcademyCapability'
import AcademyServices from '../components/academy/AcademyServices'
import AcademyDelivery from '../components/academy/AcademyDelivery'
import AcademyLibrary from '../components/academy/AcademyLibrary'
import AcademyCredentials from '../components/academy/AcademyCredentials'
import AcademyProjects from '../components/academy/AcademyProjects'
import AcademyPartners from '../components/academy/AcademyPartners'
import AcademyLeadership from '../components/academy/AcademyLeadership'
import AcademyContact from '../components/academy/AcademyContact'

export default function Academy() {
  useEffect(() => { resetScroll() }, [])
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <AcademyNav />
      <main id="main-content">
        <AcademyHero />
        <AcademyAuthority />
        <AcademyMetrics />
        <AcademyCapability />
        <AcademyServices />
        <AcademyDelivery />
        <AcademyLibrary />
        <AcademyCredentials />
        <AcademyProjects />
        <AcademyPartners />
        <AcademyLeadership />
        <AcademyContact />
      </main>
    </div>
  )
}
