import React from 'react'

const Footer = () => {
  // Data arrays for optimization
  const importantLinks = [
    {
      href: 'https://www.hpbose.org/',
      title: 'HPBOSE',
      text: 'HP Board of School Education'
    },
    {
      href: 'https://himachal.nic.in/en-IN/',
      title: 'Himachal Pradesh Government',
      text: 'Himachal Pradesh Government'
    },
    {
      href: 'https://education.hp.gov.in/',
      title: 'Department of Higher Education, Himachal Pradesh',
      text: 'Deptt. Of Higher Education'
    },
    {
      href: 'https://himachal.nic.in/index.php?dpt_id=16&lang=1',
      title: 'Department of Elementary Education, Himachal Pradesh',
      text: 'Deptt. Of Elementary Education'
    },
    {
      href: 'http://hpmandi.nic.in/',
      title: 'Mandi District Government Website',
      text: 'Official Web Site Of MANDI District'
    }
  ]

  const contactInfo = [
    {
      icon: 'icon-map-marker',
      label: 'Address',
      content: 'Unity Public Senior Secondary School, Rewalsar, Distt. Mandi, H.P. - 175023',
      href: 'https://maps.app.goo.gl/kue87ZHetr2qTwhw7'
    },
    {
      icon: 'icon-phone',
      label: 'Phone',
      content: '01905-240264',
      href: 'tel:01905-240264'
    },
    {
      icon: 'icon-print',
      label: 'Mobile',
      content: '94180-79501',
      href: 'tel:94180-79501'
    },
    {
      icon: 'icon-envelope',
      label: 'Email',
      content: 'upsssrewalsar@gmail.com',
      href: 'mailto:upsssrewalsar@gmail.com'
    }
  ]

  return (
    <footer className="bg-dark text-light mt-0 position-relative">
      <div className="container pb-md-5">
        <div className="footer-ribon">
          <span>Truth alone Triumphs !</span>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-4 footerHeading text-light">Location</h5>
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

          <div className="col-md-4 ps-md-5 my-0">
            <h5 className="mb-4 footerHeading text-light">Important Links</h5>
            <ul className="list-unstyled">
              {importantLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    className="text-decoration-none footerLink"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 mb-0">
            <h5 className="mb-4 footerHeading text-light">Contact Us</h5>
            <ul className="list-unstyled">
              {contactInfo.map((contact, index) => (
                <li key={index} className="mb-3">
                  <p className='text-decoration-none contactLink'>
                    <span className='text-light'>
                    <i className={`${contact.icon} me-2`}></i>
                    <strong>{contact.label}: </strong>
                    </span>
                    <a href={contact.href} className="text-decoration-none">
                        {contact.content}
                      </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p className="mb-0 text-light">
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
