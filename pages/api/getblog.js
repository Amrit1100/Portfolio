import client from "@/lib/mongodb"
export default async function handler(req, res) {
    if (req.method == "POST"){  
        let slug = req.body.slug
        console.log(slug)
        client.connect()
        let db = client.db("Portfolio")
        let blogcollection = db.collection("Blogs")
        let blog = await blogcollection.findOne({slug}) 
        res.json(blog)

    }else{
        res.json({error : "This type of request is not allowed."})
    }
}