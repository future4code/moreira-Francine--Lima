import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";
import { Users, UserType } from "./type";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
//1
//*a. Qual método HTTP você deve utilizar para isso?*
//get
//*b. Como você indicaria a **entidade** que está sendo manipulada?*
//"/users"
//
app.get("/users", (req, res) => {
  try {
    res.status(200).send(users);
  } catch (e: any) {
    res.sendStatus(e);
  }
});
//
//2
//*a.* Como você passou os parâmetros de type para a requisição? Por quê?
//Passei por path params, pois é uma forma simples e útil de receber dados do usuário.
//b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//fazendo verificações com type of
//
app.get("/users/:type", (req, res) => {
  let errorCode: number = 400;
  try {
    const userType: string = req.params.type.toUpperCase();
    const user: Users[] | [] = users.filter((user) => user.type === userType);
    console.log(user);
    if (user.length === 0) {
      errorCode = 404;
      throw new Error("O tipo digitado não existeaa.");
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});
//3
//*a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
//Path Params
//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
app.get("/user", (req, res) => {
  //query param "/users?name=Bob"
  let errCode: number = 404;
  try {
    const name: string = req.query.name as string;
    const userQuery: Users | undefined = users.find((user) => {
      return user.name === name;
    });
    console.log(userQuery);
    if (!userQuery) {
      throw new Error("Usuário não encontrado");
    }
    res.status(200).send(userQuery);
  } catch (e: any) {
    res.status(errCode).send({ message: e.message });
  }
});
//4
//a. Mude o método do endpoint para `PUT`. O que mudou?
//nada mudou
//b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//não pois o post cria um nome o usuário enquanto o put sobreescreve a informação do usuário
app.post("/users/create", (req, res) => {
  let erroCode: number = 404;
  let userName: string = req.body.name;
  let userEmail: string = req.body.email;
  let userType: UserType = req.body.type;
  let userAge: number = req.body.age;
  const newUser: Users = {
    id: Date.now(),
    name: userName,
    email: userEmail,
    type: userType,
    age: userAge,
  };
  try {
    const AddUser = [...users, newUser];
    if (!userEmail || !userAge || !userName || !userType) {
      erroCode = 400;
      throw new Error(
        "O body está incompleto, verifique as informações digitadas."
      );
    }
    res.status(201).send(AddUser);
  } catch (e: any) {
    res.status(erroCode).send({ message: e.message });
  }
});
