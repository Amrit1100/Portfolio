import React, { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast"



const Signup = () => {
  let [visibility, Setvisibility] = useState(false)
  let [loading, Setloading] = useState(false)
  let [name, Setname] = useState()
  let [username, Setusername] = useState()
  let [email, Setemail] = useState()
  let [password, Setpassword] = useState()
  let [cpassword, Setcpassword] = useState()
  const { toast } = useToast()

  const makeSignup = async()=>{
    if (!name ||!username || !email || !password || !cpassword){
      toast({ variant: "destructive",title: "All fields required!"})
    }else if(password!=cpassword){
      toast({ variant: "destructive",title: "Password's don't match"})
    }else{
      Setloading(true)
      let response = await fetch("/api/signup", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({name,username,email,password})
      })
      let message = await response.json()
      Setloading(false)
      if (message.response == "emailExist"){
       toast({ variant: "destructive",title: "Email ID already exist"})
      }else if (message.response == "usernameExist"){
        toast({ variant: "destructive",title: "Username taken. Please make another username!"})
      }
      else{
        toast({ variant: "success",title: "Success! Open Gmail to verify your account"})
      }
    }
  }
  return (
    <div>
      <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-4">
          <h1 className='text-lg'>Sign up</h1>
        </div>

        <form>
          <div className="space-y-6">
          <div>
              <label className="text-white text-sm mb-2 block">Name</label>
              <input onChange = {(e)=>{Setname(e.target.value)}} value = {name} name="name" type="text" className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500" placeholder="Enter Name" />
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Username</label>
              <input onChange = {(e)=>{Setusername(e.target.value)}} value = {username} name="username" type="text" className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500" placeholder="Enter Username" />
            </div>


            <div>
              <label className="text-white text-sm mb-2 block">Email Id</label>
              <input onChange = {(e)=>{Setemail(e.target.value)}} value = {email} name="email" type="text" className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">Password</label>
              <span className='relative flex'><input value = {password} onChange = {(e)=>{Setpassword(e.target.value)}} name="password" type={visibility?"text":"password"} className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500" placeholder="Enter confirm password" />{visibility?<IoEyeSharp className='absolute right-3 text-black top-4 cursor-pointer text-lg' onClick={()=>{Setvisibility(false)}}/>:<FaEyeSlash onClick={()=>{Setvisibility(true)}} className='absolute right-3 text-black top-4 cursor-pointer text-lg'/>}</span>
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">Confirm Password</label>
              <span className='relative flex'><input value = {cpassword} onChange = {(e)=>{Setcpassword(e.target.value)}} name="cpassword" type={visibility?"text":"password"} className="text-black bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500" placeholder="Enter confirm password" />{visibility?<IoEyeSharp className='absolute right-3 text-black top-4 cursor-pointer text-lg' onClick={()=>{Setvisibility(false)}}/>:<FaEyeSlash onClick={()=>{Setvisibility(true)}} className='absolute right-3 text-black top-4 cursor-pointer text-lg'/>}</span>
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                I accept the <a href="/" className="text-purple-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="!mt-12">
            <button onClick = {makeSignup} type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none">
              <span>{loading?<span>Please Wait...</span>:<span>Create an Account</span>}</span>
            </button>
          </div>
          <p className="text-white text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" className="text-purple-600 font-semibold hover:underline ml-1">Login here</a></p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
