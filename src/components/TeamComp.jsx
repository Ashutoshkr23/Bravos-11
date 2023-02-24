import React from 'react'

function TeamComp({img , designation , name , tagline , linkedin , mail }) {
  const [showContent, setShowContent] = React.useState(false);
  return (
<div>
      {/*Laptop */}
      <div className='hidden md:block '>
        <div className='bg-transparent w-[260px] h-[248px] lg:w-[326px] lg:h-[311px] ease-out duration-200 hover:scale-[1.15] border border-transparent rounded-lg relative' onMouseEnter={() => setShowContent(true)}
          onMouseLeave={() => setShowContent(false)}>
          
          <img src={img} alt="sid" className='absolute z-40 inset-x-0 mx-auto h-[113px] lg:h-[142px] w-[113px] lg:w-[142px]' />
          <div className="w-full relative h-[180px] lg:h-[215px] bottom-0 mt-[76px] lg:mt-[96px] pt-11 lg:pt-[57px] rounded-lg bg-white-1 drop-shadow-white border-black">
            { showContent && (
              <div className=" absolute top-0 left-0 p-4">
                <div className='flex gap-2 align-bottom'>
                  <a href={linkedin} target="_blank">
                    <img src="/assets/images/team/Linkedin.png" alt="Example Image" />
                  </a>
                  {(name === "SIDDHARTH NAIR" || name === "VAISHNAV MANAV") &&(
                    <a href={`mailto:${mail}`} target="_blank">
                      <img src="/assets/images/team/Mail.png" alt="Example Image" className='mt-auto' />
                    </a>
                  )}
                </div>
              </div>
            )}
            <div className='w-60 lg:w-[276px] h-16 lg:h-20 bg-white drop-shadow-white rounded-md py-2 mx-auto lg:py-4'>
              <p className='text-base text-center  '>{designation}</p>
              <h1 className='font-bold text-base text-center'>{name}</h1>
            </div>
            <div className='px-7 '>
              <p className='text-sm font-light mt-4 mb-4 text-black text-center mx-2 lg:mx-6 '>{tagline}</p>
            </div>
          </div>
      </div>
      </div>
      {/*Mobiles*/}
      <div className='md:hidden'>
        <div className='bg-transparent h-40 w-[154px] hover:scale-[1.15] ease-out duration-200 border border-transparent rounded-lg relative' >
          <img src={img} alt="sid" className='absolute z-30 inset-x-0 h-16 w-16 mx-auto' />
          <div className="w-full relative h-[114px] bottom-0 mt-11 pt-7 rounded-lg bg-white-1 drop-shadow-white border-black">
            
              <div className='absolute top-1'>
                <div className='flex justify-between mx-2 align-bottom'>
                <a href={linkedin} target="_blank">
                    <img src="/assets/images/team/Linkedin.png" alt="Example Image" />
                  </a>
                {(name === "SIDDHARTH NAIR" || name === "VAISHNAV MANAV") && (
                  <a href={`mailto:${mail}`} target="_blank">
                    <img src="/assets/images/team/Mail.png" alt="Example Image" className='ml-24' />
                  </a>
                )}
                </div>


              </div>

            <div className='w-[138px] mx-auto  h-10 bg-white drop-shadow-white rounded-md py-2'>
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
