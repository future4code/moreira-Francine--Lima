import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";

//get all user
// export const getAllUsers = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const users = await selectAllUsers();

//     if (!users.length) {
//       res.statusCode = 404;
//       throw new Error("No recipes found");
//     }

//     res.status(200).send(users);
//   } catch (error: any) {
//     console.log(error);
//     res.send(error.message || error.sqlMessage);
//   }
// };

// export async function selectAllUsers(): Promise<any> {
//   const result = await connection.raw(`
//       SELECT id, name, email, type
//       FROM aula48_exercicio;
//    `);

//   return result[0];
// }

//getUserByName
// export const getUserByName = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const name = req.query.name as string;
//     const foundUser = await selectUserByName(name);

//     res.status(200).send(foundUser);
//   } catch (e: any) {
//     console.log(e);
//     res.send(e?.message || e.sqlMessage);
//   }
// };

// export async function selectUserByName(name: string): Promise<user> {
//   const result = await connection("aula48_exercicio").where({
//     name: name,
//   });

//   return result[0];
// }

//get users by type
// export const getUsersByType = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const type = req.params.type as string;
//     const foundUsers = await selectUserByType(type);

//     res.status(200).send(foundUsers);
//   } catch (e: any) {
//     console.log(e);
//     res.send(e?.message || e.sqlMessage);
//   }
// };

// export async function selectUserByType(type: string): Promise<user[]> {
//   const result = await connection("aula48_exercicio").where({
//     type: type,
//   });

//   return result
// }

//get users by type or name
// export const getUsersByTypeOrName = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     let order = req.query?.order as string;
//     let sort = req.query?.sort as string;

//     if (sort !== "type" && sort !== "name") {
//       sort = "type";
//     }

//     if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
//       order = "ASC";
//     }
//     const found = await selectUserByTypeOrName(order, sort);
//     res.status(200).send(found);
//   } catch (e: any) {
//     console.log(e);
//     res.send(e?.message || e.sqlMessage);
//   }
// };

// export async function selectUserByTypeOrName(
//   order: string,
//   sort: string
// ): Promise<user[]> {
//   const result = await connection("aula48_exercicio").orderBy(sort, order); //sort é categoria/coluna que uso para ordenar DESC ou ASC

//   return result;
// }

// page com offset e limite de conteudo por página (size)
// export const getAllUsers = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     let page = Number(req.query?.page);
//     let size = 5;
//     let offset = size * (page - 1);
//     if (offset < 0) {
//       offset = 0;
//     }

//     const users = await selectAllUsers(offset, size);

//     if (users.length === 0) {
//       res.statusCode = 404;
//       throw new Error("User not found.");
//     }

//     res.status(200).send(users);
//   } catch (error: any) {
//     console.log(error);
//     res.send(error.message || error.sqlMessage);
//   }
// };

// export async function selectAllUsers(
//   offset: number,
//   size: number
// ): Promise<any> {
//   const result = await connection("aula48_exercicio")
//     .limit(size)
//     .offset(offset);

//   return result;
// }

//get users by type or name and page

export const getUsersByTypeOrNameAndPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let order = req.query?.order as string; //Ascendente ou descendente
    let sort = req.query?.sort as string; //coluna que vou ordenar ex. name
    let page = Number(req.query?.page);
    let size = 5;

    if (sort !== "type" && sort !== "name") {
      sort = "name";
    }

    if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
      order = "DESC";
    }

    let offset = size * (page - 1);

    if (offset < 0 || !offset) {
      offset = 0;
    }
    const found = await selectUserByTypeOrNameAndPage(
      order,
      sort,
      size,
      offset
    );

    res.status(200).send(found);
  } catch (e: any) {
    console.log(e);

    res.send(e?.message || e.sqlMessage);
  }
};

export async function selectUserByTypeOrNameAndPage(
  order: string,
  sort: string,
  size: number,
  offset: number
): Promise<user[]> {
  const result = await connection("aula48_exercicio")
    .orderBy(sort, order)
    .limit(size) //size é o número de elementos a ser exibido por página
    .offset(offset); //sort é categoria/coluna que uso para ordenar DESC ou ASC

  return result;
}
