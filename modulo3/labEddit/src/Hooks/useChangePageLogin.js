import { useNavigate } from "react-router-dom";
export const useChangePageLogin = (path) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(path);
  };
  return { goToLogin };
};
