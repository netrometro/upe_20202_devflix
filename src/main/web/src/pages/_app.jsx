import '../styles/globals.css'
import Head from 'next/head'

import {HttpRequestProvider, ThemeProvider, UserProvider} from 'core/providers'

export default function MyApp({Component, pageProps}) {
  return (
    <HttpRequestProvider>
      <UserProvider>
        <ThemeProvider>
          <Head>
            <title>{Component.pageTitle}</title>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </HttpRequestProvider>
  )
}
