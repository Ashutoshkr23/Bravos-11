
import React from 'react'
import { motion } from 'framer-motion';


function Demo() {

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    };
    const logos = ['/assets/images/customer/img1.png', '/assets/images/customer/img2.png', '/assets/images/customer/img3.png', '/assets/images/customer/img4.png', '/assets/images/customer/img5.png', '/assets/images/customer/img6.png', '/assets/images/customer/img7.png', '/assets/images/customer/img8.png', '/assets/images/customer/img9.png', '/assets/images/customer/img10.png', '/assets/images/customer/img11.png', '/assets/images/customer/img12.png', '/assets/images/customer/img13.png', '/assets/images/customer/img14.png', '/assets/images/customer/img15.png', '/assets/images/customer/img16.png', '/assets/images/customer/img17.png', '/assets/images/customer/img18.png', '/assets/images/customer/img19.png', '/assets/images/customer/img20.png',];

    return (
           <div>
            <div className="container">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 252 257"
                    className="item"
                >
                    <motion.path
                        d="M96.428 100.5C77.0946 99.3333 36.228 96.2 27.428 93C16.428 89 -38.572 54.5 64.928 41C90.452 38 143.1 31.6 149.5 30C157.5 28 197.5 12 118.5 2.5"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                </motion.svg>
            </div>
           </div>

    )
      }

  

export default Demo
