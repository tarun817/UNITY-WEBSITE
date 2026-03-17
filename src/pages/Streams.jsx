import { FlaskConical, HeartPlus, Sparkles } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import SidebarNavigation from '../components/SidebarNavigation'
import LabeledCard from '../components/LabeledCard'

const Streams = () => {
  const StreamCardArray = [
    {
      title: "Non Medical",
      icon: <FlaskConical />,
      description: <ul>
        <li>English</li>
        <li>Mathematics</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Physical Education / Computer Science</li>
      </ul>
    },
    {
      title: "Medical",
      icon: <HeartPlus />,
      description: <ul>
        <li>English</li>
        <li>Biology</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Physical Education / Computer Science</li>
      </ul>
    }
  ]
  return (
    <main className='streamsPage'>
      <section className='director-hero position-relative'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto text-center">
              <div className='mb-3 fw-bold topTitle'>
                <span className='py-2 px-3 rounded-pill me-2'><Sparkles size={16} className='me-1' />Academics at Unity Public School</span>
              </div>
              <h1 className='heroMainTitle fw-bold mx-lg-5'>Science Stream, redesigned for clarity and confidence.</h1>
              <p className='heroSubtitle mx-auto'>Built on the H.P Board curriculum with bilingual instruction and career-focused stream options at senior secondary level.</p>
              <div className="director-cta-buttons d-flex justify-content-center gap-3 flex-wrap mt-lg-4">
                <Link to="/curriculum" className="btn btn-primary btn-lg">Explore Curriculum</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mainInnerContent'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className='mb-5 position-relative shadowDiv documentDetails'>
                <h2 className='focus-card-heading'>Explore Our Science Streams</h2>
                <p>The School is currently following the syllabus as prescribed by the H.P Board of School Education, Dharmshala. Both English and Hindi are the medium of instruction, Sanskrit is taught as compulsory subject form class VI to X as a third language.  Computer is also taught from class 3rd onwards. </p>
                <p>For XI and XII, i.e at Senior Secondary level, two science streams are presently offered :</p>
                <div className="row">
                  {StreamCardArray.map((card, index) => (
                    <div className="col-lg-6" key={`${card.title}-${index}`}>
                      <LabeledCard
                        className="promise-card-modern d-flex flex-column"
                        withShadow
                        icon={card.icon}
                        label={card.title}
                        labelClassName="promise-card-label commonLabel"
                        description={card.description}
                        descriptionClassName="promise-card-description-modern"
                      />
                    </div>
                  ))}
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

export default Streams
