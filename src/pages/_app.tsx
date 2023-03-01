import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KWL9DRL' });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
