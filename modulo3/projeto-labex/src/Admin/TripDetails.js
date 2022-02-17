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
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;
const token = localStorage.getItem("token");

function TripDetails(props) {
  const [trip, setTrip] = useState([]);
  const [tripDetailsCandidates, setTripDetailsCandidates] = useState([]);
  const [tripDetailsApprovedCandidate, setTripDetailsApprovedCandidate] =
    useState("");
  const [isApproved, setIsApproved] = useState(false);
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
    axios
      .get(`${getTripDetails}${id}`, {
        headers: { auth: token },
      })
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
  useEffect(() => {
    getDetailsTrips();
  }, [isApproved]);

  //Reprovar candidatos (deletar)
  // const deleteCandidato = (idCandidato) => {
  //   //deletar serviço desconsiderando a quantidade
  //   if (
  //     window.confirm("Tem certeza que deseja remover o candidato?") === true
  //   ) {
  //     const novoCarrinho = this.state.produtosNoCarrinho.filter((produto) => {
  //       if (idCandidato !== produto.id) {
  //         return produto;
  //       }
  //     });
  //     this.setState({ produtosNoCarrinho: novoCarrinho });
  //   } else {
  //     console.log("Cancelou");
  //   }
  // };
  ///maps para renderizar
  const listaDeViagens =
    trip &&
    trip.map((item) => {
      return (
        <div key={item.id}>
          <p>Trip id: {item.id}</p>
          <p>Nome: {item.name}</p>
          <p>Data: {item.date}</p>
          <p>Planeta: {item.planet}</p>
          <p>Duração: {item.durationInDays} dias</p>
          <p>Descrição: {item.description}</p>
        </div>
      );
    });

  const tripDetailCandidates =
    tripDetailsCandidates &&
    tripDetailsCandidates.map((detail) => {
      return (
        <div key={detail.id}>
          <p>Nome:{detail.name}</p>
          <p>Idade:{detail.age}</p>
          <p>Profissão:{detail.profession}</p>
          <p>País:{detail.country}</p>
          <p>Texto de aplicação:{detail.applicationText}</p>
          <button
            onClick={() => {
              putApprovedCandidate(detail.id);
            }}
          >
            Aprovar
          </button>
          <button>Reprovar</button>
          <hr></hr>
        </div>
      );
    });

  const tripDetailApprovedCandidate =
    tripDetailsApprovedCandidate &&
    tripDetailsApprovedCandidate.map((detail) => {
      return (
        <div key={detail.id}>
          <p>Candidato: {detail.name}</p>
        </div>
      );
    });
  return (
    <Page>
      <button onClick={goToAdminHome}>Voltar</button>
      <h1>Trip details</h1>
      {listaDeViagens}
      <MainContainer>
        <div>
          <h3>Candidatos Pendentes</h3>
          {tripDetailCandidates === undefined ? (
            <p>Loading...</p>
          ) : (
            tripDetailCandidates
          )}
        </div>
        <div>
          <h3>Candidatos Aprovados</h3>
          {tripDetailApprovedCandidate}
        </div>
      </MainContainer>
    </Page>
  );
}

export default TripDetails;
