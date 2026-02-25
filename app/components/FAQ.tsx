export default function FAQ() {
  return (
    <section className="container" id="news">
      <span className="section-subtitle">Latest Updates</span>

      <h2 className="section-title">
        Important dates, admissions, and announcements.
      </h2>

      <button
        className="btn"
        style={{ border: '1px solid #ddd', marginBottom: '3rem' }}
      >
        All Updates →
      </button>

      <div className="grid-4">
        {[
          {
            title:
              'JEE Main 2026 registrations conclude for BTech & BArch.',
            meta: 'Admissions · Feb 25, 2026',
          },
          {
            title:
              'GATE 2026 results to be released for ME/MTech admissions.',
            meta: 'Exams · Mar 19, 2026',
          },
          {
            title:
              'JEE Advanced 2026 applications expected to release.',
            meta: 'Admissions · April 2026',
          },
          {
            title:
              'IIT BHU achieves highest package of INR 1.67 Crore.',
            meta: 'Placements · 2026',
          },
        ].map((news, i) => (
          <div className="news-card" key={i}>
            <div className="news-img"></div>
            <div className="news-meta">{news.meta}</div>
            <div className="news-title">{news.title}</div>
            <button className="read-more">Read more</button>
          </div>
        ))}
      </div>
    </section>
  )
}