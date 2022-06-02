import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useGet } from "../../Hooks/useGet";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export default function StatusPaymentCardCheckout() {
  const navigate = useNavigate();
  useProtectedPage();
  const { data, getData } = useGet("/service/card");
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Header />
        <h1>Status do pagamento</h1>
        <p>Id da compra: {data?.id}</p>
        <p>Nome: {data?.name}</p>
        <p>Email: {data?.email}</p>
        <p>CPF: {data?.cpf}</p>
        <p>Titular do cartão: {data?.cardHolderName}</p>
        <p>Número do cartão: {data?.cardNumber}</p>
        <p>Validade do cartão: {data?.cardExpirationDate}</p>
        <p>CVV: {data?.cvv}</p>
        <p>Valor total: R${data?.amount}</p>
        <p>Status: {data?.status}</p>
      </div>

      <button onClick={() => navigate("/")}>Voltar a home</button>
    </>
  );
}
