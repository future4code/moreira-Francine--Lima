import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { hashManager } from "../services/hashManager";

export async function login(req: Request, res: Response): Promise<any> {
  try {
    const { email, password } = req.body;

    //validations
    if (!email || email.indexOf("@") === -1 || !password) {
      res
        .status(422)
        .send("Insira corretamente as informações: email e password.");
    }
    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
    if (!user) {
      return res
        .status(409)
        .send("Não existe um usuário criado com este email.");
    }

    //comparing hash
    const genHash = new hashManager();
    const isCorrectPassword = await genHash.compare(
      password,
      user.getPassword()
    );
    if (!isCorrectPassword) {
      return res
        .status(401)
        .send("Email ou senha incorretas, por favor tente novamente.");
    }

    //generating token
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.getId(),
      role: user.getRole(),
    });

    //sending token to front  //login user
    res.status(201).send({ messagem: "logado!", token: token });
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
