import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";

export default function Home() {
  const navigate = useNavigate();
  const isTokenSet = localStorage.getItem("token");

  return (
    <div>
      <Header />
      <h1>Fazer checkout</h1>
      <button
        onClick={
          isTokenSet
            ? () => navigate("/paymentOptions")
            : () => navigate("/login")
        }
      >
        Realizar pagamento
      </button>
    </div>
  );
}
