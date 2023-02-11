import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Offerings from '../components/Offerings'
import Team from '../components/Team'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Offerings/>
      <Team/>
      <Partners/>
      <Testimonials/>
    </div>
  )
}

export default Home
