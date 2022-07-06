import express from 'express'
import { refreshUsersController, getUserController } from '../controllers/admin.controller'

const adminRouter = express.Router()
adminRouter.get('/refresh', refreshUsersController)
adminRouter.get('/users', getUserController)

export default adminRouter
