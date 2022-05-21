import { UserBusiness } from "../src/business/UserBusiness";
import { UserInputDTO } from "../src/model/User";

describe("unit tests", () => {
  test("Testing signup", async () => {
    const user = new UserBusiness();
    const input: UserInputDTO = {
      name: "Arthur",
      email: "art@gmal.com",
      cpf: "08036589311",
      password: "1234567",
    };
    const result = await user.createUser(input);

    expect(result).toBe("string");
  });

});
