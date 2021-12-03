//console.log("Oláaarr");
//Exercícios de interpretação de código
//1-a.No console serão impressos os valores 10 e 50.
//b.A função seria executada pois foi chamada, mas os valores do resultado não apareceriam no console,
//pois o comando para imprimir os valores no console foi retirado.
//2-a.A função coloca o texto digitado pelo usuário em minúsculas e também verifica se o texto do usuário inclui a palavra "cenoura". A utlidade é buscar a palavra "cenoura" e determinar sua presença através de um boolean de true ou false.
//b.i. True. ii.True. iii.false.

//Exercícios de escrita de código
//1-a.
function semParametro() {
  console.log("Eu sou Fran, tenho 30 anos, moro em Salvador e sou estudante.");
}
semParametro();
//b.
function informacoes(nome, idade, cidade, profissao) {
  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} `
  );
}
informacoes("Fran", 30, "Salvador", "estudante");

//3-a.
function somas(nume1, nume2) {
  const somaa = nume1 + nume2;
  return somaa;
}
const resultadx = somas(1, 1);
console.log("Resultado,", resultadx);
//b.
function boleanoComparacao(nume0, nume3) {
  const comparacao1 = nume0 >= nume3;
  return comparacao1;
}
const resultados = boleanoComparacao(1, 1);
console.log("Resultado,", resultados);
//c.
function parOuNao(nume4) {
  const par = nume4 % 2 === 0;
  return par;
}
const resultados1 = parOuNao(3);
console.log("Resultado,", resultados1);

//d.
function formatar(nome) {
  nome = nome.toUpperCase();
  return nome;
}
let nome1 = formatar("Bom dia");
console.log(nome1, nome1.length);
//3-a.

//somar
function somar(numero0, numero1) {
  const somaDosValores = numero0 + numero1;
  return somaDosValores;
}
let numm = prompt("Digite um numero");
let numm2 = prompt("Digite outro numero");
const resultadoss = somar(Number(numm), Number(numm2));
console.log(`Os numeros inseridos foram: ${numm}, ${numm2}`);
console.log(`Soma: ${resultadoss}`);

//const resultadoSomar = somar( Number(prompt("Digite um numero")),  Number(prompt("Digite outro numero"))

//subtrair
function subtrair(numero0, numero1) {
  const subtracaoDosValores = numero0 - numero1;
  return subtracaoDosValores;
}

const resultadoSubtrair = subtrair(numm, numm2);
console.log(`Subtração: ${resultadoSubtrair}`);

//multiplicar
function multiplicar(numero0, numero1) {
  const multiplicacaoDosValores = numero0 * numero1;
  return multiplicacaoDosValores;
}
const resultadoMultiplicar = multiplicar(numm, numm2);
console.log(`Multiplicação: ${resultadoMultiplicar}`);
//dividir
function dividir(numero0, numero1) {
  const divisaoDosValores = numero0 / numero1;
  return divisaoDosValores;
}
const resultadoDividir = dividir(numm, numm2);
console.log(`Divisão: ${resultadoDividir}`);
