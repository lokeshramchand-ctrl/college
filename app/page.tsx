"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, easeInOut } from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  MapPin, 
  Minus, 
  Plus, 
  MoveUpRight 
} from "lucide-react";

export default function MinimalCollegeSPA() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Custom snappy ease for Framer Motion
  const easePremium = [0.22, 1, 0.36, 1];

  // GSAP Strict Mask Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.to(".reveal-cover", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        stagger: 0.1,
        delay: 0.2
      })
      .from(".nav-border", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1
      }, "-=0.8")
      .from(".fade-up", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.6");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium as any } }
  };

  const staggerWrap = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <div className="min-app">
      {/* Strict Minimal Navbar */}
      <nav className="min-nav">
        <div className="nav-container fade-up">
          <div className="nav-logo">
            <span className="logo-mark"></span>
            PRAGYAN
          </div>
          <div className="nav-links">
            {["About", "Courses", "Highlights", "Fees", "Placements"].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="nav-link group">
                {item}
                <span className="link-underline"></span>
              </button>
            ))}
          </div>
        </div>
        <div className="nav-border"></div>
      </nav>

      {/* Hero: Mask Reveal Animation */}
      <section className="min-hero" ref={heroRef}>
        <div className="hero-grid">
          <div className="hero-text-block">
            <h1 className="title-huge">
              <div className="mask-wrap">
                <span className="mask-text">Absolute</span>
                <div className="reveal-cover"></div>
              </div>
              <div className="mask-wrap">
                <span className="mask-text accent-color">Excellence.</span>
                <div className="reveal-cover"></div>
              </div>
            </h1>
            <p className="hero-sub fade-up">
              Pragyan Institute of Technology. A brutalist approach to modern engineering, computer science, and design education in the heart of Chennai.
            </p>
            <div className="fade-up">
              <motion.button 
                whileHover={{ backgroundColor: "#000", color: "#fff", paddingLeft: "2.5rem", paddingRight: "1.5rem" }}
                transition={{ duration: 0.4, ease: easePremium }}
                className="btn-solid"
                onClick={() => scrollTo("courses")}
              >
                View Programs <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
          <div className="hero-visual fade-up">
             {/* Abstract minimal geometry replacing an image */}
             <div className="geo-shape"></div>
          </div>
        </div>
      </section>

      {/* Section 01: About */}
      <section id="about" className="min-section border-top">
        <motion.div className="section-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerWrap}>
          <motion.div variants={slideUp} className="section-label">
            [ 01 ] ABOUT THE INSTITUTE
          </motion.div>
          <div className="section-content">
            <motion.h2 variants={slideUp} className="title-large mb-4">
              Stripping away the noise to focus on pure innovation.
            </motion.h2>
            <motion.p variants={slideUp} className="text-body mb-4">
              Established in 2012, Pragyan operates on a singular philosophy: strict, unadulterated focus on practical engineering. We do not believe in superficial amenities; we believe in 24/7 access to industrial-grade laboratories, rigorous mathematics, and raw code.
            </motion.p>
            
            <div className="stats-row">
              {[
                { num: "01", label: "Ranked Private Institute in TN" },
                { num: "40+", label: "Dedicated Research Labs" },
                { num: "12k", label: "Alumni Network" }
              ].map((stat, i) => (
                <motion.div key={i} variants={slideUp} className="stat-item">
                  <h3>{stat.num}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 02: Courses (Invert Hover Cards) */}
      <section id="courses" className="min-section border-top">
        <motion.div className="section-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap}>
          <motion.div variants={slideUp} className="section-label">
            [ 02 ] ACADEMIC TRACKS
          </motion.div>
          <div className="section-content w-full">
            <div className="cards-minimal">
              {[
                { title: "Computer Science", code: "CS-401", duration: "4 Yrs", seats: "120" },
                { title: "Artificial Intelligence", code: "AI-402", duration: "4 Yrs", seats: "60" },
                { title: "Robotics & Automation", code: "RA-403", duration: "4 Yrs", seats: "60" },
                { title: "Data Architecture", code: "DA-501", duration: "2 Yrs", seats: "30" }
              ].map((course, i) => (
                <motion.div 
                  key={i} 
                  variants={slideUp}
                  whileHover={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
                  transition={{ duration: 0.3, ease: easePremium }}
                  className="card-strict"
                >
                  <div className="card-top">
                    <span className="card-code">{course.code}</span>
                    <MoveUpRight size={20} className="card-arrow" />
                  </div>
                  <h3>{course.title}</h3>
                  <div className="card-bottom">
                    <span>{course.duration}</span>
                    <span>Intake: {course.seats}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 03: Highlights (Accordion style interactions) */}
      <section id="highlights" className="min-section border-top">
        <motion.div className="section-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap}>
          <motion.div variants={slideUp} className="section-label">
            [ 03 ] INFRASTRUCTURE
          </motion.div>
          <div className="section-content w-full">
            <div className="list-strict">
              {[
                { title: "Quantum Computing Grid", desc: "Partnership with IBM to provide underground access to a 5-qubit quantum processor." },
                { title: "Minimalist MakerSpace", desc: "A 10,000 sq ft concrete hall equipped purely with CNC machines, 3D printers, and soldering stations." },
                { title: "Zero-Distraction Library", desc: "Digital-only. No physical books. Terminals connected to global research databases." }
              ].map((hl, i) => (
                <motion.div 
                  key={i} 
                  variants={slideUp} 
                  whileHover="hover"
                  initial="rest"
                  className="list-item"
                >
                  <motion.div 
                    variants={{ rest: { width: 0 }, hover: { width: "8px" } }} 
                    transition={{ duration: 0.3, ease: easePremium }}
                    className="list-indicator"
                  />
                  <div className="list-text">
                    <h4>{hl.title}</h4>
                    <p>{hl.desc}</p>
                  </div>
                  <Plus size={24} className="list-icon" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 04: Fees (Data Table) */}
      <section id="fees" className="min-section border-top">
        <motion.div className="section-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap}>
          <motion.div variants={slideUp} className="section-label">
            [ 04 ] TARIFF 2026
          </motion.div>
          <div className="section-content w-full">
            <motion.table variants={slideUp} className="table-strict">
              <thead>
                <tr>
                  <th>PROGRAM</th>
                  <th>TUITION (INR)</th>
                  <th>MAINTENANCE (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>B.Tech Core (CS/AI/Robotics)</td><td>3,00,000 / Yr</td><td>80,000 / Yr</td></tr>
                <tr><td>M.Tech (Data Arch.)</td><td>2,20,000 / Yr</td><td>80,000 / Yr</td></tr>
                <tr><td>Ph.D Programs</td><td>Fully Funded</td><td>-</td></tr>
              </tbody>
            </motion.table>
          </div>
        </motion.div>
      </section>

      {/* Section 05: Placements */}
      <section id="placements" className="min-section border-top bg-black text-white">
        <motion.div className="section-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap}>
          <motion.div variants={slideUp} className="section-label text-gray">
            [ 05 ] CAREER YIELD
          </motion.div>
          <div className="section-content">
            <motion.h2 variants={slideUp} className="title-massive">
              ₹58.2<span className="text-small">LPA</span>
            </motion.h2>
            <motion.p variants={slideUp} className="text-body text-gray mb-4">
              Peak compensation recorded in the 2025 cohort, secured in a core engineering role. Average yield sits strictly at ₹14.5 LPA.
            </motion.p>
            
            <motion.div variants={slideUp} className="tags-container mt-4">
              {["Zomato", "Stripe", "Postman", "Razorpay", "Directi", "Atlassian", "Zerodha"].map(company => (
                <span key={company} className="tag-solid">{company}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="min-footer border-top">
        <div className="footer-grid">
          <div>
            <div className="nav-logo mb-2">
              <span className="logo-mark"></span> PRAGYAN
            </div>
            <p className="text-small text-gray">© 2026 Pragyan Institute of Technology.<br/>All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Admissions</a>
            <a href="#">Faculty Directory</a>
            <a href="#">Research Papers</a>
            <a href="#">Contact Registrar</a>
          </div>
        </div>
      </footer>

      {/* STRICT VANILLA CSS - No Gradients, No Soft Shadows */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');

        :root {
          --black: #0a0a0a;
          --white: #ffffff;
          --gray-light: #f4f4f5;
          --gray-mid: #a1a1aa;
          --gray-dark: #52525b;
          --accent: #2563eb; /* Solid crisp blue */
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Manrope', sans-serif;
        }

        body {
          background-color: var(--white);
          color: var(--black);
          -webkit-font-smoothing: antialiased;
        }

        /* Typography */
        .title-huge { font-size: clamp(4rem, 10vw, 8rem); font-weight: 800; line-height: 0.9; letter-spacing: -0.04em; margin-bottom: 2rem; }
        .title-large { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
        .title-massive { font-size: clamp(5rem, 12vw, 10rem); font-weight: 800; line-height: 1; letter-spacing: -0.05em; }
        .text-body { font-size: 1.125rem; line-height: 1.6; font-weight: 400; max-width: 600px; }
        .text-small { font-size: 1rem; font-weight: 500; letter-spacing: 0; }
        .text-gray { color: var(--gray-mid); }
        .mb-4 { margin-bottom: 2rem; }
        .mt-4 { margin-top: 2rem; }
        .w-full { width: 100%; }

        /* Utilities */
        .border-top { border-top: 1px solid var(--black); }
        .bg-black { background-color: var(--black); }
        .text-white { color: var(--white); }
        .accent-color { color: var(--accent); }

        /* Navbar */
        .min-nav { position: fixed; top: 0; width: 100%; z-index: 100; background: var(--white); }
        .nav-container { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 4vw; }
        .nav-logo { display: flex; align-items: center; gap: 0.75rem; font-weight: 800; font-size: 1.25rem; letter-spacing: -0.02em; }
        .logo-mark { width: 16px; height: 16px; background: var(--accent); display: inline-block; }
        .nav-links { display: flex; gap: 2.5rem; }
        .nav-link { background: none; border: none; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; cursor: pointer; position: relative; padding: 0.5rem 0; color: var(--black); }
        .link-underline { position: absolute; bottom: 0; left: 0; width: 0%; height: 2px; background: var(--black); transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .nav-link:hover .link-underline { width: 100%; }
        .nav-border { height: 1px; width: 100%; background: var(--black); }

        /* Hero */
        .min-hero { padding: 12rem 4vw 6rem; min-height: 100vh; display: flex; align-items: center; }
        .hero-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; width: 100%; }
        .mask-wrap { position: relative; overflow: hidden; display: inline-block; width: 100%; }
        .mask-text { display: block; }
        .reveal-cover { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--black); z-index: 2; }
        .hero-sub { margin-bottom: 3rem; font-size: 1.25rem; font-weight: 500; color: var(--gray-dark); max-width: 500px; }
        
        .btn-solid {
          display: inline-flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem;
          background: transparent; color: var(--black); border: 2px solid var(--black);
          font-size: 0.95rem; font-weight: 700; text-transform: uppercase; cursor: pointer;
        }

        .hero-visual { display: flex; justify-content: flex-end; align-items: center; }
        .geo-shape { width: 100%; aspect-ratio: 4/5; background: var(--gray-light); position: relative; overflow: hidden; }
        .geo-shape::after { content: ''; position: absolute; bottom: 0; right: 0; width: 50%; height: 50%; background: var(--accent); }

        /* Sections */
        .min-section { padding: 6rem 4vw; }
        .section-grid { display: grid; grid-template-columns: 300px 1fr; gap: 4rem; }
        .section-label { font-size: 0.85rem; font-weight: 700; letter-spacing: 0.05em; color: var(--gray-dark); margin-top: 0.5rem; }

        /* About Stats */
        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 4rem; border-top: 1px solid #e4e4e7; padding-top: 2rem; }
        .stat-item h3 { font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 0.5rem; }
        .stat-item p { font-size: 0.9rem; color: var(--gray-dark); font-weight: 500; }

        /* Course Cards */
        .cards-minimal { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .card-strict { border: 1px solid var(--black); padding: 2rem; display: flex; flex-direction: column; cursor: pointer; background: var(--white); }
        .card-top { display: flex; justify-content: space-between; margin-bottom: 3rem; }
        .card-code { font-family: monospace; font-size: 0.9rem; font-weight: 600; }
        .card-strict h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem; flex-grow: 1; }
        .card-bottom { display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; border-top: 1px solid currentColor; padding-top: 1rem; }

        /* Highlights List */
        .list-strict { display: flex; flex-direction: column; }
        .list-item { display: flex; align-items: flex-start; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid var(--black); cursor: pointer; position: relative; }
        .list-item:first-child { border-top: 1px solid var(--black); }
        .list-indicator { width: 0px; height: 100%; position: absolute; left: 0; top: 0; background: var(--accent); }
        .list-text { flex-grow: 1; padding-left: 1rem; }
        .list-text h4 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
        .list-text p { color: var(--gray-dark); max-width: 600px; font-size: 1rem; }
        .list-icon { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .list-item:hover .list-icon { transform: rotate(90deg); }

        /* Table Strict */
        .table-strict { width: 100%; border-collapse: collapse; text-align: left; }
        .table-strict th { font-size: 0.85rem; font-weight: 700; color: var(--gray-dark); border-bottom: 2px solid var(--black); padding: 1rem 0; }
        .table-strict td { padding: 1.5rem 0; border-bottom: 1px solid #e4e4e7; font-size: 1.1rem; font-weight: 600; }

        /* Placements */
        .tags-container { display: flex; flex-wrap: wrap; gap: 1rem; }
        .tag-solid { padding: 0.75rem 1.5rem; border: 1px solid var(--gray-dark); font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }

        /* Footer */
        .min-footer { padding: 4rem 4vw; background: var(--white); }
        .footer-grid { display: flex; justify-content: space-between; align-items: flex-end; }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a { color: var(--black); text-decoration: none; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; }
        .footer-links a:hover { color: var(--accent); }

        /* Responsive */
        @media (max-width: 1024px) {
          .section-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-visual { display: none; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .cards-minimal { grid-template-columns: 1fr; }
          .stats-row { grid-template-columns: 1fr; gap: 1.5rem; }
          .footer-grid { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .footer-links { flex-direction: column; gap: 1rem; }
        }
      `}} />
    </div>
  );
}