import React from 'react';
import '../styles/academics.css';

export default function Academics() {
  const departments = [
    { id: 'CS.01', title: 'Computer Science & AI', tag: 'Core', items: ['Machine Learning', 'Data Structures', 'Cybersecurity'] },
    { id: 'EE.02', title: 'Electrical & Electronics', tag: 'Core', items: ['VLSI Design', 'Power Systems', 'Microprocessors'] },
    { id: 'CE.03', title: 'Civil & Architectural', tag: 'Core', items: ['Structural Engg', 'Urban Planning', 'Design'] },
    { id: 'PH.04', title: 'Pharmaceutical & Bio', tag: 'Interdisciplinary', items: ['Pharmacology', 'Biomedical Engg', 'Biochemical'] }
  ];

  return (
    <section className="container" id="academics">
      <span className="section-subtitle">Academic Excellence</span>
      <h2 className="section-title">
        Our researchers and students work across 15 specialised departments to address the most pressing technological questions of our time.
      </h2>

      <div className="grid-4" style={{ marginTop: '3rem' }}>
        {departments.map((card, i) => (
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
  );
}
