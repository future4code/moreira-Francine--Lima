import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };
  return (
    <Page>
      <button onClick={goToAdminHome}>Voltar</button>
      <h1>Trip details</h1>
      <MainContainer>
        <div>
          <h3>Candidatos Pendentes</h3>
          <ul>
            <li> joão</li>
            <li> fran</li>
            <li> carla</li>
          </ul>
          <button>Aprovar</button>
          <button>Reprovar</button>
        </div>
        <div>
          <h3>Candidatos Aprovados</h3>
          <ul>
            <li> joão</li>
            <li> fran</li>
            <li> carla</li>
          </ul>
        </div>
      </MainContainer>
    </Page>
  );
}

export default TripDetails;
