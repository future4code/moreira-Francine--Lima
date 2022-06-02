import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { base_Url } from "../../Constants/base_Url";
import useForm from "../../Hooks/useForm";

export default function PaymentCardCheckout() {
  const navigate = useNavigate();
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    cardHolderName: "",
    cardNumber: "",
    cardExpirationDate: "",
    cvv: "",
  });
  const onPaymentCardCheckout = (e) => {
    e.preventDefault();
  };

  const createPaymentCardCheckout = () => {
    const body = form;
    axios
      .post(base_Url + "/service/card", body)
      .then((res) => {
        clearForm();
        localStorage.setItem("token", res.data.token);
        navigate("/statusPaymentCardCheckout");
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
      <h1>Pagamento com cartão</h1>
      <form onSubmit={onPaymentCardCheckout}>
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
        <h4>Dados do cartão</h4>
        <p>Nome do titular do cartão</p>
        <input
          type="text"
          name={"cardHolderName"}
          placeholder="Nome do titular"
          onChange={onChangeForm}
          value={form.cardHolderName}
          required
        />
        <p>Número do cartão</p>
        <input
          type="text"
          name={"cardNumber"}
          placeholder="Número do cartão, apenas números"
          onChange={onChangeForm}
          value={form.cardNumber}
          required
        />
        <p>Data de expiração do cartão</p>
        <input
          type="text"
          name={"cardExpirationDate"}
          placeholder="Data de expiração do cartão 'MM/AAAA'"
          onChange={onChangeForm}
          value={form.cardExpirationDate}
          required
        />
        <p>CVV</p>
        <input
          type="text"
          name={"cvv"}
          placeholder="CVV"
          onChange={onChangeForm}
          value={form.cvv}
          required
        />
        <div>
          <button type={"submit"} onClick={createPaymentCardCheckout}>
            Pagar com cartão
          </button>
          <Link to="/">
            <button>Voltar a home</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
