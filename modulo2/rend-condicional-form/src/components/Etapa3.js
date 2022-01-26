import styled from "styled-components";
import React from "react";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ContainerOptions = styled.div`
  padding: 20px;
`;

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input />
          <p>6. Você fez algum curso complementar?</p>
          <ContainerOptions>
            <select>
              <option>Nenhum</option>
              <option>Curso técnico</option>
              <option>Curso de inglês</option>
            </select>
          </ContainerOptions>
        </MainContainer>
        ;
      </div>
    );
  }
}
