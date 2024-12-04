import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/router';
const Login = ({login,Setlogin, userdetails, Setuserdetails}) => {
  let [email,Setemail] = useState()
  let [password,Setpassword] = useState()
  let [loading,Setloading] = useState(false)
  let [visibility, Setvisibility] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const makeLogin = async()=>{
    if (!email || !password){
      toast({ variant: "destructive",title: "All fields required!"})
    }else{
      Setloading(true)
      let response = await fetch("/api/login", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({email,password})
      }) 

      let data = await response.json()
      Setloading(false)
      if (data.response == "noaccount"){
        toast({ variant: "destructive",title: "No Account with this email!"})
      }else if (data.response == "incpassword"){
        toast({ variant: "destructive",title: "Incorrect Password!"})
      }else{
        toast({variant : "success",title : `Login Successful! Welcome ${data.userdetails.name}`})
        Setlogin(true)
        Setuserdetails(data.userdetails)
        console.log(data.userdetails)
        router.push("/")
      }
    }
        

  }
  return (
    <div>
  <div className="bg-gray-950 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-transparent shadow border-2 border-white">
            <h2 className="text-white-800 text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-white-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input onChange = {(e)=>{Setemail(e.target.value)}} name="username" type="text" required className="w-full text-black text-sm border border-white-300 px-4 py-3 rounded-md outline-purple-600" placeholder="Enter user name" value={email} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" stroke="black" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-white-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                <span className='relative flex w-full'><input value = {password} onChange = {(e)=>{Setpassword(e.target.value)}} name="password" type={visibility?"text":"password"} className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500" placeholder="Enter confirm password" />{visibility?<IoEyeSharp className='absolute right-3 text-black top-4 cursor-pointer text-lg' onClick={()=>{Setvisibility(false)}}/>:<FaEyeSlash onClick={()=>{Setvisibility(true)}} className='absolute right-3 text-black top-4 cursor-pointer text-lg'/>}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-purple-600 focus:ring-purple-500 border-white-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-white-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="/" className="text-purple-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button disabled = {loading} onClick = {makeLogin} type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none">
                  <span>{loading?<span>Please wait...</span>:<span>Sign in</span>}</span>
                </button>
              </div>
              <p className="text-white-800 text-sm !mt-8 text-center">Don't have an account? <a href="/signup" className="text-purple-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
