import React from 'react'
import TestimonialComp from './TestimonialComp'
import Slider from './Slider'

function Testimonials() {
  return (
    <div className='bg-blue-1'>
      {/*Laptop */}
      <div className='hidden lg;block'></div>
      {/*Mobiles*/}
      <div className='lg:hidden'></div>
        <div className='py-16'>
              <div className='pl-36'>
                  <p className='text-black font-light text-base  tracking-widest'>TESTIMONIALS</p>
                  <h1 className='text-black font-bold text-5xl mt-5'>CLIENT SAYS</h1>
              </div>
    {/*
     <TestimonialComp 
                  img={"assets/images/testimonial/Anil.png"}
                  feedback={"The Bravas Digital team is highly responsive and is very quick on the uptake of our ever-evolving business strategies. They are an excellent partner for your digital communication requirements."}
                  name={"Siddharth Nair"}
                  designation={"Co-Founder, Goodwind Mototours"}
            />
            <TestimonialComp 
          img={"assets/images/testimonial/Sachi.png"}
          feedback={"Every member of Bravas Digital treats my brand as their own brainchild. They understand our objectives and make sure all tasks are aligned accordingly. Highly recommend them for growing brands."}
          name={"SUCHI SANDHU"}
          designation={"Managing Director, Sweet Stuff Private Limited "} />
        <TestimonialComp 
          img={"assets/images/testimonial/Xerrxes.png"}
          feedback={"We have been associated with Bravas Digital for the past 2 years. With an eye on ingenuity, they have consistently provided good creatives through this period."}
          name={"XERRXEX MASTER"}
          designation={"President, Association of Multimodal Transport Operators of India [AMTOI]"}
        />
        <TestimonialComp
          img={"assets/images/testimonial/Vineet.png"}
          feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
          name={"Vineet Singhal,"}
          designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
        <TestimonialComp 
          img={"assets/images/testimonial/Sachit.png"}
          feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
          name={"Sachit Dedhia"}
          designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
        <TestimonialComp 
          img={"assets/images/testimonial/Rikshit.png"}
          feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
          name={"Rikshit Kotian,"}
          designation={"Director - Business Development, Verraton Health Private Limited"} />
    */}
              <div className='px-32'>
                 
              </div>
        <Slider/>
        </div>
        <div className='h-20 w-10/12 bg-slate-600 '>
        <div className='h-10 w-10/12 bg-slate-800 '>

        </div>
        </div>
    </div>
  )
}

export default Testimonials
