import PostDatabase from "../data/PostDatabase";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../types/PostInputDTO";

export default class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  createPost = async (token: string, input: PostInputDTO) => {
    const { photo, description, photoType } = input;
    if (!photo || !description || !photoType) {
      throw new Error("Campos inválidos!");
    }
    //gerar id do post
    const id = this.idGenerator.generateId();
    //verificando o token
    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Token inválido");
    }
    //gerando a data do post
    const created_at = new Date();

    //pegando o id do usuário
    const creator_user_id = tokenData.id;

    //criar o usuario no banco
    const user = new Post(
      id,
      photo,
      description,
      created_at,
      photoType,
      creator_user_id
    );
    await this.postDatabase.insertPost(user);
  };

  getPostById = async (id: string) => {
    const post: Post = await this.postDatabase.getPostById(id);

    return post;
  };

  //FEED
  // getAll = async (token: string) => {
  //   const tokenData = this.authenticator.getTokenData(token);
  //   if (!tokenData) {
  //     throw new Error("Token inválido");
  //   }
  //   const result = await this.userData.getAllUsers();
  //   return result;
  // };
}
