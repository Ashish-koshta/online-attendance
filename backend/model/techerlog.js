const mongoose= require("mongoose");
const tregisterSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    

}) 
const Tregister=new  mongoose.model("Tregister",tregisterSchema)
module.exports=Tregister;