import React from 'react';
import '../styles/campus.css';

export default function Campus() {
  const offers = [
    {
      title: 'Accommodation',
      description: 'The institute provides separate accommodations for boys and girls across 16 well-equipped hostels. Hostel fee is approximately INR 300 per semester.',
    },
    {
      title: 'Scholarships',
      description: 'IIT BHU strongly supports accessible education, providing merit-cum-means scholarships to 25% of undergraduate students based on eligibility.',
    },
    {
      title: 'Architecture',
      description: 'Located within the BHU grounds, the campus is surrounded by massive buildings that showcase exemplary Indo-Gothic architecture from the 20th century.',
    }
  ];

  return (
    <section className="container px-4 sm:px-6 md:px-8" id="campus">
      <span className="section-subtitle">Campus Life</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8">
        {offers.map((offer, i) => (
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300" key={i}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{offer.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}