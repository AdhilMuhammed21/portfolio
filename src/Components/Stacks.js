import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { FaFigma } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

function Stacks() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
    <h2 className='my-20 text-center text-4xl text-[#CCD0D2] font-bold'>Technologies</h2>
    <div className='flex flex-wrap items-center justify-center mx-16 gap-4 md:gap-20'>
        <div className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <RiReactjsLine className='text-4xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <FaFigma  className='text-4xl text-[#CCD0D2]'/>
        </div>
        <div className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <FaJsSquare className='text-4xl text-[#E6E20A]'/>
        </div>
        <div className='rounded-2xl border-4 border-[#CCD0D2] p-4'>
        <SiAdobephotoshop className='text-4xl text-[#4f76ff]'/>
        </div>
    </div>
    </div>
  )
}

export default Stacks
