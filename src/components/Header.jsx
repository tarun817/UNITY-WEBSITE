import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)

  const isActive = (path) => {
    return location.pathname === path
  }

  const isActiveDropdown = (paths) => {
    return paths.some(path => location.pathname.startsWith(path))
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark-mode')
  }

  const toggleMobileDropdown = (key) => {
    setOpenMobileDropdown(prev => prev === key ? null : key)
  }

  // Close all desktop dropdowns - call on link click and route change
  const closeAllDesktopDropdowns = () => {
    document.querySelectorAll('.nav-dropdown .dropdown-menu').forEach(menu => {
      menu.classList.remove('show')
    })
    document.querySelectorAll('.nav-dropdown .dropdown-toggle').forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false')
    })
    document.querySelectorAll('.dropend .dropdown-menu').forEach(menu => {
      menu.classList.remove('show')
    })
    document.querySelectorAll('.dropend .dropdown-toggle').forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false')
    })
  }

  // Close mobile dropdown when route changes
  useEffect(() => {
    setOpenMobileDropdown(null)
  }, [location.pathname])

  // Close all desktop dropdowns when route changes
  useEffect(() => {
    closeAllDesktopDropdowns()
  }, [location.pathname])

  useEffect(() => {
    // Remove sticky-menu-active class if it gets added by theme.js
    const removeStickyClass = () => {
      if (document.body.classList.contains('sticky-menu-active')) {
        document.body.classList.remove('sticky-menu-active')
      }
    }

    // Check immediately and on scroll
    removeStickyClass()
    window.addEventListener('scroll', removeStickyClass)
    
    // Also use MutationObserver to watch for class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          removeStickyClass()
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Setup hover dropdowns for desktop
    const setupHoverDropdowns = () => {
      const dropdownItems = document.querySelectorAll('.nav-dropdown')
      
      dropdownItems.forEach((dropdownItem) => {
        const dropdownToggle = dropdownItem.querySelector('.dropdown-toggle')
        const dropdownMenu = dropdownItem.querySelector('.dropdown-menu')
        
        if (!dropdownToggle || !dropdownMenu) return

        let hoverTimeout = null

        const showDropdown = () => {
          if (hoverTimeout) {
            clearTimeout(hoverTimeout)
            hoverTimeout = null
          }
          dropdownMenu.classList.add('show')
          dropdownToggle.setAttribute('aria-expanded', 'true')
          
          // Hide all nested dropdowns when parent opens
          const nestedMenus = dropdownMenu.querySelectorAll('.dropend .dropdown-menu')
          nestedMenus.forEach(menu => {
            menu.classList.remove('show')
          })
        }

        const hideDropdown = () => {
          hoverTimeout = setTimeout(() => {
            dropdownMenu.classList.remove('show')
            dropdownToggle.setAttribute('aria-expanded', 'false')
            
            // Also hide all nested dropdowns when parent closes
            const nestedMenus = dropdownMenu.querySelectorAll('.dropend .dropdown-menu')
            nestedMenus.forEach(menu => {
              menu.classList.remove('show')
            })
          }, 150) // Small delay to allow moving to dropdown menu
        }

        // Prevent click behavior on desktop
        dropdownToggle.addEventListener('click', (e) => {
          if (window.innerWidth > 991) {
            e.preventDefault()
          }
        })

        // Hover events
        dropdownItem.addEventListener('mouseenter', showDropdown)
        dropdownItem.addEventListener('mouseleave', hideDropdown)
        
        // Also handle hover on the dropdown menu itself
        dropdownMenu.addEventListener('mouseenter', () => {
          if (hoverTimeout) {
            clearTimeout(hoverTimeout)
            hoverTimeout = null
          }
        })
        dropdownMenu.addEventListener('mouseleave', hideDropdown)

        // Handle nested dropdowns (like Academics)
        // Only show when hovering directly over the nested item, not when parent opens
        const nestedDropdowns = dropdownMenu.querySelectorAll('.dropend')
        nestedDropdowns.forEach((nestedDropdown) => {
          const nestedToggle = nestedDropdown.querySelector('.dropdown-toggle')
          const nestedMenu = nestedDropdown.querySelector('.dropdown-menu')
          
          if (!nestedToggle || !nestedMenu) return

          // Ensure nested menu is hidden initially
          nestedMenu.classList.remove('show')

          let nestedHoverTimeout = null

          const showNestedDropdown = () => {
            if (nestedHoverTimeout) {
              clearTimeout(nestedHoverTimeout)
              nestedHoverTimeout = null
            }
            nestedMenu.classList.add('show')
            nestedToggle.setAttribute('aria-expanded', 'true')
          }

          const hideNestedDropdown = () => {
            nestedHoverTimeout = setTimeout(() => {
              nestedMenu.classList.remove('show')
              nestedToggle.setAttribute('aria-expanded', 'false')
            }, 150)
          }

          // Only show nested dropdown when hovering directly over the nested item
          nestedDropdown.addEventListener('mouseenter', showNestedDropdown)
          nestedDropdown.addEventListener('mouseleave', hideNestedDropdown)

          // Keep nested menu open when hovering over it
          nestedMenu.addEventListener('mouseenter', () => {
            if (nestedHoverTimeout) {
              clearTimeout(nestedHoverTimeout)
              nestedHoverTimeout = null
            }
          })

          nestedMenu.addEventListener('mouseleave', hideNestedDropdown)
        })
      })
    }

    // Setup hover dropdowns after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      setupHoverDropdowns()
    }, 100)

    return () => {
      window.removeEventListener('scroll', removeStickyClass)
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <header className="fixed-header bg-linear px-0">
      <div className="container">
        <div className="headerContent bg-white d-flex justify-content-between align-items-center position-relative" >
          {/* Logo */}
          <Link className="header-logo" to="/">
            <img src="/img/websiteLogo.png" alt="Unity Public School Logo" />
          </Link>

          {/* Navigation Links - Centered */}
          <nav className="header-nav">
            <ul className="nav-links">
              <li>
                <Link
                  className={`nav-link-item ${isActive('/') ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-dropdown">
                <a
                  className={`nav-link-item dropdown-toggle ${isActiveDropdown(['/about', '/director', '/admission', '/staff', '/schoolfees', '/contact-us']) ? 'active' : ''}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu shadow-sm border-0">
                  <li><Link className={`dropdown-item ${isActive('/about-us') ? 'active' : ''}`} to="/about-us" onClick={closeAllDesktopDropdowns}>Overview</Link></li>
                  <li><Link className={`dropdown-item ${isActive('/director') ? 'active' : ''}`} to="/director" onClick={closeAllDesktopDropdowns}>Director</Link></li>
                  <li><Link className={`dropdown-item ${isActive('/admission') ? 'active' : ''}`} to="/admission" onClick={closeAllDesktopDropdowns}>Admission</Link></li>
                  <li><Link className={`dropdown-item ${isActive('/staff') ? 'active' : ''}`} to="/staff" onClick={closeAllDesktopDropdowns}>Staff</Link></li>
                  <li><Link className={`dropdown-item ${isActive('/schoolfees') ? 'active' : ''}`} to="/schoolfees" onClick={closeAllDesktopDropdowns}>School Fees</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className={`dropdown-item ${isActive('/contact-us') ? 'active' : ''}`} to="/contact-us" onClick={closeAllDesktopDropdowns}>Contact Us</Link></li>
                </ul>
              </li>

              <li className="nav-dropdown">
                <a
                  className={`nav-link-item dropdown-toggle ${isActiveDropdown(['/curriculum', '/streams', '/facilities', '/housesystem']) ? 'active' : ''}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Inside School
                </a>
                <ul className="dropdown-menu shadow-sm border-0">
                  <li className="dropend">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">
                      Academics
                    </a>
                    <ul className="dropdown-menu shadow-sm border-0">
                      <li><Link className={`dropdown-item ${isActive('/curriculum') ? 'active' : ''}`} to="/curriculum" onClick={closeAllDesktopDropdowns}>Curriculum</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/streams') ? 'active' : ''}`} to="/streams" onClick={closeAllDesktopDropdowns}>Streams Offered</Link></li>
                    </ul>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className={`dropdown-item ${isActive('/facilities') ? 'active' : ''}`} to="/facilities" onClick={closeAllDesktopDropdowns}>Facilities</Link></li>
                  <li><Link className={`dropdown-item ${isActive('/housesystem') ? 'active' : ''}`} to="/housesystem" onClick={closeAllDesktopDropdowns}>House System</Link></li>
                </ul>
              </li>

              <li className="nav-dropdown">
                <a
                  className={`nav-link-item dropdown-toggle ${isActiveDropdown(['/cocurricularactivities', '/pacesettingactivities']) ? 'active' : ''}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Activities
                </a>
                <ul className="dropdown-menu shadow-sm border-0">
                  <li><Link className={`dropdown-item ${isActive('/cocurricularactivities') ? 'active' : ''}`} to="/cocurricularactivities" onClick={closeAllDesktopDropdowns}>Co-curricular Activities</Link></li>
                  <li><Link className={`dropdown-item ${isActive('/pacesettingactivities') ? 'active' : ''}`} to="/pacesettingactivities" onClick={closeAllDesktopDropdowns}>Pace Setting Activities</Link></li>
                </ul>
              </li>

              <li>
                <Link
                  className={`nav-link-item ${isActive('/results') ? 'active' : ''}`}
                  to="/results"
                >
                  Results
                </Link>
              </li>

              <li>
                <Link
                  className={`nav-link-item ${isActive('/gallery') ? 'active' : ''}`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="collapse mobile-nav" id="mobileNav">
          <ul className="mobile-nav-links">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>

            {/* About Us - Dropdown */}
            <li className="mobile-dropdown-item">
              <button
                type="button"
                className={`mobile-dropdown-toggle ${isActiveDropdown(['/about', '/director', '/admission', '/staff', '/schoolfees', '/contact-us']) ? 'active' : ''} ${openMobileDropdown === 'about' ? 'open' : ''}`}
                onClick={() => toggleMobileDropdown('about')}
                aria-expanded={openMobileDropdown === 'about'}
              >
                <span>About Us</span>
                <ChevronDown className="mobile-dropdown-arrow" size={18} />
              </button>
              <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'about' ? 'show' : ''}`}>
                <li><Link to="/about-us" className={`mobile-dropdown-link ${isActive('/about-us') ? 'active' : ''}`}>Overview</Link></li>
                <li><Link to="/director" className={`mobile-dropdown-link ${isActive('/director') ? 'active' : ''}`}>Director</Link></li>
                <li><Link to="/admission" className={`mobile-dropdown-link ${isActive('/admission') ? 'active' : ''}`}>Admission</Link></li>
                <li><Link to="/staff" className={`mobile-dropdown-link ${isActive('/staff') ? 'active' : ''}`}>Staff</Link></li>
                <li><Link to="/schoolfees" className={`mobile-dropdown-link ${isActive('/schoolfees') ? 'active' : ''}`}>School Fees</Link></li>
                <li><Link to="/contact-us" className={`mobile-dropdown-link ${isActive('/contact-us') ? 'active' : ''}`}>Contact Us</Link></li>
              </ul>
            </li>

            {/* Inside School - Dropdown */}
            <li className="mobile-dropdown-item">
              <button
                type="button"
                className={`mobile-dropdown-toggle ${isActiveDropdown(['/curriculum', '/streams', '/facilities', '/housesystem']) ? 'active' : ''} ${openMobileDropdown === 'inside' ? 'open' : ''}`}
                onClick={() => toggleMobileDropdown('inside')}
                aria-expanded={openMobileDropdown === 'inside'}
              >
                <span>Inside School</span>
                <ChevronDown className="mobile-dropdown-arrow" size={18} />
              </button>
              <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'inside' ? 'show' : ''}`}>
                <li><Link to="/curriculum" className={`mobile-dropdown-link ${isActive('/curriculum') ? 'active' : ''}`}>Curriculum</Link></li>
                <li><Link to="/streams" className={`mobile-dropdown-link ${isActive('/streams') ? 'active' : ''}`}>Streams Offered</Link></li>
                <li><Link to="/facilities" className={`mobile-dropdown-link ${isActive('/facilities') ? 'active' : ''}`}>Facilities</Link></li>
                <li><Link to="/housesystem" className={`mobile-dropdown-link ${isActive('/housesystem') ? 'active' : ''}`}>House System</Link></li>
              </ul>
            </li>

            {/* Activities - Dropdown */}
            <li className="mobile-dropdown-item">
              <button
                type="button"
                className={`mobile-dropdown-toggle ${isActiveDropdown(['/cocurricularactivities', '/pacesettingactivities']) ? 'active' : ''} ${openMobileDropdown === 'activities' ? 'open' : ''}`}
                onClick={() => toggleMobileDropdown('activities')}
                aria-expanded={openMobileDropdown === 'activities'}
              >
                <span>Activities</span>
                <ChevronDown className="mobile-dropdown-arrow" size={18} />
              </button>
              <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'activities' ? 'show' : ''}`}>
                <li><Link to="/cocurricularactivities" className={`mobile-dropdown-link ${isActive('/cocurricularactivities') ? 'active' : ''}`}>Co-curricular Activities</Link></li>
                <li><Link to="/pacesettingactivities" className={`mobile-dropdown-link ${isActive('/pacesettingactivities') ? 'active' : ''}`}>Pace Setting Activities</Link></li>
              </ul>
            </li>

            <li><Link to="/results" className={isActive('/results') ? 'active' : ''}>Results</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
