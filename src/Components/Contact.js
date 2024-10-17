import React from 'react'
import {CONTACT} from '../Constants/Constants'


function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20 text-[#CCD0D2]'>
    <h2 className='my-10 text-center text-4xl text-[#CCD0D2] font-bold'>Get in Touch</h2>
    <div className='text-center tracking-tighter'>
    <a href='#' className='borber-b'>{CONTACT.email}</a>

    </div>

      
    </div>
  )
}

export default Contact
