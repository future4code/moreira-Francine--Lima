import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";
import getAddressInfo from "../services/getAddressInfo";
export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, cep } = req.body;
    const address = await getAddressInfo(cep);
    const stringAddress: string = `${address?.Logradouro}, ${address?.Complemento} - ${address?.Bairro} (${address?.CEP}) ${address?.Cidade}, ${address?.UF}`;
    if (!name || !nickname || !email || !cep) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email' e 'CEP' são obrigatórios";
    }
    if (!address) {
      res.statusCode=422
      throw new Error("Error on get address");
    }

    const id: string = Date.now().toString();

    const users = await connection("aula_webservices_users");
    const isNewUser = users?.find((user) => {
      return user.email === email;
    });
    if (isNewUser) {
      res.statusCode=400 //bad request
      throw new Error("You already have an account.");
    }

    const newUser: user = { id, name:name, nickname:nickname, email:email, address:stringAddress };
    await connection("aula_webservices_users").insert(newUser);

    //  console.log(newUser);

    res.status(201).send("Created!");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
}
