import client from "@/lib/mongodb"
import { useToast } from "@/hooks/use-toast"

export default async function handler(req, res) {
    if (req.method == "POST"){
        let email = req.body.email
        let password = req.body.password
        client.connect()
        let db = client.db("Portfolio")
        let users = db.collection("Users")
        let user = await users.findOne({email})
        if (!user){
            res.json({"response": "noaccount"})
        }else if (user.isverified===false){
            res.json({"response" : "notverified"})
        }
        else{
            if (password === user.password){
                let name = user.name
                let username = user.username
                let userdetails = {name,email,username}
                res.json({"response" : "success", userdetails})
            }else{
                res.json({"response" : "incpassword"})
            }
        }
    }else{
        res.status(400).json({error : "This type of request is not allowed."})
    }
  }