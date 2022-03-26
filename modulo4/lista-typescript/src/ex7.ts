const products: Products[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];
type Products = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
};
function toRealAndSorting(products:Products[]){
  const productsToReal: Products[] = products.map((price) => {
    let newValue: string = (price.valorUnitario as number)
      .toFixed(2)
      .replace(".", ",");
    price.valorUnitario = "R$" + newValue;
    return price;
  });
  const orderedList: Products[] = productsToReal.sort((a, b) => {
    return b.quantidade - a.quantidade;
  });
  return orderedList
}
console.log(toRealAndSorting(products))

