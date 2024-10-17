import React from 'react'
import {about} from '../Constants/Conatants'

function About_pg() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center overflow-y-hidden'>
    <div className='md:border border-[#CCD0D2] bg-[#252525] flex flex-col justify-center md: py-6 mx-8'>
        <h2 className='text-[#CCD0D2] text-6xl flex flex-col justify-center font-bold pb-6'>About</h2>
        <p className='text-[#CCD0D2] text-md  md:text-2xl'>{about}</p>
    </div>
      
    </div>
  )
}

export default About_pg
