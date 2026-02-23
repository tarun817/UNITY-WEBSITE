import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import LabeledCard from './LabeledCard'

// Define menu links for different sections
const MENU_LINKS = {
  'about-us': [
    { path: "/about-us", label: "Overview" },
    { path: "/director", label: "Director" },
    { path: "/admission", label: "Admission" },
    { path: "/staff", label: "Staff" },
    { path: "/schoolfees", label: "School Fees" },
    { path: "/contact-us", label: "Contact Us" }
  ],
  'inside-school': [
    { path: "/curriculum", label: "Curriculum" },
    { path: "/streams", label: "Streams Offered" },
    { path: "/facilities", label: "Facilities" },
    { path: "/housesystem", label: "House System" }
  ],
  'activities': [
    { path: "/cocurricularactivities", label: "Co-curricular Activities" },
    { path: "/pacesettingactivities", label: "Pace Setting Activities" }
  ]
}

// Map routes to their section
const getSectionFromPath = (pathname) => {
  if (['/about-us', '/director', '/admission', '/staff', '/schoolfees', '/contact-us'].some(path => pathname.startsWith(path))) {
    return 'about-us'
  }
  if (['/curriculum', '/streams', '/facilities', '/housesystem'].some(path => pathname.startsWith(path))) {
    return 'inside-school'
  }
  if (['/cocurricularactivities', '/pacesettingactivities'].some(path => pathname.startsWith(path))) {
    return 'activities'
  }
  return 'about-us' // default
}

const SidebarNavigation = ({ 
  customLinks = null, // Override with custom links if provided
  showHelpSection = true,
  schoolName = "UNITY PUBLIC SEN. SEC. SCHOOL"
}) => {
  const location = useLocation()
  
  // Use custom links if provided, otherwise determine from current route
  const navigationLinks = customLinks || MENU_LINKS[getSectionFromPath(location.pathname)] || MENU_LINKS['about-us']
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="director-sidebar">
      {/* Navigation */}
      <div className="sidebar-section mb-5">
        <LabeledCard
          className="sidebar-navigation-card"
          withShadow
          label="NAVIGATION"
          labelClassName="sidebar-navigation-label commonLabel"
        >
          <h3 className="sidebar-school-name">{schoolName}</h3>
          <nav className="sidebar-nav">
            <ul className="list-unstyled mb-0">
              {navigationLinks.map((link, index) => (
                <li key={index} className="sidebar-nav-item">
                  <Link 
                    to={link.path} 
                    className={`sidebar-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </LabeledCard>
      </div>

      {/* Need Help Section */}
      {showHelpSection && (
        <LabeledCard className="sidebar-navigation-card" withShadow>
          <h4 className="sidebar-help-title">NEED HELP?</h4>
          <p className="sidebar-help-description">
            Admissions, schedules, documents—send a message and we'll reply with the next step.
          </p>
          <div className="sidebar-help-buttons d-flex flex-column gap-2">
            <button className="btn btn-outline-dark">
              <Phone size={16} className="me-2" />
              Call Office
            </button>
            <button className="btn btn-outline-dark">
              <Mail size={16} className="me-2" />
              Send Email
            </button>
          </div>
        </LabeledCard>
      )}
    </div>
  )
}

export default SidebarNavigation
