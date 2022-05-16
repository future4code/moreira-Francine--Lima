import PostBusiness from "./business/PostBusinees";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import PostDatabase from "./data/PostDatabase";
import UserDatabase from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userBusiness = new UserBusiness(
  new UserDatabase(),
  new IdGenerator(),
  new HashManager(),
  new Authenticator()
);
const postBusiness = new PostBusiness(
  new PostDatabase(),
  new IdGenerator(),
  new Authenticator()
);
const userController = new UserController(userBusiness);
const postController = new PostController(postBusiness);
// app.get("/user/all", userController.getAllUsers);

// app.delete("/user/:id", userController.deleteUserById);
app.get("/user/post/:id", postController.getPostById);

app.post("/user/post", postController.insertPost);

app.post("/user/signup", userController.signup);

app.post("/user/login", userController.login);
