import axios from "axios";
import { headerPosts, BaseUrl } from "../constants/constants";

export const useDeleteVote = (path) => {
  const deleteVote = () => {
    axios
      .delete(BaseUrl + path, headerPosts)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.reponse);
      });
  };
  return deleteVote;
};
