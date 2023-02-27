import React from 'react'

function Connect() {
  return (
  
    <div className="bg-white ">
      <div className='hidden sm:block'>
        <div className='pt-16'>
          <div className=" w-3/4 lg:w-2/3 mx-auto relative">
            <img
              src="/assets/images/connect/Connect.png"
              alt="Sample Image"
              className="h-full w-full"
            />
            <div className='absolute w-full inset-0 flex items-center justify-center  h-full px-4'>
              <div className='my-auto mx-10'>
                <h1 className=" text-white text-center text-2xl lg:text-3xl xl:text-4xl font-bold  ">
                  Wish to join our creative army or shower us with compliments?
                </h1>
                <h1 className=" text-white text-center text-xl lg:text-2xl xl:text-3xl font-bold mt-6">
                  We’re all ears for it!
                </h1>
              </div>
            </div>
          </div>
          <button className="bg-green-2 drop-shadow-button text-black hover:font-bold font-light py-2 px-4 rounded flex justify-center mt-16 items-center mx-auto">
            <a href="https://siddharth223358.typeform.com/to/zj0SLmyj" target="_blank">CONNECT WITH US</a>
          </button>
        </div> 
        <img src="/assets/images/connect/send-1.png" alt="Send-img" className='sticky bottom-0 mr-10' /> 
      </div>

      {/* Mobiles */}
      <div className='sm:hidden'>
        <div className='pt-16'>
          <div className="w-11/12 mx-auto  relative">
            <img
              src="/assets/images/connect/Connect-mob.png"
              alt="Sample Image"
              className="w-full object-cover"
            />
            <div className='absolute w-full inset-0 flex items-center justify-center  h-full px-4'>\
            <div className='my-auto mx-4'>
                <h1 className=" text-white text-center text-[20px] sm: font-bold mt-12 ">
                  Wish to join our creative army or shower us with compliments?
                </h1>
                <h1 className=" text-white text-center text-[18px] sm:text-[22px] font-bold mt-6">
                  We’re all ears for it!
                </h1>
            </div>  
            </div>
          </div>
        </div>
        
        <button className="bg-green-2 drop-shadow-button text-black hover:font-bold font-light py-2 px-4 rounded flex justify-center mt-16  items-center mx-auto">
          <a href="https://siddharth223358.typeform.com/to/zj0SLmyj" target="_blank">CONNECT WITH US</a>
        </button>
        <img src="/assets/images/connect/send-1.png" alt="Send-img" className='sticky bottom-0 w-1/4' />
      </div>  
    </div>
  )
}

export default Connect
{/*<img src="/assets/images/connect/Connect.png
          " alt="Sample Image" className="h-full object-cover rounded-md" />*/}
