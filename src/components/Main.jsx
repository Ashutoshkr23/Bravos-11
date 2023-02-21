import React from 'react'

function Main() {
    const img1 = "/assets/images/main/hero-text-bg.png"

    return (
    
        <div className='main bg-dark'>
            <div className='mx-8 sm:mx-16 lg:mx-32 pt-32 lg:pt-64 pb-32'>
                <h1 className="text-[28px] sm:text-4xl lg:text-6xl text-blue-2 font-bold text-center font-Gotham mb-16" style={{ backgroundImage: `url('/assets/images/main/hero-text-bg1.png')`, backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>TACKLING MARKETING ISSUES LIKE IT'S OUR EVERYDAY BUSINESS.</h1>

                {/* <h2 className='text-2xl sm:text-3xl lg:text-5xl text-white font-bold text-center mt-10 mb-10 font-Gotham'>HONESTLY, IT IS.</h2> */}
                <p className='anim-typewriter text-base sm:text-lg lg:text-3xl font-light text-center justify-center lg:mt-16 text-white lg:w-[50%]'>Research Driven Approach. Quality-Based Results.</p>
            </div>
        </div>
    )
}

export default Main
