import React, { useState } from 'react';
import Buisness from '../components/Buisness';
import Customer from '../components/Customer';

function Partners() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  

  
  return (
    <div className="bg-dark">
      {/* Laptop */}
      <div className="hidden sm:block px-28 py-28">
        <p className="text-white font-light text-base tracking-widest">WORK</p>
        <h1 className="text-white font-bold text-5xl mt-5">
          PARTNERS IN PROGRESS
        </h1>
        <div className="flex flex-row gap-44 justify-center">
          <div>
            <div className="mt-20 h-[421px] w-[325px] bg-white rounded-md pt-10 ">
              <img
                src="/assets/images/partner/CC.png"
                alt="CC"
                className="mx-auto h-[147px] w-[147px]"
              />
              <h3 className="mt-14 text-center font-bold text-lg px-16">
                CUSTOMER CONNECTIONS
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setOpen1(true);
                  }}
                  className="mt-10 bg-blue-1 w-32 h-12 rounded-sm text-black text-base text-center tracking-widest drop-shadow-button"
                >
                  VIEW
                </button>
                <div>
                  {open1 && (<Buisness open1={open1} setOpen1={setOpen1}/>)}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-20 h-[421px] w-[325px] bg-white rounded-md pt-10 ">
              <img
                src="/assets/images/partner/BAB.png"
                alt="CC"
                className="mx-auto h-[147px] w-[147px]"
              />
              <h3 className="mt-14 text-center font-bold text-lg px-16">
                BUISNESS AND BEYOND
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setOpen2(true);
                  }}
                  className="mt-10 bg-blue-1 w-32 h-12 rounded-sm text-black text-base text-center tracking-widest drop-shadow-button"
                >
                  VIEW
                </button>
                {open2 && (<Customer open2={open2} setOpen2={setOpen2} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobiles*/}

      {/*Mobiles*/}
      <div className='sm:hidden bg-dark px-5 py-16'>
      <div>
        <p className='text-white font-light text-xs sm:text-sm tracking-widest'>WORK</p>
        <h1 className='text-white font-bold text-2xl sm:text-3xl mt-2 w-56'>PARTNERS IN PROGRESS</h1>
          <div className='mt-20 h-[141px] w-[171px] bg-white rounded-md pt- mx-auto '>
            <img src="/assets/images/partner/CC.png" alt="CC" className='mx-auto h-16 w-16' />
            <h3 className='mt-4 text-center font-bold text-xs px-8'>CUSTOMER CONNECTIONS</h3>
          </div>
          <img src="/assets/images/partner/Customer.png" alt="Customer-Images" className='mx-4 mt-6' />
          <div className='mt-20 h-[141px] w-[171px] bg-white rounded-md pt- mx-auto '>
            <img src="/assets/images/partner/BAB.png" alt="CC" className='mx-auto h-16 w-16' />
            <h3 className='mt-4 text-center font-bold text-xs px-8'>BUISNESS AND BEYOND</h3>
          </div>
          <img src="/assets/images/partner/Buisness.png" alt="Customer-Images" className='mx-4 mt-6' />
      </div>
      </div>
    </div>
    
  )
}

export default Partners
