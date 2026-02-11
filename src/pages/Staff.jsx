import React from 'react'

const Staff = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Staff</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Staff</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <p className="lead">Our dedicated teaching and administrative staff.</p>
            {/* Add staff content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff
