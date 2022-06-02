export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private cpf: string,
    private password: string
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getCpf() {
    return this.cpf;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setCpf(cpf: string) {
    this.cpf = cpf;
  }

  static toUserModel(user: any): User {
    return new User(user.id, user.name, user.email, user.cpf, user.password);
  }
}

export interface UserInputDTO {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}
