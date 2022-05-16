import { Request, Response } from "express";

import app from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipesById } from "./endpoints/getAllRecipes";
import { getAllUserInfo } from "./endpoints/getAllUserInfo";
import { getUserInfo } from "./endpoints/getUserInfo";
import { getUserInfoById } from "./endpoints/getUserInfoById";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//test database
// app.get("/", async (req: Request, res: Response) => {
//   const result = await connection("movie");
//   res.status(200).send(result);
// });

//get user by id
app.get("/user/:id", getUserInfoById)

//get all users
app.get("/users", getAllUserInfo);

//get user info
app.get("/user/profile",getUserInfo)

//get recipes
app.get("/recipe/:id",getRecipesById);


//login user
app.post("/user/login", login);

//create user
app.post("/user/signup", signup);

//create recipe
app.post("/recipe", createRecipe)

