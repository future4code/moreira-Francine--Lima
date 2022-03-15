import axios from "axios";
import { headerPosts, BaseUrl } from "../constants/constants";

export const usePostUpvote = (url) => {
  const body = { direction: +1 };
  const onPostVote = () => {
    axios
      .post(BaseUrl + url, body, headerPosts)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return { onPostVote };
};
