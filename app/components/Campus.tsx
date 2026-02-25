import React from 'react';
import '../styles/campus.css';

export default function Campus() {
  const offers = [
    {
      title: 'Accommodation',
      description: 'The institute provides separate accommodations for boys and girls across 16 well-equipped hostels. Hostel fee is approximately INR 300 per semester.',
      className: 'offer-1'
    },
    {
      title: 'Scholarships',
      description: 'IIT BHU strongly supports accessible education, providing merit-cum-means scholarships to 25% of undergraduate students based on eligibility.',
      className: 'offer-2'
    },
    {
      title: 'Architecture',
      description: 'Located within the BHU grounds, the campus is surrounded by massive buildings that showcase exemplary Indo-Gothic architecture from the 20th century.',
      className: 'offer-3'
    }
  ];

  return (
    <section className="container" id="campus">
      <span className="section-subtitle">Campus Life</span>
      <div className="grid-3">
        {offers.map((offer, i) => (
          <div className={`offer-card ${offer.className}`} key={i}>
            <div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
