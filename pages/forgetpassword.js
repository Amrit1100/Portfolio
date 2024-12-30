import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"


const Forgetpassword = () => {
  let [email, Setemail] = useState()
  let [loading, Setloading] = useState(false)
  const { toast } = useToast()
  const makeforgetpassword = async()=>{
    Setloading(true)
    let response = await fetch("/api/forgetpassword", {
      method : "POST",
      headers : {"Content-Type" : "application/json"}, 
      body : JSON.stringify({email})
    })
    let data = await response.json()
    Setloading(false)
    if (data.response === "noaccount"){
      toast({ variant: "destructive",title: "No account with this email. Please sign up."})
    }else if (data.response === "accountnotverified"){
      toast({ variant: "destructive",title: "Your account is not verified. Please sign up."})
    }else if (data.response === "success"){
      toast({ variant: "success",title: "Success! Open Gmail for password reset link"})
    }

  }
  return (
    <div className='flex justify-center my-10'>
    <div>
      <h1 className='my-4'>Enter Your Email</h1>
      <input type="email" className='text-black' onChange={(e)=>{Setemail(e.target.value)}}/>
      <div className='button cursor-pointer my-4 bg-green-600 text-white p-4' onClick={makeforgetpassword}>{loading?<span>Please wait...</span>:<span>Send Password Reset Mail</span>}</div>
      </div>
    </div>
  )
}

export default Forgetpassword