import styled from "styled-components";
import React from "react";

const ContainerTelaFinal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <ContainerTelaFinal>
          <h1>O FORMULÁRIO ACABOU</h1>
          <h3>Muito obrigado por participar! Entraremos em contato!</h3>
        </ContainerTelaFinal>
        ;
      </div>
    );
  }
}
