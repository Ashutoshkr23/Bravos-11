
import React, {useState}from 'react'
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

   
  return (
      <div>
          {/*Laptop */}
          <div className='hidden lg:block'>
              <div className='navbar bg-dark'>
                  <div className='mx-32 my-auto h-40 flex content-center justify-between' >
                      <img src="/assets/images/navbar/Logo.png" alt="Bravos Logo" className="h-20 w-44 my-10" />
                      <div className='flex content-center'>
                          <ul className="flex content-center my-auto ">
                              <li className="text-white text- px-1.5 hover:font-bold font-light"><a href={`#about`}>About</a></li>
                              <li className="text-white text- px-1.5 hover:font-bold font-light"><a href="#services">Services</a></li>
                              <li className="text-white text- px-1.5 hover:font-bold font-light"><a href="#team">Team</a></li>
                              <li className="text-white text- px-1.5 hover:font-bold font-light"><a href="#work">Work</a></li>
                              <li className="text-white text- px-1.5 hover:font-bold font-light"><a href="#testimonials">Testimonials</a></li>
                          </ul>
                          <button className='h-10 btn w-40 ml-12 rounded hover:bg-blue-1 hover:font-bold hover:border-none text-white border border-white my-auto'>Get in Touch</button>
                      </div>
                  </div>

              </div>
          </div>
          {/*Mobiles*/}
          {/*<div className='lg:hidden flex'>
            <div className='navbar bg-dark flex justify-between px-5'>
                  <img src="/assets/images/navbar/Logo.png" alt="Bravos Logo" className="h-10 w-24 my-3.5" />
            </div>
              <div className='flex'>
                  <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>

                  {isOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-10">
                          <div className="py-1">
                              <a
                                  href="#"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                  Home
                              </a>
                              <a
                                  href="#"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                  About
                              </a>
                              <a
                                  href="#"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                  Contact
                              </a>
                          </div>
                      </div>
                  )}
              </div>
          </div>*/}
          <div className='lg:hidden '>
          <nav class="bg-dark px-2  sm:px-4 py-2.5  fixed w-full z-50 top-0 left-0   ">
              <div class="container flex flex-wrap items-center justify-between mx-auto">
                  <a href="#" class="flex items-center">
                      <img src="/assets/images/navbar/Logo.png" class="h-6 ml-3 sm:h-9 md:h-12" alt="Bravas Logo"/>
                  </a>
                  <div class="flex ">
                      <button className='h-10 btn w-28 ml-12 rounded text-white border border-white hover:bg-blue-1 hover:border-none hover:font-bold my-auto mr-4'>Get in Touch</button>
                      <button
                          onClick={() => setIsOpen(!isOpen)}
                          type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      </button>
                      {isOpen && (
                          <div className="absolute w-1/2 right-0 mt-12 mr-10 bg-dark border rounded-md shadow-lg z-10">
                              <div className="py-1 px-4 ">
                                  <a
                                      href="#about"
                                      className="block px-4  py-2 text-white hover:font-bold hover:bg-gray-900 rounded-sm hover:text-gray-100"
                                  >
                                      About
                                  </a>
                                      <a
                                          href="#services"
                                          className="block px-4 py-2 text-white hover:font-bold hover:bg-gray-900 rounded-sm hover:text-gray-100"
                                      >
                                          Services
                                      </a>
                                      <a
                                          href="#team"
                                          className="block px-4 py-2 text-white hover:font-bold hover:bg-gray-900 rounded-sm hover:text-gray-100"
                                      >
                                          Team
                                      </a>
                                      <a
                                          href="#work"
                                          className="block px-4 py-2 text-white hover:font-bold hover:bg-gray-900 rounded-sm hover:text-gray-100"
                                      >
                                         Work 
                                      </a>
                                      <a
                                          href="#testimonials"
                                          className="block px-4 py-2 text-white hover:font-bold hover:bg-gray-900 rounded-sm hover:text-gray-100"
                                      >
                                          Testimonial
                                      </a>
                                      
                              </div>
                          </div>
                      )}  
                  </div>
              </div>
          </nav>
          </div>

          
          
      </div>
  )
}

export default Navbar
