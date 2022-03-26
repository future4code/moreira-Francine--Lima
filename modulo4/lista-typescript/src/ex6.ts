const accounts: account[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];
type account = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};
function loan(accounts: account[]): account[] {
  let totalExp: number = 0;
  const filteredAccounts: account[] = accounts.filter((debito) => {
    //filtering the array not returning empty arrays
    return debito.debitos.length > 0;
  });
  filteredAccounts.forEach((account) => {
    //FOR EACH +REDUCE TO CALCULATE EACH INDIVIDUAL TOTAL OF DEBT
    account.debitos.reduce((acc, curr) => {
      //calculating total debt per account
      return (totalExp = acc + curr);
    });
    account.saldoTotal = account.saldoTotal - totalExp;
  });
  const loanOffer: account[] = filteredAccounts.filter((account) => {
    return account.saldoTotal < 0;
  });

  return loanOffer;
}
console.log(loan(accounts));
