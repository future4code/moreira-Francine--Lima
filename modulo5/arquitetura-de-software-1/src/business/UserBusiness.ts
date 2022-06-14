import UserData from "../data/UserDatabase";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignupInputDTO } from "../types/signuopInputDTO";

export default class UserBusiness {
  constructor(
    private userData: UserData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  signup = async (input: SignupInputDTO) => {
    //validacao
    const { name, email, password, role } = input;
    if (!email || !name || !password || !role) {
      throw new Error("Campos inválidos");
    }

    //conferir se o usuario existe
    const registeredUser = await this.userData.findByEmail(email);
    if (registeredUser) {
      throw new Error("Email já cadastrado");
    }

    //criar uma id pro usuario
    const id = this.idGenerator.generateId();

    //hashear o password
    const hashedPassword = await this.hashManager.hash(password);

    //criar o usuario no banco
    const user = new User(id, name, email, hashedPassword, role);
    await this.userData.insert(user);
    //criar o token
    const token = this.authenticator.generateToken({ id: id, role: role });
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
    const user = await this.userData.LoginUser(email);

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
      role: user.role,
    });
    //retornar o token
    return token;
  };

  getAll = async (token: string) => {
    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Token inválido");
    }
    const result = await this.userData.getAllUsers();
    return result;
  };
  deleteUserById = async (token: string, id: string) => {
    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Token inválido");
    }
    await this.userData.deleteUserById(id);

    return "Deletado.";
  };
}
