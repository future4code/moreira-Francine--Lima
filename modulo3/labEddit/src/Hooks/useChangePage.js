import { useNavigate } from "react-router-dom";
export const useChangePage = (path) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(path);
  };
  return { goTo };
};
