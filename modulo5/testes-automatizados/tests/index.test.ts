import { purchase } from "../src";
import { User } from "../src/types/User";

test("Testing balance greater than value", () => {
  const user: User = {
    name: "Astrodev",
    balance: 100,
  };

  const result = purchase(user, 40);

  expect(result).toEqual({
    name: "Astrodev",
    balance: 60,
  });
});

test("Testing balance equals to value", () => {
  const user: User = {
    name: "Astrodev",
    balance: 100,
  };

  const result = purchase(user, 100);

  expect(result).toEqual({
    name: "Astrodev",
    balance: 0,
  });
});

test("Testing balance smaller than value", () => {
  const user: User = {
    name: "Astrodev",
    balance: 100,
  };

  const result = purchase(user, 110);

  expect(result).not.toBeDefined();
});