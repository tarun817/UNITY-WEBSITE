import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Admission from './pages/Admission'
import Director from './pages/Director'
import Staff from './pages/Staff'
import SchoolFees from './pages/SchoolFees'
import ContactUs from './pages/ContactUs'
import Curriculum from './pages/Curriculum'
import Streams from './pages/Streams'
import Facilities from './pages/Facilities'
import HouseSystem from './pages/HouseSystem'
import CoCurricularActivities from './pages/CoCurricularActivities'
import PaceSettingActivities from './pages/PaceSettingActivities'
import Results from './pages/Results'
import Gallery from './pages/Gallery'

function App() {
  useEffect(() => {
    // Load jQuery and other vendor scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`)
        if (existingScript) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    // Load jQuery and other vendor scripts sequentially
    const loadScriptsSequentially = async () => {
      if (window.jQuery) {
        // jQuery already loaded, just load other scripts
        await loadOtherScripts()
        return
      }

      try {
        // Load jQuery first
        await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js')
        
        // Wait for jQuery to be fully available
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Load other scripts sequentially
        await loadOtherScripts()
      } catch (err) {
        console.warn('Failed to load jQuery:', err)
      }
    }

    const loadOtherScripts = async () => {
      // Core dependencies (load in order)
      const coreScripts = [
        '/vendor/jquery.easing.js',
        '/vendor/jquery.cookie.js',
        '/vendor/bootstrap.js',
        '/vendor/selectnav.js',
        '/vendor/jquery.validate.js' // Must load before theme.js
      ]

      // Load core scripts sequentially
      for (const src of coreScripts) {
        try {
          await loadScript(src)
        } catch (err) {
          console.warn(`Failed to load ${src}:`, err)
        }
      }

      // Load plugins.js before theme.js (theme.js depends on plugins.js)
      try {
        await loadScript('/js/plugins.js')
      } catch (err) {
        console.warn('Failed to load plugins.js:', err)
      }

      // Load flexslider before theme.js (theme.js uses flexslider)
      try {
        await loadScript('/vendor/flexslider/jquery.flexslider.js')
      } catch (err) {
        console.warn('Failed to load flexslider:', err)
      }

      // Load Twitter script before theme.js (theme.js uses getTwitters)
      // Note: This script tries to load an external resource (twitterlib.js) from remy.github.com
      // which no longer exists. The network error is harmless - Twitter feed will be disabled
      // but the rest of the site will work normally.
      try {
        await loadScript('/vendor/twitterjs/twitter.js')
      } catch (err) {
        // Script loading failed, but that's okay - Twitter feed will be disabled
        console.log('Twitter feed will be disabled (external resource unavailable)')
      }

      // Load fancybox before theme.js (theme.js uses fancybox)
      try {
        await loadScript('/vendor/fancybox/jquery.fancybox.js')
      } catch (err) {
        console.warn('Failed to load fancybox:', err)
      }

      // Load theme.js after plugins.js, validate.js, flexslider, Twitter, and fancybox
      try {
        await loadScript('/js/theme.js')
        
        // Disable sticky menu logic - we want fixed header instead
        if (window.jQuery && window.Core) {
          // Override the stickyMenu function to do nothing
          window.Core.stickyMenu = function() {
            // Disabled - header is now fixed position
            return false
          }
          
          // Remove any existing sticky-menu-active class
          window.jQuery('body').removeClass('sticky-menu-active')
          
          // Remove scroll event listener for sticky menu
          window.jQuery(window).off('scroll', window.Core.checkStickyMenu)
        }
      } catch (err) {
        console.warn('Failed to load theme.js:', err)
      }

      // Load other scripts (can be parallel)
      const otherScripts = [
        '/js/custom.js',
        '/myflexslider/js/jquery.flexslider.js',
        '/mygallery/jquery.nanogallery.js',
        '/mygallery/jquery.nanogallerydemo.js'
      ]

      // Load remaining scripts in parallel
      await Promise.allSettled(
        otherScripts.map(src => 
          loadScript(src).catch(err => console.warn(`Failed to load ${src}:`, err))
        )
      )
    }

    loadScriptsSequentially()
  }, [])

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/director" element={<Director />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/schoolfees" element={<SchoolFees />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/housesystem" element={<HouseSystem />} />
          <Route path="/cocurricularactivities" element={<CoCurricularActivities />} />
          <Route path="/pacesettingactivities" element={<PaceSettingActivities />} />
          <Route path="/results" element={<Results />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
