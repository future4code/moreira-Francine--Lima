//1a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//const minhaString:string=9
//Ocorre um erro que indica que a variável deve receber uma string e não um número
//
//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
const meuNumero: number = 20; //recebe somente números
const myVar: number | string = "Oi"; //recebe números e strings
//
//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//`nome`, que é uma string;
//`idade`, que é um número;
//`corFavorita`, que é uma string.
//d)Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.
//criando um alias e um enum
enum RainbowColors {
  blue = "blue",
  yellow = "yellow",
  green = "green",
  white = "white",
  red = "red",
}
type pessoa = {
  name: string;
  age: number;
  favColor: RainbowColors;
};
//criando o objeto pessoa
const objeto: pessoa = {
  name: "Carla",
  age: 38,
  favColor: RainbowColors.blue,
};
const objeto1: pessoa = {
  name: "Jandira",
  age: 59,
  favColor: RainbowColors.green,
};
const objeto2: pessoa = {
  name: "Ana",
  age: 0,
  favColor: RainbowColors.yellow,
};
//
