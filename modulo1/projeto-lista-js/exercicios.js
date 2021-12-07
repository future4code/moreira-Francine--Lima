// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura1 = Number(prompt("Digite a altura"));
  let largura1 = Number(prompt("Digite a largura"));
  const area = altura1 * largura1;
  console.log(area);
  //return area;
}
//calculaAreaRetangulo(altura1, largura1);
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoatual = Number(prompt("Em que ano estamos?"));
  let anoDeNascimento = Number(prompt("Em que ano você nasceu?"));
  const idade = anoatual - anoDeNascimento;
  console.log(idade);
}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura);
  return imc;
}
console.log(calculaIMC(57, 1.57));

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome1 = prompt("Qual o seu nome?");
  let idade1 = prompt("Qual a sua idade?");
  let email1 = prompt("Qual o seu e-mail?");
  console.log(
    `Meu nome é ${nome1}, tenho ${idade1} anos, e o meu email é ${email1}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corr1 = prompt("Qual a sua cor favorita?");
  let corr2 = prompt("Digita outra cor que gosta");
  let corr3 = prompt("Digite mais uma cor que gosta");
  let arrayEmpty = [];
  const enchendo = arrayEmpty;
  enchendo = enchendo.push(corr1);
  enchendo = enchendo.push(corr2);
  enchendo = enchendo.push(corr3);
  console.log(enchendo);
}
console.log(imprimeTresCoresFavoritas());
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase();
  return string;
}
console.log(retornaStringEmMaiuscula());

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let profit = custo / valorIngresso;
  console.log(profit);
  return profit;
}
console.log(calculaIngressosEspetaculo());

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const final = string1.length === string2.length;
  return final;
}
console.log(checaStringsMesmoTamanho());

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let primeirElemento = array[0];
  console.log(primeirElemento);
  return primeirElemento;
}
console.log(retornaPrimeiroElemento([])); //colocando uma array no parametro

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let last = array[array.length - 1];
  return last;
}
console.log(retornaUltimoElemento([]));

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let c = array[0];

  array[0] = array[array.length - 1];
  array[array.length - 1] = c;
  return array;
}
console.log(trocaPrimeiroEUltimo([]));
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  const comparacao = string1 === string2;
  return comparacao;
}
console.log(checaIgualdadeDesconsiderandoCase());
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
