import axios from "axios";
import { useState } from "react";
import { BaseUrl, token } from "../constants/constants";
export const useCreatePosts = (body) => {
  const [isCreated, setIsCreated] = useState(false);
  // //Axios create posts
  const createPost = () => {
    const header = { headers: { Authorization: token } };
    axios
      .post(BaseUrl + "/posts", body, header)
      .then((res) => {
        setIsCreated(!isCreated);
        alert("Post criado com sucesso!");
      })

      .catch((err) => {
        console.log(err.response);
      });
  };

  return { createPost, isCreated };
};
