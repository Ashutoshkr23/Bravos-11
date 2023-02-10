import React from 'react'

function About() {
  return (
    <div className='bg-dark py-32'>
      <div className='flex'>
        <div className='flex-col pl-32 pr-16 w-1/2'>
          <p className='text-white text-base tracking-widest'>ABOUT</p>
          <h1 className='text-white text-5xl font-bold mt-5'>Being Bravas</h1>
          <p className='text-white text-lg font-light mt-8'>No room for uncertainty.</p>
          <p className='text-white text-lg font-light mt-4'>That’s our mantra to be a one-of-a-kind company in the digital space.</p>
        </div>
        <div>
          <img src="/assets/images/about/laptop.png" alt="laptop-image" className='w-[700px] h-[404px] drop-shadow-blue' />
        </div>

      </div>
      <div className='flex mt-20'>
        <div className='flex-col pl-32 pr-16 w-1/2 '>
          <h1 className='text-white text-5xl font-bold mt-5'>What  makes us stand out?</h1>
          <p className='text-white text-lg font-light mt-8'>We are creative mavericks who thrive on
          </p>
          <div className='flex flex-row gap-8 my-12'>
            <div className='flex flex-col'>
              <img src="/assets/images/about/Collaboration.png" alt="" className='h-[46px] w-[46px]' />
              <p className='text-white text-lg font-bold mt-2 '>Collaboration
              </p>
            </div>
            <div className='flex flex-col'>
              <img src="/assets/images/about/Digital-design.png" alt="" className='h-[46px] w-[46px]' />
              <p className='text-white text-lg font-bold mt-2'>Digital design
              </p>
            </div>
            <div className='flex flex-col'>
              <img src="/assets/images/about/Data-insights.png" alt="" className='h-[46px] w-[46px]' />
              <p className='text-white text-lg font-bold mt-2'>Data insights.
              </p>
            </div>
          </div>
          <p className='text-white text-lg font-light w-[440px]'>More than your regular dreamers; we are achievers and we work hard & smart to deliver excellence each time.
            We try to go the extra mile because we believe in us.
            </p>
        </div>
        <div>
          <img src="/assets/images/about/laptop.png" alt="laptop-image" className='w-[700px] h-[404px] drop-shadow-green' />
        </div>
      </div>
      <p className='text-center text-2xl text-white my-24'>WE ARE <span className='font-bold text-blue-1'>BRAVE,</span> . WE ARE <span className='font-bold text-blue-1'>BRAVOS.</span></p>
    </div>
  )
}

export default About

