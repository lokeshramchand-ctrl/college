'use client'

interface HeroProps {
  activeSection: string
  scrollToSection: (id: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

export default function Hero({
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeroProps) {
  return (
    <div className="hero" id="home">
      <div className="hero-bg" />

      <div className="hero-content-wrapper">
        <nav className="navbar">
          <div className="logo" onClick={() => scrollToSection('home')}>
            IIT BHU Varanasi
          </div>

          <div className="nav-menu">
            {[
              ['About', 'main-content'],
              ['Programmes', 'programmes'],
              ['Academics', 'academics'],
              ['Placements', 'placements'],
              ['Campus', 'campus'],
              ['Admissions', 'admissions'],
              ['News', 'news'],
            ].map(([label, id]) => (
              <a
                key={id}
                onClick={() => scrollToSection(id)}
                className={activeSection === id ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {[
              ['About', 'main-content'],
              ['Programmes', 'programmes'],
              ['Academics', 'academics'],
              ['Placements', 'placements'],
              ['Campus', 'campus'],
              ['Admissions', 'admissions'],
              ['News', 'news'],
            ].map(([label, id]) => (
              <a
                key={id}
                onClick={() => scrollToSection(id)}
                className={activeSection === id ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-content">
          <h1>
            Excellence in Engineering
            <br />
            & Research
          </h1>
          <p>
            Established in 1919, IIT BHU is one of India's premium institutions.
          </p>
          <button className="btn">Download Brochure →</button>
        </div>
      </div>
    </div>
  )
}