import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Home = () => {
  const sliderRef = useRef(null)
  const testimonialSliderRef = useRef(null)
  const arrowRootsRef = useRef({ prev: null, next: null })

  // Data arrays for optimization
  const sliderImages = [
    { src: 'myflexslider/images/slide2024_25.jpg', alt: 'Slide 1' },
    { src: 'myflexslider/images/slide2024_25.jpg', alt: 'Slide 2' },
    { src: 'myflexslider/images/slide2023_24.jpg', alt: 'Slide 3' },
    { src: 'myflexslider/images/slider2.jpg', alt: 'Slide 4' },
    { src: 'myflexslider/images/slider3.jpg', alt: 'Slide 5' },
    { src: 'myflexslider/images/slider1.jpg', alt: 'Slide 6' }
  ]

  const aims = [
    'To provide modern and progressive educational facilities at a reasonable cost to the children.',
    'To nurture the student with rich capability of facing the challenge life efficiently and carve out their future.',
    'To provide all round best education to our students and to achieve the academic excellence along with personality development.',
    'To imbibe a sense of discipline, faith, hard work, leadership and consciousness towards their duties.'
  ]

  const objectives = [
    'To work for the welfare of the students.',
    'To impart quality educationwhich enlightens the progress and prosperity of individual as well as nation.',
    'To inculcate the scense of leadership and management.',
    'To make students avail the opportunities to achieve academic excellence.'
  ]
  const values = [
    'To promote integrity, respect, and responsibility among students.',
    'To encourage creativity, critical thinking, and innovation.',
    'To build confidence and a positive attitude towards lifelong learning.',
    'To foster teamwork, empathy, and social awareness.'
  ]

  const offSchoolSafety = [
    { icon: '/img/cctv-camera.png', alt: 'CCTV Camera', text: 'CCTV coverage in school transport' },
    { icon: '/img/staff.png', alt: 'staff', text: 'Designated staff to accompany children to final bus stop' },
    { icon: '/img/bus-school.png', alt: 'Bus Service', text: 'Back-up vehicles (in case of breakdown)' }
  ]

  const inSchoolSafety = [
    { icon: '/img/cctv-camera.png', alt: 'CCTV Camera', text: 'CCTV coverage' },
    { icon: '/img/girl.png', alt: 'staff', text: 'Controlled visitor access with escorted visits in learning area' },
    { icon: '/img/doctor.png', alt: 'Bus Service', text: 'Trained school resident doctor' }
  ]

  const testimonials = [
    {
      image: 'mygallery/yuva26/101.jpg',
      alt: 'Testimonial',
      content: (
        <p className="text-white mb-3">
          13th Jan 2026 :: Pritam, a class 12th student of Unity Public Senior Secondary School, Rewalsar, won the title of second runner-up in story writing in the State level Yuva Utsav district Bilaspur, organized by the Department of Youth Services and Sports, Himachal Pradesh.
        </p>
      )
    },
    {
      image: '/img/testimonial2.jpg',
      alt: 'Testimonial',
      content: (
        <>
          <h3 className="text-white fw-bold mb-2">Tankeshwar Kumar</h3>
          <p className="text-white mb-3">Prof. Tankeshwar Kumar, Vice Chancellor, Central University of Haryana, Mahendergarh</p>
          <p className="text-white fst-italic">
            "... I congratulate the Director, manav mangal School for bringing such a world class facility in Chandigarh, Mohali & Panchkula. Best wishes & regards."
          </p>
        </>
      )
    }
  ]

  useEffect(() => {
    // Load Slick Slider CSS and JS
    const loadSlickSlider = () => {
      // Check if already loaded
      if (window.jQuery && window.jQuery.fn.slick) {
        initializeSlick()
        return
      }

      // Load Slick CSS
      if (!document.querySelector('link[href*="slick"]')) {
        const slickCSS = document.createElement('link')
        slickCSS.rel = 'stylesheet'
        slickCSS.type = 'text/css'
        slickCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'
        document.head.appendChild(slickCSS)

        const slickThemeCSS = document.createElement('link')
        slickThemeCSS.rel = 'stylesheet'
        slickThemeCSS.type = 'text/css'
        slickThemeCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'
        document.head.appendChild(slickThemeCSS)
      }

      // Load jQuery if not available
      if (!window.jQuery) {
        const jqueryScript = document.createElement('script')
        jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'
        jqueryScript.onload = () => {
          loadSlickJS()
        }
        document.body.appendChild(jqueryScript)
      } else {
        loadSlickJS()
      }
    }

    const loadSlickJS = () => {
      if (window.jQuery && window.jQuery.fn.slick) {
        initializeSlick()
        return
      }

      const slickScript = document.createElement('script')
      slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
      slickScript.onload = () => {
        initializeSlick()
      }
      document.body.appendChild(slickScript)
    }

    const initializeArrows = () => {
      if (!sliderRef.current) return

      const prevArrow = sliderRef.current.querySelector('.slick-prev')
      const nextArrow = sliderRef.current.querySelector('.slick-next')

      // Clean up existing arrow roots if they exist
      if (arrowRootsRef.current.prev) {
        try {
          arrowRootsRef.current.prev.unmount()
        } catch (e) {
          // Ignore unmount errors
        }
        arrowRootsRef.current.prev = null
      }

      if (arrowRootsRef.current.next) {
        try {
          arrowRootsRef.current.next.unmount()
        } catch (e) {
          // Ignore unmount errors
        }
        arrowRootsRef.current.next = null
      }

      // Initialize prev arrow
      if (prevArrow) {
        // Clear any existing content
        prevArrow.innerHTML = ''
        const prevContainer = document.createElement('div')
        prevArrow.appendChild(prevContainer)
        const prevRoot = createRoot(prevContainer)
        prevRoot.render(<ChevronLeft size={24} />)
        arrowRootsRef.current.prev = prevRoot
      }

      // Initialize next arrow
      if (nextArrow) {
        // Clear any existing content
        nextArrow.innerHTML = ''
        const nextContainer = document.createElement('div')
        nextArrow.appendChild(nextContainer)
        const nextRoot = createRoot(nextContainer)
        nextRoot.render(<ChevronRight size={24} />)
        arrowRootsRef.current.next = nextRoot
      }
    }

    const initializeSlick = () => {
      if (window.jQuery && window.jQuery.fn.slick && sliderRef.current) {
        // Check if slick is already initialized
        const isInitialized = window.jQuery(sliderRef.current).hasClass('slick-initialized')

        if (isInitialized) {
          // If already initialized, just update arrows
          initializeArrows()
          return
        }

        // Initialize slick with empty arrow buttons
        window.jQuery(sliderRef.current).slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: false,
          cssEase: 'linear',
          autoplay: false,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
        })

        // Wait a bit for Slick to fully initialize before adding arrows
        setTimeout(() => {
          initializeArrows()
        }, 100)
      }
    }

    // Initialize nanoGallery
    if (window.jQuery) {
      window.jQuery(document).ready(function () {
        if (window.jQuery("#nanoGallery2").length) {
          window.jQuery("#nanoGallery2").nanoGallery({
            thumbnailWidth: 320,
            thumbnailHeight: 320,
            itemsBaseURL: 'mygallery/yuva26',
            thumbnailHoverEffect: [
              { 'name': 'scaleLabelOverImage', 'duration': 300 },
              { 'name': 'borderLighter' }
            ],
            colorScheme: 'clean',
            locationHash: false,
            thumbnailLabel: {
              display: true,
              position: 'overImageOnTop',
              align: 'center'
            },
            viewerDisplayLogo: true
          })
        }
      })
    }

    // Initialize testimonial slider
    const initializeTestimonialSlider = () => {
      if (window.jQuery && window.jQuery.fn.slick && testimonialSliderRef.current) {
        const isInitialized = window.jQuery(testimonialSliderRef.current).hasClass('slick-initialized')
        
        if (isInitialized) {
          return
        }

        window.jQuery(testimonialSliderRef.current).slick({
          dots: false,
          infinite: true,
          speed: 500,
          fade: false,
          cssEase: 'linear',
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        })
      }
    }

    // Load Slick Slider
    loadSlickSlider()

    // Initialize testimonial slider after main slider is loaded
    const initTestimonialTimeout = setTimeout(() => {
      if (window.jQuery && window.jQuery.fn.slick) {
        initializeTestimonialSlider()
      }
    }, 500)

    // Handle window resize to reinitialize arrows
    const handleResize = () => {
      if (window.jQuery && window.jQuery.fn.slick && sliderRef.current) {
        const isInitialized = window.jQuery(sliderRef.current).hasClass('slick-initialized')
        if (isInitialized) {
          // Reinitialize arrows on resize
          setTimeout(() => {
            initializeArrows()
          }, 100)
        }
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      clearTimeout(initTestimonialTimeout)
      window.removeEventListener('resize', handleResize)

      // Clean up arrow roots
      if (arrowRootsRef.current.prev) {
        try {
          arrowRootsRef.current.prev.unmount()
        } catch (e) {
          // Ignore unmount errors
        }
      }
      if (arrowRootsRef.current.next) {
        try {
          arrowRootsRef.current.next.unmount()
        } catch (e) {
          // Ignore unmount errors
        }
      }

      if (window.jQuery && window.jQuery.fn.slick) {
        if (sliderRef.current) {
          window.jQuery(sliderRef.current).slick('unslick')
        }
        if (testimonialSliderRef.current) {
          window.jQuery(testimonialSliderRef.current).slick('unslick')
        }
      }
    }
  }, [])

  return (
    <main id="content" className="content full">
      <section className="heroBanner bg-linear">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-slider" ref={sliderRef}>
                {sliderImages.map((img, index) => (
                  <div key={index}>
                    <img src={img.src} alt={img.alt} className="w-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutWrapper position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mainCard position-relative row align-items-center">
                <div className="col-md-5">
                  <h2 className="text-white fw-bold">A Legacy of Quality Education Since 2002</h2>
                </div>
                <div className="col-md-7">
                  <p className="text-white fw-medium">
                    <span className="fw-bold fst-italic">UNITY PUBLIC SENIOR SECONDERY SCHOOL </span>
                    was established in the year 2002 as a middle school to provide moral and qualitative education to growing kids around the outskirts of Rewalsar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aimsWrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center fw-bold sectionHeading position-relative mb-5">
                <span className="d-inline-block position-relative">What We Stand For</span>
              </h2>
              <div className="row g-4">
                {/* Aims Card */}
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle p-3 me-3">
                          <i className="icon-group fs-4"></i>
                        </div>
                        <h3 className="card-title mb-0">Aims</h3>
                      </div>
                      <ol className="ps-3 mb-0">
                        {aims.map((aim, index) => (
                          <li key={index} className={index < aims.length - 1 ? 'mb-2' : ''}>
                            {aim}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Objectives Card */}
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-success text-white rounded-circle p-3 me-3">
                          <i className="icon-ok fs-4"></i>
                        </div>
                        <h3 className="card-title mb-0">Objectives</h3>
                      </div>
                      <ol className="ps-3 mb-0">
                        {objectives.map((objective, index) => (
                          <li key={index} className={index < objectives.length - 1 ? 'mb-2' : ''}>
                            {objective}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Values Card */}
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-info text-white rounded-circle p-3 me-3">
                          <i className="icon-heart fs-4"></i>
                        </div>
                        <h3 className="card-title mb-0">Values</h3>
                      </div>
                      <ol className="ps-3 mb-0">
                        {values.map((value, index) => (
                          <li key={index} className={index < values.length - 1 ? 'mb-2' : ''}>
                            {value}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="safetyWrapper">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center fw-bold sectionHeading position-relative">
                <span className="d-inline-block position-relative">Student Safety</span>
              </h2>
              <p className="text-center fw-medium">
                Children learn best in a safe environment. That's why a good school must implement well-researched, reliable safety measures—starting with thoughtful design. UNISON's open learning spaces eliminate hidden corners and are supported by strong safety protocols, advanced technologies, and a rigorous staff vetting and verification process to ensure complete security.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold mb-4">Off School Safety</h3>
              <ul className="list-unstyled">
                {offSchoolSafety.map((item, index) => (
                  <li key={index} className="d-flex align-items-center gap-3 mb-3">
                    <span>
                      <img src={item.icon} alt={item.alt} className="d-block" />
                    </span>
                    <p className="mb-0">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 mb-5">
              <div className="imgWrap overflow-hidden">
                <img src="/img/school_bus-image.avif" alt="School Bus" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
            <div className="col-md-6 order-2 order-md-1">
              <div className="imgWrap overflow-hidden">
                <img src="/img/in_school-safety.jpg" alt="In school safety" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <h3 className="fw-bold mb-4">In School Safety</h3>
              <ul className="list-unstyled">
                {inSchoolSafety.map((item, index) => (
                  <li key={index} className="d-flex align-items-center gap-3 mb-3">
                    <span>
                      <img src={item.icon} alt={item.alt} className="d-block" />
                    </span>
                    <p className="mb-0">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container position-relative">
          <h2 className="text-center fw-bold sectionHeading position-relative mb-5">
            <span className="d-inline-block position-relative">Proud Moment</span>
          </h2>
          <div className="testimonial-slider-wrapper" ref={testimonialSliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="row align-items-center g-0">
                  <div className="col-md-5">
                    <div className="testimonial-image">
                      <img src={testimonial.image} alt={testimonial.alt} className="w-100" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="testimonial-content">
                      {testimonial.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
