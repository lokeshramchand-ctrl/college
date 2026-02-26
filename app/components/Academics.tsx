import React from 'react';

export default function Academics() {
  const departments = [
    { id: 'CS.01', title: 'Computer Science & AI', tag: 'Core', items: ['Machine Learning', 'Data Structures', 'Cybersecurity'] },
    { id: 'EE.02', title: 'Electrical & Electronics', tag: 'Core', items: ['VLSI Design', 'Power Systems', 'Microprocessors'] },
    { id: 'CE.03', title: 'Civil & Architectural', tag: 'Core', items: ['Structural Engg', 'Urban Planning', 'Design'] },
    { id: 'PH.04', title: 'Pharmaceutical & Bio', tag: 'Interdisciplinary', items: ['Pharmacology', 'Biomedical Engg', 'Biochemical'] }
  ];

  return (
    <>
      <style jsx>{`
        .academics-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1rem;
        }

        @media (min-width: 640px) {
          .academics-section {
            padding: 4rem 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .academics-section {
            padding: 5rem 2rem;
          }
        }

        .section-subtitle {
          display: inline-block;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6366f1;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 3rem;
          max-width: 900px;
        }

        @media (min-width: 640px) {
          .section-title {
            font-size: 1.875rem;
          }
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 2.25rem;
          }
        }

        .departments-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .departments-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .departments-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }

        .research-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .research-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 640px) {
          .research-card {
            padding: 2rem;
          }
        }

        .research-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .research-card-header span:first-child {
          font-size: 0.75rem;
          font-weight: 600;
          color: #374151;
        }

        @media (min-width: 640px) {
          .research-card-header span:first-child {
            font-size: 0.875rem;
          }
        }

        .tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          background: #dcfce7;
          color: #166534;
          font-weight: 500;
        }

        .tag.planned {
          background: #dbeafe;
          color: #1e40af;
        }

        .research-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1rem;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .research-card h4 {
            font-size: 1.125rem;
          }
        }

        .research-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .research-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #6b7280;
        }

        @media (min-width: 640px) {
          .research-item {
            font-size: 0.875rem;
          }
        }

        .research-item span:first-child {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .research-item span:last-child {
          color: #d1d5db;
          letter-spacing: 2px;
          margin-left: 0.5rem;
          flex-shrink: 0;
        }
      `}</style>

      <section className="academics-section" id="academics">
        <span className="section-subtitle">Academic Excellence</span>
        <h2 className="section-title">
          Our researchers and students work across 15 specialised departments to address the most pressing technological questions of our time.
        </h2>

        <div className="departments-grid">
          {departments.map((card, i) => (
            <div className="research-card" key={i}>
              <div className="research-card-header">
                <span>{card.id}</span>
                <span className={`tag ${card.tag === 'Interdisciplinary' ? 'planned' : ''}`}>{card.tag}</span>
              </div>
              <h4>{card.title}</h4>
              <div className="research-items">
                {card.items.map((item, j) => (
                  <div className="research-item" key={j}>
                    <span>{item}</span>
                    <span>||</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}