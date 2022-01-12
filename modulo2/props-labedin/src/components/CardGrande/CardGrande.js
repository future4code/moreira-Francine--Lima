import React from "react";
import "./CardGrandeStyle";
import { BigCardContainer, Imagen, Nome } from "./CardGrandeStyle";

// const styleCardGrande=styled.div

function CardGrande(props) {
  return (
    <BigCardContainer>
      <Imagen src={props.imagem} />
      <div>
        <Nome>{props.nome}</Nome>
        <p>{props.descricao}</p>
      </div>
    </BigCardContainer>
  );
}

export default CardGrande;
