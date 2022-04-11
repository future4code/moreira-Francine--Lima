import axios from "axios";
import { baseUrl } from "./baseUrl";

//4b)
const createNews = async (title: string, content: string): Promise<void> => {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: Date.now(),
  });
};

//a) Arrow function, assíncrona.
