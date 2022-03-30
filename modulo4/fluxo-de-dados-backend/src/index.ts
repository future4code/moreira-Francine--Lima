import express from "express";

import { AddressInfo } from "net";
import { data } from "./data";
import { Prod } from "./types";

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
app.get("/test", (req, res) => {
  res.send("teste");
});
//3
app.post("/addprod", (req, res) => {
  const newProd: Prod = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
  };
  if (req.body.name && req.body.price) {
    data.push(newProd); //.push retorna um numero o lenght da array
    res.status(201).send(data); //não posso passar números como argumento do .send(4)= err
  } else {
    throw new Error("Informações incompletas no body");
  }
});
//4 Retorna todos os produtos
app.get("/all", (req, res) => {
  res.status(200).send(data);
});
//5 Edita o preço
app.put("/editprice/:id", (req, res) => {
  const inputId = req.params.id;

  const newPrice = req.body.price;

  const findProd = data.find((prod) => {
    return prod.id === Number(inputId);
  });
  console.log("find", findProd);

  if (findProd) {
    // const prodChosen = data.filter((prod) => {
    //   return prod.id === Number(inputId);
    // });
    const newArray = [findProd].map((prod) => {
      prod.price = newPrice;
      return prod;
    });
    //   console.log("filter",prodChosen);
    console.log("map", newArray);
    res.send(newArray);
  } else {
    throw new Error("Informações incompletas no body");
  }
});
//6
app.delete("/removeprod/:idProd", (req, res) => {
  const inputId = req.params.idProd;
  const findProd = data.find((prod) => {
    return prod.id === Number(inputId);
  });
  console.log("find", findProd);

  if (findProd) {
    const prodLeft = data.filter((prod) => {
      return prod.id !== Number(inputId);
    });

    console.log("filter", prodLeft);

    res.send(prodLeft);
  } else {
    throw new Error("Deu erro");
  }
});
7; //
