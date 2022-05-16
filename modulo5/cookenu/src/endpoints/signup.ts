import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/authenticator";
import { hashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

export async function signup(req: Request, res: Response): Promise<any> {
  try {
    const { name, email, password, role } = req.body;

    //generating id (instance)
    const idGenerator = new IdGenerator(); //instance of class IdGenerator
    const id = idGenerator.generate(); //generating id (method generate)

    //generating hash
    const genHash = new hashManager();
    const hashPassword = await genHash.hash(password);

    //validations
    if (!name || !email || !password || !role || email.indexOf("@") === -1) {
     return res
        .status(422)
        .send("Insira corretamente as informações: name, email e password.");
    }
    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
    if (user) {
     return res.status(409).send("Já existe um usuário criado com este email.");
    }
    //create user
    const newUser = new User(id, name, email, hashPassword, role);
    await userDatabase.createUser(newUser);
    console.log(id);
    //generating token
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id, role });

    //sending token to fron
    res.status(201).send({ messagem: "criado!", token: token });
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
