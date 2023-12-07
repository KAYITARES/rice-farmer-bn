
import express from "express"
import MemberController from "../Controller/memberController"



const router=express.Router()
router.post("/signup",MemberController.registration)


export default router