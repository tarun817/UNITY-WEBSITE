import React from 'react'

const HouseSystem = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">House System</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>House System</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <p className="lead">Our house system for student organization and competition.</p>
            {/* Add house system content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseSystem
