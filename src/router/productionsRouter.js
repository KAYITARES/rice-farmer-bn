 import express from "express"
 import postProductController from "../Controller/postProductionController"



 const router = express.Router()
 router.post("/",postProductController.productioDiposition)
 router.get("/",postProductController.getproductionOfmember)
 router.get("/:id",postProductController.getoneproductionOfmember)
 router.delete("/",postProductController.deleteproductionOfmember)
 router.delete("/:id",postProductController.deleteoneproductionOfmember)
 export default router