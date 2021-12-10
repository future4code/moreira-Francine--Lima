/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//Função para comprar cartas
function comprarCarta() {
  // Cria array de cartas
  const cartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"];

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)];

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)];

  let valor;

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11;
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10;
  } else {
    // Se nao for uma das letras, só converte a string para número
    valor = Number(numero);
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor,
  };

  return carta;
}
//console.log(comprarCarta());

//RESOLVENDO

//INÍCIO DO JOGO

console.log("Bem vindx ao 21 ou Blackjack :)");
//function play(imprimir, comprarcarta) {
if (confirm("Vamos jogar uma rodada?")) {
  playing();
} else {
  // o que fazer se o usuário clicar "cancelar"
  console.log(`O jogo acabou.`);
}

function playing() {
  let computerCard1 = comprarCarta();
  let computerCard2 = comprarCarta();
  let userCard1 = comprarCarta();
  let userCard2 = comprarCarta();
  let scoreComputer = computerCard1.valor + computerCard2.valor;
  let scoreUser = userCard1.valor + userCard2.valor;

  function messageWinner() {
    if (scoreComputer > scoreUser) {
      console.log("O computador ganhou!");
    } else if (scoreComputer < scoreUser) {
      console.log("O usuário ganhou! :)");
    } else {
      console.log("Empatou! " + "o.O");
    }
  }
  console.log(
    `Usuário - cartas: ${userCard1.texto} ${userCard2.texto} - pontuação ${scoreUser}`
  );
  console.log(
    `Computador - cartas: ${computerCard1.texto} ${computerCard2.texto} - pontuação ${scoreComputer}`
  );
  messageWinner();
}
