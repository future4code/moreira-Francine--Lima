import axios from "axios";
import { headerPosts, BaseUrl } from "../constants/constants";
import { useState } from "react";

export const usePostUpvote = (url) => {
  const [isVoted, setIsVoted] = useState(false);
  const body = { direction: +1 };
  const onPostVote = () => {
    axios
      .post(BaseUrl + url, body, headerPosts)
      .then((res) => {
        console.log("yeah!", res);
        setIsVoted(!isVoted);
      })
      .catch((err) => {
        console.log("ixe", err.response);
      });
  };
  return { onPostVote, isVoted };
};
// posts/${id}/votes
