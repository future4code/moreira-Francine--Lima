import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { base_Url } from "../../Constants/base_Url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export default function PaymentSlipUser() {
  useProtectedPage();
  const navigate = useNavigate();
  const createPaymentSlipUser = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: { authorization: token },
    };
    const body = "";
    console.log(token);
    axios
      .post(base_Url + "/user/boleto", body, headers)
      .then((res) => {
        navigate("/statusUserPaymentSlip");
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
      <h1>Confirmar pagamento</h1>
      <button onClick={createPaymentSlipUser}>
        Confirmar pagamento por boleto
      </button>
      
    </div>
  );
}
