export type Account = {
  name: string;
  birthday: string;
  cpf: string;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  amount: number;
  date: string;
  description: string;
};
