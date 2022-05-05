import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostDatabase extends BaseDatabase {
  protected TABLE_NAME = "Post_Labook";

  insertPost = async (post: Post) => {
    try {
      await this.connection(this.TABLE_NAME).insert(post);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco!");
      }
    }
  };
  getPostById = async (id: string): Promise<Post> => {
    try {
      const post = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({ id: id });
      return post[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
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
