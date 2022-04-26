import { Request, Response } from "express";
import { getUserById } from "../data/migrations";
import { getData } from "../middleware/tokenGenerator";
import { User } from "../types/type";

export const getUserInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //headers
    const token = req.headers.authorization as string;

    //get data from token
    const authData = getData(token);

    //get user info from databank
    const userInfo: User = await getUserById(authData.id);

    res.status(200).send({
      id: userInfo.id,
      email: userInfo.email,
    });
  } catch (e: any) {
    if (typeof e === "string") {
      res.send(e);
    } else {
      console.log(e.sqlMessage || e.message);
      res.status(500).send(e.sqlMessage || e.message);
    }
  }
};
