import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster"
import { useState } from "react";
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  const [login, Setlogin] = useState(false)
  const [userdetails, Setuserdetails] = useState(false)

  return <>
     <Head>
        <link rel="icon" href="/favicon-image.jpg" />
        <title>Portfolio - Amrit</title>
        <meta name="description" content="Welcome to my Portfolio website. In this website, you will find coding and personal blogs written by me." />
      </Head>
  <Navbar login = {login} Setlogin = {Setlogin} userdetails={userdetails} Setuserdetails = {Setuserdetails} />
  <Component {...pageProps} login = {login} Setlogin = {Setlogin} userdetails={userdetails} Setuserdetails = {Setuserdetails}/>
  <Toaster />
  </>
}
