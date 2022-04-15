import { connection } from "../data/connection";
import { Request, Response } from "express";
import { User } from "../types/types";

export default async function getAllUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    //fetching users from databank
    const result: User = await connection("labecommerce_users");
    res.status(200).send(result);
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
}
