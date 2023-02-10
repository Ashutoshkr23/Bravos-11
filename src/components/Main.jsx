import React from 'react'

function Main() {
    const img1 = "/assets/images/main/hero-text-bg.png"

    return (
        <div className='main bg-dark'>
            <div className='mx-32 py-16'>
                <h1 className="text-6xl text-transparent font-bold text-center" style={{ backgroundImage: `url('/assets/images/main/hero-text-bg1.png')`, backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>READY TO TAKE ON MARKETING PROBLEMS LIKE IT'S OUR EVERYDAY BUISNESS.</h1>

                <h2 className='text-5xl text-white font-bold text-center mt-10'>HONESTLY, IT IS.</h2>
                <p className='text-2xl font-light text-center mt-16 text-white'>Research Driven Approach. Quality-Based Results.</p>
            </div>
        </div>
    )
}

export default Main
