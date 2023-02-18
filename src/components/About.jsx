import React, { useEffect, useState } from 'react'

function About() {

  const [setNewImageURL, setsetNewImageURL] = useState("/assets/images/about/Laptop-1.png")
  function scrollAndResizeEventListener() {
    // For Screen Width >700
    // console.log(window.scrollY);
    if (window.scrollY > 1048) {
      setsetNewImageURL("/assets/images/about/Laptop-2.png");
    } else if (window.scrollY < 1048) {
      setsetNewImageURL("/assets/images/about/Laptop-1.png");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollAndResizeEventListener();
    });
  }, [])
  return (


    
    <div className='bg-dark py-20 lg:py-32 ' id='about'>
      {/*Laptop */}
      <div className='hidden lg:block relative' >
        <div className='flex'>
          <div className='w-1/2'>
            <div className='flex-col mx-auto'>
              <div className='flex h-[600px] py-auto'>
                <div className='flex-col pl-32 pr-16 mt-10'>
                  <p className='text-white text-base mt-10 tracking-widest font-bold'>ABOUT</p>
                  <h1 className='text-white text-5xl font-bold mt-5'>Being Bravas</h1>
                  <p className='text-white text-lg font-light mt-8'>No room for uncertainty.</p>
                  <p className='text-white text-lg font-light mt-4'>That's our mantra to be a one-of-a-kind company in the digital space.</p>
                </div>
              </div>
              <div className='flex h-full py-auto mx-auto '>
                <div className='flex-col pl-32 pr-16  '>
                  <h1 className='text-white text-5xl font-bold mt-5'>What  makes us stand out?</h1>
                  <p className='text-white text-lg font-light mt-8'>We are creative mavericks who thrive on
                  </p>
                  <div className='flex flex-row gap-8 mt-12 mb-12'>
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
                  <p className='text-white text-lg font-light w-[440px] mb-6'>More than your regular dreamers; we are achievers and we work hard & smart to deliver excellence each time.
                    We try to go the extra mile because we believe in us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={setNewImageURL} alt="laptop-image" className='  drop-shadow-blue w-full h-auto sticky top-10' />
          </div>
        </div>
        
        
        <p className='text-center text-5xl text-white my-24'>WE ARE <span className='font-bold text-blue-1'>BRAVE.</span>  WE ARE <span className='font-bold text-blue-1'>BRAVAS.</span></p>
      </div>
      {/*Mobiles*/}
      <div className='lg:hidden mx-4 sm:mx-10'>
        <div className='flex flex-col'>
          <div>
            <div className='flex-col pl-4 sm:px-16 '>
              <p className='text-white text-xs sm:text-sm tracking-widest font-bold'>ABOUT</p>
              <h1 className='text-white text-2xl sm:text-3xl font-bold mt-2'>Being Bravas</h1>
              <p className='text-white text-xs sm:text-base font-light mt-5'>No room for uncertainty.</p>
              <p className='text-white text-xs sm:text-base font-light mt-4'>That’s our mantra to be a one-of-a-kind company in the digital space.</p>
            </div>
          </div>
          <div className='mt-16 mx-4 sm:mx-10 '>
            <img src="/assets/images/about/Laptop-1.png" alt="laptop-image" className=' drop-shadow-blue' />
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
            <img src="/assets/images/about/Laptop-2.png" alt="laptop-image" className=' drop-shadow-green' />
          </div>
        </div>
        <p className='text-center text-xl md:text-2xl text-white mt-12'>WE ARE <span className='font-bold text-blue-1'>BRAVE.</span>  WE ARE <span className='font-bold text-blue-1'>BRAVAS.</span></p>

      </div>
      
    </div>
  )
}

export default About

