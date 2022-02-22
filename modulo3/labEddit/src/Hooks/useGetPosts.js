import { useState } from "react";
import axios from "axios";

import { BaseUrl, token } from "../constants/constants";
export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);

  // //Axios get posts

  const getPosts = () => {
    const header = { headers: { Authorization: token } };
    axios
      .get(BaseUrl + "/posts", header)
      .then((res) => {
        setPosts(res.data);
      })

      .catch((err) => {
        console.log(err.response);
      });
  };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return { posts, getPosts };
};
