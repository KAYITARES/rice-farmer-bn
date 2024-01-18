
import mongoose from "mongoose";


const userchemas=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    identification:{
        type:Number,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confrimpassword:{
        type:String,
        required:true
    },
    picture: { type: String,required:true },
    landReport: { type: String, required:true},
    idPhotocopy: { type: String, required:true},
    letter:{type:String ,required:true},
    role:{
        type:String,
        enum:["user","member","admin"],
        default:"user"
    },
    signedAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const User=mongoose.model("User",userchemas)
export default User