import client from "@/lib/mongodb"
import transporter from "@/lib/email";
import crypto from "crypto"

export default async function handler(req, res) {
    if (req.method == "POST"){
        let name = req.body.name
        let username = req.body.username
        let email = req.body.email
        let password = req.body.password
        client.connect()
        let db = client.db("Portfolio")
        let users = db.collection("Users")
        let user = await users.findOne({email})
        let usernamecheck = await users.findOne({username})
        if (user){
            res.json({"response" : "emailExist"})
        }else if (usernamecheck){
            res.json({"response" :"usernameExist" })
        }
        else{
           let token = crypto.randomBytes(32).toString("hex")
           let verificationLink = `http://localhost:3000/api/auth?token=${token}`
           try{
               await transporter.sendMail({
                from : "portfolio.amrit@gmail.com",
                to : email,
                subject : "Amrit's Portfolio : Verify your Email Address",
                html : `<p>Hi ${name}, </p>
                <p style = "color : red">Please don't click if you are not trying to create account on Amrit's Portfolio</p>
                <p>Click here to verify you email address <a href = ${verificationLink}>Verify email.</a></p>`
               })
               await users.insertOne({name,username,email,password,token,"isverified": false})
               res.status(200).json({"response": "success"})
            }catch(error){
                console.log(error)
            }
            

            }
           

    }else{
        res.status(400).json({error : "This type of request is not allowed."})
    }
  }