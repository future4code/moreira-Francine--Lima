console.log("hey");

//Exercícios de interpretação de código
//1-a. False b. False c.True d. Boolean

/*2-O problema está no fato de que o prompt só retorna strings, por mais que o usuário digite um número, 
portanto, temos que transformar essas strings recebidas através do prompt em números usando: Number(myVariable).
 */
const primeiroNumero = prompt("Digite um numero!");
const segundoNumero = prompt("Digite outro numero!");
const soma = Number(primeiroNumero) + Number(segundoNumero);

console.log(soma);

/*3-A solução será converter os valores recebidos no prompt em números.Possível solução:
const soma = Number(primeiroNumero) + Number(segundoNumero);
*/

//Exercícios de escrita de código
//1-a.b.c.

let age = prompt("Qual a sua idade?");
let ageAmigo = prompt("Qual a idade do seu melhor amigo(a)?");
console.log("sua idade é maior que a do seu melhor amigo (a)?", age > ageAmigo);
console.log(
  "A diferença de idade entre você e seu amigo(a) é de",
  Number(age) - Number(ageAmigo),
  "anos"
);

//2- a.b.

let numeroPar = prompt("Digite um número par");
console.log(Number(numeroPar) % 2);
//2-c- Sim, o padrão é que o resto da divisão por 2 para números pares é sempre 0 e para ímpares é sempre 1.
//2-d- O resultado do resto da divisão para a ser igual a 1.
//3-

let ageYears = prompt("Qual a sua idade?");
console.log("Idade em meses", Number(ageYears) * 12);
console.log("Idade em dias", Number(ageYears) * 365);
console.log("Idade em segundos", Number(ageYears) * 8760);

//4-
let nummero1 = prompt("Digite um número");
let nummero2 = prompt("Digite outro número");

console.log(Number(nummero1) > Number(nummero2));
console.log(Number(nummero1) === Number(nummero2));
console.log(Number(nummero1) % Number(nummero2) === 0);
console.log(Number(nummero2) % Number(nummero1) === 0);

//Desafio
//KELVIN = (GRAUS_FAHRENHEIT - 32) * (5 / 9) + 273.15;
//GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32
//1-
console.log(((77 - 32) * 5) / 9 + 273.15, "K");
console.log(80 * (9 / 5) + 32, "°F");
console.log(30 * (9 / 5) + 32, "°F");
console.log(((86 - 32) * 5) / 9 + 273.15, "K");

let converter = prompt("Digite o valor em Celsius a ser convertido");
console.log((Number(converter) * 9) / 5 + 32, "°F");
console.log((Number(converter) * 5) / 9 + 273.15, "K");

//2-
let residencia = 280;
let valorKwHora = 0.05;
let desconto = 0.15;
let totalKWPreço = residencia * valorKwHora;
//a.
console.log(totalKWPreço);

//b.
console.log(totalKWPreço - totalKWPreço * desconto);
//3-
//a
let kg = 1;
let libras = 0.45;
let peso = 20;
console.log("20 lb equivalem a", peso / libras, "kilos");

//b.
let kg1 = 1;
let ounces = 35.27;
let peso1 = 10.5;
console.log("10.5 oz equivalem a", peso1 / ounces, "kilos");

//c.
let metros = 1;
let milhas = 0.000621371;
let milhasPercorridas = 100;
console.log("100 milhas equivalem a", milhasPercorridas / milhas, "metros");

//d.

let metros1 = 1;
let ft = 3.28084;
let ftPercorridos = 50;
console.log("50 ft equivalem a", ftPercorridos / ft, "metros");

//e.
let litro = 1;
let galao = 0.264172;
let galoesUtilizados = 103.56;
console.log("103,56 galões equivalem a", galoesUtilizados / galao, "litros");

//f.
let litro1 = 1;
let xicara = 0.25;
let xicarasUtilizadas = 103.56;
console.log("450 xícaras equivalem a", xicarasUtilizadas / xicara, "litros");

//g.
let perguntaConverter = prompt(
  "Entre o valor em galões para converter para litro"
);
const valorPerguntaConverter = Number(perguntaConverter);
let litro2 = 1;
let galao1 = 0.264172;
console.log(
  perguntaConverter,
  "galões equivalem a",
  valorPerguntaConverter / galao1,
  "litros"
);
