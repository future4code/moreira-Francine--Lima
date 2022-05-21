import { BaseDatabase } from "./BaseDatabase";

export class UserCardPaymentDatabase extends BaseDatabase {
  private static TABLE_NAME = "Payment_card_user";

  public async createUserPaymentSlip(
    id: string,
    name: string,
    email: string,
    cpf: string,
    amount: number,
    cardHolderName: string,
    cardNumber: string,
    cardExpirationDate: string,
    cvv: string,
    creator_user_id: string,
    status: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          email,
          cpf,
          amount,
          cardHolderName,
          cardNumber,
          cardExpirationDate,
          cvv,
          creator_user_id,
          status,
        })
        .into(UserCardPaymentDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getUserPayment(creator_user_id: string) {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(UserCardPaymentDatabase.TABLE_NAME)
        .where({ creator_user_id });
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
