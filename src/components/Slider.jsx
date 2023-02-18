import React, { useState } from 'react';
import TestimonialComp from './TestimonialComp'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Slider = () => {
    
    return (
        <div className="relative overflow-hidden w-full ">
            <div className='hidden lg:block text-center'>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50}  slidesPerView={3} navigation pagination={{ clickable: true }} >
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Anil.png"}
                            feedback={"The Bravas Digital team is highly responsive and is very quick on the uptake of our ever-evolving business strategies. They are an excellent partner for your digital communication requirements."}
                            name={"Siddharth Nair"}
                            designation={"Co-Founder, Goodwind Mototours"}
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Sachi.png"}
                            feedback={"Every member of Bravas Digital treats my brand as their own brainchild. They understand our objectives and make sure all tasks are aligned accordingly. Highly recommend them for growing brands."}
                            name={"SUCHI SANDHU"}
                            designation={"Managing Director, Sweet Stuff Private Limited "} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Xerrxes.png"}
                            feedback={"We have been associated with Bravas Digital for the past 2 years. With an eye on ingenuity, they have consistently provided good creatives through this period."}
                            name={"XERRXEX MASTER"}
                            designation={"President, Association of Multimodal Transport Operators of India [AMTOI]"}
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Vineet.png"}
                            feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                            name={"Vineet Singhal,"}
                            designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Sachit.png"}
                            feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                            name={"Sachit Dedhia"}
                            designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Rikshit.png"}
                            feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                            name={"Rikshit Kotian,"}
                            designation={"Director - Business Development, Verraton Health Private Limited"} />

                    </SwiperSlide>
                </Swiper>
            </div>

            {/*Mobiles*/}
            <div className ="hidden md:block lg:hidden">
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={20} slidesPerView={2}  navigation pagination={{ clickable: true }} >
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Anil.png"}
                            feedback={"The Bravas Digital team is highly responsive and is very quick on the uptake of our ever-evolving business strategies. They are an excellent partner for your digital communication requirements."}
                            name={"Siddharth Nair"}
                            designation={"Co-Founder, Goodwind Mototours"}
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Sachi.png"}
                            feedback={"Every member of Bravas Digital treats my brand as their own brainchild. They understand our objectives and make sure all tasks are aligned accordingly. Highly recommend them for growing brands."}
                            name={"SUCHI SANDHU"}
                            designation={"Managing Director, Sweet Stuff Private Limited "} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Xerrxes.png"}
                            feedback={"We have been associated with Bravas Digital for the past 2 years. With an eye on ingenuity, they have consistently provided good creatives through this period."}
                            name={"XERRXEX MASTER"}
                            designation={"President, Association of Multimodal Transport Operators of India [AMTOI]"}
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Vineet.png"}
                            feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                            name={"Vineet Singhal,"}
                            designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Sachit.png"}
                            feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                            name={"Sachit Dedhia"}
                            designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Rikshit.png"}
                            feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                            name={"Rikshit Kotian,"}
                            designation={"Director - Business Development, Verraton Health Private Limited"} />

                    </SwiperSlide>
                </Swiper>
            </div>
            {/*Mobiles*/}
            <div className='md:hidden text-center'>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={1} centeredSlides={true} navigation pagination={{ clickable: true }} >
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Anil.png"}
                            feedback={"The Bravas Digital team is highly responsive and is very quick on the uptake of our ever-evolving business strategies. They are an excellent partner for your digital communication requirements."}
                            name={"Siddharth Nair"}
                            designation={"Co-Founder, Goodwind Mototours"}
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Sachi.png"}
                            feedback={"Every member of Bravas Digital treats my brand as their own brainchild. They understand our objectives and make sure all tasks are aligned accordingly. Highly recommend them for growing brands."}
                            name={"SUCHI SANDHU"}
                            designation={"Managing Director, Sweet Stuff Private Limited "} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Xerrxes.png"}
                            feedback={"We have been associated with Bravas Digital for the past 2 years. With an eye on ingenuity, they have consistently provided good creatives through this period."}
                            name={"XERRXEX MASTER"}
                            designation={"President, Association of Multimodal Transport Operators of India [AMTOI]"}
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Vineet.png"}
                            feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                            name={"Vineet Singhal,"}
                            designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Sachit.png"}
                            feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                            name={"Sachit Dedhia"}
                            designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"assets/images/testimonial/Rikshit.png"}
                            feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                            name={"Rikshit Kotian,"}
                            designation={"Director - Business Development, Verraton Health Private Limited"} />

                    </SwiperSlide>
                </Swiper>
            </div>
          
            
            
        </div>
    )
    }
export default Slider;



                    




