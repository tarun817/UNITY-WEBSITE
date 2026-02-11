import React from 'react'

const Admission = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Admission</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Admission</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <p className="lead">Admission information for Unity Public Senior Secondary School.</p>
            {/* Add admission content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admission
