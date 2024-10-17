import React from 'react';
import { motion } from "framer-motion"

function Nav({ scrollToSection, activeSection }) {
  return (
    <div className='hidden md:flex justify-center item-center pt-8 pb-3 h-24 w-screen fixed '>
      <div className='flex text-[#CCD0D2] text-l gap-24 '>
        <h1 
          className={`cursor-pointer border ${activeSection === 'home' ? 'text-purple-400' : 'border-transparent'} bg-[#484545] rounded-full px-6 py-2 pt-3 justify-center items-center`} 
          onClick={() => scrollToSection('home')}
        >
          Home
        </h1>
        <h1 
          className={`cursor-pointer border ${activeSection === 'about' ? 'text-purple-400' : 'border-transparent'} bg-[#484545] rounded-full px-6 py-2 pt-3 justify-center items-center`} 
          onClick={() => scrollToSection('about')}
        >
          About
        </h1>
        <h1 
          className={`cursor-pointer border ${activeSection === 'experience' ? 'text-purple-400' : 'border-transparent'} bg-[#484545] rounded-full px-6 py-2 pt-3 justify-center items-center`} 
          onClick={() => scrollToSection('experience')}
        >
          Experiences
        </h1>
        <h1 
          className={`cursor-pointer border ${activeSection === 'contact' ? 'text-purple-400' : 'border-transparent'} bg-[#484545] rounded-full px-6 py-2 pt-3 justify-center items-center`} 
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </h1>
      </div>
    </div>
  );
}

export default Nav;
