import { Character } from "./types/Character";
//1)
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }

  return true;
};

//2a)
export function performAttack(attacker: Character, defender: Character): any {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    // throw new Error("Invalid character");
    return false;
  }

  if (defender.defense < attacker.strength) {
    defender.life -= attacker.strength - defender.defense;

    // throw new Error("Dead");
    return true;
  }

  if (defender.defense > attacker.strength) {
    // throw new Error("Winner");
    return true;
  }
}

//2b)
export function performAttackInj(
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
): any {
  if (!validator(attacker) || !validator(defender)) {
    // throw new Error("Invalid character");
    return false;
  }
  if (attacker.strength > defender.defense) {
    defender.life = attacker.strength - defender.defense;

    return true;
    // throw new Error("Dead");
  }

  if (defender.defense > attacker.strength) {
    // throw new Error("Winner");
    return true;
  }
}

//2-c) na injeção de dependências a função de validação passa a ser um parâmetro da função perform attack
