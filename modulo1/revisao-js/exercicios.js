// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  array = array.length;
  return array;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  array = array.reverse();
  return array;
}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let even = array.filter((num) => num % 2 === 0);
  return even;
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let even = array.filter((num) => num % 2 === 0);
  let squared = even.map((numero) => numero * numero);
  return squared;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maximoValor = Math.max(...array);
  return maximoValor;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let arrayNum = [num1, num2];
  let maiorNumero = Math.max(...arrayNum);
  let menorNumero = Math.min(...arrayNum);
  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
  let diferenca = maiorNumero - menorNumero;
  const objeto = arrayNum.map((num) => {});
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
}
//REFAZER 08:
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let even = array.filter((num) => num % 2 === 0);
  //   let evenN = even.map((num, n) => (n = array.length));
  even.apply(even(n)).map(function myEvenArray() {
    return even;
  });
}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array = array.sort((a, b) => a - b);
  let newArray = [array[array.length - 2], array[1]];
  return newArray;
}
// EXERCÍCIO 11
// Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco.
//  Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
function retornaChamadaDeFilme(filme) {
  return (
    "Venha assistir ao filme " +
    filme.nome +
    ", de " +
    filme.ano +
    "," +
    " dirigido por " +
    filme.diretor +
    " e estrelado por" +
    "  " +
    filme.atores[0] +
    ", " +
    filme.atores[1] +
    ", " +
    filme.atores[2] +
    ", " +
    filme.atores[3] +
    "."
  );
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  function dadosDoUsuario(nome, idade, endereco, email) {
    pessoa = {};
    nome = pessoa.nome;
    idade = pessoa.idade;
    endereco = pessoa.endereco;
    email = pessoa.email;
  }
  let newObject = { ...pessoa };
  newObject.nome = "ANÔNIMO";
  return newObject;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  //   pessoas = [
  //     { nome: "A", idade: 12, altura: 1.8 },
  //     { nome: "B", idade: 20, altura: 1.3 },
  //     { nome: "C", idade: 15, altura: 1.9 },
  //     { nome: "D", idade: 22, altura: 1.8 },
  //     { nome: "E", idade: 10, altura: 1.2 },
  //     { nome: "F", idade: 70, altura: 1.9 },
  //   ];
  //   let accessGranted = pessoas.filter(
  //     (item) => item.altura > 1.5 && item.idade > 14 && item.idade < 60
  //   );
  //   console.log(accessGranted);
  // if (pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade < 60) {
  //let newArray = accesGranted.map((array) => array);

  return accessGranted;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas = consultas.sort((a, b) => {
    return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
  });
  let newConsultasAlf = consultas;
  return newConsultasAlf;
}

// EXERCÍCIO 15B
// function retornaArrayOrdenadoPorData(consultas) {
//   consultas = consultas.sort((a, b) => {
//     a = a.split("/").join(" ").reverse();
//     b = b.split("/").join(" ").reverse();

//     return new Date(a.dataDaConsulta) > new Date(b.dataDaConsulta);
//   });
//   let newConsultasDate = consultas;
//   return newConsultasDate;
// }
