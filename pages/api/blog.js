import client from "@/lib/mongodb.js";
export default async function handler(req, res) {
    if (req.method == "POST"){
        try{
            client.connect()
            let db = client.db("Portfolio")
            let collection = db.collection("Blogs")
            let blogs = await collection.find().toArray()
            res.status(200).json(blogs)
        }catch{
            res.json({error : "Error connecting to databse"})
        }
    }else{
        res.status(400).json("This type of request is not allowed.")
    }
}
