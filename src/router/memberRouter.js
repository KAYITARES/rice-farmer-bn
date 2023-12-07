
import express from "express"
import MemberController from "../Controller/memberController"
import Datachecker from "../middleware/dataChequer"



const router=express.Router()
router.post("/signup",Datachecker.memberRegistIsEmpt,Datachecker.EmailExist,MemberController.registration)
router.post("/login",MemberController.login)
router.get("/get",MemberController.getallmember)
router .delete("/delete/:id",MemberController.deleteone)


export default router