import React from 'react'
import {name,work} from '../Constants/Constants'
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) =>({
  hidden:{y:100 ,opacity : 0 },
  visible:{
    y:0,
    opacity:1,
    transition:{duration: 0.5,delay: delay},
  },
});

function Hero() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center overflow-y-hidden '>
    <motion.div
    variants={container(0.2)}
    initial='hidden'
    animate='visible'
     className='md:border border-[#252525] bg-[#252525] flex flex-col justify-center px-12 md:px-32 py-6'>
    <motion.h1 
    variants={container(0.3)}
    initial='hidden'
    animate='visible'
     className='text-[30px] md:text-[120px] text-[#CCD0D2] font-bold flex'>{name}</motion.h1>
    <motion.p 
    variants={container(0.4)}
    initial='hidden'
    animate='visible'
    className='text-xs md:text-xl flex text-purple-800 '>{work}</motion.p>
  
    </motion.div>

    <motion.div 
    variants={container(0.6)}
    initial='hidden'
    animate='visible'
    className='mt-32  flex flex-row justify-center gap-6 md:gap-20'>

       
       <a 
          href="https://github.com/AdhilMuhammed21" 
          target="_blank" 
          rel="noopener noreferrer"
          className='border border-[#CCD0D2] bg-[#252525] rounded-2xl px-4 py-4'>
          <FaGithub className='text-4xl text-purple-500' />
        </a>

        
        <a 
          href="https://www.instagram.com/_.crown_21._/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className='border border-[#CCD0D2] bg-[#252525] rounded-2xl px-4 py-4'>
          <FaInstagram className='text-4xl text-purple-500' />
        </a>

       
        <a 
          href="https://www.linkedin.com/in/adhil-muhammed-c21/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='border border-[#CCD0D2] bg-[#252525] rounded-2xl px-4 py-4'>
          <FaLinkedin className='text-4xl text-purple-500' />
        </a>
    </motion.div>
    
    
    


    </div>
    
  )
}

export default Hero
