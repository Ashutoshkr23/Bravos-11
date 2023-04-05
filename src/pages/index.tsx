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
import Script from 'next/script'


const Home: NextPage = () => {
  
  return (
    <div >
      
      <Head>
      {/* Adding script for microsoft clarity */}
      <Script
        id="ms_clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "gj7rym9a4k");
        `,
        }}
      />
        
        <title>BRAVAS DIGITAL</title>
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
