import React from 'react'
import OfferingComp from './OfferingComp'


function Offerings() {

  // const fadeDown = {
  //   initial: {
  //     y: 50,
  //     opacity: 0.8
  //   },
  //   exit: {
  //     y: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 1,
  //     }
  //   }
  // }
  return (
      <div id='services'>
        {/*Laptop */}
      <div className='hidden md:block bg-white-1 ' >
        <div className='flex'>
          <div><img src="/assets/images/offerings/Bulb.png" alt="bulb" className='invisible' /></div>
          <div className='w-10/12 mx-auto'><div className='py-20'>
            <div>
              <p className='text-black font-bold opacity-60 text-base text-center tracking-widest'>SERVICES</p>
              <h1 className='text-black font-bold text-5xl text-center mt-5'>WE OFFER</h1>
            </div>
            {/* <motion.div
              transition={{ duration: 0.3 }} variants={fadeDown} initial="initial" whileInView="animate" viewport={{ once: false, amount: 0.8 }}
            > */}
              <div className='flex mx-auto gap-10 justify-center mt-10'>
                <div>
                  <OfferingComp
                    title={"Social Media Management"}
                    description={"Think of it as a party & make meaningful conversations by adding value"}
                    img={'/assets/images/offerings/img-1.png'}
                  />
                </div>
                <div className='pt-10'>
                  <OfferingComp
                    title={"Paid Marketing"}
                    description={"It’s all about finding the sweet spot between your audience & your message"}
                    img={'/assets/images/offerings/img-2.png'} />
                </div>
                <div>
                  <OfferingComp title={"Google Ads"}
                    description={"Targeted Ads for your targets so they can reach you when they need you (unlike your ex!)"}
                    img={'/assets/images/offerings/img-3.png'} />
                </div>
              </div>
            {/* </motion.div> */}
            {/* <motion.div
              transition={{ duration: 0.3 }} variants={fadeDown} initial="initial" whileInView="animate" viewport={{ once: false, amount: 0.8 }}

            > */}
              <div className='flex mx-auto gap-10 justify-center mt-16'>
                <div>
                  <OfferingComp title={"Search Engine Optimization"}
                    description={"Follow the right clues & you’ll strike gold!"}
                    img={'/assets/images/offerings/img-4.png'} />
                </div>
                <div className='pt-10'>
                  <OfferingComp title={"Content Writing"}
                    description={"When the reader says, ‘It’s written just for me!’, that’s when you know you’ve won!"}
                    img={'/assets/images/offerings/img-5.png'} />
                </div>
                <div>
                  <OfferingComp title={"Digital & Print Designs "}
                    description={"Design is a silent ambassador of a brand so make sure it speaks volumes, with elegance & style."}
                    img={'/assets/images/offerings/img-6.png'} />
                </div>
              </div>
            {/* </motion.div> */}
            {/* <motion.div
              transition={{ duration: 0.3 }} variants={fadeDown} initial="initial" whileInView="animate" viewport={{ once: false, amount: 0.8 }}
            > */}
              <div className='flex mx-auto gap-10 justify-center mt-16'>
                <div>
                  <OfferingComp title={"Influencer Outreach"}
                    description={"Leveraging the power of trust with a message that resonates with all."}
                    img={'/assets/images/offerings/img-7.png'} />
                </div>
                <div className='pt-10'>
                  <OfferingComp title={"Website Development"}
                    description={"Your brand’s digital home has to be functional, friendly & fantastic to look at!"}
                    img={'/assets/images/offerings/img-8.png'} />
                </div>
                <div>
                  <OfferingComp title={"Application Development"}
                    description={"A good application is like a school, but a great application is like a trip to Kasol – all about the stuff inside!"}
                    img={'/assets/images/offerings/img-9.png'} />
                </div>
              </div>
            {/* </motion.div> */}



          </div></div>
          <div><img src="/assets/images/offerings/Bulb.png" alt="bulb" className='sticky top-0' /></div>
        </div>
        
        
        </div>
        {/*Mobiles*/}
        <div>
        <div className='md:hidden bg-white-1'>
          <div className='flex justify-between'>
            <div><img src="/assets/images/offerings/Bulb.png" alt="bulb" className=' h-36 sm:48 w-10 sm:w-14 invisible' /></div>
            <div className='w-10/12'>   
              <div className=' py-6 '>
              <div>
                <p className='text-black font-bold text-xs sm:text-sm text-center tracking-widest opacity-60'>SERVICES</p>
                <h1 className='text-black font-bold text-2xl sm:text-3xl text-center mt-2'>WE OFFER</h1>
              </div>
              <div className='flex mt-12 gap-4 grow-1 sm:gap-10 mx-auto px-auto justify-center '>

                <div className='flex-col '>
                  <OfferingComp
                    title={"Social Media Management"}
                    description={"Think of it as a party & make meaningful conversations by adding value"}
                    img={'/assets/images/offerings/img-1.png'}
                  />
                  <OfferingComp title={"Google Ads"}
                    description={"Targeted Ads for your targets so they can reach you when they need you (unlike your ex!)"}
                    img={'/assets/images/offerings/img-3.png'} />
                  <OfferingComp title={"Content Writing"}
                    description={"When the reader says, ‘It’s written just for me!’, that’s when you know you’ve won!"}
                    img={'/assets/images/offerings/img-5.png'} />
                  <OfferingComp title={"Influencer Outreach"}
                    description={"Leveraging the power of trust with a message that resonates with all."}
                    img={'/assets/images/offerings/img-7.png'} />
                  <OfferingComp title={"Application Development"}
                    description={"A good application is like a school, but a great application is like a trip to Kasol – all about the stuff inside!"}
                    img={'/assets/images/offerings/img-9.png'} />
                </div>
                <div className='flex-col gap-y-9 pt-10'>
                  <OfferingComp
                    title={"Paid Marketing"}
                    description={"It’s all about finding the sweet spot between your audience & your message"}
                    img={'/assets/images/offerings/img-2.png'} />
                  <OfferingComp title={"Search Engine Optimization"}
                    description={"Follow the right clues & you’ll strike gold!"}
                    img={'/assets/images/offerings/img-4.png'} />
                  <OfferingComp title={"Digital & Print Designs "}
                    description={"Design is a silent ambassador of a brand so make sure it speaks volumes, with elegance & style."}
                    img={'/assets/images/offerings/img-6.png'} />
                  <OfferingComp title={"Website Development"}
                    description={"Your brand’s digital home has to be functional, friendly & fantastic to look at!"}
                    img={'/assets/images/offerings/img-8.png'} />
                </div>
              </div>
            </div></div>
            <div className='w-1/6'><img src="/assets/images/offerings/Bulb.png" alt="bulb" className=' h-36 sm:48 w-10 sm:w-14 sticky top-0' /></div>
          </div>
       
        </div>
        </div>
      
        

    </div>
  )
}

export default Offerings
