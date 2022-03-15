import { useState } from "react";
import axios from "axios";
import { BaseUrl, token } from "../constants/constants";

export const useGet = (path) => {
  const [data, setData] = useState([]);

  // //Axios get posts

  const getData = async () => {
    const header = { headers: { Authorization: token } };
    try {
      const resp = await axios.get(BaseUrl + path, header);
      setData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { data, getData };
};
