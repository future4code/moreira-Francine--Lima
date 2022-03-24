//Exercício 2
const value1 = process.argv[2];
const value2 = process.argv[3];
const add = Number(value1) + Number(value2);
console.log("\x1b[33m%s\x1b[1m", `Total da soma: ${add}`);
