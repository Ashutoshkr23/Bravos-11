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
          <div className="text-center text-white text-base opacity-80 ">© {date} BY BRAVAS DIGITAL</div>
    </div>
  )
}

export default Footer
