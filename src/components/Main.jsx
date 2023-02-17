import React from 'react'

function Main() {
    const img1 = "/assets/images/main/hero-text-bg.png"

    return (
    
        <div className='main bg-dark'>
            <div className='mx-8 sm:mx-16 lg:mx-32 pt-32 pb-16'>
                <h1 className="text-[28px] sm:text-4xl lg:text-6xl text-blue-2 font-bold text-center" style={{ backgroundImage: `url('/assets/images/main/hero-text-bg1.png')`, backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>READY TO TAKE ON MARKETING PROBLEMS LIKE IT'S OUR EVERYDAY BUISNESS.</h1>

                <h2 className='text-2xl sm:text-3xl lg:text-5xl text-white font-bold text-center mt-10 mb-10'>HONESTLY, IT IS.</h2>
                <p className='anim-typewriter text-xs sm:text-lg lg:text-2xl font-light text-center justify-center mt-10 lg:mt-16 text-white lg:w-[50%]'>Research Driven Approach. Quality-Based Results.</p>
            </div>
        </div>
    )
}

export default Main
