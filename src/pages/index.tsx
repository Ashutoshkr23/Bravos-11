import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default Home
