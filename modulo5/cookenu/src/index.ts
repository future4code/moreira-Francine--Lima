import { Request, Response } from "express";

import app from "./app";
import { getAllUserInfo } from "./endpoints/getAllUserInfo";
import { getUserInfo } from "./endpoints/getUserInfo";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//test database
// app.get("/", async (req: Request, res: Response) => {
//   const result = await connection("movie");
//   res.status(200).send(result);
// });

//get all users
app.get("/users", getAllUserInfo);

//get user info
app.get("/user/profile",getUserInfo)

//login user
app.post("/user/login", login);

//create user
app.post("/user/signup", signup);
