import { BaseDatabase } from "./BaseDatabase";

export class CardPaymentDatabase extends BaseDatabase {
  private static TABLE_NAME = "Payment_Card_Checkout";

  public async createCardPayment(
    id: string,
    name: string,
    email: string,
    cpf: string,
    amount: number,
    cardHolderName: string,
    cardNumber: string,
    cardExpirationDate: string,
    cvv: string,
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
          status,
        })
        .into(CardPaymentDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getCardPaymentCheckout(id: string) {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(CardPaymentDatabase.TABLE_NAME)
        .where({ id });
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
