import React from 'react'

const Facilities = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Facilities</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Facilities</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <p className="lead">Modern facilities and infrastructure at our school.</p>
            {/* Add facilities content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities
