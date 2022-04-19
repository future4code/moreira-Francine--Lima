import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types/types";

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    //fetching products from databank
    let order = req.query?.order as string;
    let search = req.query?.search as string;

    //validations

    if (order?.toUpperCase() === "ASC" || order?.toUpperCase() === "DESC") {
      const queryResult: Product[] = await connection(
        "labecommerce_products"
      ).orderBy("price", order);
      res.status(200).send(queryResult);
    } 
    else if (typeof search === "string" && search?.length > 0) {
      const searchResult: Product[] = await connection(
        "labecommerce_products"
      ).where({ name: search });
      res.status(200).send(searchResult);
    } 
    else {
      const result: Product[] = await connection("labecommerce_products");
      res.status(200).send(result);
    }
  } 
  catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
};

export default getAllProducts;
