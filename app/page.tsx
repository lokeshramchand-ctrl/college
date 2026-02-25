import React from 'react';

export default function IITBHUPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
          --primary-dark: #141517;
          --bg-light: #f7f7f7;
          --bg-card: #ececec;
          --text-main: #111;
          --text-muted: #666;
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: var(--font-sans);
          color: var(--text-main);
          line-height: 1.6;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Utility Classes */
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }
        
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        
        @media (max-width: 1024px) {
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; gap: 2rem; }
          .container { padding: 3rem 1.5rem; }
        }

        /* --- HERO SECTION WITH ANIMATION --- */
        .hero {
          position: relative;
          height: 90vh;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          color: white;
          overflow: hidden; 
        }

        /* Background Zoom Animation */
        @keyframes panZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') center/cover;
          z-index: 0;
          animation: panZoom 18s ease-out forwards;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 2rem 4rem;
          align-items: flex-start;
          position: relative; 
        }
        
        .navbar .logo { 
          font-weight: 500; 
          font-size: 1.1rem; 
          letter-spacing: -0.01em;
        }
        
        /* --- EXPANDING NEWS PILL ANIMATION --- */
        .news-widget-wrapper {
          position: absolute;
          left: 50%;
          top: 2rem;
          transform: translateX(-50%);
          z-index: 20;
        }

        .news-widget {
          position: relative;
          background: rgba(255, 255, 255, 0.98);
          color: #111;
          border-radius: 50px;
          overflow: hidden;
          cursor: pointer;
          width: 380px;
          height: 44px;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.4, 1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .news-widget:hover {
          width: 480px;
          height: 160px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .news-collapsed {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 0 0.4rem;
          gap: 0.6rem;
          transition: opacity 0.3s ease;
        }

        .news-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }

        .news-collapsed-text {
          font-size: 0.85rem;
          font-weight: 400;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .news-widget:hover .news-collapsed {
          opacity: 0;
          pointer-events: none;
        }

        .news-expanded {
          position: absolute;
          inset: 0;
          display: flex;
          padding: 1rem;
          gap: 1.2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
          transition-delay: 0.15s; 
        }

        .news-widget:hover .news-expanded {
          opacity: 1;
          pointer-events: auto;
        }

        .news-expanded-img {
          width: 140px;
          height: 100%;
          border-radius: 8px;
          object-fit: cover;
          background: #e0e0e0;
        }

        .news-expanded-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .news-expanded-tag {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .news-expanded-headline {
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.3;
          margin-bottom: auto;
          letter-spacing: -0.01em;
        }

        .news-expanded-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .news-expanded-link {
          font-size: 0.85rem;
          color: #888;
        }

        .news-controls button {
          background: none;
          border: 1px solid #ccc;
          color: #888;
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-left: 0.4rem;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.2s;
        }

        .news-controls button:hover {
          border-color: #111;
          color: #111;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 4rem;
          max-width: 900px;
        }

        .hero h1 { 
          font-size: 4.5rem; 
          line-height: 1.05; 
          margin-bottom: 2rem; 
          font-weight: 400;
          letter-spacing: -0.03em;
        }
        
        .hero p { 
          font-size: 1.1rem; 
          opacity: 0.9; 
          margin-bottom: 2rem; 
          max-width: 600px; 
          font-weight: 300;
        }
        
        .btn {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          background: white;
          color: black;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 500;
          width: fit-content;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
        }

        /* Typography */
        .section-title { 
          font-size: 2.2rem; 
          font-weight: 300; 
          margin-bottom: 1.5rem; 
          max-width: 800px; 
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        
        .section-subtitle { 
          font-size: 0.75rem; 
          text-transform: uppercase; 
          letter-spacing: 0.08em; 
          margin-bottom: 1rem; 
          font-weight: 500; 
          display: block; 
          color: var(--text-muted);
        }
        
        .lead-text { 
          font-size: 1.5rem; 
          line-height: 1.5; 
          font-weight: 300; 
          letter-spacing: -0.01em;
        }

        /* Stats Cards */
        .stat-card { background: var(--bg-card); padding: 2.5rem; border-radius: 8px; }
        .stat-card h3 { font-size: 3.5rem; font-weight: 300; margin-bottom: 1rem; letter-spacing: -0.04em; line-height: 1; }
        .stat-card p { font-size: 0.9rem; color: var(--text-muted); font-weight: 400; }

        /* Faculties List */
        .faculty-list { list-style: none; }
        .faculty-list li { padding: 1.5rem 0; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 300; letter-spacing: -0.01em; }
        .faculty-list li:first-child { border-top: 1px solid #ddd; }

        /* Dark Section */
        .dark-section { background: var(--primary-dark); color: white; }
        .dark-section .stat-card { background: #1f2023; }
        .dark-section .stat-card h3 { color: white; }
        
        /* Research Focus Cards */
        .research-card { background: var(--bg-light); padding: 2rem; border-radius: 8px; }
        .research-card-header { display: flex; justify-content: space-between; margin-bottom: 2rem; font-size: 0.85rem; font-weight: 500; color: var(--text-muted); }
        .research-card h4 { font-size: 1.4rem; margin-bottom: 1.5rem; font-weight: 400; letter-spacing: -0.01em; }
        .research-item { display: flex; justify-content: space-between; padding: 0.8rem 0; border-top: 1px solid #ddd; font-size: 0.9rem; color: var(--text-muted); }
        .research-item:last-child { border-bottom: 1px solid #ddd; }
        .tag { background: #d0e8ff; color: #0056b3; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
        .tag.planned { background: #ffeebb; color: #856404; }

        /* Offer Cards */
        .offer-card { height: 400px; padding: 2rem; border-radius: 12px; color: var(--text-main); display: flex; flex-direction: column; justify-content: space-between; }
        .offer-card h3 { font-size: 1.2rem; margin-bottom: 0.5rem; font-weight: 500; }
        .offer-card p { font-size: 0.95rem; opacity: 0.9; font-weight: 300; }
        .offer-1 { background: linear-gradient(135deg, #ff9a44 0%, #fc6076 100%); color: white; }
        .offer-2 { background: #e0e0e0; }
        .offer-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; }

        /* People & Network */
        .person-item { display: flex; align-items: center; gap: 1.2rem; padding: 1rem; background: var(--bg-light); border-radius: 8px; margin-bottom: 0.5rem; }
        .avatar { width: 48px; height: 48px; background: #ccc; border-radius: 50%; object-fit: cover; }
        .network-card { background: var(--bg-card); padding: 2rem; border-radius: 8px; }
        .network-card h4 { font-size: 1.5rem; margin: 1.5rem 0 1rem; font-weight: 400; letter-spacing: -0.01em; }
        .network-list { list-style: none; font-size: 0.9rem; color: var(--text-muted); }
        .network-list li { display: flex; justify-content: space-between; margin-bottom: 0.8rem; }
        .pill { background: #ddd; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 500; color: #333; }

        /* News Cards */
        .news-card { display: flex; flex-direction: column; gap: 1rem; }
        .news-img { width: 100%; height: 200px; background: #ddd; border-radius: 8px; object-fit: cover; }
        .news-meta { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
        .news-title { font-size: 1.1rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }
        .read-more { font-size: 0.85rem; text-decoration: underline; margin-top: auto; cursor: pointer; color: var(--text-muted); }

        /* Footer */
        footer { background: var(--primary-dark); color: white; padding: 5rem 2rem 2rem; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 2rem; max-width: 1400px; margin: 0 auto; border-bottom: 1px solid #333; padding-bottom: 4rem; }
        .footer-col h5 { font-size: 0.85rem; margin-bottom: 1.5rem; color: #888; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.8rem; font-size: 0.9rem; color: #ccc; font-weight: 300; }
        .footer-bottom { display: flex; justify-content: space-between; max-width: 1400px; margin: 2rem auto 0; font-size: 0.8rem; color: #666; font-weight: 300; }
        .footer-links { display: flex; gap: 2rem; }
      `}</style>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content-wrapper">
          <nav className="navbar">
            <div className="logo">IIT BHU Varanasi</div>
            
            {/* The Animated Expanding News Pill */}
            <div className="news-widget-wrapper">
              <div className="news-widget">
                
                {/* Collapsed State */}
                <div className="news-collapsed">
                  <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="News Avatar" className="news-avatar" />
                  <span className="news-collapsed-text">Rankings: IIT BHU ranks 10th in NIRF 2025...</span>
                </div>

                {/* Expanded State */}
                <div className="news-expanded">
                  <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="News Thumbnail" className="news-expanded-img" />
                  <div className="news-expanded-details">
                    <div className="news-expanded-tag">Rankings</div>
                    <div className="news-expanded-headline">IIT BHU secures 10th rank under the 'Engineering' category in NIRF 2025.</div>
                    <div className="news-expanded-footer">
                      <span className="news-expanded-link">Read more</span>
                      <div className="news-controls">
                        <button>←</button>
                        <button>→</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>Menu ≡</div>
          </nav>
          
          <div className="hero-content">
            <h1>Excellence in Engineering<br />& Research</h1>
            <p>Established in 1919, the Indian Institute of Technology (BHU) is one of India's premium public institutions, located within a 1300-acre campus featuring exemplary Indo-Gothic architecture.</p>
            <button className="btn">Download Brochure →</button>
          </div>
        </div>
      </div>

      {/* Intro & Main Stats */}
      <section className="container">
        <div style={{ maxWidth: '900px', marginBottom: '4rem' }}>
          <p className="lead-text">
            IIT BHU is an institute of national importance that provides modern education to over 9,300 students. We offer flagship BTech, MTech, and doctoral programmes across 15 departments and 3 interdisciplinary schools.
          </p>
        </div>

        <span className="section-subtitle">IIT BHU Key Statistics</span>
        <div className="grid-4">
          <div className="stat-card">
            <h3>1919</h3>
            <p>Established</p>
          </div>
          <div className="stat-card">
            <h3>1300</h3>
            <p>Acres of Campus</p>
          </div>
          <div className="stat-card">
            <h3>#10</h3>
            <p>NIRF 2025 Engineering</p>
          </div>
          <div className="stat-card">
            <h3>9,300+</h3>
            <p>Total Students Enrolled</p>
          </div>
        </div>
      </section>

      {/* Faculties/Courses Section */}
      <section className="container grid-2">
        <div>
          <span className="section-subtitle">Find the programme that's right for you</span>
          <h2 className="section-title">
            We offer leading undergraduate, postgraduate, and doctoral programmes shaping the technology and infrastructure of tomorrow.
          </h2>
        </div>
        <div>
          <ul className="faculty-list">
            <li>B.E. / B.Tech (4-5 Yrs) <span style={{ color: 'var(--text-muted)' }}>₹8 Lakhs</span></li>
            <li>M.E. / M.Tech (2-5 Yrs) <span style={{ color: 'var(--text-muted)' }}>₹40,000</span></li>
            <li>B.Arch (5 Yrs) <span style={{ color: 'var(--text-muted)' }}>₹10 Lakhs</span></li>
            <li>M.Sc. (2 Yrs) <span style={{ color: 'var(--text-muted)' }}>₹6.66K - ₹40K</span></li>
            <li>M.Pharma (2 Yrs) <span style={{ color: 'var(--text-muted)' }}>₹40,000</span></li>
            <li>Ph.D. (3 Yrs) <span style={{ color: 'var(--text-muted)' }}>₹88.44K</span></li>
          </ul>
        </div>
      </section>

      {/* Dark Impact / Placement Section */}
      <section className="dark-section">
        <div className="container">
          <span className="section-subtitle" style={{ color: '#888' }}>Driving Career Success</span>
          <h2 className="section-title">
            IIT BHU provides excellent placement opportunities, partnering with top global recruiters like Google, ZS Associates, ICICI Bank, and Meesho.
          </h2>
          
          <div style={{ padding: '2.5rem', background: '#1f2023', borderRadius: '8px', margin: '3rem 0', borderLeft: '4px solid white' }}>
            <p style={{ fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.5 }}>"A total of 1,228 full-time offers and 292 PPOs were made in the latest 2026 placement season."</p>
          </div>

          <span className="section-subtitle" style={{ marginTop: '4rem', color: '#888' }}>Placement Statistics 2026</span>
          <div className="grid-4">
            <div className="stat-card">
              <h3>₹1.67Cr</h3>
              <p>Highest Package (Per Annum)</p>
            </div>
            <div className="stat-card">
              <h3>₹29L</h3>
              <p>Average Package (LPA)</p>
            </div>
            <div className="stat-card">
              <h3>1,228</h3>
              <p>Total Offers Made</p>
            </div>
            <div className="stat-card">
              <h3>330</h3>
              <p>Companies Visited</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Focus */}
      <section className="container">
        <span className="section-subtitle">Academic Excellence</span>
        <h2 className="section-title">
          Our researchers and students work across 15 specialised departments to address the most pressing technological questions of our time.
        </h2>

        <div className="grid-4" style={{ marginTop: '3rem' }}>
          {[
            { id: 'CS.01', title: 'Computer Science & AI', tag: 'Core', items: ['Machine Learning', 'Data Structures', 'Cybersecurity'] },
            { id: 'EE.02', title: 'Electrical & Electronics', tag: 'Core', items: ['VLSI Design', 'Power Systems', 'Microprocessors'] },
            { id: 'CE.03', title: 'Civil & Architectural', tag: 'Core', items: ['Structural Engg', 'Urban Planning', 'Design'] },
            { id: 'PH.04', title: 'Pharmaceutical & Bio', tag: 'Interdisciplinary', items: ['Pharmacology', 'Biomedical Engg', 'Biochemical'] }
          ].map((card, i) => (
            <div className="research-card" key={i}>
              <div className="research-card-header">
                <span>{card.id}</span>
                <span className={`tag ${card.tag === 'Interdisciplinary' ? 'planned' : ''}`}>{card.tag}</span>
              </div>
              <h4>{card.title}</h4>
              <div>
                {card.items.map((item, j) => (
                  <div className="research-item" key={j}>
                    <span>{item}</span>
                    <span style={{ color: '#ccc', letterSpacing: '2px' }}>||||||</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Community / Projects */}
      <section className="container grid-2" style={{ borderTop: '1px solid #eee', paddingTop: '5rem' }}>
        <div>
          <span className="section-subtitle">Our Community</span>
          <h2 className="section-title">A strong ecosystem of faculty, dedicated staff, and intensive research consultancy projects.</h2>
          <button className="btn" style={{ border: '1px solid #ddd', marginTop: '1rem' }}>View All Faculty →</button>
        </div>
        <div>
          {[
            { metric: '376', title: 'Full-time Faculty Members' },
            { metric: '422', title: 'Dedicated Support Staff' },
            { metric: '1,745', title: 'Active Consultancy Projects' },
            { metric: '575', title: 'Sponsored Research Projects' }
          ].map((item, i) => (
            <div className="person-item" key={i} style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 500, width: '80px' }}>{item.metric}</div>
              <div>
                <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer / Campus Life */}
      <section className="container">
        <span className="section-subtitle">Campus Life</span>
        <div className="grid-3">
          <div className="offer-card offer-1">
            <div>
              <h3>Accommodation</h3>
              <p>The institute provides separate accommodations for boys and girls across 16 well-equipped hostels. Hostel fee is approximately INR 300 per semester.</p>
            </div>
          </div>
          <div className="offer-card offer-2">
            <div>
              <h3>Scholarships</h3>
              <p>IIT BHU strongly supports accessible education, providing merit-cum-means scholarships to 25% of undergraduate students based on eligibility.</p>
            </div>
          </div>
          <div className="offer-card offer-3">
            <div>
              <h3>Architecture</h3>
              <p>Located within the BHU grounds, the campus is surrounded by massive buildings that showcase exemplary Indo-Gothic architecture from the 20th century.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Exams */}
      <section className="container bg-light">
        <span className="section-subtitle">Admissions</span>
        <h2 className="section-title">
          Admission to the majority of our programmes is determined through rigorous national-level entrance examinations.
        </h2>

        <div className="grid-4" style={{ marginTop: '3rem' }}>
          {[
            { course: 'B.E. / B.Tech', exams: ['JEE Main', 'JEE Advanced'], status: 'Active' },
            { course: 'M.E. / M.Tech', exams: ['GATE', 'ICAR AIEEA'], status: 'Active' },
            { course: 'M.Sc.', exams: ['IIT JAM', 'CUET-PG'], status: 'Active' },
            { course: 'M.Pharma', exams: ['GPAT'], status: 'Active' }
          ].map((examData, i) => (
            <div className="network-card" key={i}>
              <div className="avatar" style={{ width: 30, height: 30, background: '#4facfe' }}></div>
              <h4>{examData.course}</h4>
              <p style={{ marginBottom: '1.5rem', fontWeight: '400', color: '#111' }}>Exams Accepted</p>
              <ul className="network-list">
                {examData.exams.map((exam, j) => (
                  <li key={j}>
                    {exam} <span className="pill">Required</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="container">
        <span className="section-subtitle">Latest Updates</span>
        <h2 className="section-title">Important dates, admissions, and announcements.</h2>
        <button className="btn" style={{ border: '1px solid #ddd', marginBottom: '3rem' }}>All Updates →</button>

        <div className="grid-4">
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="News thumbnail" className="news-img" />
            <div className="news-meta">Admissions · Feb 25, 2026</div>
            <div className="news-title">JEE Main 2026 session 2 registrations conclude for BTech & BArch admissions.</div>
            <div className="read-more">Read more</div>
          </div>
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="News thumbnail" className="news-img" />
            <div className="news-meta">Exams · Mar 19, 2026</div>
            <div className="news-title">GATE 2026 examination results to be released for ME/MTech and PhD admissions.</div>
            <div className="read-more">Read more</div>
          </div>
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="News thumbnail" className="news-img" />
            <div className="news-meta">Admissions · April 2026</div>
            <div className="news-title">JEE Advanced 2026 application forms expected to release for upcoming academic year.</div>
            <div className="read-more">Read more</div>
          </div>
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="News thumbnail" className="news-img" />
            <div className="news-meta">Placements · 2026</div>
            <div className="news-title">IIT BHU achieves highest package of INR 1.67 Crore per annum in recent placement drive.</div>
            <div className="read-more">Read more</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-col" style={{ paddingRight: '2rem' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '1rem', color: 'white', letterSpacing: '-0.01em' }}>IIT BHU Varanasi</div>
            <p style={{ fontSize: '0.85rem', color: '#888', fontWeight: '300' }}>Providing modern engineering and science education since 1919.</p>
          </div>
          <div className="footer-col">
            <h5>Admissions</h5>
            <ul>
              <li>B.Tech Programs</li>
              <li>M.Tech & M.Pharma</li>
              <li>Ph.D. Programs</li>
              <li>JEE Advanced</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Academics</h5>
            <ul>
              <li>Departments</li>
              <li>Interdisciplinary Schools</li>
              <li>Library</li>
              <li>Academic Calendar</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Placements</h5>
            <ul>
              <li>Training & Placement Cell</li>
              <li>Placement Statistics</li>
              <li>Recruiters</li>
              <li>Internships</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Campus</h5>
            <ul>
              <li>Hostels</li>
              <li>Gymkhana</li>
              <li>Medical Facilities</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Indian Institute of Technology (BHU) Varanasi</div>
          <div className="footer-links">
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Use</span>
            <span style={{ cursor: 'pointer' }}>Accessibility</span>
          </div>
        </div>
      </footer>
    </>
  );
}