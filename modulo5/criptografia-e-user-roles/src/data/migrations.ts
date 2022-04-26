import { Role } from "../types/type";
import { connection } from "./connection";

// const printError = (error: any) => {
//   console.log(error.sqlMessage || error.message);
// };

// const createTable = () =>
//   connection
//     .raw(
//       ` CREATE TABLE IF NOT EXISTS  login_users (
//          id VARCHAR(255) PRIMARY KEY,
//          email VARCHAR(255) UNIQUE NOT NULL,
//          password VARCHAR(255) NOT NULL
//       );

// `    )
//     .then(() => {
//       console.log("Created!");
//     })
//     .catch(printError);
// const closeConnection = () => {
//   connection.destroy();
// };
// createTable().finally(closeConnection);

export const createUser = async (
  id: string,
  email: string,
  password: string,
  role:Role
) => {
  await connection
    .insert({
      id,
      email,
      password,
      role
    })
    .into("login_users");
};
export const LoginUser = async (email: string): Promise<any> => {
  const result = await connection("login_users")
    .select("*")
    .where({ email: email });

  return result[0];
};

export const getUserById = async (id: string): Promise<any> => {
  const result = await connection("login_users")
    .select("*")
    .where({ id: id });

  return result[0];
};
