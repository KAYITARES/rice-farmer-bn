import mongoose from "mongoose";

const productSchemas=new mongoose.Schema({

    productname:{
        type:String,
        required:true
    },
    quolity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    proDate:{
        type:String,
        required:true
    },
    expDate:{
        type:String,
        required:true
    },
    descliption:{
        type:String,
        required:true
    },
    images:{
        type:Array,
        required:true
    },
    postAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const Product=mongoose.model("Product",productSchemas)
export default Product