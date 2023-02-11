import React from 'react'
import OfferingComp from './OfferingComp'

function Offerings() {
  return (
      <div >
      <img src="/assets/images/offerings/Bulb.png" alt="bulb" className='absolute right-0' />
      <div className='bg-white-1 py-20 '>
        <div>
          <p className='text-black font-light text-base text-center tracking-widest'>SERVICES</p>
          <h1 className='text-black font-bold text-5xl text-center mt-5'>WE OFFER</h1>
        </div>
        <div className='flex mx-auto gap-10 justify-center mt-10'>
          <div>
            <OfferingComp 
              title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-1.png'}
            />
          </div>
          <div className='pt-10'>
            <OfferingComp 
              title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-2.png'} />
          </div>
          <div>
            <OfferingComp title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-3.png'} />
          </div>
        </div>
        <div className='flex mx-auto gap-10 justify-center mt-16'>
          <div>
            <OfferingComp title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-4.png'} />
          </div>
          <div className='pt-10'>
            <OfferingComp title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-5.png'} />
          </div>
          <div>
            <OfferingComp title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-6.png'} />
          </div>
        </div>
        <div className='flex mx-auto gap-10 justify-center mt-16'>
          <div>
            <OfferingComp title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-7.png'} />
          </div>
          <div className='pt-10'>
            <OfferingComp title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-8.png'} />
          </div>
          <div>
            <OfferingComp title={"Social Media Management "}
              description={"Think of it as a party & make meaningful conversations by adding value"}
              img={'/assets/images/offerings/img-9.png'} />
          </div>
        </div>
      </div>
        

    </div>
  )
}

export default Offerings
