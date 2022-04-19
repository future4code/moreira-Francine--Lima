import { Client } from "./client";
import { Commerce } from "./Commerce";

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private CNPJ: string,

    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

//5a)Quais as semelhanças dessa classe com a ResidentialClient?
//Ambas implementam a interface client
//Ambas geram uma valor de conta de eletrcidade para pagar
//As diferenças se dão em relação a propriedades e também a herança das classe são distintas
//a classe ResidentialCliente herda da residents quantity enquanto a Commercial Cliente herda da Commerce


