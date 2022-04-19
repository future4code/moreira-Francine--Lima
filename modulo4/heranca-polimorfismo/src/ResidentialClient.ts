import { Client } from "./client";
import { Residence } from "./residentsQuantity";

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep); //tudo que está dentro de Residence vem aqui
  }
  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

//Que métodos e propriedades essa classe possui? Por quê?
//Possui dois métodos get
//propriedades são name, registration number, consumed energy, cpf