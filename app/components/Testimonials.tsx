export default function Testimonials() {
  return (
    <>
      {/* Community Section */}
      <section
        className="container grid-2"
        style={{ borderTop: '1px solid #eee', paddingTop: '5rem' }}
      >
        <div>
          <span className="section-subtitle">Our Community</span>
          <h2 className="section-title">
            A strong ecosystem of faculty, dedicated staff, and intensive
            research consultancy projects.
          </h2>
          <button
            className="btn"
            style={{ border: '1px solid #ddd', marginTop: '1rem' }}
          >
            View All Faculty →
          </button>
        </div>

        <div>
          {[
            { metric: '376', title: 'Full-time Faculty Members' },
            { metric: '422', title: 'Dedicated Support Staff' },
            { metric: '1,745', title: 'Active Consultancy Projects' },
            { metric: '575', title: 'Sponsored Research Projects' },
          ].map((item, i) => (
            <div
              className="person-item"
              key={i}
              style={{ padding: '1.5rem 1rem' }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  width: '80px',
                }}
              >
                {item.metric}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    fontWeight: '400',
                  }}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Section */}
      <section className="container" id="campus">
        <span className="section-subtitle">Campus Life</span>

        <div className="grid-3">
          <div className="offer-card offer-1">
            <div>
              <h3>Accommodation</h3>
              <p>
                Separate accommodations across 16 well-equipped hostels.
              </p>
            </div>
          </div>

          <div className="offer-card offer-2">
            <div>
              <h3>Scholarships</h3>
              <p>
                Merit-cum-means scholarships available to eligible students.
              </p>
            </div>
          </div>

          <div className="offer-card offer-3">
            <div>
              <h3>Architecture</h3>
              <p>
                Surrounded by Indo-Gothic architecture within the BHU campus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}