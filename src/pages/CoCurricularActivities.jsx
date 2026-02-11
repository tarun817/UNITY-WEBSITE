import React from 'react'

const CoCurricularActivities = () => {
  return (
    <div role="main" className="main">
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="span12">
              <ul className="breadcrumb">
                <li><a href="/">Home</a> <span className="divider">/</span></li>
                <li className="active">Co-curricular Activities</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="span12">
              <h2>Co-curricular Activities</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="span12">
            <p className="lead">Various co-curricular activities for holistic development.</p>
            {/* Add activities content here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoCurricularActivities
