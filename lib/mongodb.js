import {MongoClient} from "mongodb"

let client = new MongoClient(process.env.MONGO_URI)

export default client;




    
