import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster"
import { useState } from "react";


export default function App({ Component, pageProps }) {
  const [login, Setlogin] = useState(false)
  const [userdetails, Setuserdetails] = useState(false)
  return <>
  <Navbar login = {login} Setlogin = {Setlogin} userdetails={userdetails} Setuserdetails = {Setuserdetails} />
  <Component {...pageProps} login = {login} Setlogin = {Setlogin} userdetails={userdetails} Setuserdetails = {Setuserdetails}/>
  <Toaster />
  </>
}
