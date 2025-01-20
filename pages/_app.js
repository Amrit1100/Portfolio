import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Cookies from 'js-cookie';
import { Toaster } from "@/components/ui/toaster"
import {useEffect, useState } from "react";
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  const [login, Setlogin] = useState(false)
  const [userdetails, Setuserdetails] = useState(false)
  
  useEffect(()=>{
    let loginstatus = Cookies.get("islogin")
    if (loginstatus === "true"){
      let usercookiedetails = Cookies.get("userdetails")
      let parseduserdetails = JSON.parse(usercookiedetails)
      console.log(parseduserdetails)
      Setlogin(true)
      Setuserdetails(parseduserdetails)
    }
  },[])
  return <>
     <Head>
        <link rel="icon" href="/favicon-image.jpg" />
        <title>Portfolio - Amrit</title>
        <meta name="description" content="Welcome to my Portfolio website. In this website, you will find coding and personal blogs written by me." />
      </Head>
  <Navbar login = {login} Setlogin = {Setlogin} userdetails={userdetails} Setuserdetails = {Setuserdetails}/>
  <Component {...pageProps} login = {login} Setlogin = {Setlogin} userdetails={userdetails} Setuserdetails = {Setuserdetails}/>
  <Toaster />
  </>
}
