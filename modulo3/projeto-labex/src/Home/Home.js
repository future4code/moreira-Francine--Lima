import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import background from "../img/background.jpg";

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: center;
  font-family: monospace;
  letter-spacing: 4px;
  justify-content: space-between;
`;
const FogueteImg = styled.img`
  height: 520px;
  width: 500px;
  border-radius: 50%;
`;
const ContainerButtonHome = styled.div`
  display: flex;
  height: 20px;
  text-align: center;
  margin: 24px;
  align-items: center;
`;
const ButtonHome = styled.button`
  font-size: 16px;
  letter-spacing: 2px;
  color: #31322e;
  cursor: pointer;
  border: 3px solid;
  margin: 20px;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
`;
const TitleHome = styled.div`
  margin: 8px;
  position: absolute;
  width: 500px;
  padding: 8px;
  font-size: 45px;
  border-radius: 50%;
  background-color: #2e3132;
  color: #fef0d6;
  font-weight: bold;
  text-align: center;
  p {
    margin: 10px;
    padding: 0;
  }
`;
function Home(props) {
  const navigate = useNavigate();
  const goToVerViagens = () => {
    navigate("/trips/list");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Homepage>
      <TitleHome>
        <p>LabeX</p>
      </TitleHome>
      <FogueteImg src={background} />
      <ContainerButtonHome>
        <ButtonHome onClick={goToVerViagens}>Ver viagens</ButtonHome>
        <ButtonHome onClick={goToLogin}>Área Admin</ButtonHome>
      </ContainerButtonHome>
    </Homepage>
  );
}

export default Home;
