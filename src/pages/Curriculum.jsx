import React from 'react'
import SidebarNavigation from '../components/SidebarNavigation'
import { GraduationCap } from 'lucide-react'
import LabeledCard from '../components/LabeledCard'

const Curriculum = () => {
  const cardArray = [
    { title: "Affiliated Board", description: "HP School Education Board"},
    { title: "Programs", description: "8th, 10th, 10+1, 10+2, JBT, TTC"},
    { title: "Annual Candidates", description: "5+ lakh learners"},
  ]

  return (
    <main className='curriculumPage'>
      <section className='director-hero position-relative'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-left curriculumHero">
              <div className='d-flex flex-wrap align-items-center gap-2 mb-3'>
                <p className='commonLabel mb-0'>UNITY PUBLIC SR. SEC. SCHOOL</p>
                <span className='commonLabel dotWrap'></span>
                <p className='commonLabel mb-0'>Academic edition</p>
              </div>
              <h1 className='heroMainTitle fw-bold'>Curriculum</h1>
              <p className='director-subtitle'>A clear academic roadmap covering syllabi, learning outcomes, and essential resources for students from Classes 8th to 12th. Designed to support structured learning, practical knowledge, and strong examination preparation.</p>
            </div>
            <div className="col-lg-6">
              <div className='heroImg'>
                <img src='/img/curriculum-hero.png' alt='curriculum image' className='w-100 h-100 object-fit-cover img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mainInnerContent">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className='directoryDetails focus-card mb-5 position-relative shadowDiv'>
                <h2 className='focus-card-heading'>About the Board Affiliation</h2>
                <p className='focus-card-description'>
                  Unity Public Senior Secondary School Rewalsar is affiliated with the Himachal Pradesh Board of School Education.
                  The board defines syllabi, regulates examinations, and provides an accountable academic framework.
                </p>
                <p className='focus-card-description'>
                  Since its formal foundation and expansion phases, the board has continuously scaled to support large annual candidate
                  volumes across secondary, senior-secondary, and teacher training pathways.
                </p>
                <div className="row curriculum-card">
                  {cardArray.map((card, index)=>(
                    <div className="col-lg-4 mb-3 mb-lg-0" key={`${card.title}-${index}`}>
                    <LabeledCard
                      className="promise-card-modern"
                      withShadow
                      label={card.title}
                      labelClassName="promise-card-label commonLabel"
                      description={card.description}
                      descriptionClassName="promise-card-description-modern"
                    />
                  </div>
                  ))}
                  
                  
                </div>
              </div>
              <div className='important-points-wrapper director-manifesto shadowDiv position-relative'>
                <div className='manifesto-label commonLabel'>Current Scale</div>
                <h2 className='manifesto-title'>5,00,000+ Annual Exam Appearances</h2>
                <div className='manifesto-content'>
                  <p>Programs include Private Capacity (8th), 10th, 10+1, 10+2, J.B.T, and T.T.C.</p>
                </div>
                <div className='important-content-wrap text-center'>
                  Admissions and academic planning are now open for the next session.
                </div>
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

export default Curriculum
