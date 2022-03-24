//3)Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

//Observe o array de posts:

//a) Copie o código abaixo para um arquivo .ts depois:
// -crie um *type* para representar um post;
//- Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.
// type post = {
//   autor: string;
//   texto: string|number;
// };
// const posts:post = [
//   {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver",
//   },
//   {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!",
//   },
//   {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!",
//   },
//   {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!",
//   },
//   {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!",
//   },
// ]

// function buscarPostsPorAutor(posts:string[], autorInformado:string) {
//      const postsFil:string[]=posts.filter((post:string|number) => {
//     return post.autor === autorInformado;
//   });
//   return postsFil
// }

// console.log(posts)