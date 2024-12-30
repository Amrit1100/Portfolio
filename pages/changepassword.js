import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"


const Changepassword = () => {
    const router = useRouter()
    let token = router.query.token
    let [pass, Setpass] = useState()
    let [cpass, Setcpass] = useState()
    let [loading, Setloading] = useState(false)
    const { toast } = useToast()
    const makechangepassword = async()=>{
        if (!pass || !cpass){
          toast({ variant: "destructive",title: "All fields required!"})
        }else if (pass != cpass){
          toast({ variant: "destructive",title: "Password's don't match"})
        }else if (token === undefined){
          toast({ variant: "destructive",title: "Invalid request!."})
        }
        else{
          Setloading(true)
          let response = await fetch("/api/changepassword", {
            method : "POST", 
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({token,pass})
          })
          let data = await response.json()
          Setloading(false)
          if (data.response === "success"){
            toast({ variant: "success",title: "Success! Password changed successfully. Please Login!"})
          }else if (data.response === "Invalid token"){
            toast({ variant: "destructive",title: "Invalid request!."})
          }
        }
    }
  return (
    <div>
      <div>New password</div>
      <div><input type="text" className='text-black' onChange={(e)=>{Setpass(e.target.value)}}/></div>
      <div>Confirm Password</div>
      <div><input type="text" className='text-black' onChange={(e)=>{Setcpass(e.target.value)}}/></div>
      <button className="button my-4 bg-green-600 text-white p-3 rounded-e-md cursor-pointer" onClick={makechangepassword}>{loading?<span>Please wait..</span>:<span>Change Password</span>}</button>
    </div>
  )
}

export default Changepassword
