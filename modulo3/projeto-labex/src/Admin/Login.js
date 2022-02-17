import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginPostUrl, headers } from "../constants/constants";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //Router
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  //inputs controlados
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };
  // console.log("Antes", isLogin);
  //Axios post Login
  const loginUser = () => {
    const body = { email: email, password: pass };

    axios
      .post(loginPostUrl, body, headers)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert("Usuário ou senha incorreta, por favor tente novamente.");
      });
  };

  return (
    <div>
      <p>Login</p>
      <div>
        <p>Usuário</p>
        <input
          type="text"
          placeholder="User email"
          onChange={onChangeEmail}
          value={email}
        />
        {/* Talvez precise envolopar cada input com os ps em divs separadas */}
        <p>Senha</p>
        <input
          type="password"
          placeholder="Senha"
          onChange={onChangePass}
          value={pass}
        />
      </div>
      <div>
        <button onClick={goToHome}>Voltar</button>

        <button onClick={loginUser}>Enviar</button>
      </div>
    </div>
  );
}

export default Login;
