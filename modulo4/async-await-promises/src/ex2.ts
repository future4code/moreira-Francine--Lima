import axios from "axios";
import { baseUrl } from "./baseUrl";

//2a),b)
//A diferença está na sintaxe e na posição do async que na funcção regular ven antes da declaração da função
//Regular function
// async function getSubscribers(): Promise<any[]> {
//   const response = await axios.get(`${baseUrl}/subscribers`);
//   return response.data;
// }

//Arrow function
// const getSubscribers = async (): Promise<any[]> => {
//   const response = await axios.get(`${baseUrl}/subscribers`);
//   return response.data;
// };
