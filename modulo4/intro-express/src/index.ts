import express from "express";
import { AddressInfo } from "net";
import { dataUser } from "./data2";
import { posts } from "./posts";

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
//1)Faça a instalação e configuração do Express na pasta do exercício e teste.
app.get("/", (req, res) => {
  console.log("Ok");
  res.send("Olá, bem vindo!");
});
//2)
type Infos = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};
//5)
type Post = {
  id: number;
  title: string | number;
  body: string | number;
  userId: number;
};
//4)
app.get("/", (req, res) => {
  console.log("Ok");
  res.send("Olá, bem vindo!");
});
//5)
app.get("/users", (req, res) => {
  const userData: Infos[] = dataUser.map((user) => {
    return user;
  });

  res.send(userData);
});
//6)Resolvi criar separado o objeto dos posts
//7)
app.get("/posts", (req, res) => {
  const postsData: Post[] = posts.map((post) => {
    return post;
  });

  res.send(postsData);
});
app.get("/posts/:userId", (req, res) => {
  const userId = req.params.userId;
 
//  const postsId:Post[] =posts.map((user)=>{

//  })
  const postsById:Post[] = posts.filter((user) => {
         return Number(userId)===user.id
  });
 
  res.send(postsById)
})
