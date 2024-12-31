import client from "@/lib/mongodb"
import transporter from "@/lib/email";
import crypto from "crypto"
export default async function handler(req, res){
    if (req.method === "POST"){
        let email = req.body.email
        client.connect()
        let db = client.db("Portfolio")
        let users = db.collection("Users")
        let user = await users.findOne({email})
        if (user){
            if (user.isverfied === false){
                res.json({"response" : "accountnotverified"})
            }else{
              let token = crypto.randomBytes(32).toString("hex")
              let link = `http://${process.env.URL}/changepassword?token=${token}`
              try{

                 await transporter.sendMail({
                    from : "portfolio.amrit@gmail.com",
                    to : email,
                    subject : "Password reset Link",
                    html : `<p>Hi ${user.name},</p>
                    <p>Following is password reset Link </p> 
                    <p style = "color : red"> Please don't click the following link if you are not trying to reset your password for Amrit's Portfolio website account.</p>
                    <a href = ${link}>Reset your password </a>`
                    })
                  try{
                     users.updateOne({email}, {$set : {"token" : token}})
                     res.json({"response" : "success"})
                  }catch{
                    res.json({error : "Error connecting database"})
                  }
              }catch{
                res.json({"response" : "Error sending mail."})
              }
            }
        }else{
            res.json({"response" : "noaccount"})
        }
    }else{
        res.json({error :  "This type of request is not allowed."})
    }
}
