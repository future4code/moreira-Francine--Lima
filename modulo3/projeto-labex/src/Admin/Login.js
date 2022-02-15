import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <p>Login</p>
      <div>
        <p>Usuário</p>
        <input type="text" placeholder="User name" />
        {/* Talvez precise envolopar cada input com os ps em divs separadas */}
        <p>Senha</p>
        <input type="password" placeholder="Senha" />
      </div>
      <div>
        <button onClick={goToHome}>Voltar</button>

        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Login;
