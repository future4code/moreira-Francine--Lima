import axios from "axios";
import { baseUrl } from "./baseUrl";
import { user } from "./type";

//3a) ao colocar a tipagem (user) nenhum erro ocorreu, porém é necessário importar a tipagem caso não esteja no mesmo arquivo.

// const getSubscribers = async (): Promise<user[]> => {
//   const response = await axios.get(`${baseUrl}/subscribers`);
//   return response.data;
// };

//b) Para garantir os tipos de dados que virão e consolidifcar ainda mais o sistema que estamos construindo deixando-o bem "amarrado".
//também melhoramos a visualização dos dados ao fazer isso.

//c)
// const getSubscribers = async (): Promise<user[]> => {
//   const response = await axios.get(`${baseUrl}/subscribers`);
//   return response.data.map((res: any) => {
//     return {
//       id: res.id,
//       name: res.name,
//       email: res.email,
//     };
//   });
// };
