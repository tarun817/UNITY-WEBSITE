import React from 'react'

const Streams = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Streams Offered</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Streams Offered</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <p className="lead">Academic streams available at our school.</p>
            {/* Add streams content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Streams
