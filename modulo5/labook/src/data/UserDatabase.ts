import Post from "../model/Post";
import User from "../model/User";
import { FindByEmailResponse } from "../types/findByEmailResponse";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  protected TABLE_NAME = "User_Labook";

  insert = async (user: User) => {
    try {
      await this.connection(this.TABLE_NAME).insert(user);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  findByEmail = async (email: string) => {
    try {
      const queryResult: FindByEmailResponse = await this.connection(
        this.TABLE_NAME
      )
        .select("*")
        .where({ email: email });

      return queryResult[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  LoginUser = async (email: string): Promise<any> => {
    try {
      const result = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ email: email });

      return result[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  // getUserById = async (id: string): Promise<any> => {
  //   try {
  //     await this.connection(this.TABLE_NAME).where({ id: id });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw new Error(error.message);
  //     } else {
  //       throw new Error("Erro do banco !");
  //     }
  //   }
  // };
  // getAllUsers = async (): Promise<any> => {
  //   try {
  //     const result = await this.connection(this.TABLE_NAME);
  //     return result;
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw new Error(error.message);
  //     } else {
  //       throw new Error("Erro do banco !");
  //     }
  //   }
  // };
}
