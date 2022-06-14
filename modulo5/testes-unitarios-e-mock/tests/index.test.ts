import { performAttack, performAttackInj, validateCharacter } from "../src";
import { Character } from "../src/types/Character";

//2
describe("Check Empty fields", () => {
  //a
  test("Testing empty string", () => {
    const character: Character = {
      name: "",
      life: 1500,
      defense: 1000,
      strength: 2000,
    };

    const result = validateCharacter(character);

    expect(result).toEqual(false);
  });

  //b

  test("Testing 0 life", () => {
    const character: Character = {
      name: "Panda",
      life: 0,
      defense: 1000,
      strength: 2000,
    };

    const result = validateCharacter(character);

    expect(result).toEqual(false);
  });

  //c

  test("Testing 0 strength", () => {
    const character: Character = {
      name: "Panda",
      life: 1500,
      defense: 1000,
      strength: 0,
    };

    const result = validateCharacter(character);

    expect(result).toEqual(false);
  });

  //d
  test("Testing 0 defense", () => {
    const character: Character = {
      name: "Panda",
      life: 1500,
      defense: 0,
      strength: 2000,
    };

    const result = validateCharacter(character);

    expect(result).toEqual(false);
  });

  //e
  test("Testing negative defense or strength or life", () => {
    const character: Character = {
      name: "Panda",
      life: 1500,
      defense: -1,
      strength: 2000,
    };

    const result = validateCharacter(character);

    expect(result).toEqual(false);
  });

  //f
  test("Testing with valid information", () => {
    const character: Character = {
      name: "Panda",
      life: 1500,
      defense: 2000,
      strength: 3000,
    };

    const result = validateCharacter(character);

    expect(result).toEqual(true);
  });
});

//3
describe("Testing Fight", () => {
  //3a
  test("Testing character", () => {
    const attacker: Character = {
      name: "Panda",
      life: 1500,
      defense: 3000,
      strength: 3000,
    };
    const defender: Character = {
      name: "Urso Polar",
      life: 2000,
      defense: 3500,
      strength: 4000,
    };

    const result = performAttack(attacker, defender);

    expect(result).toEqual(true);
  });
  //3b
  test("Testing character with dependency injection", () => {
    const attacker: Character = {
      name: "Panda",
      life: 1500,
      defense: 3000,
      strength: 3000,
    };
    const defender: Character = {
      name: "Urso Polar",
      life: 2000,
      defense: 1000,
      strength: 1000,
    };

    const result = performAttackInj(attacker, defender, validateCharacter);

    expect(result).toEqual(true);
  });
});

//4
// describe("Testing with mocks", () => {
//   //4a)
//   //Eu criaria o mock da função 'perform attack' por que já estou injetando a 'validate character' dentro dela como parâmetro.
//   test("Testing with mock jest.fn", () => {
//     const mock = jest.fn(() => {
//       return true;
//     });
//   });
//   test("Testing with mock jest.fn", () => {
//     const mock = jest.fn(() => {
//       return false;
//     });
//   });
// });

//5
describe("Testing real characters", () => {
  test("Testing real characters with mocks", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
    const attacker: Character = {
      name: "Panda",
      life: 1500,
      defense: 3200,
      strength: 3600,
    };
    const defender: Character = {
      name: "Urso Polar",
      life: 2200,
      defense: 3400,
      strength: 4200,
    };
    performAttackInj(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(200);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Testing failed real characters with mocks", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
    const attacker: Character = {
      name: "Panda",
      life: -1500,
      defense: 3200,
      strength: 3600,
    };
    const defender: Character = {
      name: "Urso Polar",
      life: 2200,
      defense: 3400,
      strength: 4200,
    };
    performAttackInj(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(200);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
});
