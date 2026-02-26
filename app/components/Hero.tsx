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
          <div 
            className="logo cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
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
                className={`transition-all duration-300 ${activeSection === id ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
                className={`transition-all duration-300 ${activeSection === id ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Excellence in Engineering
            <br />
            & Research
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            Established in 1919, IIT BHU is one of India's premium institutions.
          </p>

        </div>
      </div>
    </div>
  )
}