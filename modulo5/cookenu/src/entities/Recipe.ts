export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private created_At: Date // private user_id: string
  ) {}

  //to access the attributes in the class

  public getId() {
    return this.id;
  }
  public getTitle() {
    return this.title;
  }
  public getCreated_at() {
    return this.created_At;
  }
  public getDescription() {
    return this.description;
  }
  // public getRole() {
  //   return this.user_id;
  // }

  //any object comming from the bank receives an instance of recipe even if it is empty
  static toRecipeModel(data: any): Recipe {
   

    return new Recipe(
      data.id,
      data.title,
      data.description,
      data.created_At.toLocaleString().split(" ")[0]
      // data.user_id
    );
  }
}
