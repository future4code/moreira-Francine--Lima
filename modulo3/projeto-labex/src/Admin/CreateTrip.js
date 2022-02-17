import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUrl } from "../constants/constants";
import { useProtectedPage } from "../Hooks/useProtectedPage";
function CreateTrip(props) {
  const [planet, setPlanet] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [durationInDays, setDurationInDays] = useState("");
  useProtectedPage();
  //Router
  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };
  const onChangePlanet = (e) => {
    setPlanet(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeDurationInDays = (e) => {
    setDurationInDays(e.target.value);
  };
  // console.log(name,description,date,planet)
  const createTrip = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays,
    };
    const token = localStorage.getItem("token");
    axios
      .post(postUrl, body, {
        headers: {
          auth: token,
          Authorization: "Content-Type: application/json",
        },
      })
      .then((res) => {
        setName("");
        setDate("");
        setPlanet("");
        setDescription("");
        setDurationInDays("");

        alert(`Viagem criada com sucesso ${"\u2728"}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>LabeX</h1>
      <div>
        <p>Nome</p>
        <input
          value={name}
          onChange={onChangeName}
          type="text"
          placeholder="Nome"
        />
        <p>Descrição</p>
        <input
          value={description}
          onChange={onChangeDescription}
          type="text"
          placeholder="Descrição"
        />
        <div>
          <label>
            Escolha um planeta
            <select value={planet} onChange={onChangePlanet}>
              <option value="Marte">Marte</option>
              <option value="Vênus">Vênus</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Júpiter">Júpiter</option>
              <option value="Terra">Terra</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Escolha uma data
            <input type="date" value={date} onChange={onChangeDate} />
          </label>
        </div>
        <div>
          <label>
            Duração da viagem
            <input
              type="number"
              value={durationInDays}
              onChange={onChangeDurationInDays}
            />
          </label>
        </div>
      </div>
      <button onClick={goToAdminHome}>Voltar</button>
      <button onClick={createTrip}>Enviar</button>
    </div>
  );
}

export default CreateTrip;
