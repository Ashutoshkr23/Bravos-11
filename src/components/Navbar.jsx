
import React, {useState}from 'react'
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

   
  return (
      <div>
          {/*Laptop */}
          <div className='hidden bg-dark lg:block'>
              <div className='navbar z-50 fixed inset-x-0 bg-dark opacity-95'>
                  <div className='mx-32 my-auto h-20 flex content-center justify-between' >
                      <img src="/assets/images/navbar/Logo.png" alt="Bravos Logo" className="h-12 w-28 my-auto" />
                      <div className='flex content-center'>
                          <ul className="flex content-center my-auto ">
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href={`#about`}>About</a></li>
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href="#services">Services</a></li>
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href="#team">Team</a></li>
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href="#work">Work</a></li>
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold  "><a href="#testimonials">Testimonials</a></li>
                          </ul>
                          <button className='h-10 btn w-40 ml-12 rounded hover:bg-green-2 hover:font-bold hover:border-none text-white border border-white my-auto'><a href="https://siddharth223358.typeform.com/to/zj0SLmyj" target="_blank">Get in Touch</a></button>
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
          <nav className="bg-dark px-2  sm:px-4 py-2.5  fixed w-full z-50 top-0 left-0">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
                  <a href="#" className="flex items-center">
                      <img src="/assets/images/navbar/Logo.png" className="h-6 ml-3 sm:h-9 md:h-12" alt="Bravas Logo"/>
                  </a>
                  <div className="flex ">
                          <button className='h-10 btn w-28 ml-12 rounded text-white border border-white hover:bg-green-2 hover:border-none hover:font-bold my-auto mr-4'><a href="https://siddharth223358.typeform.com/to/zj0SLmyj" target="_blank">Get in Touch</a></button>
                      <button
                          onClick={() => setIsOpen(!isOpen)}
                          type="button" className="inline-flex relative z-[100] items-center ">
                              <div className='  h-3.5 w-5'>
                                  <div
                                      className={` h-0.5 bg-white w-5 origin-top-left ease-in duration-200 rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                                  />
                                  <div
                                      className={` h-0.5 w-5 bg-white ease-in duration-200 rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                                  />
                                  <div
                                      className={` h-0.5 w-5 bg-white ease-in duration-200  rounded-md mt-1  ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                                  />
                              </div>
                      </button>
                      {isOpen && (
                          <div className="absolute w-full h-screen  right-0 top-0 bg-dark border rounded-md shadow-lg z-10">
                              <div className="py-1 px-4 ">
                                  <a
                                      href="#about"
                                      className="block px-4 py-2 text-white hover:font-bold hover:bg-gray-900 rounded-sm hover:text-gray-100"
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
