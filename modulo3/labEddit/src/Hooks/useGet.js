import { useState } from "react";
import axios from "axios";

import { BaseUrl, token } from "../constants/constants";
export const useGet = (path) => {
  const [data, setData] = useState([]);

  // //Axios get posts

  const getData = () => {
    const header = { headers: { Authorization: token } };
    axios
      .get(BaseUrl + path, header)
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log(err.response);
      });
  };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return { data, getData };
};
