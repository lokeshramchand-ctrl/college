import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  const footerLinks = {
    admissions: ['B.Tech Programs', 'M.Tech & M.Pharma', 'Ph.D. Programs', 'JEE Advanced'],
    academics: ['Departments', 'Interdisciplinary Schools', 'Library', 'Academic Calendar'],
    placements: ['Training & Placement Cell', 'Placement Statistics', 'Recruiters', 'Internships'],
    campus: ['Hostels', 'Gymkhana', 'Medical Facilities', 'Contact Us']
  };

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col" style={{ paddingRight: '2rem' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '1rem', color: 'white', letterSpacing: '-0.01em' }}>IIT BHU Varanasi</div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontWeight: '300' }}>Providing modern engineering and science education since 1919.</p>
        </div>
        <div className="footer-col">
          <h5>Admissions</h5>
          <ul>
            {footerLinks.admissions.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Academics</h5>
          <ul>
            {footerLinks.academics.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Placements</h5>
          <ul>
            {footerLinks.placements.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Campus</h5>
          <ul>
            {footerLinks.campus.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Indian Institute of Technology (BHU) Varanasi</div>
        <div className="footer-links">
          <button style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit' }} aria-label="View privacy policy">Privacy Policy</button>
          <button style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit' }} aria-label="View terms of use">Terms of Use</button>
          <button style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit' }} aria-label="View accessibility statement">Accessibility</button>
        </div>
      </div>
    </footer>
  );
}
