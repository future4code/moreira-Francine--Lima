import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplicationForm(props) {
  const navigate = useNavigate();
  const goToListTrips = () => {
    navigate("/trips/list");
  };
  return (
    <div>
      <p>ApplicationForm</p>
      <label>
        <p> Escolha uma viagem</p>
        <select>
          <option>Marte</option>
          <option>Marte</option>
          <option>Marte</option>
        </select>
      </label>
      <p>Nome</p>
      <input />
      <p>Email</p>
      <input />
      <p>Texto para aplicação</p>
      <input />
      <p>Profissão</p>
      <input />
      <div>
        <label>
          <p>Escolha um país</p>
          <select>
            <option>Brasil</option>
            <option>Alemanha</option>
            <option>Coréia do Sul</option>
          </select>
        </label>
      </div>
      <button onClick={goToListTrips}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
}

export default ApplicationForm;
