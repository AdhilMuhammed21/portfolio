import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { FaFigma } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { animate, inertia, motion } from "framer-motion"

const iconV = (duration) => ({
  initial:{y:-10},
  animate :{
    y : [10,-10],
    transition : {
      duration : duration,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse"

    },

  },

});

function Stacks() {
  return (
    <motion.div 
    whileInView={{opacity : 1 , y:0}}
    initial={{opacity:0 , y:100}}
    transition={{duration : 0.5,delay:0.6}}
    className='border-b border-neutral-800 pb-24 '>
    <h2 className='my-20 text-center text-4xl text-[#CCD0D2] font-bold'>Technologies</h2>
    <div className='flex flex-wrap items-center justify-center mx-20 gap-4 md:gap-20'>
        <motion.div 
        variants={iconV(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <RiReactjsLine className='text-4xl text-cyan-400'/>
        </motion.div>
        <motion.div
        variants={iconV(4)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <FaFigma  className='text-4xl text-[#CCD0D2]'/>
        </motion.div>
        <motion.div 
        variants={iconV(6)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <FaJsSquare className='text-4xl text-[#E6E20A]'/>
        </motion.div>
        <motion.div
        variants={iconV(2)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <SiAdobephotoshop className='text-4xl text-[#4f76ff]'/>
        </motion.div>
    </div>
    </motion.div>
  )
}

export default Stacks
