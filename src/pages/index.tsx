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
  
  return (
    <div >
      <Head>
        <title>BRAVAS DIGIITAL</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Offerings/>
      <Team/>
      <Partners/>
      <Testimonials/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default Home
