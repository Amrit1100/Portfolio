import client from "@/lib/mongodb";


export default async function handler(req, res){
    if (req.method == "POST"){
    let email = req.body.email
    let comment = req.body.usercomment
    let slug = req.body.slug
    client.connect()
    let db = client.db("Portfolio")
    let blogs = db.collection("Blogs")
    await blogs.updateOne({slug}, {$push : {comments : {"name" : email,"comment" : comment} }})
    let blog = await blogs.findOne({slug})
    res.json({success:true,blog})
}else{
    res.json({"error" : "This type of request is not allowed."})
}
}