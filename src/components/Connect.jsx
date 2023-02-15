import React from 'react'

function Connect() {
  return (
  
    <div className="bg-white ">
      <div className='hidden lg:block'><div className="w-2/3 mx-auto mt-16 relative">
        <img
          src="/assets/images/connect/Connect.png"
          alt="Sample Image"
          className="h-full object-cover"
        />
        <div className='absolute top-0 right-0 w-11/12 inset-x-0 mx-auto h-full px-4'>
          <h1 className=" text-white text-center text-[40px] font-bold mt-16 ">
            Wish to join our creative army or shower us with compliments?
          </h1>
          <h1 className=" text-white text-center text-[32px] font-bold mt-6">
            We’re all ears for it!
          </h1>
        </div>
        <button class="bg-blue-1 drop-shadow-button text-black hover:font-bold font-light py-2 px-4 rounded flex justify-center mt-16 mb-24 items-center mx-auto">
          CONNECT WITH US
        </button>


      </div></div>
      <div className='lg:hidden'>
        <div className="w-11/12 mx-auto h-52 mt-16 relative">
          <img
            src="/assets/images/connect/Connect.png"
            alt="Sample Image"
            className="h-full object-cover"
          />
          <div className='absolute top-0 right-0 w-11/12 inset-x-0 mx-auto h-full px-4'>
            <h1 className=" text-white text-center text-[20px] sm:text-[24px] font-bold mt-12 ">
              Wish to join our creative army or shower us with compliments?
            </h1>
            <h1 className=" text-white text-center text-[18px] sm:text-[22px] font-bold mt-6">
              We’re all ears for it!
            </h1>
          </div>
          <button class="bg-blue-1 drop-shadow-button text-black hover:font-bold font-light py-2 px-4 rounded flex justify-center mt-16 mb-24 items-center mx-auto">
            CONNECT WITH US
          </button>


        </div>
      </div>
      
    </div>


  )
}

export default Connect
{/*<img src="/assets/images/connect/Connect.png
          " alt="Sample Image" className="h-full object-cover rounded-md" />*/}