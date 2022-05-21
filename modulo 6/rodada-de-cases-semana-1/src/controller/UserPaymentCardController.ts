import { Request, Response } from "express";
import { UserPaymentCardBusiness } from "../business/UserPaymentCardBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserCardInputDTO } from "../model/UserCardPayment";

export class UserPaymentCardController {
  async createUserPaymentCard(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const input: UserCardInputDTO = {
        cardHolderName: req.body.cardHolderName,
        cardNumber: req.body.cardNumber,
        cardExpirationDate: req.body.cardExpirationDate,
        cvv: req.body.cvv,
      };
      const userPaymentCardBusiness = new UserPaymentCardBusiness();

      await userPaymentCardBusiness.createUserPaymentCard(token, input);

      res.status(200).send("Accepted");
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async getUserPaymentCardInfo(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const userPaymentCardBusiness = new UserPaymentCardBusiness();

      const getUserPaymentCard =
        await userPaymentCardBusiness.getUserPaymentCardInfo(token);

      res.status(200).send(getUserPaymentCard);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
