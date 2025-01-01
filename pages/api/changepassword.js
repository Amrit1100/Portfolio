import client from "@/lib/mongodb"
export default async function handler(req, res){
    if (req.method === "POST"){
     let token = req.body.token
     let pass = req.body.pass
     console.log(token)
     if (token===undefined){
        res.json({"response" : "Invalid token"})
     }else{
         client.connect()
         let db = client.db("Portfolio")
         let users = db.collection("Users")
         let user = await users.findOne({token})
         client.close()
         if (user){
           await users.updateOne({token}, {$set : {"password" : pass}, $unset : {"token" : ""}})
           res.json({"response" : "success"})
         }else{
            res.json({"response" : "Invalid token"})
         }
        }

    }else{
        res.json({error : "This type of request is not allowed."})
    }
}