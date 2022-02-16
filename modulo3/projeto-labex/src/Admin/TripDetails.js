// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { getTripDetails } from "../constants/constants";
// import { AdminHome } from "./AdminHome";
const Page = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;
function TripDetails(props) {
  // const [tripId, setTripId] = useState("");
  // const [trip, setTrip] = useState([]);

  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };

  //  setTrip(props.id)
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     axios
  //       .get(
  //         `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/:${tripId}}`,
  //         {
  //           headers: { auth: token },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         console.log(err.response);
  //       });
  //   }, []);
  console.log("nome", props.nome);
  console.log("propsId", props.tripId);
  return (
    <Page>
      <button onClick={goToAdminHome}>Voltar</button>
      <h1>Trip details</h1>
      <MainContainer>
        <div>
          <h3>Candidatos Pendentes</h3>
          {/* {props.nome === undefined ? <p>Loading...</p> : <p>{props.nome}</p>} */}
          <p>{props.nome}</p>
          <p>{props.age}</p>
          <p> {props.profession}</p>
          <p>{props.country}</p>
          <p>{props.applicationText}</p>
          {/* {props.id} */}
          <button>Aprovar</button>
          <button>Reprovar</button>
        </div>
        <div>
          <h3>Candidatos Aprovados</h3>

          {props.name ? (
            <p>{props.name}</p>
          ) : (
            <p>Não há nenhum candidato aprovado</p>
          )}
        </div>
      </MainContainer>
    </Page>
  );
}

export default TripDetails;
