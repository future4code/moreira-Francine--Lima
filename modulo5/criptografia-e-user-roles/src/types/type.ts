export enum Role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
export type Payload = {
  id: string;
  role: string;
};

export type User = {
  id: string;
  email: string;
  role: Role;
};
