import React from 'react'
import SidebarNavigation from '../components/SidebarNavigation'
import LabeledCard from '../components/LabeledCard';

const SchoolFees = () => {
  const feeRows = [
    { sn: 1, className: 'Nursery', oldAnnual: '₹3000 (2800+200)', newAnnual: '..................', monthly: '₹900' },
    { sn: 2, className: 'L.K.G.', oldAnnual: '₹3300', newAnnual: '₹3500 (3300+200)', monthly: '₹1000' },
    { sn: 3, className: 'U.K.G.', oldAnnual: '₹3300', newAnnual: '₹3500 (3300+200)', monthly: '₹1030' },
    { sn: 4, className: '1st', oldAnnual: '₹3500', newAnnual: '₹3700 (3500+200)', monthly: '₹1080' },
    { sn: 5, className: '2nd', oldAnnual: '₹4000', newAnnual: '₹4200 (4000+200)', monthly: '₹1150' },
    { sn: 6, className: '3rd', oldAnnual: '₹4000', newAnnual: '₹4200 (4000+200)', monthly: '₹1200' },
    { sn: 7, className: '4th', oldAnnual: '₹4000', newAnnual: '₹4200 (4000+200)', monthly: '₹1200' },
    { sn: 8, className: '5th', oldAnnual: '₹4100', newAnnual: '₹4300 (4100+200)', monthly: '₹1250' },
    { sn: 9, className: '6th', oldAnnual: '₹4200', newAnnual: '₹4400 (4200+200)', monthly: '₹1290' },
    { sn: 10, className: '7th', oldAnnual: '₹4400', newAnnual: '₹4600 (4400+200)', monthly: '₹1390' },
    { sn: 11, className: '8th', oldAnnual: '₹4500', newAnnual: '₹4700 (4500+200)', monthly: '₹1410' },
    { sn: 12, className: '9th', oldAnnual: '₹4500', newAnnual: '₹4700 (4500+200)', monthly: '₹1450' },
    { sn: 13, className: '10th', oldAnnual: '₹4500', newAnnual: '₹4700 (4500+200)', monthly: '₹1490' },
    { sn: 14, className: '+1 Sc.(Non- Med/Med.)', oldAnnual: '₹4900', newAnnual: '₹5150 (4900+250)', monthly: '₹2300/2350' },
    { sn: 15, className: '+2 Sc.(Non-Med/Med.)', oldAnnual: '₹5100', newAnnual: '₹5350 (5100+250)', monthly: '₹2400/2450' }
  ];

  const keyPointsArr = [
    {
      title: 'NOTES',
      description: <ul>
        <li>50% concession for differently-abled students.</li>
        <li>10% concession for two siblings; 15% for three siblings (same family).</li>
        <li>20% concession for IRDP category students.</li>
        <li>Scholarships may be awarded to meritorious students.</li>
      </ul>
    },
    {
      title: 'WITHDRAWALS',
      description: 
      <>
        <p>The school may require withdrawal in cases of:</p>
        <ul>
          <li>Irregular attendance or unpaid dues</li>
          <li>Unsatisfactory academic performance</li>
          <li>Misconduct</li>
        </ul>
        <p>Transfer Certificate (TC) will be issued only after full clearance of dues. ₹75 will be charged for issuing the certificate.</p>
      </>
    },
    {
      title: 'FEES REGULATION',
      description: <ul>
        <li>Fee payable before the 12th of every month.</li>
        <li>₹10 per day late fine after the due date.</li>
        <li>Fees once paid are non-refundable and non-adjustable.</li>
        <li>Students with pending dues will not be allowed to appear in examinations.</li>
        <li>Provisional admission fees (Classes IX, XI & XII) are non-refundable if the student fails in the previous class.</li>
        <li>One-third of the admission fee is payable in case of re-admission.</li>
      </ul>
    }
  ]


  return (
    <main className='feesPage'>
      <section className='director-hero'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
            <h1 className='heroMainTitle fw-bold mx-lg-5'>Rules, Regulations & <span>Fee Details </span></h1>
            <p className='director-subtitle mx-auto'>Everything you need to know about annual charges, monthly fees, discounts, and school policies — presented with clarity and simplicity.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mainInnerContent'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className='focus-card mb-5 position-relative shadowDiv'>
                <h3 className="focus-card-title commonLabel">Fee Structure</h3>
                <h4 className="focus-card-heading">2024–2025</h4>
                <div className="fees-table-wrapper mt-5">
                  <table className="table fees-table">
                    <thead>
                      <tr>
                        <th>S.N.</th>
                        <th>Class</th>
                        <th>Annual (Old)</th>
                        <th>Annual (New)</th>
                        <th>Monthly</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeRows.map(data => (
                        <tr key={data.sn}>
                          <td>{data.sn}</td>
                          <td className="fees-class-name">{data.className}</td>
                          <td>{data.oldAnnual}</td>
                          <td>
                            {data.newAnnual}
                          </td>
                          <td>{data.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="important-points-wrapper director-manifesto shadowDiv position-relative">
                <h3 className="quick-highlights-title mb-3">Important Points</h3>
                <div className="row rules-points-wrapper">
                  {keyPointsArr.map((keyCard, index)=>(
                    <div className="col-lg-4 mb-5 mb-lg-4" key={`${keyCard.title}-${index}`}>
                      <LabeledCard
                        className="promise-card-modern h-100"
                        withShadow
                        label={keyCard.title}
                        labelClassName="promise-card-label commonLabel"
                        description={keyCard.description}
                        descriptionClassName="promise-card-description-modern"
                      />
                  </div>
                  ))} 
                </div>
              </div>
            </div>
            <div className="col-lg-3 rightSidebar">
              <SidebarNavigation />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SchoolFees
