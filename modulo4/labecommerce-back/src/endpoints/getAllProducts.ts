import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types/types";

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    //fetching products from databank
    const result: Product = await connection("labecommerce_products");
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

export default getAllProducts;
