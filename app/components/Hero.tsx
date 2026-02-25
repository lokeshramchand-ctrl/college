'use client';

import React, { useState } from 'react';
import '../styles/hero.css';

interface HeroProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Hero({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }: HeroProps) {
  return (
    <div className="hero" role="banner" id="home">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-content-wrapper">
        <nav className="navbar" aria-label="Main navigation">
          <div 
            className="logo" 
            role="heading" 
            aria-level={1} 
            onClick={() => scrollToSection('home')} 
            style={{ cursor: 'pointer' }}
          >
            IIT BHU Varanasi
          </div>

          {/* Desktop Navigation Menu */}
          <div className="nav-menu">
            {['About', 'Programmes', 'Academics', 'Placements', 'Campus', 'Admissions', 'News'].map((item) => {
              const sectionId = {
                'About': 'main-content',
                'Programmes': 'programmes',
                'Academics': 'academics',
                'Placements': 'placements',
                'Campus': 'campus',
                'Admissions': 'admissions',
                'News': 'news'
              }[item];
              
              return (
                <a 
                  key={item}
                  onClick={() => scrollToSection(sectionId || item.toLowerCase())}
                  className={activeSection === sectionId ? 'active' : ''}
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Mobile Navigation Menu */}
          <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {['About', 'Programmes', 'Academics', 'Placements', 'Campus', 'Admissions', 'News'].map((item) => {
              const sectionId = {
                'About': 'main-content',
                'Programmes': 'programmes',
                'Academics': 'academics',
                'Placements': 'placements',
                'Campus': 'campus',
                'Admissions': 'admissions',
                'News': 'news'
              }[item];
              
              return (
                <a 
                  key={item}
                  onClick={() => scrollToSection(sectionId || item.toLowerCase())}
                  className={activeSection === sectionId ? 'active' : ''}
                >
                  {item}
                </a>
              );
            })}
          </div>
          
          {/* Animated Expanding News Pill */}
          <div className="news-widget-wrapper">
            <div className="news-widget">
              <div className="news-collapsed">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="News Avatar" 
                  className="news-avatar" 
                />
                <span className="news-collapsed-text">Rankings: IIT BHU ranks 10th in NIRF 2025...</span>
              </div>

              <div className="news-expanded">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="News Thumbnail" 
                  className="news-expanded-img" 
                />
                <div className="news-expanded-details">
                  <div className="news-expanded-tag">Rankings</div>
                  <div className="news-expanded-headline">IIT BHU secures 10th rank under the 'Engineering' category in NIRF 2025.</div>
                  <div className="news-expanded-footer">
                    <span className="news-expanded-link">Read more</span>
                    <div className="news-controls">
                      <button aria-label="Previous news">←</button>
                      <button aria-label="Next news">→</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="hero-content">
          <h1>Excellence in Engineering<br />& Research</h1>
          <p>Established in 1919, the Indian Institute of Technology (BHU) is one of India's premium public institutions, located within a 1300-acre campus featuring exemplary Indo-Gothic architecture.</p>
          <button className="btn" aria-label="Download IIT BHU brochure">Download Brochure →</button>
        </div>
      </div>
    </div>
  );
}
