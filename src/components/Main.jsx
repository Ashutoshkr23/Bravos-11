import React from 'react'

function Main() {
    const img1 = "/assets/images/main/hero-text-bg.png"

    return (
    
        <div className='main bg-dark'>
            <div className='mx-4 sm:mx-16 2xl:mx-32 pt-32 lg:pt-48 pb-32'>
                <h1 className="text-[28px] font-gotham leading-loose sm:text-4xl lg:text-6xl text-green font-bold text-center font-Gotham mb-16" style={{ backgroundImage: `url('/assets/images/main/hero-text-bg1.png')`, backgroundClip: 'text', WebkitBackgroundClip: 'text', lineHeight: '1.5' }}>TACKLING MARKETING ISSUES LIKE IT'S OUR EVERYDAY BUSINESS.</h1>

                <h2 className='text-2xl sm:text-3xl lg:text-5xl text-white font-bold text-center mt-10 mb-12 font-Gotham'>HONESTLY, IT IS.</h2>
                <p className='anim-typewriter text-xs sm:text-lg lg:text-3xl font-light text-center justify-center font-gotham lg:mt-16 text-white lg:w-[50%]'>Research Driven Approach. Quality-Based Results.</p>
            </div>
        </div>
    )
}

export default Main
