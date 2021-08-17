import '../styles/globals.css'
import {HttpRequestProvider, ThemeProvider} from 'core/providers'
import Head from 'next/head'

export default function MyApp({Component, pageProps}) {
  return (
    <HttpRequestProvider>
      <ThemeProvider>
        <Head>
          <title>{Component.pageTitle}</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </HttpRequestProvider>
  )
}
