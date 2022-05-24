import { UserDatabase } from "../data/UserDatabase";
import { UserPaymentSlipDatabase } from "../data/UserPaymentSlipDatabase";
import { UserPaymentSlip } from "../model/UserPaymentSlip";
import { Authenticator } from "../services/Authenticator";
import VerifyCPF from "../services/cpfAuthenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserPaymentSlipBusiness {
  async createUserPaymentSlip(token: string): Promise<void> {
    try {
      const amount: number = 200;
      const status: string = "Pending";

      //generating id
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      //generating payment slip number
      const paymentSlipNumber = UserPaymentSlip.paymentSlip().toString();
      const paymentSlipData = new UserPaymentSlipDatabase();
      if (!token) {
        throw new Error("This endpoint requires a header authentication.");
      }

      //token authentication comparison with id
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(token);

      //getting user info
      const userDatabase = new UserDatabase();
      const userData = await userDatabase.getUserById(tokenData.id);

      //verify CPF
      const verifyCpf = VerifyCPF(userData.getCpf());
      if (!verifyCpf) {
        throw new Error("Invalid cpf");
      }
      //creating user payment slip
      await paymentSlipData.createUserPaymentSlip(
        id,
        userData.getName(),
        userData.getEmail(),
        userData.getCpf(),
        amount,
        paymentSlipNumber,
        status,
        tokenData.id
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserPaymentSlipInfo(token: string): Promise<UserPaymentSlip> {
    try {
      //token authentication comparison with id
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(token);
      //getting user info
      const userPaymentSlipDatabase = new UserPaymentSlipDatabase();
      const userDataPaymentSlip = await userPaymentSlipDatabase.getUserPayment(
        tokenData.id
      );
      if (!token) {
        throw new Error("This endpoint requires a header authentication.");
      }

      return userDataPaymentSlip;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
