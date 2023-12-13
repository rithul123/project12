const mongoose = require("mongoose")
mongoose.connect()
.catch(err=>console.log(err));



let sc=mongoose.Schema;
const studentschema=new sc({
        Admno:Number,
        Name:String,
        Age:Number,
        Course:String
        
    });

var studentmodel=mongoose.model("studentdetails",studentschema)
module.exports=studentmodel;

