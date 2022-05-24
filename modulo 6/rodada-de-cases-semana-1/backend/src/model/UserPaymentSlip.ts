export class UserPaymentSlip {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private cpf: string,
    private amount: number,
    private payment_slip_number: number,
    private creator_user_id: string
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getTicketsCPF() {
    return this.cpf;
  }

  getAmount() {
    return this.amount;
  }

  getPaymentSlipNumber() {
    return this.payment_slip_number;
  }
  getCreator_id() {
    return this.creator_user_id;
  }
  static paymentSlip(): number {
    const paymentSlipNumber = Math.floor(Math.random() * 10000000000000);
    return paymentSlipNumber;
  }
}

// export interface paymentSlipInputDTO {
//   name: string;
//   email: string;
//   cpf: string;
//   amount: number;
// }
