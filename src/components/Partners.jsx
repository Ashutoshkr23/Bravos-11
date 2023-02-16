import React, { useState } from 'react';
import Buisness from '../components/Buisness';
import Customer from '../components/Customer';

function Partners() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const logos = ['/assets/images/customer/img1.png', '/assets/images/customer/img2.png', '/assets/images/customer/img3.png', '/assets/images/customer/img4.png', '/assets/images/customer/img5.png', '/assets/images/customer/img6.png', '/assets/images/customer/img7.png', '/assets/images/customer/img8.png', '/assets/images/customer/img9.png', '/assets/images/customer/img10.png', '/assets/images/customer/img11.png', '/assets/images/customer/img12.png', '/assets/images/customer/img13.png', '/assets/images/customer/img14.png', '/assets/images/customer/img15.png', '/assets/images/customer/img16.png', '/assets/images/customer/img17.png', '/assets/images/customer/img18.png', '/assets/images/customer/img19.png', '/assets/images/customer/img20.png',];

  const logo = ['/assets/images/buisness/image1.png', '/assets/images/buisness/image2.png', '/assets/images/buisness/image3.png', '/assets/images/buisness/image4.png', '/assets/images/buisness/image5.png', '/assets/images/buisness/image6.png', '/assets/images/buisness/image7.png', '/assets/images/buisness/image8.png', '/assets/images/buisness/image9.png', '/assets/images/buisness/image10.png', '/assets/images/buisness/image11.png', '/assets/images/buisness/image12.png', '/assets/images/buisness/image13.png', '/assets/images/buisness/image14.png', '/assets/images/buisness/image15.png', '/assets/images/buisness/image16.png', '/assets/images/buisness/image17.png', '/assets/images/buisness/image18.png', '/assets/images/buisness/image19.png', '/assets/images/buisness/image20.png',];

  

  
  return (
    <div className="bg-dark" id='work'>
      {/* Laptop */}
      <div className="hidden lg:block px-28 py-28">
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
                  {open1 && (<Customer open1={open1} setOpen1={setOpen1}/>)}
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
                {open2 && (<Buisness open2={open2} setOpen2={setOpen2} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobiles*/}

      {/*Mobiles*/}
      <div className='lg:hidden bg-dark px-5 sm:px-12 py-16'>
      <div>
        <p className='text-white  font-light text-xs sm:text-sm tracking-widest'>WORK</p>
        <h1 className='text-white font-bold text-2xl sm:text-3xl mt-2 w-56'>PARTNERS IN PROGRESS</h1>
          <div className='mt-20  w-3/5 bg-white rounded-md py-10 mx-auto '>
            <img src="/assets/images/partner/CC.png" alt="CC" className='mx-auto  w-2/5' />
            <h3 className='mt-4 text-center font-bold text-xs sm:text-xl px-8'>CUSTOMER CONNECTIONS</h3>
          </div>
          <div className='w-full h-full flex justify-center items-center bg-transparent bg-opacity-50 z-40'>
            <div className='w-4/5 bg-white h-full mt-8 '>
              <div className="grid grid-cols-3 " >
                {logos.map((logo, index) => (
                  <div key={index} className="border px-2 py-2 border-blue-500">
                    <img src={logo} alt={`Logo ${index}`} className="w-full object-contain h-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='mt-20 w-3/5 bg-white rounded-md py-10 mx-auto '>
            <img src="/assets/images/partner/BAB.png" alt="CC" className=' w-2/5 mx-auto' />
            <h3 className='mt-4 text-center font-bold text-xs sm:text-xl px-8'>BUISNESS AND BEYOND</h3>
          </div>
          <div className='w-full h-full mt-8 flex justify-center items-center bg-transparent bg-opacity-50 z-40'>
            <div className='w-4/5 bg-white h-full '>
              <div className="grid grid-cols-3 " >
                {logo.map((logo, index) => (
                  <div key={index} className="border px-2 py-2 border-blue-500">
                    <img src={logo} alt={`Logo ${index}`} className="w-full object-contain h-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    
  )
}

export default Partners
