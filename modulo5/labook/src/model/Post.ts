import { Photo } from "../types/PhotoEnum";

export default class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private created_at: Date,
    private photoType: Photo,
    private creator_user_id: string
  ) {}
}
