//Exercícios de interpretação de código

//1-a.Serão impressos no console os items da arrays, seus indexes e a própria array.
//2-a. O novo array apenas com o nome dos usuários.
//3-a. Imprimirá um array somente com os items que não incluam o apelido "Chijo".

//Exercicios de escrita de código

//1-
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
//a.
const nomePet = pets.map((animais) => {
  return animais.nome;
});
console.log(nomePet);

//b.
const soSalsichas = pets.filter((animais) => {
  return animais.raca === "Salsicha";
});
console.log(soSalsichas);

//c.
const poodles = pets.filter((animais) => {
  return animais.raca === "Poodle";
});

const soPoodles = poodles.map((animais) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${animais.nome}!`;
});
console.log(soPoodles);
//2-
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//a.
const apenasNome = produtos.map((nome) => {
  return nome.nome;
});
console.log(apenasNome);

//b.
const produtosComDesconto = produtos.map((preco) => {
  return {
    nome: preco.nome + " " + (preco.preco - preco.preco * 0.05).toFixed(3),
  };
});
console.log(produtosComDesconto);

//c.
const soBebidas = produtos.filter((items) => {
  return items.categoria === "Bebidas";
});
console.log(soBebidas);
//d.
const soYPE = produtos.filter((items) => {
  if (items.nome.includes("Ypê") === true) {
    return items;
  }
});
console.log(soYPE);
//e.
let arrayYPE = soYPE;
//console.log(arrayYPE);
const apenasNomeYpe = arrayYPE.map((nome) => {
  return `Compre ${nome.nome} por apenas: ${nome.preco}`;
});
console.log(apenasNomeYpe);
