import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Purchase } from "../types/types";

const getPurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.user_id;

    //fetching purchases from databank
    const result: Purchase[] = await connection("labecommerce_purchases").where(
      {
        user_id: id,
      }
    );

    //validation
    if (result.length === 0) {
      res.statusCode = 404;
      throw new Error(
        "User not found, check if the format of the field 'user_id' is a string."
      );
    }

    res.status(200).send(result);
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
};
export default getPurchase;
