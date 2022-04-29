import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";

export async function createRecipe(req: Request, res: Response): Promise<any> {
  try {
    const { title, description } = req.body;
    const created_at = new Date();
    const token = req.headers.authorization;

    //creating an instance of recipes database
    const recipesDatabase = new RecipeDatabase();

    // authentication token
    const authenticator = new Authenticator();
    const tokenData = authenticator.verifyTokenData(token as string);

    //generating id (instance)
    const idGenerator = new IdGenerator(); //instance of class IdGenerator
    const id = idGenerator.generate(); //generating id (method generate)

    //validations
    if (!title || !description) {
      return res
        .status(422)
        .send("Insira corretamente as informações: name, email e password.");
    }

    if (!tokenData) {
      return res.status(422).send("Insira o campo authorization nos headers.");
    }
    //create recipes
    const newRecipe = new Recipe(id, title, description, created_at);
    await recipesDatabase.createRecipe(newRecipe);

    //sending token to fron
    res.status(201).send({ messagem: "criado!" });
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
