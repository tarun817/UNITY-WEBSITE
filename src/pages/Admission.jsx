import React from 'react'
import SidebarNavigation from '../components/SidebarNavigation'
import { Check, FileText, GraduationCap, ShieldCheck } from 'lucide-react'
import LabeledCard from '../components/LabeledCard';

const Admission = () => {
  const eligibilityRequirements = [
    "Date of birth proof (local authority certificate) or transfer certificate for migrating students.",
    "Admission is granted on the basis of entrance test and previous academic records.",
    "Provisional admission for higher classes is confirmed once preceding class results are declared."
  ];

  const documentArr = [
    { icon: FileText, title: "Identity proof", description: "Birth certificate / government ID (as applicable)." },
    { icon: GraduationCap, title: "Academic records", description: "Previous report cards and transfer certificate." },
    { icon: ShieldCheck, title: "Supporting docs", description: "Address proof, photos, and any category certificates." }
  ];

  const disciplineArr = [
    { title: "School Uniform", description: "Wearing the prescribed school uniform is mandatory. Detailed guidelines are available in the school diary." },
    { title: "Respect & Conduct", description: "Students are expected to show respect toward teachers, staff, and peers at all times — both on and off campus." },
    { title: "Restricted Items", description: "Mobile phones, cameras, and motor vehicles are not permitted for students unless officially authorized." },
    { title: "Health & Safety", description: "Students suffering from any infectious illness should remain at home and avoid attending classes or examinations until fully recovered." },
  ];
  return (
    <main className="admissionPage">
      {/* Top Header Section */}
      <section className='director-hero'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className='mb-3 fw-bold topTitle'><span className='py-1 px-3 rounded-pill me-2'>Admission</span></div>
              <h1 className='heroMainTitle fw-bold mx-lg-5'>Begin Your Child’s <span>Journey With Us</span></h1>
              <p className='director-subtitle mx-auto'>Choosing the right school is an important step in your child’s future. Our admission process is simple, transparent, and designed to support families who value academic excellence and overall development.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mainInnerContent'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
            <div className="focus-card mb-5 position-relative shadowDiv">
                <h4 className="focus-card-heading">Eligibility Criteria</h4>
                <p className="focus-card-description">
                Simple criteria, complete transparency. Here’s what we consider before offering a seat.
                </p>
                <ul className="focus-card-list">
                  {eligibilityRequirements.map((item, index) => (
                    <li key={index} className="d-flex align-items-center gap-2">
                      <span className="focus-bullet">
                        <Check size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mb-5 position-relative shadowDiv documentDetails'>
                <h4 className="focus-card-heading">Documents Required</h4>
                <p className="focus-card-description">
                For a hassle-free process, carry originals and a complete photocopy set.
                </p>
                <div className="row">
                  {documentArr.map((card, index) => (
                    <div className="col-lg-4" key={`${card.title}-${index}`}>
                      <LabeledCard
                        className="promise-card-modern d-flex flex-column"
                        withShadow
                        icon={card.icon}
                        label={card.title}
                        labelClassName="promise-card-label commonLabel"
                        description={card.description}
                        descriptionClassName="promise-card-description-modern"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='mb-5 position-relative shadowDiv focus-card'>
                <h4 className="focus-card-heading">Discipline</h4>
                <p className="focus-card-description">
                  Clear expectations that help every student feel safe, respected, and supported.
                </p>
                <div className="row">
                  {disciplineArr.map((card, index) => (
                    <div className="col-lg-3" key={`${card.title}-${index}`}>
                      <LabeledCard
                        className="promise-card-modern d-flex flex-column"
                        withShadow
                        label={card.title}
                        labelClassName="promise-card-label commonLabel"
                        description={card.description}
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

export default Admission
