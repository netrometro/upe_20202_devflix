import '../styles/globals.css'
import {HttpRequestProvider, ThemeProvider, UserProvider} from 'core/providers'
import {Navbar} from 'core/components'

export default function MyApp({Component, pageProps}) {
  return (
    <HttpRequestProvider>
      <UserProvider>
        <ThemeProvider>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </HttpRequestProvider>
  )
}
