export type Transaction = {
  description: string;
  value: number;
  date: string;
};

export type User = {
  cpf: string;
  name: string;
  age: number;
  balance: number;
  transactions: Transaction[];
};
