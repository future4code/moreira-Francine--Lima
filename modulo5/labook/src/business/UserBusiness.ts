import UserDatabase from "../data/UserDatabase";
import Post from "../model/Post";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";
import { PostInputDTO } from "../types/PostInputDTO";
import { SignupInputDTO } from "../types/signuopInputDTO";

export default class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  signup = async (input: SignupInputDTO) => {
    //validacao
    const { name, email, password } = input;
    if (!email || !name || !password) {
      throw new Error("Campos inválidos");
    }

    //conferir se o usuario existe
    const registeredUser = await this.userDatabase.findByEmail(email);
    if (registeredUser) {
      throw new Error("Email já cadastrado");
    }

    //criar uma id pro usuario
    const id = this.idGenerator.generateId();

    //hashear o password
    const hashedPassword = await this.hashManager.hash(password);

    //criar o usuario no banco
    const user = new User(id, name, email, hashedPassword);
    await this.userDatabase.insert(user);
    //criar o token
    const token = this.authenticator.generateToken({ id: id });
    //retornar o token
    return token;
  };

  login = async (input: LoginInputDTO) => {
    //validacao
    const { email, password } = input;
    if (!email || !password) {
      throw new Error("Campos inválidos");
    }

    //conferir se o usuario existe
    const user = await this.userDatabase.LoginUser(email);

    if (!user) {
      throw new Error("Email não cadastrado. Por favor cadastre-se.");
    }

    //hashear o password e comparar as hashes
    const compareHash = await this.hashManager.compare(password, user.password);

    if (!compareHash) {
      throw new Error("Email ou senha incorretas.");
    }
    //criar o token
    const token = this.authenticator.generateToken({
      id: user.id,
    });
    //retornar o token
    return token;
  };

  
  // getAll = async (token: string) => {
  //   const tokenData = this.authenticator.getTokenData(token);
  //   if (!tokenData) {
  //     throw new Error("Token inválido");
  //   }
  //   const result = await this.userData.getAllUsers();
  //   return result;
  // };
  // getUserById = async (token: string, id: string) => {
  //   const tokenData = this.authenticator.getTokenData(token);
  //   if (!tokenData) {
  //     throw new Error("Token inválido");
  //   }
  //   await this.userData.getUserById(id);

  //   return
  // };
}
