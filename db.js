const mongoose=require('mongoose')
const mongoURI="mongodb+srv://Chandra:hdFLG3KwIPkUAz0i@cluster0.titzik6.mongodb.net/auth?retryWrites=true&w=majority"
const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true },(err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("connected")
        }

    })
}
module.exports=mongoDB;
