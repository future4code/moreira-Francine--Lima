import express from "express";
import { UserPaymentCardController } from "../controller/UserPaymentCardController";
import { UserController } from "../controller/UserController";
import { UserPaymentSlipController } from "../controller/UserPaymentSlipController";

export const userRouter = express.Router();

//user with login or signup using payment slip
const userPaymentSlipController = new UserPaymentSlipController();
userRouter.get("/boleto", userPaymentSlipController.getUserPaymentSlipInfo);
userRouter.post("/boleto", userPaymentSlipController.createUserPaymentSlip);

//user with login or signup using credit card
const userCardPaymentController = new UserPaymentCardController();
userRouter.get("/card", userCardPaymentController.getUserPaymentCardInfo);
userRouter.post("/card", userCardPaymentController.createUserPaymentCard);

//sign up and login
const userController = new UserController();
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
