import express from "express"
import { createUser, loginUser, refreshToken, ping } from "../controller/userController.js"

const userRouter = express.Router()

userRouter.get('/ping', ping)
userRouter.post('/create', createUser)
userRouter.post('/user-login', loginUser)
userRouter.post('/refreshToken', refreshToken)

export default userRouter