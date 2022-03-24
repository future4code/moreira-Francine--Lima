//Exercício 1
//como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Através dos scripts :)
const nome = process.argv[2]; //posição da variavel quando eu chamar o script, posicção 2
const age = process.argv[3]; //posição da variavel quando eu chamar o script, posição 3
const newAge = Number(age) + 7;
if (nome === undefined || age === undefined) {
  console.log("Você não digitou algum parâmetro.");
}
console.log(
  "\x1b[33m%s\x1b[1m",
  `Olá, ${nome}! Você tem ${age} anos. Em sete anos você terá ${newAge} anos.`
);
