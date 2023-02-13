import React from 'react'

function TeamComp({img , designation , name , tagline }) {
  return (
    <div className='bg-transparent w-[326px] h-[311px] border border-transparent rounded-lg relative'>
      {/*Laptop */}
      <div className='hidden lg;block'></div>
      {/*Mobiles*/}
      <div className='lg:hidden'></div>
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
  )
}

export default TeamComp
