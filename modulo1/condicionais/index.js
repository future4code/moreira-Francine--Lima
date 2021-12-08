// Exercícios de interpretação de código

// 1-a. O código verifica se o número digitado é par ou não, ele o faz por dividir o número digitado por 2 e verifica se o resto da divisão é igual a 0, o que definiria o número digitado como par.
// b.Para números pares.
// c.Para números ímpares.

// 2-a.O código atribui o valor de uma fruta dependendo da fruta que foi digitada.
// b. Será impresso o seguinte: "O preço da fruta Maçã é R$ 2.25 "
// c. O programa atribuirá R$ 5 ao valor da Pêra, Exibindo no console: "O preço da fruta Pêra é R$5"

// 3-a. A primeira linha do código está pedindo para o usuário digitar o primeiro número.
// b.Se o usuário digitar 10 a mensagem será:"Esse número passou no teste". Caso o usuário digite -10 a mensagem será : Uncaught, porque não uma consição definida para o caso específico, ou seja, o código só retornará uma mensagem para números que sejam maiores que zero.
// c. Sim haverá um erro pois a variável let foi definida dentro condicional if, e portanto não está no escopo global e assim quando console.log que a imprime na tela, tentar imprimir a mensagem, não a encontrará pois elá está no escopo local do condicional if e não no escopo global.

//Exercicios de escrita de código
//1-a.
let age = prompt("Digite sua idade");
//b.
const idade = Number(age);
//c.
if (idade >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

//2-
let turno = prompt("Digite seu turno de estudo").toUpperCase();
const turnoResposta = turno;
if (turnoResposta === "M") {
  console.log("Bom Dia!");
} else if (turnoResposta === "V") {
  console.log("Boa Tarde!");
} else {
  console.log("Boa Noite!");
}

//3-
let turno1 = prompt("Digite seu turno de estudo").toUpperCase();
const turnoResposta1 = turno1;
switch (turnoResposta1) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  default:
    console.log("Boa Noite!");
    break;
}

//4-
let generoFilme = prompt("Qual o gênero do filme?").toLowerCase();
let precoFilme = Number(prompt("Qual o valor do ingresso?"));
if (generoFilme == "fantasia" && precoFilme <= 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}

//Desafio

//1-
let generoFilme1 = prompt("Qual o gênero do filme?").toLowerCase();

let precoFilme1 = Number(prompt("Qual o valor do ingresso?"));
let lanchinho = prompt("Qual lanchinho vai comprar?");

if (generoFilme1 == "fantasia" && precoFilme1 <= 15) {
  console.log(`Bom filme! e aproveite seu ${lanchinho}`);
} else {
  console.log("Escolha outro filme :(");
}
