import React from 'react'
import Slider from './Slider'

function Testimonials() {
  return (
    <div className='bg-blue-1'>
      <div >
        <div className='py-6 md:py-10 lg:py-16'>
          <div className='pl-5 md:pl-10 lg:pl-36'>
            <p className='text-black font-light text-[10px] md:text-xs lg:text-base  tracking-widest'>TESTIMONIALS</p>
            <h1 className='text-black font-bold text-3xl lg:text-5xl mt-5'>CLIENT SAYS</h1>
          </div>
          <div className='px:4 lg:px-12'>
            <Slider />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Testimonials
