import React from 'react'

function About() {
  return (
    
    <div className='bg-dark py-20 lg:py-32'>
      {/*Laptop */}
      <div className='hidden lg:block relative' >
        <div className='flex'>
          <div className='flex-col pl-32 pr-16 w-1/2'>
            <p className='text-white text-base tracking-widest'>ABOUT</p>
            <h1 className='text-white text-5xl font-bold mt-5'>Being Bravas</h1>
            <p className='text-white text-lg font-light mt-8'>No room for uncertainty.</p>
            <p className='text-white text-lg font-light mt-4'>That’s our mantra to be a one-of-a-kind company in the digital space.</p>
          </div>
          <div className='w-1/2'>
            <img src="/assets/images/about/Laptop-1.png" alt="laptop-image" className='cover drop-shadow-blue sticky top-0' />
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
            <img src="/assets/images/about/Laptop-2.png" alt="laptop-image" className='w-[700px] h-[404px] drop-shadow-green' />
          </div>
        </div>
        <p className='text-center text-2xl text-white my-24'>WE ARE <span className='font-bold text-blue-1'>BRAVE,</span> . WE ARE <span className='font-bold text-blue-1'>BRAVOS.</span></p>
      </div>
      {/*Mobiles*/}
      <div className='lg:hidden mx-4 sm:mx-10'>
        <div className='flex flex-col'>
          <div>
            <div className='flex-col pl-4 sm:px-16 '>
              <p className='text-white text-xs sm:text-sm tracking-widest'>ABOUT</p>
              <h1 className='text-white text-2xl sm:text-3xl font-bold mt-2'>Being Bravas</h1>
              <p className='text-white text-xs sm:text-base font-light mt-5'>No room for uncertainty.</p>
              <p className='text-white text-xs sm:text-base font-light mt-4'>That’s our mantra to be a one-of-a-kind company in the digital space.</p>
            </div>
          </div>
          <div className='mt-16 mx-4 sm:mx-10 '>
            <img src="/assets/images/about/laptop.png" alt="laptop-image" className=' drop-shadow-blue' />
          </div>
          <div className='mt-24'>
            <div className='flex-col pl-4 sm:px-16 '>
              <h1 className='text-white text-2xl sm:text-3xl font-bold mt-5'>What  makes us stand out?</h1>
              <p className='text-white text-xs sm:text-base font-light mt-8'>We are creative mavericks who thrive on
              </p>
              <div className='flex flex-row gap-8 my-12'>
                <div className='flex flex-col'>
                  <img src="/assets/images/about/Collaboration.png" alt="" className='h-[46px] w-[46px]' />
                  <p className='text-white text-xs sm:text-base font-bold mt-2 '>Collaboration
                  </p>
                </div>
                <div className='flex flex-col'>
                  <img src="/assets/images/about/Digital-design.png" alt="" className='h-[46px] w-[46px]' />
                  <p className='text-white text-xs sm:text-base font-bold mt-2'>Digital design
                  </p>
                </div>
                <div className='flex flex-col'>
                  <img src="/assets/images/about/Data-insights.png" alt="" className='h-[46px] w-[46px]' />
                  <p className='text-white text-xs sm:text-base font-bold mt-2'>Data insights.
                  </p>
                </div>
              </div>
              <p className='text-white text-xs sm:text-base font-light '>More than your regular dreamers; we are achievers and we work hard & smart to deliver excellence each time.
                We try to go the extra mile because we believe in us.
              </p>
            </div>
          </div>
          <div className='mt-16 mx-4 sm:mx-10 '>
            <img src="/assets/images/about/laptop.png" alt="laptop-image" className=' drop-shadow-green' />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About

