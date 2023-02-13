import React from 'react'

function TeamComp({img , designation , name , tagline }) {
  return (
<div>
      {/*Laptop */}
      <div className='hidden sm:block'>
        <div className='bg-transparent w-[326px] h-[311px] border border-transparent rounded-lg relative'>
          <img src={img} alt="sid" className='absolute inset-x-0 mx-auto' />
          <div className="w-full h-[215px] bottom-0 mt-[96px] pt-[57px] rounded-lg bg-white-1 border-black">
            <div className='w-[276px] mx-auto  h-20 bg-white rounded-md py-4'>
              <p className='text-base text-center  '>{designation}</p>
              <h1 className='font-bold text-lg text-center'>{name}</h1>
            </div>
            <div className='px-7 '>
              <p className='text-sm font-light mt-4 mb-4 text-black text-center mx-6 '>{tagline}</p>
            </div>
          </div>
      </div>
      </div>
      {/*Mobiles*/}
      <div className='sm:hidden'>
        <div className='bg-transparent h-40 w-[154px] border border-transparent rounded-lg relative'>
          <img src={img} alt="sid" className='absolute inset-x-0 h-16 w-16 mx-auto' />
          <div className="w-full h-[114px] bottom-0 mt-11 pt-7 rounded-lg bg-white-1 border-black">
            <div className='w-[138px] mx-auto  h-10 bg-white rounded-md py-2'>
              <p className='text-[9px] text-center  '>{designation}</p>
              <h1 className='font-bold text-[10px] text-center'>{name}</h1>
            </div>
            <div className='px-4 '>
              <p className='text-[9px] font-light mt-1 mb-4 text-black text-center  '>{tagline}</p>
            </div>
          </div>
        </div>
      </div>
      
</div>
  )
}

export default TeamComp
