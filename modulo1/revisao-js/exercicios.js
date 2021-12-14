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
  let numPares = [];
  for (i = 0; numPares.length < n; i++) {
    if (i % 2 === 0) {
      numPares.push(i);
    }
  }
  return numPares;
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
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
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
   let accessGranted = [];
  for (let item of pessoas) {
    if (item.altura >= 1.5 && item.idade < 60 && item.idade > 14) {
      accessGranted.push(item);
    }
  }
  return accessGranted;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let accessNotGranted = [];
  for (let item of pessoas) {
    if (item.altura < 1.5 || item.idade <= 14 || item.idade >= 60) {
      accessNotGranted.push(item);
    }
  }
  return accessNotGranted;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let comprasTotal = 0;
  contas.forEach((contaCliente) => {
    contaCliente.compras.forEach((expenditure) => {
      comprasTotal = comprasTotal + expenditure;
    });
    contaCliente.saldoTotal = contaCliente.saldoTotal - comprasTotal;
    contaCliente.compras = [];
  });
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas = consultas.sort((a, b) => {
    return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
  });
  let newConsultasAlf = consultas;
  return newConsultasAlf;
}
