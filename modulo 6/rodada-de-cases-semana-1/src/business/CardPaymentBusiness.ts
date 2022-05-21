import { CardPaymentDatabase } from "../data/CardPaymentDatabase";
import { CardInputDTO, CardPayment } from "../model/CardPaymentCheckout";
import { Authenticator } from "../services/Authenticator";
import cardAuthenticator, {
  validateCVV,
  verifyExpDate,
} from "../services/cardAuthenticator";
import VerifyCPF from "../services/cpfAuthenticator";
import { IdGenerator } from "../services/IdGenerator";

export class CardPaymentBusiness {
  async createCardPayment(input: CardInputDTO): Promise<string> {
    try {
      const amount: number = 200;
      const status: string = "Approved";

      //genrating id
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      //verify CPF
      const verifyCpf = VerifyCPF(input.cpf);
      if (!verifyCpf) {
        throw new Error("Invalid cpf");
      }
      if (!input.email || !input.name || !input.cpf) {
        throw new Error("Invalid fields");
      }
      if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
      //verify credit card
      const verifyCreditCard = cardAuthenticator(input.cardNumber);
      if (!verifyCreditCard) {
        throw new Error("Invalid credit card.");
      }
      //validate CVV
      const verifyCVV = validateCVV(input.cvv);
      if (!verifyCVV) {
        throw new Error("Invalid CVV");
      }
      //validate exp date
      const verifyCardExpDate = verifyExpDate(input.cardExpirationDate);
      if (!verifyCardExpDate) {
        throw new Error("Invalid expiration date");
      }
      //creating payment with credit card
      const cardPaymentData = new CardPaymentDatabase();
      await cardPaymentData.createCardPayment(
        id,
        input.name,
        input.email,
        input.cpf,
        amount,
        input.cardHolderName,
        input.cardNumber,
        input.cardExpirationDate,
        input.cvv,
        status
      );

      //generating token
      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id: id,
      });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPaymentSlipInfo(token: string): Promise<CardPayment> {
    try {
      //token authentication comparison with id
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(token);

      //getting user info
      const userCardDatabase = new CardPaymentDatabase();
      //getting data
      const userDataPaymentSlip = await userCardDatabase.getCardPaymentCheckout(
        tokenData.id
      );
      if (!token) {
        throw new Error("This endpoint requires a header authentication");
      }
      return userDataPaymentSlip;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
