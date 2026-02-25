// components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-on-scroll">
        <h1>Engineering the Future</h1>
        <p>Join a community of innovators building next-gen AI, Cloud, and Web technologies.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-accent" aria-label="Apply Now">Apply Now</a>
          <a href="#courses" className="btn btn-primary" aria-label="Explore Courses">Explore Courses</a>
        </div>
      </div>
    </section>
  );
}