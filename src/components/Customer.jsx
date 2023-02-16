import React from 'react'

function Customer({ open2, setOpen2 }) {
    const logos = ['/assets/images/customer/img1.png', '/assets/images/customer/img2.png', '/assets/images/customer/img3.png', '/assets/images/customer/img4.png', '/assets/images/customer/img5.png', '/assets/images/customer/img6.png', '/assets/images/customer/img7.png', '/assets/images/customer/img8.png', '/assets/images/customer/img9.png', '/assets/images/customer/img10.png', '/assets/images/customer/img11.png', '/assets/images/customer/img12.png', '/assets/images/customer/img13.png', '/assets/images/customer/img14.png', '/assets/images/customer/img15.png', '/assets/images/customer/img16.png', '/assets/images/customer/img17.png', '/assets/images/customer/img18.png', '/assets/images/customer/img19.png', '/assets/images/customer/img20.png',];

    return (
        <div className='fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-20' onClick={() => {
            setOpen2(false);
        }}>
            <div className='w-2/5 bg-white z-30 '>
                <div className="grid grid-cols-5 " >
                    {logos.map((logo, index) => (
                        <div key={index} className="border px-2 py-2 border-blue-500">
                            <img src={logo} alt={`Logo ${index}`} className="w-full object-contain h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Customer
