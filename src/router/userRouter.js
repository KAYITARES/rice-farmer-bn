import express from "express"
import userController from "../Controller/userController"
import Validator from "../middleware/validator"
import VelifyAccess from "../middleware/velifyaccess"
import Datachecker from "../middleware/dataChequer"





const router = express.Router()
router.post("/",Validator.memberAcountRule(),Validator.inputvalidator,
Datachecker.memberRegistIsEmpt,Datachecker.EmailExist,userController.requestTobeMember)


router.get("/get",userController.getRequestOfuse)
router.get("/:id",userController.getOnerequest)
router.delete("/",VelifyAccess("admin"),userController.deleterequest)
router.delete("/:id",VelifyAccess("admin"),userController.deleteOnerequest)
router.post("/login",userController.Login)
router.get("/member",userController.getmember)
router.patch("/:id",VelifyAccess("admin"),userController.createMember)
export default router