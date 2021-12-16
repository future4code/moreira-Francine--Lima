```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
   p1 = p1 * 2;
  p2 = p2 * 3;
  let media = (p1 + p2 + ex) / 6;
if (media >= 9) {
    return "A";
  } else if (media < 9 && media >= 7.5) {
    return "B";
  } else if (media < 7.5 && media >= 6) {
    return "C";
  } else {
    return "D";
  }
}```