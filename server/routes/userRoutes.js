import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/create', createUser)
userRouter.post('/get', getUser)
userRouter.post('/update', updateUser)
userRouter.post('/delete', deleteUser)

export default userRouter