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
    <>
      <style>{`
        :root {
          --hero-height: 90vh;
          --hero-min-height: 600px;
          --padding-horizontal: 1rem;
          --padding-top: 1.5rem;
          --font-size-h1: 1.875rem;
          --font-size-p: 0.875rem;
          --navbar-padding: 1.5rem;
          --gap-nav: 1rem;
        }

        .hero {
          position: relative;
          height: var(--hero-height);
          min-height: var(--hero-min-height);
          display: flex;
          flex-direction: column;
          color: white;
          overflow: hidden;
        }

        @keyframes panZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), 
            url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80') center/cover;
          z-index: 0;
          animation: panZoom 18s ease-out forwards;
          display: none;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: #000;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          padding: var(--navbar-padding);
          align-items: flex-start;
          position: relative;
        }

        .logo {
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s;
        }

        .logo:hover {
          color: #4facfe;
        }

        .nav-menu {
          display: none;
          gap: var(--gap-nav);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-menu a {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
          transition: 0.3s;
          cursor: pointer;
        }

        .nav-menu a.active {
          border-bottom-color: #4facfe;
          color: #4facfe;
        }

        /* MOBILE MENU */
        .mobile-menu-toggle {
          display: block;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
        }

        .mobile-nav-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(20, 21, 23, 0.95);
          flex-direction: column;
          padding-top: 5rem;
          gap: 1rem;
          padding-left: 2rem;
        }

        .mobile-nav-menu.open {
          display: flex;
        }

        .mobile-nav-menu a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          padding: 0.75rem 0;
          cursor: pointer;
          transition: color 0.3s;
        }

        .mobile-nav-menu a.active {
          color: #4facfe;
        }

        /* HERO TEXT */
        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 var(--padding-horizontal);
          max-width: 100%;
        }

        .hero-content h1 {
          font-size: var(--font-size-h1);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          font-weight: bold;
          word-wrap: break-word;
        }

        .hero-content p {
          font-size: var(--font-size-p);
          opacity: 0.9;
          margin-bottom: 1.5rem;
          max-width: 90%;
          word-wrap: break-word;
          line-height: 1.5;
        }

        /* TABLET RESPONSIVE (640px+) */
        @media (min-width: 640px) {
          :root {
            --padding-horizontal: 1.5rem;
            --navbar-padding: 1.5rem 2rem;
            --font-size-h1: 2.25rem;
            --font-size-p: 1rem;
            --gap-nav: 1.5rem;
          }

          .hero-content {
            max-width: 95%;
          }

          .hero-content h1 {
            line-height: 1.3;
          }
        }

        /* LAPTOP RESPONSIVE (768px+) */
        @media (min-width: 768px) {
          :root {
            --padding-horizontal: 3rem;
            --navbar-padding: 2rem 4rem;
            --font-size-h1: 3rem;
            --font-size-p: 1.1rem;
            --gap-nav: 2rem;
          }

          .hero-bg {
            display: block;
          }

          .hero-content-wrapper {
            background-color: transparent;
          }

          .navbar {
            padding: var(--navbar-padding);
          }

          .logo {
            font-size: 1.1rem;
          }

          .nav-menu {
            display: flex;
          }

          .mobile-menu-toggle {
            display: none;
          }

          .mobile-nav-menu {
            display: none !important;
          }

          .hero-content {
            padding: 0 var(--padding-horizontal);
            max-width: 900px;
          }

          .hero-content h1 {
            font-size: var(--font-size-h1);
            line-height: 1.05;
            margin-bottom: 2rem;
          }

          .hero-content p {
            font-size: var(--font-size-p);
            margin-bottom: 2rem;
            max-width: 100%;
          }
        }

        /* LARGE DESKTOP (1024px+) */
        @media (min-width: 1024px) {
          :root {
            --padding-horizontal: 4rem;
            --font-size-h1: 4rem;
          }

          .hero-content h1 {
            font-size: var(--font-size-h1);
          }
        }
      `}</style>

      <div className="hero" id="home">
        <div className="hero-bg" />

        <div className="hero-content-wrapper">
          <nav className="navbar">
            <div 
              className="logo" 
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
                  className={activeSection === id ? 'active' : ''}
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
          </div>
        </div>
      </div>
    </>
  )
}