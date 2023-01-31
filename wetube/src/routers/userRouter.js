import express from "express"
import { edit, remove, logout } from "../controllers/userController"
import { watch } from "../controllers/videoController"

const userRouter = express.Router()

userRouter.get("/logout", logout)
userRouter.get("/edit", edit)
userRouter.get("/remove", remove)
userRouter.get(":id", watch)

export default userRouter
