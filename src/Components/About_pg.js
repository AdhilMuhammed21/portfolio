import React from 'react'
import {about} from '../Constants/Constants'
import { motion } from "framer-motion"

function About_pg() {
  return (
    <div className=' h-full w-screen flex flex-col justify-center items-center overflow-y-hidden mt-32 pb-24 lg:px-32'>
    <motion.div 
    whileInView={{opacity : 1 , y:0}}
    initial={{opacity:0 , y:100}}
    transition={{duration : 0.5,delay:0.3}}
    className=' flex flex-col justify-center border border-[#CCD0D2] bg-[#252525]  mx-6 px-6 md:px-32 py-6 '>
        <h2 
        className='text-[#CCD0D2] text-6xl flex flex-col justify-center font-bold pb-6'>About</h2>
        <p className='text-[#CCD0D2] text-md  md:text-2xl'>{about}</p>
    </motion.div>
      
    </div>
  )
}

export default About_pg
