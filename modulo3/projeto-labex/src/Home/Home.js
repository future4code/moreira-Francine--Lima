import React from "react";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const navigate = useNavigate();
  const goToVerViagens = () => {
    navigate("/trips/list");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToPageAdmin = () => {
    navigate("/admin/trips/list");
  };
  return (
    <div>
      <button onClick={goToPageAdmin}>Admin Home</button>
      <p>Home</p>
      <button onClick={goToVerViagens}>Ver viagens</button>
      <button onClick={goToLogin}>Área Admin</button>
    </div>
  );
}

export default Home;
