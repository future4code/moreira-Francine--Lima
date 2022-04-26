import * as jwt from "jsonwebtoken";
import { Payload } from "../types/type";
import dotenv from "dotenv";

dotenv.config();
export const generateToken = (input: Payload): string => {
  console.log(process.env.JWT_KEY);

  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: "10m",
    }
  );
  return token;
};


export const getData = (token: string): Payload => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role:payload.role
  };
  return result;
};