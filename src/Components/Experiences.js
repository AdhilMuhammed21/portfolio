import React from 'react'
import {EXPERIENCE} from '../Constants/Constants'

function Experiences() {
  return (
    <div className='h-3/4 border-b border-transparent pb-4 '>
    <h2 className='my-20 text-center text-4xl text-[#CCD0D2] font-bold'>Experiences</h2>
    <div>
        {EXPERIENCE.map((experience , index )=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center text-[#CCD0D2] px-6'>
            <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-[#CCD0D2]'>{experience.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semi-bold'>
                    {experience.role}-<span className='text-[#CCD0D2]'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-500'>{experience.description} </p>
                {experience.technologies.map((tech,index)=>(
                    <span key={index} className='mr-2 mt-4 rounded bg-[#252525] px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>
                ))}

            </div>

            </div>
        ))}
    </div>
      
    </div>
  )
}

export default Experiences
