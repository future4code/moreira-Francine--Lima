import { useNavigate } from "react-router-dom";
import { getUrl } from "../constants/constants";
import React from "react";
import styled from "styled-components";
import { useGetTrips } from "../Hooks/useGetTrips";
import Header from "../Header/Header";
import astronaut from "../img/astronaut.jpg";

const ListTripsContainer = styled.div`
  font-family: monospace;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
`;
const TripContainer = styled.div`
  width: 400px;
  height: 320px;
  margin: 16px;
  background-color: #efefef;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;

  h2,
  p {
    padding: 4px;
    margin: 6px 20px;
  }
`;
const TripsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  gap: 36px;
  height: fit-content;
  margin: 16px;
`;
const ImageCard = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
`;
const ButtonApply = styled.button`
  margin: 76px;
  width: 1000px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
`;
function ListTrips() {
  // // Router
  const navigate = useNavigate();
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
          <div>
            <ImageCard src={astronaut} alt="Avatar" />
            {/* <p>Trip id: {item.id}</p> */}
            <h2>{item.name}</h2>
            <p>Planeta: {item.planet}</p>
            <p>Data: {item.date}</p>
            <p>Duração: {item.durationInDays} dias</p>
            <p>
              Descrição: <div>{item.description}</div>
            </p>
          </div>
        </TripContainer>
      );
    });

  return (
    <div>
      <Header />
      <ListTripsContainer>
        <h1>Viagens</h1>
        <ButtonApply onClick={goToApplicationForm}>Inscreva-se</ButtonApply>

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
    </div>
  );
}

export default ListTrips;
