import client from "@/lib/mongodb"

export default async function handler(req, res) {
    if (req.method == "POST"){
        let email = req.body.email
        let password = req.body.password
        client.connect()
        let db = client.db("Portfolio")
        let users = db.collection("Users")
        let user = await users.findOne({email})
        if (user){
            res.json({"response" : "usernameExist"})
        }else{
            let x = await users.insertOne({email,password})
            if (x.acknowledged){
                res.status(200).json({"response" : "success"})
            }
        }

    }else{
        res.status(400).json({error : "This type of request is not allowed."})
    }
  }