enum SETORES {
  marketing = "marketing",
  vendas = "vendas",
  financeiro = "financeiro",
}

type Crew = {
  nome: string;
  salario: number;
  setor: SETORES;
  presencial: boolean;
};

const infos: Crew[] = [
  { nome: "Marcos", salario: 2500, setor: SETORES.marketing, presencial: true },
  { nome: "Maria", salario: 1500, setor: SETORES.vendas, presencial: false },
  {
    nome: "Salete",
    salario: 2200,
    setor: SETORES.financeiro,
    presencial: true,
  },
  { nome: "João", salario: 2800, setor: SETORES.marketing, presencial: false },
  { nome: "Josué", salario: 5500, setor: SETORES.financeiro, presencial: true },
  { nome: "Natalia", salario: 4700, setor: SETORES.vendas, presencial: true },
  { nome: "Paola", salario: 3500, setor: SETORES.marketing, presencial: true },
];




function filterData(info: Crew[]): Crew[] {
  const dataFiltered: Crew[] = info.filter((person) => {
   return person.setor === SETORES.marketing && person.presencial === true;
   
  });
  return dataFiltered;
}
console.log(filterData(infos));
