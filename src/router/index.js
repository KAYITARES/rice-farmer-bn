
import express from "express"
import memberRouter from "./memberRouter"
import productrouter from "./productrouter"
import commentrouter from "./commentrouter"


const router =express.Router()
router.use("/member",memberRouter)
router .use("/product",productrouter)
router.use("/comment",commentrouter)

export default router