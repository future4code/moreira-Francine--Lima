import { Client } from "./client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industryNumber: string,
    cep: string,
    machinesQuantity: number
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.industryNumber;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.4 + this.machinesQuantity * 100;
  }
}
//6a) deve ser filha do Industry, pois possui as informações que necessito herdar para construir a classe  Industrial client
//b)Client, pois a interface fornece o calculo da energia consumida e a quantidade de máquinas.
//c)Pois queremos buscar informações na classe e não criar algo novo (ex. setters)
//c)Pergunta confusa
