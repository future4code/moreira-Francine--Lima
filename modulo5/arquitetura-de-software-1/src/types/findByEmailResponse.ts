import { USER_ROLES } from "./insertUser";

export type FindByEmailResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}[];
