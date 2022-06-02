import { PaymentSlipDatabase } from "../data/PaymentSlipDatabase";
import { paymentSlipInputDTO, PaymentSlip } from "../model/PaymentSlip";
import { Authenticator } from "../services/Authenticator";
import VerifyCPF from "../services/cpfAuthenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PaymentSlipBusiness {
  async createPaymentSlip(payment: paymentSlipInputDTO): Promise<string> {
    try {
      const amount: number = 200;
      const status: string = "Pending";

      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      //generating payment slip number
      const paymentSlipNumber = PaymentSlip.paymentSlip();
      const paymentSlipData = new PaymentSlipDatabase();

      //verify CPF
      const verifyCpf = VerifyCPF(payment.cpf);
      if (!verifyCpf) {
        throw new Error("Invalid cpf");
      }
      if (!payment.email || !payment.name || !payment.cpf) {
        throw new Error("Invalid fields");
      }
      if (payment.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      //creating payment slip
      await paymentSlipData.createPaymentSlip(
        id,
        payment.name,
        payment.email,
        payment.cpf,
        amount,
        paymentSlipNumber,
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

  async getPaymentSlipInfo(token: string): Promise<PaymentSlip> {
    try {
      //token authentication comparison with id
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(token);

      //getting user info
      const userPaymentSlipDatabase = new PaymentSlipDatabase();
      //getting data
      const userDataPaymentSlip =
        await userPaymentSlipDatabase.getPaymentCheckout(tokenData.id);
      if (!token) {
        throw new Error("This endpoint requires a header authentication.");
      }
      return userDataPaymentSlip;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
