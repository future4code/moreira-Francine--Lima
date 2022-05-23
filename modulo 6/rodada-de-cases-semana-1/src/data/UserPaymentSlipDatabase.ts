import { BaseDatabase } from "./BaseDatabase";

export class UserPaymentSlipDatabase extends BaseDatabase {
  private static TABLE_NAME = "Payment_slip_user";

  public async createUserPaymentSlip(
    id: string,
    name: string,
    email: string,
    cpf: string,
    amount: number,
    payment_slip_number: string,
    status: string,
    creator_user_id: string
  ): Promise<void> {
    try {
      await this.connection(UserPaymentSlipDatabase.TABLE_NAME)
        .insert({
          id,
          name,
          email,
          cpf,
          amount,
          payment_slip_number,
          status,
          creator_user_id,
        })
        .into(UserPaymentSlipDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getUserPayment(creator_user_id: string) {
    try {
      const result = await this.connection(UserPaymentSlipDatabase.TABLE_NAME)
        .select("*")
        .from(UserPaymentSlipDatabase.TABLE_NAME)
        .where({ creator_user_id });
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
