import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { loginPostUrl, headers } from "../constants/constants";
import Header from "../Header/Header";
import styled from "styled-components";
const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  width: 400px;
  margin: 0 auto;
  width: 400px;
  height: 320px;
  background-color: #efefef;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    align-self: flex-start;
    font-size: 14px;
  }
  input {
    font-size: 14px;
    font-family: monospace;
    font-weight: lighter;
    align-self: start;
    border-radius: 5px;
    outline: none;
    width: 200px;
    background-color: white;
    transition: padding 0.3s 0.2s ease;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  button {
    font-size: 14px;
    letter-spacing: 2px;
    color: #31322e;
    cursor: pointer;
    border: 3px solid;
    margin: 28px;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      4px 4px 0px 0px, 5px 5px 0px 0px;
  }
`;
function Login() {
  const { form, onChangeForm, clearForm } = useForm({
    email: "",
    password: "",
  });

  //Router
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  //inputs controlados
  const onLogin = (e) => {
    e.preventDefault();
    clearForm();
  };

  //Axios post Login
  const loginUser = () => {
    const body = form;
    axios
      .post(loginPostUrl, body, headers)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert("Usuário ou senha incorreta, por favor tente novamente.");
      });
  };

  return (
    <div>
      <Header />
      <LoginPageContainer>
        <h1>Login</h1>
        <FormContainer onSubmit={onLogin}>
          <p>Usuário</p>
          <input
            type="text"
            name={"email"}
            placeholder="User email"
            onChange={onChangeForm}
            value={form.email}
            required
          />

          <p>Senha</p>
          <input
            type="password"
            name={"password"}
            placeholder="Senha"
            onChange={onChangeForm}
            value={form.password}
            required
            pattern={"^.{3,} "}
            title="A senha deve conter mais que três caracteres."
          />
          <ButtonContainer>
            <button onClick={goToHome}>Voltar</button>
            <button onClick={loginUser}>Enviar</button>{" "}
          </ButtonContainer>
        </FormContainer>
      </LoginPageContainer>
    </div>
  );
}

export default Login;
