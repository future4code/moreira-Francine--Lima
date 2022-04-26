import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types/types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    //validations
    if (!name || !email || !password) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email' and 'password' are required";
    }

    const users: User[] = await connection("labecommerce_users");
    const isNewUser: User | undefined = users?.find((user) => {
      return user.email === email;
    });

    if (isNewUser) {
      res.statusCode = 400; //bad request
      throw new Error("You already have an account.");
    }

    //inserting user into databank
    await connection("labecommerce_users").insert({
      id: Date.now().toString(),
      name,
      email,
      password,
    });

    res.status(201).send("User created!");
  } catch (error: any) {
  
   
   
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
}
