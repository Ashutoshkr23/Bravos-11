import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Offerings from '../components/Offerings'
import Team from '../components/Team'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Demo from '../components/Demo'
import Connect from '../components/Connect'
import Footer from '../components/Footer'


const Home: NextPage = () => {
  const fadeDown = {
    initial: {
      y: 50,
      opacity: 0.8
    },
    exit:{
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      }
    }
  }
  return (
    <div >
      <Head>
        <title>Create Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Offerings variantType13={fadeDown} />
      <Team/>
      <Partners/>
      <Testimonials/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default Home
