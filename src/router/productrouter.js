import express from "express"
import Productcontroller from "../Controller/productcotroller"


const router =express.Router()
router.post("/post",Productcontroller.postproduct)
router.get("/get",Productcontroller.getallproduct)
router.get("/get/:id",Productcontroller.getone)
router.delete("/delete",Productcontroller.delete)
router.delete("/delete/:id",Productcontroller.deleteone)
router.put("/like/:productId",Productcontroller.Likes)
router.put("/dislike/:productId",Productcontroller.dislike)
export default router