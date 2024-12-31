import client from "@/lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "POST"){
        let slug = req.body.slug
        let img = req.body.image
        let title = req.body.title
        let author = req.body.author
        let date = req.body.date
        let content = req.body.content
        let comments = []
        client.connect()
        let db = client.db("Portfolio")
        let blogs = db.collection("Blogs")
        let checkedslug = await blogs.findOne({slug})
        if (checkedslug){
            res.json({"response" : "Slugexist"})
        }else{
            await blogs.insertOne({slug,img,title,author,date,content, comments})
            res.status(200).json({"response" : "success"})
        }
        
    }else{
        res.json({error : "This type of request is not allowed."})
    }
}



  