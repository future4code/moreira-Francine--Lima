
import { Transaction, User } from "./types";

//Exercício 1
//a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
//  Um construtor serve para instanciar objetos da classe na qual esse construtor foi definido.
//  Instância é a concretização de uma classe.
// const constName=new className(argument(s))

// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// só apareceu no console uma vez.
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transactions[]=[] ;

  constructor(cpf: string, name: string, age: number) {
    // console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
 transact(transaction:Transactions){
     return this.transactions.push(transaction);
 }
  getName():string {
    return this.name;
  }
  getCpf():string {
    return this.cpf;
  }
  getAge():number {
    return this.age;
  }
  getBalance():number {
    return this.balance;
  }
  getTransactions():Transactions[] {
    return this.transactions;
  }
}

const myUser = new UserAccount("00000000058", "Francine", 31);

//c) Como conseguimos ter acesso às propriedades privadas de uma classe?
// // getName();
console.log(myUser.getName());

// console.log(myUser.getTransactions());
//Se uma classe é privada as propriedades desta classe só pode ser acessada pela própria classe.

//2)a)
class Transactions {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
 
  getDate():string {
    return this.date;
  }
  getValue():number {
    return this.value;
  }
  getDescription():string {
    return this.description;
  }
}

const myTransaction:Transactions = new Transactions("Boletos",20,"24/1/1896");
myUser.transact(myTransaction);



//3a)

class Bank {
  private account:UserAccount[]
  constructor(accounts:UserAccount[]){
      (this.account = accounts);
}
getUser(){
    return this.account
}
}

const bank=new Bank([myUser])
console.log(bank)