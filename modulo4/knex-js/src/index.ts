import { Request, Response } from "express";
import { connection } from "./connection";
import express, { Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());
// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
//Conexão com o servidor
// estabelecer a conexão com o banco no index.ts:

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0][0];
};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Assim a chamada funciona fora dos endpoints com await //IIFE
(async () => {
  // console.log(await getActorById("003"));
})();

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.send("ok");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
}); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

//---------------------------------------------------------------------

//GET TABLE
// app.get("/Actor", async (req, res) => {
//   try {
//     const actors = await connection("Actor");
//     res.send(actors);
//   } catch (e: any) {
//     console.log(e);
//     res.status(500).send("Error");
//   }
// });

//------------------------------------------------------------------------------------------------------------
//Inicio do exercício
//1a)a) Explique como é a resposta que temos quando usamos o raw.
//Quando usamos o raw recebemos exatamente o que está no banco de dados que é o chamado raw data package.
//_________________________________________________________________
// //b)GET BY NAME connection .raw

// const getActorByName = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//    `);

//   return result[0][0];
// };

// //uma forma de chamar a função com .then e .catch

// getActorByName("Fernanda Montenegro")
//   .then((res) => {
//     // console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //chamando a função com IIFE

// (async () => {
//   console.log(await getActorByName("Tony Ramos"));
// })(); //()=promise void

// //chamando no endpoint

// app.get("/Actor/:name", async (req: Request, res: Response) => {
//   try {
//     const name = req.params.name;

//     console.log(await getActorByName(name));

//     res.send("ok");
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("Unexpected error");
//   }
// });
// _________________________________________
// //c)GET COUNT BY GENDER
//FUNÇÃO ISOLADA
// const getCountActorByGender = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//   `);

//   const count = result[0][0].count;
//   return count;
// };

//recebendo results com a IIFE

// (async () => {
//   console.log(await getCountActorByGender("male"));
// })();

// //chamando no endpoint
//usando query
// app.get("/Actor/:gender", async (req: Request, res: Response) => {
//   try {
//     const result = await connection("Actor")
//       //   .count<Record<string, number>>("salary")
//       .count("salary")
//       .where({ gender: req.params.gender });

//     console.log(result);

//     res.status(200).send(result);
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("Unexpected error");
//   }
// });
//----------------------------------------------------------------------------------------------------------------
// //2a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
// app.put("/Actor/:id", async (req, res) => {
//   try {
//     const sal = req.body.salary;
//     await connection("Actor")
//       .update({
//         salary: sal,
//       })
//       .where({ id: req.params.id });
//     res.status(201).send("oui");
//   } catch (e: any) {
//     console.log(e);
//     res.status(500).send("Error");
//   }
// });

//FUNÇÃO ISOLADA
// const updateActor = async (id: string, salary: number): Promise<any> => {
//   await connection("Actor").update({
//       salary: salary,
//     }).where("id", id);
// };

//chamando a função com o IIFE

// (async ()=>{
//     console.log(await updateActor("001",2000000))
// })()
//_________________________________________________
// //b)DELETA USUÁRIO PELO ID QUERY
// app.delete("/Actor/:id", async (req, res) => {
//   try {
//     await connection("Actor").delete().where({ id: req.params.id });
//     res.status(200).send("Deleted");
//   } catch (e: any) {
//     console.log(e);
//     res.status(500).send("Error");
//   }
// });

//FUNÇÃO ISOLADA
// const delActor = async (id: string): Promise<void> => {
//   await connection("Actor").delete().where("id", id);
// };
// //
// //  (async ()=>{
// //      console.log(await delActor("003"))
// //  })()
//___________________________________________________________________
// //c)

//FUNÇÃO ISOLADA
// const averageSalary = async (gender: string): Promise<any> => {
//   const result = await connection("Actor")
//     .avg("salary")
//     .where("gender", gender);

//   return result[0];
// };
// //
// app.get("/Actor/:salByGender", async (req: Request, res: Response) => {
//   try {
//     const result = await connection("Actor")
//       .avg("salary")
//       .where({ gender: req.params.salByGender });
//     console.log(result);
//     res.status(200).send(result);
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("Unexpected error");
//   }
// });
//---------------------------------------------------------------------------
// //3a)
// app.get("/Actor/:id", async(req,res)=>{
//     try{
//     const result=await connection("Actor").where({id:req.params.id})
//     res.status(200).send(result)
//     }
//     catch(e:any){
//         console.log(e)
//         res.status(500).send("Unexpected error");
//     }
// })
//___________________________________________________________________
// //b)COUNT ACTOR BY GENDER USE QUERY PARAMS
// app.get("/Actor", async (req: Request, res: Response) => {
//   try {
//     const gender = await connection("Actor")
//       .count()
//       .where({ gender: req.query.gender as string });
//     res.status(200).send(gender);
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("Unexpected error");
//   }
// });
//------------------------------------------------------------------------------------------
//4a)ATUALIZA SÁLARIO PELO ID
// app.put("/Actor", async (req: Request, res: Response) => {
//   try {
//       await connection("Actor")
//       .where({ id: req.body.id })
//       .update({ salary: req.body.salary });

//     res.status(200).send("ok");
//   } catch (err: any) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });
//_______________________________________________________________
//b)
// app.delete("/Actor/delete/:id", async (req, res) => {
//   try {
//     await connection("Actor")
//     .delete()
//     .where({ id: req.params.id });
//     res.status(200).send("Deleted");
//   } catch (e: any) {
//     console.log(e);
//     res.status(400).send({ message: e.message });
//   }
// });
