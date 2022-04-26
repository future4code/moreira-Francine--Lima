import { Request, Response } from "express";
import { createUser } from "../data/migrations";
import { generateId } from "../middleware/idGenerator";
import { generateToken } from "../middleware/tokenGenerator";


export const signupUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    //body
    const { email, password } = req.body;
    //generating Id
    const id = generateId();

    //validations
    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 422;
      throw new Error("Invalid email");
    }
    if (!password || password.lenght < 6) {
      res.statusCode = 422;
      throw new Error("Invalid password");
    }
     //creating user
    await createUser(id, email, password);

    //generating token
    const token = generateToken({ id: id });

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
