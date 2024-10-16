import React from 'react'

function Nav() {
  return (
    <div className='hidden md:flex justify-center item-center pt-8 pb-3  h-24 w-screen '>
    <div className='flex text-[#CCD0D2] text-l gap-24 border border-[#484545] bg[#484545] rounded-full px-4 py-2'>
    <h1 className='border border-[#484545] bg-[#484545]  rounded-full px-2 py-1'>Home</h1>
    <h1 className='border border-[#484545] bg-[#484545]  rounded-full px-2 py-1' >About</h1>
    <h1 className='border border-[#484545] bg-[#484545]  rounded-full px-2 py-1' >Experience</h1>
    <h1 className='border border-[#484545] bg-[#484545]  rounded-full px-2 py-1' >Contact</h1>

    </div>
    <div>

    </div>
      
    </div>
  )
}

export default Nav
