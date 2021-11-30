//Exercícios de interpretação de código:
/*
1-Primeiro o console mostrará o valor de b=10
após a mudança o console mostrará os seguintes valores:

a=10
b=5

2-Aparecerá no console:

a=10
b=10
c=10

3-Sugerindo novos nomes para as variáveis:

let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) */

//Exercícios de escrita de código
//1° Exercício:

let nome = prompt("Qual o seu nome?");
let age = prompt("Qual a sua idade?");
console.log(typeof nome, typeof age);
console.log("Olá,", nome, "você tem", age, "anos");

/*d-De acordo com as minhas pesquisas null geralmente é utilizado para objetos, representando uma referência vazia. Então acredito que trata-se de um bug no Java Script.
f- Notei que os dois valores que entrei foram considerados como string, pois o prompt só retorna strings*/

//2° Exercício:

let pergunta1 = prompt("Está frio hoje?");
let pergunta2 = prompt("Você bebeu agua hoje?");
let pergunta3 = prompt("Você já almoçou?");

const resposta1 = pergunta1;
const resposta2 = pergunta2;
const resposta3 = pergunta3;

console.log("Está frio hoje?-", resposta1);
console.log("Você bebeu agua hoje?-", resposta2);
console.log("Você já almoçou?-", resposta3);

//3° Exercício:

let a = 10;
let b = 25;

// Aqui farei uma lógica para trocar os valores:
c = b;
b = a;
a = c;

// Depois de trocados, teremos os seguintes resultados:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10

//Desafio:

let userNum1 = prompt("Qual o seu número de usuário 1?");
let userNum2 = prompt("Qual o seu número de usuário 2?");

const numero1 = Number(userNum1);
const numero2 = Number(userNum2);

let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;
console.log(
  "O primeiro número somado ao segundo número resulta em:",
  soma,
  "O primeiro número multiplicado pelo segundo número resulta em:",
  multiplicacao
);
