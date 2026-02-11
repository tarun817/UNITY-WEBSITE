import React from 'react'

const ContactUs = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <div className="contact-details">
              <h4>Contact Information</h4>
              <ul className="contact">
                <li>
                  <p>
                    <i className="icon-map-marker"></i> <strong>Address:</strong> Unity Public Senior Secondary School, Rewalsar, Distt. Mandi, H.P. - 175023
                  </p>
                </li>
                <li>
                  <p>
                    <i className="icon-phone"></i> <strong>Phone:</strong> 01905-240264
                  </p>
                </li>
                <li>
                  <p>
                    <i className="icon-print"></i> <strong>Mobile:</strong> 94180-79501
                  </p>
                </li>
                <li>
                  <p>
                    <i className="icon-envelope"></i> <strong>Email:</strong>{' '}
                    <a href="mailto:upsssrewalsar@gmail.com">upsssrewalsar@gmail.com</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
