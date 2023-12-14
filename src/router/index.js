
import express from "express"
import memberRouter from "./memberRouter"
import productrouter from "./productrouter"
import commentrouter from "./commentrouter"
import annouRouter from "./annouRouter"
import custommerRouter from "./custommerRouter"
import messagerouter from "./messagerouter"


const router =express.Router()
router.use("/member",memberRouter)
router .use("/product",productrouter)
router.use("/comment",commentrouter)
router.use("/announcement",annouRouter)
router.use("/custommer",custommerRouter)
router.use("/contact-us",messagerouter)

export default router