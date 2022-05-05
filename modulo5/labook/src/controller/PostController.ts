import { Request, Response } from "express";
import PostBusiness from "../business/PostBusinees";
import Post from "../model/Post";
import { PostInputDTO } from "../types/PostInputDTO";

export default class PostController {
  constructor(private postBusiness: PostBusiness) {}

  insertPost = async (req: Request, res: Response) => {
    const { photo, description, photoType } = req.body;
    const token = req.headers.authorization;
    const input: PostInputDTO = {
      photo,
      description,
      photoType,
    };
    try {
      await this.postBusiness.createPost(token, input);

      res.status(200).send("Criado!");
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro tente novamente.");
    }
  };

  getPostById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const postData: Post = await this.postBusiness.getPostById(id);
     
      res.status(200).send(postData);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro  tente novamente.");
    }
  };
}
