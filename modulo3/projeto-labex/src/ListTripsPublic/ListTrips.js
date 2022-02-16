import { useNavigate } from "react-router-dom";
import { getUrl } from "../constants/constants";
import React from "react";
import styled from "styled-components";
import { useGetTrips } from "../Hooks/useGetTrips";
const ListTripsContainer = styled.div`
  display: flex;
  flex-direction: column;

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
  // // Router
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToApplicationForm = () => {
    navigate("/trips/application");
  };

  // //Axios Custom Hook get trips
  const tripsList = useGetTrips(getUrl);

  //Map da lista
  const listaDeViagens =
    tripsList &&
    tripsList.map((item) => {
      return (
        <TripContainer key={item.id}>
          <p>Trip id: {item.id}</p>
          <p>Nome: {item.name}</p>
          <p>Data: {item.date}</p>
          <p>Planeta: {item.planet}</p>
          <p>Duração: {item.durationInDays} dias</p>
          <p>Descrição: {item.description}</p>
        </TripContainer>
      );
    });

  return (
    <ListTripsContainer>
      <button onClick={goToHome}>Voltar para home</button>
      <h2>ListTrips</h2>

      <button onClick={goToApplicationForm}>Application form</button>
      <TripsContainer>
        {tripsList.length > 0 ? (
          listaDeViagens
        ) : (
          <iframe
            src="https://giphy.com/embed/Qc8UoA7NJqx70SfiCL"
            width="480"
            height="240"
           
            frameBorder="0"
            title="loading"
            allowFullScreen
          ></iframe>
        )}
      </TripsContainer>
    </ListTripsContainer>
  );
}

export default ListTrips;
