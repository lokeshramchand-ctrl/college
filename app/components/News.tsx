import React from 'react';
import '../styles/news.css';

export default function News() {
  const news = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      alt: 'JEE Main 2026 session 2 registrations news thumbnail',
      category: 'Admissions',
      date: 'Feb 25, 2026',
      title: 'JEE Main 2026 session 2 registrations conclude for BTech & BArch admissions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      alt: 'GATE 2026 examination results news thumbnail',
      category: 'Exams',
      date: 'Mar 19, 2026',
      title: 'GATE 2026 examination results to be released for ME/MTech and PhD admissions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      alt: 'JEE Advanced 2026 application forms news thumbnail',
      category: 'Admissions',
      date: 'April 2026',
      title: 'JEE Advanced 2026 application forms expected to release for upcoming academic year.'
    },
    {
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      alt: 'IIT BHU placement drive news thumbnail',
      category: 'Placements',
      date: '2026',
      title: 'IIT BHU achieves highest package of INR 1.67 Crore per annum in recent placement drive.'
    }
  ];

  return (
    <section className="container" id="news">
      <span className="section-subtitle">Latest Updates</span>
      <h2 className="section-title">Important dates, admissions, and announcements.</h2>
      <button className="btn" style={{ border: '1px solid #ddd', marginBottom: '3rem' }} aria-label="View all updates">All Updates →</button>

      <div className="grid-4">
        {news.map((item, i) => (
          <div className="news-card" key={i}>
            <img src={item.image} alt={item.alt} className="news-img" />
            <div className="news-meta">{item.category} · {item.date}</div>
            <div className="news-title">{item.title}</div>
            <button className="read-more" aria-label={`Read more about ${item.title}`}>Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
