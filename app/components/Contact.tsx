export default function Contact() {
  return (
    <section className="container" id="admissions">
      <span className="section-subtitle">Admissions</span>

      <h2 className="section-title">
        Admission to the majority of our programmes is determined through
        national-level entrance examinations.
      </h2>

      <div className="grid-4" style={{ marginTop: '3rem' }}>
        {[
          {
            course: 'B.E. / B.Tech',
            exams: ['JEE Main', 'JEE Advanced'],
          },
          {
            course: 'M.E. / M.Tech',
            exams: ['GATE', 'ICAR AIEEA'],
          },
          {
            course: 'M.Sc.',
            exams: ['IIT JAM', 'CUET-PG'],
          },
          {
            course: 'M.Pharma',
            exams: ['GPAT'],
          },
        ].map((examData, i) => (
          <div className="network-card" key={i}>
            <div
              className="avatar"
              style={{ width: 30, height: 30, background: '#4facfe' }}
            ></div>

            <h4>{examData.course}</h4>

            <p
              style={{
                marginBottom: '1.5rem',
                fontWeight: '400',
                color: '#111',
              }}
            >
              Exams Accepted
            </p>

            <ul className="network-list">
              {examData.exams.map((exam, j) => (
                <li key={j}>
                  {exam} <span className="pill">Required</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}