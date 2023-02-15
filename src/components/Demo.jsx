
import React from 'react'
import { motion } from 'framer-motion';


function Demo() {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div className="flex flex-row gap-8 my-12"
            variants={container}
            initial="hidden"
            animate="visible"
>
            hello
            <motion.div
                className="flex flex-col"
                variants={item}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="/assets/images/about/Collaboration.png"
                    alt=""
                    className="h-[46px] w-[46px]"
                />
                <motion.p className="text-white text-xs sm:text-base font-bold mt-2">
                    Collaboration
                </motion.p>
            </motion.div>
            <motion.div
                className="flex flex-col"
                variants={item}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="/assets/images/about/Digital-design.png"
                    alt=""
                    className="h-[46px] w-[46px]"
                />
                <motion.p className="text-white text-xs sm:text-base font-bold mt-2">
                    Digital design
                </motion.p>
            </motion.div>
            <motion.div
                className="flex flex-col"
                variants={item}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="/assets/images/about/Data-insights.png"
                    alt=""
                    className="h-[46px] w-[46px]"
                />
                <motion.p className="text-white text-xs sm:text-base font-bold mt-2">
                    Data insights.
                </motion.p>
            </motion.div>
        </motion.div>

    )
      }

  

export default Demo
