//Cores favoritas
function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string):string[] {
  const arrayDeCores:string[] = [];

  arrayDeCores.push(cor1, cor2, cor3);

  return arrayDeCores;
}
console.log(imprimeTresCoresFavoritas("Azul","Verde","Preto"))



//-----------------------------------------------
// import * as readline from "node:readline";
// // import { stdin, stdout } from "process";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Insira sua primeira cor favorita", function (cor1?: string) {
//   rl.question("Insira sua segunda cor favorita", function (cor2?: string) {
//     rl.question("Insira sua terceira cor favorita", function (cor3?: string) {
//       console.log("Cores", [cor1, cor2, cor3]);
//       rl.close();
//     });
//   });
// });
//--------------------------------------------------

