import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "signup_user";
  public async createUser(
    id: string,
    name: string,
    email: string,
    cpf: string,
    password: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          email,
          cpf,
          password,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getUserByEmail(email: string): Promise<User> | undefined {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({ email });
      return result[0] && User.toUserModel(result[0]);
      // without this model and the result &&
      //the code will generate an error saying this.getUserPassword is not a function
      //and will also generate an error on the login not finding the id
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getUserById(id: string): Promise<User> | undefined {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({ id });
      return result[0] && User.toUserModel(result[0]);
      // without this model and the result &&
      //the code will generate an error saying this.getUserPassword is not a function
      //and will also generate an error on the login not finding the id
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
