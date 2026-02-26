export default function Footer() {
  return (
    <>
      <style>{`
        :root {
          --footer-bg: #111827;
          --footer-text: #f3f4f6;
          --footer-text-secondary: #9ca3af;
          --footer-border: #1f2937;
          --footer-text-muted: #6b7280;
          --spacing-xs: 0.5rem;
          --spacing-sm: 1rem;
          --spacing-md: 1.5rem;
          --spacing-lg: 2rem;
          --spacing-xl: 3rem;
          --font-size-base: 1rem;
          --font-size-sm: 0.875rem;
          --font-size-xs: 0.75rem;
          --font-size-lg: 1.125rem;
          --font-size-xl: 1.25rem;
        }

        .footer-container {
          background-color: var(--footer-bg);
          color: var(--footer-text);
          padding: var(--spacing-lg) var(--spacing-sm);
        }

        .footer-content {
          max-width: 80rem;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
        }

        .footer-col {
          word-break: break-word;
        }

        .footer-col-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          margin-bottom: var(--spacing-md);
          color: var(--footer-text);
          letter-spacing: 0.5px;
        }

        .footer-col-description {
          font-size: var(--font-size-sm);
          color: var(--footer-text-secondary);
          font-weight: 300;
          line-height: 1.6;
        }

        .footer-col-heading {
          font-weight: 600;
          color: var(--footer-text);
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-sm);
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .footer-link-list li {
          font-size: var(--font-size-xs);
          color: var(--footer-text-secondary);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-link-list li:hover {
          color: var(--footer-text);
        }

        .footer-bottom {
          border-top: 1px solid var(--footer-border);
          padding-top: var(--spacing-lg);
        }

        .footer-copyright {
          font-size: var(--font-size-xs);
          color: var(--footer-text-muted);
          text-align: center;
        }

        /* Tablet Responsive */
        @media (min-width: 640px) {
          :root {
            --spacing-sm: 1.5rem;
            --spacing-lg: 2.5rem;
            --font-size-xs: 0.8125rem;
            --font-size-sm: 0.9375rem;
          }

          .footer-container {
            padding: var(--spacing-lg) var(--spacing-md);
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-xl);
            margin-bottom: var(--spacing-xl);
          }

          .footer-col:first-child {
            grid-column: 1 / -1;
          }

          .footer-col-title {
            font-size: var(--font-size-xl);
          }
        }

        /* Desktop Responsive */
        @media (min-width: 1024px) {
          :root {
            --spacing-sm: 2rem;
            --spacing-lg: 3rem;
            --font-size-xs: 0.825rem;
            --font-size-sm: 1rem;
          }

          .footer-container {
            padding: var(--spacing-lg) var(--spacing-lg);
          }

          .footer-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-xl);
          }

          .footer-col:first-child {
            grid-column: auto;
            padding-right: var(--spacing-lg);
          }

          .footer-col-title {
            font-size: var(--font-size-xl);
          }

          .footer-col-heading {
            font-size: var(--font-size-base);
          }

          .footer-col-description {
            font-size: var(--font-size-sm);
          }

          .footer-link-list li {
            font-size: var(--font-size-sm);
          }
        }

        /* Large Desktop */
        @media (min-width: 1280px) {
          :root {
            --spacing-lg: 4rem;
          }

          .footer-container {
            padding: var(--spacing-lg) var(--spacing-lg);
          }
        }
      `}</style>

      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-col-title">IIT BHU Varanasi</div>
              <p className="footer-col-description">
                Providing modern engineering and science education since 1919.
              </p>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-heading">Admissions</h5>
              <ul className="footer-link-list">
                <li>B.Tech Programs</li>
                <li>M.Tech & M.Pharma</li>
                <li>Ph.D. Programs</li>
                <li>JEE Advanced</li>
              </ul>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-heading">Academics</h5>
              <ul className="footer-link-list">
                <li>Departments</li>
                <li>Library</li>
                <li>Academic Calendar</li>
              </ul>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-heading">Placements</h5>
              <ul className="footer-link-list">
                <li>Placement Cell</li>
                <li>Statistics</li>
                <li>Recruiters</li>
              </ul>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-heading">Campus</h5>
              <ul className="footer-link-list">
                <li>Hostels</li>
                <li>Gymkhana</li>
                <li>Medical Facilities</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2026 Indian Institute of Technology (BHU) Varanasi
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}