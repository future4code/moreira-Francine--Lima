import { Account } from "./type";

export const accounts: Account[] = [
  {
    name: "Aya",
    birthday: "19/11/2000",
    cpf: "00054436978",
    balance: 100,
    transactions: [{ amount: 10, date: "26/08/2021", description: "bla" }],
  },
  {
    name: "Anya",
    birthday: "19/11/2000",
    cpf: "04488877720",
    balance: 300,
    transactions: [],
  },
  {
    name: "Angela",
    birthday: "19/11/2000",
    cpf: "04488877730",
    balance: 500,
    transactions: [{ amount: 50, date: "14/01/2021", description: "blabla" }],
  },
];
