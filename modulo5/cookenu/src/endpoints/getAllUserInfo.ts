import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";

export async function getAllUserInfo(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(422)
        .send(
          "Esse endpoint exige uma authorization a ser passada nos headers."
        );
    }
    //token authentication
    const authenticator = new Authenticator();
    const tokenData = authenticator.verifyTokenData(token as string);

    //validations
    if (tokenData.role !== "ADMIN") {
      return res
        .status(401)
        .send("Somente administradores podem acessar os dados.");
    }

    //getting users
    const userDatabase = new UserDatabase();
    const users = await userDatabase.getAllUsers();

    //sending to front
    res.status(200).send(users);
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
