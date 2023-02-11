import React from 'react'

function TeamComp() {
  return (
    <div className='bg-transparent w-[326px] h-[311px] border border-transparent rounded-lg'>
      <img src="/assets/images/team/Sid.png" alt="sid" className='absolute mx-[96px]' />
      <div className="w-full h-[215px] bottom-0 mt-[96px] pt-[57px] rounded-lg bg-white-1 border-black">
        <div className='w-[276px] mx-auto  h-20 bg-white rounded-md py-4'>
          <p className='text-base text-center  '>CEO</p>
          <h1 className='font-bold text-lg text-center'>SIDDHART NAIR</h1>
        </div>
        <p className='text-sm font-light text-black mt-7 text-center'>A bearded corporate fixer</p>
      </div>
    </div>
  )
}

export default TeamComp
