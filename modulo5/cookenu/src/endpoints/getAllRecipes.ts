import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";

export async function getRecipesById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const id = req.params.id;
    const token = req.headers.authorization;

    //token authentication comparation with id
    const authenticator = new Authenticator();
    const tokenData = authenticator.verifyTokenData(token as string);

    //validations
    if (!tokenData) {
      return res
        .status(422)
        .send(
          "Esse endpoint exige uma authorization a ser passada nos headers, o token passado não é válido."
        );
    }
    if (!token) {
      return res
        .status(422)
        .send(
          "Esse endpoint exige uma authorization a ser passada nos headers."
        );
    }
   


    //getting recipes
    const recipesDatabase = new RecipeDatabase();
    const recipes = await recipesDatabase.getRecipesById(id); 
    //sending to front
    res.status(200).send(recipes);
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
}
