 import * as readline from "node:readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let dates: string[] = [];
// rl.question("Insira a sua data de nascimento", function (birthDate: string) {
//   rl.question(
//     "Insira a data de emissão do seu RG",
//     function (idIssue: string): string[] {
//       dates.push(birthDate, idIssue);
//       console.log(dates);
//       rl.close();
//       return dates;
//     }
//   );
// });

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function imprimeTresCoresFavoritas(cor1:string,cor2:string, cor3:string){
prompt.question("Insira sua primeira cor favorita", function (cor1: string):string {
     prompt.close();
     return cor1

});
prompt.question("Insira sua segunda cor favorita", function (cor2: string):string {
    prompt.close();
    return cor2
});
prompt.question("Insira sua trceira cor favorita", function (cor3: string):string {
  prompt.close();
  return cor3
});
console.log([cor1, cor2, cor3]);
}


// const data = ["26/04/1962", "14/07/2011"];


// let ageCalc: number;

// function age(data: string[]):number {
//   //current date
//   const date = new Date();
//   let currYear: number = date.getFullYear();
//   let currMonth: number = date.getMonth() + 1;
//   //birth date
//   const splitBirth = data[0].toString().split("/");
//   const yearBirth: number = Number(splitBirth[2]);
//   const monthBirth: number = Number(splitBirth[0]);

//   if (currMonth > monthBirth) {
//     return (ageCalc = currYear - yearBirth);
//   } else {
//     return (ageCalc = currYear - yearBirth - 1);
//   }
  
// }


// let idCalc: number;
// function idAge(data: string[]):number {
//   //current date
//   const date = new Date();
//   let currYear: number = date.getFullYear();
//   let currMonth: number = date.getMonth() + 1;

//   //id Date
//   const splitId = data[1].toString().split("/");
//   const yearId: number = Number(splitId[2]);
//   const monthId: number = Number(splitId[0]);

//   if (currMonth > monthId) {
//     return (idCalc = currYear - yearId);
//   } else {
//     return (idCalc = currYear - yearId - 1);
//   }
// }

// // Para pessoas com menos de 20 anos, ou exatamente 20 anos,
// //  deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// // - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada
// // de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// // - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
// function renewal(idAge: number, personAge: number): boolean {
//   if (personAge <= 20) {
//     return idAge >= 5 ? true : false;
//   } else if (personAge > 50) {
//     return idAge >= 15 ? true : false;
//   } else if (personAge <= 50 || personAge > 20) {
//     return idAge >= 10 ? true : false;
//   } else {
//     return false;
//   }
// }
// console.log(renewal(idCalc, ageCalc));

