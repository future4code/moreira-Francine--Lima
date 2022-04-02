import express from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { accounts } from "./accounts";
import { Account, Transaction } from "./type";

const app = express();

app.use(express.json());
app.use(cors());
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
//Create user
//1
//
app.post("/accounts", (req, res) => {
  let error = 400;
  let ageCalc = 0;
  let birthday = req.body.birthday;
  let name = req.body.name;
  let cpf = req.body.cpf;
  const newAccount: Account = {
    birthday: req.body.birthday,
    name: req.body.name,
    cpf: req.body.cpf,
    balance: 0,
    transactions: [],
  };
  function ageCalculation(): number {
    //current date
    const date = new Date();
    let currYear: number = date.getFullYear();
    let currMonth: number = date.getMonth() + 1;
    //birth date
    const splitBirth = birthday.split("/");
    const yearBirth: number = Number(splitBirth[2]);
    const monthBirth: number = Number(splitBirth[0]);

    if (currMonth > monthBirth) {
      return (ageCalc = currYear - yearBirth);
    } else {
      return (ageCalc = currYear - yearBirth - 1);
    }
  }
  console.log("age", ageCalc);
  try {
    if (!name || !birthday || !cpf) {
      error = 422;
      throw new Error("Um ou mais campos do body estão em branco.");
    }

    if (
      birthday.length < 10 ||
      typeof name !== "string" ||
      typeof birthday !== "string" ||
      typeof cpf !== "string" ||
      cpf.length !== 11 ||
      isNaN(ageCalc)
    ) {
      error = 422;
      throw new Error(
        "Um ou mais campos do body não possuem o formato esperado."
      );
    }
    if (ageCalculation() < 18) {
      error = 404;
      throw new Error(
        "Você tem menos de 18 anos, infelizmente só abrimos conta para pessoas maiores de 18 anos."
      );
    }
    console.log(ageCalc);
    if (accounts.find((user) => user.cpf === cpf)) {
      error = 409;
      throw new Error("CPF já cadastrado");
    }
    accounts.push(newAccount);
    res.status(201).send(accounts);
  } catch (e: any) {
    res.status(error).send(e.message);
  }
});
//2
app.get("/accounts", (req, res) => {
  try {
    res.status(200).send(accounts);
  } catch (err: any) {
    res.status(err).send(err.message);
  }
});
//3
app.get("/accounts/balance", (req, res) => {
  let err = 400;
  const auth = req.headers.authorization as string;
  const name = req.headers.name as string;

  const isClient: Account[] | undefined = accounts.filter((user) => {
    return user.cpf === auth && user.name.toLowerCase() === name.toLowerCase();
  });

  try {
    if (
      !accounts.find((user) => {
        return user.cpf === auth;
      })
    ) {
      err = 404;
      throw new Error("O CPF digitado não está cadastrado no banco de dados.");
    }
    if (auth.length !== 11 || !name || !auth || isClient.length === 0) {
      err = 422;
      throw new Error(
        "As informações enviadas estão incorretas ou não foram digitadas, verifique se o CPF possui 11 dígitos e se o nome está correto."
      );
    }

    res.status(200).send(isClient.map((account) => account.balance));
  } catch (e: any) {
    res.status(err).send(e.message);
  }
});
//4 Add funds
app.put("/accounts/funds", (req, res) => {
  let err = 400;
  const auth = req.headers.authorization as string;
  const name = req.headers.name as string;
  const value = req.body.balance as number;

  const isClient: Account[] | undefined = accounts.filter((user) => {
    return user.cpf === auth && user.name.toLowerCase() === name.toLowerCase();
  });

  try {
    if (
      !accounts.find((user) => {
        return user.cpf === auth;
      })
    ) {
      err = 404;
      throw new Error("O CPF digitado não está cadastrado no banco de dados.");
    }
    if (
      auth.length < 11 ||
      !name ||
      !auth ||
      isClient.length === 0 ||
      !value ||
      typeof value !== "number"
    ) {
      err = 422;
      throw new Error(
        "As informações enviadas estão incorretas ou não foram digitadas, verifique se o CPF possui 11 dígitos, se o nome e o valor do depósito estão corretos."
      );
    }

    res
      .status(200)
      .send(
        isClient.map((account) => (account.balance = account.balance + value))
      );
  } catch (e: any) {
    res.status(err).send(e.message);
  }
});
//5 wire money
app.post("/accounts/wire", (req, res) => {
  let err = 400;
  const authSender = req.headers.authorization as string;
  const name = req.headers.name as string;

  //current date
  const date = new Date();
  let currYear: number = date.getFullYear();
  let currMonth: number = date.getMonth() + 1;
  let currDay: number = date.getDate();

  //filtering client
  const isClient: Account[] | undefined = accounts.filter((user) => {
    return (
      user.cpf === authSender && user.name.toLowerCase() === name.toLowerCase()
    );
  });
  //new Wire
  const newTransaction: Transaction = {
    amount: req.body.amount,
    date: `${currDay}/${currMonth}/${currYear}`,
    description: `CPF do beneficiário: ${req.body.description}`,
  };

  try {
    if (
      !accounts.find((user) => {
        return user.cpf === authSender;
      })
    ) {
      err = 404;
      throw new Error("O CPF digitado não está cadastrado no banco de dados.");
    }
    if (
      req.body.description.length !== 11 ||
      !name ||
      !authSender ||
      isClient.length === 0 ||
      !req.body.amount ||
      typeof req.body.amount !== "number"
    ) {
      err = 422;
      throw new Error(
        "As informações enviadas estão incorretas ou não foram digitadas, verifique se o CPF do beneficiário possui 11 dígitos e se o nome e o valor corretos."
      );
    }
    if (
      isClient.some((account) => {
        return account.balance < req.body.amount;
      })
    ) {
      err = 401;
      throw new Error(
        "Você não possui saldo suficiente para realizar essa transação."
      );
    }
    //access transactions and add a new transaction
    const mapTransactions = isClient.map((account) => {
      account.transactions.push(newTransaction);
      return account.transactions;
    });

    // use in case needs to return all-------
    // const mapAmountFlat = mapTransactions.flat(1);
    // console.log("flat", mapAmountFlat);

    res.status(200).send(
      isClient.map((account) => {
        account.balance = account.balance - req.body.amount;
        return "Saldo: R$ " + account.balance;
        //return all
        // (
        //   "Saldo: R$ " +
        //   account.balance +
        //   "------------------------------------------" +
        //   "Transações atuais:" + "                     "+
        //   mapAmountFlat.map(
        //     (tran) =>
        //       `Data: ${tran.date}, valor: ${tran.amount},  ${tran.description} --`
        //   )
        // );
      })
    );
  } catch (e: any) {
    res.status(err).send(e.message);
  }
});
