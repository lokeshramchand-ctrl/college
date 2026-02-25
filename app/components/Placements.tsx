import React from 'react';
import '../styles/placements.css';

export default function Placements() {
  const stats = [
    { value: '₹1.67Cr', label: 'Highest Package (Per Annum)' },
    { value: '₹29L', label: 'Average Package (LPA)' },
    { value: '1,228', label: 'Total Offers Made' },
    { value: '330', label: 'Companies Visited' }
  ];

  return (
    <section className="dark-section" id="placements">
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
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
