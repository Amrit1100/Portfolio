import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster"
import { useState } from "react";


export default function App({ Component, pageProps }) {
  const [login, Setlogin] = useState(false)
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Toaster />
  </>
}
