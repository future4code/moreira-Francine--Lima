import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignupInputDTO } from "../types/signuopInputDTO";

export default class UserController {
  constructor(private userBusiness: UserBusiness) {}

  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const input: SignupInputDTO = {
      name,
      email,
      password,
    };
    try {
      const token = await this.userBusiness.signup(input);
      res
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso", token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    }
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const inputLogin: LoginInputDTO = {
      email,
      password,
    };
    try {
      const token = await this.userBusiness.login(inputLogin);
      res.status(200).send({ message: "Logado", token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no login");
    }
  };



  //  getUserById = async (req: Request, res: Response) => {
  //     const token = req.headers.authorization;
  //      const id=req.params.id

  //     try {
  //       const userData = await this.userBusiness.getUserById(token,id)

  //       res.status(200).send(userData);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         return res.status(400).send(error.message);
  //       }
  //       res.status(500).send("Erro  tente novamente.");
  //     }
  //   };
}
