import styled from "styled-components";
import React from "react";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <p>1. Qual o seu nome?</p>
          <input />
          <p>2. Qual sua idade?</p>
          <input />
          <p>3. Qual seu email?</p>
          <input />
          <p>4. Qual a sua escolaridade?</p>
          <div>
            <select>
              <option>Ensino médio incompleto</option>
              <option>Ensino médio completo</option>
              <option>Ensino superior incompleto</option>
              <option>Ensino superior completo</option>
            </select>
          </div>
        </MainContainer>
        ;
      </div>
    );
  }
}
