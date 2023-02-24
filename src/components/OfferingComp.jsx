import React from 'react'


function OfferingComp({img ,title, description}) {

  const fadeDown = {
    initial: {
      y: 20,
      opacity: 0.8
    },
    exit: {
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      }
    }
  }
  return (
    <div>
      {/*Laptop */}
      <div className='hidden lg:block'>
        <div className='h-80 w-80 drop-shadow-white rounded-md bg-white border border-blue-2 ease-out duration-200 hover:scale-[1.15] '>
          <img src={img} alt="offerings-bg" className='w-16 h-16 mx-auto mt-10' />
          <p className='text-black text-lg font-bold mt-7 text-center '>{title}</p>
          <p className='text-black text-sm font-light leading-relaxed mt-7 text-center px-12'>{description}</p>
        </div>
      </div>
      {/*Mobiles*/}
      <div className='lg:hidden'>
        {/* <motion.div
          transition={{ duration: 0.3 }} variants={fadeDown} initial="initial" whileInView="animate" viewport={{ once: false, amount: 0.8 }}
        > */}
        <div className='h-[165px] w-[155px] sm:h-56 sm:w-56 drop-shadow-white rounded-md bg-white border border-blue-2 mt-10 ease-out duration-200 hover:scale-[1.15]'>
          <img src={img} alt="offerings-bg" className='w-10 sm:w-14 h-10 sm:h-14 mx-auto mt-4 sm:mt-6' />
          <p className='text-black text-[11px] sm:text-sm font-bold mt-4 sm:mt-6 text-center '>{title}</p>
          <p className='text-black text-[9px] font-light leading-relaxed mt-1.5  sm:mt-3 text-center px-2 sm:px-5'>{description}</p>
        </div>
        {/* </motion.div> */}
      </div>
          
    </div>
  )
}

export default OfferingComp
