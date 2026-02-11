import React from 'react'

const Director = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Director</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Director</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <p className="lead">Director's message and information.</p>
            {/* Add director content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Director
