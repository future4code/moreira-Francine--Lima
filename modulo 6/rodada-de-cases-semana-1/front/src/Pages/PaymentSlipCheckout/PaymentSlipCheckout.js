import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { base_Url } from "../../Constants/base_Url";
import useForm from "../../Hooks/useForm";

export default function PaymentSlipCheckout() {
  const navigate = useNavigate();

  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
  });
  const onCreatePaymentSlipCheckout = (e) => {
    e.preventDefault();
  };
  //endpoint signup
  const createPaymentSlipCheckout = () => {
    const body = form;
    axios
      .post(base_Url + "/service/boleto", body)
      .then((res) => {
        clearForm();
        localStorage.setItem("token", res.data.token);
        navigate("/statusPaymentSlipCheckout");
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
    <div>
      <Header />
      <h1>Dados para a criação do boleto</h1>
      <form onSubmit={onCreatePaymentSlipCheckout}>
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
        <div>
          <button type={"submit"} onClick={createPaymentSlipCheckout}>
            Gerar boleto
          </button>
        </div>
      </form>
      <button onClick={() => navigate("/")}>Voltar a home</button>
    </div>
  );
}
