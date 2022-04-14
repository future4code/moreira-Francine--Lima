import axios from "axios";
import { baseUrl } from "../constants/constants";
import { Address } from "../types";

export default async function GetAddressByCep(
  cep: string
): Promise<Address | null> {
  try {
    const results = await axios.get(`${baseUrl}/${cep}/json/`);
    
    const address: Address = {
      CEP: results.data.cep,
      Logradouro: results.data.logradouro,
      Bairro: results.data.bairro,
      Cidade: results.data.localidade,
      Complemento: results?.data.complemento,
      UF: results.data.uf,
    };
    return address;
    
    //posso retornar a string direto:
    // const stringAdress: string = `${address.Logradouro}, ${address.Complemento} - ${address.Bairro} (${address.CEP}) ${address.Cidade}, ${address.UF}`;
    // return stringAdress;
  
  } catch (e: any) {
    console.log("Erro:", e);
    return null;
  }
}
