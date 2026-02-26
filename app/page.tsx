'use client'

import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Courses from './components/Courses'
import Placements from './components/Placements'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'main-content',
        'programmes',
        'placements',
        'academics',
        'campus',
        'admissions',
        'news',
      ]

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Hero
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div className="w-full px-4 sm:px-6 md:px-8">
        <Highlights />
        <Courses />
        <Placements />
        <About />
        <Testimonials />
        <Contact />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}