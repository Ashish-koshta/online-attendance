const mongoose= require("mongoose");
const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    classs:
    {
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    

}) 
const Register = new mongoose.model("Register",registerSchema)
module.exports=Register;