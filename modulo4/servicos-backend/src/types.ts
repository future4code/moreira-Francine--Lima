export type user = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  address: string;
};

export type Address = {
  CEP: string;
  Logradouro: string | number;
  Bairro: string;
  Cidade: string;
  Complemento: string;
  UF: string;
};
