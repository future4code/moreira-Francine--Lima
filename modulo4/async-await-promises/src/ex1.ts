import axios from "axios";
import { baseUrl } from "./baseUrl";

//1a)

//Optaria por esse endpoint:
//https://labenews.herokuapp.com/subscribers

//b)Promise<any[]>

//c)
async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${baseUrl}/subscribers`)
  console.log(response.data)
  return response.data;
};

const main = async() => {
  await getSubscribers()
};
main()
