import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { ContainerSignup } from "./styled";

export default function SignUp() {
  const navigate = useNavigate();
  //form
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const onSignUp = (e) => {
    e.preventDefault();
  };
  //endpoint signup
  const signUp = () => {
    const body = form;
    axios
      .post(base_Url + "/user/signup", body)
      .then((res) => {
        clearForm();
        localStorage.setItem("token", res.data.token);
        navigate("/paymentOptions");
      })
      .catch((err) => {
        if (err.response.data.error === "jwt expired") {
          localStorage.removeItem("token");
          alert("Token expirado, realize novamente o login.");
        } else {
          alert(`${err.response.data.error}`);
        }
      });
  };
  return (
    <>
      <Header />
      <ContainerSignup>
        <h4>Cadastre-se</h4>
        <form onSubmit={onSignUp}>
          <p>Nome</p>
          <input
            type="text"
            name={"name"}
            placeholder="Nome"
            onChange={onChangeForm}
            value={form.name}
            required
          />
          <p>Email</p>
          <input
            type="text"
            name={"email"}
            placeholder="Email"
            onChange={onChangeForm}
            value={form.email}
            required
          />
          <p>CPF</p>
          <input
            type="text"
            name={"cpf"}
            placeholder="CPF apenas números"
            onChange={onChangeForm}
            value={form.cpf}
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
          />
          <div>
            <button type={"submit"} onClick={signUp}>
              Enviar
            </button>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </form>
        <button
          onClick={() => {
            navigate("/paymentOptions");
          }}
        >
          Pague sem se cadastrar
        </button>
      </ContainerSignup>
    </>
  );
}
