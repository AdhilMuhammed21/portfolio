import React from 'react'
import {CONTACT} from '../Constants/Constants'
import { motion } from "framer-motion"


function Contact() {
  return (
    <motion.div 
    whileInView={{opacity : 1 , y:0}}
    initial={{opacity:0 , y:100}}
    transition={{duration : 0.5,delay:0.7}}
    className='border-b border-neutral-900 pb-20 text-[#CCD0D2]'>
    <h2 className='my-10 text-center text-4xl text-[#CCD0D2] font-bold'>Get in Touch</h2>
    <div className='text-center tracking-tighter'>
    <a href='#' className='borber-b'>{CONTACT.email}</a>

    </div>

      
    </motion.div>
  )
}

export default Contact
