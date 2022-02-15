import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUrl } from "../constants/constants";
import React from "react";
import styled from "styled-components";
const ListTripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  color: black;
`;
const TripContainer = styled.div`
  border: 10px solid gainsboro;
  width: 400px;
`;
const TripsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  gap: 36px;
  height: fit-content;
  margin: 16px;
`;
function ListTrips() {
  const [tripsList, setTripsList] = useState([]);
  const [isListPrinted, setIsListPrinted] = useState(false);
  // Router
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToApplicationForm = () => {
    navigate("/trips/application");
  };
  //Axios get trips
  const getTrips = () => {
    axios
      .get(getUrl)
      .then((res) => {
        console.log("DadosTrips", res.data);
        // const novaListaTrips=[...tripsList,res.data.trips]
        //   setTripsList(novaListaTrips);
        setTripsList(res.data.trips);

        // setIsListPrinted(!isListPrinted);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);
  console.log("Constant tripslist", tripsList);

  const listaDeViagens =
    tripsList &&
    tripsList.map((item) => {
      return (
        <TripContainer key={item.id}>
          <p>Nome: {item.name}</p>
          <p>Data: {item.date}</p>
          <p>Planeta: {item.planet}</p>
          <p>Duração: {item.durationInDays} dias</p>
          <p>Descrição: {item.description}</p>
        </TripContainer>
      );
    });
  console.log("Lista de viagens", listaDeViagens);

  return (
    <ListTripsContainer>
      <button onClick={goToHome}>Voltar para home</button>
      <p>ListTrips</p>
      <button onClick={goToApplicationForm}>Application form</button>
      <TripsContainer>{listaDeViagens}</TripsContainer>
    </ListTripsContainer>
  );
}

export default ListTrips;
