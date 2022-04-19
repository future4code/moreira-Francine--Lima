import { Place } from "./place";

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
  public getDwellersQuantity(): number {
    return this.residentsQuantity;
  }
}
