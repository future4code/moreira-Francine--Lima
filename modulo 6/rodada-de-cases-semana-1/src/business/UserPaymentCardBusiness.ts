import { UserCardPaymentDatabase } from "../data/UserCardPaymentDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { UserCardInputDTO, UserCardPayment } from "../model/UserCardPayment";
import { Authenticator } from "../services/Authenticator";
import cardAuthenticator, {
  validateCVV,
  verifyExpDate,
} from "../services/cardAuthenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserPaymentCardBusiness {
  async createUserPaymentCard(
    token: string,
    input: UserCardInputDTO
  ): Promise<void> {
    try {
      const amount: number = 200;
      const status: string = "Accepted";

      //generating id
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      //generating payment slip number
      const paymentCardData = new UserCardPaymentDatabase();
      if (!token) {
        throw new Error("This endpoint requires a header authentication.");
      }

      //token authentication comparison with id
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(token);

      //getting user info
      const userDatabase = new UserDatabase();
      const userData = await userDatabase.getUserById(tokenData.id);

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
      //creating user payment with credit card
      await paymentCardData.createUserPaymentSlip(
        id,
        userData.getName(),
        userData.getEmail(),
        userData.getCpf(),
        amount,
        input.cardHolderName,
        input.cardNumber,
        input.cardExpirationDate,
        input.cvv,
        tokenData.id,
        status
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserPaymentCardInfo(token: string): Promise<UserCardPayment> {
    try {
      //token authentication comparison with id
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(token);
      //getting user info
      const userPaymentCardDatabase = new UserCardPaymentDatabase();
      const userDataPaymentCard = await userPaymentCardDatabase.getUserPayment(
        tokenData.id
      );
      if (!token) {
        throw new Error("This endpoint requires a header authentication.");
      }
      return userDataPaymentCard;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
