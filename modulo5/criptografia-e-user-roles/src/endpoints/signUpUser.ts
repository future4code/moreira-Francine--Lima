import { Request, Response } from "express";
import { createUser } from "../data/migrations";
import { generateHash } from "../middleware/bcrypt";
import { generateId } from "../middleware/idGenerator";
import { generateToken } from "../middleware/tokenGenerator";

export const signupUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //body
    const { email, password, role } = req.body;

    //generating Id
    const id = generateId();

    //encryptying the password
    const hashPass = await generateHash(password);

    //validations
    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 422;
      throw new Error("Invalid email");
    }
    if (!password || password.lenght < 6) {
      res.statusCode = 422;
      throw new Error("Invalid password");
    }
    if (role !== "ADMIN" || role !== "NORMAL") {
      res.statusCode = 422;
      throw new Error("Invalid role, role must either 'ADMIN' or 'NORMAL'");
    }
    //creating user
    await createUser(id, email, hashPass, role);

    //generating token
    const token = generateToken({ id: id, role: role });

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
