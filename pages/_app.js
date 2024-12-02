import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster"


export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Toaster />
  </>
}
