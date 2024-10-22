import React from 'react'
import { PROJECTS } from '../Constants/Constants'
import { motion } from "framer-motion"

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity : 1 , y:0}}
      initial={{opacity:0 , y:100}}
      transition={{duration : 0.5,delay:0.4}}
      className='my-20 text-center text-[#CCD0D2] font-bold text-4xl'>Projects</motion.h1>
      <motion.div
      whileInView={{opacity : 1 , y:0}}
      initial={{opacity:0 , y:100}}
      transition={{duration : 0.5,delay:0.4}}
      >
        {PROJECTS.map((project , index)=>(
          <div key={index}className='mb-8 flex flex-wrap lg:justify-center px-8' >
            <div className='w-full lg:w-1/4'>
              <h2 className='text-[#CCD0D2] text-bold pb-2'>{project.title}</h2>
            </div>
            <div className='w-full max-x-wl lg:w-3/4'>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech,index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>
              ))}
            </div>
          </div>

        )
        )}
      </motion.div>
    </div>
  )
}

export default Projects
