enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}
type InfoMovie = {
  name: string;
  year: number;
  genre: GENERO;
  evaluation: number;
};

function sortMovies(
  name: string,
  year: number,
  genre: GENERO,
  evaluation?: number
): InfoMovie {
  const sort: InfoMovie = {
    name: name,
    year: year,
    genre: genre,
    evaluation: evaluation,
  };
  return sort;
}
console.log(sortMovies("Terminator", 2020, GENERO.ROMANCE, 8));
