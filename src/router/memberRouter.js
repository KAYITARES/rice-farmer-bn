
import express from "express"
import MemberController from "../Controller/memberController"
import Datachecker from "../middleware/dataChequer"
import Validator from "../middleware/validator"
import VelifyAccess from "../middleware/velifyaccess"



const router=express.Router()
router.post("/signup",Datachecker.memberRegistIsEmpt,Datachecker.EmailExist
,Validator.memberAcountRule()
,Validator.inputvalidator,MemberController.registration)
router.post("/login",MemberController.login)
router.get("/get",MemberController.getallmember)
router .delete("/delete/:id",VelifyAccess("admin"),MemberController.deleteone)
router.get("/get/:id",MemberController.getone)
router.delete("/delete",VelifyAccess("admin"),MemberController.deletealll)
router.patch("/update/:id",VelifyAccess("admin"),MemberController.updatemember)


export default router