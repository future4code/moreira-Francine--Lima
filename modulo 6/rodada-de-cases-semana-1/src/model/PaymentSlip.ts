export class PaymentSlip {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private cpf: string,
    private amount: number,
    private payment_slip_number: number
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

  static paymentSlip(): number {
    const paymentSlipNumber = Math.floor(Math.random() * 10000000000000);
    return paymentSlipNumber;
  }
}

export interface paymentSlipInputDTO {
  name: string;
  email: string;
  cpf: string;
}
