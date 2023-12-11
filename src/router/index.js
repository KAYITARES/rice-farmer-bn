
import express from "express"
import memberRouter from "./memberRouter"


const router =express.Router()
router.use("/member",memberRouter)

export default router