import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12">
            <div className="bg-primary text-white text-center py-2 mb-4 rounded">
              <span className="fw-bold">Truth alone Triumphs !</span>
            </div>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-3">Location</h5>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13588.182200041794!2d76.8379054!3d31.6326032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23a55fee90f8552c!2sUNITY+PUBLIC+SENIOR+SECONDARY+SCHOOL!5e0!3m2!1sen!2sin!4v1521867638416"
                style={{ border: 0 }}
                allowFullScreen
                title="School Location"
                className="rounded"
              ></iframe>
            </div>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">Important Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="https://www.hpbose.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="HPBOSE"
                  className="text-light text-decoration-none"
                >
                  HP Board of School Education
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://himachal.nic.in/en-IN/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Himachal Pradesh Government"
                  className="text-light text-decoration-none"
                >
                  Himachal Pradesh Government
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://education.hp.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Department of Higher Education, Himachal Pradesh"
                  className="text-light text-decoration-none"
                >
                  Deptt. Of Higher Education
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://himachal.nic.in/index.php?dpt_id=16&lang=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Department of Elementary Education, Himachal Pradesh"
                  className="text-light text-decoration-none"
                >
                  Deptt. Of Elementary Education
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="http://hpmandi.nic.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Mandi District Government Website"
                  className="text-light text-decoration-none"
                >
                  Official Web Site Of MANDI District
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <p className="mb-0">
                  <i className="icon-map-marker me-2"></i>
                  <strong>Address:</strong> Unity Public Senior Secondary School, Rewalsar, Distt. Mandi, H.P. - 175023
                </p>
              </li>
              <li className="mb-3">
                <p className="mb-0">
                  <i className="icon-phone me-2"></i>
                  <strong>Phone:</strong> 01905-240264
                </p>
              </li>
              <li className="mb-3">
                <p className="mb-0">
                  <i className="icon-print me-2"></i>
                  <strong>Mobile:</strong> 94180-79501
                </p>
              </li>
              <li className="mb-3">
                <p className="mb-0">
                  <i className="icon-envelope me-2"></i>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:upsssrewalsar@gmail.com" className="text-light text-decoration-none">
                    upsssrewalsar@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-secondary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="mb-0 text-muted">
                © Copyright 2016-24 Unity Public Senior Secondary School Rewalsar. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
