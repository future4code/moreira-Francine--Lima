import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getTripDetails } from "../constants/constants";
import { useProtectedPage } from "../Hooks/useProtectedPage";
const Page = styled.div`
  display: flex;
  flex-direction: column;
  font-family: monospace;
  button {
    margin: 10px;
    align-self: center;
    width: 1000px;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: black;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      4px 4px 0px 0px, 5px 5px 0px 0px;
  }
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const ContainerCardTrip = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 480px;
  height: 250px;
  background-color: #efefef;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  p {
    font-size: 14px;
    padding: 0 6px;
  }
  button {
    align-self: center;
    justify-self: center;
    margin: 10px 20px;
    width: 104px;
    font-size: 12px;
  }
  div {
    height: fit-content;
  }
`;
const ContainerCardTripsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 250px;
  background-color: #efefef;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  p {
    font-size: 14px;
    padding: 0 6px;
  }
  button {
    align-self: center;
    justify-self: center;
    margin: 10px 20px;
    width: 104px;
    font-size: 12px;
  }
  div {
    height: fit-content;
  }
`;

const ContainerTrips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const token = localStorage.getItem("token");
function TripDetails(props) {
  const [trip, setTrip] = useState([]);
  const [tripDetailsCandidates, setTripDetailsCandidates] = useState([]);
  const [tripDetailsApprovedCandidate, setTripDetailsApprovedCandidate] =
    useState("");
  const [isApproved, setIsApproved] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const { id } = useParams();
  useProtectedPage();

  //Router
  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };

  console.log("id", id);

  //Get trips Axios

  const getDetailsTrips = () => {
    const header = { headers: { auth: token } };
    axios
      .get(`${getTripDetails}${id}`, header)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.trip.approved);
        setTrip([res.data.trip]);
        console.log(res.data.trip.candidates);
        setTripDetailsCandidates(res.data.trip.candidates);
        setTripDetailsApprovedCandidate(res.data.trip.approved);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //put para aprovar candidatos
  const putApprovedCandidate = (Id) => {
    const putUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/francine/trips/${id}/candidates/${Id}/decide`;
    const putHeaders = {
      headers: {
        auth: token,
        Authorization: "Content-Type: application/json",
      },
    };
    const body = {
      approve: true,
    };

    axios
      .put(putUrl, body, putHeaders)
      .then((res) => {
        console.log(res.data);
        setIsApproved(!isApproved);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Reprovar candidatos (deletar)
  const reproveCandidate = (Id) => {
    const putUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/francine/trips/${id}/candidates/${Id}/decide`;
    const putHeaders = {
      headers: {
        auth: token,
        Authorization: "Content-Type: application/json",
      },
    };
    const body = {
      approve: false,
    };

    axios
      .put(putUrl, body, putHeaders)
      .then((res) => {
        console.log(res.data);
        alert("Aplicação deletada com sucesso.");
        setIsDeleted(!isDeleted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(
    () => {
      getDetailsTrips();
    },
    [isApproved],
    [isDeleted]
  );

  ///maps para renderizar
  const listaDeViagens =
    trip &&
    trip.map((item) => {
      return (
        <ContainerCardTripsList key={item.id}>
          {/* <p>Trip id: {item.id}</p> */}
          <p>{item.name}</p>
          <p>Data: {item.date}</p>
          <p>Planeta: {item.planet}</p>
          <p>Duração: {item.durationInDays} dias</p>
          <p>Descrição: {item.description}</p>
        </ContainerCardTripsList>
      );
    });

  const tripDetailCandidates =
    tripDetailsCandidates &&
    tripDetailsCandidates.map((detail) => {
      return (
        <ContainerCardTrip key={detail.id}>
          <p>Nome:{detail.name}</p>
          <p>Idade:{detail.age}</p>
          <p>Profissão:{detail.profession}</p>
          <p>País:{detail.country}</p>
          <p>
            Texto de aplicação:<div>{detail.applicationText}</div>
          </p>
          <button
            onClick={() => {
              putApprovedCandidate(detail.id);
            }}
          >
            Aprovar
          </button>
          <button
            onClick={() => {
              reproveCandidate(detail.id);
            }}
          >
            Reprovar
          </button>
        </ContainerCardTrip>
      );
    });

  const tripDetailApprovedCandidate =
    tripDetailsApprovedCandidate &&
    tripDetailsApprovedCandidate.map((detail) => {
      return (
        <div key={detail.id}>
          <p>{detail.name}</p>
        </div>
      );
    });
  console.log(tripDetailCandidates);
  return (
    <Page>
      <button onClick={goToAdminHome}>Voltar</button>
      <ContainerTrips>
        <h1>Detalhes da viagem</h1>
        {listaDeViagens ? listaDeViagens : <p>Loading...</p>}
      </ContainerTrips>
      <MainContainer>
        <div>
          <h3>Candidatos Pendentes</h3>
          {tripDetailCandidates.length > 0 ? (
            tripDetailCandidates
          ) : (
            <p>Não há candidatos para mostrar.</p>
          )}
        </div>
        <div>
          <h3>Candidatos Aprovados</h3>
          <ContainerCardTrip>
            {tripDetailApprovedCandidate.length > 0 ? (
              tripDetailApprovedCandidate
            ) : (
              <p>Não há candidatos para mostrar.</p>
            )}
          </ContainerCardTrip>
        </div>
      </MainContainer>
    </Page>
  );
}

export default TripDetails;
