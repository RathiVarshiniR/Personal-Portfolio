import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import GithubStats from '../components/GithubStats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolioTheme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolioTheme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar theme={theme} onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
