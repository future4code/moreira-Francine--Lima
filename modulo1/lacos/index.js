//Exercícios de interpretação de códigos
//1. O codigo irá somar incrementar o i em +1, até que i<5, e mostrara no console os valores de i ateé que a consição i<5 seja satisfeita, gerando o valor dez de acordo com as expressões abaixo:
// i      i++         valor +=1
// 0       1           0+1
// 1       2           1+2
// 2       3           3+3
// 3       4           6+4
// 4       -            10
//2-a.O código mostrará no console tos os números maiores que 18 que serão:19,21,23,25,27 e 30.
//b. Sim o for..of.. é uma das formas simplificadas de leitura de elementos de uma array.
/*b.
      ex.  const arrayNum=[1,2,3]
           for(let numero of arrayNum){ console.log(numero)}*/
//3-a.O resultado seriam 4 linhas com asteriscos, similar a tabela da primeira questão, a 1a linha contaria com um asterisco a 2a com 2 e assim por diante até satisfazer a condição de "asteriscos < quantidadeAtual + 1".

//Exercícios de escrita de código
//1.

let howMany = prompt("Quantos bichos de estimação você tem?");
let noPets = Number(howMany);
let petName;
let petArray = [];
while (noPets > 0) {
  petName = prompt(`Digite os nomes dos seu pets`);
  noPets = noPets - 1;
  petArray.push(petName);
  console.log(petArray);
}

// 2-
//a.
const arrayOriginal = [1, 2, 3, 4];
function verArray(array) {
  for (let valor of arrayOriginal) {
    console.log(valor);
  }
}
verArray(arrayOriginal);

//b.
function divisao(array) {
  let dividido;
  for (let num of array) {
    dividido = num / 10;
    console.log(dividido);
  }
}
divisao(arrayOriginal);
//c.
function imprimePares(array) {
  const pares = [];
  let par;
  for (let num1 of array) {
    if (num1 % 2 === 0) {
      par = num1;
      pares.push(num1);
    }
  }
  console.log(pares);
}
imprimePares(arrayOriginal);
//d.
function imprimeNovaArray(array) {
  const novaArray = [];
  let indice = 0;
  for (let indexxx of arrayOriginal) {
    indice++;
    novaArray.push(`O elemento do índex ${indexxx} é: numero ${indice}`);
    //console.log(`O elemento do índex ${indexxx} é: numero ${indice}`);
  }
  console.log(novaArray);
}

imprimeNovaArray(arrayOriginal);
//e.
const arrayOriginal1 = [1, 2, 3, 4];
function retornaMaiorNumero(array) {
  let maiorNumero = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }

  return maiorNumero;
}
console.log(retornaMaiorNumero(`O maior número é:${arrayOriginal1}`));
//Menor numero
function retornaMenorNumero(array) {
  let menorNumero = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > menorNumero) {
      menorNumero = array[i];
    }
  }

  return menorNumero;
}
console.log(retornaMenorNumero(`O menor número é:${arrayOriginal1}`));
