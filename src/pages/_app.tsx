import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import TagManager from 'react-gtm-module';
import ReactPixel from 'react-facebook-pixel';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('6727428820606216') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KWL9DRL' });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
