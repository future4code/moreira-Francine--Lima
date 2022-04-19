import { client } from "./client";
import { Customer } from "./customer";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { Place } from "./place";
import { Residence } from "./residentsQuantity";
import { User } from "./users";

//1)
// const myUser = new User("ana", "ana@gmail.com", "Ana", "ana");

// //a)
// console.log(myUser.getPass());

//b)Apareceu no console apenas uma vez
//-----------------------------------------

//2)
//a)
// const myCustumer = new Customer(
//   "ana",
//   "batendonoteclado@io.com",
//   "ana",
//   "ana",
//   "0123456"
// );

//b)
//Apenas uma vez, pois só criei um usuário.
//----------------------------------------------

//3a)
// console.log("id", myCustumer.getId());
// console.log("name", myCustumer.getName());
// console.log("email", myCustumer.getEmail());
// console.log("password", myCustumer.getPass());
// console.log("credit card", myCustumer.getCreditCard());
// console.log("purchase total", myCustumer.purchaseTotal);

//b)Sim pois criei um método get para isso.

//4)
//console.log("Greetings", myCustumer.introduceYourself());

//5)
//console.log("Greetings", myCustumer.introduceYourself());

//------------------------------------------------------------

//Polimorfismo
//1) Foi possível imprimir todas as informações
console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);
console.log(client.calculateBill());

//-------------------------------------------------------------

//2a)
// const myPlace=new Place()
//não é possível criar uma instância de uma classe abstrata

//b)Podemos criar uma classe (normal) usando a classe abstrata como herança (inherits).
//E então criar uma instância da classe criada a partir da abstrata.

//-----------------------------------------------------------------

//3)
//Podemos criar uma classe (normal) usando a classe abstrata como herança (inherits).
//E então criar uma instância da classe criada a partir da abstrata.
//Porque possui somente um único método abstrato, portanto deve ser declarada como um método abstrato, além do fato de interfaces não possuírem construtor.
//Uma interface possui vários métodos abstratos, interface não possue construtores.
//Isso responde à primeira pergunta: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.
// As propriedades que uma classe herda de uma interface são sempre públicas
//responde à segunda pergunta: Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces
//Isso responde à terceira pergunta: Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.


const myIndustry = new Industry(5, "41740090");
const myResidents = new Residence(2, "41740090");
const myFloors = new Commerce(1, "41740090");
console.log(myIndustry.getmachines())
console.log(myFloors.getFloors());
console.log(myResidents.getDwellersQuantity());
//-----------------------------------------------------------------------------------------

//4)
