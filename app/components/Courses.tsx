import React from 'react';
import '../styles/courses.css';

export default function Courses() {
  const programmes = [
    { name: 'B.E. / B.Tech (4-5 Yrs)', fee: '₹8 Lakhs' },
    { name: 'M.E. / M.Tech (2-5 Yrs)', fee: '₹40,000' },
    { name: 'B.Arch (5 Yrs)', fee: '₹10 Lakhs' },
    { name: 'M.Sc. (2 Yrs)', fee: '₹6.66K - ₹40K' },
    { name: 'M.Pharma (2 Yrs)', fee: '₹40,000' },
    { name: 'Ph.D. (3 Yrs)', fee: '₹88.44K' }
  ];

  return (
    <section className="container grid-2" id="programmes">
      <div>
        <span className="section-subtitle">Find the programme that's right for you</span>
        <h2 className="section-title">
          We offer leading undergraduate, postgraduate, and doctoral programmes shaping the technology and infrastructure of tomorrow.
        </h2>
      </div>
      <div>
        <ul className="faculty-list">
          {programmes.map((prog, i) => (
            <li key={i}>
              {prog.name} <span style={{ color: 'var(--text-muted)' }}>{prog.fee}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
