const mongo=require("mongoose")
const mongo_url="mongodb://localhost:27017/dashboard"
// const mongo_url="mongodb+srv://md:8800@cluster0.hzxrinb.mongodb.net/?retryWrites=true&w=majority"


// connecting to mongo db
mongo.set('strictQuery', false)
    mongo.connect(mongo_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(
        console.log("succefully connected")
    ).catch(error=>{
        console.log("connection faild hogya")
        process.exit(1)
    }
    )

    