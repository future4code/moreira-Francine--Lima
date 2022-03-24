// 2a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
type amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number) => {};
};

function obterEstatisticas(numeros: number[]): {} {
  const numerosOrdenados: number[] = numeros.sort(
    (a: number, b: number) => a - b
  );

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: { maior: number; menor: number; media: number } = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
console.log(obterEstatisticas([45, 556, 5515, 82, 2, 68, 6, 7, 8, 9]));
