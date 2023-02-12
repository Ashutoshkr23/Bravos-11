import React from 'react'

function TestimonialComp({ feedback, img, name, designation }) {
  return (
    <div className='relative h-[437px] w-[364px] mt-16 bg-white rounded-md'>
          <img src={img} alt="" className='absolute inset-x-0 mx-auto bottom-[115px] z-10' />
        <div className='w-[308px] pt-7 px-7'>
              <p className='text-sm font-bold w-[308px] leading-[1.4rem]'>{feedback}</p>
        </div>
        <div className='bg-dark rounded-md h-[186px] absolute bottom-0 inset-x-0'>
            <h1 className='mt-24 text-white text-center text-lg font-bold'>{name}</h1>
            <p className='text-white text-center text-sm font-light px-8'>{designation}</p>
        </div>
      
    </div>
  )
}

export default TestimonialComp
