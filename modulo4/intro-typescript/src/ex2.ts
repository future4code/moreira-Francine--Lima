//Cores favoritas

import * as readline from "node:readline";
// import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Insira sua primeira cor favorita", function (cor1?: string) {
  rl.question("Insira sua segunda cor favorita", function (cor2?: string) {
    rl.question("Insira sua terceira cor favorita", function (cor3?: string) {
      console.log("Cores", [cor1, cor2, cor3]);
      rl.close();
    });
  });
});

//attempt 2
// const prompt = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

//  function imprimeTresCoresFavoritas(cor1:string,cor2:string, cor3:string){
// prompt.question("Insira sua primeira cor favorita", function (cor1: string):string {
//      prompt.close();
//      return cor1

// });
// prompt.question("Insira sua segunda cor favorita", function (cor2: string):string {
//     prompt.close();
//     return cor2
// });
// prompt.question("Insira sua trceira cor favorita", function (cor3: string):string {
//   prompt.close();
//   return cor3
// });
// console.log([cor1, cor2, cor3]);
// }

//original function
// function imprimeTresCoresFavoritas() {

//   const cor1:string = window.prompt("Insira sua primeira cor favorita");
//   const cor2: string = window.prompt("Insira sua segunda cor favorita");
//   const cor3:string =window.prompt("Insira sua terceira cor favorita");
//   return console.log([cor1, cor2, cor3]);
// }
// imprimeTresCoresFavoritas()
