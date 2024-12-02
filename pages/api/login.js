export default function handler(req, res) {
    if (req.method == "POST"){
        let username = req.username
        let password = req.password
        

    }else{
        res.status(400).json({error : "This type of request is not allowed."})
    }
  }