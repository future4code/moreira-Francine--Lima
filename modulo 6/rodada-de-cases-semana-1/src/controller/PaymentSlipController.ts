import { Request, Response } from "express";
import { PaymentSlipBusiness } from "../business/PaymentSlipBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { paymentSlipInputDTO } from "../model/PaymentSlip";

export class PaymentSlipController {
  async createPaymentSlip(req: Request, res: Response) {
    try {
      const input: paymentSlipInputDTO = {
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
      };

      const paymentSlipBusiness = new PaymentSlipBusiness();
      const inputCreatePaymentSlip =
        await paymentSlipBusiness.createPaymentSlip(input);
      res.status(200).send({
        message: "Accepted",
        token: inputCreatePaymentSlip,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
  async getPaymentSlipInfo(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const paymentSlipBusiness = new PaymentSlipBusiness();
      const getPaymentSlip = await paymentSlipBusiness.getPaymentSlipInfo(
        token
      );

      res.status(200).send(getPaymentSlip);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
