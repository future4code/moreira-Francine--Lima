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

  if (
    typeof req.body.name === "string" &&
    typeof req.body.price === "number" &&
    req.body.price > 0 &&
    req.body.price &&
    req.body.name
  ) {
    //const newProds=[...data,newProd] //esse exemplo com o spread faz o mesmo do codigo abaixo
    data.push(newProd); //.push retorna um numero o lenght da array
    res.status(201).send(data); //não posso passar números como argumento do .send(4)= err
  } else if (req.body.price <= 0) {
    throw new Error("O preço digitado deve ser um valor positivo."); //error 400 bad request
  } else if (typeof req.body.name !== "string") {
    throw new Error(
      "O nome digitado não é uma string. O nome deve ser uma string." //error 400
    );
  } else if (typeof req.body.price !== "number") {
    throw new Error(
      "O preço digitado não é um número. O preço deve ser um número." //error 400
    );
  } else {
    throw new Error("Informações incompletas ou incorretas no body"); //error 500 internal server error
  }
});

//4
app.get("/all", (req, res) => {
  res.status(200).send(data);
});

//5 Edita o preço
app.put("/editprice/:id", (req, res) => {
  const inputId = Number(req.params.id);
  const newPrice = Number(req.body.price);

  const isProd = data.find((prod) => {
    return inputId === prod.id;
  });

  console.log(isProd);
  if (
    isProd !== undefined &&
    typeof req.body.price === "number" &&
    req.body.price &&
    req.body.price > 0
  ) {
    data
      .filter((prod) => {
        return prod.id === Number(inputId);
      })
      .map((prod) => {
        prod.price = newPrice;
        return prod;
      });
    res.status(201).send(data);
  } else if (req.body.price < 0) {
    throw new Error("O preço digitado deve ser um valor positivo."); //error 400 bad request
  } else if (typeof req.body.price !== "number") {
    throw new Error(
      "O preço digitado não é um número. O preço deve ser um número." //error 400
    );
  } else if (isProd === undefined) {
    throw new Error(
      "O id digitado não correspende a um produto. Por favor forneça um id válido." //error 400
    );
  } else {
    throw new Error("Ops ocorreu um erro"); //error 500 internal server error
  }
});
//----------------------------
//outra forma de fazer
//   if (findProd) {
//     // const prodChosen = data.filter((prod) => {
//     //   return prod.id === Number(inputId);
//     // });
//     const newArray = [findProd].map((prod) => {
//       prod.price = newPrice;
//       return prod;
//     });
//     //   console.log("filter",prodChosen);
//     console.log("map", newArray);
//     res.status(201).send(newArray);
//   } else {
//     throw new Error("Informações incompletas ou incorretas no body");
//   }
// });
//6
app.delete("/removeprod/:idProd", (req, res) => {
  const idProd = req.params.idProd;

  const findProd = data.find((prod) => {
    return prod.id === Number(idProd);
  });

  if (findProd) {
    const newListProd = data.filter((prod) => {
      return prod.id !== Number(idProd);
    });
    res.send(newListProd);
  } else if (findProd === undefined) {
    throw new Error("Produto não encontrado, por favor insira um id válido");
  } else {
    throw new Error("Ops ocorreu um erro");
  }

  // const inputId = req.params.idProd;

  // const findProd = data.find((prod) => {
  //   return prod.id === Number(inputId);
  // });
  // console.log("find", findProd);

  // if (findProd) {
  //   const prodLeft = data.filter((prod) => {
  //     return prod.id !== Number(inputId);
  //   });

  //   console.log("filter", prodLeft);

  //   res.send(prodLeft);
  // } else {
  //   throw new Error("Deu erro");
  // }
});

//7
