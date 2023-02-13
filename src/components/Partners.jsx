import React from 'react'

function Partners() {
  return (
    <div className='px-28 py-28 bg-dark'>
      {/*Laptop */}
      <div className='hidden lg;block'></div>
      {/*Mobiles*/}
      <div className='lg:hidden'></div>
      <p className='text-white font-light text-base  tracking-widest'>WORK</p>
      <h1 className='text-white font-bold text-5xl mt-5'>PARTNERS IN PROGRESS</h1>
      <div className='flex flex-row gap-44 justify-center'>
        <div>
          <div className='mt-20 h-[421px] w-[325px] bg-white rounded-md pt-10 '>
            <img src="/assets/images/partner/CC.png" alt="CC" className='mx-auto h-[147px] w-[147px]' />
            <h3 className='mt-14 text-center font-bold text-lg px-16'>CUSTOMER CONNECTIONS</h3>
            <div className='flex justify-center'>
              <button className='mt-10 bg-blue-1 w-32 h-12 rounded-sm text-black text-base text-center tracking-widest drop-shadow-button'>VIEW</button>
            </div>
          </div>
        </div>
        <div>
          <div className='mt-20 h-[421px] w-[325px] bg-white rounded-md pt-10 '>
            <img src="/assets/images/partner/BAB.png" alt="CC" className='mx-auto h-[147px] w-[147px]' />
            <h3 className='mt-14 text-center font-bold text-lg px-16'>BUISNESS AND BEYOND</h3>
            <div className='flex justify-center'>
              <button className='mt-10 bg-blue-1 w-32 h-12 rounded-sm text-black text-base text-center tracking-widest drop-shadow-button'>VIEW</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Partners
