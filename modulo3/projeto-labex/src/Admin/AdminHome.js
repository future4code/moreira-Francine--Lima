import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminHome(props) {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToDetails = () => {
    navigate("/admin/trips/:id");
  };
  const goToCreateTrip = () => {
    navigate("/admin/trips/create");
  };
  return (
    <div>
      <button onClick={goToHome}>Voltar para home</button>
      <h1>LabeX</h1>
      <button onClick={goToCreateTrip}>Create Trip</button>
      <div>
        <ol>
          <li>Asddsdf</li>
          <li>Asddsdf</li>
          <li>Asddsdf</li>
          <li>Asddsdf</li>
        </ol>
        <button onClick={goToDetails}>Ver detalhes</button>
        <button>Deletar</button>
      </div>
    </div>
  );
}
//  <button>Aprovado</button>
//       <button>Reprovado</button>
export default AdminHome;
