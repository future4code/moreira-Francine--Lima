//Atividade do dia 01.12.2021

//Exercícios de interpretação de código

//1-
//a.Vai mostrar undefined, pois a array não foi definida, mas sim apenas declarada.
//b.Vai mostrar null, porque a array foi definida como null.
//c.Retornará o número de elementos na array incluindo espaços, que é igual a 11.
//d.Mostrará o elemento contido no index 0 da array que é 3.
//e.Retornará a array.
//f.Realizará a soma entre o elemento no index 0 que foi declarado como i=0, que é o número 3, após isso realizará a soma 3+6=9, o número 9 será mostrado no console.

//2- O console mostrará a seguinte frase: "SUBI NUM ÔNIBUS EM MIRROCOS " e também será possível ver o número de caracteres que é igual a 27.

//Exercícios de escrita de código
//1-
let nomeDoUsuario = prompt("Qual o seu nome?");
let emailDoUsuario = prompt("Qual o seu email?");
let greetings = `O e-mail, ${emailDoUsuario}, foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`;
console.log(greetings);

//2-a.
let rangos = ["acarajé", "abará", "pititinga", "açaí", "pudim"];
console.log(rangos);
//b.
/*let imprimaNoConsole = `Essas são minhas comidas preferidas: `;
let imprimaNoConsoleVertical = rangos.join("\n");
console.log(`${imprimaNoConsole}\n ${imprimaNoConsoleVertical}`);
*/
//2c.
let ranguinhos = "acarajé, abará, pititinga, açaí, pudim";
let rangoPreferido = prompt("Qual a sua comida preferida?");
console.log(ranguinhos.replaceAll("abará", rangoPreferido.toString()));

//3a.
let arrayVazio = [];
let listaDeTarefas = arrayVazio;
//b.
let tarefa1 = prompt("Digite uma tarefa para hoje");
let tarefa2 = prompt("Digite outra tarefa para hoje");
let tarefa3 = prompt("Digite mais uma tarefa para hoje");

console.log(listaDeTarefas.push(tarefa1));
console.log(listaDeTarefas.push(tarefa2));
console.log(listaDeTarefas.push(tarefa3));
//c.
console.log(listaDeTarefas);
//d.
let deletar = prompt("Digite o indice que deseja deletar");
let deletarNumero = Number(deletar);
console.log(listaDeTarefas.splice(0, deletarNumero));
//e.
console.log(listaDeTarefas);
