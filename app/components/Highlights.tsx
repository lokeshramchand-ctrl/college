import React from 'react';
import '../styles/highlights.css';

export default function Highlights() {
  const communityStats = [
    { metric: '376', title: 'Full-time Faculty Members' },
    { metric: '422', title: 'Dedicated Support Staff' },
    { metric: '1,745', title: 'Active Consultancy Projects' },
    { metric: '575', title: 'Sponsored Research Projects' }
  ];

  return (
    <section className="container grid-2" style={{ borderTop: '1px solid #eee', paddingTop: '5rem' }}>
      <div>
        <span className="section-subtitle">Our Community</span>
        <h2 className="section-title">A strong ecosystem of faculty, dedicated staff, and intensive research consultancy projects.</h2>
        <button className="btn" style={{ border: '1px solid #ddd', marginTop: '1rem' }}>View All Faculty →</button>
      </div>
      <div>
        {communityStats.map((item, i) => (
          <div className="person-item" key={i} style={{ padding: '1.5rem 1rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 500, width: '80px' }}>{item.metric}</div>
            <div>
              <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
