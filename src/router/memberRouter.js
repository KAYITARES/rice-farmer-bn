
import express from "express"
import MemberController from "../Controller/memberController"
import Datachecker from "../middleware/dataChequer"
// import Validator from "../middleware/validator"
import VelifyAccess from "../middleware/velifyaccess"



const router=express.Router()
router.post("/signup",Datachecker.memberRegistIsEmpt,Datachecker.EmailExist
,MemberController.registration)
router.post("/login",MemberController.login)
router.get("/get",VelifyAccess("member"),MemberController.getallmember)
router .delete("/delete/:id",MemberController.deleteone)
router.get("/get/:id",MemberController.getone)
router.delete("/delete",MemberController.deletealll)


export default router