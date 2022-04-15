import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, price, image_url } = req.body;

    //validations
    if (!name || !price || !image_url) {
      res.statusCode = 422;
      throw "Fields 'name', 'price' and 'image url' are required.";
    }
    if (
      typeof price !== "number" ||
      typeof name !== "string" ||
      typeof image_url !== "string"
    ) {
      res.statusCode = 422;
      throw new Error(
        "Field 'price' must be a number, 'name' must be a string and 'image_url' must be a string."
      );
    }

    //inserting product into databank
    await connection("labecommerce_products").insert({
      id: Date.now().toString(),
      name,
      price,
      image_url,
    });
    res.status(201).send("Product created!");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
}
