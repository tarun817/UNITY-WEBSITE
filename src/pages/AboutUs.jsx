import { Check } from 'lucide-react'
import React from 'react'

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

  // Data array for salient features
  const salientFeatures = [
    {
      title: 'All-round development',
      description: 'A balanced approach that builds discipline, curiosity, and confidence.'
    },
    {
      title: 'Personalized attention',
      description: 'Small wins, consistent feedback, and mentoring tailored to each student.'
    },
    {
      title: 'Modern learning methods',
      description: 'Activity-based teaching with the right mix of technology and fundamentals.'
    },
    {
      title: 'Support for weak students',
      description: 'Extra time, focused practice, and patient guidance to close learning gaps.'
    },
    {
      title: 'Entrance exam coaching',
      description: 'Structured preparation for exams like PAT, PMT, PET and more.'
    },
    {
      title: 'Practical science for every class',
      description: 'Hands-on experiments and real-world examples that make concepts stick.'
    }
  ]


  return (
    <main>
      <section className="overviewWrap">
        <div className="container-fluid px-0">
          <div className="heroWrapper mb-0 position-relative">
            <h1 className="mb-0 pageHeading text-white fw-bold position-absolute">Overview</h1>
            <div className="overlay"></div>
          </div>
        </div>
      </section>
      <section className='aboutWrapper position-relative overflow-hidden'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className='mb-3 fw-bold topTitle d-flex align-items-center justify-content-center justify-content-lg-start'><span className='bg-white py-1 px-3 rounded-pill me-2'>About</span> Unity Public Senior Secondary School</div>
              <h2 className='mb-4 sectionHeading fw-bold text-center text-lg-start'>Building bright minds with values, discipline, and opportunity</h2>
              <p className="lead fw-normal text-center text-lg-start">Established in 2002, Unity Public Senior Secondary School was founded to provide moral and qualitative education for growing kids. Today, our focus remains the same: quality teaching, supportive guidance, and an environment where every student can grow.</p>
              
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
            <div className="col-lg-5 mt-5 mt-lg-0">
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
      <section className='ourDirector aimsWrapper position-relative overflow-hidden'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <h2 className='text-center text-lg-start fw-bold sectionHeading mb-3'>Our Director</h2>
              <p className='text-center text-lg-start'>Your children need encouragement and proper guidance to face the ever-changing challenges and opportunities of life. At our school, education is not just about academics—it is about nurturing individuality, confidence, and character.</p>
              <p className='text-center text-lg-start'>First and foremost, this school is not just an institution; it is a home away from home. Here, we grow together as one family. Our mission is to shape successful human beings who can walk, speak, and conduct themselves with confidence and integrity.</p>
              <p className='text-center text-lg-start'>Life brings pressure and challenges, but true success belongs to those who rise above them with strong willpower and self-belief. As the wisdom of the Upanishads reminds us, a person succeeds when they truly believe they can.</p>
              <p className='text-center text-lg-start'>We strive to provide maximum opportunities through quality classroom teaching, co-curricular activities, sports, excursions, and personal care—within a disciplined and supportive environment. Our aim is to help every child grow: enabling an average student to achieve higher standards and an excellent student to excel further.</p>
              <div className='highlightedText'><p className='mb-0 text-center text-lg-start'>We wish all our students success and a bright future ahead.</p></div>
            </div>
            <div className="col-lg-6">
              <div className='w-100 h-100'>
                <img className='w-100 h-100 object-fit-cover' src="img/slides/director.png" alt="Director's Message" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='salientFeature'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Header Section */}
              <div className="salient-feature-header text-center mb-5">
              <div className='mb-3 fw-bold topTitle d-flex align-items-center justify-content-center'><span className='bg-white py-1 px-3 rounded-pill me-2'><i className="icon-star"></i> Salient features</span></div>
                <h2 className="salient-feature-heading mb-3">Designed to help every student thrive.</h2>
                <p className="salient-feature-subheading">A premium learning experience built on consistency, care, and measurable progress.</p>
              </div>

              {/* Feature Cards Grid */}
              <div className="row g-4">
                {salientFeatures.map((feature, index) => (
                  <div key={index} className="col-md-4">
                    <div className="salient-feature-card">
                      <div className="salient-feature-icon">
                        <Check className='text-light' />
                      </div>
                      <h3 className="salient-feature-card-title">{feature.title}</h3>
                      <p className="salient-feature-card-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs


