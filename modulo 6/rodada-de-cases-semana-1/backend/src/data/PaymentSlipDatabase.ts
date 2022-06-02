import { BaseDatabase } from "./BaseDatabase";

export class PaymentSlipDatabase extends BaseDatabase {
  private static TABLE_NAME = "Payment_slip_checkout";

  public async createPaymentSlip(
    id: string,
    name: string,
    email: string,
    cpf: string,
    amount: number,
    payment_slip_number: number,
    status: string
  ): Promise<void> {
    try {
      await this.connection(PaymentSlipDatabase.TABLE_NAME)
        .insert({
          id,
          name,
          email,
          cpf,
          amount,
          payment_slip_number,
          status,
        })
        .into(PaymentSlipDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getPaymentCheckout(id: string) {
    try {
      const result = await this.connection(PaymentSlipDatabase.TABLE_NAME)
        .select("*")
        .from(PaymentSlipDatabase.TABLE_NAME)
        .where({ id });
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
