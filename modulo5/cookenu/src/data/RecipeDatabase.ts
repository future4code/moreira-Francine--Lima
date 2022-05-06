import { Recipe } from "../entities/Recipe";
import connection from "./connection";

export class RecipeDatabase {
  public async createRecipe(recipe: Recipe) {
    try {
      await connection("recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        created_at: recipe.getCreated_at(),
      });
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }

  public async getRecipesById(id: string) {
    try {
      const recipes = await connection("recipes").select("*").where({ id: id });
      return recipes.map((recipe) => Recipe.toRecipeModel(recipe));
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
}
