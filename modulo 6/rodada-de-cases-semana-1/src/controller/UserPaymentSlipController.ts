import { Request, Response } from "express";
import { UserPaymentSlipBusiness } from "../business/UserPaymentSlipBusiness";

export class UserPaymentSlipController {
  async createUserPaymentSlip(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const userPaymentSlipBusiness = new UserPaymentSlipBusiness();

      await userPaymentSlipBusiness.createUserPaymentSlip(token);

      res.status(200).send("Accepted");
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async getUserPaymentSlipInfo(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const userPaymentSlipBusiness = new UserPaymentSlipBusiness();

      const getUserPaymentSlip =
        await userPaymentSlipBusiness.getUserPaymentSlipInfo(token);

      res.status(200).send(getUserPaymentSlip);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}
