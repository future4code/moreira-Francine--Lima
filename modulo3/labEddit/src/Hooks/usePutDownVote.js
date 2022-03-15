import axios from "axios";
import { BaseUrl, headerPosts } from "../constants/constants";

export const usePutDownVote = (url) => {
  const body = {
    direction: -1,
  };
  const onDownvote = () => {
    axios
      .put(BaseUrl + url, body, headerPosts)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return { onDownvote };
};
