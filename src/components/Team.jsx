import React from 'react'
import TeamComp from './TeamComp'

function Team() {
  return (
    <div className='bg-blue-1 py-16'>
      <div >
        <div>
            <div>
                <p className='text-black font-light text-base text-center tracking-widest'>SERVICES</p>
                <h1 className='text-black font-bold text-5xl text-center mt-5'>WE OFFER</h1>
            </div>
                  <div className='flex mx-auto gap-10 justify-center mt-10'>
                      <div>
                          <TeamComp />
                      </div>
                      <div >
                          <TeamComp />
                      </div>
                      <div>
                          <TeamComp />
                      </div>
                  </div>
                  <div className='flex mx-auto gap-10 justify-center mt-10'>
                      <div>
                          <TeamComp />
                      </div>
                      <div >
                          <TeamComp />
                      </div>
                      <div>
                          <TeamComp />
                      </div>
                  </div>
                  <div className='flex mx-auto gap-10 justify-center mt-10'>
                      <div>
                          <TeamComp />
                      </div>
                      <div >
                          <TeamComp />
                      </div>
                      <div>
                          <TeamComp />
                      </div>
                  </div>
                  <div className='flex mx-auto gap-10 justify-center mt-10'>
                      <div>
                          <TeamComp />
                      </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Team
