import { Router } from "express";
import { UserController } from "../controller/user.controller";

export const userRouter = Router();

userRouter.get('/user', UserController.getAll);