import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTrip(props) {
  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };

  return (
    <div>
      <h1>LabeX</h1>
      <div>
        <p>Nome</p>
        <input type="text" placeholder="Nome" />
        <p>Descrição</p>
        <input type="text" placeholder="Descrição" />
        <div>
          <label>
            Escolha um planeta
            <select>
              <option>Marte</option>
              <option>Vênus</option>
              <option>Saturno</option>
              <option>Urano</option>
              <option>Júpiter</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Escolha uma data
            <select>
              <option>Marte</option>
              <option>Vênus</option>
              <option>Saturno</option>
              <option>Urano</option>
              <option>Júpiter</option>
            </select>
          </label>
        </div>
      </div>
      <button onClick={goToAdminHome}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
}

export default CreateTrip;
