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
  let height = prompt("What is the height?");
  let width = prompt("What is the width?");
  let area = height * width;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let currentYear = prompt("What is the current year?");
  let birthYear = prompt("What is your year of birth?");
  let age = currentYear - birthYear;
  console.log(age);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nameUser = prompt("What is your name?");
  let ageUser = prompt("What is your age?");
  let emailUser = prompt("What is your email?");
  console.log(
    `Meu nome é ${nameUser}, tenho ${ageUser} anos, e o meu email é ${emailUser}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let color1 = prompt("What is your fav color?");
  let color2 = prompt("What is your fave colore?");
  let color3 = prompt("What is your favorite color?");
  let arrayColors = [];
  arrayColors.push(color1, color2, color3);
  console.log(arrayColors);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  totalTicketsNeeded = custo / valorIngresso;
  return totalTicketsNeeded;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  //duas formas de fazer:
  // return array.pop();
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let a = array[0];

  array[0] = array[array.length - 1];
  array[array.length - 1] = a;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let one = string1.toLowerCase();
  let two = string2.toLowerCase();

  return one === two;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let currentYear1 = prompt("What is the current year?");
  let birthYear1 = prompt("What is your year of birth?");
  let indentityYear = prompt("What is the date of issue of your identity?");
  let reIssue = currentYear1 - indentityYear;
  let age1 = currentYear1 - birthYear1;

  if (age1 <= 20 && reIssue >= 5) {
    console.log(true);
  } else if (age1 > 20 && age1 <= 50 && reIssue >= 10) {
    //outra forma de fazer com operadores ternarios:
    // let res = reIssue >= 10 ? true : false;
    // console.log(res);
    console.log(true);
  } else if (age1 > 50 && reIssue >= 15) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 4 === 0 && ano % 100 != 0) {
    return true;
  } else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 != 0) {
    return false;
  } else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let age2 = prompt("Are you 18 years of age or older?");
  let highSchool = prompt("Did you finish high school?");
  let availability = prompt("Are you available full time?");

  if (age2 === "sim" && highSchool === "sim" && availability === "sim") {
    console.log(true);
  } else {
    console.log(false);
  }
}
