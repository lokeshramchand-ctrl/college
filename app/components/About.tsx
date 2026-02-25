import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section className="container" id="main-content">
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
  );
}
