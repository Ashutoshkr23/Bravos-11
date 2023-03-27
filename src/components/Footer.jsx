import React,{useState,useEffect} from 'react'

function Footer() {
    const [date, setDate] = useState();

    function getYear() {
        setDate(new Date().getFullYear());
    }

    useEffect(() => {
        getYear();
    }, [])
  return (
    <div className='bg-dark pt-24 pb-4'>

    <div className='lg:hidden'>
        <div className='flex flex-col justify-center items-center'>
          <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '100px', width: '308px', borderRadius: '19px', margin: 'auto' }}>
            <a href="https://www.facebook.com/bravasdigital" target="blank" className="w-11 h-8">
              <img className="w-6 h-6 hover:scale-125 inline-block" src="assets/images/footer/fb.svg" alt="fb icon" />
            </a>
            <a href="https://www.linkedin.com/company/bravasdigital" target="blank" className="w-11 h-8">
              <img className="w-6 h-6 hover:scale-125 inline-block" src="assets/images/footer/linkedin.ico" alt="linkedin icon" />
            </a>
            <a href="https://www.instagram.com/bravasdigital/" target="blank" className="w-11 h-8">
              <img className="w-6 h-6 hover:scale-125 inline-block" src="assets/images/footer/instagram-light.ico" alt="instagram icon" />
            </a>

          </div>
          <a href="/privacypolicy" className='text-white  text-base'>Privacy Policy</a>
          <div className="text-center text-white text-base mt-2 opacity-80 ">© {date} BY BRAVAS DIGITAL</div>
        </div>

      </div>



      {/*For Laptop*/}
      <div className='hidden lg:block'>
        <div className='flex flex-col justify-center items-center'>
          <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '40px', width: '528px', borderRadius: '19px', margin: 'auto' }}>
            <a href="https://www.facebook.com/bravasdigital" target="blank" className="w-11 h-10">
              <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/images/footer/fb.svg"} alt="facebook icon" />
            </a>
            <a href="https://www.linkedin.com/company/bravasdigital" target="blank" className="w-11 h-10">
              <img className="w-6 h-6 hover:scale-125 inline-block" src="assets/images/footer/linkedin.ico" alt="linkedin icon" />
            </a>
            <a href="https://www.instagram.com/bravasdigital/" target="blank" className="w-11 h-10">
              <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/images/footer/instagram-light.ico"} alt="instagram icon" />
            </a>


          </div>

          <a href="/privacypolicy" className='text-white  text-base'>Privacy Policy</a>
          <div className="text-center text-white text-base mt-2 opacity-80 ">© {date} BY BRAVAS DIGITAL</div>

        </div>
       
       

    </div>
    </div>
  )
}

export default Footer
