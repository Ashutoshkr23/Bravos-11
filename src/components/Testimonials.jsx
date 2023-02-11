import React from 'react'
import TestimonialComp from './TestimonialComp'

function Testimonials() {
  return (
    <div className='bg-blue-1'>
        <div className='py-16'>
              <div className='pl-36'>
                  <p className='text-black font-light text-base  tracking-widest'>TESTIMONIALS</p>
                  <h1 className='text-black font-bold text-5xl mt-5'>CLIENT SAYS</h1>
              </div>
              <div className='px-32'>
                  <TestimonialComp />
              </div>
        </div>
    </div>
  )
}

export default Testimonials
