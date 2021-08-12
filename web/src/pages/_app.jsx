import "../styles/globals.css";
import { ThemeProvider } from "../core/providers";
import { Navbar } from "../core/components";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
