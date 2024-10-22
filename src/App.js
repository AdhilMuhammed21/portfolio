import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About_pg from './Components/About_pg';
import Stacks from './Components/Stacks';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    contact: contactRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs);
      let currentSection = 'home';

      sections.forEach(section => {
        const sectionTop = sectionRefs[section].current.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col bg-[#1E1E1E] overflow-x-hidden'>
      <Nav scrollToSection={scrollToSection} activeSection={activeSection} />
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About_pg />
      </div>
      <div ref={experienceRef}>
        <Experiences />
      </div>
      <Stacks />
      <Projects/>
      <div ref={contactRef}>
       <Contact/>
      </div>

    </div>
  );
}

export default App;
