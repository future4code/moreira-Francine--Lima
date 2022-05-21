export class UserCardPayment {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private cpf: string,
    private amount: number,
    private cardHolderName: string,
    private cardNumber: string,
    private cardExpirationDate: string,
    private cvv: string,
    private creator_user_id: string,
    private status: string
  ) {}

  getCardHolderName() {
    return this.cardHolderName;
  }
  getCardNumber() {
    return this.cardNumber;
  }
  getCardExpirationDate() {
    return this.cardExpirationDate;
  }
  getCvv() {
    return this.cvv;
  }
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
  getStatus() {
    return this.status;
  }
  getcCreatorId() {
    return this.creator_user_id;
  }
}

export interface UserCardInputDTO {
  cardHolderName: string;
  cardNumber: string;
  cardExpirationDate: string;
  cvv: string;
}
