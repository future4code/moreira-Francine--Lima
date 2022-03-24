//Checa triangulo
function checaTriangulo(a: number, b: number, c: number): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}
console.log("\x1b[36m%s\x1b[1m", checaTriangulo(2, 3, 5));
