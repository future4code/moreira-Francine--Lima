import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useGet } from "../../Hooks/useGet";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export default function StatusPaymentUserCard() {
  const navigate = useNavigate();
  useProtectedPage();
  const { data, getData } = useGet("/user/card");
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
        <p>Valor total: R${data?.amount}</p>
        <p>Status: {data?.status}</p>
      </div>
      <button onClick={() => navigate("/")}>Voltar a home</button>
    </>
  );
}
