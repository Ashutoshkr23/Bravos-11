import React from 'react'

function OfferingComp({img ,title, description}) {
  return (
    <div>
          <div className='h-80 w-80 drop-shadow-white bg-white border border-blue-1 '>
              <img src={img} alt="offerings-bg" className='w-16 h-16 mx-auto mt-10' />
              <p className='text-black text-lg font-bold mt-7 text-center '>{title}</p>
              <p className='text-black text-sm font-light leading-relaxed mt-7 text-center px-12'>{description}</p>
          </div>
    </div>
  )
}

export default OfferingComp
