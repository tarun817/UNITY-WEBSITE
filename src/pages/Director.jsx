import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import LabeledCard from '../components/LabeledCard'
import SidebarNavigation from '../components/SidebarNavigation'

const Director = () => {
  const thisYearFocus = [
    "90 minutes of deep practice, daily",
    "Weekly reflection + course correction",
    "Visible standards: attendance, respect, effort"
  ]
  const innercard = [
    { title: "CLARITY", description: "We name the standard, then practice it." },
    { title: "Craft", description: "Small skills, repeated, become strength." },
    { title: "Character", description: "Respect is not optional. Effort is our culture." }
  ]

  const quickHighlights = [
    { title: "STANDARD", description: "Make the work visible" },
    { title: "FOCUS", description: "Protect deep practice" },
    { title: "MOMENTUM", description: "Review weekly, improve daily" }
  ]

  return (
    <main className="director-page">
      {/* Top Header Section */}
      <section className="director-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h1 className="heroMainTitle fw-bold">Learn like builders - <span>think like leaders.</span></h1>
              <p className="director-subtitle mx-auto">
                We are shaping students for a future that will not slow down: clear thinking, disciplined work, and the courage to improve in public.
              </p>
              <div className="director-cta-buttons d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/admission" className="btn btn-primary btn-lg">Explore admissions</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mainInnerContent">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-9">
              {/* This Year's Focus Card */}
              <div className="focus-card mb-5 position-relative shadowDiv">
                <h3 className="focus-card-title commonLabel">THIS YEAR'S FOCUS</h3>
                <h4 className="focus-card-heading">Mastery over noise.</h4>
                <p className="focus-card-description">
                  We teach students to choose what matters, practice it daily, and become unshakeable.
                </p>
                <ul className="focus-card-list">
                  {thisYearFocus.map((item, index) => (
                    <li key={index} className="d-flex align-items-center gap-2">
                      <span className="focus-bullet">
                        <Check size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Director's Manifesto Section */}
              <div className="director-manifesto mb-5 d-grid position-relative shadowDiv">
                <div className="leftCol text-center">
                  <div className="director-image-wrapper">
                    <img
                      src="/img/directorImg.png"
                      alt="Director"
                      className="director-image"
                    />
                  </div>
                  <p className="director-quote mt-3">"Vision is a direction. Discipline is the engine."</p>
                </div>
                <div className="rightCol">
                  <div className="manifesto-label commonLabel">DIRECTOR'S MANIFESTO</div>
                  <h2 className="manifesto-title">A school is a promise we keep every day.</h2>
                  <div className="row bottomLine">
                    <div className="col-lg-6">
                      <div className="manifesto-content">
                        <p>
                          Our goal is not only examination success—it is the ability to think clearly, communicate with courage, and build a life of steady progress.
                        </p>
                        <p>
                          We will raise the standard with kindness and keep it with consistency. Students will be guided, challenged, and celebrated—never carried.
                        </p>
                        <p>
                          Parents, your partnership matters: routines at home, calm accountability, and a shared belief that effort is a form of respect.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* The Promise Card */}
                      <LabeledCard
                        className="promise-card-modern mb-4"
                        withShadow
                        label="THE PROMISE"
                        labelClassName="promise-card-label commonLabel mb-2"
                        title="Every student deserves a system that works."
                        titleClassName="promise-card-title-modern"
                        description="Clear routines, strong teaching, and regular feedback—so progress is visible and confidence grows."
                        descriptionClassName="promise-card-description-modern"
                      />

                      {/* Weekly Ritual Card */}
                      <LabeledCard
                        className="promise-card-modern"
                        withShadow
                        label="WEEKLY RITUAL"
                        labelClassName="promise-card-label commonLabel"
                        description="Choose one skill. Practice it daily. Review on Sunday. Repeat until it becomes effortless."
                        descriptionClassName="promise-card-description-modern"
                      />
                    </div>
                  </div>
                  <div className="row">
                    {innercard.map((card, index) => (
                      <div className="col-lg-4" key={`${card.title}-${index}`}>
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
                    <div className="col-12">
                      <div className="director-signature">
                        <p className="mb-0"><strong>Mr. D. D. Sharma</strong></p>
                        <p className="mb-0">Director, Unity Public Senior Secondary School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Highlights Section */}
              <div className="quick-highlights focus-card position-relative shadowDiv">
                <h3 className="quick-highlights-title mb-3">Quick highlights</h3>
                <div className="row g-3">
                  {quickHighlights.map((highlight, index) => (
                    <div className="col-lg-4" key={index}>
                    <LabeledCard
                      className="promise-card-modern"
                      withShadow
                      label={highlight.title}
                      labelClassName="promise-card-label commonLabel"
                      description={highlight.description}
                      descriptionClassName="promise-card-description-modern"
                    />
                  </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-3 rightSidebar">
              <SidebarNavigation />
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Director
