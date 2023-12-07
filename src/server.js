import mongoose from "mongoose";
import bodyParser from "body-parser";
import express  from "express";
import dotenv from "dotenv"


dotenv.config()

const Farmers=express()
Farmers.use(bodyParser.json())

const port=process.env.PORT
const db=process.env.DATABASE


Farmers.listen(port,()=>{
    console.log(`Thanks port running on ${port}`)
})


mongoose.connect(db).then(()=>{
    console.log(`Thanks database successfuly connected!!!`)
}).catch((err)=>{
    console.log(`Ok error is : ${err}`)
})