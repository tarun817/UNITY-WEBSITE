import React, { useEffect } from 'react'

const Gallery = () => {
  useEffect(() => {
    // Initialize nanoGallery if available
    if (window.jQuery) {
      window.jQuery(document).ready(function() {
        if (window.jQuery("#nanoGallery").length) {
          window.jQuery("#nanoGallery").nanoGallery({
            thumbnailWidth: 320,
            thumbnailHeight: 320,
            itemsBaseURL: 'mygallery',
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
  }, [])

  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Gallery</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Gallery</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <div id="nanoGallery">
              {/* Gallery items will be loaded dynamically */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
