import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";


export async function getUserInfo(req: Request, res: Response): Promise<any> {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(422)
        .send(
          "Esse endpoint exige uma authorization a ser passada nos headers."
        );
    }
    //token authentication comparation with id
    const authenticator = new Authenticator();
    const tokenData = authenticator.verifyTokenData(token as string);

    
    //getting users
    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserInfo(tokenData.id);

    //sending to front
    res.status(200).send(user);
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
