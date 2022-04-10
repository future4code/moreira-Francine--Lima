import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import { connection } from "./connection";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
//----------------------------------------------------------------------------------
//Get all users
// app.get("/user", async (req: Request, res: Response) => {
//   try {
//     const result = await connection("TodoListUser");
//     res.status(200).send(result[0]);
//   } catch (e: any) {
//     console.log(e);
//     res.status(404).send(e.message);
//   }
// });
//----------------------------------------------------------------------------------
//CREATE TABLE
// app.post("/users", async (req, res) => {
//   try {
//     await connection.raw(`
//         CREATE TABLE TodoListUser (id, name, nickname,email)
//          VALUES (
//             ${Date.now().toString()},
//             "${req.body.name}",
//             "${req.body.nickname}",
//             "${req.body.email}"
//          );
//          `);
//     res.status(201).send("Sucess");
//   } catch (error) {
//     console.log("error.message");
//     res.status(500).send("An unexpected error occurred");
//   }
// });

//1 Query Builder ADD USER
// app.post("/user", async (req: Request, res: Response) => {
//   try {
//     if (!req.body.name || !req.body.email || !req.body.nickname) {
//       throw new Error("One or more fields are blank, please fill up the body.");
//     }
//     await connection("TodoListUser").insert({
//       id: Date.now().toString(),
//       name: req.body.name,
//       nickname: req.body.nickname,
//       email: req.body.email,
//     });
//     res.status(201).send("Created");
//   } catch (e: any) {
//     console.log(e);
//     res.status(404).send(e.message);
//   }
// });

//1 .RAW ADD USER

// app.post("/actor", async (req, res) => {
//   try {
//     await connection.raw(`
//          INSERT INTO Actor (id, name, salary, birth_date, gender)
//          VALUES (
//             ${Date.now().toString()},
//             "${req.body.name}",
//             "${req.body.salary}",
//             "${req.body.birth_date}",
//             "${req.body.gender}"
//          );
//          `);
//     res.status(201).send("Sucess");
//   } catch (error) {
//     console.log("error.message");
//     res.status(500).send("An unexpected error occurred");
//   }
// });

//2 QUERY BUILDER GET USER BY ID
// app.get("/user/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     if (!id) {
//       throw new Error("Please input a parameter.");
//     }
//     const findUser = (await connection("TodoListUser")).find((user) => {
//       return user.id === id;
//     });

//     if (!findUser) {
//       throw new Error("User not found, please try again.");
//     }

//     const result = await connection("TodoListUser").where({ id: id });
//     const results = [result[0].id, result[0].nickname];

//     res.status(200).send(results);
//   } catch (e: any) {
//     res.status(404).send(e.message);
//   }
// });

//3 EDITAR USUÁRIO PELO ID
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let err = 404;
  try {
    const name = req?.body.name;
    const nickname = req?.body.nickname;
    const email = req?.body.email;
    if (!req.body) {
      err = 422;
      throw new Error("Please fill the body.");
    }
    await connection("TodoListUser")
      .update({
        name: name,
        nickname: nickname,
        email: email,
      })
      .where({ id: req.params.id });

    res.status(201).send("Updated");
  } catch (e: any) {
    console.log(e);
    res.status(404).send(e.message);
  }
});

//COMO UTILIZAR PARAMETROS OPCIONAIS?? === req?.body.bla

//4 CREATE TASK
app.post("/task", async (req: Request, res: Response) => {
  const splitDate = req.body.limit_date.split("/");
  const newDate: string = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
  // console.log(splitDate);
  // const month: string = splitDate[1];
  // const day: string = splitDate[0];
  // const year: string = splitDate[2];

  // console.log("day", day, "mes", month, "ano", year);
  // console.log(newDate);
  try {
    await connection("TodoListTask").insert({
      id: Date.now().toString(),
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      limit_date: newDate,
      creator_user_id: req.body.creator_user_id,
    });
    res.status(201).send("Created");
  } catch (e: any) {
    console.log(e);
    res.status(404).send(e.message);
  }
});
//5
app.get("/task/:id", async (req: Request, res: Response) => {
  const idParam = req.params.id;
  try {
    const result = await connection.raw(`
  SELECT
  TodoListTask.creator_user_id,
  TodoListTask.id,
  TodoListTask.title,
  TodoListTask.description,
  TodoListTask.status,
  TodoListTask.limit_date,
  TodoListUser.nickname
  FROM TodoListTask
  JOIN TodoListUser ON TodoListTask.id=${idParam}
  `);

    res.status(200).send(result.flat(1)[0]);
  } catch (e: any) {
    console.log(e);
    res.status(404).send(e.message);
  }
});
//6
app.get("/user/all", async (req: Request, res: Response) => {
  try {
    // const result = await connection.raw(`
    // SELECT id,nickname
    // FROM TodoListUser
    // `);
    const result = await connection("TodoListUser").select("id", "nickname");
    res.status(200).send(result);
  } catch (e: any) {
    console.log(e);
    res.status(404).send("Error please try again.");
  }
});
