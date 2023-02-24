import React from 'react'
import Slider from './Slider'

function Testimonials() {
  const divStyle = {
    backgroundImage: 'url(./assets/images/testimonial/Testimonial-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className='' id='testimonials' style={divStyle}>
      <img src="/assets/images/testimonial/Comma-up.png" alt="comma" className='absolute w-1/4 ' />
      <div >
        <div className='py-6 md:pt-10 lg:pt-16'>
          <div className='pl-5 md:pl-10 lg:pl-36 relative'>
            <p className='text-black font-light text-[10px]  md:text-xs opacity-60 lg:text-base  tracking-widest'>TESTIMONIALS</p>
            <h1 className='text-black font-bold  text-3xl lg:text-5xl mt-5'>CLIENT SAYS</h1>
          </div>
          <div className='px:4 lg:px-12 mb-4'>
            <Slider />
          </div> 
        </div>
        <div className='flex justify-end'>
          <img src="/assets/images/testimonial/Comma-down.png" alt="comma" className=' w-1/4 ' />
        </div>
      </div> 
    </div>
  )
}

export default Testimonials
