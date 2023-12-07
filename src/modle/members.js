
import mongoose from "mongoose";


const memberschemas=new mongoose.Schema({
    fullnames:{
        type:String,
        required:true
    },
    identification:{
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
    },
    confrimpassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["member","admin"],
        default:"member"
    },
    signedAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const Member=mongoose.model("Member",memberschemas)
export default Member