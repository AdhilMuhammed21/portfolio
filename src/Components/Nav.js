import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

function Nav({ scrollToSection, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <div className='hidden md:flex justify-center item-center pt-8 pb-3 h-24 w-screen fixed z-30'>
        <div className='flex text-[#CCD0D2] text-l gap-24'>
          {['home', 'about', 'experience', 'contact'].map(section => (
            <h1 
              key={section}
              className={`cursor-pointer border ${activeSection === section ? 'text-purple-400' : 'border-transparent'} bg-[#484545] rounded-full px-6 py-2 pt-3 justify-center items-center`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </h1>
          ))}
        </div>
      </div>

      
      <div className="md:hidden flex justify-end items-center pt-8 pb-3 px-6 h-24 w-screen fixed z-40">
        
        <div onClick={toggleMenu} className="text-3xl cursor-pointer text-[#CCD0D2]">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? '0%' : '100%' }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 h-full w-3/4 bg-[#484545] flex flex-col items-center justify-center text-white z-50`} 
        >
          
          <div className="absolute top-5 right-5 text-3xl text-[#CCD0D2] cursor-pointer">
            <AiOutlineClose onClick={toggleMenu} />
          </div>

          
          {['home', 'about', 'experience', 'contact'].map(section => (
            <h1
              key={section}
              className={`cursor-pointer text-2xl py-4 ${activeSection === section ? 'text-purple-400' : 'text-[#CCD0D2]'}`}
              onClick={() => {
                scrollToSection(section);
                toggleMenu(); 
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Nav;
