
import express from "express"
import memberRouter from "./memberRouter"
import productrouter from "./productrouter"


const router =express.Router()
router.use("/member",memberRouter)
router .use("/product",productrouter)

export default router