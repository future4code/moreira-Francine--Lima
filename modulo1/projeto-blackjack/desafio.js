//RESOLVENDO

//INÍCIO DO JOGO

console.log("Bem vindx ao 21 ou Blackjack :)");
if (
  confirm("Bem vindx ao 21 ou Blackjack :)" + "\n" + "Vamos jogar uma rodada?")
) {
  playing();
} else {
  // o que fazer se o usuário clicar "cancelar"
  console.log(`O jogo acabou.`);
}
function playing(
  scoreComputer,
  scoreUser,
  valorComputer1,
  valorComputer2,
  valorUser1,
  valorUser2,
  valorUser3
) {
  valorComputer1 = comprarCarta();
  valorComputer2 = comprarCarta();
  valorUser1 = comprarCarta();
  valorUser2 = comprarCarta();
  //Desafio 8:
  while (
    (valorComputer1 && valorComputer2 === 11) ||
    (valorUser1 && valorUser2 === 11)
  ) {
    valorComputer1 = comprarCarta();
    valorComputer2 = comprarCarta();
    valorUser1 = comprarCarta();
    valorUser2 = comprarCarta();
  }
  scoreComputer = valorComputer1.valor + valorComputer2.valor;
  scoreUser = valorUser1.valor + valorUser2.valor;
  //desfio 9:
  function printDrawCards() {
    if (
      confirm(
        "Suas cartas são" +
          " " +
          valorUser1.texto +
          " " +
          valorUser2.texto +
          "." +
          "A carta revelada do computador é" +
          valorComputer1.texto +
          "." +
          "\n" + // \n faz pular a linha
          "Deseja comprar mais uma carta?"
      )
    ) {
      // while (scoreUser<=21){
      valorUser3 = comprarCarta();
      scoreUser = valorUser1.valor + valorUser2.valor + valorUser3.valor;
      alert(
        "Suas cartas são" +
          valorUser1.texto +
          valorUser2.texto +
          valorUser3.texto +
          ". Sua pontuação é" +
          scoreUser +
          "." +
          "\n" +
          "As cartas do computador são" +
          valorComputer1.texto +
          valorComputer2.texto +
          ". A pontuação do computador é" +
          scoreComputer +
          "." +
          "\n" +
          messageWinner()
      );
    } else {
      alert(
        "Suas cartas são" +
          valorUser1.texto +
          valorUser2.texto +
          ". Sua pontuação é" +
          scoreUser +
          "." +
          "\n" +
          "As cartas do computador são" +
          valorComputer1.texto +
          valorComputer2.texto +
          ". A pontuação do computador é" +
          scoreComputer +
          "." +
          "\n" +
          messageWinner()
      );
    }
  }
  function messageWinner() {
    if (scoreComputer > scoreUser && scoreComputer <= 21) {
      return "O computador ganhou!";
    } else if (scoreUser > scoreComputer && scoreUser <= 21) {
      return "O usuário ganhou! :)";
    } else if (scoreComputer > 21 && scoreUser <= 21) {
      return "O usuário ganhou! :)";
    } else if (scoreUser > 21 && scoreComputer <= 21) {
      return "O computador ganhou!";
    } else {
      return "Empatou!" + " " + "o.O";
    }
  }
  printDrawCards();
  messageWinner();
}
