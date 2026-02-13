import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  // Data array for information cards
  const infoCards = [
    {
      label: 'ESTABLISHED',
      value: '2002'
    },
    {
      label: 'SCHOOL TYPE',
      value: 'Co-educational'
    },
    {
      label: 'MEDIUM',
      value: 'English & Hindi'
    },
    {
      label: 'AFFILIATION',
      value: 'H.P. Board, Dharamshala'
    }
  ]

  // Data array for campus feature cards
  const campusFeatureCards = [
    {
      title: 'Learner Paradise',
      description: 'A place where curiosity becomes confidence.'
    },
    {
      title: 'Character First',
      description: 'Kindness, honesty, courage, and hard work— every day.'
    },
  ]


  return (
    <main>
      <section className="bg-linear overviewWrap">
        <div className="container mx-auto">
          <div className="flexslider flexslider-center-mobile flexslider-simple mb-0 position-relative">
            <ul className="slides">
              <li>
                <img className="img-fluid" src="/img/aboutus1.jpg" alt="About Us" />
              </li>
            </ul>
            <h1 className="mb-0 position-absolute pageHeading text-white bottom-0 fw-bold">Overview</h1>
          </div>
        </div>
      </section>
      <section className='aboutWrapper position-relative overflow-hidden'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className='mb-3 fw-bold topTitle d-flex align-items-center'><span className='bg-white py-1 px-3 rounded-pill me-2'>About</span> Unity Public Senior Secondary School</div>
              <h2 className='mb-4 sectionHeading fw-bold'>Building bright minds with values, discipline, and opportunity</h2>
              <p className="lead fw-normal">Established in 2002, Unity Public Senior Secondary School was founded to provide moral and qualitative education for growing kids. Today, our focus remains the same: quality teaching, supportive guidance, and an environment where every student can grow.</p>
              
              {/* Information Cards */}
              <div className="row g-3 mt-4">
                {infoCards.map((card, index) => (
                  <div key={index} className="col-md-6">
                    <div className="info-card">
                      <div className="info-card-label">{card.label}</div>
                      <div className="info-card-value">{card.value}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="col-lg-5">
              <div className='w-100 mb-4'>
                <img className='w-100 h-auto object-fit-contain rounded' src="mygallery/tour25/108.jpg" alt="school picnic for students from classes 3rd to 12th" />
              </div>
              
              {/* Campus Feature Cards */}
              <div className="campus-feature-cards">
                {campusFeatureCards.map((card, index) => (
                  <div key={index} className="campus-feature-card">
                    <h3 className="campus-feature-title">{card.title}</h3>
                    <p className="campus-feature-description">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='ourDirector'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <h2 className='text-start fw-bold sectionHeading mb-3'>Our Director</h2>
              <p>Your children need encouragement and proper guidance to face the ever-changing challenges and opportunities of life. At our school, education is not just about academics—it is about nurturing individuality, confidence, and character.</p>
              <p>First and foremost, this school is not just an institution; it is a home away from home. Here, we grow together as one family. Our mission is to shape successful human beings who can walk, speak, and conduct themselves with confidence and integrity.</p>
              <p>Life brings pressure and challenges, but true success belongs to those who rise above them with strong willpower and self-belief. As the wisdom of the Upanishads reminds us, a person succeeds when they truly believe they can.</p>
              <p>We strive to provide maximum opportunities through quality classroom teaching, co-curricular activities, sports, excursions, and personal care—within a disciplined and supportive environment. Our aim is to help every child grow: enabling an average student to achieve higher standards and an excellent student to excel further.</p>
              <div className='highlightedText'><p className='mb-0'>We wish all our students success and a bright future ahead.</p></div>
            </div>
            <div className="col-lg-6">
              <div className='w-100 h-100'>
                <img className='w-100 h-100 object-fit-cover' src="img/slides/director.png" alt="Director's Message" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            

            

            <h2 className="mt-5 mb-4">Salient Feature</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="icon-ok text-success me-2"></i>Emphasis on all round development and discipline.
              </li>
              <li className="mb-2">
                <i className="icon-ok text-success me-2"></i>Every possible effort is taken to give personalized attention to children.
              </li>
              <li className="mb-2">
                <i className="icon-ok text-success me-2"></i>Using all latest innovative education and technology to impart quality of education.
              </li>
              <li className="mb-2">
                <i className="icon-ok text-success me-2"></i>Given proper attention and extra time for weak students.
              </li>
              <li className="mb-2">
                <i className="icon-ok text-success me-2"></i>Provide coaching / guidance for various entrance examinations like PAT, PMT, PET etc.
              </li>
              <li className="mb-2">
                <i className="icon-ok text-success me-2"></i>The School is giving the practical knowledge of Science for each class.
              </li>
            </ul>

            <hr className="my-5" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutUs
