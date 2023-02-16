
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
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <div className='flex'>
            <div>
                <div className='flex justify-between'>
                    <div><img src="" alt="" className='invisible' /></div>
                    <div></div>
                    <div><img src="" alt="" className='sticky' /></div>
                </div>
            </div>
            <motion.div className='h-80 w-80 px-6 py-6 bg-slate-200 grid-cols-2' variants={container}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}  whileInView="animate" viewport={{ once: false, amount: 0.8 }}
                >
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate"  > </motion.div>
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate" ></motion.div>
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate"></motion.div>
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate" ></motion.div>
            </motion.div>

            <motion.div className='h-80 w-80 px-6 py-6 bg-slate-200 grid-cols-2' variants={container}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }} whileInView="animate" viewport={{ once: false, amount: 0.8 }}
            >
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate" viewport={{ once: false, amount: 0.2 }} > </motion.div>
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate" viewport={{ once: false, amount: 0.2 }}></motion.div>
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate" viewport={{ once: false, amount: 0.2 }}></motion.div>
                <motion.div className='bg-dark h-10 w-20 mt-6 mr-6' variants={item} whileInView="animate" viewport={{ once: false, amount: 0.2 }}></motion.div>
            </motion.div>
        </div>
        
    )
      }

  

export default Demo

{ /*transition = {{ duration: 0.3 } }  initial = "initial" whileInView = "animate" viewport = {{ once: false, amount: 0.8 }}}*/ }