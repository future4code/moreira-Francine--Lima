import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import VerificaCPF from "../services/cpfAuthenticator";

export class UserBusiness {
  async createUser(user: UserInputDTO) {
    try {
      const userDatabase = new UserDatabase();
      const registeredUser = await userDatabase.getUserByEmail(user.email);
      //generating id
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      //hash manager
      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(user.password);

      //token generator
      const authenticator = new Authenticator();
      const accessToken = authenticator.generateToken({
        id: id,
      });

      //validations
      if (registeredUser) {
        throw new Error("User is already registered");
      }
      if (!user.email || !user.name || !user.password || !user.cpf) {
        throw new Error("Invalid fiedls");
      }
      if (user.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
      if (!VerificaCPF(user.cpf)) {
        throw new Error("Invalid CPF");
      }

      //creating user
      await userDatabase.createUser(
        id,
        user.name,
        user.email,
        user.cpf,
        hashPassword
      );

      //returning token
      return accessToken;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async Login(user: LoginInputDTO) {
    const userDatabase = new UserDatabase();
    const userDatabaseData: User = await userDatabase.getUserByEmail(
      user.email
    );

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userDatabaseData.getPassword()
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({
      id: userDatabaseData.getId(),
    });

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }
}
