import { ArrowRight, MapPin, Phone, Smartphone, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { first_name, last_name, email, subject, message } = formData
    
    // Build mailto link
    const params = []
    params.push(`subject=${encodeURIComponent(subject || 'Website Enquiry')}`)
    
    let body = ''
    const fullName = [first_name, last_name].filter(Boolean).join(' ')
    if (fullName) {
      body += `Name: ${fullName}\n`
    }
    if (email) {
      body += `Email: ${email}\n`
    }
    if (message) {
      body += `\nMessage:\n${message}`
    }
    
    if (body) {
      params.push(`body=${encodeURIComponent(body)}`)
    }
    
    const mailtoLink = `mailto:upsssrewalsar@gmail.com?${params.join('&')}`
    window.location.href = mailtoLink
  }

  const scrollToContactForm = () => {
    const formElement = document.getElementById('contactForm')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const quickLinks = [
    { text: 'Email', href: 'mailto:upsssrewalsar@gmail.com' },
    { text: 'Call', href: 'tel:01905-240264' },
    { text: 'Message form', isScroll: true }
  ]

  const whatToInclude = [
    'Your name + best callback time',
    'The reason you\'re reaching out',
    'Any helpful context (class, admission, etc.)'
  ]

  const contactCards = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Unity Public Senior Secondary School, Rewalsar, District Mandi Himachal Pradesh 175023',
      linkText: 'Get directions',
      href: 'https://maps.app.goo.gl/kue87ZHetr2qTwhw7',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '01905-240264',
      linkText: 'Call now',
      href: 'tel:01905-240264'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      content: '+91 94180 79501',
      linkText: 'Call now',
      href: 'https://wa.me/919418079501',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'upsssrewalsar@gmail.com',
      linkText: 'Send email',
      href: 'mailto:upsssrewalsar@gmail.com'
    }
  ]

  const formFields = [
    {
      id: 'fname',
      name: 'first_name',
      label: 'First name',
      placeholder: 'Your first name',
      type: 'text',
      required: true,
      colClass: 'col-lg-6'
    },
    {
      id: 'lname',
      name: 'last_name',
      label: 'Last name',
      placeholder: 'Your last name',
      type: 'text',
      required: true,
      colClass: 'col-lg-6'
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'you@example.com',
      type: 'email',
      required: false,
      optional: true,
      colClass: 'col-lg-6'
    },
    {
      id: 'subject',
      name: 'subject',
      label: 'Subject',
      placeholder: 'Admissions / Transfer',
      type: 'text',
      required: false,
      optional: true,
      colClass: 'col-lg-6'
    },
    {
      id: 'message',
      name: 'message',
      label: 'Message',
      placeholder: 'Write your message...',
      type: 'textarea',
      required: true,
      rows: 6,
      colClass: 'col-12'
    }
  ]

  return (
    <main className='contactPage'>
      <section className='director-hero'>
        <div className="container">
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-6">
              <h1 className='heroMainTitle fw-bold'>Contact us. <span>We’ll route you</span> to the right person.</h1>
              <p className='director-subtitle'>Fast answers, clear directions, and a message form that actually gets delivered (via your email client for now).</p>
              <div className="director-cta-buttons">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    const formElement = document.getElementById('contactForm')
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                >
                  Send a message <span><ArrowRight /></span>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="quick-links-card position-relative ms-auto">
                <h3 className="quick-links-title">Quick links</h3>

                <div className="quick-links-list">
                  {quickLinks.map((link, index) => (
                    link.isScroll ? (
                      <button
                        key={index}
                        type="button"
                        onClick={scrollToContactForm}
                        className="quick-link-row"
                      >
                        <span>{link.text}</span>
                        <ArrowRight size={18} />
                      </button>
                    ) : (
                      <a key={index} href={link.href} className="quick-link-row">
                        <span>{link.text}</span>
                        <ArrowRight size={18} />
                      </a>
                    )
                  ))}
                </div>
                <hr className="quick-links-divider" />
                <div className="quick-links-meta">
                  <h4 className="quick-links-meta-title">What to include</h4>
                  <ul className="quick-links-meta-list">
                    {whatToInclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mainInnerContent'>
        <div className="container">
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-6">
              <h2 className='focus-card-heading fw-bold mb-0'>Find us on the map</h2>
              <p>Tap for directions, zoom, or street view.</p>
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
            <div className="col-lg-6">
              <h2 className='focus-card-heading fw-bold mb-0'>Contact details</h2>
              <p>Use whichever channel is easiest.</p>
              <div className='row g-3'>
                {contactCards.map((card, index) => {
                  const IconComponent = card.icon
                  return (
                    <div key={index} className="col-lg-6">
                      <div className="contact-info-card">
                        <div className="contact-card-icon">
                          <IconComponent size={24} color="#1a5395" />
                        </div>
                        <h4 className="contact-card-title">{card.title}</h4>
                        <p className="contact-card-content">{card.content}</p>
                        <a 
                          href={card.href} 
                          className="contact-card-link"
                          {...(card.target && { target: card.target })}
                          {...(card.rel && { rel: card.rel })}
                        >
                          {card.linkText}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mainInnerContent position-relative overflow-hidden contactDetails' id='contactForm'>
        <div className="container">
          <div className="row ">
            <div className="col-lg-9 mx-auto director-manifesto position-relative gap-4 gap-lg-0">
              <h2 className='contact-form-heading fw-bold mb-4'>Send a message</h2>
              <p className='contact-form-description mb-4'>
                This opens your email client with the message filled in. If you want true submissions + inbox storage, we can power it with Lovable Cloud.
              </p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  {formFields.map((field) => (
                    <div key={field.id} className={field.colClass}>
                      <div className="contact-form-group">
                        <label htmlFor={field.id} className="contact-form-label">
                          {field.label}
                          {field.optional && <span className="contact-form-optional"> (optional)</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.id}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className="contact-form-textarea"
                            placeholder={field.placeholder}
                            rows={field.rows}
                            required={field.required}
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className="contact-form-input"
                            placeholder={field.placeholder}
                            required={field.required}
                          />
                        )}
                      </div>
                      {field.name === 'message' && (
                        <div className="contact-form-actions director-cta-buttons">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Create email
                            <ArrowRight size={18} className="ms-2" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default ContactUs
