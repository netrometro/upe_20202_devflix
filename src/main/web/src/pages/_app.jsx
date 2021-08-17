import '../styles/globals.css'
import {HttpRequestProvider, ThemeProvider} from 'core/providers'
import {Navbar} from 'core/components'

export default function MyApp({Component, pageProps}) {
  return (
    <HttpRequestProvider>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </HttpRequestProvider>
  )
}
