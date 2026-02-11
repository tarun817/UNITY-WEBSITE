import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  useEffect(() => {
    // Initialize FlexSlider if needed
    if (window.jQuery) {
      window.jQuery('.flexslider').flexslider({
        controlNav: false,
        animation: "slide",
        slideshow: false,
        maxVisibleItems: 1
      })
    }
  }, [])

  return (
    <div role="main" className="main">
      <section className="bg-light py-4 mb-4">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Overview</li>
            </ol>
          </nav>
          <h2 className="mb-0">Overview</h2>
        </div>
      </section>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="flexslider flexslider-center-mobile flexslider-simple mb-4">
              <ul className="slides">
                <li>
                  <img className="img-fluid rounded" src="/img/aboutus1.jpg" alt="About Us" />
                </li>
              </ul>
            </div>

            <p className="lead">
              UNITY PUBLIC SENIOR SECONDERY SCHOOL WAS ESTABLISHED in the year 2002 as a middle school to provide moral and qualitative education to growing kids around the outskirts of Rewalsar.
            </p>

            <p>
              It is a school with a difference and a place of <em>Learner Paradise</em>, has been found by <strong>UNITY EDUCATION SOCIETY</strong> to cater the needs of parents whose utmost concern is to provide quality education to their kid for their all round development in order to meet challenges of the competitive world today.
            </p>

            <p>
              Knowledge is the key to the development of any nation. Knowledge takes us form darkness to light. Unity Public Senior Secondary School is determined to provide that such knowledge to its student who are talking education in this school. It is a co-educational both English and Hindi medium school. It is a affiliated to the H.P Board of School Education, Dharmshala.
            </p>

            <p>
              Our vision is to make this school as "Learner Paradise". Our dedicated teaching staff is giving due attention to over all developments of the children and results are very encouraging.
            </p>

            <p>
              We provide every possible facility like infrastructure, well equipped science labs and computer labs etc. to enable the students to face the emerging challenges of the modern competitive world.
            </p>

            <p>
              Our aim is to nature the students with kindness, honesty, sympathy, courage, determination, confidence, and hard-work. We put stress on the qualitative education.
            </p>

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
    </div>
  )
}

export default AboutUs
