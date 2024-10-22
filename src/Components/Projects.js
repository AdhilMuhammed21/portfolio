import React from 'react'
import { PROJECTS } from '../Constants/Constants'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-[#CCD0D2] font-bold text-4xl'>Projects</h1>
      <div>
        {PROJECTS.map((project , index)=>(
          <div key={index}className='mb-8 flex flex-wrap lg:justify-center px-6' >
            <div className='w-full lg:w-1/4'>
              <h2 className='text-[#CCD0D2]'>{project.title}</h2>
            </div>
            <div className='w-full max-x-wl lg:w-3/4'>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
            </div>
          </div>

        )
        )}
      </div>
    </div>
  )
}

export default Projects
