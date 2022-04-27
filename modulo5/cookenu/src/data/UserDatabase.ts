import { User } from "../entities/User";
import connection from "./connection";

export class UserDatabase {
  public async createUser(user: User) {
    try {
      await connection("Users_Hacka").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
  //find user by email and check if is signed up or not
  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await connection("Users_Hacka")
        .select("*")
        .where({ email: email });
      return user[0] && User.toUserModel(user[0]);
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }

  //get all users
  public async getAllUsers(): Promise<User[]> {
    try {
      const allUsersDatabase = await connection("Users_Hacka").select(
        "id",
        "name",
        "email",
        "role"
      );
      return allUsersDatabase.map((user) => User.toUserModel(user));
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
  //get user info
  public async getUserInfo(id: string): Promise<User[]> {
    try {
      const userInfoDatabase = await connection("Users_Hacka")
        .select("id", "email")
        .where({ id: id });
      return userInfoDatabase.map((user) => User.toUserModel(user));
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
}
