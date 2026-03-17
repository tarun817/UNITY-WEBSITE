import React from 'react'
import SidebarNavigation from '../components/SidebarNavigation'
import { BookOpenText, FlaskConical, MonitorCheck, ShieldPlus } from 'lucide-react'
import LabeledCard from '../components/LabeledCard'

const Facilities = () => {
  const facilitesArray = [
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'There are  Laboratories for Physics, Chemistry & Biology with adequate number of Apparatus, sufficient Chemical, Slides, Microscope, OHP, LCD Projector, Herbarium and Specimen for study. A Maths Lab, Language Lab and Junior Science Lab are also set up.'
    },
    {
      icon: BookOpenText,
      title: 'Library',
      description: (
        <>
          <p className='mb-1'>A well-equipped library for all students, offering newspapers and magazines with plans to expand.</p>
          <p className='mb-0'>Rules:</p>
          <ul>
            <li>Use under supervision</li>
            <li>Report damage on issue</li>
            <li>Return on time (₹2/day fine)</li>
            <li>Replace/pay for lost or damaged books</li>
          </ul>
        </>
      )
    },
    {
      icon: MonitorCheck,
      title: 'Computer Lab',
      description: 'A dedicated computer lab supports digital literacy, practical learning, and guided practice for students across classes.'
    },
    {
      icon: ShieldPlus,
      title: 'Medical Facilities',
      description: (
        <ul>
          <li>First aid is available for students in need.</li>
          <li>Inform the school of any allergies.</li>
          <li>Students with infectious diseases should stay home until fully recovered and notify the school.</li>
        </ul>
      )
    },
  ]
  return (
    <main className='facilitiesPage'>
      <section className='director-hero'>
        <div className="container">
          <div className="row gap-3 gap-lg-0">
            <div className="col-lg-6 text-center text-lg-start">
              <div className='mb-3 fw-bold topTitle'>
                <span className='py-2 px-3 rounded-pill me-2'>Academic Excellence</span>
              </div>
              <h1 className='heroMainTitle fw-bold'>Academics at Unity Public Sr. Sec. School</h1>
              <p className='director-subtitle mx-auto mb-0'>A modern, discipline-led learning ecosystem where students build strong fundamentals, practical skills, and real confidence for higher education.</p>
            </div>
            <div className="col-lg-6">
              <div className='heroImgWrap'>
                <img src='/img/facilities3.jpg' alt='facilities image' className='w-100 h-100 object-fit-cover img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mainInnerContent'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row focus-card mb-5 position-relative">
                {facilitesArray.map((card, index) => (
                <div className="col-lg-6 mb-5" key={`${card.title}-${index}`}>
                  <LabeledCard
                    className='promise-card-modern d-flex flex-column h-100'
                    withShadow
                    icon={card.icon}
                    label={card.title}
                    labelClassName='promise-card-label commonLabel'
                    description={card.description}
                  />  
                </div>
                ))}
              </div>
            </div>
            <div className="col-lg-3 rightSidebar">
              <SidebarNavigation />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Facilities
