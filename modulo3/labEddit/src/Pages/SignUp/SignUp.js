import Header from "../../components/Header/Header";
import { useForm } from "../../Hooks/useForm";
import axios from "axios";
import React from "react";
import { SignUpPageContainer, FormContainer, ButtonContainer } from "./style";
import { BaseUrl, headers } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useChangePage } from "../../Hooks/useChangePage";
import { useChangePageLogin } from "../../Hooks/useChangePageLogin";
function SignUp() {
  const { form, onChangeForm, clearForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //Router
  const navigate = useNavigate();
  const { goToLogin } = useChangePageLogin("/login");
  const onSingUp = (e) => {
    e.preventDefault();
    clearForm();
  };
  const signUp = () => {
    const body = form;
    axios
      .post(BaseUrl + "/users/signup", body, headers)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/feed");
      })
      .catch((err) => {
        if (
          err.response.data.message ===
          "Erro ao validar os seguintes parâmetros: "
        ) {
          alert("Algo deu errado, por favor tente novamente.");
        } else {
          alert(`${err.response.data}, por favor faça o login.`);
        }
      });
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <SignUpPageContainer>
            <h1>Cadastre-se</h1>
            <FormContainer onSubmit={onSingUp}>
              <p>Usuário</p>
              <input
                type="text"
                name={"username"}
                placeholder="Nome"
                onChange={onChangeForm}
                value={form.username}
                required
              />
              <p>Email</p>
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
                <button onClick={goToLogin}>Login</button>
                <button type={"submit"} onClick={signUp}>
                  Enviar
                </button>
              </ButtonContainer>
            </FormContainer>
          </SignUpPageContainer>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
