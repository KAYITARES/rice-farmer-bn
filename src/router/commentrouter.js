import express from "express"
import commentController from "../Controller/commentController"


const router=express.Router()
router.post("/:productId",commentController.postcomment)
router.get("/",commentController.getallcomment)
router.get("/:commentId",commentController.getone)
router.delete("/",commentController.deletecomment)
router.delete("/:commentId",commentController.deleteone)
export default router