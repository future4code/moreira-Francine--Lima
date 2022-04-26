import app from "./app";
import { signupUser } from "./endpoints/signUpUser";
import { login } from "./endpoints/login";
import { getUserInfo } from "./endpoints/getUserInfo";



//create user
app.post("/user/signup", signupUser);

//Login
app.post("/user/login",login);

//get user info
app.get("/user/profile",getUserInfo);
