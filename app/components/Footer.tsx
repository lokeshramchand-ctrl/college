export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col" style={{ paddingRight: '2rem' }}>
          <div
            style={{
              fontSize: '1.1rem',
              fontWeight: '500',
              marginBottom: '1rem',
              color: 'white',
              letterSpacing: '-0.01em',
            }}
          >
            IIT BHU Varanasi
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontWeight: '300' }}>
            Providing modern engineering and science education since 1919.
          </p>
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
            <li>Library</li>
            <li>Academic Calendar</li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Placements</h5>
          <ul>
            <li>Placement Cell</li>
            <li>Statistics</li>
            <li>Recruiters</li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Campus</h5>
          <ul>
            <li>Hostels</li>
            <li>Gymkhana</li>
            <li>Medical Facilities</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © 2026 Indian Institute of Technology (BHU) Varanasi
        </div>
      </div>
    </footer>
  )
}