import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { base_Url } from "../../Constants/base_Url";
import useForm from "../../Hooks/useForm";

export default function PaymentCardUser() {
  const navigate = useNavigate();
  const { form, onChangeForm, clearForm } = useForm({
    cardHolderName: "",
    cardNumber: "",
    cardExpirationDate: "",
    cvv: "",
  });
  const onPaymentCardUser = (e) => {
    e.preventDefault();
  };

  const createPaymentCardUser = () => {
    const body = form;
    const token = localStorage.getItem("token");
    const headers = {
      headers: { authorization: token },
    };
    axios
      .post(base_Url + "/user/card", body, headers)
      .then((res) => {
        clearForm();
        navigate("/statusPaymentUserCard");
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
      <h1>Cadastre-se</h1>
      <form onSubmit={onPaymentCardUser}>
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
          <button type={"submit"} onClick={createPaymentCardUser}>
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
