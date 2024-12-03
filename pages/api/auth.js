import client from "@/lib/mongodb"


export default async function handler(req, res){
    let token = req.query.token
    client.connect()
    let db = client.db("Portfolio")
    let users = db.collection("Users")
    let x = await users.findOne({token})
    if (!x){
        res.send( `<html>
            <body>
                <h1 style = "text-align : center">Page Not found</h1>
            </body>
          </html>
        `)
    }else{
        await users.updateOne({token}, {$set : {"isverified" : "true"}, $unset : {"token" : ""}})
        res.send( `<html>
            <body>
                <h1 style = "text-align : center, color : purple">Congratulation! Your account has been verified.</h1>
                <a href = "http://localhost:3000/login">Login here </a>
            </body>
          </html>
        `)
    }
}