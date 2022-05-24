import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
export default function PaymentOptions() {
  const navigate = useNavigate();
  const isTokenSet = localStorage.getItem("token");

  return (
    <div>
      <Header />
      <h1>Como deseja pagar?</h1>
      <div>
        <button
          onClick={
            isTokenSet
              ? () => navigate("/paymentSlipUser")
              : () => navigate("/paymentSlipCheckout")
          }
        >
          Boleto
        </button>
        <button
          onClick={
            isTokenSet
              ? () => navigate("/paymentCardUser")
              : () => navigate("/paymentCardCheckout")
          }
        >
          Cartão
        </button>
        {/* <button onClick={createPaymentSlipUser}>Boleto</button>
        <button onClick={createPaymentSlipUser}>Cartão</button> */}
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
}
