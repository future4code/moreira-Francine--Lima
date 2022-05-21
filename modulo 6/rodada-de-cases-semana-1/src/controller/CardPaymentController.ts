import { Request, Response } from "express";
import { CardPaymentBusiness } from "../business/CardPaymentBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { CardInputDTO } from "../model/CardPaymentCheckout";

export class CardPaymentController {
  async createCardPayment(req: Request, res: Response) {
    try {
      const input: CardInputDTO = {
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
        cardHolderName: req.body.cardHolderName,
        cardNumber: req.body.cardNumber,
        cardExpirationDate: req.body.cardExpirationDate,
        cvv: req.body.cvv,
      };

      const cardPaymentBusiness = new CardPaymentBusiness();

      const token = await cardPaymentBusiness.createCardPayment(input);

      res.status(200).send({ message: "Accepted", token: token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async getCardPaymentInfo(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const cardPaymentBusiness = new CardPaymentBusiness();

      const getCardPayment = await cardPaymentBusiness.getPaymentSlipInfo(
        token
      );

      res.status(200).send(getCardPayment);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
