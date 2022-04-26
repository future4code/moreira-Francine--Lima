import app from "./app";
import createProduct from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import createUser from "./endpoints/createUser";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers";
import getPurchase from "./endpoints/getPurchase";

//get all users
app.get("/users", getAllUsers);

//get all products
app.get("/products", getAllProducts);

//get purchase by user id
app.get("/users/:user_id/purchases", getPurchase);

//create user
app.post("/users", createUser);

//create product
app.post("/products", createProduct);

//create pruchase
app.post("/purchase", createPurchase);
