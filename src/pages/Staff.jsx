import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SidebarNavigation from '../components/SidebarNavigation'
import { GraduationCap, FileText, User, Search } from 'lucide-react'

const Staff = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [tableSearchQuery, setTableSearchQuery] = useState('')

  // Middle Wing and Sr. Sec. Wing Staff
  const middleSeniorStaff = [
    {
      name: "Damodar Dass",
      role: "Principal",
      qualifications: "M.Sc. (Chemistry), M.A (English), B.Ed.",
      department: "Administration",
      category: "Senior",
      wing: "Senior",
      subjects: "Administration",
      joined: "Apr 2002"
    },
    {
      name: "Madhu Bala",
      role: "Headmistress (6th to 8th)",
      qualifications: "B.Sc. (N.M), B.Ed. TGT (NM)",
      department: "Administration",
      category: "Middle",
      wing: "Middle",
      subjects: "Administration",
      joined: "Apr 2015"
    },
    {
      name: "Dushyant Pandit Sharma",
      role: "PGT (Physics) - 6th to 12th",
      qualifications: "M.Sc (Physics), B.Ed.",
      department: "Physics",
      category: "Senior",
      wing: "Senior",
      subjects: "Physics",
      joined: "Apr 2017"
    },
    {
      name: "Kavita Devi",
      role: "PGT (Math) - 6th to 12th",
      qualifications: "M.Sc. Math, B.Ed.",
      department: "Mathematics",
      category: "Senior",
      wing: "Senior",
      subjects: "Mathematics",
      joined: "Nov 2018"
    },
    {
      name: "Indu Sharma",
      role: "PGT (Bio) - 6th to 12th",
      qualifications: "M.Sc. Bio, B.Ed.",
      department: "Biology",
      category: "Senior",
      wing: "Senior",
      subjects: "Biology",
      joined: "Apr 2014"
    },
    {
      name: "Gourika Sharma",
      role: "PGT (Chemistry) - 6th to 12th",
      qualifications: "M.Sc. (Chemistry), B.Ed.",
      department: "Chemistry",
      category: "Senior",
      wing: "Senior",
      subjects: "Chemistry",
      joined: "Apr 2017"
    },
    {
      name: "Lovely Sharma",
      role: "PGT (English) - 6th to 12th",
      qualifications: "M.A (English), B.Ed.",
      department: "English",
      category: "Senior",
      wing: "Senior",
      subjects: "English",
      joined: "Apr 2013"
    },
    {
      name: "Mridula Sharma",
      role: "TGT (Math) - 6th to 8th",
      qualifications: "M.Sc (Math), B.Ed.",
      department: "Mathematics",
      category: "Middle",
      wing: "Middle",
      subjects: "Mathematics",
      joined: "Oct 2016"
    },
    {
      name: "Anju Devi",
      role: "TGT (Arts) - 6th to 8th",
      qualifications: "B.A, B.Ed.",
      department: "Arts",
      category: "Middle",
      wing: "Middle",
      subjects: "Arts",
      joined: "May 2018"
    },
    {
      name: "Anita Kumari Thakur",
      role: "TGT (Hindi) - 6th to 9th",
      qualifications: "M.A. (Hindi), B.Ed. (LT)",
      department: "Hindi",
      category: "Middle",
      wing: "Middle",
      subjects: "Hindi",
      joined: "Apr 2011"
    },
    {
      name: "Neena Kumari",
      role: "TGT (Hindi) - 6th to 10th",
      qualifications: "M.A. (Hindi), B.Ed. (LT)",
      department: "Hindi",
      category: "Middle",
      wing: "Middle",
      subjects: "Hindi",
      joined: "Jun 2011"
    },
    {
      name: "Nisha Devi",
      role: "TGT (Hindi) - 6th to 8th",
      qualifications: "B.A (Hindi), B.Ed. (LT)",
      department: "Hindi",
      category: "Middle",
      wing: "Middle",
      subjects: "Hindi",
      joined: "Apr 2013"
    },
    {
      name: "Yash Pal",
      role: "PTI - 6th to 10th",
      qualifications: "+2, B.P.E.",
      department: "Sports",
      category: "Middle",
      wing: "Middle",
      subjects: "Sports",
      joined: "Oct 2012"
    },
    {
      name: "Suneel Kumar",
      role: "PTI - 6th to 10th",
      qualifications: "+2, B.P.E.",
      department: "Sports",
      category: "Middle",
      wing: "Middle",
      subjects: "Sports",
      joined: "Apr 2017"
    },
    {
      name: "Praveen Kumar",
      role: "Art and Craft - 6th to 10th",
      qualifications: "B.A, B.Ed.",
      department: "Arts",
      category: "Middle",
      wing: "Middle",
      subjects: "Art and Craft",
      joined: "Apr 2015"
    },
    {
      name: "Geetanand",
      role: "Sanskrit - 6th to 10th",
      qualifications: "+2, Shastri",
      department: "Sanskrit",
      category: "Middle",
      wing: "Middle",
      subjects: "Sanskrit",
      joined: "Jan 2010"
    },
    {
      name: "Ajay Kumar",
      role: "IP/Teacher - 6th to 12th",
      qualifications: "M.CA",
      department: "Computer",
      category: "Senior",
      wing: "Senior",
      subjects: "Computer",
      joined: "Dec 2015"
    },
    {
      name: "Poonam Sharma",
      role: "Clerk",
      qualifications: "B.A, Diploma in Com. Application",
      department: "Office",
      category: "Senior",
      wing: "Senior",
      subjects: "Office",
      joined: "Apr 2005"
    },
    {
      name: "Taku",
      role: "Peon",
      qualifications: "+2",
      department: "Office",
      category: "Senior",
      wing: "Senior",
      subjects: "Office",
      joined: "May 2017"
    }
  ]

  // Primary Wing Staff
  const primaryStaff = [
    {
      name: "Kalpana Sharma",
      role: "Headmistress (Primary)",
      qualifications: "B.Sc., B.Ed., JBT",
      department: "Administration",
      category: "Primary",
      wing: "Primary",
      subjects: "Administration",
      joined: "Apr 2016"
    },
    {
      name: "Kirna Devi",
      role: "Primary Teacher",
      qualifications: "B.A., JBT",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Apr 2016"
    },
    {
      name: "Manorma Devi",
      role: "Primary Teacher",
      qualifications: "M.Com, B.Ed., JBT",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Apr 2016"
    },
    {
      name: "Vanita Sharma",
      role: "Primary Teacher",
      qualifications: "+2, JBT",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Oct 2018"
    },
    {
      name: "Mamtajaniwal",
      role: "Primary Teacher",
      qualifications: "B.A, B.Ed., JBT",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Apr 2017"
    },
    {
      name: "Bharti Sharma",
      role: "Primary Teacher",
      qualifications: "+2, JBT",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Apr 2017"
    },
    {
      name: "Bandna Sharma",
      role: "Primary Teacher",
      qualifications: "M.A Hindi, D. El. Ed. In Progress (SOS)",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "May 2012"
    },
    {
      name: "Kusumlata",
      role: "Primary Teacher",
      qualifications: "M.A. Hindi (N.T.T), D. EL. Ed in Progress (SOS)",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Jun 2007"
    },
    {
      name: "Ramesh Kumar",
      role: "Primary Teacher",
      qualifications: "B.Sc (NM), D. El. Ed. in Progress (SOS)",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Apr 2014"
    },
    {
      name: "Dilain Chandel",
      role: "Primary Teacher",
      qualifications: "+2, D. El. Ed. In Progress (SOS)",
      department: "Primary",
      category: "Primary",
      wing: "Primary",
      subjects: "Primary",
      joined: "Apr 2010"
    },
    {
      name: "Rita Devi",
      role: "Peon",
      qualifications: "B.A",
      department: "Office",
      category: "Primary",
      wing: "Primary",
      subjects: "Office",
      joined: "May 2005"
    }
  ]

  // Combine all staff members
  const staffMembers = [...middleSeniorStaff, ...primaryStaff]

  const filters = ['All', 'Primary', 'Middle', 'Senior']

  // Filter staff for cards - only show higher authorities (Principal, Headmistress, Senior Teachers)
  const isHigherAuthority = (member) => {
    const role = member.role.toLowerCase()
    return (
      role.includes('principal') ||
      role.includes('headmistress') ||
      role.includes('pgt') ||
      (role.includes('tgt') && member.category === 'Senior')
    )
  }

  // Filter staff based on category for cards (only higher authorities)
  const filteredStaff = staffMembers
    .filter(member => isHigherAuthority(member))
    .filter(member => {
      return activeFilter === 'All' || member.category === activeFilter
    })

  return (
    <main className='satffPage'>
      <section className='director-hero'>
        <div className="container">
          <div className="row gap-5 gap-lg-0 align-items-center">
            <div className="col-lg-6 text-start">
            <div className='mb-3 fw-bold topTitle'><span className='py-1 px-3 rounded-pill me-2'>Meet the Team</span></div>
              <h1 className='heroMainTitle fw-bold '>Our Faculty & Staff</h1>
              <p className='director-subtitle mx-auto'>Meet the experienced teachers and support staff who guide, inspire, and nurture every child. Browse profiles easily or view the complete staff directory.</p>
              <div className="director-cta-buttons">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    const memberListElement = document.getElementById('memberList')
                    if (memberListElement) {
                      memberListElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                >
                  View Staff List
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heroImgWrap">
                <img src='/downloads/Staff-of-School.jpg' alt='Staff' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mainInnerContent'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className='directoryDetails focus-card mb-5 position-relative shadowDiv'>
                {/* Directory Header */}
                <div className="directory-header mb-4">
                  <div className="row align-items-start">
                    <div className="col-lg-7">
                      <h2 className="directory-title mb-2">Directory</h2>
                      <p className="directory-subtitle">Browse staff by wing and search by name, role, or subject.</p>
                    </div>
                    <div className="col-lg-5">
                      {/* Filter Buttons */}
                      <div className="directory-filters d-flex align-items-center gap-2 flex-wrap justify-content-start justify-content-md-end">
                        {filters.map((filter) => (
                          <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                          >
                            {filter}
                          </button>
                        ))}
                        
                      </div>
                      <span className="filter-count d-flex justify-content-end mt-4 mt-md-2 ms-auto">{filteredStaff.length} shown</span>
                    </div>
                  </div>
                </div>

                {/* Staff Cards Grid */}
                <div className="staff-cards-grid">
                  <div className="row g-4">
                    {filteredStaff.map((member, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-3">
                        <div className="staff-card position-relative shadowDiv">
                          <div className={`staff-card-category ${member.category === 'Senior' ? 'category-senior' : ''}`}>{member.category}</div>
                          <div className="staff-card-content">
                            <div className="staff-card-header d-flex align-items-start gap-2 mb-3">
                              <div className="staff-avatar">
                                <User size={40} color="#1a5395" />
                              </div>
                              <div className="staff-info">
                                <h4 className="staff-name mb-1">{member.name}</h4>
                                <p className="staff-role mb-0">{member.role}</p>
                              </div>
                            </div>
                            <div className="staff-details">
                              <div className="staff-detail-item d-flex align-items-center gap-2 mb-2">
                                <GraduationCap size={16} color="#6b7280" />
                                <span className="staff-detail-text">{member.qualifications}</span>
                              </div>
                              <div className="staff-detail-item d-flex align-items-center gap-2">
                                <FileText size={16} color="#6b7280" />
                                <span className="staff-detail-text">{member.department}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="memberList" className="memberList focus-card position-relative shadowDiv">
                {/* Staff Details Header */}
                <div className="staff-details-header mb-4">
                  <div className="row align-items-start">
                    <div className="col-lg-6">
                      <h2 className="staff-details-title mb-2">Staff details</h2>
                      <p className="staff-details-subtitle">A clean, printable-style table (great for official pages).</p>
                    </div>
                    <div className="col-lg-6">
                      {/* Search Bar */}
                      <div className="staff-table-search mt-3 mt-lg-0">
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <Search size={18} color="#6b7280" />
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Filter table..."
                            value={tableSearchQuery}
                            onChange={(e) => setTableSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Staff Table */}
                <div className="staff-table-wrapper">
                  <table className="table staff-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Wing</th>
                        <th>Qualification</th>
                        <th>Subjects</th>
                        <th>Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffMembers
                        .filter(member => {
                          if (!tableSearchQuery) return true
                          const query = tableSearchQuery.toLowerCase()
                          return (
                            member.name.toLowerCase().includes(query) ||
                            member.role.toLowerCase().includes(query) ||
                            member.wing.toLowerCase().includes(query) ||
                            member.qualifications.toLowerCase().includes(query) ||
                            member.subjects.toLowerCase().includes(query) ||
                            member.joined.toLowerCase().includes(query)
                          )
                        })
                        .map((member, index) => (
                          <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.role}</td>
                            <td>{member.wing}</td>
                            <td>{member.qualifications}</td>
                            <td>{member.subjects}</td>
                            <td>{member.joined}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
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

export default Staff
