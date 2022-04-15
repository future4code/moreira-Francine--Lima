import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product, User } from "../types/types";

const createPurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id, product_id, quantity } = req.body;

    //validations
    if (!user_id || !product_id || !quantity) {
      res.statusCode = 422;
      throw new Error(
        "Fields 'user_id', 'product_id' and 'quantity' are required."
      );
    }

    const users: User[] = await connection("labecommerce_users");
    const product: Product[] = await connection("labecommerce_products");

    if (!users.find((user) => user.id === user_id)) {
      res.statusCode = 404;
      throw new Error(
        "User not found, check the type of the field 'user_id', it must be a string."
      );
    }

    if (!product.find((prod) => prod.id === product_id)) {
      res.statusCode = 404;
      throw new Error(
        "Product not found, check the type of the field 'product_id', it must be a string."
      );
    }

    if (typeof quantity !== "number") {
      res.statusCode = 422;
      throw new Error("Quantity must be a number.");
    }

    //getting the price from the databank using(product_id)
    const result: Product[] = await connection("labecommerce_products")
      .select("price")
      .where({ id: product_id });

    //calculating total
    const price: number = result[0].price;
    const total: number = price * quantity;

    //inserting purchase into databank
    await connection("labecommerce_purchases").insert({
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price: total,
    });
    res.status(201).send("Created!");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
};
export default createPurchase;
