import styled from "styled-components";
import React from "react";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
          <p>5. Qual curso?</p>
          <input />
          <p>6. Qual a unidade de ensino?</p>
          <input />
        </MainContainer>
        ;
      </div>
    );
  }
}
