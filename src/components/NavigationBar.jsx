import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useCycle } from "framer-motion";

const NavigationBar = () => {

    // For HamburgerIcon And It's Visibility
    const [hamburgerMenuVisibility, sethamburgerMenuVisibility] = useState("hidden")
    const [hamburgerMenuIcon, sethamburgerMenuIcon] = useState("/static/images/navBar/Mobile_Hamburber_Menu.png");
    const [hamburgerMenuIconSize, sethamburgerMenuIconSize] = useState("50")
    const [hamburgerMenuIconStyle, sethamburgerMenuIconStyle] = useState("bg-[rgba(0,0,0,0.5)] p-4 rounded-[40%] right-5")
    function changeHamburderMenuIcon() {
        if (hamburgerMenuIcon === "/assets/images/navbar/Mobile_Hamburber_Menu.png") {
            sethamburgerMenuIcon("/assets/images/navbar/Mobile_Close_Menu.png");
            sethamburgerMenuIconSize("40");
            sethamburgerMenuIconStyle("right-10");
            sethamburgerMenuVisibility("flex");
        } else if (hamburgerMenuIcon === "/assets/images/navbar/Mobile_Close_Menu.png") {
            sethamburgerMenuIcon("/assets/images/navbar/Mobile_Hamburber_Menu.png");
            sethamburgerMenuIconSize("50");
            sethamburgerMenuIconStyle("bg-[rgba(0,0,0,0.5)] p-4 rounded-[40%] right-5");
            sethamburgerMenuVisibility("hidden");
        }
    }

    // Animaton For HamburgerMenu
    const [open, cycleOpen] = useCycle(false, true);
    const itemVariants = {
        closed: {
            opacity: 0,
        },
        open: { opacity: 1 },
    };

    const sideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
            },
        },
    };

    const setHidden = () => {
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    };

    return (
        <>
            {/* Deskto & Tablet */}
            <section className="md:block hidden absolute top-0 left-0 right-0 navBarSection pt-12 z-50 uppercase">
                <div className="max-width max-w-screen-2xl m-auto px-4 flex items-center justify-between">
                    <div className="left-side flex">
                        <div><a href='/'><img className='w-28 h-auto ml-12' src="static/images/navbar/Logo.png" alt="Alphamint Labs Logo" /></a></div>
                    </div>
                    <div className="right-side mr-12 xl:mr-24 flex lg:gap-10 gap-5 text-[#FFE3E3] opacity-80 text-xl font-semibold">
                        <div className='cursor-pointer hover:drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#about`}>About</a></div>
                        <div className='cursor-pointer hover:drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#solutions`}>Solutions</a></div>
                        <div className='cursor-pointer hover:drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#clients`}>Clients</a></div>
                        <div className='cursor-pointer hover:drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#team`}>Team</a></div>
                        <div className='cursor-pointer hover:drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#contact`}>Contact</a></div>
                    </div>
                    {/* <div className="right-side flex"></div> */}
                </div>
            </section>

            {/* Mobile Only */}
            <section className='md:hidden fixed top-0 left-0 right-0 mt-14 z-50 uppercase'>
                <div className=" max-width flex items-center justify-between">
                    <div className="absolute left-side-section flex ml-6 z-50">
                        <div><Image className='cursor-pointer' src="/assets/images/navbar/Logo.png" alt="Alphamint Labs Logo" width={100} height={500} /></div>
                    </div>
                    <div className={`${hamburgerMenuIconStyle} absolute right-side-section flex`} >
                        <button onClick={() => { changeHamburderMenuIcon(); }} className='z-50'><Image className={`cursor-pointer`} src={hamburgerMenuIcon} alt="" width={hamburgerMenuIconSize} height={500} onClick={() => { cycleOpen(); setHidden(); setHidden(); }} /></button>
                        <AnimatePresence>
                            {open && (<motion.aside initial={{ height: 0, top: "calc(0% - -1rem)", right: "calc(0% - -1rem)", left: "calc(0% - -1rem)", }} animate={{ height: "90vh", transition: { duration: 0.5 }, }} exit={{ height: 0, transition: { delay: 0.7, duration: 0.5 }, }} >
                                <motion.div className={`fixed top-5 left-3 right-3 bottom-14 text-5xl ${hamburgerMenuVisibility} flex-col text-center items-center pt-20 opacity-80 gap-10`} initial="closed" animate="open" exit="closed" variants={sideVariants}>
                                    <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} onClick={() => { cycleOpen(); changeHamburderMenuIcon(); }} className='cursor-pointer capitalize font-bold text-3xl drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#about`}>About</a></motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} onClick={() => { cycleOpen(); changeHamburderMenuIcon(); }} className='cursor-pointer capitalize font-bold text-3xl drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#solutions`}>Solutions</a></motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} onClick={() => { cycleOpen(); changeHamburderMenuIcon(); }} className='cursor-pointer capitalize font-bold text-3xl drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#team`}>Team</a></motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} onClick={() => { cycleOpen(); changeHamburderMenuIcon(); }} className='cursor-pointer capitalize font-bold text-3xl drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#clients`}>Clients</a></motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} onClick={() => { cycleOpen(); changeHamburderMenuIcon(); }} className='cursor-pointer capitalize font-bold text-3xl drop-shadow-[0_0_3px_rgba(255,85,93,1)] hover:text-white'><a href={`#contact`}>Contact</a></motion.div>
                                </motion.div>
                            </motion.aside>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavigationBar