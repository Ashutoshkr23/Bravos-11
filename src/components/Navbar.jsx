import React from 'react'

function Navbar() {
  return (
      <div>
          <div className='navbar bg-dark'>
              <div className='mx-32 my-auto h-40 flex content-center justify-between' >
                  <img src="/assets/images/navbar/Logo.png" alt="Bravos Logo" className="h-20 w-44 my-10" />
                  <div className='flex content-center'>
                      <ul className="flex content-center my-auto ">
                          <li className="text-white text- px-1.5 font-light"><a href="#">About</a></li>
                          <li className="text-white text- px-1.5 font-light"><a href="#">Services</a></li>
                          <li className="text-white text- px-1.5 font-light"><a href="#">Team</a></li>
                          <li className="text-white text- px-1.5 font-light"><a href="#">Work</a></li>
                          <li className="text-white text- px-1.5 font-light"><a href="#">Testimonials</a></li>
                      </ul>
                      <button className='h-10 w-40 ml-12 rounded text-white border border-white my-auto'>Get in Touch</button>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default Navbar
