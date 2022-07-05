import { Router } from "express";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/sign-up", userController.signUp);
userRouter.post("/sign-in", userController.signIn);

export default userRouter;
