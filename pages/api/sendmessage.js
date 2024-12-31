import transporter from "@/lib/email";


export default async function handler(req, res){
    if (req.method === "POST"){
        let name = req.body.name
        let email = req.body.email
        let message = req.body.message
        await transporter.sendMail({
            from : process.env.EMAIL,
            to : process.env.PERSONALEMAIL,
            subject : "Someone sent a message from portfolio website", 
            html : `<p>Name - ${name}</p>
            <p> Email - ${email}</p>
            <p>Message - ${message} </p>`
        })
        res.json({response : "success"})

    }else{
        res.json({error : "This type of request is not allowed."})
    }
}