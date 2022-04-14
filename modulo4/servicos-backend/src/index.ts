import app from "./app";
import { baseUrl } from "./constants/constants";
import createUser from "./endpoints/createUser";
import getAddressInfo from "./services/getAddressInfo";

//create user
app.post("/users/signup", createUser);

//get address by CEP
app.get(baseUrl+"/:cep/json/", getAddressInfo);
