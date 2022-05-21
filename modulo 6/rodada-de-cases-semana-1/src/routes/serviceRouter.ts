import express from "express";
import { CardPaymentController } from "../controller/CardPaymentController";
import { PaymentSlipController } from "../controller/PaymentSlipController";

export const serviceRouter = express.Router();

//checkout without login or signup
const paymentSlipController = new PaymentSlipController();

//checkout with payment slip without login or signup
serviceRouter.get("/boleto", paymentSlipController.getPaymentSlipInfo);
serviceRouter.post("/boleto", paymentSlipController.createPaymentSlip);

//checkout with card without login or signup
const cardPaymentController = new CardPaymentController();
serviceRouter.get("/card", cardPaymentController.getCardPaymentInfo);
serviceRouter.post("/card", cardPaymentController.createCardPayment);
