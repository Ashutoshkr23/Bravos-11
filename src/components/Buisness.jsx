import React from 'react'

function Buisness({ open1 , setOpen1  }) {
    const logo = ['/assets/images/buisness/image1.png', '/assets/images/buisness/image2.png', '/assets/images/buisness/image3.png', '/assets/images/buisness/image4.png', '/assets/images/buisness/image5.png', '/assets/images/buisness/image6.png', '/assets/images/buisness/image7.png', '/assets/images/buisness/image8.png', '/assets/images/buisness/image9.png', '/assets/images/buisness/image10.png', '/assets/images/buisness/image11.png', '/assets/images/buisness/image12.png', '/assets/images/buisness/image13.png', '/assets/images/buisness/image14.png', '/assets/images/buisness/image15.png', '/assets/images/buisness/image16.png', '/assets/images/buisness/image17.png', '/assets/images/buisness/image18.png', '/assets/images/buisness/image19.png', '/assets/images/buisness/image20.png', ];

    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50' onClick={() => {
            setOpen1(false);
        }}>
            <div className='w-2/5 bg-white h-full overflow-y-scroll'>
                <div className="grid grid-cols-4 " >
                    {logo.map((logo, index) => (
                        <div key={index} className="border px-2 py-2 border-blue-500">
                            <img src={logo} alt={`Logo ${index}`} className="w-full object-contain h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default Buisness
