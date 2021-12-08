//Exercícios de interpretação de código
//1-a. Será impresso o integrante do elenco do filme no index 0, que é: "Matheus Nachtergaele"
//Será impresso também o ultimo integrante do elenco que é:	"Virginia Cavendish"
//E por último será impressa a transmissão de hoje no inde 2 que é: {canal: "Globo", horario: "14h"}
//2-a.
//console.log(cachorro) imprimirá: "Juca", idade: 3, raca: "SRD"
// console.log(gato) imprimirá: "Juba", idade: 3, raca: "SRD"
// console.log(tartaruga):"Juco", idade: 3, raca: "SRD"
//b. A função spread faz uma copia completa de um objeto para outro, nos permitindo adicionar ou alterar propriedades.
//3-a. Será impresso no console o seguinte: false e undefined.
//b. O false deve-se ao fato de backender=false, e o undefined é porque a altura não foi especificada no objeto.

//Exercícios de escrita de código
//1-a.
const objeto1 = {
  nome: "Ana",
  apelidos: ["nana", "na", "nan"],
};
//b.
const novoObjeto1 = {
  ...objeto1,
  apelidos: ["nananan", "aaaana", "anan"],
  //...objeto1,
};
//b.
function recebeObjeto1(objeto) {
  console.log(
    `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`
  );
}
recebeObjeto1(objeto1);
recebeObjeto1(novoObjeto1);

//2-a.
const objeto2 = {
  nome: "Ana",
  idade: 30,
  profissao: "Frontender",
};
const objeto3 = {
  nome: "Fran",
  idade: 31,
  profissao: "Backender",
};
//b.
function retorno(objetos, objetoss) {
  console.log([
    objeto2.nome,
    objeto2.nome.length,
    objeto2.idade,
    objeto2.profissao,
    objeto2.profissao.length,
    objeto3.nome,
    objeto3.nome.length,
    objeto3.idade,
    objeto3.profissao,
    objeto3.profissao.length,
  ]);
}
retorno();
//3-a.
const carrinho = [];
//b.
const fruta0 = {
  nome: "Banana",
  disponibilidade: true,
};
const fruta1 = {
  nome: "Maçã",
  disponibilidade: true,
};
const fruta2 = {
  nome: "Goiaba",
  disponibilidade: true,
};
//c.
function adicionandoCarrinho(fruta) {
  const enchendo = carrinho;
  enchendo.push(fruta0);
  enchendo.push(fruta1);
  enchendo.push(fruta2);
  console.log(carrinho);
}

adicionandoCarrinho();

//Desafios
//1-
function informacoes() {
  const nome0 = prompt("Qual o seu nome?");
  const idade0 = prompt("Qual a sua idade?");
  const profissao0 = prompt("Qual a sua profissão?");
  const infos = {
    nome: nome0,
    idade: idade0,
    profissao: profissao0,
  };
  console.log(infos, typeof infos);
}
informacoes();
//2-
function movies() {
  const infosMovies = {
    nome: "Matrix",
    anoLançamento: 2000,
  };
  const infosMovies2 = {
    nome: "Run",
    anoLançamento: 2020,
  };
  const lancamento = infosMovies.anoLançamento < infosMovies2.anoLançamento;
  const lancamento2 = infosMovies.anoLançamento == infosMovies2.anoLançamento;
  console.log(`O primeiro filme foi lançado antes do segundo?`, lancamento);
  console.log(
    `O primeiro filme foi lançado no mesmo ano do segundo?`,
    lancamento2
  );
}
movies();
//3-
const carrinho1 = [];
const fruta01 = {
  nome: "Banana",
  disponibilidade: true,
};
const fruta11 = {
  nome: "Maçã",
  disponibilidade: true,
};
const fruta12 = {
  nome: "Goiaba",
  disponibilidade: true,
};
function adicionandoCarrinho1(fruta) {
  const enchendo = carrinho1;
  enchendo.push(fruta01);
  enchendo.push(fruta11);
  enchendo.push(fruta12);
  console.log(carrinho1);
}

adicionandoCarrinho1();

function auxiliar(frutas) {
  console.log(
    fruta01.nome,
    !fruta01.disponibilidade,
    fruta11.nome,
    !fruta11.disponibilidade
  );
}
auxiliar();
