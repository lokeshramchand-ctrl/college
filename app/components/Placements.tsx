export default function Placements() {
  return (
    <section className="dark-section" id="placements">
      <div className="container">
        <span className="section-subtitle" style={{ color: '#888' }}>
          Driving Career Success
        </span>

        <h2 className="section-title">
          IIT BHU provides excellent placement opportunities, partnering with
          top global recruiters like Google, ZS Associates, ICICI Bank, and
          Meesho.
        </h2>

        <div
          style={{
            padding: '2.5rem',
            background: '#1f2023',
            borderRadius: '8px',
            margin: '3rem 0',
            borderLeft: '4px solid white',
          }}
        >
          <p style={{ fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.5 }}>
            "A total of 1,228 full-time offers and 292 PPOs were made in the
            latest 2026 placement season."
          </p>
        </div>

        <span
          className="section-subtitle"
          style={{ marginTop: '4rem', color: '#888' }}
        >
          Placement Statistics 2026
        </span>

        <div className="grid-4">
          <div className="stat-card">
            <h3>₹1.67Cr</h3>
            <p>Highest Package (Per Annum)</p>
          </div>
          <div className="stat-card">
            <h3>₹29L</h3>
            <p>Average Package (LPA)</p>
          </div>
          <div className="stat-card">
            <h3>1,228</h3>
            <p>Total Offers Made</p>
          </div>
          <div className="stat-card">
            <h3>330</h3>
            <p>Companies Visited</p>
          </div>
        </div>
      </div>
    </section>
  )
}