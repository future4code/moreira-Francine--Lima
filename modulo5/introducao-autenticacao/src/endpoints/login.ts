import { Request, Response } from "express";
import { LoginUser } from "../data/migrations";
import { generateToken } from "../middleware/tokenGenerator";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    //body
    const { email, password } = req.body;

    //getting data from user
    const user = await LoginUser(email);

    //validations
    if (!email || email.indexOf("@") === -1 || !password) {
      res.statusCode = 422;
      throw new Error("All fields are compulsory and an email must have a @.");
    }

    if (email !== user.email) {
      res.statusCode = 404;
      throw new Error("Email not found");
    }
    if (password !== user.password) {
      res.statusCode = 404;
      throw new Error("Wrong password");
    }
    //generating token
    const token = generateToken({ id: user.id });

    res.status(200).send(token);
  } catch (e: any) {
    if (typeof e === "string") {
      res.send(e);
    } else {
      console.log(e.sqlMessage || e.message);
      res.status(500).send(e.sqlMessage || e.message);
    }
  }
};
