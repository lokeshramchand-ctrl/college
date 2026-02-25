import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Courses from '../components/Courses';
import Fees from '../components/Fees';
import Placements from '../components/Placements';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Highlights />
      <Courses />
      <Fees />
      <Placements />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}