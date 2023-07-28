import Head from 'next/head';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { SWRConfig } from 'swr'
import fetch from '../lib/fetchJson'

function MyApp({ Component, pageProps }) {
  return <SWRConfig
    value={{
      fetcher: fetch,
      onError: (err) => {
        console.error(err)
      },
    }}
  >
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </SWRConfig>

}

export default MyApp
