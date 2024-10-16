import React from 'react'
import {name,work} from '../Constants/Conatants'
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Hero() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center overflow-y-hidden '>
    <div className='md:border border-[#252525] bg-[#252525] flex flex-col justify-center px-32 py-6'>
    <h1 className='text-[30px] md:text-[120px] text-[#CCD0D2] font-bold flex'>{name}</h1>
    <p className='text-xs md:text-xl flex text-[#CCD0D2] '>{work}</p>
  
    </div>

    <div className='mt-32  flex flex-row justify-center gap-20'>

        <div className=' border border-[#CCD0D2] bg-[#252525] rounded-2xl  px-6 py-4'>
        <FaGithub className='text-4xl text-[#CCD0D2]'/>
        </div>
        <div className='  border border-[#CCD0D2] bg-[#252525] rounded-2xl  px-6 py-4'>
        <FaInstagram className='text-4xl text-[#CCD0D2]'/>
        </div>
        <div className='  border border-[#CCD0D2] bg-[#252525] rounded-2xl  px-6 py-4'>
        <FaLinkedin className='text-4xl text-[#CCD0D2]'/>
        </div>
    </div>
    
    
    


    </div>
    
  )
}

export default Hero
