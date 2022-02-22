import Header from "../../components/Header/Header";
import { useForm } from "../../Hooks/useForm";
import axios from "axios";
import React from "react";
import { BaseUrl, headers } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { LoginPageContainer, FormContainer, ButtonContainer } from "./style";
import { useChangePage } from "../../Hooks/useChangePage";
function Login() {
  const { form, onChangeForm, clearForm } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { goTo } = useChangePage("/");
  const onLogin = (e) => {
    e.preventDefault();
    clearForm();
  };
  const loginUser = () => {
    const body = form;
    axios
      .post(BaseUrl + "/users/login", body, headers)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/feed");
      })
      .catch((err) => {
        alert("Email ou senha incorreta, por favor tente novamente.");
      });
  };
  return (
    <div>
      <Header />
      <div>
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
              pattern={"^.{8,30} "}
              title="A senha deve conter mais que oito caracteres e menos de trinta caracteres."
            />
            <ButtonContainer>
              <button onClick={goTo}>Voltar</button>
              <button onClick={loginUser}>Enviar</button>{" "}
            </ButtonContainer>
          </FormContainer>
        </LoginPageContainer>
      </div>
    </div>
  );
}
export default Login;
